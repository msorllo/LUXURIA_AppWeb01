import { useState } from 'react';
import { translate } from '../services/translationService.js';

export default function SoundPlayer({ soundtrack, activeLanguage }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  if (!soundtrack) return null;

  return (
    <div className="sound-player-wrapper double-bezel-outer">
      <div className="double-bezel-inner sound-player-container">
        <div className="sound-player-header">
          <span className="sound-player-badge">
            {translate('soundPlayer.ambientSounds', activeLanguage)}
          </span>
          <div className="sound-player-track-info">
            <h4 className="sound-player-title">{soundtrack.title}</h4>
            <p className="sound-player-desc">{soundtrack.desc}</p>
          </div>
        </div>

        <div className="sound-player-controls-row">
          {/* Equalizer Visualizer */}
          <div className="equalizer-container" aria-hidden="true">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`equalizer-bar ${isPlaying ? 'animating' : ''}`}
                style={{
                  animationDelay: `${i * 0.08}s`,
                  animationDuration: isPlaying ? `${0.5 + (i % 4) * 0.2}s` : '0s'
                }}
              />
            ))}
          </div>

          <div className="sound-player-controls">
            {/* Play/Pause Button in Button */}
            <button
              type="button"
              className="btn-pill play-toggle-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? translate('soundPlayer.pause', activeLanguage) : translate('soundPlayer.play', activeLanguage)}
            >
              <span>
                {isPlaying 
                  ? translate('soundPlayer.pause', activeLanguage) 
                  : translate('soundPlayer.play', activeLanguage)}
              </span>
              <span className="btn-pill-icon">
                {isPlaying ? (
                  // Pause Icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '12px', height: '12px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                  </svg>
                ) : (
                  // Play Icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '12px', height: '12px', marginLeft: '2px' }}>
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Volume Slider Block */}
        <div className="volume-control-container">
          <label htmlFor="volume-slider" className="volume-label">
            <span>{translate('soundPlayer.volume', activeLanguage)}</span>
            <span className="volume-value">{volume}%</span>
          </label>
          <div className="volume-slider-wrapper">
            <span className="volume-icon-span" onClick={() => setVolume(v => v > 0 ? 0 : 70)}>
              {volume === 0 ? (
                // Muted Icon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
                </svg>
              ) : (
                // Volumed Icon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
              )}
            </span>
            <input
              type="range"
              id="volume-slider"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="volume-slider"
              style={{
                background: `linear-gradient(to right, var(--accent-gold) 0%, var(--accent-gold) ${volume}%, rgba(255,255,255,0.1) ${volume}%, rgba(255,255,255,0.1) 100%)`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
