/**
 * Weather Service for Luxuria Villas
 * Returns current weather and a 3-day forecast tailored to the villa coordinates.
 */

// Preset locations with their respective tailored weather characteristics
const WEATHER_PROFILES = [
  {
    name: "Amalfi",
    latitude: 40.63,
    longitude: 14.60,
    current: {
      temperature: 24,
      condition: "Sunny Breeze",
      wind: "15 km/h",
      humidity: "60%"
    },
    forecast: [
      { day: "Day 1", temp: 23, condition: "Clear Sky" },
      { day: "Day 2", temp: 25, condition: "Pleasant Breeze" },
      { day: "Day 3", temp: 24, condition: "Sunny" }
    ]
  },
  {
    name: "Zermatt",
    latitude: 46.02,
    longitude: 7.75,
    current: {
      temperature: -2,
      condition: "Snowy & Cold",
      wind: "18 km/h",
      humidity: "82%"
    },
    forecast: [
      { day: "Day 1", temp: -4, condition: "Snowy" },
      { day: "Day 2", temp: -1, condition: "Heavy Snow" },
      { day: "Day 3", temp: -3, condition: "Snowy & Cold" }
    ]
  },
  {
    name: "Bali",
    latitude: -8.50,
    longitude: 115.26,
    current: {
      temperature: 29,
      condition: "Tropical Rain",
      wind: "8 km/h",
      humidity: "90%"
    },
    forecast: [
      { day: "Day 1", temp: 30, condition: "Sunny & Humid" },
      { day: "Day 2", temp: 28, condition: "Thunderstorm" },
      { day: "Day 3", temp: 29, condition: "Passing Showers" }
    ]
  },
  {
    name: "Utah",
    latitude: 37.01,
    longitude: -111.48,
    current: {
      temperature: 32,
      condition: "Dry Desert Hot",
      wind: "10 km/h",
      humidity: "15%"
    },
    forecast: [
      { day: "Day 1", temp: "33 / 10", condition: "Hot Day, Cold Night" },
      { day: "Day 2", temp: "31 / 9", condition: "Dry Desert Sunny" },
      { day: "Day 3", temp: "34 / 12", condition: "Scorching Sun" }
    ]
  },
  {
    name: "Kyoto",
    latitude: 35.01,
    longitude: 135.76,
    current: {
      temperature: 19,
      condition: "Misty Morning",
      wind: "6 km/h",
      humidity: "75%"
    },
    forecast: [
      { day: "Day 1", temp: 20, condition: "Zen Calm Morning" },
      { day: "Day 2", temp: 18, condition: "Light Drizzle" },
      { day: "Day 3", temp: 21, condition: "Partly Cloudy" }
    ]
  },
  {
    name: "Ibiza",
    latitude: 38.90,
    longitude: 1.43,
    current: {
      temperature: 26,
      condition: "Sunny Warm",
      wind: "14 km/h",
      humidity: "55%"
    },
    forecast: [
      { day: "Day 1", temp: 27, condition: "Sunny & Clear" },
      { day: "Day 2", temp: 25, condition: "Warm Breeze" },
      { day: "Day 3", temp: 28, condition: "Sunny" }
    ]
  }
];

/**
 * Returns current weather and a 3-day forecast for the given latitude/longitude coordinates.
 * Finds the closest matched villa profile based on Euclidean distance.
 * 
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Object} Current weather and 3-day forecast
 */
export function getWeatherForCoordinates(lat, lon) {
  if (lat === undefined || lat === null || lon === undefined || lon === null) {
    return getDefaultWeather();
  }

  // Convert inputs to numbers
  const latitude = Number(lat);
  const longitude = Number(lon);

  if (isNaN(latitude) || isNaN(longitude)) {
    return getDefaultWeather();
  }

  // Calculate Euclidean distance to find the closest profile
  let closestProfile = null;
  let minDistance = Infinity;

  for (const profile of WEATHER_PROFILES) {
    const dLat = profile.latitude - latitude;
    const dLon = profile.longitude - longitude;
    const distance = Math.sqrt(dLat * dLat + dLon * dLon);
    
    if (distance < minDistance) {
      minDistance = distance;
      closestProfile = profile;
    }
  }

  // If distance is within a reasonable threshold (~5 degrees), return the tailored profile
  if (closestProfile && minDistance < 5.0) {
    return {
      current: { ...closestProfile.current },
      forecast: closestProfile.forecast.map(item => ({ ...item }))
    };
  }

  return getDefaultWeather();
}

/**
 * Returns a fallback default weather object when coordinates don't match or are missing.
 * @returns {Object} Fallback weather
 */
function getDefaultWeather() {
  return {
    current: {
      temperature: 22,
      condition: "Mild",
      wind: "10 km/h",
      humidity: "50%"
    },
    forecast: [
      { day: "Day 1", temp: 21, condition: "Partly Cloudy" },
      { day: "Day 2", temp: 23, condition: "Sunny" },
      { day: "Day 3", temp: 22, condition: "Clear Sky" }
    ]
  };
}
