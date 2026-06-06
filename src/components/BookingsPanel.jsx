import { useEffect, useState } from 'react';
import { getBookings, mockVillas } from '../data/villas.js';
import { translate } from '../services/translationService.js';

export default function BookingsPanel({ refreshTrigger, activeLanguage }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = getBookings();
    Promise.resolve().then(() => {
      setBookings(data);
    });
  }, [refreshTrigger]);

  const getVillaName = (villaId) => {
    const villa = mockVillas.find(v => v.id === Number(villaId));
    if (!villa) return `Villa #${villaId}`;
    return villa.translations?.[activeLanguage]?.name || villa.name;
  };

  const getVillaImage = (villaId) => {
    const villa = mockVillas.find(v => v.id === Number(villaId));
    return villa ? villa.image : null;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    const localeMap = {
      es: 'es-ES',
      en: 'en-US',
      fr: 'fr-FR',
      ja: 'ja-JP'
    };
    return date.toLocaleDateString(localeMap[activeLanguage] || 'es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section className="bookings-section py-24" id="bookings">
      <div className="section-header reveal mb-16 text-center">
        <span className="section-eyebrow">{translate('bookingsPanel.eyebrow', activeLanguage)}</span>
        <h2 className="section-title">{translate('bookingsPanel.title', activeLanguage)}</h2>
        <p className="section-subtitle">
          {translate('bookingsPanel.subtitle', activeLanguage)}
        </p>
      </div>

      <div className="bookings-container reveal">
        {bookings.length === 0 ? (
          <div className="bookings-empty-state double-bezel-outer">
            <div className="double-bezel-inner">
              <p className="empty-message">{translate('bookingsPanel.emptyState', activeLanguage)}</p>
              <button 
                type="button" 
                className="btn-pill btn-pill-secondary mx-auto"
                onClick={() => {
                  document.getElementById('filters-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{translate('bookingsPanel.exploreBtn', activeLanguage)}</span>
                <span className="btn-pill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '14px', height: '14px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="bookings-list-wrapper double-bezel-outer">
            <div className="double-bezel-inner">
              <div className="table-responsive">
                <table className="bookings-table" aria-label="Listado de reservas">
                  <thead>
                    <tr>
                      <th scope="col">{translate('bookingsPanel.colProperty', activeLanguage)}</th>
                      <th scope="col">{translate('bookingsPanel.colGuest', activeLanguage)}</th>
                      <th scope="col">{translate('bookingsPanel.colDates', activeLanguage)}</th>
                      <th scope="col">{translate('bookingsPanel.colStatus', activeLanguage)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => {
                      const villaImage = getVillaImage(booking.villaId);
                      const isConfirmed = booking.status === 'confirmed' || booking.status === 'Confirmada';
                      return (
                        <tr key={booking.id} className="booking-row">
                          <td>
                            <div className="booking-villa-info">
                              {villaImage && (
                                <img 
                                  src={villaImage} 
                                  alt={getVillaName(booking.villaId)} 
                                  className="booking-villa-thumb" 
                                />
                              )}
                              <span className="booking-villa-name">
                                {getVillaName(booking.villaId)}
                              </span>
                            </div>
                          </td>
                          <td className="booking-guest-name">
                            {booking.userDetails?.name || translate('bookingsPanel.guestDefault', activeLanguage)}
                          </td>
                          <td className="booking-dates">
                            <span className="date-badge">
                              {formatDate(booking.userDetails?.checkIn)}
                            </span>
                            <span className="date-separator">{translate('bookingsPanel.dateSeparator', activeLanguage)}</span>
                            <span className="date-badge">
                              {formatDate(booking.userDetails?.checkOut)}
                            </span>
                          </td>
                          <td>
                            <span className={`booking-status-badge ${isConfirmed ? 'confirmed' : 'pending'}`}>
                              {isConfirmed 
                                ? translate('bookingsPanel.statusConfirmed', activeLanguage)
                                : translate('bookingsPanel.statusPending', activeLanguage)}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
