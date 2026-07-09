export const GA4_MEASUREMENT_ID = 'G-4GJKG2Z3ZL';
export const CLOUDFLARE_WEB_ANALYTICS_TOKEN = '3b61b056d0834a899a706c2583a33b97';
export const CLOUDFLARE_WEB_ANALYTICS_SCRIPT_URL = 'https://static.cloudflareinsights.com/beacon.min.js';

const GOOGLE_TAG_BASE_URL = 'https://www.googletagmanager.com/gtag/js';

export function buildGoogleTagScriptUrl(measurementId = GA4_MEASUREMENT_ID) {
  const url = new URL(GOOGLE_TAG_BASE_URL);
  url.searchParams.set('id', measurementId);
  return url.toString();
}

export function buildCloudflareWebAnalyticsBeaconConfig(token = CLOUDFLARE_WEB_ANALYTICS_TOKEN) {
  return JSON.stringify({ token });
}
