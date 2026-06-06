import { translate } from '../services/translationService.js';

export default function Portada({ activeLanguage }) {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('villas-section') || document.querySelector('.main-layout');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="portada-section" aria-label={translate('portada.scroll', activeLanguage)}>
      <div className="portada-overlay"></div>
      <div className="portada-content reveal">
        <span className="portada-eyebrow">{translate('portada.eyebrow', activeLanguage)}</span>
        <h1 className="portada-title">LUXURIA</h1>
        <p className="portada-subtitle">{translate('portada.subtitle', activeLanguage)}</p>
        <button 
          type="button" 
          className="btn-pill"
          onClick={handleScrollDown}
        >
          <span>{translate('portada.cta', activeLanguage)}</span>
          <span className="btn-pill-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </div>
      
      <button 
        type="button" 
        className="portada-scroll-indicator" 
        onClick={handleScrollDown}
        aria-label={translate('portada.scroll', activeLanguage)}
      >
        <span className="scroll-text">{translate('portada.scroll', activeLanguage)}</span>
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
      </button>
    </section>
  );
}
