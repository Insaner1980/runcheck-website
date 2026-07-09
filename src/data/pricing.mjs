import { DEFAULT_SEO_IMAGE, SITE_NAME, absoluteUrl } from './seo.mjs';

export const PRICING_TIERS = {
  US: {
    label: 'USA',
    countryCodes: ['US'],
    currency: 'USD',
    amount: '4.99',
    prices: {
      free: '$0',
      pro: '$4.99',
    },
  },
  EU: {
    label: 'Eurozone',
    countryCodes: [
      'AT',
      'BE',
      'BG',
      'HR',
      'CY',
      'EE',
      'FI',
      'FR',
      'DE',
      'GR',
      'IE',
      'IT',
      'LV',
      'LT',
      'LU',
      'MT',
      'NL',
      'PT',
      'SK',
      'SI',
      'ES',
    ],
    currency: 'EUR',
    amount: '4.99',
    prices: {
      free: '€0',
      pro: '€4,99',
    },
  },
  UK: {
    label: 'United Kingdom',
    countryCodes: ['GB'],
    currency: 'GBP',
    amount: '4.49',
    prices: {
      free: '£0',
      pro: '£4.49',
    },
  },
  CA: {
    label: 'Canada',
    countryCodes: ['CA'],
    currency: 'CAD',
    amount: '6.99',
    prices: {
      free: 'CA$0',
      pro: 'CA$6.99',
    },
  },
  AU: {
    label: 'Australia',
    countryCodes: ['AU'],
    currency: 'AUD',
    amount: '7.99',
    prices: {
      free: 'A$0',
      pro: 'A$7.99',
    },
  },
  CH: {
    label: 'Switzerland',
    countryCodes: ['CH'],
    currency: 'CHF',
    amount: '5.00',
    prices: {
      free: 'CHF 0',
      pro: 'CHF 5.00',
    },
  },
  NO: {
    label: 'Norway',
    countryCodes: ['NO'],
    currency: 'NOK',
    amount: '59',
    prices: {
      free: '0 kr',
      pro: '59 kr',
    },
  },
  SE: {
    label: 'Sweden',
    countryCodes: ['SE'],
    currency: 'SEK',
    amount: '59',
    prices: {
      free: '0 kr',
      pro: '59 kr',
    },
  },
  JP: {
    label: 'Japan',
    countryCodes: ['JP'],
    currency: 'JPY',
    amount: '700',
    prices: {
      free: '¥0',
      pro: '¥700',
    },
  },
  AE: {
    label: 'United Arab Emirates',
    countryCodes: ['AE'],
    currency: 'AED',
    amount: '17.99',
    prices: {
      free: 'AED 0',
      pro: 'AED 17.99',
    },
  },
  SA: {
    label: 'Saudi Arabia',
    countryCodes: ['SA'],
    currency: 'SAR',
    amount: '17.99',
    prices: {
      free: 'SAR 0',
      pro: 'SAR 17.99',
    },
  },
  PL: {
    label: 'Poland',
    countryCodes: ['PL'],
    currency: 'PLN',
    amount: '19.99',
    prices: {
      free: '0 zł',
      pro: '19,99 zł',
    },
  },
  BR: {
    label: 'Brazil',
    countryCodes: ['BR'],
    currency: 'BRL',
    amount: '14.90',
    prices: {
      free: 'R$ 0',
      pro: 'R$ 14,90',
    },
  },
  MX: {
    label: 'Mexico',
    countryCodes: ['MX'],
    currency: 'MXN',
    amount: '79',
    prices: {
      free: 'MX$ 0',
      pro: 'MX$ 79',
    },
  },
  TR: {
    label: 'Turkey',
    countryCodes: ['TR'],
    currency: 'TRY',
    amount: '149',
    prices: {
      free: '₺0',
      pro: '₺149',
    },
  },
  ZA: {
    label: 'South Africa',
    countryCodes: ['ZA'],
    currency: 'ZAR',
    amount: '59',
    prices: {
      free: 'R 0',
      pro: 'R 59',
    },
  },
  MY: {
    label: 'Malaysia',
    countryCodes: ['MY'],
    currency: 'MYR',
    amount: '12',
    prices: {
      free: 'RM 0',
      pro: 'RM 12',
    },
  },
  TH: {
    label: 'Thailand',
    countryCodes: ['TH'],
    currency: 'THB',
    amount: '89',
    prices: {
      free: '฿0',
      pro: '฿89',
    },
  },
  IN: {
    label: 'India',
    countryCodes: ['IN'],
    currency: 'INR',
    amount: '199',
    prices: {
      free: '₹0',
      pro: '₹199',
    },
  },
  ID: {
    label: 'Indonesia',
    countryCodes: ['ID'],
    currency: 'IDR',
    amount: '29000',
    prices: {
      free: 'Rp 0',
      pro: 'Rp 29.000',
    },
  },
  PH: {
    label: 'Philippines',
    countryCodes: ['PH'],
    currency: 'PHP',
    amount: '99',
    prices: {
      free: '₱0',
      pro: '₱99',
    },
  },
  VN: {
    label: 'Vietnam',
    countryCodes: ['VN'],
    currency: 'VND',
    amount: '49000',
    prices: {
      free: '₫0',
      pro: '₫49.000',
    },
  },
  default: {
    label: 'Default',
    countryCodes: [],
    currency: 'USD',
    amount: '4.99',
    prices: {
      free: '$0',
      pro: '$4.99',
    },
  },
};

export const DEFAULT_PRICING_TIER = 'US';
export const FALLBACK_PRICING_TIER = 'default';
export const LOCAL_CURRENCY_NOTE = 'Pricing on Google Play in your local currency.';

export const COUNTRY_TO_PRICING_TIER = Object.freeze(
  Object.fromEntries(
    Object.entries(PRICING_TIERS).flatMap(([tier, pricing]) =>
      tier === FALLBACK_PRICING_TIER ? [] : pricing.countryCodes.map((country) => [country, tier]),
    ),
  ),
);

export function getPricingTier(countryCode) {
  if (!countryCode) {
    return DEFAULT_PRICING_TIER;
  }

  return COUNTRY_TO_PRICING_TIER[countryCode.toUpperCase()] ?? FALLBACK_PRICING_TIER;
}

export function getPrice(plan, tier = DEFAULT_PRICING_TIER) {
  return PRICING_TIERS[tier].prices[plan];
}

export function getStructuredOffers({ site }) {
  return Object.entries(PRICING_TIERS)
    .filter(([tier]) => tier !== FALLBACK_PRICING_TIER)
    .map(([, pricing]) => ({
      '@type': 'Offer',
      name: `${SITE_NAME} Pro - ${pricing.label}`,
      url: absoluteUrl('/#pricing', site),
      price: pricing.amount,
      priceCurrency: pricing.currency,
      eligibleRegion: pricing.countryCodes,
    }));
}

export function buildRuncheckSoftwareApplicationJsonLd({ site }) {
  return {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'MobileApplication'],
    name: SITE_NAME,
    description:
      'runcheck checks Android battery, heat, network, storage, and device health signals. Pro is a one-time upgrade for longer history, widgets, exports, and deeper insights.',
    url: absoluteUrl('/', site),
    image: absoluteUrl(DEFAULT_SEO_IMAGE, site),
    operatingSystem: 'Android',
    applicationCategory: 'UtilitiesApplication',
    offers: getStructuredOffers({ site }),
  };
}
