import { translate } from '../services/translationService.js';

export default function Hero({ activeLanguage }) {
  return (
    <section className="hero-section py-24" aria-label="Introducción a la colección" id="collection-intro">
      <div className="hero-content reveal">
        <span className="hero-eyebrow">{translate('hero.eyebrow', activeLanguage)}</span>
        <h1>{translate('hero.title', activeLanguage)}</h1>
        <p>{translate('hero.subtitle', activeLanguage)}</p>
        <button 
          type="button" 
          className="btn-pill"
          onClick={() => {
            document.getElementById('villas-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>{translate('hero.cta', activeLanguage)}</span>
          <span className="btn-pill-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}

