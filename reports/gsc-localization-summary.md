# Search Console -lokalisointianalyysi

Tämä raportti perustuu tuotuun Search Console -CSV-aineistoon. Skripti ei muuta artikkeleita, URL-osoitteita, canonicaleja, hreflang-linkkejä tai redirectejä.

## Aineisto ja asetukset

- Rivejä: 0
- Ajanjakso aineistossa: ei rivejä - ei rivejä
- Vähimmäisnäyttökerrat CTR-signaalille: 100
- CTR-enimmäisraja: 0.02
- Sijoitusväli: 4-30
- Vähimmäisnäyttökerrat maaristiriidalle: 50

| Locale | CSV-rivejä |
|---|---:|


## Tulokset

- Lokalisointimahdollisuusrivejä: 0
- Saman localen query × usea URL -ryhmiä: 0
- Kohdemarkkinan ulkopuolisten maiden rivejä asetetulla rajalla: 0
- Tuntemattomia URL-osoitteita: 0

## Tuntemattomat URL-osoitteet

- Ei tuntemattomia URL-osoitteita.

## Tulkintarajat

- Search Console voi jättää anonymisoituja kyselyitä pois ja käyttöliittymävienti voi olla rivimäärältään rajattu.
- Sama kysely usealla URL:lla on näyttöä päällekkäisyydestä, ei yksin todiste haitallisesta kannibalisaatiosta.
- Kohdemarkkinan ulkopuolinen näyttökerta ei yksin osoita väärää locale-kohdistusta.
- CTR:ää pitää arvioida sijoituksen, laitteen, maan, hakuintentin ja riittävän ajanjakson kanssa.
- Termivertailu on normalisoitu heuristiikka. Se ei korvaa natiivin toimittajan tarkistusta eikä oikeuta automaattiseen exact-match-muutokseen.
- Mitään sisältömuutosta ei tehdä automaattisesti.

## Tuotetut tiedostot

- `reports/gsc-localization-opportunities.csv`
- `reports/gsc-cannibalization-evidence.csv`
- `reports/gsc-country-mismatch.csv`
- `reports/gsc-localization-summary.md`
