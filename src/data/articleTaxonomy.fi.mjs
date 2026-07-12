import { articleHubPath } from './articlePaths.mjs';
import { ARTICLE_HUBS } from './articleTaxonomy.mjs';

const HUB_TRANSLATIONS = Object.freeze({
  battery: {
    title: 'Akku',
    description: 'akun kunto, kuluminen ja virrankulutus',
    metaDescription: 'Android-puhelimen akun kuntoa, kulumista, lataussyklejä, nopeaa tyhjenemistä, vaihtotarvetta ja virrankulutukseen vaikuttavia asetuksia käsittelevät oppaat.',
    sectionTitles: { Health: 'Akun kunto', Drain: 'Virrankulutus' },
  },
  charging: {
    title: 'Lataaminen',
    description: 'lataustavat, nopeudet ja laturien testaus',
    metaDescription: 'Android-puhelimen latausoppaat pikalatauksesta, langattomasta latauksesta, laturien testaamisesta, yölatauksesta, latauslämmöstä ja akkua säästävistä tavoista.',
  },
  thermal: {
    title: 'Kuumeneminen',
    description: 'ylikuumeneminen, suorituskyvyn rajoittuminen ja jäähdytys',
    metaDescription: 'Android-puhelimen kuumenemista, lämpötilan tarkistamista, thermal throttlingia, latauslämpöä, hellekäyttöä, suojakuoria, pelaamista ja jäähdytystä käsittelevät oppaat.',
  },
  network: {
    title: 'Verkkoyhteydet',
    description: 'signaali, nopeus ja yhteysongelmat',
    metaDescription: 'Androidin verkkoyhteysoppaat signaalin voimakkuudesta, Wi-Fi-ongelmista, mobiilidatan nopeudesta, Bluetoothista, verkkoviiveestä, 5G-tuesta, VPN:stä ja yhteyden vakaudesta.',
  },
  storage: {
    title: 'Tallennustila',
    description: 'tila, siivous ja tallennustilan kunto',
    metaDescription: 'Androidin tallennustilaoppaat tilan vapauttamisesta, täyttymisvaroituksista, suurista tiedostoista, latauksista, välimuistista, SD-korteista, pilvisiirroista ja flash-muistin kunnosta.',
  },
  performance: {
    title: 'Nopeus ja suorituskyky',
    description: 'hidastelu, jumiutuminen ja korjaukset',
    metaDescription: 'Androidin suorituskykyoppaat hitaudesta, jumiutumisesta, sovellusten kaatumisesta, uudelleenkäynnistyksistä, muistipaineesta, bloatwaresta, vikasietotilasta ja välimuistista.',
  },
  hardware: {
    title: 'Laitteisto ja anturit',
    description: 'näytön, kameran, äänen ja anturien testaus',
    metaDescription: 'Androidin laitteisto-oppaat diagnostiikasta, antureista, näytöstä, kamerasta, kaiuttimista, mikrofonista, sormenjälkitunnistimesta, NFC:stä, latausportista ja vesivahingoista.',
  },
  software: {
    title: 'Ohjelmisto ja päivitykset',
    description: 'Android-versiot, päivitykset ja tietoturva',
    metaDescription: 'Androidin ohjelmisto-oppaat versioista, tietoturvakorjauksista, järjestelmäpäivityksistä, Google Play -päivityksistä, haittaohjelmista, käyttöluvista ja vikasietotilasta.',
  },
  'physical-damage': {
    title: 'Fyysiset vauriot',
    description: 'putoamiset, vesi- ja näyttövauriot',
    metaDescription: 'Android-puhelimen fyysisiä vaurioita käsittelevät oppaat putoamisen jälkeisistä tarkistuksista, sisäisistä vaurioista, kastumisesta, haljenneesta näytöstä ja rungon vääntymisestä.',
  },
  'device-health': {
    title: 'Laitteen kunto',
    description: 'huolto, käyttöikä ja kuntopisteet',
    metaDescription: 'Android-puhelimen kunto-oppaat diagnostiikasta, kuntopisteistä, huollosta, käyttöiästä, varmuuskopioinnista, vianetsintään valmistautumisesta ja kuntotarkistussovelluksista.',
  },
  'buying-selling': {
    title: 'Ostaminen ja myyminen',
    description: 'käytetyt puhelimet, korjaaminen ja hyvitysarvo',
    metaDescription: 'Käytetyn Android-puhelimen ostamista ja myymistä käsittelevät oppaat kuntotarkistuksesta, jälleenmyyntiin valmistelusta, hyvitysarvosta, korjaamisesta ja vaihtamisesta.',
  },
  myths: {
    title: 'Myytit',
    description: 'akku- ja suorituskykymyytit tarkistettuina',
    metaDescription: 'Android-myyttejä käsittelevät oppaat erottavat toimivat neuvot virheellisistä akku-, lataus-, Wi-Fi-, RAM-muisti-, tehdasasetusten palautus- ja suorituskykyväitteistä.',
  },
  brands: {
    title: 'Merkkikohtaiset oppaat',
    description: 'Samsung, Pixel, Xiaomi, POCO ja OnePlus',
    metaDescription: 'Samsungin, Google Pixelin, Xiaomin, POCOn ja OnePlussan diagnostiikkaa, akun kuntotietoja, huoltovalikoita ja tukityökaluja käsittelevät Android-oppaat.',
  },
});

const localizeHub = (hub) => {
  const translation = HUB_TRANSLATIONS[hub.slug];
  if (!translation) {
    throw new Error(`Finnish article hub translation is missing for ${hub.slug}.`);
  }

  return {
    ...hub,
    ...translation,
    href: articleHubPath(hub.slug, 'fi'),
    sections: hub.sections?.map((section) => ({
      ...section,
      title: translation.sectionTitles?.[section.title] ?? section.title,
    })),
  };
};

export const ARTICLE_HUBS_FI = ARTICLE_HUBS.map(localizeHub);
export const articleHubBySlugFi = new Map(ARTICLE_HUBS_FI.map((hub) => [hub.slug, hub]));
