/**
 * Translation Service for Luxuria
 * Holds the localized UI dictionaries and provides translation resolution helper functions.
 */

export const translations = {
  es: {
    nav: {
      villas: "Villas",
      experiences: "Experiencias",
      concierge: "Conserje",
      bookings: "Reservas",
      about: "Nosotros"
    },
    filters: {
      all: "Todos",
      wellness: "Bienestar",
      adventure: "Aventura",
      nature: "Naturaleza",
      isolation: "Aislamiento",
      culture: "Cultura",
      social: "Social",
      maxPrice: "Precio Máximo",
      guests: "Huéspedes",
      searchPlaceholder: "Buscar por nombre, destino o palabras clave...",
      apply: "Aplicar Filtros",
      reset: "Restablecer",
      searchLabel: "Búsqueda",
      environmentLabel: "Entorno",
      anyEnvironment: "Cualquier entorno",
      coast: "Costa",
      mountain: "Montaña",
      countryside: "Campo",
      maxPriceLabel: "Precio máx",
      noLimit: "Sin límite",
      guestsLabel: "Huéspedes",
      anyGuests: "Cualquier número",
      guestsCountOption: "{count}+ personas"
    },
    guestsOptions: {
      any: "Cualquier capacidad",
      guestsCount: "{count} huéspedes",
      oneGuest: "1 huésped",
      twoGuests: "2 huéspedes",
      fourOrMore: "4+ huéspedes",
      sixOrMore: "6+ huéspedes",
      eightOrMore: "8+ huéspedes"
    },
    pricePlaceholder: "Cualquier precio",
    villaDetails: {
      perNight: "por noche",
      capacity: "Capacidad",
      guests: "huéspedes",
      amenities: "Comodidades Premium",
      bookingTitle: "Reservar esta Villa",
      seasonalEvents: "Eventos Estacionales",
      weatherTitle: "El Clima Local",
      currentWeather: "Clima Actual",
      forecast: "Pronóstico de 3 Días",
      recommended: "Recomendada",
      tabs: {
        details: "Detalles",
        weather: "Clima",
        location: "Ubicación",
        events: "Eventos",
        sound: "Sonido",
        soundtrack: "Banda sonora",
        transfers: "Traslados",
        blueprints: "Planos"
      },
      transfers: {
        title: "Calculadora de Traslados de Lujo",
        subtitle: "Planifique su llegada en transporte privado",
        departure: "Punto de Partida",
        selectDeparture: "Seleccionar origen...",
        vehicle: "Tipo de Vehículo",
        helicopter: "Helicóptero",
        yacht: "Yate",
        limousine: "Limusina",
        distance: "Distancia",
        duration: "Tiempo de Viaje",
        calculate: "Calcular Tarifa",
        estimatedCost: "Costo Estimado",
        currency: "EUR",
        airportOption: "Aeropuerto: {name} ({dist} km)",
        portOption: "Puerto: {name} ({dist} km)"
      },
      blueprints: {
        title: "Planos Arquitectónicos",
        subtitle: "Detalles estructurales y especificaciones técnicas de la propiedad",
        commitLogTitle: "Registro de Modificaciones / Hitos de Obra",
        author: "Autor",
        date: "Fecha",
        hash: "Hash",
        message: "Detalle de Obra"
      },
      mapTitle: "Mapa de la Propiedad",
      eventTitle: "Eventos de Temporada"
    },
    forms: {
      fullName: "Nombre Completo",
      email: "Correo Electrónico",
      checkIn: "Fecha de Entrada",
      checkOut: "Fecha de Salida",
      submit: "Confirmar Reserva",
      cancel: "Cancelar",
      success: "¡Reserva realizada con éxito!",
      error: "Por favor, completa todos los campos correctamente.",
      dateError: "La fecha de salida debe ser posterior a la de entrada.",
      bookingError: "Error al registrar la reserva. Inténtelo de nuevo.",
      submitRequest: "Confirmar Solicitud",
      requestConsultation: "Reservar Consulta",
      requestTitle: "Solicitar Consulta",
      ctaDescription: "¿Listo para experimentar un nivel de lujo sin precedentes?",
      refId: "ID de Referencia",
      villaLabel: "Villa",
      guestLabel: "Huésped",
      checkInLabel: "Entrada",
      checkOutLabel: "Salida",
      successDescription: "Su solicitud de consulta de lujo ha sido recibida. Nos pondremos en contacto a la brevedad para finalizar su estadía.",
      statusLabel: "Estado de Consulta"
    },
    bookingStatus: {
      pending: "Pendiente",
      confirmed: "Confirmado",
      cancelled: "Cancelado"
    },
    sidebar: {
      title: "Conserje Virtual",
      subtitle: "Asistente Personal de Lujo",
      onlineStatus: "En línea",
      inputPlaceholder: "Escribe tu solicitud aquí...",
      send: "Enviar"
    },
    footer: {
      copyright: "© 2026 Luxuria. Todos los derechos reservados. Experiencias de Ultra-Lujo."
    },
    portada: {
      eyebrow: "Exclusividad Absoluta",
      subtitle: "El arte de vivir en la cumbre del lujo",
      cta: "Comenzar Exploración",
      scroll: "Desplazar para explorar"
    },
    hero: {
      eyebrow: "Colección Exclusiva",
      title: "Residencias Extraordinarias",
      subtitle: "Encuentre su refugio ideal en una selección curada de las propiedades privadas más sofisticadas y lujosas del planeta.",
      cta: "Explorar Propiedades"
    },
    bookingsPanel: {
      eyebrow: "Mis Reservas",
      title: "Solicitudes Activas",
      subtitle: "Revise el estado de sus consultas exclusivas y reservas en curso administradas por nuestro concierge.",
      emptyState: "No cuenta con solicitudes de reserva activas en este momento.",
      exploreBtn: "Explorar Colección",
      colProperty: "Propiedad",
      colGuest: "Huésped",
      colDates: "Fechas",
      colStatus: "Estado",
      guestDefault: "Invitado de Honor",
      dateSeparator: " al ",
      statusConfirmed: "Confirmada",
      statusPending: "Petición recibida"
    },
    experiences: {
      eyebrow: "Servicios Concierge",
      title: "Experiencias a la Carta",
      subtitle: "Diseñamos momentos a medida y servicios exclusivos para que su estancia sea tan sublime como inolvidable.",
      requestBtn: "Solicitar Servicio",
      items: [
        {
          title: "Helicóptero Privado",
          description: "Vuelos panorámicos y traslados exclusivos para descubrir el mundo desde las alturas con absoluta comodidad.",
          badge: "Aire"
        },
        {
          title: "Chef a Domicilio",
          description: "Disfrute de la alta gastronomía con estrella Michelin adaptada a sus gustos en la privacidad de su propia villa.",
          badge: "Gastronomía"
        },
        {
          title: "Experiencia de Spa",
          description: "Tratamientos holísticos privados y masajes terapéuticos diseñados para una renovación mental y corporal absoluta.",
          badge: "Bienestar"
        },
        {
          title: "Yates de Lujo",
          description: "Navegación exclusiva por calas vírgenes y playas recónditas a bordo de embarcaciones de máximo nivel.",
          badge: "Mar"
        }
      ]
    },
    soundPlayer: {
      play: "Reproducir",
      pause: "Pausar",
      volume: "Volumen",
      mute: "Silenciar",
      unmute: "Activar sonido",
      nowPlaying: "Reproduciendo ahora",
      track: "Pista",
      type: "Tipo",
      description: "Descripción",
      ambientSounds: "Sonidos Ambientales"
    },
    clubPrive: {
      welcomeTitle: "Luxuria Club Privé",
      subtext: "Únase a nuestro exclusivo círculo para recibir invitaciones privadas, tarifas especiales y accesos anticipados a residencias extraordinarias.",
      inputPlaceholder: "Correo electrónico o número de teléfono",
      submitButton: "Unirse al Club",
      successMessage: "¡Bienvenido al Club Privé! Pronto recibirá nuestras comunicaciones exclusivas.",
      errorMessage: "Por favor, introduzca un correo o teléfono válido.",
      reflectionTitle: "Su Perfil de Viaje Exclusivo",
      reflectionSubtitle: "Análisis personalizado de preferencias",
      reflectionCard: {
        title: "Invitación de Miembro",
        status: "Estado: Activo",
        memberSince: "Miembro desde: Hoy",
        benefits: "Beneficios premium activados"
      }
    },
    memoryGraph: {
      title: "Memoria de Interacción",
      emptyState: "No hay datos de interacción suficientes para trazar su perfil. Explore nuestras villas o realice una búsqueda para comenzar.",
      destination: "Destino",
      budget: "Presupuesto",
      groupSize: "Tamaño del Grupo",
      theme: "Tema de Interés",
      interests: "Intereses",
      nodes: "Nodos de Memoria",
      connections: "Conexiones del Historial"
    }
  },
  en: {
    nav: {
      villas: "Villas",
      experiences: "Experiences",
      concierge: "Concierge",
      bookings: "Bookings",
      about: "About Us"
    },
    filters: {
      all: "All",
      wellness: "Wellness",
      adventure: "Adventure",
      nature: "Nature",
      isolation: "Isolation",
      culture: "Culture",
      social: "Social",
      maxPrice: "Max Price",
      guests: "Guests",
      searchPlaceholder: "Search by name, destination or keywords...",
      apply: "Apply Filters",
      reset: "Reset",
      searchLabel: "Search",
      environmentLabel: "Environment",
      anyEnvironment: "Any environment",
      coast: "Coast",
      mountain: "Mountain",
      countryside: "Countryside",
      maxPriceLabel: "Max Price",
      noLimit: "No limit",
      guestsLabel: "Guests",
      anyGuests: "Any number",
      guestsCountOption: "{count}+ guests"
    },
    guestsOptions: {
      any: "Any capacity",
      guestsCount: "{count} guests",
      oneGuest: "1 guest",
      twoGuests: "2 guests",
      fourOrMore: "4+ guests",
      sixOrMore: "6+ guests",
      eightOrMore: "8+ guests"
    },
    pricePlaceholder: "Any price",
    villaDetails: {
      perNight: "per night",
      capacity: "Capacity",
      guests: "guests",
      amenities: "Premium Amenities",
      bookingTitle: "Book this Villa",
      seasonalEvents: "Seasonal Events",
      weatherTitle: "Local Weather",
      currentWeather: "Current Weather",
      forecast: "3-Day Forecast",
      recommended: "Recommended",
      tabs: {
        details: "Details",
        weather: "Weather",
        location: "Location",
        events: "Events",
        sound: "Sound",
        soundtrack: "Soundtrack",
        transfers: "Transfers",
        blueprints: "Blueprints"
      },
      transfers: {
        title: "Luxury Transfer Calculator",
        subtitle: "Plan your arrival via private transport",
        departure: "Departure Point",
        selectDeparture: "Select origin...",
        vehicle: "Vehicle Type",
        helicopter: "Helicopter",
        yacht: "Yacht",
        limousine: "Limousine",
        distance: "Distance",
        duration: "Travel Time",
        calculate: "Calculate Rate",
        estimatedCost: "Estimated Cost",
        currency: "EUR",
        airportOption: "Airport: {name} ({dist} km)",
        portOption: "Port: {name} ({dist} km)"
      },
      blueprints: {
        title: "Architectural Blueprints",
        subtitle: "Structural details and technical specifications of the property",
        commitLogTitle: "Modification Log / Construction Milestones",
        author: "Author",
        date: "Date",
        hash: "Hash",
        message: "Construction Detail"
      },
      mapTitle: "Property Map",
      eventTitle: "Seasonal Events"
    },
    forms: {
      fullName: "Full Name",
      email: "Email Address",
      checkIn: "Check-in Date",
      checkOut: "Check-out Date",
      submit: "Confirm Booking",
      cancel: "Cancel",
      success: "Booking requested successfully!",
      error: "Please fill out all fields correctly.",
      dateError: "Check-out date must be after check-in date.",
      bookingError: "Error saving booking. Please try again.",
      submitRequest: "Confirm Request",
      requestConsultation: "Book Consultation",
      requestTitle: "Request Consultation",
      ctaDescription: "Ready to experience unprecedented levels of luxury?",
      refId: "Reference ID",
      villaLabel: "Villa",
      guestLabel: "Guest",
      checkInLabel: "Check-in",
      checkOutLabel: "Check-out",
      successDescription: "Your luxury consultation request has been received. We will contact you shortly to finalize your stay.",
      statusLabel: "Request Status"
    },
    bookingStatus: {
      pending: "Pending",
      confirmed: "Confirmed",
      cancelled: "Cancelled"
    },
    sidebar: {
      title: "Virtual Concierge",
      subtitle: "Luxury Personal Assistant",
      onlineStatus: "Online",
      inputPlaceholder: "Type your request here...",
      send: "Send"
    },
    footer: {
      copyright: "© 2026 Luxuria. All rights reserved. Ultra-Luxury Experiences."
    },
    portada: {
      eyebrow: "Absolute Exclusivity",
      subtitle: "The art of living at the pinnacle of luxury",
      cta: "Begin Exploration",
      scroll: "Scroll to explore"
    },
    hero: {
      eyebrow: "Exclusive Collection",
      title: "Extraordinary Residences",
      subtitle: "Find your ideal sanctuary in a curated selection of the most sophisticated and luxurious private estates on the planet.",
      cta: "Explore Properties"
    },
    bookingsPanel: {
      eyebrow: "My Bookings",
      title: "Active Requests",
      subtitle: "Review the status of your exclusive inquiries and ongoing bookings managed by our concierge.",
      emptyState: "You have no active booking requests at this time.",
      exploreBtn: "Explore Collection",
      colProperty: "Property",
      colGuest: "Guest",
      colDates: "Dates",
      colStatus: "Status",
      guestDefault: "Guest of Honor",
      dateSeparator: " to ",
      statusConfirmed: "Confirmed",
      statusPending: "Request received"
    },
    experiences: {
      eyebrow: "Concierge Services",
      title: "A La Carte Experiences",
      subtitle: "We design tailored moments and exclusive services to make your stay as sublime as it is unforgettable.",
      requestBtn: "Request Service",
      items: [
        {
          title: "Private Helicopter",
          description: "Panoramic flights and exclusive transfers to discover the world from above in absolute comfort.",
          badge: "Air"
        },
        {
          title: "In-Villa Chef",
          description: "Enjoy high-end Michelin-starred gastronomy tailored to your tastes in the privacy of your own villa.",
          badge: "Gastronomy"
        },
        {
          title: "Spa Experience",
          description: "Private holistic treatments and therapeutic massages designed for absolute body and mind renewal.",
          badge: "Wellness"
        },
        {
          title: "Luxury Yachts",
          description: "Exclusive sailing through pristine coves and secluded beaches aboard maximum-level vessels.",
          badge: "Sea"
        }
      ]
    },
    soundPlayer: {
      play: "Play",
      pause: "Pause",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      nowPlaying: "Now playing",
      track: "Track",
      type: "Type",
      description: "Description",
      ambientSounds: "Ambient Sounds"
    },
    clubPrive: {
      welcomeTitle: "Luxuria Club Privé",
      subtext: "Join our exclusive circle to receive private invitations, special rates, and early access to extraordinary residences.",
      inputPlaceholder: "Email address or phone number",
      submitButton: "Join the Club",
      successMessage: "Welcome to Club Privé! You will soon receive our exclusive communications.",
      errorMessage: "Please enter a valid email or phone number.",
      reflectionTitle: "Your Exclusive Travel Profile",
      reflectionSubtitle: "Personalized preference analysis",
      reflectionCard: {
        title: "Member Invitation",
        status: "Status: Active",
        memberSince: "Member since: Today",
        benefits: "Premium benefits activated"
      }
    },
    memoryGraph: {
      title: "Interaction Memory",
      emptyState: "Not enough interaction data to map your profile. Explore our villas or perform a search to begin.",
      destination: "Destination",
      budget: "Budget",
      groupSize: "Group Size",
      theme: "Theme Interest",
      interests: "Interests",
      nodes: "Memory Nodes",
      connections: "History Connections"
    }
  },
  fr: {
    nav: {
      villas: "Villas",
      experiences: "Expériences",
      concierge: "Concierge",
      bookings: "Réservations",
      about: "À propos"
    },
    filters: {
      all: "Toutes",
      wellness: "Bien-être",
      adventure: "Aventure",
      nature: "Nature",
      isolation: "Isolation",
      culture: "Culture",
      social: "Social",
      maxPrice: "Prix Maximum",
      guests: "Voyageurs",
      searchPlaceholder: "Rechercher par nom, destination ou mots-clés...",
      apply: "Appliquer les filtres",
      reset: "Réinitialiser",
      searchLabel: "Recherche",
      environmentLabel: "Environnement",
      anyEnvironment: "Tous environnements",
      coast: "Côte",
      mountain: "Montagne",
      countryside: "Campagne",
      maxPriceLabel: "Prix max",
      noLimit: "Sans limite",
      guestsLabel: "Voyageurs",
      anyGuests: "Tout nombre",
      guestsCountOption: "{count}+ voyageurs"
    },
    guestsOptions: {
      any: "Toute capacité",
      guestsCount: "{count} voyageurs",
      oneGuest: "1 voyageur",
      twoGuests: "2 voyageurs",
      fourOrMore: "4+ voyageurs",
      sixOrMore: "6+ voyageurs",
      eightOrMore: "8+ voyageurs"
    },
    pricePlaceholder: "Tout prix",
    villaDetails: {
      perNight: "par nuit",
      capacity: "Capacité",
      guests: "voyageurs",
      amenities: "Équipements Premium",
      bookingTitle: "Réserver cette Villa",
      seasonalEvents: "Événements Saisonniers",
      weatherTitle: "Météo Locale",
      currentWeather: "Météo Actuelle",
      forecast: "Prévisions sur 3 Jours",
      recommended: "Recommandée",
      tabs: {
        details: "Détails",
        weather: "Météo",
        location: "Emplacement",
        events: "Événements",
        sound: "Son",
        soundtrack: "Bande-son",
        transfers: "Transferts",
        blueprints: "Plans"
      },
      transfers: {
        title: "Calculateur de Transfert de Prestige",
        subtitle: "Planifiez votre arrivée en transport privé",
        departure: "Point de Départ",
        selectDeparture: "Sélectionner l'origine...",
        vehicle: "Type de Véhicule",
        helicopter: "Hélicoptère",
        yacht: "Yacht",
        limousine: "Limousine",
        distance: "Distance",
        duration: "Temps de Trajet",
        calculate: "Calculer le Tarif",
        estimatedCost: "Coût Estimé",
        currency: "EUR",
        airportOption: "Aéroport: {name} ({dist} km)",
        portOption: "Port: {name} ({dist} km)"
      },
      blueprints: {
        title: "Plans Architecturaux",
        subtitle: "Détails structurels et spécifications techniques de la propriété",
        commitLogTitle: "Registre des Modifications / Jalons de Travaux",
        author: "Auteur",
        date: "Date",
        hash: "Hash",
        message: "Détail des Travaux"
      },
      mapTitle: "Plan de la Propriété",
      eventTitle: "Événements de Saison"
    },
    forms: {
      fullName: "Nom Complet",
      email: "Adresse E-mail",
      checkIn: "Date d'arrivée",
      checkOut: "Date de départ",
      submit: "Confirmer la Réservation",
      cancel: "Annuler",
      success: "Réservation demandée avec succès !",
      error: "Veuillez remplir correctement tous les champs.",
      dateError: "La date de départ doit être après la date d'arrivée.",
      bookingError: "Erreur lors de la réservation. Veuillez réessayer.",
      submitRequest: "Confirmer la Demande",
      requestConsultation: "Réserver une Consultation",
      requestTitle: "Demander une Consultation",
      ctaDescription: "Prêt à vivre un niveau de luxe sans précédent ?",
      refId: "Réf de Réservation",
      villaLabel: "Villa",
      guestLabel: "Voyageur",
      checkInLabel: "Arrivée",
      checkOutLabel: "Départ",
      successDescription: "Votre demande de consultation de prestige a été reçue. Nous vous contacterons sous peu pour finaliser votre séjour.",
      statusLabel: "Statut de la Demande"
    },
    bookingStatus: {
      pending: "En attente",
      confirmed: "Confirmée",
      cancelled: "Annulée"
    },
    sidebar: {
      title: "Concierge Virtuel",
      subtitle: "Assistant Personnel de Luxe",
      onlineStatus: "En ligne",
      inputPlaceholder: "Écrivez votre demande ici...",
      send: "Envoyer"
    },
    footer: {
      copyright: "© 2026 Luxuria. Tous droits réservés. Expériences de prestige."
    },
    portada: {
      eyebrow: "Exclusivité Absolue",
      subtitle: "L'art de vivre au sommet du luxe",
      cta: "Commencer l'Exploration",
      scroll: "Faire défiler pour explorer"
    },
    hero: {
      eyebrow: "Collection Exclusive",
      title: "Résidences Extraordinaires",
      subtitle: "Trouvez votre sanctuaire idéal parmi une sélection rigoureuse des domaines privés les plus sophistiqués et luxueux de la planète.",
      cta: "Explorer les Propriétés"
    },
    bookingsPanel: {
      eyebrow: "Mes Réservations",
      title: "Demandes Actives",
      subtitle: "Consultez l'état de vos demandes exclusives et de vos réservations en cours gérées par notre concierge.",
      emptyState: "Vous n'avez pas de demandes de réservation actives pour le moment.",
      exploreBtn: "Explorer la Collection",
      colProperty: "Propriété",
      colGuest: "Voyageur",
      colDates: "Dates",
      colStatus: "Statut",
      guestDefault: "Invité d'Honneur",
      dateSeparator: " au ",
      statusConfirmed: "Confirmée",
      statusPending: "Demande reçue"
    },
    experiences: {
      eyebrow: "Services Concierge",
      title: "Expériences À La Carte",
      subtitle: "Nous concevons des moments sur mesure et des services exclusifs pour rendre votre séjour aussi sublime qu'inoubliable.",
      requestBtn: "Demander le Service",
      items: [
        {
          title: "Hélicoptère Privé",
          description: "Vols panoramiques et transferts exclusifs pour découvrir le monde d'en haut dans un confort absolu.",
          badge: "Air"
        },
        {
          title: "Chef à Domicilio",
          description: "Profitez de la haute gastronomie étoilée au guide Michelin adaptée à vos goûts dans l'intimité de votre villa.",
          badge: "Gastronomie"
        },
        {
          title: "Expérience Spa",
          description: "Soins holistiques privés et massages thérapeutiques conçus pour un ressourcement absolu du corps et de l'esprit.",
          badge: "Bien-être"
        },
        {
          title: "Yachts de Luxe",
          description: "Navigation exclusive dans des criques sauvages et des plages isolées à bord de bateaux de prestige.",
          badge: "Mer"
        }
      ]
    },
    soundPlayer: {
      play: "Lecture",
      pause: "Pause",
      volume: "Volume",
      mute: "Muet",
      unmute: "Activer le son",
      nowPlaying: "Lecture en cours",
      track: "Piste",
      type: "Type",
      description: "Description",
      ambientSounds: "Sons d'ambiance"
    },
    clubPrive: {
      welcomeTitle: "Luxuria Club Privé",
      subtext: "Rejoignez notre cercle exclusif pour recevoir des invitations privées, des tarifs préférentiels et des accès anticipés à des résidences extraordinaires.",
      inputPlaceholder: "Adresse e-mail ou numéro de téléphone",
      submitButton: "Rejoindre le Club",
      successMessage: "Bienvenue au Club Privé ! Vous recevrez bientôt nos communications exclusives.",
      errorMessage: "Veuillez saisir un e-mail ou un numéro de téléphone valide.",
      reflectionTitle: "Votre Profil de Voyage Exclusif",
      reflectionSubtitle: "Analyse personnalisée des préférences",
      reflectionCard: {
        title: "Invitation de Membre",
        status: "Statut : Actif",
        memberSince: "Membre depuis : Aujourd'hui",
        benefits: "Avantages premium activés"
      }
    },
    memoryGraph: {
      title: "Mémoire d'Interaction",
      emptyState: "Pas assez de données d'interaction pour cartographier votre profil. Explorez nos villas ou effectuez une recherche pour commencer.",
      destination: "Destination",
      budget: "Budget",
      groupSize: "Taille du Groupe",
      theme: "Thème d'Intérêt",
      interests: "Intérêts",
      nodes: "Nœuds de mémoire",
      connections: "Connexions de l'historique"
    }
  },
  ja: {
    nav: {
      villas: "ヴィラ一覧",
      experiences: "体験別",
      concierge: "コンシェルジュ",
      bookings: "予約状況",
      about: "会社概要"
    },
    filters: {
      all: "すべて",
      wellness: "ウェルネス",
      adventure: "アドベンチャー",
      nature: "ネイチャー",
      isolation: "アイソレーション",
      culture: "カルチャー",
      social: "ソーシャル",
      maxPrice: "上限価格",
      guests: "宿泊人数",
      searchPlaceholder: "ヴィラ名、目的地、キーワードで検索...",
      apply: "フィルターを適用",
      reset: "リセット",
      searchLabel: "検索",
      environmentLabel: "環境",
      anyEnvironment: "すべての環境",
      coast: "海岸",
      mountain: "山",
      countryside: "田舎",
      maxPriceLabel: "上限価格",
      noLimit: "制限なし",
      guestsLabel: "宿泊人数",
      anyGuests: "何名でも",
      guestsCountOption: "{count}名以上"
    },
    guestsOptions: {
      any: "何名でも",
      guestsCount: "{count}名",
      oneGuest: "1名",
      twoGuests: "2名",
      fourOrMore: "4名以上",
      sixOrMore: "6名以上",
      eightOrMore: "8名以上"
    },
    pricePlaceholder: "下限なし",
    villaDetails: {
      perNight: "1泊あたり",
      capacity: "定員",
      guests: "名",
      amenities: "プレミアムアメニティ",
      bookingTitle: "このヴィラを予約する",
      seasonalEvents: "季節のイベント",
      weatherTitle: "現地の天気",
      currentWeather: "現在の天気",
      forecast: "3日間の天気予報",
      recommended: "おすすめ",
      tabs: {
        details: "詳細",
        weather: "天気",
        location: "位置",
        events: "イベント",
        sound: "サウンド",
        soundtrack: "サウンドトラック",
        transfers: "送迎",
        blueprints: "設計図"
      },
      transfers: {
        title: "高級送迎シミュレーター",
        subtitle: "プライベート交通機関でのご到着を計画する",
        departure: "出発地",
        selectDeparture: "出発地を選択...",
        vehicle: "車両タイプ",
        helicopter: "ヘリコプター",
        yacht: "ヨット",
        limousine: "リムジン",
        distance: "距離",
        duration: "所要時間",
        calculate: "料金を計算する",
        estimatedCost: "推定費用",
        currency: "EUR",
        airportOption: "空港: {name} ({dist} km)",
        portOption: "港: {name} ({dist} km)"
      },
      blueprints: {
        title: "建築設計図",
        subtitle: "物件の構造詳細および技術仕様",
        commitLogTitle: "変更履歴 / 工事マイルストーン",
        author: "作成者",
        date: "日付",
        hash: "ハッシュ値",
        message: "詳細内容"
      },
      mapTitle: "プロパティマップ",
      eventTitle: "季節のイベント"
    },
    forms: {
      fullName: "お名前",
      email: "メールアドレス",
      checkIn: "チェックイン日",
      checkOut: "チェックアウト日",
      submit: "予約を確定する",
      cancel: "キャンセル",
      success: "予約リクエストが送信されました！",
      error: "すべての項目を正しく入力してください。",
      dateError: "チェックアウト日はチェックイン日より後の日付にしてください。",
      bookingError: "予約の保存中にエラーが発生しました。もう一度お試しください。",
      submitRequest: "リクエストを送信する",
      requestConsultation: "相談を予約する",
      requestTitle: "相談をリクエストする",
      ctaDescription: "かつてないレベルのラグジュアリーを体験する準備はできていますか？",
      refId: "参照ID",
      villaLabel: "ヴィラ",
      guestLabel: "宿泊者名",
      checkInLabel: "チェックイン",
      checkOutLabel: "チェックアウト",
      successDescription: "高級コンサルティングのリクエストを受領しました。滞在の詳細を確定するため、間もなくご連絡いたします。",
      statusLabel: "リクエスト状況"
    },
    bookingStatus: {
      pending: "保留中",
      confirmed: "確定",
      cancelled: "キャンセル済"
    },
    sidebar: {
      title: "バーチャルコンシェルジュ",
      subtitle: "ラグジュアリー個人アシスタント",
      onlineStatus: "オンライン",
      inputPlaceholder: "ご要望を入力してください...",
      send: "送信"
    },
    footer: {
      copyright: "© 2026 Luxuria. All rights reserved. 極上のラグジュアリー体験。"
    },
    portada: {
      eyebrow: "絶対的な高級感",
      subtitle: "ラグジュアリーの頂点に生きる芸術",
      cta: "探索を開始する",
      scroll: "スクロールして探索"
    },
    hero: {
      eyebrow: "排他的なコレクション",
      title: "類まれなる邸宅",
      subtitle: "地球上で最も洗練され、豪華なプライベートエステートを厳選したコレクションから、理想の聖域を見つけてください。",
      cta: "プロパティを探索"
    },
    bookingsPanel: {
      eyebrow: "ご予約状況",
      title: "有効なリクエスト",
      subtitle: "コンシェルジュが管理する高級お問い合わせや進行中の予約のステータスをご確認いただけます。",
      emptyState: "現在、有効な予約リクエストはありません。",
      exploreBtn: "コレクションを探索する",
      colProperty: "プロパティ",
      colGuest: "宿泊代表者",
      colDates: "日程",
      colStatus: "ステータス",
      guestDefault: "VIPゲスト",
      dateSeparator: " から ",
      statusConfirmed: "確定済",
      statusPending: "リクエスト受付済"
    },
    experiences: {
      eyebrow: "コンシェルジュサービス",
      title: "アラカルト体験",
      subtitle: "お客様の滞在が崇高で忘れられないものになるよう、オーダーメイドの瞬間と特別なサービスをご提案します。",
      requestBtn: "サービスをリクエストする",
      items: [
        {
          title: "プライベートヘリコプター",
          description: "絶対的な快適さの中で上空から世界を発見するためのパノラマ飛行と専用送迎サービス。",
          badge: "空"
        },
        {
          title: "プライベートシェフ",
          description: "お客様の好みに合わせたミシュラン星獲得の高級料理を、プライベートなヴィラの中でお楽しみいただけます。",
          badge: "美食"
        },
        {
          title: "スパ体験",
          description: "心身の絶対的な回復のために設計された、プライベートなホリスティックトリートメントと治療マッサージ。",
          badge: "ウェルネス"
        },
        {
          title: "高級ヨット",
          description: "最高峰の船に乗って、手つかずの入り江や人里離れたビーチを航海するプライベートクルージング。",
          badge: "海"
        }
      ]
    },
    soundPlayer: {
      play: "再生",
      pause: "一時停止",
      volume: "音量",
      mute: "ミュート",
      unmute: "消音解除",
      nowPlaying: "再生中",
      track: "トラック",
      type: "タイプ",
      description: "説明",
      ambientSounds: "環境音"
    },
    clubPrive: {
      welcomeTitle: "ルクスリア・クラブ・プリヴェ (Luxuria Club Privé)",
      subtext: "限定サークルに参加して、プライベートな招待状、特別料金、割引き、そして類まれなる邸宅への先行アクセスをお受け取りください。",
      inputPlaceholder: "メールアドレスまたは電話番号",
      submitButton: "クラブに入会する",
      successMessage: "クラブ・プリヴェへようこそ！間もなく限定のご案内をお送りいたします。",
      errorMessage: "有効なメールアドレスまたは電話番号を入力してください。",
      reflectionTitle: "お客様専用のトラベルプロファイル",
      reflectionSubtitle: "パーソナライズされた好みの分析",
      reflectionCard: {
        title: "会員インビテーション",
        status: "ステータス: アクティブ",
        memberSince: "入会日: 本日",
        benefits: "プレミアム特典が有効化されました"
      }
    },
    memoryGraph: {
      title: "インタラクションメモリ (Memoria de Interacción)",
      emptyState: "プロファイルをマップするための十分なインタラクションデータがありません。ヴィラを探索するか、検索を開始してください。",
      destination: "目的地",
      budget: "予算",
      groupSize: "グループサイズ",
      theme: "テーマへの関心",
      interests: "興味・関心",
      nodes: "メモリノード",
      connections: "履歴接続"
    }
  }
};

/**
 * Returns a translated string for a given key path and language.
 * Falls back to English if the translation is not found in the selected language.
 * 
 * @param {string} keyPath - Dot-separated key path (e.g. 'nav.villas')
 * @param {string} lang - Language code ('es', 'en', 'fr', 'ja')
 * @param {Object} [variables] - Interpolation variables (e.g. { count: 4 })
 * @returns {string} The translated string or the original key if missing
 */
export function translate(keyPath, lang = 'es', variables = {}) {
  const dictionary = translations[lang] || translations['en'];
  const keys = keyPath.split('.');
  
  let result = dictionary;
  for (const key of keys) {
    if (result && result[key] !== undefined) {
      result = result[key];
    } else {
      // Fallback path to English
      let fallback = translations['en'];
      for (const fKey of keys) {
        if (fallback && fallback[fKey] !== undefined) {
          fallback = fallback[fKey];
        } else {
          fallback = null;
          break;
        }
      }
      return fallback !== null ? formatResult(fallback, variables) : keyPath;
    }
  }
  
  return formatResult(result, variables);
}

/**
 * Helper function to interpolate values into a translated string template.
 */
function formatResult(value, variables) {
  if (typeof value !== 'string') {
    return String(value);
  }

  let formatted = value;
  for (const [key, val] of Object.entries(variables)) {
    formatted = formatted.replace(new RegExp(`{${key}}`, 'g'), val);
  }
  return formatted;
}
