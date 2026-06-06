import { useState } from 'react';
import { saveClubSubscription } from '../data/villas.js';
import { translate } from '../services/translationService.js';

export default function ClubPrive({ activeLanguage }) {
  const [contact, setContact] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(() => {
    try {
      return !!localStorage.getItem('luxuria_is_club_member');
    } catch {
      return false;
    }
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!contact || contact.trim().length < 5) {
      setErrorMsg(translate('clubPrive.errorMessage', activeLanguage));
      return;
    }

    // Basic email or phone validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s+\-()]{7,20}$/;
    
    if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
      setErrorMsg(translate('clubPrive.errorMessage', activeLanguage));
      return;
    }

    const sub = saveClubSubscription(contact);
    if (sub) {
      setIsSubscribed(true);
      try {
        localStorage.setItem('luxuria_is_club_member', 'true');
      } catch (err) {
        console.error(err);
      }
    } else {
      setErrorMsg(translate('clubPrive.errorMessage', activeLanguage));
    }
  };

  const getLocalizedTagline = () => {
    switch (activeLanguage) {
      case 'es': return 'Acceso Exclusivo a Propiedades Off-Market';
      case 'fr': return 'Accès Exclusif aux Propriétés Off-Market';
      case 'ja': return 'オフマーケット物件への限定アクセス';
      default: return 'Exclusive Access to Off-Market Properties';
    }
  };

  const getLocalizedLinkText = () => {
    switch (activeLanguage) {
      case 'es': return 'Entrar al Canal Privado (Telegram)';
      case 'fr': return 'Rejoindre le canal privé (Telegram)';
      case 'ja': return 'プライベートチャンネルに参加 (Telegram)';
      default: return 'Join Private Channel (Telegram)';
    }
  };

  return (
    <section className="club-prive-section reveal">
      <div className="double-bezel-outer club-prive-outer">
        <div className="double-bezel-inner club-prive-inner backdrop-blur-2xl">
          <div className="club-prive-glow-orb" aria-hidden="true" />
          
          <div className="club-prive-content">
            <span className="club-prive-eyebrow">
              LUXURIA CLUB PRIVÉ
            </span>
            <h2 className="club-prive-title">
              {translate('clubPrive.welcomeTitle', activeLanguage)}
            </h2>
            <p className="club-prive-tagline">
              {getLocalizedTagline()}
            </p>
            <p className="club-prive-subtext">
              {translate('clubPrive.subtext', activeLanguage)}
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="club-prive-form">
                <div className="club-prive-input-wrapper">
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder={translate('clubPrive.inputPlaceholder', activeLanguage)}
                    className="club-prive-input"
                    aria-label="Email or Phone Number"
                  />
                  {errorMsg && <p className="club-prive-error" role="alert">{errorMsg}</p>}
                </div>

                <button type="submit" className="btn-pill btn-glass-reflect">
                  <span>{translate('clubPrive.reflectionCard.benefits', activeLanguage) || translate('clubPrive.submitButton', activeLanguage)}</span>
                  <span className="btn-pill-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '12px', height: '12px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </button>
              </form>
            ) : (
              <div className="club-prive-success-container">
                <div className="success-icon-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px', color: 'var(--accent-gold)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h4 className="success-title">{translate('clubPrive.successMessage', activeLanguage)}</h4>
                <p className="success-sub">{translate('clubPrive.reflectionCard.status', activeLanguage)} &bull; {translate('clubPrive.reflectionCard.title', activeLanguage)}</p>
                
                <div className="club-prive-mock-links">
                  <a
                    href="https://t.me/joinchat/mock_luxuria_club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-telegram-mock"
                  >
                    <span>{getLocalizedLinkText()}</span>
                    <span className="btn-pill-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '14px', height: '14px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
