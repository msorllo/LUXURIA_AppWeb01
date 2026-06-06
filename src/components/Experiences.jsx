import { translate } from '../services/translationService.js';

const experiencesData = [
  {
    image: "https://picsum.photos/seed/luxuria-helicopter/600/400"
  },
  {
    image: "https://picsum.photos/seed/luxuria-chef/600/400"
  },
  {
    image: "https://picsum.photos/seed/luxuria-spa/600/400"
  },
  {
    image: "https://picsum.photos/seed/luxuria-yacht/600/400"
  }
];

export default function Experiences({ activeLanguage }) {
  return (
    <section className="experiences-section py-24" id="experiences">
      <div className="section-header reveal text-center">
        <span className="section-eyebrow">{translate('experiences.eyebrow', activeLanguage)}</span>
        <h2 className="section-title">{translate('experiences.title', activeLanguage)}</h2>
        <p className="section-subtitle">
          {translate('experiences.subtitle', activeLanguage)}
        </p>
      </div>
      
      <div className="experiences-grid">
        {experiencesData.map((exp, idx) => {
          const title = translate(`experiences.items.${idx}.title`, activeLanguage);
          const description = translate(`experiences.items.${idx}.description`, activeLanguage);
          const badge = translate(`experiences.items.${idx}.badge`, activeLanguage);

          return (
            <article key={idx} className="experience-card double-bezel-outer reveal">
              <div className="double-bezel-inner">
                <div className="experience-image-wrapper">
                  <img src={exp.image} alt={title} className="experience-image" loading="lazy" />
                  <span className="experience-badge">{badge}</span>
                </div>
                <div className="experience-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <button type="button" className="btn-pill btn-pill-secondary">
                    <span>{translate('experiences.requestBtn', activeLanguage)}</span>
                    <span className="btn-pill-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '14px', height: '14px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
