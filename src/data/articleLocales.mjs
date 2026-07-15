import { articleHubPath } from './articlePaths.mjs';
export { ARTICLE_LOCALE_ROOTS } from './articlePaths.mjs';
import { ARTICLE_HUBS } from './articleTaxonomy.mjs';
import { ROUTED_ARTICLE_LOCALE_CODES } from './articleLocaleConfig.mjs';
export {
  ARTICLE_LOCALE_CONTRACTS as ARTICLE_LOCALES,
  LOCALIZED_ARTICLE_LOCALES,
  PUBLISHED_ARTICLE_LOCALE_CODES,
  ROUTED_ARTICLE_LOCALE_CODES,
} from './articleLocaleConfig.mjs';

const HUB_TEXT = {
  sv: [['Batteri','batterihälsa, slitage och förbrukning'],['Laddning','laddningsvanor, hastigheter och laddartest'],['Värme','överhettning, strypning och kylning'],['Nätverk','signal, hastighet och anslutningar'],['Lagring','utrymme, rensning och lagringshälsa'],['Hastighet och prestanda','långsamhet, frysningar och lösningar'],['Hårdvara och sensorer','skärm, kamera, ljud och sensortester'],['Programvara och uppdateringar','Android-versioner, uppdateringar och säkerhet'],['Fysiska skador','fall-, vatten- och skärmskador'],['Enhetshälsa','underhåll, livslängd och hälsopoäng'],['Köpa och sälja','begagnade telefoner, reparation och inbytesvärde'],['Myter','batteri- och prestandamyter granskade'],['Märkesguider','Samsung, Pixel, Xiaomi, POCO och OnePlus']],
  nb: [['Batteri','batterihelse, slitasje og strømforbruk'],['Lading','ladevaner, hastigheter og ladertesting'],['Varme','overoppheting, struping og nedkjøling'],['Nettverk','signal, hastighet og tilkobling'],['Lagring','plass, opprydding og lagringshelse'],['Hastighet og ytelse','treghet, frysing og løsninger'],['Maskinvare og sensorer','skjerm, kamera, lyd og sensortester'],['Programvare og oppdateringer','Android-versjoner, oppdateringer og sikkerhet'],['Fysiske skader','fall-, vann- og skjermskader'],['Enhetshelse','vedlikehold, levetid og helsescore'],['Kjøp og salg','brukte telefoner, reparasjon og innbytteverdi'],['Myter','batteri- og ytelsesmyter kontrollert'],['Merkeguider','Samsung, Pixel, Xiaomi, POCO og OnePlus']],
  de: [['Akku','Akkuzustand, Verschleiß und Verbrauch'],['Laden','Ladegewohnheiten, Geschwindigkeiten und Ladegeräte'],['Temperatur','Überhitzung, Drosselung und Kühlung'],['Netzwerk','Signal, Geschwindigkeit und Verbindungen'],['Speicher','Speicherplatz, Bereinigung und Zustand'],['Geschwindigkeit und Leistung','Verlangsamung, Abstürze und Lösungen'],['Hardware und Sensoren','Display, Kamera, Audio und Sensortests'],['Software und Updates','Android-Versionen, Updates und Sicherheit'],['Physische Schäden','Sturz-, Wasser- und Displayschäden'],['Gerätezustand','Wartung, Lebensdauer und Zustandswerte'],['Kaufen und Verkaufen','Gebrauchtgeräte, Reparatur und Eintauschwert'],['Mythen','Akku- und Leistungsmythen geprüft'],['Markenratgeber','Samsung, Pixel, Xiaomi, POCO und OnePlus']],
  da: [['Batteri','batteritilstand, slid og strømforbrug'],['Opladning','ladevaner, hastigheder og test af opladere'],['Varme','overophedning, drosling og afkøling'],['Netværk','signal, hastighed og forbindelser'],['Lagerplads','plads, oprydning og lagertilstand'],['Hastighed og ydeevne','langsommelighed, fastfrysning og løsninger'],['Hardware og sensorer','skærm, kamera, lyd og sensortest'],['Software og opdateringer','Android-versioner, opdateringer og sikkerhed'],['Fysiske skader','fald-, vand- og skærmskader'],['Enhedstilstand','vedligeholdelse, levetid og tilstandsscore'],['Køb og salg','brugte telefoner, reparation og bytteværdi'],['Myter','batteri- og ydelsesmyter efterprøvet'],['Mærkeguides','Samsung, Pixel, Xiaomi, POCO og OnePlus']],
  fr: [['Batterie','état, usure et consommation'],['Recharge','habitudes de recharge, vitesses et chargeurs'],['Température','surchauffe, bridage et refroidissement'],['Réseau','signal, vitesse et connexions'],['Stockage','espace, nettoyage et état du stockage'],['Vitesse et performances','lenteur, blocages et solutions'],['Matériel et capteurs','écran, appareil photo, audio et tests de capteurs'],['Logiciel et mises à jour','versions d’Android, mises à jour et sécurité'],['Dommages physiques','chutes, eau et dommages de l’écran'],['État de l’appareil','entretien, durée de vie et score d’état'],['Achat et revente','téléphones d’occasion, réparation et valeur de reprise'],['Mythes','mythes sur la batterie et les performances vérifiés'],['Guides par marque','Samsung, Pixel, Xiaomi, POCO et OnePlus']],
  es: [['Batería','estado, desgaste y consumo'],['Carga','hábitos de carga, velocidades y cargadores'],['Temperatura','sobrecalentamiento, limitación térmica y refrigeración'],['Redes','señal, velocidad y conexiones'],['Almacenamiento','espacio, limpieza y estado del almacenamiento'],['Velocidad y rendimiento','lentitud, bloqueos y soluciones'],['Hardware y sensores','pantalla, cámara, audio y pruebas de sensores'],['Software y actualizaciones','versiones de Android, actualizaciones y seguridad'],['Daños físicos','daños por caídas, agua y pantalla'],['Estado del dispositivo','mantenimiento, vida útil y puntuación de estado'],['Compra y venta','teléfonos usados, reparación y valor de recompra'],['Mitos','mitos sobre la batería y el rendimiento comprobados'],['Guías por marca','Samsung, Pixel, Xiaomi, POCO y OnePlus']],
  it: [['Batteria','stato, usura e consumo'],['Ricarica','abitudini, velocità e caricabatterie'],['Temperatura','surriscaldamento, limitazione termica e raffreddamento'],['Rete','segnale, velocità e connessioni'],['Memoria','spazio, pulizia e stato della memoria'],['Velocità e prestazioni','rallentamenti, blocchi e soluzioni'],['Hardware e sensori','schermo, fotocamera, audio e test dei sensori'],['Software e aggiornamenti','versioni di Android, aggiornamenti e sicurezza'],['Danni fisici','cadute, acqua e danni allo schermo'],['Stato del dispositivo','manutenzione, durata e punteggio di stato'],['Acquisto e vendita','smartphone usati, riparazione e valore di permuta'],['Miti','verifica dei miti su batteria e prestazioni'],['Guide per marca','Samsung, Pixel, Xiaomi, POCO e OnePlus']],
};

export const localizedHubs = (locale) => {
  if (locale === 'en') return ARTICLE_HUBS;
  if (locale === 'fi') throw new Error('Use ARTICLE_HUBS_FI for Finnish metadata.');
  const sectionTitles = {
    sv: { Health: 'Batterihälsa', Drain: 'Batteriförbrukning' }, nb: { Health: 'Batterihelse', Drain: 'Strømforbruk' },
    de: { Health: 'Akkuzustand', Drain: 'Akkuverbrauch' }, da: { Health: 'Batteritilstand', Drain: 'Strømforbrug' },
    fr: { Health: 'État de la batterie', Drain: 'Consommation de batterie' },
    es: { Health: 'Estado de la batería', Drain: 'Consumo de batería' },
    it: { Health: 'Stato della batteria', Drain: 'Consumo della batteria' },
  };
  const metaTemplates = {
    sv: (title, description) => `${title}: svenska Android-guider om ${description}, med tydliga kontroller, förklaringar och praktiska felsökningssteg.`,
    nb: (title, description) => `${title}: norske Android-guider om ${description}, med tydelige kontroller, forklaringer og praktiske feilsøkingstrinn.`,
    de: (title, description) => `${title}: deutsche Android-Ratgeber zu ${description}, mit klaren Prüfungen, Erklärungen und praktischen Schritten zur Fehlerbehebung.`,
    da: (title, description) => `${title}: danske Android-guides om ${description}, med tydelige kontroller, forklaringer og praktiske trin til fejlfinding.`,
    fr: (title, description) => `${title}: guides Android en français sur ${description}, avec des vérifications claires, des explications et des étapes pratiques de dépannage.`,
    es: (title, description) => `${title}: guías de Android en español sobre ${description}, con comprobaciones claras, explicaciones y pasos prácticos para solucionar problemas.`,
    it: (title, description) => `${title}: guide Android in italiano su ${description}, con controlli chiari, spiegazioni e passaggi pratici per risolvere i problemi.`,
  };
  return ARTICLE_HUBS.map((hub, index) => {
    const [title, description] = HUB_TEXT[locale][index];
    return { ...hub, title, description, metaDescription: metaTemplates[locale](title, description), href: articleHubPath(hub.slug, locale), sections: hub.sections?.map((section) => ({ ...section, title: sectionTitles[locale][section.title] ?? section.title })) };
  });
};

export const allArticleAlternates = (articles, sourceNumber) => {
  const routedLocales = new Set(ROUTED_ARTICLE_LOCALE_CODES);
  const byLocale = new Map(articles.filter((item) => item.data.sourceNumber === sourceNumber && routedLocales.has(item.data.locale)).map((item) => [item.data.locale, item]));
  const alternates = [...byLocale].map(([locale, item]) => ({ lang: locale, path: `${articleHubPath(item.data.hub, locale)}${item.id.split('/').at(-1)}/` }));
  const english = alternates.find((item) => item.lang === 'en');
  return english ? [...alternates, { lang: 'x-default', path: english.path }] : alternates;
};
