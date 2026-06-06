/**
 * Currency Service for Luxuria
 * Handles conversion and locale-specific formatting of prices.
 */

// Exchange rates relative to EUR (1.0)
export const EXCHANGE_RATES = {
  EUR: 1.0,
  USD: 1.08,
  GBP: 0.85,
  JPY: 165.0
};

/**
 * Converts a price in EUR to a target currency and formats it using standard currency formatting.
 * For example:
 * - convertPrice(3500, 'EUR') -> "€3,500" (or formatted EUR)
 * - convertPrice(3500, 'USD') -> "$3,780"
 * - convertPrice(3500, 'GBP') -> "£2,975"
 * - convertPrice(3500, 'JPY') -> "¥577,500"
 * 
 * @param {number} priceInEur - The price of the villa in Euros
 * @param {string} targetCurrency - Target currency code ('EUR', 'USD', 'GBP', 'JPY')
 * @returns {string} The converted and formatted price string
 */
export function convertPrice(priceInEur, targetCurrency = 'EUR') {
  if (priceInEur === undefined || priceInEur === null || isNaN(Number(priceInEur))) {
    return "";
  }

  const basePrice = Number(priceInEur);
  const currencyCode = String(targetCurrency).toUpperCase();
  
  // Resolve exchange rate or fall back to EUR (1.0)
  const rate = EXCHANGE_RATES[currencyCode] !== undefined ? EXCHANGE_RATES[currencyCode] : 1.0;
  
  // Calculate converted value and round to nearest integer as per design constraints
  const converted = Math.round(basePrice * rate);

  // Map to enforce standard code-to-currency translation
  const validatedCurrency = EXCHANGE_RATES[currencyCode] !== undefined ? currencyCode : 'EUR';

  try {
    // We format using 'en-US' locale to ensure thousand separators are commas (e.g. €3,500, $3,780)
    // as requested in the specification.
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: validatedCurrency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(converted);
  } catch (error) {
    console.error("Formatting error in convertPrice:", error);
    // Solid fallback in case of format failure
    const symbolMap = {
      EUR: '€',
      USD: '$',
      GBP: '£',
      JPY: '¥'
    };
    const symbol = symbolMap[validatedCurrency] || '€';
    return `${symbol}${converted.toLocaleString('en-US')}`;
  }
}
