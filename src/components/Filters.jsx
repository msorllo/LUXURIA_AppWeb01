import { translate } from '../services/translationService.js';
import { convertPrice } from '../services/currencyService.js';

export default function Filters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  guestsCount,
  setGuestsCount,
  activeLanguage,
  activeCurrency
}) {
  return (
    <section className="filters-section reveal" aria-label={translate('filters.searchLabel', activeLanguage)} id="filters-section">
      <div className="filters-container">
        <div className="filter-group">
          <label htmlFor="search-input">{translate('filters.searchLabel', activeLanguage)}</label>
          <input
            id="search-input"
            type="text"
            placeholder={translate('filters.searchPlaceholder', activeLanguage)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filter-group">
          <label htmlFor="category-select">{translate('filters.environmentLabel', activeLanguage)}</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="All">{translate('filters.anyEnvironment', activeLanguage)}</option>
            <option value="Costa">{translate('filters.coast', activeLanguage)}</option>
            <option value="Montaña">{translate('filters.mountain', activeLanguage)}</option>
            <option value="Campo">{translate('filters.countryside', activeLanguage)}</option>
          </select>
        </div>

        <div className="filter-group slider-group">
          <label htmlFor="price-slider">
            {translate('filters.maxPriceLabel', activeLanguage)}: <span>
              {maxPrice >= 5000 
                ? translate('filters.noLimit', activeLanguage) 
                : `${convertPrice(maxPrice, activeCurrency)} / ${translate('villaDetails.perNight', activeLanguage)}`}
            </span>
          </label>
          <input
            id="price-slider"
            type="range"
            min="2500"
            max="5000"
            step="100"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="price-slider"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="guests-select">{translate('filters.guestsLabel', activeLanguage)}</label>
          <select
            id="guests-select"
            value={guestsCount}
            onChange={(e) => setGuestsCount(e.target.value)}
            className="category-select"
          >
            <option value="">{translate('filters.anyGuests', activeLanguage)}</option>
            <option value="2">{translate('filters.guestsCountOption', activeLanguage, { count: 2 })}</option>
            <option value="4">{translate('filters.guestsCountOption', activeLanguage, { count: 4 })}</option>
            <option value="6">{translate('filters.guestsCountOption', activeLanguage, { count: 6 })}</option>
            <option value="8">{translate('filters.guestsCountOption', activeLanguage, { count: 8 })}</option>
            <option value="12">{translate('filters.guestsCountOption', activeLanguage, { count: 12 })}</option>
          </select>
        </div>
      </div>
    </section>
  );
}
