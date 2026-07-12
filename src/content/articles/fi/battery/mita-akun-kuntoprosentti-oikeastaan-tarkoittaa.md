---
title: "Mitä akun kuntoprosentti oikeastaan tarkoittaa?"
description: "Akun kuntoprosentti kertoo nykyisen enimmäiskapasiteetin suhteessa uuteen akkuun. Lue, mitä luku tarkoittaa, miksi 80 % on tärkeä raja ja miten Android-puhelimet ilmoittavat akun kunnon."
listSummary: "Akun kuntoprosentti kertoo nykyisen enimmäiskapasiteetin suhteessa uuteen akkuun."
hub: "battery"
sourceNumber: 13
order: 3
subgroup: "Akun kunto"
tags: ["akku","kunto","diagnostiikka","android","opas"]
locale: "fi"
draft: false
---
Akun kuntoprosentti kertoo kulumisesta. Se ei ole sama asia kuin tilapalkissa näkyvä akun varaustaso.

Jos puhelin ilmoittaa akun kunnoksi 87 %, kenno pystyy varastoimaan noin 87 % siitä varauksesta, jonka se pystyi uutena varastoimaan. Akku toimii edelleen. Sen säiliö on vain pienempi.

## Mitä luvun taustalla on

Jokaisella puhelinakulla on aluksi nimelliskapasiteetti. Se kertoo, kuinka paljon varausta kenno on suunniteltu varastoimaan, ja ilmoitetaan yleensä milliampeeritunteina eli mAh-lukuna. Suurella 5 000 mAh:n akulla varustetun puhelimen pitäisi uutena pystyä varastoimaan suunnilleen tämä määrä.

Sitten kemia alkaa vaikuttaa. Jokainen lataus- ja purkaussykli kuluttaa kennoa hieman. Kuumuus, korkea jännite, syväpurkaus, pikalataus ja pelkkä ajan kuluminen kasaavat vaikutuksia. Akun sisäinen kiinteä elektrolyyttirajapinta paksuuntuu, sisäinen vastus kasvaa ja aktiivista litiumia jää vähemmän siirtämään varausta elektrodien välillä.

Kuntoprosentti vertaa akun nykyistä täyteen ladattua kapasiteettia alkuperäiseen arvoon. Jos akkuun mahtuu nyt enintään noin 4 350 mAh, sen kunto on suunnilleen 87 %.

Tässä on luvun hyödyllinen osa. Se kertoo, kuinka paljon täyden akun todellinen koko on pienentynyt.

## Kuntoprosentti ei ole varaustaso

Tämä sekoitetaan helposti. Varaustaso kertoo, kuinka täynnä akku on juuri nyt. Akun kunto kertoo, kuinka paljon energiaa akku pystyy varastoimaan ollessaan täynnä.

Puhelimessa, jonka varaustaso on 100 % ja akun kunto 85 %, ei ole yhtä paljon energiaa kuin samassa puhelimessa uutena 100 prosentin varaustasolla. Akku on täynnä suhteessa nykyiseen, kuluneeseen kapasiteettiinsa. Siksi kaksi puhelinta voi näyttää tilapalkissa 100 % ja kestää silti käytössä aivan eri ajan.

Myös akun alkuperäinen koko vaikuttaa siihen, miltä luku tuntuu käytännössä. 5 500 mAh:n akulla varustettu puhelin voi 82 prosentin kunnossa kestää pidempään kuin pienikokoinen puhelin 95 prosentin kunnossa. Prosentti on hyödyllinen, mutta se ei kerro kaikkea.

## Miten Android näyttää akun kunnon

Android ei ole koskaan esittänyt akun kuntoa yhtä selkeästi kuin iOS. Vuosien ajan tavallisen käyttäjän nähtävissä ollut Androidin akkutieto oli lähinnä yleinen tila, kuten Good, Overheat, Dead, Cold, Over Voltage, Unknown tai Unspecified failure. Nämä ovat vikaan tai poikkeavaan tilaan liittyviä merkintöjä, eivät tarkkoja kapasiteettiprosentteja.

Osa puhelimista näyttää edelleen vain tämän perustason tilan. Lähes vakio-Androidia käyttävässä laitteessa `*#*#4636#*#*` voi avata testausvalikon, jos valmistaja ei ole poistanut sitä käytöstä. Monissa puhelimissa valikko on piilotettu. Joissakin näkyvät lämpötila ja jännite, mutta ei kuntoprosenttia.

Android 17 ei tee akun kuntotiedosta yleistä kaikille laitteille. Se julkaistiin 16.6.2026 ensin useimmille tuetuille Pixel-laitteille, mutta akun kunnon näkyminen riippuu edelleen puhelinmallista ja siitä, mitä tietoja laitteisto raportoi.

Pixel on tällä hetkellä selkein esimerkki oikeasta käyttäjälle näkyvästä akun kuntonäkymästä. Pixel 8a:ssa ja uudemmissa akun kunto löytyy kohdasta **Asetukset > Akku > Akun kunto**. Tila voi olla Normaali, Heikentynyt tai Ei saatavilla, ja Akun kapasiteetti -näkymä näyttää arvion jäljellä olevasta kapasiteetista suhteessa alkuperäiseen. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 ja Pixel 8 Pro eivät näytä akun kuntotilaa, vaikka niissä voi olla muita akun hallintaominaisuuksia.

Samsung käyttää eri lähestymistapaa. Samsung Members -sovelluksen Puhelimen vianmääritys voi tarkistaa akun tilan. Joissakin uusissa One UI -versioissa ja malleissa asetuksissa näkyy tarkempia akkutietoja, mutta Samsungin käyttämät nimet ja näkyvät tiedot vaihtelevat laitteen, ohjelmiston ja alueen mukaan.

Muiden Android-valmistajien toteutukset ovat epätasaisia. Joissakin Xiaomi-, HONOR-, OnePlus-, OPPO- ja realme-puhelimissa näkyy akun enimmäiskapasiteetti tai muu kuntotieto Akku-asetuksissa. Vanhemmat laitteet, edulliset mallit ja puhelimet, joiden varaustilan mittauspiiri antaa vain rajallisia tietoja, eivät usein näytä sitä lainkaan. Androidin järjestelmätuki on teoriassa parempi kuin ennen. Käytännössä laitteisto ja valmistajan ohjelmisto määräävät, mitä käyttäjä todella näkee.

Siksi runcheck käsittelee akun kuntoa yhtenä signaalina, ei yksittäisenä lopullisena tuomiona. Kun puhelin antaa kuntotilan, jännitteen, lämpötilan, virran, syklimäärän tai kapasiteettitietoja, runcheck voi näyttää ne yhdessä tietojen luotettavuutta kuvaavien merkintöjen kanssa sen sijaan, että se väittäisi kaikkien Android-laitteiden raportoivan yhtä tarkasti.

## Miksi kaikki puhuvat 80 prosentista

80 % ei ole maaginen raja. Se on yleinen käyttöiän arviointipiste.

Kun kapasiteetti laskee alle 80 prosentin alkuperäisestä, käyttöaika on lyhentynyt niin paljon, että moni alkaa huomata eron. Myös sisäinen vastus on usein suurempi, joten jännite voi pudota kuormituksessa aiempaa helpommin. Tällöin puhelin saattaa sammua sarjakuvauksen, pelin tai kylmässä tehdyn kävelyn aikana, vaikka varaustaso ei hetkeä aiemmin näyttänyt tyhjältä.

Valmistajat ilmoittavat nykyään erilaisia syklitavoitteita, joten vanha yleisohje 300-500 syklistä on liian yksinkertainen. Googlen mukaan Pixel 8a:n ja uudempien pitäisi säilyttää noin 80 % kapasiteetistaan noin 1 000 lataussyklin ajan. Pixel 3:sta Pixel 8 Prohon sekä Pixel Foldiin ilmoitettu tavoite on noin 800 sykliä. EU:ssa markkinoille saatettavien älypuhelinten ja tablettien on täytettävä ekologisen suunnittelun vaatimus: vähintään 800 lataus- ja purkaussykliä siten, että alkuperäisestä kapasiteetista säilyy vähintään 80 %.

Päivittäisessä käytössä tulkitsisin lukuja näin:

- Yli 85 % on tavallisesti aivan hyvä, ellei puhelimessa ollut alun perinkin pieni akku.
- Noin 80 % on kohta, jossa paljon puhelinta käyttävät alkavat usein suunnitella akun vaihtoa.
- Alle 75 prosentissa akkuongelmat eivät enää ole yllättäviä.
- Alle 70 prosentissa vaihto on yleensä käytännöllisin ratkaisu, jos aiot pitää puhelimen.

Nämä eivät ole lakeja. Ne ovat päätöksenteon rajapyykkejä.

## Miksi luku voi olla väärä

Akun kunto on arvio. Puhelin ei vie akkua laboratorioon mitattavaksi hallituissa olosuhteissa.

Varaustilan mittauspiiri arvioi kapasiteettia seuraamalla akkuun tulevaa ja siitä lähtevää varausta, lukemalla jännitettä ja lämpötilaa sekä vertaamalla havaintoja malliin siitä, miten kennon pitäisi käyttäytyä. Malli voi ajautua epätarkaksi. Pitkät jaksot, jolloin akkua ladataan vain vähän kerrallaan, akun vaihto, järjestelmäpäivitys tai tavallisuudesta poikkeavat lämpötilat voivat saada ilmoitetun luvun liikkumaan.

Pienet hypyt ovat normaaleja. Jos akun kunto nousee muutaman tavallista täydemmän lataussyklin jälkeen 88 prosentista 90 prosenttiin, akku ei parantunut. Arvio vain tarkentui.

Kolmannen osapuolen sovelluksissa on sama rajoitus, mutta laskutapa on toinen. Esimerkiksi AccuBattery arvioi kapasiteettia mittaamalla latausvirtaa latauskertojen aikana ja laskemalla tuloksista keskiarvon. Arvio voi olla hyödyllinen viikon tai kahden normaalin käytön jälkeen, mutta yksi latauskerta ei riitä. Huono kaapeli, kuumuus, osittainen lataus tai puhelimen 80 prosentin lähellä hidastama lataus voi vääristää tulosta.

Myös laitteisto vaikuttaa. Huippupuhelimissa on usein parempi varaustilan mittauspiiri kuin edullisissa malleissa. Osa laitteista ilmoittaa vakaita ja käyttökelpoisia arvoja. Toiset näyttävät jatkuvasti 100 %, koska ne eivät paljasta todellista ikääntymistietoa.

## Mitä luvulla kannattaa tehdä

Käytä kuntoprosenttia kehityssuuntana. Yksi mittaus on kiinnostava. Kuuden kuukauden muutos kertoo enemmän.

Jos puhelin näyttää 89 % ja kestää edelleen päivän, mitään ei tarvitse tehdä. Jos luku on 78 % ja lataat puhelinta kahdesti päivässä, akun vaihdon hinta kannattaa selvittää. Jos puhelin sammuu 25 prosentissa, lämpenee kevyessä käytössä tai prosentti hyppii, pidä oireita tärkeämpinä kuin yhtä lukua.

Jos akku turpoaa, lopeta käyttö. Kuntoprosentilla ei ole siinä vaiheessa enää merkitystä.

runcheck on tässä hyödyllinen, koska voit tarkastella akun kuntoa lämpötilan, jännitteen, virran luotettavuuden, purkautumisnopeuden ja historian rinnalla. Akun vanheneminen ei yleensä näy yhtenä siistinä lukuna. Se näkyy kuviona.

## Yleisiä kysymyksiä

### Onko 85 prosentin akun kunto huono?

Ei. 85 prosentissa kenno on menettänyt kapasiteettia, mutta useimmat puhelimet ovat edelleen hyvin käyttökelpoisia. Esimerkiksi alun perin 5 000 mAh:n akku varastoi 85 prosentin kunnossa noin 4 250 mAh. Se voi riittää koko päiväksi puhelimesta ja käyttötavoista riippuen.

### Voiko akun kunto nousta takaisin?

Todellinen kemiallinen kapasiteetti ei palaudu. Litiumioniakun kuluminen on pysyvää. Näytetty luku voi kuitenkin nousta, jos puhelin arvioi kapasiteetin ensin liian matalaksi ja laskee sen myöhemmin tarkemmin.

### Miksi puhelin näyttää prosenttiluvun sijaan tilan Good?

Monet Android-puhelimet paljastavat vain perustason kuntotilan. Good tarkoittaa, ettei Android havaitse akun vikakoodia tai poikkeavaa tilaa. Se ei tarkoita, että kennossa olisi yhä 100 % alkuperäisestä kapasiteetista.

### Pitääkö akku vaihtaa täsmälleen 80 prosentissa?

Ei automaattisesti. Vaihda akku, kun puhelin ei enää sovi päivääsi, se sammuu odottamatta tai kuntotila on Heikentynyt ja käyttöaika on muodostunut ongelmaksi. 80 % on suunnittelusignaali, ei lähtölaskenta.
