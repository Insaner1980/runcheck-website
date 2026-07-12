export const articleSlugFromId = (id) => id.split('/').at(-1).replace(/\.mdx?$/, '');

export const LOCALIZED_ARTICLE_HUB_SLUGS = Object.freeze({
  fi: {
  battery: 'akku',
  charging: 'lataaminen',
  thermal: 'kuumeneminen',
  network: 'verkkoyhteydet',
  storage: 'tallennustila',
  performance: 'suorituskyky',
  hardware: 'laitteisto',
  software: 'ohjelmisto',
  'physical-damage': 'fyysiset-vauriot',
  'device-health': 'laitteen-kunto',
  'buying-selling': 'ostaminen-ja-myyminen',
  myths: 'myytit',
  brands: 'merkkikohtaiset-oppaat',
  },
  sv: { battery: 'batteri', charging: 'laddning', thermal: 'varme', network: 'natverk', storage: 'lagring', performance: 'prestanda', hardware: 'hardvara', software: 'programvara', 'physical-damage': 'fysiska-skador', 'device-health': 'enhetshalsa', 'buying-selling': 'kopa-och-salja', myths: 'myter', brands: 'markesguider' },
  nb: { battery: 'batteri', charging: 'lading', thermal: 'varme', network: 'nettverk', storage: 'lagring', performance: 'ytelse', hardware: 'maskinvare', software: 'programvare', 'physical-damage': 'fysiske-skader', 'device-health': 'enhetshelse', 'buying-selling': 'kjop-og-salg', myths: 'myter', brands: 'merkeguider' },
  de: { battery: 'akku', charging: 'laden', thermal: 'temperatur', network: 'netzwerk', storage: 'speicher', performance: 'leistung', hardware: 'hardware', software: 'software', 'physical-damage': 'physische-schaden', 'device-health': 'geratezustand', 'buying-selling': 'kaufen-und-verkaufen', myths: 'mythen', brands: 'markenratgeber' },
  da: { battery: 'batteri', charging: 'opladning', thermal: 'varme', network: 'netvaerk', storage: 'lagerplads', performance: 'ydeevne', hardware: 'hardware', software: 'software', 'physical-damage': 'fysiske-skader', 'device-health': 'enhedstilstand', 'buying-selling': 'kob-og-salg', myths: 'myter', brands: 'maerkeguides' },
});

export const ARTICLE_LOCALE_ROOTS = Object.freeze({
  en: '/articles/', fi: '/fi/artikkelit/', sv: '/sv/artiklar/', nb: '/nb/artikler/', de: '/de/artikel/', da: '/da/artikler/',
});

export const articleHubPath = (hub, locale = 'en') => {
  if (locale !== 'en') {
    const localizedHub = LOCALIZED_ARTICLE_HUB_SLUGS[locale]?.[hub];
    if (!localizedHub) {
      throw new Error(`Article hub path is missing for ${locale}/${hub}.`);
    }
    return `${ARTICLE_LOCALE_ROOTS[locale]}${localizedHub}/`;
  }

  return `/articles/${hub}/`;
};

export const articlePath = (hub, id, locale = 'en') =>
  `${articleHubPath(hub, locale)}${articleSlugFromId(id)}/`;
