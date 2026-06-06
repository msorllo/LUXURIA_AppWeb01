import { translate } from '../services/translationService.js';
import { convertPrice } from '../services/currencyService.js';
import { getWeatherForCoordinates } from '../services/weatherService.js';

export function getWeatherEmoji(condition) {
  const cond = condition?.toLowerCase() || '';
  if (cond.includes('snow') || cond.includes('cold')) return '❄️';
  if (cond.includes('rain') || cond.includes('drizzle') || cond.includes('shower') || cond.includes('storm')) return '🌧️';
  if (cond.includes('mist') || cond.includes('fog')) return '🌫️';
  if (cond.includes('cloud') || cond.includes('partly')) return '⛅';
  return '☀️';
}

export const translateCondition = (cond, lang) => {
  const map = {
    es: {
      "sunny breeze": "Brisa Soleada",
      "clear sky": "Cielo Despejado",
      "pleasant breeze": "Brisa Agradable",
      "sunny": "Soleado",
      "snowy & cold": "Nevado y Frío",
      "snowy": "Nevado",
      "heavy snow": "Nieve Intensa",
      "tropical rain": "Lluvia Tropical",
      "sunny & humid": "Cálido y Húmedo",
      "thunderstorm": "Tormenta",
      "passing showers": "Chubascos Pasajeros",
      "dry desert hot": "Desierto Seco y Cálido",
      "hot day, cold night": "Día Cálido, Noche Fría",
      "dry desert sunny": "Desierto Seco Soleado",
      "scorching sun": "Sol Abrasador",
      "misty morning": "Mañana de Neblina",
      "zen calm morning": "Mañana Zen Calma",
      "light drizzle": "Llovizna Ligera",
      "partly cloudy": "Parcialmente Nublado",
      "sunny warm": "Soleado y Cálido",
      "sunny & clear": "Soleado y Despejado",
      "warm breeze": "Brisa Cálida",
      "mild": "Templado"
    },
    en: {
      "sunny breeze": "Sunny Breeze",
      "clear sky": "Clear Sky",
      "pleasant breeze": "Pleasant Breeze",
      "sunny": "Sunny",
      "snowy & cold": "Snowy & Cold",
      "snowy": "Snowy",
      "heavy snow": "Heavy Snow",
      "tropical rain": "Tropical Rain",
      "sunny & humid": "Sunny & Humid",
      "thunderstorm": "Thunderstorm",
      "passing showers": "Passing Showers",
      "dry desert hot": "Dry Desert Hot",
      "hot day, cold night": "Hot Day, Cold Night",
      "dry desert sunny": "Dry Desert Sunny",
      "scorching sun": "Scorching Sun",
      "misty morning": "Misty Morning",
      "zen calm morning": "Zen Calm Morning",
      "light drizzle": "Light Drizzle",
      "partly cloudy": "Partly Cloudy",
      "sunny warm": "Sunny Warm",
      "sunny & clear": "Sunny & Clear",
      "warm breeze": "Warm Breeze",
      "mild": "Mild"
    },
    fr: {
      "sunny breeze": "Brise Ensoleillée",
      "clear sky": "Ciel Dégagé",
      "pleasant breeze": "Brise Agréable",
      "sunny": "Ensoleillé",
      "snowy & cold": "Enneigé et Froid",
      "snowy": "Enneigé",
      "heavy snow": "Forte Neige",
      "tropical rain": "Pluie Tropicale",
      "sunny & humid": "Ensoleillé et Humide",
      "thunderstorm": "Orage",
      "passing showers": "Averses Passagères",
      "dry desert hot": "Désert Sec et Chaud",
      "hot day, cold night": "Jour Chaud, Nuit Froide",
      "dry desert sunny": "Désert Sec et Ensoleillé",
      "scorching sun": "Soleil Abrasador",
      "misty morning": "Matin Brumeux",
      "zen calm morning": "Matin Zen Calme",
      "light drizzle": "Pluie Légère",
      "partly cloudy": "Partiellement Nuageux",
      "sunny warm": "Chaud et Ensoleillé",
      "sunny & clear": "Ensoleillé et Dégagé",
      "warm breeze": "Brise Chaude",
      "mild": "Doux"
    },
    ja: {
      "sunny breeze": "晴れ風",
      "clear sky": "快晴",
      "pleasant breeze": "心地よい風",
      "sunny": "晴れ",
      "snowy & cold": "雪と寒さ",
      "snowy": "雪",
      "heavy snow": "大雪",
      "tropical rain": "トロピカルレイン",
      "sunny & humid": "晴れと湿気",
      "thunderstorm": "雷雨",
      "passing showers": "にわか雨",
      "dry desert hot": "乾燥した砂漠の暑さ",
      "hot day, cold night": "昼は暑く、夜は寒い",
      "dry desert sunny": "乾燥した砂漠の晴れ",
      "scorching sun": "猛烈な太陽",
      "misty morning": "霧の朝",
      "zen calm morning": "禅の穏やかな朝",
      "light drizzle": "小雨",
      "partly cloudy": "晴れのち曇り",
      "sunny warm": "暖かい晴れ",
      "sunny & clear": "快晴",
      "warm breeze": "暖かい風",
      "mild": "穏やか"
    }
  };
  const key = cond?.toLowerCase() || '';
  return map[lang]?.[key] || map['en']?.[key] || cond;
};

export default function Gallery({ villas = [], onSelectVilla, activeLanguage, activeCurrency }) {
  const getLocalizedName = (villa) => {
    return villa.translations?.[activeLanguage]?.name || villa.name;
  };

  const getLocalizedLocation = (villa) => {
    return villa.translations?.[activeLanguage]?.location || villa.location;
  };

  const getLocalizedExperience = (villa) => {
    const key = `filters.${villa.experience?.toLowerCase()}`;
    return translate(key, activeLanguage);
  };

  return (
    <main className="gallery-section" aria-label="Galería de villas" id="villas-section">
      <h2 className="reveal">
        {activeLanguage === 'es' ? 'Colección de Propiedades' : 
         activeLanguage === 'fr' ? 'Collection de Propriétés' : 
         activeLanguage === 'ja' ? 'プロパティコレクション' : 
         'Property Collection'}
      </h2>
      {villas.length === 0 ? (
        <p className="no-results reveal">
          {activeLanguage === 'es' ? 'No se encontraron villas que coincidan con sus criterios de búsqueda.' : 
           activeLanguage === 'fr' ? 'Aucune villa ne correspond à vos critères de recherche.' : 
           activeLanguage === 'ja' ? '検索条件に一致するヴィラが見つかりませんでした。' : 
           'No villas found matching your search criteria.'}
        </p>
      ) : (
        <div className="gallery-grid">
          {villas.map((villa) => {
            const weather = getWeatherForCoordinates(villa.latitude, villa.longitude);
            const temp = weather.current.temperature;
            const cond = weather.current.condition;
            const emoji = getWeatherEmoji(cond);

            return (
              <article key={villa.id} className="villa-card double-bezel-outer reveal">
                <div className="double-bezel-inner">
                  <div className="villa-image-wrapper">
                    {villa.image ? (
                      <img src={villa.image} alt={getLocalizedName(villa)} className="villa-image" loading="lazy" />
                    ) : (
                      <div className="villa-image-placeholder">[Imagen: {getLocalizedName(villa)}]</div>
                    )}
                    
                    {/* Floating weather badge */}
                    <div className="villa-weather-badge" title={translateCondition(cond, activeLanguage)}>
                      <span className="weather-emoji">{emoji}</span>
                      <span className="weather-temp">{temp}°C</span>
                    </div>

                    <span className="villa-experience-badge">{getLocalizedExperience(villa)}</span>
                  </div>
                  <div className="villa-details">
                    <h3>{getLocalizedName(villa)}</h3>
                    <p className="villa-location">{getLocalizedLocation(villa)}</p>
                    <div className="villa-footer">
                      <p className="villa-price">
                        {convertPrice(villa.price, activeCurrency)} <small>/ {translate('villaDetails.perNight', activeLanguage)}</small>
                      </p>
                      <button 
                        type="button" 
                        onClick={() => onSelectVilla(villa)}
                        className="btn-pill btn-pill-secondary"
                      >
                        <span>
                          {activeLanguage === 'es' ? 'Ver Detalles' : 
                           activeLanguage === 'fr' ? 'Détails' : 
                           activeLanguage === 'ja' ? '詳細を見る' : 
                           'View Details'}
                        </span>
                        <span className="btn-pill-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '14px', height: '14px' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}

