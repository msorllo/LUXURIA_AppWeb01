import { useState, useEffect, useRef } from 'react';
import { matchConciergeQuery } from '../services/concierge.js';
import { translate } from '../services/translationService.js';
import { convertPrice } from '../services/currencyService.js';

const welcomeMessages = {
  es: '¡Hola! Soy tu concierge personal de Luxuria. Descríbeme qué tipo de experiencia, destino o ambiente buscas (ej. "mar en Amalfi", "esquí en Zermatt", o un refugio "barato para 4 personas") y te recomendaré la propiedad ideal de nuestra colección.',
  en: 'Hello! I am your Luxuria personal concierge. Describe what type of experience, destination or environment you are looking for (e.g., "sea in Amalfi", "skiing in Zermatt", or a "budget refuge for 4 people") and I will recommend the ideal property from our collection.',
  fr: 'Bonjour ! Je suis votre concierge personnel Luxuria. Décrivez-moi le type d\'expérience, de destination ou d\'ambiance que vous recherchez (ex. "mer à Amalfi", "ski à Zermatt" ou un refuge "abordable pour 4 personnes") et je vous recommanderai la propriété idéale de notre collection.',
  ja: 'こんにちは！私はLuxuriaのパーソナルコンシェルジュです。ご希望の体験、目的地、または雰囲気（例：「アマルフィの海」、「ツェルマットのスキー」、「4名用の手頃な隠れ家」など）を教えていただければ、コレクションから最適なプロパティをご提案します。'
};

export default function AssistantSidebar({ isOpen, onClose, onSelectVilla, activeLanguage, activeCurrency, memory, onUserMessage }) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'assistant',
      text: welcomeMessages['es'],
      recommendations: []
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef(null);

  // Synchronize welcome message on language changes
  useEffect(() => {
    setTimeout(() => {
      setMessages(prev => {
        const welcomeText = welcomeMessages[activeLanguage] || welcomeMessages['en'];
        if (prev.length === 1 && prev[0].id === 'welcome') {
          return [{
            id: 'welcome',
            sender: 'assistant',
            text: welcomeText,
            recommendations: []
          }];
        }
        return prev;
      });
    }, 0);
  }, [activeLanguage]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query) return;

    const userMsg = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: query,
      recommendations: []
    };
    if (onUserMessage) {
      onUserMessage(query);
    }
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const matchResult = matchConciergeQuery(query);
      const assistantMsg = {
        id: `assistant_${Date.now()}`,
        sender: 'assistant',
        text: matchResult.text,
        recommendations: matchResult.recommendations
      };
      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 800);
  };

  const getLocalizedName = (villa) => {
    return villa.translations?.[activeLanguage]?.name || villa.name;
  };

  const getLocalizedLocation = (villa) => {
    return villa.translations?.[activeLanguage]?.location || villa.location;
  };

  const getLocalizedType = (villa) => {
    const envKey = villa.type === 'Costa' ? 'coast' : villa.type === 'Montaña' ? 'mountain' : 'countryside';
    return translate(`filters.${envKey}`, activeLanguage);
  };

  return (
    <aside className={`assistant-sidebar ${isOpen ? 'open' : 'closed'}`} aria-label={translate('sidebar.title', activeLanguage)}>
      <div className="sidebar-header">
        <div className="sidebar-title-area">
          <span className="sidebar-badge-dot"></span>
          <h2>{translate('sidebar.title', activeLanguage)}</h2>
        </div>
        <button type="button" className="sidebar-close-btn" onClick={onClose} aria-label="Cerrar Asistente">
          &times;
        </button>
      </div>

      <div className="sidebar-body" ref={bodyRef}>
        {/* Interaction Memory Card */}
        <div className="interaction-memory-card double-bezel-outer">
          <div className="double-bezel-inner">
            <h3 className="memory-title">
              {translate('memoryGraph.title', activeLanguage)}
            </h3>
            {!memory || (!memory.region && !memory.budget && !memory.guests && !memory.interest) ? (
              <p className="memory-empty-text">
                {activeLanguage === 'es' ? 'Nuestra IA concierge recordará sus preferencias a medida que explore la colección.' :
                 activeLanguage === 'fr' ? 'Notre IA concierge se souviendra de vos préférences au fil de votre exploration.' :
                 activeLanguage === 'ja' ? 'コンシェルジュAIが、コレクション探索中のお好みを記憶します。' :
                 'Our AI concierge will remember your preferences as you explore the collection.'}
              </p>
            ) : (
              <div className="memory-tags-container">
                {memory.region && (
                  <span className="memory-tag">
                    {activeLanguage === 'es' ? 'Región' : activeLanguage === 'fr' ? 'Région' : activeLanguage === 'ja' ? '地域' : 'Region'}: {memory.region}
                  </span>
                )}
                {memory.budget && (
                  <span className="memory-tag">
                    {activeLanguage === 'es' ? 'Presupuesto' : activeLanguage === 'fr' ? 'Budget' : activeLanguage === 'ja' ? '予算' : 'Budget'}: {memory.budget}
                  </span>
                )}
                {memory.guests && (
                  <span className="memory-tag">
                    {activeLanguage === 'es' ? 'Huéspedes' : activeLanguage === 'fr' ? 'Voyageurs' : activeLanguage === 'ja' ? '人数' : 'Guests'}: {memory.guests}
                  </span>
                )}
                {memory.interest && (
                  <span className="memory-tag">
                    {activeLanguage === 'es' ? 'Interés' : activeLanguage === 'fr' ? 'Intérêt' : activeLanguage === 'ja' ? '関心' : 'Interest'}: {memory.interest}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
            <div className={`message-bubble ${msg.sender}`}>
              <div className="message-text">{msg.text}</div>
            </div>

            {msg.recommendations && msg.recommendations.length > 0 && (
              <div className="recommendations-container">
                <p className="recommendations-title">
                  {activeLanguage === 'es' ? 'Villas Recomendadas' : 
                   activeLanguage === 'fr' ? 'Villas Recommandées' : 
                   activeLanguage === 'ja' ? 'おすすめのヴィラ' : 
                   'Recommended Villas'}
                </p>
                {msg.recommendations.map((villa) => (
                  <div key={villa.id} className="mini-villa-card double-bezel-outer" style={{ padding: '4px', borderRadius: '16px' }}>
                    <div className="double-bezel-inner" style={{ flexDirection: 'row', display: 'flex', borderRadius: 'calc(16px - 4px)' }}>
                      <img 
                        src={villa.imagePath || villa.image} 
                        alt={getLocalizedName(villa)} 
                        className="mini-villa-img" 
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=150&q=80';
                        }}
                      />
                      <div className="mini-villa-info">
                        <div className="mini-villa-header">
                          <h4>{getLocalizedName(villa)}</h4>
                          <span className="mini-villa-type">{getLocalizedType(villa)}</span>
                        </div>
                        <p className="mini-villa-loc">{getLocalizedLocation(villa)}</p>
                        <div className="mini-villa-footer">
                          <span className="mini-villa-price">{convertPrice(villa.price, activeCurrency)} <small>/ {translate('villaDetails.perNight', activeLanguage)}</small></span>
                          <button 
                            type="button" 
                            className="btn-pill" 
                            style={{ padding: '4px 4px 4px 12px', fontSize: '10px' }}
                            onClick={() => {
                              if (onSelectVilla) {
                                onSelectVilla(villa);
                              }
                              if (onClose) {
                                onClose();
                              }
                            }}
                          >
                            <span>
                              {activeLanguage === 'es' ? 'Ver más' : 
                               activeLanguage === 'fr' ? 'Voir plus' : 
                               activeLanguage === 'ja' ? '詳細を見る' : 
                               'View more'}
                            </span>
                            <span className="btn-pill-icon" style={{ width: '20px', height: '20px' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '10px', height: '10px' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="message-wrapper assistant">
            <div className="message-bubble assistant typing-bubble">
              <div className="typing-indicator" aria-label="El concierge está escribiendo">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="sidebar-footer">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={translate('sidebar.inputPlaceholder', activeLanguage)} 
          className="assistant-input"
          disabled={!isOpen || isTyping}
          aria-label="Mensaje al Concierge"
        />
        <button 
          type="submit" 
          className="btn-pill" 
          style={{ padding: '8px 8px 8px 20px' }}
          disabled={!isOpen || isTyping || !inputValue.trim()}
        >
          <span>{translate('sidebar.send', activeLanguage)}</span>
          <span className="btn-pill-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '14px', height: '14px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </span>
        </button>
      </form>
    </aside>
  );
}
