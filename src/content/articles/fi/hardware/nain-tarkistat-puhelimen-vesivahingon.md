---
title: "Näin tarkistat puhelimen vesivahingon"
description: "Tarkista Android-puhelimen mahdollinen vesivahinko tutkimalla kosteusilmaisin, USB-portti, kamera-alue, näytön toiminta ja latausvaroitukset."
listSummary: "laitteisto, testaus ja diagnostiikka"
hub: "hardware"
sourceNumber: 111
order: 8
tags: ["laitteisto","testaus","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
---

Kuinka paljon pieni tarra voi kertoa vesivahingosta? Vähemmän kuin moni luulee.

Valkoinen kosteusilmaisin on hyödyllinen, mutta se ei ole erehtymätön totuustarra. Se kertoo, onko kosteus saavuttanut yhden pienen ilmaisimen puhelimen sisällä. Se ei kerro, kuinka kauan puhelin oli märkä, onko korroosio jo alkanut tai ovatko kaikki osat varmasti kunnossa.

## Etsi kosteusilmaisin

Useimmat suuret puhelinvalmistajat asentavat laitteisiinsa vähintään yhden Liquid Damage Indicator -ilmaisimen eli LDI:n. Tarra on tavallisesti valkoinen kuivana ja muuttuu nesteelle altistuessaan vaaleanpunaiseksi, violetiksi tai punaiseksi.

Monissa nykyisissä Android-puhelimissa helpoin tarkistuspaikka on SIM-korttipaikka. Sammuta puhelin, irrota SIM-kelkka ja valaise aukkoa taskulampulla. Etsi sisäseinämästä pientä liuskaa tai pistettä.

Samsungin normaali LDI on valkoinen, joskus siinä näkyy vaaleanpunaisia tai violetteja X-kuvioita. Tasaisen vaaleanpunainen, violetti tai punainen ilmaisin tarkoittaa, että nestettä on saavuttanut tarran. Fyysisellä SIM-kelkalla varustetuissa Google Pixel -puhelimissa käytetään vastaavaa ilmaisinta, mutta sen tarkka ulkonäkö vaihtelee mallin mukaan.

Jos puhelimessa ei ole fyysistä SIM-kelkkaa, älä työnnä aukkoihin työkaluja ilmaisinta etsiessäsi. Yhdysvalloissa myytävät Pixel 10-, Pixel 10 Pro- ja Pixel 10 Pro XL -mallit ovat vain eSIM-yhteensopivia, joten niissä ei ole käyttäjän avattavaa SIM-korttipaikkaa tätä tarkistusta varten. Huolto voi tarkistaa sisäiset ilmaisimet, mutta ulkopuolelta tehtävä nopea SIM-paikan tarkistus ei ole mahdollinen.

Vanhemmissa Android-puhelimissa, joissa on irrotettava akku, yksi LDI voi olla akussa ja toinen puhelimen rungossa takakannen alla. Ne voi tarkistaa avaamatta mitään tiivistettyä rakennetta.

## Tarkista USB-portti ja muut aukot

Valaise USB-C-portti taskulampulla. Vihreä, sinivihreä, valkoinen tai karstainen jäämä liittimissä on huono merkki. Se voi olla korroosiota tai kosteuden kuivuttua jäljelle jääneitä mineraaleja.

Tarkista myös kuulokeliitäntä, jos puhelimessa on sellainen, sekä kaiutinaukot ja SIM-kelkan tiiviste. Revennyt tiiviste, puuttuva kelkka tai taipunut kelkka voi päästää vettä sisään, vaikka puhelimella olisi alun perin ollut IP-luokitus.

Pixel-puhelin voi näyttää ilmoituksen `Liquid or debris in USB port` tai `Unplug charger`, jos USB-C-portissa havaitaan ongelma. Samsung-puhelin voi näyttää vesipisarakuvakkeen ja estää kaapelilatauksen kosteuden havaittuaan. Varoitukset kannattaa ottaa vakavasti. Myös korkea ilmankosteus tai lika voi laukaista ne, mutta toistuvaa varoitusta ei pidä sivuuttaa.

Jos kosteusvaroitus tulee näkyviin, irrota kaapeli. Sammuta puhelin, jos portti on märkä, ja anna sen kuivua huoneenlämmössä. Älä käytä hiustenkuivaajaa, uunia, lämpöpatteria tai kuumailmapuhallinta. Kuumuus voi vahingoittaa tiivisteitä ja akkua.

## Tarkista kamerat ja näyttö

Ota kuva valkoisesta seinästä tai paperiarkista. Linssin suojalasin takana oleva huurre näkyy pehmeänä sameana läiskänä, jota ei voi pyyhkiä pois. Jos kameran lasin alla näkyy pisaroita tai sumua, puhelin tarvitsee huoltoa.

Vesivahinko voi näkyä näytössä vasta viiveellä. OLED-paneeliin voi ilmestyä tummia alueita, vihertävää sävyä, välkkymistä tai laikkuja. LCD-paneelissa oireita voivat olla kirkkaat läiskät, reunoilta leviävä valo tai haamumaiset tahrat.

Viive hämää helposti. Puhelin voi toimia roiskeen jälkeen normaalisti ja rikkoutua vasta päiviä myöhemmin, kun liittimien ja piirilevyn johdinratojen korroosio etenee.

## Tarkkaile toiminnan muutoksia

Vesivahinko rikkoo harvoin siististi vain yhden toiminnon. Se aiheuttaa usein sekalaisen joukon oireita.

Tarkkaile haamukosketuksia, kosketusnäytön kuolleita alueita, rahisevaa kaiutinta, vaimeaa mikrofonia, satunnaisia uudelleenkäynnistyksiä, heikentynyttä värinää, katkeilevaa latausta tai hyppivää akun varaustasoa. Yksi oire voi johtua ohjelmistosta. Useampi oire nestealtistuksen jälkeen viittaa laitteistoon.

Myös akun käyttäytyminen merkitsee. Jos akku alkaa tyhjentyä selvästi aiempaa nopeammin, puhelin lämpenee käyttämättömänä tai lataus ei enää toimi normaalisti, kosteus on voinut saavuttaa akun liittimen tai virranhallinnan alueen.

runcheck voi auttaa tässä, koska se tallentaa akun lämpötilaa, purkautumisnopeutta ja latauskäyttäytymistä. Jos lukemat muuttuivat sateessa kastumisen, uima-altaaseen putoamisen tai porttivaroituksen jälkeen, nestevaurio kannattaa ottaa huomioon mahdollisena syynä.

## Ymmärrä, mitä IP-luokitus tarkoittaa

IP67- ja IP68-luokitukset perustuvat laboratoriotesteihin. Ne eivät tarkoita, että puhelin olisi vesitiivis ikuisesti.

Monet IP68-luokitellut Galaxy-puhelimet on testattu makeassa vedessä enintään 1,5 metrin syvyydessä 30 minuutin ajan, mutta tarkka suojaus riippuu mallista. Myös Pixel-dokumentaatiossa korostetaan olennaista rajoitusta: pölyn- ja vedenkestävyys voi heikentyä tai kadota ajan myötä kulumisen, korjauksen, purkamisen tai vaurion seurauksena.

Suolavesi, kloorattu allasvesi, saippua, höyry ja kuuma vesi rasittavat tiivisteitä enemmän kuin puhdas, liikkumaton vesi. Yhden roiskeen kestänyt puhelin voi silti vaurioitua myöhemmin, jos liimatiivisteet ovat vanhentuneet tai runko on vääntynyt.

## Oletko ostamassa käytettyä puhelinta? Tarkista muutakin kuin tarra

Kun tarkistat käytettyä puhelinta, katso LDI ja testaa sen jälkeen osat, jotka vaurioituvat herkästi kosteudesta.

Soita puhelu ja varmista, että molemmat mikrofonit toimivat. Toista ääntä kuulokekaiuttimesta ja pääkaiuttimesta. Testaa lataus varmasti toimivalla kaapelilla. Tarkista kaikki kamerat. Vedä sormea koko näytön alueella ja etsi kosketuksen kuolleita kohtia. Testaa värinä. Avaa SIM-kelkka ja tarkista sen tiiviste.

Puhdas LDI on hyvä merkki, mutta se ei riitä. Kosteus voi päästä puhelimeen reittiä, joka ei saavuta ilmaisinta, ja epärehellisessä käytetyn puhelimen kaupassa tarra on voitu vaihtaa. Luota puhelimen kokonaiskäyttäytymiseen, älä yhteen tarraan.
