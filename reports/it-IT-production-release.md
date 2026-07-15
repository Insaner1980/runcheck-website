# it-IT-tuotantojulkaisu

Päätös: **JULKAISTU TUOTANTOON** 15.7.2026.

## Rajaus

- Italian 160 artikkelia julkaistaan nykyisellä, jo validoidulla sisällöllä.
- Source 123:n title, H1, metaTitle ja slug säilyvät ennallaan. Aiempi vaihtoehto oli MEDIUM-luottamuksen SEO-ehdotus, ei vahvistettu virhe.
- Julkaisu ei perustu keksittyihin hakumääriin tai Search Console -dataan.

## Toteutus

- `src/data/articleLocaleConfig.mjs`: `it.productionPublished` on `true`.
- Italia sisältyy oletusrakennukseen, sitemapiin, canonicaleihin ja vastavuoroisiin hreflang-ryhmiin.
- `url-osoitteet.md` on muodostettu tuotantobuildista: 1 567 URL-osoitetta, joista 174 on Italian reittejä.

## Validointi

- `npm run build` — PASS, 1 567 sivua.
- Italian 160 artikkelin lähde-eheys-, metadata-, slug- ja kielitestit — PASS.
- Julkaistujen 1 440 artikkelin canonical-, hreflang-, sitemap- ja HTML-regressiotesti — PASS.
- `node scripts/seo-metadata.test.mjs` — PASS. Raportoi 179 title-pituusvaroitusta ja neljä lyhyttä meta description -varoitusta; ne ovat olemassa olevia ei-estäviä havaintoja, eivät Italian julkaisun virheitä.

## Jatkotoimet

- Kerää Italian Search Console -dataa ennen mahdollisia laajempia termimuutoksia.
- Arvioi source 123 uudelleen vain, jos query-data tai natiivi it-IT-toimittaja antaa selkeän perusteen muutokselle.
