---
title: "Näin testaat puhelimen värinämoottorin"
description: "Metakuvaus: Testaa Android-puhelimen värinämoottori nopeasti asetusten, näppäimistöpalautteen, vikasietotilan ja valmistajan diagnostiikan avulla."
listSummary: "laitteisto, testaus ja diagnostiikka"
hub: "hardware"
sourceNumber: 109
order: 6
tags: ["laitteisto","testaus","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
---

Äänetön puhelin ei automaattisesti tarkoita, että värinämoottori on rikki. Useimmat värinäongelmat johtuvat ensin asetuksista, sitten ohjelmistosta ja vasta viimeisenä laitteistosta.

Järjestyksellä on väliä. Värinämoottorin vaihtaminen vain siksi, että Älä häiritse -tila esti värinän, on rahanhukkaa.

## Tarkista ensin värinäasetukset

Avaa Asetukset ja etsi ääni-, värinä- tai haptisen palautteen asetukset. Tarkka sijainti riippuu puhelimen valmistajasta.

Samsung Galaxy -puhelimissa avaa ääni- ja värinäasetukset ja etsi värinän voimakkuus. Puheluille, ilmoituksille, järjestelmäpalautteelle ja kosketuspalautteelle voi olla erilliset säätimet. Yhden voi helposti vetää nollaan muiden jäädessä päälle.

Tarkista myös Älä häiritse -tila. Pixelissä ja muissa lähellä vakio-Androidia olevissa puhelimissa se löytyy yleensä ilmoitusasetuksista. Samsungissa se löytyy myös ilmoitusasetusten alta. Tila voi estää värinän sen mukaan, miten puhelut, sovellukset ja ajastukset on määritetty.

Tarkista vielä näppäimistö. Gboardissa, Samsung Keyboardissa ja SwiftKeyssä on omat haptisen palautteen asetuksensa. Jos näppäimistön värinä on poistettu käytöstä näppäimistösovelluksessa, kirjoittaminen ei värise, vaikka moottori olisi täysin kunnossa.

## Käytä suoraa värinätestiä

Samsung Galaxy -puhelimissa selkein sisäänrakennettu vaihtoehto on Samsung Members. Avaa sovellus, valitse Pyydä apua > Näytä testit ja suorita värinätesti. Samsung Membersin nykyisessä testivalikoimassa värinä on oma testinsä, joten tämä on varmempi reitti kuin piilokoodit.

Vanha Samsungin koodi `*#0*#` avaa edelleen laitteistotestivalikon monissa Galaxy-malleissa. Valitse Vibration, jolloin puhelimen pitäisi väristä, kunnes poistut testistä. Koodi vaatii Samsungin oman Puhelin-sovelluksen. Operaattorin ohjelmisto, uudet One UI -suojausasetukset tai yrityslaitteen rajoitukset voivat estää valikon.

Osa Android-puhelimista reagoi myös koodiin `*#*#0842#*#*`, jota on pitkään käytetty värinän ja taustavalon testikoodina. Älä pidä sitä yleispätevänä. Pixelit eivät yleensä tue sitä, ja monet nykyiset numeronvalitsimet jättävät sen huomiotta.

Xiaomi-, Redmi- ja POCO-puhelimissa voit kokeilla CIT-valikkoa koodilla `*#*#6484#*#*`. Valikon nimi ja testit vaihtelevat MIUI- ja HyperOS-versioiden välillä, mutta värinätesti on yleensä mukana.

## Testaa hienovarainen haptinen palaute näppäimistöllä

Avaa muistiinpanosovellus ja kirjoita muutama lause. Jos kosketusvärinä on käytössä, jokaisen näppäinpainalluksen pitäisi tuottaa pieni värähdys.

Testi on hyödyllinen, koska se tarkistaa sekä hienovaraisen haptisen palautteen että saapuvissa puheluissa käytettävän voimakkaamman värinän. Jos moottori tuottaa näppäimistön pienet värähdykset mutta ei värise puheluissa, ongelma liittyy todennäköisemmin ilmoituskanavaan.

Androidissa sovellukset voivat hallita värinää ilmoituskanavittain. Avaa sovelluksen tiedot Asetuksista ja tarkista sen ilmoitukset. Varmista Puhelin-, Viestit-, WhatsApp-, Telegram- tai Gmail-sovelluksessa, että kyseisen ilmoituskanavan värinä on käytössä.

## Erota ohjelmisto- ja laitevika toisistaan

Käynnistä puhelin ensin uudelleen. Se kuulostaa liian yksinkertaiselta, mutta haptinen palaute voi lakata ohjelmistohäiriön jälkeen ja palata käynnistyksen yhteydessä.

Jos värinä toimii uudelleenkäynnistyksen jälkeen ja katoaa myöhemmin, käynnistä puhelin vikasietotilaan. Useimmissa Android-puhelimissa avaa virtavalikko ja paina Virta pois -valintaa pitkään, kunnes vikasietotilan kehote tulee näkyviin. Monissa Samsung-laitteissa käynnistä puhelin uudelleen ja pidä äänenvoimakkuuden vähennyspainiketta painettuna käynnistyksen aikana.

Vikasietotila poistaa kolmannen osapuolen sovellukset käytöstä. Jos värinä toimii siellä, poista käytöstä tai poista yksi kerrallaan äskettäin asennetut automaatiosovellukset, puhelusuodattimet, virransäästösovellukset, käynnistyssovellukset ja esteettömyystyökalut. Ne ovat tavallisimmat epäillyt.

Jos värinä ei toimi vikasietotilassa, ei reagoi Samsung Membersissa tai valmistajan testivalikossa ja kaikki värinäasetukset ovat päällä, vika on todennäköisesti moottorissa tai sen liitännässä.

## Mikä puhelimen sisällä voi hajota

Android-puhelimissa käytetään yleensä kahta värinämoottorityyppiä. Vanhoissa ja edullisissa puhelimissa on usein epäkeskinen pyörivä moottori eli ERM. Se tuntuu pieneltä pyörivältä surinalta. Keskihintaisissa ja lippulaivapuhelimissa käytetään tavallisesti lineaarista resonanssitoimilaitetta eli LRA:ta, jonka palaute tuntuu terävämmältä ja tarkemmalta.

Molemmat voivat hajota. Pudotus voi löysätä lattakaapelin, vaurioittaa juotoksia tai murtaa kiinnikkeen, joka painaa moottoria runkoa vasten. Vesivaurio voi syövyttää liittimen. Myös kuluminen on mahdollista, vaikka värinämoottorit kestävät yleensä pitkään, jos puhelinta ei ole kolhittu tai avattu aiemmin.

Katkonainen värinä on klassinen löysän liitoksen oire. Yhtenä päivänä voimakas, seuraavana heikko ja pudotuksen jälkeen kokonaan poissa. Tällainen vaihtelu on epäilyttävämpää kuin moottori, joka lakkasi kerralla pysyvästi.

## Mitä korjaukselta voi odottaa

Värinämoottorin vaihto kuuluu yleensä edullisempiin laitteistokorjauksiin, mutta suljettu puhelin pitää silti lämmittää, liimat irrottaa ja koota huolellisesti uudelleen. Moduulirakenteisissa puhelimissa, kuten joissakin Fairphone-malleissa, osan voi ehkä vaihtaa itse. Useimmat tavalliset Android-puhelimet vaativat takakuoren avaamisen huollossa.

Jos puhelin putosi hiljattain ja värinä muuttui heti epävakaaksi, pyydä huoltoliikettä tarkistamaan liitin ennen moottorin vaihtamista. Joskus moottori on kunnossa ja kaapeli vain huonosti paikallaan.

runcheck ei testaa värinämoottoria suoraan, mutta se auttaa havaitsemaan pudotuksen tai kosteuden jälkeen ilmeneviä muita varoitusmerkkejä, kuten ylikuumenemista, akun kulutuksen muutoksia tai latauksen epävakautta.
