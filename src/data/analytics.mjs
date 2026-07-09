export const GA4_MEASUREMENT_ID = 'G-4GJKG2Z3ZL';

const GOOGLE_TAG_BASE_URL = 'https://www.googletagmanager.com/gtag/js';

export function buildGoogleTagScriptUrl(measurementId = GA4_MEASUREMENT_ID) {
  const url = new URL(GOOGLE_TAG_BASE_URL);
  url.searchParams.set('id', measurementId);
  return url.toString();
}
