/**
 * Detailed mock dataset of 6 luxury villas.
 * Each villa contains specific details: id, name, location, price, guests/capacity,
 * experience, description, amenities, image path, searchable keywords, coordinates,
 * and translation dictionaries for multi-language display.
 */
export const mockVillas = [
  {
    id: 1,
    name: "Villa Sereno",
    location: "Amalfi, Italia",
    price: 3500,
    guests: 8,
    capacity: 8,
    experience: "wellness",
    type: "Costa",
    latitude: 40.63,
    longitude: 14.60,
    description: "Ubicada majestuosamente sobre los acantilados de Amalfi, Villa Sereno es un santuario de rejuvenecimiento. Combinando bienestar de primer nivel con impresionantes vistas al océano, esta propiedad en el acantilado cuenta con una piscina infinita suspendida entre el cielo y el mar, un exuberante jardín de lujo y un spa orgánico privado para una restauración absoluta.",
    amenities: [
      "Piscina infinita con vistas al océano",
      "Spa y sauna de bienestar orgánico",
      "Exuberantes jardines mediterráneos",
      "Chef privado y alta cocina",
      "Plataforma de yoga panorámica al aire libre",
      "Servicio de mayordomo dedicado las 24 horas, los 7 días de la semana"
    ],
    image: "/images/luxuria_amalfi.png",
    imagePath: "/images/luxuria_amalfi.png",
    keywords: ["amalfi", "italia", "bienestar", "vista al océano", "piscina infinita", "jardín de lujo", "spa orgánico", "sereno", "acantilado", "rejuvenecimiento", "meditación"],
    soundtrack: { title: 'Olas de Amalfi', type: 'marítimo', desc: 'Sonido suave de olas rompiendo contra las rocas' },
    transfers: {
      airports: [
        { name: "Nápoles (NAP)", dist: 65 },
        { name: "Salerno Costa d'Amalfi (QSR)", dist: 45 }
      ],
      ports: [
        { name: "Puerto de Amalfi", dist: 2 },
        { name: "Puerto de Positano", dist: 20 }
      ],
      rates: {
        helicopter: 15,
        yacht: 25,
        limousine: 5
      }
    },
    constructionLogs: [
      {
        date: "2024-03-15",
        author: "Estudio de Arquitectura Luxuria",
        hash: "af102b3",
        message: {
          es: "Refuerzo estructural de micropilotes de titanio anclados en acantilado basáltico.",
          en: "Structural reinforcement of titanium micropiles anchored into the basalt cliffside.",
          fr: "Renforcement structurel de micropieux en titane ancrés dans la falaise de basalte.",
          ja: "玄武岩の崖に固定されたチタン製マイクロパイルによる構造補強。"
        }
      },
      {
        date: "2024-08-20",
        author: "Estudio de Arquitectura Luxuria",
        hash: "d9e3f12",
        message: {
          es: "Certificación ecológica LEED Platinum para el sistema de purificación y reutilización de aguas grises en el jardín.",
          en: "LEED Platinum eco certification for the greywater purification and reuse system in the garden.",
          fr: "Certification écologique LEED Platinum pour le système de purification et réutilisation des eaux grises du jardin.",
          ja: "庭園内グレーウォーター（雑排水）浄化・再利用システムのLEEDプラチナ環境認証。"
        }
      },
      {
        date: "2025-01-12",
        author: "Estudio de Arquitectura Luxuria",
        hash: "e4b5c68",
        message: {
          es: "Instalación de ventanales termoacústicos de triple vidrio con marco de bronce esculpido artesanalmente.",
          en: "Installation of triple-glazed thermo-acoustic windows with custom handcrafted bronze frames.",
          fr: "Installation de fenêtres thermo-acoustiques triple vitrage avec cadres en bronze sculptés à la main.",
          ja: "手彫りブロンズフレームを採用した3重ガラス遮音・遮熱サッシの設置。"
        }
      }
    ],
    translations: {
      es: {
        name: "Villa Sereno",
        location: "Amalfi, Italia",
        description: "Ubicada majestuosamente sobre los acantilados de Amalfi, Villa Sereno es un santuario de rejuvenecimiento. Combinando bienestar de primer nivel con impresionantes vistas al océano, esta propiedad en el acantilado cuenta con una piscina infinita suspendida entre el cielo y el mar, un exuberante jardín de lujo y un spa orgánico privado para una restauración absoluta.",
        seasonalEvents: "Festival de la Canción de Amalfi (Verano) y la Regata Histórica de las Repúblicas Marítimas (Primavera)."
      },
      en: {
        name: "Villa Sereno",
        location: "Amalfi, Italy",
        description: "Majestically perched above the Amalfi cliffs, Villa Sereno is a sanctuary of rejuvenation. Blending top-tier wellness with breathtaking ocean views, this cliffside estate features an infinity pool suspended between sky and sea, a lush luxury garden, and a private organic spa for absolute restoration.",
        seasonalEvents: "Amalfi Chamber Music Festival (Summer) and the Historical Regatta of the Maritime Republics (Spring)."
      },
      fr: {
        name: "Villa Sereno",
        location: "Amalfi, Italie",
        description: "Majestueusement perchée sur les falaises d'Amalfi, la Villa Sereno est un sanctuaire de régénération. Alliant un bien-être haut de gamme à des vues imprenables sur l'océan, cette propriété à flanc de falaise comprend une piscine à débordement suspendue entre ciel et mer, un jardin de luxe luxuriant et un spa bio privé pour une détente absolue.",
        seasonalEvents: "Festival de musique de chambre d'Amalfi (Été) et la Régate Historique des Républiques Maritimes (Printemps)."
      },
      ja: {
        name: "ヴィラ・セレーノ (Villa Sereno)",
        location: "イタリア、アマルフィ",
        description: "アマルフィの崖の上にそびえ立つヴィラ・セレーノは、心身を癒す至高の聖域です。最高峰 of ウェルネスと息をのむようなオーシャンビューが融合し、空と海に浮かぶインフィニティプール、緑豊かなラグジュアリーガーデン、プライベートなオーガニックスパが絶対的な回復をもたらします。",
        seasonalEvents: "アマルフィ室内楽フェスティバル（夏）および海洋共和国の歴史的レガッタ（春）"
      }
    }
  },
  {
    id: 2,
    name: "Chalet de Cristal",
    location: "Zermatt, Suiza",
    price: 4200,
    guests: 6,
    capacity: 6,
    experience: "adventure",
    type: "Montaña",
    latitude: 46.02,
    longitude: 7.75,
    description: "Ubicado en los prístinos picos nevados de Zermatt, el Chalet de Cristal es una maravilla del diseño alpino moderno. Combinando la aventura a gran altura con una vida de lujo, cuenta con paredes de vidrio de piso a techo que enmarcan el Matterhorn, un jacuzzi exterior con agua humeante y una gran chimenea de piedra para calentarse después de un día en las pistas.",
    amenities: [
      "Paredes de vidrio de piso a techo",
      "Jacuzzi exterior climatizado",
      "Gran chimenea de piedra",
      "Acceso directo a las pistas de esquí (ski-in/ski-out)",
      "Guía de montaña privado",
      "Salón climatizado para equipos de esquí"
    ],
    image: "/images/luxuria_alps.png",
    imagePath: "/images/luxuria_alps.png",
    keywords: ["zermatt", "suiza", "aventura", "vista a la montaña nevada", "paredes de vidrio", "jacuzzi exterior", "chimenea", "chalet", "alpino", "esquí", "matterhorn"],
    soundtrack: { title: 'Viento Alpino', type: 'montañoso', desc: 'Susurro del viento frío entre las agujas de cedro' },
    transfers: {
      airports: [
        { name: "Ginebra (GVA)", dist: 230 },
        { name: "Sion (SIR)", dist: 80 }
      ],
      ports: [
        { name: "Puerto del Lago Lemán (Lausana)", dist: 140 }
      ],
      rates: {
        helicopter: 15,
        yacht: 25,
        limousine: 5
      }
    },
    constructionLogs: [
      {
        date: "2023-09-10",
        author: "Atelier d'Architecture Luxuria Suisse",
        hash: "b3c2d15",
        message: {
          es: "Sistema de cimentación flotante antisísmica activa para compensación de movimientos térmicos glaciares.",
          en: "Active anti-seismic floating foundation system to compensate for glacial thermal movements.",
          fr: "Système de fondation flottante antisismique active pour compenser les mouvements thermiques glaciaires.",
          ja: "氷河の熱移動を補正する能動型耐震フローティング基礎システムの導入。"
        }
      },
      {
        date: "2024-02-18",
        author: "Atelier d'Architecture Luxuria Suisse",
        hash: "f7e9a82",
        message: {
          es: "Integración de paneles solares fotovoltaicos térmicos invisibles texturizados tipo pizarra alpina.",
          en: "Integration of invisible textured photovoltaic-thermal solar panels mimicking alpine slate.",
          fr: "Intégration de panneaux solaires photovoltaïques-thermiques invisibles texturés imitation ardoise alpine.",
          ja: "アルプスのスレート（粘板岩）を模したテクスチャ調のステルス太陽光ハイブリッドパネルの統合。"
        }
      },
      {
        date: "2024-11-05",
        author: "Atelier d'Architecture Luxuria Suisse",
        hash: "a1e4c9b",
        message: {
          es: "Instalación de chimenea de biocombustible con tiro forzado inteligente y certificación de emisión cero.",
          en: "Installation of zero-emission biofuel fireplace with smart forced-draft exhaust technology.",
          fr: "Installation d'une cheminée à biocarburant à tirage forcé intelligent et certification zéro émission.",
          ja: "スマート強制排気技術を採用したゼロエミッション・バイオ燃料暖炉の設置。"
        }
      }
    ],
    translations: {
      es: {
        name: "Chalet de Cristal",
        location: "Zermatt, Suiza",
        description: "Ubicado en los prístinos picos nevados de Zermatt, el Chalet de Cristal es una maravilla del diseño alpino moderno. Combinando la aventura a gran altura con una vida de lujo, cuenta con paredes de vidrio de piso a techo que enmarcan el Matterhorn, un jacuzzi exterior con agua humeante y una gran chimenea de piedra para calentarse después de un día en las pistas.",
        seasonalEvents: "El Festival de Montañismo de Zermatt (Invierno) y el maratón alpino Zermatt-Matterhorn (Verano)."
      },
      en: {
        name: "Glass Alpine Chalet",
        location: "Zermatt, Switzerland",
        description: "Nestled in the pristine snowy peaks of Zermatt, the Glass Alpine Chalet is a marvel of modern alpine design. Combining high-altitude adventure with luxury living, it features floor-to-ceiling glass walls framing the Matterhorn, an outdoor hot tub with steaming water, and a grand stone fireplace to warm up after a day on the slopes.",
        seasonalEvents: "Zermatt Mountaineering Festival (Winter) and the Zermatt-Matterhorn Alpine Marathon (Summer)."
      },
      fr: {
        name: "Chalet de Cristal",
        location: "Zermatt, Suisse",
        description: "Niché dans les sommets enneigés de Zermatt, le Chalet de Cristal est une merveille de design alpin moderne. Alliant l'aventure en haute altitude à un mode de vie luxueux, il présente des parois en verre du sol au plafond encadrant le Cervin, un bain à remous extérieur chauffé et une grande cheminée en pierre pour se réchauffer après une journée sur les pistes.",
        seasonalEvents: "Festival d'alpinisme de Zermatt (Hiver) et le Marathon Alpin de Zermatt-Cervin (Été)."
      },
      ja: {
        name: "ガラス・アルパイン・シャレー (Chalet de Cristal)",
        location: "スイス、ツェルマット",
        description: "ツェルマットの汚れなき雪山に抱かれたガラス・アルパイン・シャレーは、モダン・アルパイン・デザインの最高傑作です。高地での冒険と贅沢な暮らしが融合し、マッターホルンを額装する床から天井までのガラス壁、湯気立つ屋外ジャグジー、そしてゲレンデで過ごした後に体を温める巨大な石造りの暖炉を備えています。",
        seasonalEvents: "ツェルマット登山フェスティバル（冬）およびツェルマット・マッターホルン・アルパインマラソン（夏）"
      }
    }
  },
  {
    id: 3,
    name: "Santuario de la Selva",
    location: "Bali, Indonesia",
    price: 2800,
    guests: 4,
    capacity: 4,
    experience: "nature",
    type: "Campo",
    latitude: -8.50,
    longitude: 115.26,
    description: "Sumérjete en la tranquilidad tropical de la copa de la selva de Bali. Este santuario de bienestar zen centrado en la naturaleza ofrece un diseño arquitectónico al aire libre, completo con una piscina forestal privada, ducha exterior en la selva tropical y un shala de yoga privado rodeado de árboles ancestrales y cantos de aves exóticas.",
    amenities: [
      "Piscina forestal privada",
      "Shala de yoga exclusivo",
      "Ducha exterior en la selva tropical",
      "Huerto orgánico y chef privado",
      "Jardines de meditación zen",
      "Pabellón de masajes en la villa"
    ],
    image: "/images/luxuria_bali.png",
    imagePath: "/images/luxuria_bali.png",
    keywords: ["bali", "indonesia", "tropical", "naturaleza", "bienestar zen", "ducha al aire libre", "piscina forestal", "shala de yoga", "santuario de la selva", "dosel", "aves"],
    soundtrack: { title: 'Lluvia Tropical', type: 'selva', desc: 'Gotas cayendo sobre hojas anchas y eco de cascada' },
    transfers: {
      airports: [
        { name: "Denpasar Ngurah Rai (DPS)", dist: 40 }
      ],
      ports: [
        { name: "Puerto de Padang Bai", dist: 35 },
        { name: "Puerto de Benoa", dist: 42 }
      ],
      rates: {
        helicopter: 15,
        yacht: 25,
        limousine: 5
      }
    },
    constructionLogs: [
      {
        date: "2023-05-22",
        author: "Luxuria Bali Design Studio",
        hash: "c3d4e5f",
        message: {
          es: "Estructura principal de bambú gigante curado al humo y juntas articuladas de fibra de carbono ocultas.",
          en: "Main structure crafted from smoke-cured giant bamboo and concealed carbon-fiber articulating joints.",
          fr: "Structure principale en bambou géant traité par fumage et joints articulés en fibre de carbone dissimulés.",
          ja: "煙で燻した巨竹材と隠しカーボンファイバー製関節式ジョイントによる主要構造。"
        }
      },
      {
        date: "2023-10-14",
        author: "Luxuria Bali Design Studio",
        hash: "a2b8c9d",
        message: {
          es: "Instalación de sistema de filtración biológica multinivel por gravedad para la piscina infinita forestal.",
          en: "Installation of a gravity-fed multi-level biological filtration system for the forest infinity pool.",
          fr: "Installation d'un système de filtration biologique gravitaire à plusieurs niveaux pour la piscine forestière.",
          ja: "森林インフィニティプール用の重力給水式多重生物濾過システムの設置。"
        }
      },
      {
        date: "2024-04-03",
        author: "Luxuria Bali Design Studio",
        hash: "f5e1b2c",
        message: {
          es: "Aislamiento acústico de techos mediante paneles tejidos a mano de fibra de coco y corcho reciclado.",
          en: "Acoustic ceiling insulation utilizing hand-woven coconut fiber panels and recycled cork.",
          fr: "Isolation acoustique des plafonds à l'aide de panneaux tissés à la main en fibre de coco et liège recyclé.",
          ja: "手織りココナッツファイバーパネルと再生コルクを使用した天井の遮音工事。"
        }
      }
    ],
    translations: {
      es: {
        name: "Santuario de la Selva",
        location: "Ubud, Bali, Indonesia",
        description: "Sumérgete en la tranquilidad tropical de la copa de la selva de Bali. Este santuario de bienestar zen centrado en la naturaleza ofrece un diseño arquitectónico al aire libre, completo con una piscina forestal privada, ducha exterior en la selva tropical y un shala de yoga privado rodeado de árboles ancestrales y cantos de aves exóticas.",
        seasonalEvents: "Festival de Yoga y Danza de Bali (Primavera) y la Ceremonia de Galungan en el bosque sagrado (Otoño)."
      },
      en: {
        name: "Jungle Canopy Sanctuary",
        location: "Ubud, Bali, Indonesia",
        description: "Immerse yourself in the tropical tranquility of Bali's jungle canopy. This nature-focused Zen wellness sanctuary offers an open-air architectural design, complete with a private forest pool, outdoor rainforest shower, and a private yoga shala surrounded by ancient trees and exotic birdsong.",
        seasonalEvents: "Bali Yoga & Dance Festival (Spring) and the sacred Galungan Ceremony in the holy forest (Autumn)."
      },
      fr: {
        name: "Sanctuaire de la Jungle",
        location: "Ubud, Bali, Indonésie",
        description: "Plongez dans la tranquillité tropicale de la canopée de Bali. Ce sanctuaire de bien-être zen centré sur la nature offre un design architectural en plein air, avec une piscine forestière privée, une douche extérieure sous la pluie tropicale et un shala de yoga privé entouré d'arbres centenaires et de chants d'oiseaux exotiques.",
        seasonalEvents: "Festival de Yoga et de Danse de Bali (Printemps) et la Cérémonie Sacrée de Galungan dans la forêt sainte (Automne)."
      },
      ja: {
        name: "ジャングル・キャノピー・サンクチュアリ (Santuario de la Selva)",
        location: "インドネシア、バリ島ウブド",
        description: "バリの熱帯雨林の梢が織りなす静寂に身をゆだねてください。自然と調和した禅ウェルネス・サンクチュアリは、オープンエアの建築デザインを採用し、プライベートな森のプール、屋外レインフォレストシャワー、そして古木とさえずる鳥たちに囲まれた専用のヨガシャラを完備しています。",
        seasonalEvents: "バリ・ヨガ＆ダンスフェスティバル（春）および聖なる森でのガルンガン儀式（秋）"
      }
    }
  },
  {
    id: 4,
    name: "Oasis Amangiri",
    location: "Utah, EE. UU.",
    price: 3900,
    guests: 6,
    capacity: 6,
    experience: "isolation",
    type: "Campo",
    latitude: 37.01,
    longitude: -111.48,
    description: "Surgiendo del suelo del desierto, este Oasis Brutalista del Cañón ofrece un aislamiento absoluto y una maravilla arquitectónica. Rodeado por la belleza cruda de las formaciones de roca roja de Utah, la propiedad cuenta con estructuras minimalistas de concreto expuesto, una piscina de inmersión privada y una hoguera central diseñada para las noches estrelladas del desierto.",
    amenities: [
      "Piscina de inmersión privada",
      "Hoguera exterior en el desierto",
      "Arquitectura brutalista de concreto expuesto",
      "Vistas panorámicas de roca roja",
      "Plataforma de observación astronomica",
      "Vehículo de aventura todoterreno Tesla"
    ],
    image: "/images/luxuria_desert.png",
    imagePath: "/images/luxuria_desert.png",
    keywords: ["utah", "ee. uu.", "aislamiento del desierto", "vista de roca roja", "concreto", "brutalista", "piscina de inmersión", "hoguera", "oasis de amangiri", "cañón"],
    soundtrack: { title: 'Silencio del Cañón', type: 'desierto', desc: 'Resonancia del viento seco y grillos del desierto' },
    transfers: {
      airports: [
        { name: "Page Municipal (PGA)", dist: 25 },
        { name: "St. George Regional (SGU)", dist: 220 }
      ],
      ports: [
        { name: "Puerto de Antelope Point (Lago Powell)", dist: 32 }
      ],
      rates: {
        helicopter: 15,
        yacht: 25,
        limousine: 5
      }
    },
    constructionLogs: [
      {
        date: "2024-01-20",
        author: "Luxuria Desert Architects",
        hash: "d4e5f6a",
        message: {
          es: "Vaciado monolítico de concreto brutalista autocompactante pigmentado con arena local del desierto.",
          en: "Monolithic pouring of self-compacting brutalist concrete pigmented with local desert sand.",
          fr: "Coulage monolithique de béton brutaliste autoplaçant pigmenté avec du sable du désert local.",
          ja: "現地の砂漠の砂で着色された自己充填型ブルータリストコンクリートの一体型打設。"
        }
      },
      {
        date: "2024-06-15",
        author: "Luxuria Desert Architects",
        hash: "e7a1b8c",
        message: {
          es: "Instalación de sistema geotérmico de climatización y refrigeración pasiva mediante túneles subterráneos.",
          en: "Installation of geothermal climate control and passive cooling via underground air tunnels.",
          fr: "Installation d'un système géothermique de climatisation et de refroidissement passif via des tunnels d'air souterrains.",
          ja: "地下エアトンネルを利用した地熱空調およびパッシブ冷却システムの設置。"
        }
      },
      {
        date: "2024-12-02",
        author: "Luxuria Desert Architects",
        hash: "c2d9e3b",
        message: {
          es: "Certificación de resistencia estructural extrema ante vientos desérticos y tormentas de arena de grado militar.",
          en: "Structural certification for extreme resistance to desert winds and military-grade sandstorms.",
          fr: "Certification structurelle pour une résistance extrême aux vents du désert et aux tempêtes de sable de niveau militaire.",
          ja: "砂漠の強風および軍用規格の砂嵐に対する極限耐性の構造認証。"
        }
      }
    ],
    translations: {
      es: {
        name: "Oasis Amangiri",
        location: "Utah, EE. UU.",
        description: "Surgiendo del suelo del desierto, este Oasis Brutalista del Cañón ofrece un aislamiento absoluto y una maravilla arquitectónica. Rodeado por la belleza cruda de las formaciones de roca roja de Utah, la propiedad cuenta con estructuras minimalistas de concreto expuesto, una piscina de inmersión privada y una hoguera central diseñada para las noches estrelladas del desierto.",
        seasonalEvents: "Visualización del Eclipse del Desierto (Otoño) y el Festival de Cine de Utah (Invierno)."
      },
      en: {
        name: "Canyon Brutalist Oasis",
        location: "Utah, USA",
        description: "Rising from the desert floor, this Canyon Brutalist Oasis offers absolute isolation and architectural marvel. Surrounded by the raw beauty of Utah's red rock formations, the property features minimalist exposed concrete structures, a private plunge pool, and a central fire pit designed for starlit desert nights.",
        seasonalEvents: "Desert Eclipse Skygazing (Autumn) and the Southern Utah Film & Art Festival (Winter)."
      },
      fr: {
        name: "Oasis Brutaliste du Canyon",
        location: "Utah, États-Unis",
        description: "Émergeant du sol du désert, cet Oasis Brutaliste du Canyon offre un isolement absolu et une merveille architecturale. Entourée par la beauté brute des formations rocheuses rouges de l'Utah, la propriété dispose de structures en béton brut minimalistes, d'un bassin de plongée privé et d'un foyer central conçu pour les nuits étoilées du désert.",
        seasonalEvents: "Observation de l'Éclipse du Désert (Automne) et Festival du Film et d'Art du Sud de l'Utah (Hiver)."
      },
      ja: {
        name: "キャニオン・ブルータリスト・オアシス (Oasis Amangiri)",
        location: "アメリカ、ユタ州",
        description: "砂漠の大地からそびえ立つこのキャニオン・ブルータリスト・オアシスは、完全な孤立と建築美の極みを提供します。ユタ州の赤い岩肌の原始的な美しさに囲まれたこの邸宅は、ミニマルな打ち放しコンクリート構造、プライベートなプランジプール、そして砂漠の星空を楽しむために設計された中央の焚き火ピットを備えています。",
        seasonalEvents: "砂漠の日食観望会（秋）および南ユタ・映画＆アートフェスティバル（冬）"
      }
    }
  },
  {
    id: 5,
    name: "Retiro Katsura",
    location: "Kyoto, Japón",
    price: 3100,
    guests: 4,
    capacity: 4,
    experience: "culture",
    type: "Campo",
    latitude: 35.01,
    longitude: 135.76,
    description: "Un homenaje atemporal al patrimonio cultural, el Retiro Katsura captura la esencia del Kyoto histórico. Con un auténtico jardín zen de piedra, una tina de madera hinoki para remojarse en el interior y al aire libre, y un pabellón dedicado a la ceremonia del té, esta propiedad ofrece una conexión profunda con las tradiciones japonesas y los pacíficos bosques de bambú.",
    amenities: [
      "Tina hinoki de madera para remojarse",
      "Pabellón para ceremonia del té",
      "Jardín zen de piedra tradicional",
      "Salas de té tradicionales de tatami",
      "Bodega de degustación de sake",
      "Anfitrión artesano cultural local"
    ],
    image: "/images/luxuria_kyoto.png",
    imagePath: "/images/luxuria_kyoto.png",
    keywords: ["kyoto", "japón", "patrimonio cultural", "jardín zen de piedra", "tina hinoki de madera", "pabellón de ceremonia del té", "bambú", "retiro katsura", "tradición"],
    soundtrack: { title: 'Eco Zen de Kyoto', type: 'meditación', desc: 'Flauta de bambú y goteo de agua shishi-odoshi' },
    transfers: {
      airports: [
        { name: "Osaka Itami (ITM)", dist: 50 },
        { name: "Kansai Internacional (KIX)", dist: 100 }
      ],
      ports: [
        { name: "Puerto de Osaka", dist: 55 },
        { name: "Puerto de Kobe", dist: 75 }
      ],
      rates: {
        helicopter: 15,
        yacht: 25,
        limousine: 5
      }
    },
    constructionLogs: [
      {
        date: "2023-04-12",
        author: "Estudio de Arquitectura Luxuria Japón",
        hash: "e1d2c3b",
        message: {
          es: "Ensamblaje estructural de carpintería tradicional japonesa sin clavos (Kanawatsugi) reforzado con pasadores de polímero.",
          en: "Traditional nail-less Japanese joinery (Kanawatsugi) structural assembly reinforced with polymer pins.",
          fr: "Assemblage structurel en menuiserie traditionnelle japonaise sans clous (Kanawatsugi) renforcé de chevilles en polymère.",
          ja: "ポリマーピンで補強された、釘を使わない伝統的な日本建築の木組み継手（金輪継ぎ）構造の組み立て。"
        }
      },
      {
        date: "2023-09-25",
        author: "Estudio de Arquitectura Luxuria Japón",
        hash: "f9b8a7c",
        message: {
          es: "Restauración y tallado del estanque zen con revestimiento impermeable de arcilla ecológica no contaminante.",
          en: "Restoration and sculpting of the Zen pond utilizing a non-polluting eco-clay waterproof liner.",
          fr: "Restauration et sculpture du bassin Zen avec un revêtement imperméable en éco-argile non polluante.",
          ja: "無公害エコクレイ防水ライナーを使用した禅池の修復と造形。"
        }
      },
      {
        date: "2024-03-08",
        author: "Estudio de Arquitectura Luxuria Japón",
        hash: "a3e2f1d",
        message: {
          es: "Instalación de tina Hinoki de madera milenaria tratada con aceites naturales repelentes y protectores térmicos.",
          en: "Installation of an ancient Hinoki wooden tub treated with natural repellent and thermal protective oils.",
          fr: "Installation d'une baignoire en bois Hinoki millénaire traitée avec des huiles répulsives naturelles et protectrices thermiques.",
          ja: "天然の防虫・防腐効果と耐熱保護オイルで処理された樹齢千年の檜風呂の設置。"
        }
      }
    ],
    translations: {
      es: {
        name: "Retiro Katsura",
        location: "Kyoto, Japón",
        description: "Un homenaje atemporal al patrimonio cultural, el Retiro Katsura captura la esencia del Kyoto histórico. Con un auténtico jardín zen de piedra, una tina de madera hinoki para remojarse en el interior y al aire libre, y un pabellón dedicado a la ceremonia del té, esta propiedad ofrece una conexión profunda con las tradiciones japonesas y los pacíficos bosques de bambú.",
        seasonalEvents: "Festival del Fuego de Kyoto Daimonji (Verano) y el florecimiento de los cerezos en primavera (Sakura)."
      },
      en: {
        name: "Kyoto Bamboo Pavilion",
        location: "Kyoto, Japan",
        description: "A timeless tribute to cultural heritage, the Kyoto Bamboo Pavilion captures the essence of historical Kyoto. Featuring an authentic stone Zen garden, a wooden hinoki soaking tub indoors and outdoors, and a dedicated tea ceremony pavilion, this property offers a deep connection to Japanese traditions and peaceful bamboo forests.",
        seasonalEvents: "Kyoto Daimonji Fire Festival (Summer) and the Spring Cherry Blossom Viewing (Sakura Festival)."
      },
      fr: {
        name: "Pavillon de Bambou de Kyoto",
        location: "Kyoto, Japon",
        description: "Hommage intemporel au patrimoine culturel, le Pavillon de Bambou de Kyoto capture l'essence du Kyoto historique. Avec un authentique jardin zen de pierre, une baignoire de trempage hinoki en bois et un pavillon de thé dédié, cette propriété offre une connexion profonde avec les traditions japonaises et les paisibles forêts de bambous.",
        seasonalEvents: "Festival du Feu de Kyoto Daimonji (Été) et la Contemplation des Cerisiers en Fleurs au Printemps (Festival Sakura)."
      },
      ja: {
        name: "京都・竹林パビリオン (Retiro Katsura)",
        location: "日本、京都",
        description: "文化遺産への時代を超越したオマージュとして、京都・竹林パビリオンは歴史ある京都の神髄を捉えています。本格的な枯山水（石の禅庭）、内風呂・露天の木製檜（ひのき）風呂、そして専用の茶室を備えたこの邸宅は、日本の伝統と静寂な竹林への深い結びつきを提供します。",
        seasonalEvents: "京都・五山送り火（夏）および春の桜祭り・お花見（春）"
      }
    }
  },
  {
    id: 6,
    name: "Finca Es Vedrà",
    location: "Ibiza, España",
    price: 4800,
    guests: 12,
    capacity: 12,
    experience: "social",
    type: "Costa",
    latitude: 38.90,
    longitude: 1.43,
    description: "Ubicada en lo alto del Mediterráneo con asientos en primera fila para el famoso atardecer de Ibiza, Finca Es Vedrà es el destino social definitivo. La fachada modernista se funde con las colinas cubiertas de pinos, abriéndose a una enorme terraza lounge para el atardecer, un sistema de sonido profesional personalizado y espectaculares vistas al mar.",
    amenities: [
      "Terraza lounge para el atardecer",
      "Sistema de sonido profesional",
      "Piscina de fachada modernista",
      "Bar panorámico con vistas al mar",
      "Pinar mediterráneo",
      "Casa de invitados VIP"
    ],
    image: "/images/luxuria_ibiza.png",
    imagePath: "/images/luxuria_ibiza.png",
    keywords: ["ibiza", "españa", "fiesta social", "terraza de atardecer", "fachada modernista", "pinos", "sistema de sonido", "vista al mar", "finca es vedra"],
    soundtrack: { title: 'Atardecer en Ibiza', type: 'chillout', desc: 'Bases lentas ambient lounge con brisa de fondo' },
    transfers: {
      airports: [
        { name: "Ibiza (IBZ)", dist: 18 }
      ],
      ports: [
        { name: "Puerto de Ibiza", dist: 22 },
        { name: "Puerto de San Antonio", dist: 15 }
      ],
      rates: {
        helicopter: 15,
        yacht: 25,
        limousine: 5
      }
    },
    constructionLogs: [
      {
        date: "2024-04-10",
        author: "Estudio de Arquitectura Luxuria España",
        hash: "f2e1d3c",
        message: {
          es: "Construcción de losas de hormigón postesado de gran luz para la voladura del salón sobre la ladera.",
          en: "Construction of long-span post-tensioned concrete slabs for the cantilevered living room over the hillside.",
          fr: "Construction de dalles de béton post-contraint à grande portée pour le salon en porte-à-faux sur la colline.",
          ja: "斜面に張り出したキャンティレバー式リビングルーム用の大スパン・ポストテンションコンクリートスラブの建設。"
        }
      },
      {
        date: "2024-08-05",
        author: "Estudio de Arquitectura Luxuria España",
        hash: "a1c9b8d",
        message: {
          es: "Instalación de sistema de absorción acústica y paneles de difusión elásticos calibrados para eventos al aire libre.",
          en: "Installation of sound absorption system and calibrated elastic diffusion panels for outdoor events.",
          fr: "Installation d'un système d'absorption acoustique et de panneaux de diffusion élastiques calibrés pour les événements en plein air.",
          ja: "屋外イベント向けに調整された吸音システムおよび弾性拡散パネルの設置。"
        }
      },
      {
        date: "2025-02-18",
        author: "Estudio de Arquitectura Luxuria España",
        hash: "d8f2e1a",
        message: {
          es: "Certificación de eficiencia energética de clase A con fachada ventilada de piedra local caliza.",
          en: "Class A energy efficiency certification with a ventilated facade made of local limestone.",
          fr: "Certification d'efficacité énergétique de classe A avec façade ventilée en calcaire local.",
          ja: "現地の石灰岩を使用した通気性ファサードによるクラスAエネルギー効率認証。"
        }
      }
    ],
    translations: {
      es: {
        name: "Finca Es Vedrà",
        location: "Ibiza, España",
        description: "Ubicada en lo alto del Mediterráneo con asientos en primera fila para el famoso atardecer de Ibiza, Finca Es Vedrà es el destino social definitivo. La fachada modernista se funde con las colinas cubiertas de pinos, abriéndose a una enorme terraza lounge para el atardecer, un sistema de sonido profesional personalizado y espectaculares vistas al mar.",
        seasonalEvents: "Sesión de Apertura de la Temporada de Discotecas de Ibiza (Primavera) y el Festival de Música Electrónica de Ibiza (Otoño)."
      },
      en: {
        name: "Ibiza Sunset Estate",
        location: "Ibiza, Spain",
        description: "Perched high above the Mediterranean with front-row seats to Ibiza's famous sunset, Finca Es Vedrà is the ultimate social destination. The modernist facade blends with the pine-covered hills, opening onto a massive sunset lounge deck, a custom professional sound system, and spectacular sea views.",
        seasonalEvents: "Ibiza Club Season Opening Ceremony (Spring) and the Ibiza Autumn Electronic Music Festival (Autumn)."
      },
      fr: {
        name: "Domaine du Coucher de Soleil d'Ibiza",
        location: "Ibiza, Espagne",
        description: "Perchée haut au-dessus de la Méditerranée avec des places aux premières loges pour le célèbre coucher de soleil d'Ibiza, la Finca Es Vedrà est la destination sociale par excellence. La façade moderniste se fond dans les collines couvertes de pins, s'ouvrant sur une immense terrasse de détente pour le coucher du soleil, un système audio professionnel sur mesure et des vues spectaculaires sur la mer.",
        seasonalEvents: "Cérémonie d'Ouverture de la Saison d'Ibiza (Printemps) et le Festival de Musique Électronique d'Ibique d'Automne (Automne)."
      },
      ja: {
        name: "イビザ・サンセット・エステート (Finca Es Vedrà)",
        location: "スペイン、イビザ島",
        description: "地中海の遥か高みに位置し、イビザの有名な夕日を特等席で眺められるフィンカ・エス・ヴェドラは、究極のソーシャル・デスティネーションです。モダニズム様式のファサードが松の木に覆われた丘陵と融合し、巨大なサンセットラウンジデッキ、特注のプロフェッショナル音響システム、そして壮麗なシービューが広がります。",
        seasonalEvents: "イビザ・クラブシーズン・オープニング（春）およびイビザ・オータム・エレクトロニックミュージック・フェスティバル（秋）"
      }
    }
  }
];

// Local Storage Keys
export const KEYS = {
  BOOKINGS: "luxuria_bookings",
  FAVORITES: "luxuria_favorites",
  RECENT_SEARCHES: "luxuria_recent_searches",
  CLUB_SUBSCRIPTIONS: "luxuria_club_subscriptions"
};

/**
 * Checks if localStorage is available in the current environment.
 * @returns {boolean} True if localStorage is accessible, false otherwise
 */
const isStorageAvailable = () => {
  try {
    return typeof window !== "undefined" && window.localStorage !== null;
  } catch {
    return false;
  }
};

/**
 * Saves a new booking request to Local Storage.
 * Logs the villa ID, user details, booking status, and creation time.
 * 
 * @param {number|string} villaId - The unique ID of the villa
 * @param {Object} userDetails - Details of the user (e.g. name, email, dates)
 * @param {string} [status='pending'] - The status of the reservation ('pending', 'confirmed', 'cancelled')
 * @returns {Object|null} The saved booking object, or null if storage is unavailable
 */
export const saveBooking = (villaId, userDetails, status = "pending") => {
  if (!isStorageAvailable()) return null;
  
  try {
    const bookings = getBookings();
    const newBooking = {
      id: `booking_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      villaId,
      userDetails,
      status,
      createdAt: new Date().toISOString()
    };
    
    // Immutable update pattern
    const updatedBookings = [...bookings, newBooking];
    localStorage.setItem(KEYS.BOOKINGS, JSON.stringify(updatedBookings));
    return newBooking;
  } catch (error) {
    console.error("Error saving booking to localStorage:", error);
    return null;
  }
};

/**
 * Retrieves all booking requests from Local Storage.
 * @returns {Array} List of saved booking requests
 */
export const getBookings = () => {
  if (!isStorageAvailable()) return [];
  
  try {
    const data = localStorage.getItem(KEYS.BOOKINGS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error retrieving bookings from localStorage:", error);
    return [];
  }
};

/**
 * Retrieves the user's favorite villa IDs from Local Storage.
 * @returns {Array} List of favorited villa IDs
 */
export const getFavorites = () => {
  if (!isStorageAvailable()) return [];
  
  try {
    const data = localStorage.getItem(KEYS.FAVORITES);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error retrieving favorites from localStorage:", error);
    return [];
  }
};

/**
 * Toggles the favorite status of a villa.
 * @param {number|string} villaId - The unique ID of the villa
 * @returns {Array} Updated list of favorited villa IDs
 */
export const toggleFavorite = (villaId) => {
  if (!isStorageAvailable()) return [];
  
  try {
    const favorites = getFavorites();
    let updatedFavorites;
    
    if (favorites.includes(villaId)) {
      updatedFavorites = favorites.filter(id => id !== villaId);
    } else {
      updatedFavorites = [...favorites, villaId];
    }
    
    localStorage.setItem(KEYS.FAVORITES, JSON.stringify(updatedFavorites));
    return updatedFavorites;
  } catch (error) {
    console.error("Error toggling favorite in localStorage:", error);
    return getFavorites();
  }
};

/**
 * Retrieves the recent search queries from Local Storage.
 * @returns {Array} List of recent search strings
 */
export const getRecentSearches = () => {
  if (!isStorageAvailable()) return [];
  
  try {
    const data = localStorage.getItem(KEYS.RECENT_SEARCHES);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error retrieving recent searches from localStorage:", error);
    return [];
  }
};

/**
 * Saves a new search query to Local Storage, preventing duplicates and keeping a clean limit.
 * @param {string} query - The search query to save
 * @param {number} [limit=5] - Maximum number of recent searches to retain
 * @returns {Array} Updated list of recent search queries
 */
export const saveRecentSearch = (query, limit = 5) => {
  if (!isStorageAvailable() || !query || !query.trim()) return getRecentSearches();
  
  try {
    const cleanQuery = query.trim();
    const searches = getRecentSearches();
    
    // Remove duplication and add to the top (MRU order)
    const filteredSearches = searches.filter(q => q.toLowerCase() !== cleanQuery.toLowerCase());
    const updatedSearches = [cleanQuery, ...filteredSearches].slice(0, limit);
    
    localStorage.setItem(KEYS.RECENT_SEARCHES, JSON.stringify(updatedSearches));
    return updatedSearches;
  } catch (error) {
    console.error("Error saving search query to localStorage:", error);
    return getRecentSearches();
  }
};

/**
 * Saves a new club subscription request to Local Storage.
 * Logs the email or phone number with a timestamp.
 * 
 * @param {string} phoneOrEmail - The user's phone number or email address
 * @returns {Object|null} The saved subscription object, or null if storage is unavailable or input invalid
 */
export const saveClubSubscription = (phoneOrEmail) => {
  if (!isStorageAvailable() || !phoneOrEmail || !phoneOrEmail.trim()) return null;
  
  try {
    const cleanInput = phoneOrEmail.trim();
    const data = localStorage.getItem(KEYS.CLUB_SUBSCRIPTIONS);
    const subscriptions = data ? JSON.parse(data) : [];
    
    const newSubscription = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      contact: cleanInput,
      createdAt: new Date().toISOString()
    };
    
    const updatedSubscriptions = [...subscriptions, newSubscription];
    localStorage.setItem(KEYS.CLUB_SUBSCRIPTIONS, JSON.stringify(updatedSubscriptions));
    return newSubscription;
  } catch (error) {
    console.error("Error saving club subscription to localStorage:", error);
    return null;
  }
};
