import { useState, useEffect } from 'react';
import { saveBooking, toggleFavorite, getFavorites } from '../data/villas.js';
import { translate } from '../services/translationService.js';
import { convertPrice } from '../services/currencyService.js';
import { getWeatherForCoordinates } from '../services/weatherService.js';
import { getWeatherEmoji, translateCondition } from './Gallery.jsx';
import SoundPlayer from './SoundPlayer.jsx';

// Inline helpers for modal rendering
const formatTemp = (temp) => {
  if (typeof temp === 'number') return `${temp}°C`;
  if (typeof temp === 'string' && temp.includes('/')) {
    return temp.split('/').map(t => `${t.trim()}°C`).join(' / ');
  }
  return `${temp}°C`;
};

const parseEvents = (eventString, lang) => {
  if (!eventString) return [];
  let parts;
  if (lang === 'ja') {
    parts = eventString.split('および');
  } else if (lang === 'fr') {
    parts = eventString.split(' et ');
  } else if (lang === 'en') {
    parts = eventString.split(' and ');
  } else {
    parts = eventString.split(' y ');
  }
  
  if (parts.length === 1) {
    const splitters = [' y ', ' and ', ' et ', 'および'];
    for (const s of splitters) {
      const p = eventString.split(s);
      if (p.length > 1) {
        parts = p;
        break;
      }
    }
  }
  
  return parts.map((str, idx) => {
    let season = '';
    let name = str.trim();
    const match = str.match(/\(([^)]+)\)/);
    if (match) {
      season = match[1];
      name = str.replace(/\([^)]+\)/, '').trim();
    }
    if (name.endsWith('.')) {
      name = name.slice(0, -1);
    }
    return {
      id: idx,
      name: name,
      season: season || (idx === 0 ? 'Verano' : 'Primavera')
    };
  });
};

const translateAmenity = (amenity, lang) => {
  const map = {
    es: {
      "Piscina infinita con vistas al océano": "Piscina infinita con vistas al océano",
      "Spa y sauna de bienestar orgánico": "Spa y sauna de bienestar orgánico",
      "Exuberantes jardines mediterráneos": "Exuberantes jardines mediterráneos",
      "Chef privado y alta cocina": "Chef privado y alta cocina",
      "Plataforma de yoga panorámica al aire libre": "Plataforma de yoga panorámica al aire libre",
      "Servicio de mayordomo dedicado las 24 horas, los 7 días de la semana": "Servicio de mayordomo dedicado las 24 horas, los 7 días de la semana",
      "Paredes de vidrio de piso a techo": "Paredes de vidrio de piso a techo",
      "Jacuzzi exterior climatizado": "Jacuzzi exterior climatizado",
      "Gran chimenea de piedra": "Gran chimenea de piedra",
      "Acceso directo a las pistas de esquí (ski-in/ski-out)": "Acceso directo a las pistas de esquí (ski-in/ski-out)",
      "Guía de montaña privado": "Guía de montaña privado",
      "Salón climatizado para equipos de esquí": "Salón climatizado para equipos de esquí",
      "Piscina forestal privada": "Piscina forestal privada",
      "Shala de yoga exclusivo": "Shala de yoga exclusivo",
      "Ducha exterior en la selva tropical": "Ducha exterior en la selva tropical",
      "Huerto orgánico y chef privado": "Huerto orgánico y chef privado",
      "Jardines de meditación zen": "Jardines de meditación zen",
      "Pabellón de masajes en la villa": "Pabellón de masajes en la villa",
      "Piscina de inmersión privada": "Piscina de inmersión privada",
      "Hoguera exterior en el desierto": "Hoguera exterior en el desierto",
      "Arquitectura brutalista de concreto expuesto": "Arquitectura brutalista de concreto expuesto",
      "Vistas panorámicas de roca roja": "Vistas panorámicas de roca roja",
      "Plataforma de observación astronomica": "Plataforma de observación astronomica",
      "Vehículo de aventura todoterreno Tesla": "Vehículo de aventura todoterreno Tesla",
      "Tina hinoki de madera para remojarse": "Tina hinoki de madera para remojarse",
      "Pabellón para ceremonia del té": "Pabellón para ceremonia del té",
      "Jardín zen de piedra tradicional": "Jardín zen de piedra tradicional",
      "Salas de té tradicionales de tatami": "Salas de té tradicionales de tatami",
      "Bodega de degustación de sake": "Bodega de degustación de sake",
      "Anfitrión artesano cultural local": "Anfitrión artesano cultural local",
      "Terraza lounge para el atardecer": "Terraza lounge para el atardecer",
      "Sistema de sonido profesional": "Sistema de sonido profesional",
      "Piscina de fachada modernista": "Piscina de fachada modernista",
      "Bar panorámico con vistas al mar": "Bar panorámico con vistas al mar",
      "Pinar mediterráneo": "Pinar mediterráneo",
      "Casa de invitados VIP": "Casa de invitados VIP"
    },
    en: {
      "Piscina infinita con vistas al océano": "Infinity pool with ocean views",
      "Spa y sauna de bienestar orgánico": "Organic wellness spa and sauna",
      "Exuberantes jardines mediterráneos": "Lush Mediterranean gardens",
      "Chef privado y alta cocina": "Private chef and fine dining",
      "Plataforma de yoga panorámica al aire libre": "Outdoor panoramic yoga deck",
      "Servicio de mayordomo dedicado las 24 horas, los 7 días de la semana": "Dedicated 24/7 butler service",
      "Paredes de vidrio de piso a techo": "Floor-to-ceiling glass walls",
      "Jacuzzi exterior climatizado": "Heated outdoor jacuzzi",
      "Gran chimenea de piedra": "Large stone fireplace",
      "Acceso directo a las pistas de esquí (ski-in/ski-out)": "Direct ski-in/ski-out access",
      "Guía de montaña privado": "Private mountain guide",
      "Salón climatizado para equipos de esquí": "Heated ski gear room",
      "Piscina forestal privada": "Private forest pool",
      "Shala de yoga exclusivo": "Exclusive yoga shala",
      "Ducha exterior en la selva tropical": "Outdoor rainforest shower",
      "Huerto orgánico y chef privado": "Organic garden & private chef",
      "Jardines de meditación zen": "Zen meditation gardens",
      "Pabellón de masajes en la villa": "In-villa massage pavilion",
      "Piscina de inmersión privada": "Private plunge pool",
      "Hoguera exterior en el desierto": "Outdoor desert fire pit",
      "Arquitectura brutalista de concreto expuesto": "Brutalist exposed concrete architecture",
      "Vistas panorámicas de roca roja": "Red rock panoramic views",
      "Plataforma de observación astronomica": "Astronomical observation deck",
      "Vehículo de aventura todoterreno Tesla": "Tesla off-road adventure vehicle",
      "Tina hinoki de madera para remojarse": "Wooden Hinoki soaking tub",
      "Pabellón para ceremonia del té": "Tea ceremony pavilion",
      "Jardín zen de piedra tradicional": "Traditional stone Zen garden",
      "Salas de té tradicionales de tatami": "Traditional tatami tea rooms",
      "Bodega de degustación de sake": "Sake tasting cellar",
      "Anfitrión artesano cultural local": "Local cultural artisan host",
      "Terraza lounge para el atardecer": "Sunset lounge terrace",
      "Sistema de sonido profesional": "Professional sound system",
      "Piscina de fachada modernista": "Modernist facade pool",
      "Bar panorámico con vistas al mar": "Panoramic bar with sea views",
      "Pinar mediterráneo": "Mediterranean pine forest",
      "Casa de invitados VIP": "VIP guest house"
    },
    fr: {
      "Piscina infinita con vistas al océano": "Piscine à débordement avec vue sur l'océan",
      "Spa y sauna de bienestar orgánico": "Spa de bien-être biologique et sauna",
      "Exuberantes jardines mediterráneos": "Jardins méditerranéens luxuriants",
      "Chef privado y alta cocina": "Chef privé et cuisine raffinée",
      "Plataforma de yoga panorámica al aire libre": "Terrasse de yoga panoramique extérieure",
      "Servicio de mayordomo dedicado las 24 horas, los 7 días de la semana": "Service de majordome dédié 24h/24 et 7j/7",
      "Paredes de vidrio de piso a techo": "Murs de verre du sol au plafond",
      "Jacuzzi exterior climatizado": "Jacuzzi extérieur chauffé",
      "Gran chimenea de piedra": "Grande cheminée en pierre",
      "Acceso directo a las pistas de esquí (ski-in/ski-out)": "Accès direct ski-in/ski-out",
      "Guía de montaña privado": "Guide de montagne privé",
      "Salón climatizado para equipos de esquí": "Local à skis chauffé",
      "Piscina forestal privada": "Piscine forestière privée",
      "Shala de yoga exclusivo": "Shala de yoga exclusif",
      "Ducha exterior en la selva tropical": "Douche extérieure dans la forêt tropicale",
      "Huerto orgánico y chef privado": "Potager biologique et chef privé",
      "Jardines de meditación zen": "Jardins de méditation zen",
      "Pabellón de masajes en la villa": "Pavillon de massage dans la villa",
      "Piscina de inmersión privada": "Bassin de plongée privé",
      "Hoguera exterior en el desierto": "Foyer extérieur dans le désert",
      "Arquitectura brutalista de concreto expuesto": "Architecture brutaliste en béton brut",
      "Vistas panorámicas de roca roja": "Vues panoramiques sur la roche rouge",
      "Plataforma de observación astronomica": "Terrasse d'observation astronomique",
      "Vehículo de aventura todoterreno Tesla": "Véhicule d'aventure tout-terrain Tesla",
      "Tina hinoki de madera para remojarse": "Baignoire de trempage Hinoki en bois",
      "Pabellón para ceremonia del té": "Pavillon de la cérémonie du thé",
      "Jardín zen de piedra tradicional": "Jardin zen traditionnel en pierre",
      "Salas de té tradicionales de tatami": "Salons de thé traditionnels en tatami",
      "Bodega de degustación de sake": "Cave de dégustation de saké",
      "Anfitrión artesano cultural local": "Hôte artisan culturel local",
      "Terraza lounge para el atardecer": "Terrasse lounge pour le coucher du soleil",
      "Sistema de sonido profesional": "Système de son professionnel",
      "Piscina de fachada modernista": "Piscine à façade moderniste",
      "Bar panorámico con vistas al mar": "Bar panoramique avec vue sur la mer",
      "Pinar mediterráneo": "Pinède méditerranéenne",
      "Casa de invitados VIP": "Maison d'hôtes VIP"
    },
    ja: {
      "Piscina infinita con vistas al océano": "オーシャンビューのインフィニティプール",
      "Spa y sauna de bienestar orgánico": "オーガニックウェルネススパ＆サウナ",
      "Exuberantes jardines mediterráneos": "緑豊かな地中海庭園",
      "Chef privado y alta cocina": "プライベートシェフとファインダイニング",
      "Plataforma de yoga panorámica al aire libre": "屋外パノラマヨガデッキ",
      "Servicio de mayordomo dedicado las 24 horas, los 7 días de la semana": "24時間年中無休の専属バトラーサービス",
      "Paredes de vidrio de piso a techo": "床から天井までのガラス壁",
      "Jacuzzi exterior climatizado": "温水屋外ジャグジー",
      "Gran chimenea de piedra": "大きな石造りの暖炉",
      "Acceso directo a las pistas de esquí (ski-in/ski-out)": "スキーイン/スキーアウト直結アクセス",
      "Guía de montaña privado": "プライベート登山ガイド",
      "Salón climatizado para equipos de esquí": "温水スキーギア保管室",
      "Piscina forestal privada": "プライベートフォレストプール",
      "Shala de yoga exclusivo": "専用ヨガシャラ",
      "Ducha exterior en la selva tropical": "屋外熱帯雨林シャワー",
      "Huerto orgánico y chef privado": "オーガニック菜園＆プライベートシェフ",
      "Jardines de meditación zen": "禅の瞑想庭園",
      "Pabellón de masajes en la villa": "ヴィラ内マッサージパビリオン",
      "Piscina de inmersión privada": "プライベートプランジプール",
      "Hoguera exterior en el desierto": "屋外デザートファイヤーピット",
      "Arquitectura brutalista de concreto expuesto": "ブルータリズムの打ち放しコンクリート建築",
      "Vistas panorámicas de roca roja": "レッドロックのパノラマビュー",
      "Plataforma de observación astronomica": "天体観測デッキ",
      "Vehículo de aventura todoterreno Tesla": "テスラ製オフロードアドベンチャー車両",
      "Tina hinoki de madera para remojarse": "檜（ひのき）の木製風呂",
      "Pabellón para ceremonia del té": "茶室パビリオン",
      "Jardín zen de piedra tradicional": "伝統的な石の禅庭園",
      "Salas de té tradicionales de tatami": "伝統的な畳 de 茶室",
      "Bodega de degustación de sake": "日本酒試飲用セラー",
      "Anfitrión artesano cultural local": "現地の伝統文化ホスト",
      "Terraza lounge para el atardecer": "夕日を望むラウンジテラス",
      "Sistema de sonido profesional": "プロ仕様音響システム",
      "Piscina de fachada modernista": "モダニズム調ファサードプール",
      "Bar panorámico con vistas al mar": "オーシャンビューのパノラマバー",
      "Pinar mediterráneo": "地中海の松林",
      "Casa de invitados VIP": "VIPゲストハウス"
    }
  };
  return map[lang]?.[amenity] || amenity;
};

export default function DetailModal({ villa, onClose, onBookingSuccess, activeLanguage, activeCurrency }) {
  const [activeTab, setActiveTab] = useState('details');
  const [isFavorited, setIsFavorited] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [selectedDeparture, setSelectedDeparture] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState('limousine');

  useEffect(() => {
    if (!villa) return;
    const favs = getFavorites();
    
    const timer = setTimeout(() => {
      setIsFavorited(favs.includes(villa.id));
      setShowBookingForm(false);
      setBookingSuccess(null);
      setErrorMsg('');
      setActiveTab('details');
      setFormData({
        name: '',
        email: '',
        checkIn: '',
        checkOut: ''
      });
      
      const airports = villa.transfers?.airports || [];
      const ports = villa.transfers?.ports || [];
      if (airports.length > 0) {
        setSelectedDeparture({ type: 'airport', idx: 0, ...airports[0] });
      } else if (ports.length > 0) {
        setSelectedDeparture({ type: 'port', idx: 0, ...ports[0] });
      } else {
        setSelectedDeparture(null);
      }
      setSelectedVehicle('limousine');
    }, 0);

    return () => clearTimeout(timer);
  }, [villa]);

  if (!villa) return null;

  const rates = villa.transfers?.rates || {};
  const isVehicleAvailable = (vehicle) => {
    return rates[vehicle] && rates[vehicle] > 0;
  };

  const calculateTravelTime = (distance, vehicleType) => {
    const speeds = {
      helicopter: 240,
      yacht: 45,
      limousine: 80
    };
    const speed = speeds[vehicleType] || 80;
    const hours = distance / speed;
    const totalMinutes = Math.round(hours * 60);
    if (totalMinutes < 60) {
      return `${totalMinutes} min`;
    }
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  };

  const getTransferCost = () => {
    if (!selectedDeparture) return 0;
    const rate = rates[selectedVehicle] || 0;
    return selectedDeparture.dist * rate;
  };

  const getBlueprintSVG = () => {
    const label1 = villa.id === 1 ? "INFINITY POOL" : villa.id === 2 ? "SNOW DECK" : villa.id === 3 ? "FOREST POOL" : villa.id === 4 ? "PLUNGE POOL" : villa.id === 5 ? "STONE GARDEN" : "SUNSET DECK";
    const label2 = villa.id === 1 ? "ORGANIC SPA" : villa.id === 2 ? "FIREPLACE LOUNGE" : villa.id === 3 ? "YOGA SHALA" : villa.id === 4 ? "CONCRETE PATIO" : villa.id === 5 ? "HINOKI SOAK" : "SOUND CABIN";
    const label3 = villa.id === 1 ? "CLIFFSIDE VIEW" : villa.id === 2 ? "HOT TUB AREA" : villa.id === 3 ? "RAIN SHOWER" : villa.id === 4 ? "FIRE PIT" : villa.id === 5 ? "TEA PAVILION" : "VIP GUEST ROOM";
    
    return (
      <svg viewBox="0 0 500 280" className="blueprint-svg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ stroke: '#3b82f6', fill: 'none', strokeWidth: '0.8' }}>
        <defs>
          <pattern id="blueprint-grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        <rect x="20" y="20" width="460" height="240" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="1.5" />
        <line x1="160" y1="20" x2="160" y2="180" stroke="rgba(59, 130, 246, 0.4)" />
        <line x1="320" y1="100" x2="320" y2="260" stroke="rgba(59, 130, 246, 0.4)" />
        <line x1="20" y1="180" x2="320" y2="180" stroke="rgba(59, 130, 246, 0.4)" />
        <line x1="160" y1="100" x2="480" y2="100" stroke="rgba(59, 130, 246, 0.4)" />
        <rect x="40" y="40" width="100" height="120" stroke="rgba(59, 130, 246, 0.3)" strokeDasharray="3,3" />
        <text x="90" y="105" fill="#3b82f6" fontSize="9" fontFamily="monospace" textAnchor="middle" style={{ stroke: 'none', fontWeight: 600 }}>{label1}</text>
        <circle cx="240" cy="140" r="30" stroke="rgba(59, 130, 246, 0.3)" strokeDasharray="4,2" />
        <text x="240" y="143" fill="#3b82f6" fontSize="9" fontFamily="monospace" textAnchor="middle" style={{ stroke: 'none', fontWeight: 600 }}>{label2}</text>
        <rect x="340" y="120" width="100" height="120" stroke="rgba(59, 130, 246, 0.3)" />
        <line x1="340" y1="120" x2="440" y2="240" stroke="rgba(59, 130, 246, 0.15)" />
        <line x1="440" y1="120" x2="340" y2="240" stroke="rgba(59, 130, 246, 0.15)" />
        <text x="390" y="185" fill="#3b82f6" fontSize="9" fontFamily="monospace" textAnchor="middle" style={{ stroke: 'none', fontWeight: 600 }}>{label3}</text>
        <text x="30" y="245" fill="rgba(59, 130, 246, 0.7)" fontSize="8" fontFamily="monospace" style={{ stroke: 'none' }}>SCALE: 1:100 | N.IV-01</text>
        <text x="470" y="35" fill="rgba(59, 130, 246, 0.7)" fontSize="8" fontFamily="monospace" textAnchor="end" style={{ stroke: 'none' }}>LUXURIA ARCHITECTS</text>
        <line x1="20" y1="10" x2="480" y2="10" stroke="rgba(59, 130, 246, 0.5)" />
        <line x1="20" y1="7" x2="20" y2="13" stroke="rgba(59, 130, 246, 0.5)" />
        <line x1="480" y1="7" x2="480" y2="13" stroke="rgba(59, 130, 246, 0.5)" />
        <text x="250" y="6" fill="rgba(59, 130, 246, 0.7)" fontSize="7" fontFamily="monospace" textAnchor="middle" style={{ stroke: 'none' }}>18.40m</text>
      </svg>
    );
  };

  const handleToggleFavorite = () => {
    const updated = toggleFavorite(villa.id);
    setIsFavorited(updated.includes(villa.id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const { name, email, checkIn, checkOut } = formData;
    if (!name || !email || !checkIn || !checkOut) {
      setErrorMsg(translate('forms.error', activeLanguage));
      return;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    if (checkOutDate <= checkInDate) {
      setErrorMsg(translate('forms.dateError', activeLanguage));
      return;
    }

    const booking = saveBooking(villa.id, { name, email, checkIn, checkOut }, "Petición recibida");
    if (booking) {
      setBookingSuccess(booking);
      if (onBookingSuccess) {
        onBookingSuccess();
      }
    } else {
      setErrorMsg(translate('forms.bookingError', activeLanguage));
    }
  };

  const getLocalizedName = () => {
    return villa.translations?.[activeLanguage]?.name || villa.name;
  };

  const getLocalizedLocation = () => {
    return villa.translations?.[activeLanguage]?.location || villa.location;
  };

  const getLocalizedDescription = () => {
    return villa.translations?.[activeLanguage]?.description || villa.description;
  };

  const getLocalizedExperience = () => {
    return translate(`filters.${villa.experience?.toLowerCase()}`, activeLanguage);
  };

  const getLocalizedEnvironment = () => {
    const envKey = villa.type === 'Costa' ? 'coast' : villa.type === 'Montaña' ? 'mountain' : 'countryside';
    return translate(`filters.${envKey}`, activeLanguage);
  };

  // Weather data mapping
  const weather = getWeatherForCoordinates(villa.latitude, villa.longitude);
  const currentTemp = weather.current.temperature;
  const currentCondition = weather.current.condition;
  const currentEmoji = getWeatherEmoji(currentCondition);

  // Events parsing
  const rawEventsString = villa.translations?.[activeLanguage]?.seasonalEvents || villa.translations?.['en']?.seasonalEvents || '';
  const events = parseEvents(rawEventsString, activeLanguage);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content double-bezel-outer">
        <div className="double-bezel-inner" style={{ position: 'relative' }}>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
            &times;
          </button>
          
          <div className="modal-hero">
            {villa.image ? (
              <img src={villa.image} alt={getLocalizedName()} className="modal-image" />
            ) : (
              <div className="modal-image-placeholder">[Imagen: {getLocalizedName()}]</div>
            )}
            <div className="modal-header-info">
              <span className="modal-experience">{getLocalizedExperience()}</span>
              <h2 id="modal-title">{getLocalizedName()}</h2>
              <p className="modal-location">{getLocalizedLocation()}</p>
            </div>
          </div>

          {/* Interactive tab navigation menu */}
          <div className="modal-tab-menu" role="tablist">
            <button 
              type="button" 
              role="tab"
              aria-selected={activeTab === 'details'}
              className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              {translate('villaDetails.tabs.details', activeLanguage)}
            </button>
            <button 
              type="button" 
              role="tab"
              aria-selected={activeTab === 'weather'}
              className={`tab-btn ${activeTab === 'weather' ? 'active' : ''}`}
              onClick={() => setActiveTab('weather')}
            >
              {translate('villaDetails.tabs.weather', activeLanguage)}
            </button>
            <button 
              type="button" 
              role="tab"
              aria-selected={activeTab === 'location'}
              className={`tab-btn ${activeTab === 'location' ? 'active' : ''}`}
              onClick={() => setActiveTab('location')}
            >
              {translate('villaDetails.tabs.location', activeLanguage)}
            </button>
            <button 
              type="button" 
              role="tab"
              aria-selected={activeTab === 'events'}
              className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              {translate('villaDetails.tabs.events', activeLanguage)}
            </button>
            <button 
              type="button" 
              role="tab"
              aria-selected={activeTab === 'sound'}
              className={`tab-btn ${activeTab === 'sound' ? 'active' : ''}`}
              onClick={() => setActiveTab('sound')}
            >
              {translate('villaDetails.tabs.sound', activeLanguage)}
            </button>
            <button 
              type="button" 
              role="tab"
              aria-selected={activeTab === 'transfers'}
              className={`tab-btn ${activeTab === 'transfers' ? 'active' : ''}`}
              onClick={() => setActiveTab('transfers')}
            >
              {translate('villaDetails.tabs.transfers', activeLanguage)}
            </button>
            <button 
              type="button" 
              role="tab"
              aria-selected={activeTab === 'blueprints'}
              className={`tab-btn ${activeTab === 'blueprints' ? 'active' : ''}`}
              onClick={() => setActiveTab('blueprints')}
            >
              {translate('villaDetails.tabs.blueprints', activeLanguage)}
            </button>
          </div>
  
          <div className="modal-body">
            <div className="modal-main-details">
              {activeTab === 'details' && (
                <>
                  <div className="modal-meta-grid">
                    <div>
                      <strong>
                        {activeLanguage === 'es' ? 'Precio' : 
                         activeLanguage === 'fr' ? 'Prix' : 
                         activeLanguage === 'ja' ? '価格' : 
                         'Price'}
                      </strong>
                      <span>
                        {convertPrice(villa.price, activeCurrency)} / {translate('villaDetails.perNight', activeLanguage)}
                      </span>
                    </div>
                    <div>
                      <strong>{translate('villaDetails.capacity', activeLanguage)}</strong>
                      <span>{villa.guests || villa.capacity} {translate('villaDetails.guests', activeLanguage)}</span>
                    </div>
                    <div>
                      <strong>
                        {activeLanguage === 'es' ? 'Región' : 
                         activeLanguage === 'fr' ? 'Région' : 
                         activeLanguage === 'ja' ? '地域' : 
                         'Region'}
                      </strong>
                      <span>{getLocalizedEnvironment()}</span>
                    </div>
                  </div>
     
                  <div className="modal-description-section">
                    <h3>
                      {activeLanguage === 'es' ? 'Sobre la Propiedad' : 
                       activeLanguage === 'fr' ? 'À propos de la propriété' : 
                       activeLanguage === 'ja' ? 'プロパティについて' : 
                       'About the Property'}
                    </h3>
                    <p>{getLocalizedDescription()}</p>
                  </div>
     
                  {villa.amenities && (
                    <div className="modal-amenities-section">
                      <h3>
                        {activeLanguage === 'es' ? 'Servicios Exclusivos' : 
                         activeLanguage === 'fr' ? 'Services Exclusifs' : 
                         activeLanguage === 'ja' ? '特別サービス' : 
                         'Exclusive Services'}
                      </h3>
                      <ul className="modal-amenities-list">
                        {villa.amenities.map((amenity, index) => (
                          <li key={index} className="amenity-item">
                            <span className="amenity-dot">&bull;</span> {translateAmenity(amenity, activeLanguage)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}

              {activeTab === 'weather' && (
                <div className="modal-weather-tab">
                  <h3>{translate('villaDetails.weatherTitle', activeLanguage)}</h3>
                  <div className="weather-grid">
                    {/* Current Weather Card */}
                    <div className="weather-current-card double-bezel-outer">
                      <div className="double-bezel-inner">
                        <span className="weather-label">{translate('villaDetails.currentWeather', activeLanguage)}</span>
                        <div className="weather-main-info">
                          <span className="weather-large-emoji">{currentEmoji}</span>
                          <span className="weather-large-temp">{currentTemp}°C</span>
                        </div>
                        <p className="weather-condition-text">{translateCondition(currentCondition, activeLanguage)}</p>
                        <div className="weather-stats">
                          <div>
                            <strong>
                              {activeLanguage === 'es' ? 'Viento' : 
                               activeLanguage === 'fr' ? 'Vent' : 
                               activeLanguage === 'ja' ? '風' : 
                               'Wind'}
                            </strong>
                            <span>{weather.current.wind}</span>
                          </div>
                          <div>
                            <strong>
                              {activeLanguage === 'es' ? 'Humedad' : 
                               activeLanguage === 'fr' ? 'Humidité' : 
                               activeLanguage === 'ja' ? '湿度' : 
                               'Humidity'}
                            </strong>
                            <span>{weather.current.humidity}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Forecast Table Container */}
                    <div className="weather-forecast-container">
                      <h4>{translate('villaDetails.forecast', activeLanguage)}</h4>
                      <table className="weather-forecast-table">
                        <thead>
                          <tr>
                            <th>
                              {activeLanguage === 'es' ? 'Día' : 
                               activeLanguage === 'fr' ? 'Jour' : 
                               activeLanguage === 'ja' ? '日' : 
                               'Day'}
                            </th>
                            <th>
                              {activeLanguage === 'es' ? 'Estado' : 
                               activeLanguage === 'fr' ? 'État' : 
                               activeLanguage === 'ja' ? '状態' : 
                               'Condition'}
                            </th>
                            <th>
                              {activeLanguage === 'es' ? 'Temperatura' : 
                               activeLanguage === 'fr' ? 'Température' : 
                               activeLanguage === 'ja' ? '温度' : 
                               'Temp'}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {weather.forecast.map((item, idx) => {
                            const dayName = activeLanguage === 'es' ? `Día ${idx + 1}` : 
                                            activeLanguage === 'fr' ? `Jour ${idx + 1}` : 
                                            activeLanguage === 'ja' ? `${idx + 1}日目` : 
                                            `Day ${idx + 1}`;
                            return (
                              <tr key={idx}>
                                <td>{dayName}</td>
                                <td>
                                  <span style={{ marginRight: '8px' }}>{getWeatherEmoji(item.condition)}</span>
                                  {translateCondition(item.condition, activeLanguage)}
                                </td>
                                <td>{formatTemp(item.temp)}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'location' && (
                <div className="modal-location-tab">
                  <h3>{translate('villaDetails.mapTitle', activeLanguage)}</h3>
                  <p className="location-coords">
                    <span>Lat: <code>{villa.latitude?.toFixed(4)}° N</code></span>
                    <span style={{ margin: '0 12px', color: 'var(--accent-gold)' }}>&bull;</span>
                    <span>Lon: <code>{villa.longitude?.toFixed(4)}° E</code></span>
                  </p>
                  
                  {/* Minimalist vector map container */}
                  <div className="vector-map-container double-bezel-outer">
                    <div className="double-bezel-inner">
                      <svg viewBox="0 0 400 220" className="vector-map-svg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        {/* Map Grid Pattern */}
                        <defs>
                          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        
                        {/* Mock Terrain Contour Lines */}
                        <path d="M-10 160 C 80 180, 120 120, 200 150 C 280 180, 320 130, 410 170" fill="none" stroke="rgba(197, 168, 128, 0.1)" strokeWidth="1.5" />
                        <path d="M-10 120 C 60 140, 100 80, 180 110 C 260 140, 300 90, 410 130" fill="none" stroke="rgba(197, 168, 128, 0.15)" strokeWidth="1" />
                        <path d="M-10 80 C 40 100, 80 40, 160 70 C 240 100, 280 50, 410 90" fill="none" stroke="rgba(197, 168, 128, 0.08)" strokeWidth="1" />
                        
                        {/* Glowing location pin overlay */}
                        <g transform="translate(200, 110)">
                          <circle cx="0" cy="0" r="16" fill="var(--accent-gold)" opacity="0.15" className="map-pulse-anim" />
                          <circle cx="0" cy="0" r="7" fill="var(--accent-gold)" opacity="0.4" />
                          <circle cx="0" cy="0" r="3" fill="var(--accent-gold)" />
                          <path d="M-6 -10 L0 -22 L6 -10 Z" fill="var(--accent-gold)" />
                          <circle cx="0" cy="-14" r="1.5" fill="#050505" />
                        </g>

                        {/* Scale Indicator */}
                        <text x="330" y="200" fill="var(--text-muted)" fontSize="9" fontFamily="monospace">Scale: 1:5,000</text>
                        <line x1="330" y1="205" x2="380" y2="205" stroke="var(--text-muted)" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'events' && (
                <div className="modal-events-tab">
                  <h3>{translate('villaDetails.eventTitle', activeLanguage)}</h3>
                  <div className="events-grid">
                    {events.map((event) => (
                      <div key={event.id} className="event-card double-bezel-outer">
                        <div className="double-bezel-inner">
                          <span className="event-season-tag">
                            {event.season}
                          </span>
                          <h4 className="event-title-text">{event.name}</h4>
                          <p className="event-desc-text">
                            {activeLanguage === 'es' ? 'Disfrute de este acontecimiento único y exclusivo en las inmediaciones de la propiedad.' : 
                             activeLanguage === 'fr' ? 'Profitez de cet événement unique et exclusif à proximité de la propriété.' : 
                             activeLanguage === 'ja' ? 'プロパティ近郊で開催される、このユニークで特別なイベントをお楽しみください。' : 
                             'Experience this unique and exclusive event in the surrounding area of the property.'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'sound' && (
                <div className="modal-sound-tab">
                  <h3>{translate('villaDetails.tabs.soundtrack', activeLanguage)}</h3>
                  <SoundPlayer 
                    soundtrack={villa.soundtrack} 
                    activeLanguage={activeLanguage} 
                  />
                </div>
              )}

              {activeTab === 'transfers' && (
                <div className="modal-transfers-tab">
                  <h3>{translate('villaDetails.transfers.title', activeLanguage)}</h3>
                  <p className="transfers-subtitle">{translate('villaDetails.transfers.subtitle', activeLanguage)}</p>
                  
                  <div className="transfers-calculator-grid">
                    <div className="form-group">
                      <label htmlFor="transfer-departure">{translate('villaDetails.transfers.departure', activeLanguage)}</label>
                      <select
                        id="transfer-departure"
                        className="category-select"
                        value={selectedDeparture ? `${selectedDeparture.type}_${selectedDeparture.idx}` : ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (!val) {
                            setSelectedDeparture(null);
                            return;
                          }
                          const [type, idxStr] = val.split('_');
                          const idx = parseInt(idxStr, 10);
                          const list = type === 'airport' ? (villa.transfers?.airports || []) : (villa.transfers?.ports || []);
                          setSelectedDeparture({ type, idx, ...list[idx] });
                        }}
                      >
                        <option value="">{translate('villaDetails.transfers.selectDeparture', activeLanguage)}</option>
                        {villa.transfers?.airports && villa.transfers.airports.length > 0 && (
                          <optgroup label={activeLanguage === 'es' ? 'Aeropuertos' : activeLanguage === 'fr' ? 'Aéroports' : activeLanguage === 'ja' ? '空港' : 'Airports'}>
                            {villa.transfers.airports.map((airport, idx) => (
                              <option key={`airport_${idx}`} value={`airport_${idx}`}>
                                {airport.name} ({airport.dist} km)
                              </option>
                            ))}
                          </optgroup>
                        )}
                        {villa.transfers?.ports && villa.transfers.ports.length > 0 && (
                          <optgroup label={activeLanguage === 'es' ? 'Puertos' : activeLanguage === 'fr' ? 'Ports' : activeLanguage === 'ja' ? '港' : 'Ports'}>
                            {villa.transfers.ports.map((port, idx) => (
                              <option key={`port_${idx}`} value={`port_${idx}`}>
                                {port.name} ({port.dist} km)
                              </option>
                            ))}
                          </optgroup>
                        )}
                      </select>
                    </div>

                    <div className="form-group" style={{ gridColumn: 'span 2' }}>
                      <label>{translate('villaDetails.transfers.vehicle', activeLanguage)}</label>
                      <div className="vehicle-selector-grid">
                        {['limousine', 'helicopter', 'yacht'].map((vehicle) => {
                          const available = isVehicleAvailable(vehicle);
                          const rate = rates[vehicle] || 0;
                          const icon = vehicle === 'helicopter' ? '🛸' : vehicle === 'yacht' ? '🛥️' : '🚗';
                          const vehicleLabel = translate(`villaDetails.transfers.${vehicle}`, activeLanguage);
                          if (!available) return null;
                          return (
                            <div
                              key={vehicle}
                              className={`vehicle-option-card ${selectedVehicle === vehicle ? 'active' : ''}`}
                              onClick={() => setSelectedVehicle(vehicle)}
                            >
                              <span className="vehicle-icon">{icon}</span>
                              <span className="vehicle-name">{vehicleLabel}</span>
                              <span className="vehicle-rate">
                                {convertPrice(rate, activeCurrency)}/km
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {selectedDeparture && (
                      <div className="transfers-summary-box double-bezel-outer">
                        <div className="double-bezel-inner transfers-summary-inner">
                          <h4 className="transfers-summary-title">
                            {translate('villaDetails.transfers.estimatedCost', activeLanguage)}
                          </h4>
                          <div className="transfers-summary-row">
                            <span>{translate('villaDetails.transfers.departure', activeLanguage)}:</span>
                            <strong>{selectedDeparture.name}</strong>
                          </div>
                          <div className="transfers-summary-row">
                            <span>{translate('villaDetails.transfers.distance', activeLanguage)}:</span>
                            <strong>{selectedDeparture.dist} km</strong>
                          </div>
                          <div className="transfers-summary-row">
                            <span>{translate('villaDetails.transfers.duration', activeLanguage)}:</span>
                            <strong>{calculateTravelTime(selectedDeparture.dist, selectedVehicle)}</strong>
                          </div>
                          <div className="transfers-summary-total">
                            <span>{translate('villaDetails.transfers.estimatedCost', activeLanguage)}:</span>
                            <strong>{convertPrice(getTransferCost(), activeCurrency)}</strong>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'blueprints' && (
                <div className="modal-blueprints-tab">
                  <h3>{translate('villaDetails.blueprints.title', activeLanguage)}</h3>
                  <p className="blueprints-subtitle">{translate('villaDetails.blueprints.subtitle', activeLanguage)}</p>
                  
                  <div className="blueprint-visual-container">
                    <div className="blueprint-visual-inner">
                      {getBlueprintSVG()}
                    </div>
                  </div>

                  {villa.constructionLogs && villa.constructionLogs.length > 0 && (
                    <div className="commit-logs-section">
                      <h4>{translate('villaDetails.blueprints.commitLogTitle', activeLanguage)}</h4>
                      <div className="commit-timeline">
                        {villa.constructionLogs.map((log, index) => {
                          const localizedMsg = log.message?.[activeLanguage] || log.message?.['en'] || '';
                          return (
                            <div key={index} className="commit-item">
                              <span className="commit-badge">{log.hash}</span>
                              <div className="commit-content">
                                <div className="commit-meta">
                                  <span className="commit-author">{log.author}</span>
                                  <span style={{ color: 'var(--border-color)' }}>|</span>
                                  <span className="commit-date">{log.date}</span>
                                </div>
                                <p className="commit-msg">{localizedMsg}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
  
            <div className="modal-booking-sidebar double-bezel-outer">
              <div className="double-bezel-inner">
                <div className="actions-header">
                  <button 
                    type="button" 
                    className={`favorite-toggle-btn ${isFavorited ? 'favorited' : ''}`}
                    onClick={handleToggleFavorite}
                    aria-label={isFavorited ? "Quitar de favoritos" : "Añadir a favoritos"}
                  >
                    {isFavorited 
                      ? (activeLanguage === 'es' ? '★ Favorito' : activeLanguage === 'fr' ? '★ Favori' : activeLanguage === 'ja' ? '★ お気に入り' : '★ Favorited')
                      : (activeLanguage === 'es' ? '☆ Añadir a Favoritos' : activeLanguage === 'fr' ? '☆ Favoris' : activeLanguage === 'ja' ? '☆ お気に入りに追加' : '☆ Add to Favorites')}
                  </button>
                </div>
  
                {!showBookingForm && !bookingSuccess && (
                  <div className="booking-cta-box">
                    <p>{translate('forms.ctaDescription', activeLanguage)}</p>
                    <button 
                      type="button" 
                      className="btn-pill"
                      style={{ width: '100%', justifyContent: 'space-between' }}
                      onClick={() => setShowBookingForm(true)}
                    >
                      <span>{translate('forms.requestConsultation', activeLanguage)}</span>
                      <span className="btn-pill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '14px', height: '14px' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </span>
                    </button>
                  </div>
                )}
  
                {showBookingForm && !bookingSuccess && (
                  <form onSubmit={handleBookingSubmit} className="booking-form">
                    <h3>{translate('forms.requestTitle', activeLanguage)}</h3>
                    {errorMsg && <p className="booking-error">{errorMsg}</p>}
                    
                    <div className="form-group">
                      <label htmlFor="booking-name">{translate('forms.fullName', activeLanguage)}</label>
                      <input
                        type="text"
                        id="booking-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="booking-email">{translate('forms.email', activeLanguage)}</label>
                      <input
                        type="email"
                        id="booking-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="booking-checkin">{translate('forms.checkIn', activeLanguage)}</label>
                      <input
                        type="date"
                        id="booking-checkin"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="booking-checkout">{translate('forms.checkOut', activeLanguage)}</label>
                      <input
                        type="date"
                        id="booking-checkout"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
  
                    <div className="form-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <button type="submit" className="btn-pill" style={{ width: '100%', justifyContent: 'space-between' }}>
                        <span>{translate('forms.submitRequest', activeLanguage)}</span>
                        <span className="btn-pill-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '14px', height: '14px' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      </button>
                      <button 
                        type="button" 
                        className="btn-pill btn-pill-secondary" 
                        style={{ width: '100%', justifyContent: 'space-between' }}
                        onClick={() => setShowBookingForm(false)}
                      >
                        <span>{translate('forms.cancel', activeLanguage)}</span>
                        <span className="btn-pill-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '14px', height: '14px' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </form>
                )}
  
                {bookingSuccess && (
                  <div className="booking-success-box">
                    <h4>{translate('forms.statusLabel', activeLanguage)} <span className="status-badge">{bookingSuccess.status}</span></h4>
                    <p className="success-msg">{translate('forms.successDescription', activeLanguage)}</p>
                    <div className="booking-summary-details">
                      <p><strong>{translate('forms.refId', activeLanguage)}:</strong> <code>{bookingSuccess.id.split('_').slice(1).join('_')}</code></p>
                      <p><strong>{translate('forms.villaLabel', activeLanguage)}:</strong> {getLocalizedName()}</p>
                      <p><strong>{translate('forms.guestLabel', activeLanguage)}:</strong> {bookingSuccess.userDetails.name}</p>
                      <p><strong>{translate('forms.checkInLabel', activeLanguage)}:</strong> {bookingSuccess.userDetails.checkIn}</p>
                      <p><strong>{translate('forms.checkOutLabel', activeLanguage)}:</strong> {bookingSuccess.userDetails.checkOut}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
