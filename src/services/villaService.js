import { mockVillas } from '../data/villas.js';

/**
 * Service to fetch and filter villas based on user queries.
 * In a real application, this would fetch from an API endpoint (e.g. Supabase, Firebase, or external API).
 */
export const villaService = {
  async getVillas({ search = '', category = 'All', maxPrice, guestsCount } = {}) {
    // Simulate network latency
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...mockVillas];

        // 1. Filter by category (experience or type)
        if (category && category !== 'All' && category !== 'Todos') {
          let targetCategory = category.toLowerCase();
          // Normalize old English category filters to the new Spanish types
          if (targetCategory === 'beachfront') targetCategory = 'costa';
          if (targetCategory === 'mountain') targetCategory = 'montaña';
          if (targetCategory === 'countryside') targetCategory = 'campo';

          filtered = filtered.filter(v => 
            v.type.toLowerCase() === targetCategory ||
            v.experience.toLowerCase() === targetCategory
          );
        }

        // 2. Filter by search query
        if (search) {
          const query = search.toLowerCase().trim();
          filtered = filtered.filter(v => 
            v.name.toLowerCase().includes(query) || 
            v.location.toLowerCase().includes(query) ||
            v.description.toLowerCase().includes(query) ||
            v.experience.toLowerCase().includes(query) ||
            (v.keywords && v.keywords.some(k => k.toLowerCase().includes(query)))
          );
        }

        // 3. Filter by Max Price (maxPrice)
        if (maxPrice !== undefined && maxPrice !== null && maxPrice !== '') {
          const priceLimit = Number(maxPrice);
          if (!isNaN(priceLimit)) {
            filtered = filtered.filter(v => v.price <= priceLimit);
          }
        }

        // 4. Filter by Minimum Capacity (guestsCount)
        if (guestsCount !== undefined && guestsCount !== null && guestsCount !== '') {
          const minGuests = Number(guestsCount);
          if (!isNaN(minGuests)) {
            filtered = filtered.filter(v => {
              const capacity = v.capacity !== undefined ? v.capacity : v.guests;
              return capacity >= minGuests;
            });
          }
        }

        resolve(filtered);
      }, 100);
    });
  }
};

