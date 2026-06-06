import { mockVillas } from '../data/villas.js';

/**
 * Client-side NLP query matching engine for Luxuria villas.
 * Parses user messages for key concepts, pricing clues, and capacity requirements.
 * Scores the available villas and returns the top 1-2 recommended properties
 * along with a conversational explanation of the choice.
 * 
 * @param {string} message - The user query message
 * @returns {Object} { text: string, recommendations: Array }
 */
export function matchConciergeQuery(message) {
  if (!message || typeof message !== 'string') {
    return {
      text: "Hola. ¿Qué tipo de experiencia, destino o comodidades estás buscando para tu próxima estancia de lujo?",
      recommendations: []
    };
  }

  // Tokenize and clean message
  const cleanMessage = message.toLowerCase();
  
  // Scoring map for each villa
  const scores = {};
  mockVillas.forEach(v => {
    scores[v.id] = 0;
  });

  // 1. Capacity clue parsing
  let capacityNeeded = null;
  
  // Look for patterns like: "X personas", "grupo de X", "para X", etc.
  const capacityPatterns = [
    /(\d+)\s*(personas|huéspedes|huespedes|guests?|pax)/,
    /grupo\s+de\s+(\d+)/,
    /para\s+(\d+)/
  ];

  for (const pattern of capacityPatterns) {
    const match = cleanMessage.match(pattern);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num > 0 && num <= 30) {
        capacityNeeded = num;
        break;
      }
    }
  }

  // Fallback: search for any standalone number between 1 and 20 if no pattern matches
  if (capacityNeeded === null) {
    const numbers = cleanMessage.match(/\b(\d+)\b/g);
    if (numbers) {
      for (const numStr of numbers) {
        const num = parseInt(numStr, 10);
        if (num >= 1 && num <= 20) {
          capacityNeeded = num;
          break;
        }
      }
    }
  }

  // 2. Semantic concepts mapping
  const concepts = {
    wellness: {
      keywords: ['wellness', 'bienestar', 'relaxation', 'relajación', 'relajacion', 'spa', 'sauna', 'relax', 'calm', 'calma', 'rejuvenation', 'rejuvenecer', 'meditación', 'meditacion', 'healing', 'paz', 'peace'],
      villas: [
        { id: 1, weight: 3 }, // Villa Sereno (Amalfi)
        { id: 3, weight: 2 }, // Jungle Sanctuary (Bali)
        { id: 5, weight: 1 }  // Katsura Retreat (Kyoto)
      ]
    },
    sea: {
      keywords: ['sea', 'mar', 'playa', 'ocean', 'oceano', 'océano', 'coast', 'costa', 'beach', 'beachfront', 'vistas al mar', 'ocean view', 'mediterraneo', 'mediterráneo'],
      villas: [
        { id: 1, weight: 3 }, // Villa Sereno (Amalfi)
        { id: 6, weight: 3 }  // Es Vedrà Estate (Ibiza)
      ]
    },
    adventure: {
      keywords: ['adventure', 'aventura', 'snow', 'nieve', 'mountain', 'montaña', 'montana', 'ski', 'esqui', 'esquí', 'alpine', 'alpino', 'chalet', 'climb', 'hike', 'senderismo', 'slopes', 'pistas', 'matterhorn', 'zermatt'],
      villas: [
        { id: 2, weight: 4 } // Glass Chalet (Zermatt)
      ]
    },
    nature: {
      keywords: ['nature', 'naturaleza', 'zen', 'forest', 'bosque', 'jungle', 'selva', 'canopy', 'trees', 'arboles', 'árboles', 'bamboo', 'bambú', 'tropical', 'verde', 'green'],
      villas: [
        { id: 3, weight: 4 }, // Jungle Sanctuary (Bali)
        { id: 5, weight: 2 }  // Katsura Retreat (Kyoto)
      ]
    },
    isolation: {
      keywords: ['isolation', 'aislamiento', 'desert', 'desierto', 'modern', 'moderno', 'concrete', 'hormigon', 'hormigón', 'brutalist', 'brutalista', 'canyon', 'cañón', 'cañon', 'remote', 'remoto', 'quiet', 'silencio', 'utah', 'oasis'],
      villas: [
        { id: 4, weight: 4 } // Amangiri Oasis (Utah)
      ]
    },
    culture: {
      keywords: ['culture', 'cultura', 'heritage', 'patrimonio', 'tradition', 'tradición', 'tradicion', 'tea', 'té', 'ceremonia', 'ceremony', 'tatami', 'temple', 'templo', 'artisan', 'artesano', 'historia', 'historico', 'histórico', 'kyoto', 'japan', 'japon', 'japón'],
      villas: [
        { id: 5, weight: 4 } // Katsura Retreat (Kyoto)
      ]
    },
    social: {
      keywords: ['social', 'celebration', 'celebración', 'sunset', 'atardecer', 'party', 'fiesta', 'music', 'música', 'musica', 'vip', 'friends', 'amigos', 'dance', 'bailar', 'dj', 'sound', 'sonido', 'grupo', 'celebrar', 'ibiza'],
      villas: [
        { id: 6, weight: 4 }, // Es Vedrà Estate (Ibiza)
        { id: 1, weight: 2 }  // Villa Sereno (Amalfi)
      ]
    }
  };

  // Evaluate message matches against semantic concepts
  let matchedConcepts = [];
  for (const [conceptName, group] of Object.entries(concepts)) {
    const isMatched = group.keywords.some(keyword => cleanMessage.includes(keyword));
    if (isMatched) {
      matchedConcepts.push(conceptName);
      group.villas.forEach(match => {
        scores[match.id] += match.weight;
      });
    }
  }

  // 3. Match explicit destinations or villa names
  mockVillas.forEach(villa => {
    // Check keywords list from villa data
    if (villa.keywords) {
      villa.keywords.forEach(kw => {
        if (cleanMessage.includes(kw.toLowerCase())) {
          scores[villa.id] += 2;
        }
      });
    }

    // Check location match (e.g. "amalfi", "zermatt", "bali", "utah", "kyoto", "ibiza")
    const locationPart = villa.location.toLowerCase().split(',')[0].trim();
    if (cleanMessage.includes(locationPart)) {
      scores[villa.id] += 4;
    }

    // Check name match words
    const nameWords = villa.name.toLowerCase().split(' ');
    nameWords.forEach(word => {
      if (word.length > 3 && cleanMessage.includes(word)) {
        scores[villa.id] += 4;
      }
    });
  });

  // 4. Capacity scoring influence
  if (capacityNeeded !== null) {
    mockVillas.forEach(villa => {
      if (capacityNeeded <= villa.capacity) {
        // Villa is big enough: increase score
        scores[villa.id] += 4;
        
        // Closest match gets an extra perfect fit bonus
        if (villa.capacity - capacityNeeded <= 2) {
          scores[villa.id] += 2;
        }
      } else {
        // Group is too large for this villa: heavy penalty
        scores[villa.id] -= 10;
      }
    });
  }

  // 5. Pricing clue parsing
  const cheapKeywords = ['barato', 'economico', 'económico', 'barata', 'economica', 'económica', 'low price', 'cheap', 'accesible', 'cómodo', 'comodo', 'módico', 'modico', 'precio bajo'];
  const expensiveKeywords = ['caro', 'exclusivo', 'lujoso', 'luxury', 'exclusive', 'expensive', 'premium', 'top', 'alto standing', 'costoso'];

  const isCheapRequested = cheapKeywords.some(kw => cleanMessage.includes(kw));
  const isExpensiveRequested = expensiveKeywords.some(kw => cleanMessage.includes(kw));

  if (isCheapRequested) {
    mockVillas.forEach(villa => {
      if (villa.price <= 3100) {
        scores[villa.id] += 3;
      } else if (villa.price <= 3500) {
        scores[villa.id] += 1;
      } else {
        scores[villa.id] -= 3;
      }
    });
  }

  if (isExpensiveRequested) {
    mockVillas.forEach(villa => {
      if (villa.price >= 4200) {
        scores[villa.id] += 3;
      } else if (villa.price >= 3900) {
        scores[villa.id] += 1;
      } else {
        scores[villa.id] -= 2;
      }
    });
  }

  // 6. Select recommended villas
  // Convert scoring map to sorted list
  const scoredVillas = mockVillas
    .map(villa => ({ villa, score: scores[villa.id] }))
    .sort((a, b) => b.score - a.score);

  let recommendations = [];
  
  // If the top scored villa has a positive matching score, recommend it
  if (scoredVillas[0].score > 0) {
    recommendations.push(scoredVillas[0].villa);
    
    // Add secondary recommendation if its score is also positive and reasonably close (within 4 points)
    if (scoredVillas[1] && scoredVillas[1].score > 0 && (scoredVillas[0].score - scoredVillas[1].score <= 4)) {
      recommendations.push(scoredVillas[1].villa);
    }
  } else {
    // Fallback: If no concepts/keywords match explicitly, recommend Villa Sereno (Amalfi) and Jungle Sanctuary (Bali) as standard luxury escapes
    recommendations = [mockVillas[0], mockVillas[2]];
  }

  // Ensure maximum of 2 recommendations
  recommendations = recommendations.slice(0, 2);

  // 7. Assemble the AI Conversational Rationale Response (in elegant Spanish)
  let responseText = "";

  if (capacityNeeded !== null) {
    responseText += `He filtrado nuestras propiedades para asegurar espacio óptimo para tu grupo de **${capacityNeeded} personas**. `;
  }

  if (isCheapRequested) {
    responseText += `Buscando entre nuestras exclusivas propiedades que ofrecen una excelente relación valor-lujo, `;
  } else if (isExpensiveRequested) {
    responseText += `Buscando entre nuestras villas de ultra-lujo y máxima distinción, `;
  }

  if (matchedConcepts.length > 0) {
    const conceptTranslations = {
      wellness: "bienestar y spa privado",
      sea: "vistas al océano y cercanía al mar",
      adventure: "aventura y paisajes alpinos",
      nature: "contacto íntimo con la naturaleza y bosques",
      isolation: "privacidad absoluta y diseño modernista",
      culture: "inmersión cultural y paz tradicional",
      social: "celebración, atardeceres y entretenimiento exclusivo"
    };
    const translatedConcepts = matchedConcepts.map(c => conceptTranslations[c] || c);
    
    // Join with commas and "y"
    const conceptsStr = translatedConcepts.length === 1
      ? translatedConcepts[0]
      : translatedConcepts.slice(0, -1).join(', ') + ' y ' + translatedConcepts[translatedConcepts.length - 1];
    
    responseText += `centrándome en tu interés por experiencias de **${conceptsStr}**: \n\n`;
  } else {
    responseText += `he seleccionado las siguientes villas de nuestra colección premium que se adaptan mejor a tu perfil: \n\n`;
  }

  const v1 = recommendations[0];
  const v2 = recommendations[1];

  // Specific bespoke rationale for each villa to explain *why* it matches
  const rationales = {
    1: "Es un santuario idílico sobre los acantilados. Te la recomiendo porque fusiona un spa orgánico privado, jardines mediterráneos y una piscina infinita suspendida entre el cielo y el mar, ideal para recuperar energías en un entorno sanador.",
    2: "Es la joya alpina de Zermatt. Sus imponentes ventanales de cristal te regalan vistas en primera fila al Matterhorn. Es la elección indiscutible si buscas combinar el calor de una chimenea de piedra con el esquí de clase mundial.",
    3: "Es un refugio de diseño abierto inmerso en el follaje balinés. Destaca por su piscina forestal y su propio shala de yoga, ideal para quienes buscan una desconexión total rodeados de naturaleza pura y cantos de aves exóticas.",
    4: "Representa el epítome del aislamiento del desierto. Su soberbia arquitectura brutalista de concreto crudo contrasta con las formaciones de roca roja. Es idónea para observar constelaciones en su deck de astronomía y gozar de privacidad absoluta.",
    5: "Es un homenaje sublime al patrimonio cultural de Kyoto. Su tradicional jardín zen de piedra, el baño Hinoki de madera perfumada y el pabellón de ceremonia de té privado ofrecen una atmósfera de profunda serenidad y conexión espiritual.",
    6: "Es el epicentro de la sofisticación y vida social en Ibiza. Diseñada para celebrar y compartir con amigos, cuenta con un imponente deck para atardeceres, sistema de sonido profesional y vistas espectaculares al místico peñón de Es Vedrà."
  };

  responseText += `• **${v1.name}** (${v1.location}): ${rationales[v1.id] || v1.description}\n\n`;

  if (v2) {
    responseText += `• **${v2.name}** (${v2.location}): ${rationales[v2.id] || v2.description}\n\n`;
  }

  responseText += "¿Te gustaría que verifiquemos disponibilidad o te interesa conocer algún detalle adicional de estas opciones?";

  return {
    text: responseText,
    recommendations
  };
}
