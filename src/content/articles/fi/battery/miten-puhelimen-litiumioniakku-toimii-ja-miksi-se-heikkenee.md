---
title: "Miten puhelimen litiumioniakku toimii ja miksi se heikkenee"
description: "Monet verkon akkuohjeet saavat litiumioniakun kuulostamaan hauraalta, aivan kuin yksi yön yli jatkunut lataus pilaisi puhelimen. Se ei pidä paikkaansa. Puhelimen akut kestävät enemmän, mutta ne ovat silti kemiallisia osia, ja kemialliset osat kuluvat."
listSummary: "akkutekniikka, tiede ja opas"
hub: "battery"
sourceNumber: 19
order: 9
subgroup: "Akun kunto"
tags: ["akkutekniikka","tiede","opas","laitteisto"]
locale: "fi"
draft: false
---
Perusteiden ymmärtäminen tekee tavallisista neuvoista vähemmän arvoituksellisia. 20-80 %:n sääntö, varoitukset kuumuudesta ja vanhojen puhelinten ennenaikaiset sammumiset johtuvat kaikki samasta asiasta: litiumionit liikkuvat kennossa, joka muuttuu hitaasti jokaisella käyttökerralla.

## Kennon perusrakenne

Puhelimen litiumioniakussa on neljä pääosaa: anodi, katodi, elektrolyytti ja erotin. Tavallisten puhelinakkujen anodi on yleensä grafiittia. Katodi on litiumia sisältävää metallioksidia, jonka tarkka kemiallinen koostumus riippuu valmistajasta. Elektrolyytti mahdollistaa litiumionien liikkumisen, ja erotin estää elektrodeja koskettamasta toisiaan.

Kun akku purkautuu, litiumionit liikkuvat elektrolyytin läpi anodilta katodille. Elektronit kulkevat sen sijaan puhelimen virtapiirin kautta. Tämä elektronivirta antaa tehon näytölle, SoC:lle, radioille, kameroille, tallennustilalle ja kaikelle muulle.

Latauksen aikana prosessi kulkee toiseen suuntaan. Laturi siirtää litiumionit takaisin anodiin, jotta kenno voi varastoida energiaa uudelleen.

Siinä on koko perusidea. Se toimii. Kunnes materiaalit eivät enää käyttäydy aivan samalla tavalla kuin uutena.

## Miksi varausprosentti on vain arvio

Puhelin ei mittaa akun varausta samalla tavalla kuin polttoainemittari säiliön sisältöä. Kennon sisällä ei ole pientä mittatikkua.

Android arvioi jäljellä olevaa varausta jännitteen, virran, lämpötilan ja akkumallin avulla. Osa laitteista käyttää myös coulombilaskentaa, jossa seurataan akkuun ja akusta kulkevaa sähkövarausta ajan mittaan. Arvio toimii hyvin, kun kenno on uusi ja ennakoitava. Akun vanhetessa tehtävä vaikeutuu.

Täyteen ladatun puhelinkennon jännite on usein noin 4,2 V, vaikka tarkka arvo riippuu kemiasta ja lataussuunnittelusta. Lähellä tyhjää puhelin sammuu ennen kuin kenno saavuttaa vahingollisen matalan jännitteen. Näytetty prosentti muuntaa kennon jännitekäyrän käyttäjälle ymmärrettäväksi luvuksi.

Ongelma on, ettei jännitekäyrä ole suora. Se on keskialueella melko tasainen mutta jyrkkenee lähellä täyttä ja tyhjää. Siksi 50 % voi tuntua vakaalta, kun taas vanhan akun viimeiset 15 % voivat kadota nopeasti.

## Miksi akut kuluvat

Akun vanheneminen ei ole yksi yksittäinen vika. Se koostuu monista pienistä kemiallisista ja mekaanisista muutoksista.

### SEI-kerroksen kasvu

Ensimmäisten lataussyklien aikana anodille muodostuu kiinteän elektrolyytin rajapinnaksi kutsuttu kerros, solid electrolyte interface eli SEI. Kerros on välttämätön. Se päästää litiumionit läpi mutta vähentää elektrolyytin ja anodin välisiä lisäreaktioita.

Ongelma on, että SEI muuttuu edelleen. Jokainen lataus- ja purkaussykli laajentaa ja supistaa anodia hieman. Siihen syntyy pieniä halkeamia. Elektrolyytti reagoi uusilla pinnoilla, jolloin SEI paksuuntuu. Aktiivista litiumia jää kerrokseen sen sijaan, että se liikkuisi elektrodien välillä.

Kapasiteetti pienenee, sisäinen vastus kasvaa ja kenno tuottaa kuormituksessa enemmän lämpöä.

### Litiumin saostuminen

Lithium plating tarkoittaa tilannetta, jossa litium saostuu metallina anodin pinnalle sen sijaan, että se asettuisi siististi anodin rakenteeseen. Näin käy todennäköisemmin, kun akkua ladataan nopeasti kylmänä tai sen ollessa jo lähes täynnä.

Tämä on yksi syy siihen, miksi puhelin latautuu nopeasti alhaisilla varausprosenteilla mutta hidastaa lähellä täyttä. Kylmän tai lähes täyden akun voimakas lataaminen on huono vaihtokauppa.

Vakavissa tapauksissa saostunut litium voi kasvaa dendriiteiksi. Ne ovat pieniä metallisia rakenteita, jotka voivat vaurioittaa erotinta. Puhelimen akunhallinta on suunniteltu ehkäisemään tätä, mutta taustalla oleva riski on niin todellinen, että valmistajat suhtautuvat siihen vakavasti.

### Katodin ja elektrolyytin vanheneminen

Myös katodi vanhenee. Metalli-ioneja voi liueta katodilta elektrolyyttiin, ja elektrolyytti hajoaa nopeammin korkeassa lämpötilassa ja korkealla jännitteellä. Nämä reaktiot pienentävät kapasiteettia ja kasvattavat vastusta.

Kun akku pullistuu, suljetun pussin sisälle on muodostunut kaasua. Kyse ei enää ole kalibrointi- tai asetusongelmasta. Lopeta puhelimen käyttö ja vaihdata akku.

## Mikä nopeuttaa kulumista

Kuumuus on tärkein tekijä. Lämmin akku vanhenee nopeammin, ja puhelin voi kuumentua lataamisesta, pelaamisesta, navigoinnista, videokuvauksesta, heikosta signaalista tai auringossa olemisesta. Huonoin yhdistelmä on kuumuus ja korkea varaustaso, kuten täyteen ladatun puhelimen jättäminen auton kojelaudalle tai lataaminen tyynyn alla.

Myös korkea jännite rasittaa. Lähellä 100 %:n varausta pidetty kenno on kovemmalla rasituksella kuin keskialueella oleva. Siksi latausrajat auttavat. Ne lyhentävät aikaa, jonka akku viettää jännitekäyrän yläosassa.

Syvä purkautuminen on saman ongelman toinen puoli. Puhelin suojaa kennoa sammumalla ennen todella vaarallisen matalaa jännitettä, mutta toistuva tyhjentäminen nollaan rasittaa akkua silti enemmän kuin matalat purkaussyklit.

Tästä käytännön neuvot tulevat. Pidä akku viileänä. Käytä 20-80 %:n aluetta tapana silloin, kun se sopii päivääsi. Satunnaisesta täyteen lataamisesta ei tarvitse huolestua. Älä kuitenkaan tee 0-100 %:n syklistä tavallista rutiinia.

## Miksi grafiittia on ollut vaikea syrjäyttää

Grafiitti on säilynyt puhelinakuissa niin pitkään, koska se on hyvällä tavalla tylsä materiaali. Se on vakaa, edullinen ja laajenee latauksen aikana paljon vähemmän kuin pii.

Rajoituksena on kapasiteetti. Grafiitti varastoi noin 372 mAh grammaa kohti. Pii pystyy noin 4 200 mAh:iin grammaa kohti, minkä vuoksi pii-hiiliakut ovat herättäneet niin paljon kiinnostusta Android-puhelimissa. Ongelma on, että pii laajenee voimakkaasti sitoessaan litiumia. Ilman huolellista suunnittelua materiaali halkeilee hajalle.

Tämän kompromissin kanssa akkuinsinöörit työskentelevät jatkuvasti: enemmän energiaa samaan tilaan muuttamatta anodia pölyksi muutaman kymmenen lataussyklin jälkeen.

## Mitä tämä tarkoittaa puhelimelle

Hyvin hallittu akku voi pysyä käyttökelpoisena vuosia. Huonosti kohdeltu voi tuntua vanhalta jo puolentoista vuoden jälkeen. Tarkat luvut vaihtelevat, koska puhelimen koko, jäähdytys, latausnopeus, ohjelmisto, ilmasto ja käyttötavat vaikuttavat kaikki.

Hyödyllistä on se, että oireet voi yhdistää mahdollisiin syihin. Jos akun kunto on edelleen hyvä mutta puhelin tyhjenee yön aikana, etsi taustasovelluksia, wake lock -tiloja tai signaaliongelmia. Jos akun kunto on alle 80 % ja puhelin sammuu 20 %:ssa, itse kenno on todennäköisesti pääongelma. Jos puhelin kuumenee jokaisella latauskerralla, korjaa se ennen kuin jäät pohtimaan pieniä eroja prosenttiluvuissa.

Myös Android-versioista puhuminen voi johtaa harhaan. Android 17 on nykyinen versio tuetuissa Pixel-laitteissa, mutta hyödylliset akkudiagnostiikan tiedot riippuvat edelleen siitä, mitä laite ilmoittaa. Lataussyklien määrä tuli sovellusten julkisesti luettavaksi Android 14:ssä, kun laitteisto tarjoaa tiedon. Akun kuntoprosentti riippuu yhä enemmän valmistajasta.

runcheck on rakennettu tällaista vianmääritystä varten. Akun kunto on hyödyllinen tieto sellaisenaan, mutta siitä saa enemmän irti, kun sitä voi verrata lämpötilaan, latauskäyttäytymiseen ja verkkoyhteyden olosuhteisiin.

Litiumioniakun heikkenemistä ei voi välttää. Huonot tavat vain tuovat sen vastaan aikaisemmin.
