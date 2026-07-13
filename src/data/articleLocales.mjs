import { articleHubPath } from './articlePaths.mjs';
export { ARTICLE_LOCALE_ROOTS } from './articlePaths.mjs';
import { ARTICLE_HUBS } from './articleTaxonomy.mjs';

export const ARTICLE_LOCALES = Object.freeze({
  en: { lang: 'en', og: 'en_US', root: '/articles/', searchIndex: '/articles/search-index.json', articles: 'Articles', search: ['Search articles', 'Close search', 'Search results', 'No results', 'Search unavailable'], nav: ['Features', 'Articles', 'Contact'], menu: ['Open menu', 'Close menu', 'Primary navigation', 'Footer navigation'] },
  fi: { lang: 'fi', og: 'fi_FI', root: '/fi/artikkelit/', searchIndex: '/fi/artikkelit/hakuindeksi.json', articles: 'Artikkelit', search: ['Hae artikkeleita', 'Sulje haku', 'Hakutulokset', 'Ei tuloksia', 'Haku ei ole käytettävissä'], nav: ['Ominaisuudet', 'Artikkelit', 'Yhteystiedot'], menu: ['Avaa valikko', 'Sulje valikko', 'Päänavigointi', 'Alatunnisteen navigointi'] },
  sv: { lang: 'sv', og: 'sv_SE', root: '/sv/artiklar/', searchIndex: '/sv/artiklar/sokindex.json', articles: 'Artiklar', search: ['Sök artiklar', 'Stäng sökningen', 'Sökresultat', 'Inga resultat', 'Sökningen är inte tillgänglig'], nav: ['Funktioner', 'Artiklar', 'Kontakt'], menu: ['Öppna menyn', 'Stäng menyn', 'Huvudnavigering', 'Sidfotsnavigering'] },
  nb: { lang: 'nb', og: 'nb_NO', root: '/nb/artikler/', searchIndex: '/nb/artikler/sokeindeks.json', articles: 'Artikler', search: ['Søk i artikler', 'Lukk søket', 'Søkeresultater', 'Ingen resultater', 'Søket er ikke tilgjengelig'], nav: ['Funksjoner', 'Artikler', 'Kontakt'], menu: ['Åpne menyen', 'Lukk menyen', 'Hovednavigasjon', 'Bunntekstnavigasjon'] },
  de: { lang: 'de', og: 'de_DE', root: '/de/artikel/', searchIndex: '/de/artikel/suchindex.json', articles: 'Artikel', search: ['Artikel durchsuchen', 'Suche schließen', 'Suchergebnisse', 'Keine Ergebnisse', 'Suche nicht verfügbar'], nav: ['Funktionen', 'Artikel', 'Kontakt'], menu: ['Menü öffnen', 'Menü schließen', 'Hauptnavigation', 'Fußzeilennavigation'] },
  da: { lang: 'da', og: 'da_DK', root: '/da/artikler/', searchIndex: '/da/artikler/soegeindeks.json', articles: 'Artikler', search: ['Søg i artikler', 'Luk søgning', 'Søgeresultater', 'Ingen resultater', 'Søgning er ikke tilgængelig'], nav: ['Funktioner', 'Artikler', 'Kontakt'], menu: ['Åbn menuen', 'Luk menuen', 'Primær navigation', 'Sidefodsnavigation'] },
  fr: { lang: 'fr', og: 'fr_FR', root: '/fr/articles/', searchIndex: '/fr/articles/index-recherche.json', articles: 'Articles', search: ['Rechercher des articles', 'Fermer la recherche', 'Résultats de recherche', 'Aucun résultat', 'Recherche indisponible'], nav: ['Fonctionnalités', 'Articles', 'Contact'], menu: ['Ouvrir le menu', 'Fermer le menu', 'Navigation principale', 'Navigation de pied de page'] },
});

export const LOCALIZED_ARTICLE_LOCALES = Object.freeze(['sv', 'nb', 'de', 'da', 'fr']);

const HUB_TEXT = {
  sv: [['Batteri','batterihälsa, slitage och förbrukning'],['Laddning','laddningsvanor, hastigheter och laddartest'],['Värme','överhettning, strypning och kylning'],['Nätverk','signal, hastighet och anslutningar'],['Lagring','utrymme, rensning och lagringshälsa'],['Hastighet och prestanda','långsamhet, frysningar och lösningar'],['Hårdvara och sensorer','skärm, kamera, ljud och sensortester'],['Programvara och uppdateringar','Android-versioner, uppdateringar och säkerhet'],['Fysiska skador','fall-, vatten- och skärmskador'],['Enhetshälsa','underhåll, livslängd och hälsopoäng'],['Köpa och sälja','begagnade telefoner, reparation och inbytesvärde'],['Myter','batteri- och prestandamyter granskade'],['Märkesguider','Samsung, Pixel, Xiaomi, POCO och OnePlus']],
  nb: [['Batteri','batterihelse, slitasje og strømforbruk'],['Lading','ladevaner, hastigheter og ladertesting'],['Varme','overoppheting, struping og nedkjøling'],['Nettverk','signal, hastighet og tilkobling'],['Lagring','plass, opprydding og lagringshelse'],['Hastighet og ytelse','treghet, frysing og løsninger'],['Maskinvare og sensorer','skjerm, kamera, lyd og sensortester'],['Programvare og oppdateringer','Android-versjoner, oppdateringer og sikkerhet'],['Fysiske skader','fall-, vann- og skjermskader'],['Enhetshelse','vedlikehold, levetid og helsescore'],['Kjøp og salg','brukte telefoner, reparasjon og innbytteverdi'],['Myter','batteri- og ytelsesmyter kontrollert'],['Merkeguider','Samsung, Pixel, Xiaomi, POCO og OnePlus']],
  de: [['Akku','Akkuzustand, Verschleiß und Verbrauch'],['Laden','Ladegewohnheiten, Geschwindigkeiten und Ladegeräte'],['Temperatur','Überhitzung, Drosselung und Kühlung'],['Netzwerk','Signal, Geschwindigkeit und Verbindungen'],['Speicher','Speicherplatz, Bereinigung und Zustand'],['Geschwindigkeit und Leistung','Verlangsamung, Abstürze und Lösungen'],['Hardware und Sensoren','Display, Kamera, Audio und Sensortests'],['Software und Updates','Android-Versionen, Updates und Sicherheit'],['Physische Schäden','Sturz-, Wasser- und Displayschäden'],['Gerätezustand','Wartung, Lebensdauer und Zustandswerte'],['Kaufen und Verkaufen','Gebrauchtgeräte, Reparatur und Eintauschwert'],['Mythen','Akku- und Leistungsmythen geprüft'],['Markenratgeber','Samsung, Pixel, Xiaomi, POCO und OnePlus']],
  da: [['Batteri','batteritilstand, slid og strømforbrug'],['Opladning','ladevaner, hastigheder og test af opladere'],['Varme','overophedning, drosling og afkøling'],['Netværk','signal, hastighed og forbindelser'],['Lagerplads','plads, oprydning og lagertilstand'],['Hastighed og ydeevne','langsommelighed, fastfrysning og løsninger'],['Hardware og sensorer','skærm, kamera, lyd og sensortest'],['Software og opdateringer','Android-versioner, opdateringer og sikkerhed'],['Fysiske skader','fald-, vand- og skærmskader'],['Enhedstilstand','vedligeholdelse, levetid og tilstandsscore'],['Køb og salg','brugte telefoner, reparation og bytteværdi'],['Myter','batteri- og ydelsesmyter efterprøvet'],['Mærkeguides','Samsung, Pixel, Xiaomi, POCO og OnePlus']],
  fr: [['Batterie','état, usure et consommation'],['Recharge','habitudes de recharge, vitesses et chargeurs'],['Température','surchauffe, bridage et refroidissement'],['Réseau','signal, vitesse et connexions'],['Stockage','espace, nettoyage et état du stockage'],['Vitesse et performances','lenteur, blocages et solutions'],['Matériel et capteurs','écran, appareil photo, audio et tests de capteurs'],['Logiciel et mises à jour','versions d’Android, mises à jour et sécurité'],['Dommages physiques','chutes, eau et dommages de l’écran'],['État de l’appareil','entretien, durée de vie et score d’état'],['Achat et revente','téléphones d’occasion, réparation et valeur de reprise'],['Mythes','mythes sur la batterie et les performances vérifiés'],['Guides par marque','Samsung, Pixel, Xiaomi, POCO et OnePlus']],
};

export const localizedHubs = (locale) => {
  if (locale === 'en') return ARTICLE_HUBS;
  if (locale === 'fi') throw new Error('Use ARTICLE_HUBS_FI for Finnish metadata.');
  const sectionTitles = {
    sv: { Health: 'Batterihälsa', Drain: 'Batteriförbrukning' }, nb: { Health: 'Batterihelse', Drain: 'Strømforbruk' },
    de: { Health: 'Akkuzustand', Drain: 'Akkuverbrauch' }, da: { Health: 'Batteritilstand', Drain: 'Strømforbrug' },
    fr: { Health: 'État de la batterie', Drain: 'Consommation de batterie' },
  };
  const metaTemplates = {
    sv: (title, description) => `${title}: svenska Android-guider om ${description}, med tydliga kontroller, förklaringar och praktiska felsökningssteg.`,
    nb: (title, description) => `${title}: norske Android-guider om ${description}, med tydelige kontroller, forklaringer og praktiske feilsøkingstrinn.`,
    de: (title, description) => `${title}: deutsche Android-Ratgeber zu ${description}, mit klaren Prüfungen, Erklärungen und praktischen Schritten zur Fehlerbehebung.`,
    da: (title, description) => `${title}: danske Android-guides om ${description}, med tydelige kontroller, forklaringer og praktiske trin til fejlfinding.`,
    fr: (title, description) => `${title}: guides Android en français sur ${description}, avec des vérifications claires, des explications et des étapes pratiques de dépannage.`,
  };
  return ARTICLE_HUBS.map((hub, index) => {
    const [title, description] = HUB_TEXT[locale][index];
    return { ...hub, title, description, metaDescription: metaTemplates[locale](title, description), href: articleHubPath(hub.slug, locale), sections: hub.sections?.map((section) => ({ ...section, title: sectionTitles[locale][section.title] ?? section.title })) };
  });
};

export const allArticleAlternates = (articles, sourceNumber) => {
  const byLocale = new Map(articles.filter((item) => item.data.sourceNumber === sourceNumber).map((item) => [item.data.locale, item]));
  const alternates = [...byLocale].map(([locale, item]) => ({ lang: locale, path: `${articleHubPath(item.data.hub, locale)}${item.id.split('/').at(-1)}/` }));
  const english = alternates.find((item) => item.lang === 'en');
  return english ? [...alternates, { lang: 'x-default', path: english.path }] : alternates;
};
