import { useState, useEffect, useRef } from 'react';
import { translate } from '../services/translationService.js';

function FlagIcon({ type }) {
  if (type === 'es') {
    return (
      <svg className="mini-flag" viewBox="0 0 120 120" width="16" height="16" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <circle cx="60" cy="60" r="60" fill="#AA151B" />
        <rect x="0" y="30" width="120" height="60" fill="#F1BF00" />
      </svg>
    );
  }
  if (type === 'EUR') {
    return (
      <svg className="mini-flag" viewBox="0 0 120 120" width="16" height="16" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <circle cx="60" cy="60" r="60" fill="#003399" />
        <polygon points="60,35 63,47 75,47 65,55 69,67 60,59 51,67 55,55 45,47 57,47" fill="#FFCC00" />
      </svg>
    );
  }
  if (type === 'fr') {
    return (
      <svg className="mini-flag" viewBox="0 0 120 120" width="16" height="16" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <clipPath id="circle-clip-fr"><circle cx="60" cy="60" r="60" /></clipPath>
        <g clipPath="url(#circle-clip-fr)">
          <rect x="0" y="0" width="40" height="120" fill="#002654" />
          <rect x="40" y="0" width="40" height="120" fill="#FFFFFF" />
          <rect x="80" y="0" width="40" height="120" fill="#ED2939" />
        </g>
      </svg>
    );
  }
  if (type === 'ja' || type === 'JPY') {
    return (
      <svg className="mini-flag" viewBox="0 0 120 120" width="16" height="16" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <circle cx="60" cy="60" r="60" fill="#FFFFFF" stroke="#333333" strokeWidth="2" />
        <circle cx="60" cy="60" r="24" fill="#BC002D" />
      </svg>
    );
  }
  if (type === 'en' || type === 'GBP') {
    return (
      <svg className="mini-flag" viewBox="0 0 120 120" width="16" height="16" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <clipPath id="circle-clip-en"><circle cx="60" cy="60" r="60" /></clipPath>
        <g clipPath="url(#circle-clip-en)">
          <rect x="0" y="0" width="120" height="120" fill="#012169" />
          <line x1="0" y1="0" x2="120" y2="120" stroke="#FFFFFF" strokeWidth="12" />
          <line x1="0" y1="0" x2="120" y2="120" stroke="#C8102E" strokeWidth="6" />
          <line x1="120" y1="0" x2="0" y2="120" stroke="#FFFFFF" strokeWidth="12" />
          <line x1="120" y1="0" x2="0" y2="120" stroke="#C8102E" strokeWidth="6" />
          <rect x="45" y="0" width="30" height="120" fill="#FFFFFF" />
          <rect x="0" y="45" width="120" height="30" fill="#FFFFFF" />
          <rect x="50" y="0" width="20" height="120" fill="#C8102E" />
          <rect x="0" y="50" width="120" height="20" fill="#C8102E" />
        </g>
      </svg>
    );
  }
  if (type === 'USD') {
    return (
      <svg className="mini-flag" viewBox="0 0 120 120" width="16" height="16" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <clipPath id="circle-clip-us"><circle cx="60" cy="60" r="60" /></clipPath>
        <g clipPath="url(#circle-clip-us)">
          <rect x="0" y="0" width="120" height="120" fill="#FFFFFF" />
          <rect x="0" y="0" width="120" height="9" fill="#B22234" />
          <rect x="0" y="18" width="120" height="9" fill="#B22234" />
          <rect x="0" y="36" width="120" height="9" fill="#B22234" />
          <rect x="0" y="54" width="120" height="9" fill="#B22234" />
          <rect x="0" y="72" width="120" height="9" fill="#B22234" />
          <rect x="0" y="90" width="120" height="9" fill="#B22234" />
          <rect x="0" y="108" width="120" height="12" fill="#B22234" />
          <rect x="0" y="0" width="60" height="60" fill="#3C3B6E" />
          <polygon points="30,18 32,25 39,25 33,30 35,37 30,32 25,37 27,30 21,25 28,25" fill="#FFFFFF" />
        </g>
      </svg>
    );
  }
  return null;
}

function CustomDropdown({ label, value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="custom-dropdown-container" ref={dropdownRef}>
      <span className="dropdown-label">{label}</span>
      <button 
        type="button" 
        className="dropdown-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="trigger-content">
          <FlagIcon type={selectedOption?.flagKey || selectedOption?.value} />
          <span className="trigger-text">{selectedOption?.label}</span>
        </span>
        <span className="dropdown-arrow-icon" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '10px', height: '10px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu" role="listbox">
          {options.map((opt) => (
            <li 
              key={opt.value} 
              role="option"
              aria-selected={opt.value === value}
              className={`dropdown-item ${opt.value === value ? 'selected' : ''}`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              <FlagIcon type={opt.flagKey || opt.value} />
              <span className="item-text">{opt.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Navbar({ 
  onToggleAssistant, 
  activeLanguage, 
  setActiveLanguage, 
  activeCurrency, 
  setActiveCurrency 
}) {
  const langOptions = [
    { value: 'es', label: 'ES', flagKey: 'es' },
    { value: 'en', label: 'EN', flagKey: 'en' },
    { value: 'fr', label: 'FR', flagKey: 'fr' },
    { value: 'ja', label: 'JA', flagKey: 'ja' }
  ];

  const currOptions = [
    { value: 'EUR', label: 'EUR (€)', flagKey: 'EUR' },
    { value: 'USD', label: 'USD ($)', flagKey: 'USD' },
    { value: 'GBP', label: 'GBP (£)', flagKey: 'en' },
    { value: 'JPY', label: 'JPY (¥)', flagKey: 'ja' }
  ];

  // Dynamic titles depending on active language
  const labelLang = activeLanguage === 'es' ? 'Idioma' : activeLanguage === 'fr' ? 'Langue' : activeLanguage === 'ja' ? '言語' : 'Language';
  const labelCurr = activeLanguage === 'es' ? 'Moneda' : activeLanguage === 'fr' ? 'Devise' : activeLanguage === 'ja' ? '通貨' : 'Currency';

  return (
    <header className="app-header">
      <nav className="navbar" aria-label="Navegación principal">
        <div className="navbar-brand">
          <a href="/">LUXURIA</a>
        </div>
        
        <ul className="navbar-links">
          <li>
            <a href="#villas-section">
              {translate('nav.villas', activeLanguage)}
            </a>
          </li>
          <li>
            <a href="#experiences">
              {translate('nav.experiences', activeLanguage)}
            </a>
          </li>
          <li>
            <a href="#bookings">
              {translate('nav.bookings', activeLanguage)}
            </a>
          </li>
        </ul>

        <div className="navbar-controls">
          <CustomDropdown 
            label={labelLang}
            value={activeLanguage}
            options={langOptions}
            onChange={setActiveLanguage}
          />

          <CustomDropdown 
            label={labelCurr}
            value={activeCurrency}
            options={currOptions}
            onChange={setActiveCurrency}
          />

          <button 
            type="button" 
            className="btn-pill"
            onClick={onToggleAssistant}
            style={{ marginTop: '14px' }} /* Push down to align horizontally with dropdown triggers */
          >
            <span>
              {activeLanguage === 'es' ? 'Asistente Concierge' : 
               activeLanguage === 'fr' ? 'Assistant Concierge' : 
               activeLanguage === 'ja' ? 'コンシェルジュ' : 
               'Concierge Assistant'}
            </span>
            <span className="btn-pill-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '16px', height: '16px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

