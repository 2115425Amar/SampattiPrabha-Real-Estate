// lib/googleMaps.js
import axios from "axios";

const GOOGLE_API = "https://maps.googleapis.com/maps/api";

export async function fetchPropertyImages({ latitude, longitude, address }) {
  try {
    // 1. Prefer Street View image if lat/lng available
    if (latitude && longitude) {
      const streetViewUrl = `${GOOGLE_API}/streetview?size=600x400&location=${latitude},${longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
      return [streetViewUrl]; // Single image fallback
    }

    // 2. If no lat/lng → use Places Photo API
    const placeSearchUrl = `${GOOGLE_API}/place/findplacefromtext/json?input=${encodeURIComponent(
      address
    )}&inputtype=textquery&fields=photos&key=${process.env.GOOGLE_MAPS_API_KEY}`;
    const res = await axios.get(placeSearchUrl);
    if (res.data.candidates?.[0]?.photos?.[0]) {
      const photoRef = res.data.candidates[0].photos[0].photo_reference;
      const photoUrl = `${GOOGLE_API}/place/photo?maxwidth=600&photoreference=${photoRef}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
      return [photoUrl];
    }

    return []; // No images found
  } catch (err) {
    console.error("Google Maps image fetch failed:", err.message);
    return [];
  }
}
