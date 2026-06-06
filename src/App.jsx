import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Portada from './components/Portada.jsx';
import Hero from './components/Hero.jsx';
import Filters from './components/Filters.jsx';
import Gallery from './components/Gallery.jsx';
import Experiences from './components/Experiences.jsx';
import BookingsPanel from './components/BookingsPanel.jsx';
import DetailModal from './components/DetailModal.jsx';
import AssistantSidebar from './components/AssistantSidebar.jsx';
import ClubPrive from './components/ClubPrive.jsx';
import { villaService } from './services/villaService.js';
import { saveRecentSearch } from './data/villas.js';
import { translate } from './services/translationService.js';
import './App.css';

export default function App() {
  // Global state for language and currency
  const [activeLanguage, setActiveLanguage] = useState('es');
  const [activeCurrency, setActiveCurrency] = useState('EUR');

  // Core state management
  const [selectedVilla, setSelectedVilla] = useState(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(5000);
  const [guestsCount, setGuestsCount] = useState('');
  const [villas, setVillas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingRefresh, setBookingRefresh] = useState(0);
  const [userMemory, setUserMemory] = useState({
    region: '',
    budget: '',
    guests: '',
    interest: ''
  });

  const parseQueryForMemory = (query) => {
    if (!query) return;
    const lower = query.toLowerCase();
    
    setTimeout(() => {
      setUserMemory((prev) => {
        const updated = { ...prev };
        
        // region parsing
        if (lower.includes('costa') || lower.includes('amalfi') || lower.includes('ibiza') || lower.includes('mar') || lower.includes('playa')) {
          updated.region = 'Costa';
        } else if (lower.includes('montaña') || lower.includes('zermatt') || lower.includes('alpes') || lower.includes('nieve') || lower.includes('esquí') || lower.includes('ski')) {
          updated.region = 'Montaña';
        } else if (lower.includes('campo') || lower.includes('bali') || lower.includes('kyoto') || lower.includes('utah') || lower.includes('bosque') || lower.includes('selva')) {
          updated.region = 'Campo';
        }
        
        // budget parsing
        if (lower.includes('barato') || lower.includes('económico') || lower.includes('bajo') || lower.includes('accesible') || lower.includes('cheap')) {
          updated.budget = 'Medio';
        } else if (lower.includes('lujo') || lower.includes('caro') || lower.includes('alto') || lower.includes('exclusivo') || lower.includes('premium') || lower.includes('prive') || lower.includes('expensive')) {
          updated.budget = 'Medio-Alto';
        }
        
        // interest parsing
        if (lower.includes('relax') || lower.includes('bienestar') || lower.includes('spa') || lower.includes('wellness') || lower.includes('salud') || lower.includes('meditación')) {
          updated.interest = 'Bienestar';
        } else if (lower.includes('aventura') || lower.includes('deporte') || lower.includes('adventure') || lower.includes('trekking') || lower.includes('senderismo')) {
          updated.interest = 'Aventura';
        } else if (lower.includes('naturaleza') || lower.includes('dosel') || lower.includes('nature')) {
          updated.interest = 'Naturaleza';
        } else if (lower.includes('fiesta') || lower.includes('social') || lower.includes('amigos') || lower.includes('club') || lower.includes('sunset') || lower.includes('atardecer')) {
          updated.interest = 'Social';
        } else if (lower.includes('cultura') || lower.includes('tradición') || lower.includes('historia') || lower.includes('templo') || lower.includes('sake') || lower.includes('té')) {
          updated.interest = 'Cultura';
        }
        
        return updated;
      });
    }, 0);
  };

  // Listen to search query changes to parse memory
  useEffect(() => {
    if (searchQuery.trim()) {
      parseQueryForMemory(searchQuery, false);
    }
  }, [searchQuery]);

  // Listen to guestsCount changes to parse memory
  useEffect(() => {
    if (guestsCount) {
      setTimeout(() => {
        setUserMemory((prev) => ({
          ...prev,
          guests: `${guestsCount} pax`
        }));
      }, 0);
    }
  }, [guestsCount]);

  // Save search query with debounce
  useEffect(() => {
    if (searchQuery.trim().length > 2) {
      const delayDebounce = setTimeout(() => {
        saveRecentSearch(searchQuery);
      }, 1000);
      return () => clearTimeout(delayDebounce);
    }
  }, [searchQuery]);

  // Fetch and filter villas asynchronously based on current query and category
  useEffect(() => {
    let active = true;
    
    const timer = setTimeout(() => {
      if (active) setLoading(true);
    }, 0);
    
    villaService.getVillas({
      search: searchQuery,
      category: selectedCategory,
      maxPrice,
      guestsCount
    })
      .then((data) => {
        clearTimeout(timer);
        if (active) {
          setVillas(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        clearTimeout(timer);
        console.error("Failed to load villas:", err);
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [searchQuery, selectedCategory, maxPrice, guestsCount]);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [villas, loading]);

  const handleBookingSuccess = () => {
    setBookingRefresh(prev => prev + 1);
  };

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <Navbar 
        onToggleAssistant={() => setIsAssistantOpen((prev) => !prev)} 
        activeLanguage={activeLanguage}
        setActiveLanguage={setActiveLanguage}
        activeCurrency={activeCurrency}
        setActiveCurrency={setActiveCurrency}
      />

      {/* Welcome Cover (Full Viewport Height) */}
      <Portada activeLanguage={activeLanguage} />

      {/* Main Content Layout */}
      <div className="main-layout">
        <Hero activeLanguage={activeLanguage} />
        
        <Filters 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          guestsCount={guestsCount}
          setGuestsCount={setGuestsCount}
          activeLanguage={activeLanguage}
          activeCurrency={activeCurrency}
        />

        {loading ? (
          <div className="loading-state" role="status">
            <p>{translate('loading', activeLanguage) || (activeLanguage === 'es' ? 'Cargando colección exclusiva...' : activeLanguage === 'fr' ? 'Chargement de la collection exclusive...' : activeLanguage === 'ja' ? '限定コレクションをロード中...' : 'Loading exclusive collection...')}</p>
          </div>
        ) : (
          <Gallery 
            villas={villas} 
            onSelectVilla={setSelectedVilla} 
            activeLanguage={activeLanguage}
            activeCurrency={activeCurrency}
          />
        )}

        {/* Concierge Experiences Section */}
        <Experiences activeLanguage={activeLanguage} />

        {/* My Bookings History Section */}
        <BookingsPanel refreshTrigger={bookingRefresh} activeLanguage={activeLanguage} />

        {/* Club Privé Call to Action */}
        <ClubPrive activeLanguage={activeLanguage} />
      </div>

      {/* Luxury Concierge Assistant Sidebar */}
      <AssistantSidebar 
        isOpen={isAssistantOpen} 
        onClose={() => setIsAssistantOpen(false)} 
        onSelectVilla={setSelectedVilla}
        activeLanguage={activeLanguage}
        activeCurrency={activeCurrency}
        memory={userMemory}
        onUserMessage={(text) => parseQueryForMemory(text, true)}
      />

      {/* Detailed Modal view of selected villa */}
      <DetailModal 
        villa={selectedVilla} 
        onClose={() => setSelectedVilla(null)} 
        onBookingSuccess={handleBookingSuccess}
        activeLanguage={activeLanguage}
        activeCurrency={activeCurrency}
      />

      {/* Footer */}
      <footer className="app-footer">
        <p>{translate('footer.copyright', activeLanguage)}</p>
      </footer>
    </div>
  );
}

