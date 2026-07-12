---
title: "Näin testaat puhelimen kameran laadun"
description: "Käytännöllisiä tapoja Android-puhelimen kameran laadun tarkistamiseen, mukaan lukien automaattitarkennus, kameroiden vaihtaminen, kennoviat, videon vakaus ja diagnostiikkatyökalut."
listSummary: "laitteisto, testaus ja diagnostiikka"
hub: "hardware"
sourceNumber: 110
order: 7
tags: ["laitteisto","testaus","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
---

Kameran testaaminen helpottuu, kun lakkaat tuijottamasta megapikseleitä. Myös 50 MP:n kenno voi ottaa huonoja kuvia, jos linssi on likainen, automaattitarkennus on rikki tai kameramoduuli on iskun seurauksena hieman väärässä asennossa.

Tavoite on yksinkertainen: selvitä, toimivatko puhelimen kamerat niin kuin niiden pitäisi.

## Aloita puhtaasta linssistä ja yksinkertaisesta kohteesta

Pyyhi linssin suojalasi puhtaalla mikrokuituliinalla. Tee tämä ennen muita testejä. Sormenjälki voi näyttää huonolta HDR-käsittelyltä, pehmeältä tarkennukselta, linssin sameudelta tai heikolta hämäräkuvaukselta.

Avaa puhelimen oletuskamerasovellus ja suuntaa kamera kohteeseen, jossa on pieniä yksityiskohtia. Painettu teksti, kuvioitu seinä, näppäimistö tai taivasta vasten näkyvät puunoksat sopivat hyvin. Napauta kohdetta tarkentaaksesi. Kuvan pitäisi tarkentua nopeasti ja pysyä tarkkana.

Jos kamera hakee tarkennusta edestakaisin löytämättä sitä, automaattitarkennuksen mekanismi voi olla vaurioitunut. Tämä on tavallista putoamisen jälkeen, sillä linssiä liikuttava pieni sähkömagneettinen moottori on herkkä. Jos kuva ei tarkennu lainkaan riippumatta siitä, mihin napautat, vertaa tulosta puhelimen toiseen kameraan ennen kuin syytät ohjelmistoa.

Käy läpi kaikki käytettävissä olevat kamerat: pääkamera, ultralaajakulmakamera, telekamera, makrokamera ja etukamera. Jos vain yksi kamera tuottaa sumeaa kuvaa muiden näyttäessä teräviltä, vika liittyy todennäköisesti juuri kyseiseen moduuliin. Syynä voi olla pöly linssin suojalasin alla, haljennut suojalasi, kosteus kamera-alueen sisällä tai korjauksen jälkeen vinoon jäänyt moduuli.

## Etsi toistuvia virheitä

Ota kuva tasaisen valkoisesta seinästä tai puhtaasta paperiarkista tasaisessa valaistuksessa. Viat erottuvat silloin helpommin.

Pieni tummuminen kuvan kulmissa on normaalia. Puhelimen linssit ovat pieniä, ja ohjelmisto korjaa usein reuna-alueita. Etsi sen sijaan voimakasta tummaa aluetta, värillistä läikkää tai tahraa, joka näkyy täsmälleen samassa kohdassa jokaisessa kuvassa.

Ota seuraavaksi kuva hämärässä ilman salamaa ja suurenna sitä. Kirkkaat värilliset pisteet, jotka pysyvät samassa paikassa useissa kuvissa, voivat olla kuumia pikseleitä tai merkki kennovauriosta. Yhdestä oudosta pikselistä ei kannata huolestua. Pikseliryhmä on eri asia.

Ota sitten kuva kohti kirkasta ikkunaa tai lamppua, mutta älä suoraan aurinkoon. Koko kuvaan leviävä violetti tai vihreä sävy voi viitata kennon suodattimen ympärillä olevaan vaurioon. Tavallinen linssiheijastus näkyy juovina tai haamukuvina kirkkaan valon lähellä. Sen ei pitäisi yhtäkkiä näyttää paljon pahemmalta kuin ennen puhelimen putoamista tai korjausta.

## Testaa valotus ja värit

Ota samasta kohteesta kaksi kuvaa: toinen päivänvalossa ja toinen sisällä lämpimässä valaistuksessa. Ihonsävyt, valkoiset seinät ja harmaat esineet ovat hyviä vertailukohteita, sillä silmä huomaa helposti niiden näyttävän vääriltä.

Puhelimet käsittelevät kuvia paljon, joten täysin neutraaleja värejä ei kannata odottaa. Pixel, Samsung, Xiaomi ja OnePlus tekevät kaikki erilaisia valintoja. Hyödyllinen vertailukohta on sama puhelinmalli, ei eri valmistajan puhelin, jonka kuvatyyli on erilainen.

Katso verkosta samalla puhelinmallilla otettuja esimerkkikuvia, jos tarvitset vertailua. Tutki oikeita kuvanäytteitä äläkä luota pelkkiin kamerapisteisiin. Pisteytyksistä voi olla hyötyä, mutta rinnakkain tarkasteltavat kuvasuurennokset kertovat enemmän, kun yrität selvittää oman puhelimesi ongelmaa.

## Kuvaa lyhyt video

Kuvaa 20-30 sekunnin video suurimmalla tarkkuudella, jota tavallisesti käytät. Panoroi hitaasti, kävele muutama askel ja puhu samalla.

Katso tallenne ja tarkista neljä asiaa: tarkennus, kuvanvakautus, pudonneet kuvakehykset ja äänen synkronointi. Optisella kuvanvakautuksella varustetun puhelimen pitäisi tasoittaa pieniä käden liikkeitä. Se ei tee kävellessä kuvatusta videosta kameravakaimella kuvattua, mutta videon ei pitäisi myöskään täristä rajusti.

Jos video pysähtyy hetkeksi, nykii tai ääni ajautuu pois tahdista, syynä voi olla kuumuus, tallennustilan kirjoitusnopeus, kamerasovelluksen virhe tai laitteistovika. Käynnistä puhelin uudelleen, vapauta tallennustilaa ja kokeile uudestaan. Jos ongelma toistuu puhelimen ollessa viileä ja vapaata tallennustilaa on riittävästi, siihen kannattaa suhtautua vakavasti.

## Käytä sisäänrakennettuja diagnostiikkatyökaluja

Samsung Galaxy -puhelimissa kameran voi testata Samsung Members -sovelluksella. Samsungin virallisessa ohjeessa polku on `Support` > `Phone diagnostics` > `Camera test`. Käytettävissä olevat testit vaihtelevat mallin mukaan, mutta Samsung mainitsee kameran yhtenä puhelimen diagnostiikkakohteista.

Samsungin numerovalitsimeen syötettävä koodi `*#0*#` avaa monissa Galaxy-malleissa testivalikon, jos toiminto on käytettävissä kyseisessä mallissa ja ohjelmistoversiossa. `Mega Cam` testaa takakameraa ja `Front Cam` etukameraa. Testit vahvistavat, että kameramoduulit avautuvat ja pystyvät ottamaan kuvan. Ne eivät arvioi kuvanlaatua puolestasi.

Xiaomi-, Redmi- ja POCO-laitteissa kameratestit löytyvät yleensä CIT-valikosta, jonka voi avata koodilla `*#*#6484#*#*`. Jos puhelimessa on useita takakameroita, valikossa voi olla erillinen testi jokaiselle kameralle.

Pixel-puhelimissa ei ole Samsungin `*#0*#`-valikon kaltaista yleistä testivalikkoa. Googlen Pixel-diagnostiikkakoodi `*#*#7287#*#*` liittyy tuettujen laitteiden korjausdiagnostiikkaan. Käytettävissä olevat testit voivat vaihdella mallin, alueen ja ohjelmistoversion mukaan.

Android 17 ei tee kameradiagnostiikasta kaikille laitteille yhteistä. Käytettävissä olevat työkalut riippuvat edelleen laitevalmistajasta.

## Tarkista Camera2-tuki, jos ominaisuuksia puuttuu

Jos kolmannen osapuolen kamerasovellus ei pysty käyttämään manuaalista valotusta, RAW-kuvausta, suuren kuvataajuuden videota tai telekameraa, asenna Camera2 API -tarkistussovellus, kuten Camera2 API Probe. Se näyttää, mitä kukin kamera ilmoittaa Androidille: tuetut tarkkuudet, automaattitarkennustilat, kuvanvakautuksen ja laitteistotason.

Laitteistotasoilla on merkitystä. `LEGACY` tarkoittaa, että kamera toimii vanhemman yhteensopivuuskerroksen kautta ja tarjoaa Camera2 API:sta vain vähimmäistuen. `LIMITED` tarjoaa Camera2:n perusominaisuudet. `FULL` lisää kattavammat manuaaliset säädöt. `LEVEL_3` sisältää `FULL`-tason ominaisuuksien lisäksi RAW-kuvauksen, YUV-uudelleenkäsittelyn ja laajemmat kuvavirtavaihtoehdot.

Open Camera on hyödyllinen myös silloin, kun haluat erottaa puhelimen oman kamerasovelluksen kuvankäsittelyn kameran laitteistosta. Jos Open Camera tarkentaa oikein mutta puhelimen oma kamerasovellus ei, tyhjennä oman Kamera-sovelluksen välimuisti ja tarkista ohjelmistopäivitykset ennen kuin oletat moduulin olevan rikki.

Tämä ei kerro, onko linssi naarmuuntunut. Se kertoo, näkeekö Android ne kameran ominaisuudet, jotka puhelimen pitäisi ilmoittaa.

## Milloin vika on todennäköisesti laitteistossa

Jos yhden kameran esikatselu on musta mutta sovellus muuten avautuu, syynä on usein rikkoutunut moduuli tai löysä kameraliitin. Jos kamerasovellus ei avaudu lainkaan, syy voi olla ohjelmistossa. Tyhjennä ensin Kamera-sovelluksen välimuisti ja käynnistä puhelin uudelleen.

Sumea tarkennus, toistuvat tahrat, kuolleiden pikselien ryhmät, voimakas värivirhe ja yhden kameran selvästi muista poikkeava toiminta viittaavat laitteistovikaan. Ohjelmistopäivitys voi muuttaa värien käsittelyä tai terävöitystä. Se ei poista linssin takana olevaa kosteutta eikä korjaa vaurioitunutta automaattitarkennuksen moottoria.

Jos ongelma alkoi näytön, takalasin tai akun korjauksen jälkeen, vie puhelin nopeasti takaisin huoltoliikkeeseen. Kameraliitin ei ehkä ole kunnolla paikallaan, tai puhelimen sisään on voinut päästä pölyä sen ollessa auki.

runcheck ei pisteytä valokuviasi, mutta se voi auttaa havaitsemaan kameraa kuormittavat olosuhteet, kuten kuumuuden, vähäisen tallennustilan tai akun nopean kulumisen pitkän videokuvauksen aikana.
