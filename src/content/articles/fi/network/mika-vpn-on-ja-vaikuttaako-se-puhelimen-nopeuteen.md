---
title: "Mikä VPN on ja vaikuttaako se puhelimen nopeuteen?"
description: "Selkokielinen opas siihen, mitä VPN tekee Androidissa, miten se vaikuttaa nopeuteen ja akunkestoon sekä milloin sen käyttäminen on järkevää."
listSummary: "verkko, yhteydet ja android"
hub: "network"
sourceNumber: 99
order: 10
tags: ["verkko","yhteydet","android","vianetsintä","opas"]
locale: "fi"
draft: false
---
VPN muuttaa reittiä, jota pitkin puhelimen internetliikenne kulkee. Sovellukset eivät yhdistä suoraan Wi-Fi-verkon tai mobiilioperaattorin kautta, vaan puhelin lähettää liikenteen ensin salattua tunnelia pitkin VPN-palvelimelle. Verkkosivut ja sovellukset näkevät VPN-palvelimen IP-osoitteen puhelimen tavallisen julkisen IP-osoitteen sijasta.

Se kuulostaa salaperäisemmältä kuin onkaan. VPN on hyödyllinen, mutta se ei ole yksityisyyden suojakilpi kaikkea vastaan.

## Mitä VPN oikeasti piilottaa

Kun VPN on käytössä, Wi-Fi-verkon omistaja, avoimen verkon ylläpitäjä tai mobiilioperaattori näkee tavallisesti, että puhelin on yhteydessä VPN-palvelimeen. Se näkee myös siirretyn datan määrän. Sen ei pitäisi nähdä tunnelin sisällä olevia yksittäisiä verkkosivustoja ja sovelluskohteita, jos VPN toimii oikein ja käsittelee myös DNS-liikenteen.

VPN-palveluntarjoaja on nyt välissä. Se voi nähdä yhteyden metatietoja ja palvelun toteutuksesta riippuen sillä voi olla mahdollisuus nähdä enemmänkin. Siksi palveluntarjoajalla on väliä. Epämääräinen ilmainen VPN voi olla yksityisyyden kannalta huonompi kuin VPN:n käyttämättä jättäminen.

Androidissa VPN-sovellus toimii jatkuvana taustapalveluna. Tilarivillä näkyy tavallisesti pieni avain- tai VPN-kuvake. Ellei sovellus käytä jaettua tunnelointia eli split tunnelingia, selainten, sovellusten ja järjestelmäpalvelujen liikenne kulkee VPN-tunnelin kautta.

## Miksi VPN voi hidastaa puhelinta

Jokainen VPN lisää työtä. Puhelin salaa paketit, lähettää ne VPN-palvelimelle, odottaa palvelimen välittävän ne eteenpäin ja vastaanottaa vastauksen samaa reittiä takaisin.

Kaksi asiaa muuttuu:

- Viive kasvaa. Lähellä oleva VPN-palvelin voi lisätä vain vähän viivettä. Maailman toisella puolella sijaitseva palvelin voi tehdä selailusta, pelaamisesta ja videopuheluista tahmeita.
- Tiedonsiirtonopeus voi laskea. Salaus vie käsittelyaikaa, ja VPN-palvelimesta voi tulla pullonkaula, jos se on ruuhkainen tai kaukana.

Hyvällä VPN-palvelulla, lähellä olevalla palvelimella ja nykyisellä protokollalla eroa ei ehkä juuri huomaa selatessa tai viestejä lähettäessä. Kaukainen palvelin, ruuhkainen ilmaispalvelin tai vanhempi protokolla voi hidastaa yhteyttä selvästi.

Vertailu kertoo olennaisen: WireGuard-yhteys omassa maassa sijaitsevalle palvelimelle voi tuntua lähes normaalilta, kun taas OpenVPN TCP -yhteys 8 000 kilometrin päässä olevalle palvelimelle voi tehdä yksinkertaisistakin sivuista raskaita.

## Protokollalla on väliä

VPN-sovelluksissa voi yleensä valita protokollan. Osa piilottaa valinnan nimien kuten `Smart`, `Automatic` tai oman bränditilan taakse.

WireGuard on nykyaikainen oletusvaihtoehto, jota kokeilisin ensin, jos sovellus tukee sitä. Sen rakenne on vanhempia protokollia pienempi, ja se toimii puhelimissa yleensä nopeasti.

OpenVPN on vanhempi ja laajasti tuettu. Se on edelleen hyödyllinen etenkin verkoissa, jotka estävät uudempia protokollia, mutta tuntuu usein hitaammalta. OpenVPN UDP on yleensä OpenVPN TCP:tä nopeampi. TCP voi auttaa epävakaassa verkossa, mutta se lisää kuormaa.

IKEv2/IPsec on yhä yleinen mobiililaitteissa, koska se käsittelee Wi-Fi- ja mobiilidatayhteyden välillä vaihtamista hyvin. Se voi olla hyvä välimuoto, erityisesti työpaikan VPN-yhteydessä.

Jos VPN tuntuu hitaalta, älä vaihda heti palveluntarjoajaa. Kokeile ensin lähempää palvelinta ja toista protokollaa.

## Akunkulutus on todellista, mutta yhtä yleispätevää lukua ei ole

VPN voi kuluttaa lisävirtaa, koska puhelin pitää tunnelin auki ja salaa liikennettä. Rehellistä kaikille sopivaa prosenttilukua ei ole. Näytön kirkkaus, signaalin laatu, taustasynkronointi, videon suoratoisto ja VPN-protokolla muuttavat tulosta.

Kevyessä selailussa ja viestittelyssä lisäkulutus on usein niin pientä, ettei se erotu selvästi akkutilastoista. Jos suoratoistat videota tuntikausia VPN:n kautta heikolla mobiilidatayhteydellä, vaikutus voi näkyä.

Akun optimointi voi myös rikkoa VPN-yhteyden. Jotkin Android-versiot pysäyttävät taustasovelluksia aggressiivisesti. Jos VPN katkeilee, avaa VPN-sovelluksen akkuasetukset ja salli rajoittamaton taustakäyttö. Sanamuoto vaihtelee valmistajittain, mutta polku on tavallisesti `Settings > Apps > [VPN app] > Battery`.

## Always-on VPN ja kill switch

Android 7.0:sta lähtien Android on tukenut Always-on VPN -toimintoa. Järjestelmä voi käynnistää VPN:n laitteen käynnistyessä ja yrittää pitää sen toiminnassa puhelimen ollessa päällä. Saatavilla voi olla myös `Block connections without VPN` -asetus, jota kutsutaan usein kill switchiksi.

Pixelissä ja monissa vakio-Androidia muistuttavissa puhelimissa avaa `Settings > Network & internet > VPN` ja napauta VPN-profiilin vieressä olevaa asetuskuvaketta. Samsung ja Xiaomi sijoittavat valikon eri paikkaan, joten asetusten haku sanalla `VPN` on usein nopein tapa löytää se.

Kill switch on hyödyllinen, mutta sen haittapuoli kannattaa ymmärtää. Jos VPN-sovellus kaatuu, palvelimeen ei saada yhteyttä tai virransäästö pysäyttää sovelluksen, Android voi estää kaiken internetliikenteen siihen asti, että VPN palaa. Tilanne voi näyttää rikkinäiseltä Wi-Fi-yhteydeltä, vaikka Wi-Fi toimii normaalisti.

## Milloin VPN voi parantaa nopeutta

Se kuulostaa nurinkuriselta, mutta VPN voi muutamassa erityistilanteessa parantaa nopeutta.

Jos verkko hidastaa tiettyä liikennetyyppiä, VPN voi piilottaa tunnelin sisällä olevan liikenteen lajin. Verkko näkee edelleen salattua dataa VPN-palvelimelle, mutta se ei ehkä tunnista yhtä helposti videostriimiä, peli-istuntoa tai VoIP-puhelua.

VPN ei luo lisää kaistanleveyttä. Se ei muuta heikkoa 4G-signaalia vahvaksi 5G-yhteydeksi eikä korjaa huonoa reititintä. Se vain muuttaa reittiä ja piilottaa liikenteen tyypin paikalliselta verkolta.

## Ilmaisiin VPN-palveluihin kannattaa suhtautua tavallista epäilevämmin

Ilmaisen VPN:n palvelimet on maksettava jollain tavalla. Osa palveluista rahoittaa ilmaistason maksullisilla tilauksilla. Toiset käyttävät mainoksia, datankeruuta, käyttörajoja, heikkoa palvelininfrastruktuuria tai pahempia keinoja.

Proton VPN:n ilmaisversio on tunnettu poikkeus, sillä palvelu ilmoittaa tarjoavansa rajattoman datan, ei mainoksia ja no-logs-käytännön. Palvelimen valintaa rajoitetaan silti maksullisiin versioihin verrattuna. Tämä on kohtuullinen vaihtokauppa.

Huono vaihtoehto on ilmainen VPN-sovellus, jonka omistaja on epäselvä, käyttöoikeudet ovat ylimitoitettuja, riippumatonta tarkastusta ei ole, liiketoimintamallia ei kerrota ja tietosuojaseloste sanoo hyvin vähän. Älä asenna sellaista puhelimeen, jolla hoidat pankkiasioita, töitä tai yksityisiä viestejä.

## Milloin VPN:ää kannattaa käyttää Androidissa

VPN on hyödyllisimmillään julkisissa Wi-Fi-verkoissa, hotelleissa, lentoasemilla, kahviloissa, jaetuissa asunnoissa sekä koulu- tai työverkoissa, joiden infrastruktuuria et hallitse. Se auttaa myös silloin, kun haluat estää internet- tai mobiilioperaattoria näkemästä verkkokohteitasi verkkotasolla.

Kotiverkossa hyöty riippuu tavoitteesta. Jos haluat piilottaa selauskohteet internetoperaattorilta, pidä VPN päällä. Jos tärkeintä on mahdollisimman suuri nopeus ja pieni viive pelaamisessa tai videopuheluissa, poista se käytöstä tai ohita kyseiset sovellukset jaetulla tunneloinnilla.

Split tunneling on hyödyllinen. Ohjaa arkaluonteinen selailu, viestit ja tuntemattomien Wi-Fi-verkkojen liikenne VPN:n kautta. Anna VPN:n kanssa ongelmia aiheuttavien sovellusten, kuten joidenkin pankkisovellusten, ohittaa tunneli.

## Miltä VPN ei suojaa

VPN ei estä tietojenkalastelua. Se ei tee väärennetystä pankkisivusta turvallista. Se ei suojaa tiliä, jolla käytetään samaa salasanaa muualla. Se ei poista haittaohjelmaa puhelimesta eikä tee epäluotettavasta VPN-palveluntarjoajasta luotettavaa.

Se suojaa yhtä kerrosta: puhelimen ja VPN-palvelimen välistä verkkoreititystä ja liikenteen yksityisyyttä.

Se on hyödyllistä. Siltä ei vain pidä odottaa kaikkien tietoturvaongelmien ratkaisemista.

## Nopeat vastaukset

Piilottaako VPN toimintani mobiilioperaattorilta?

Se piilottaa tunnelin sisällä olevat verkkosivut ja sovelluskohteet operaattorilta, mutta operaattori näkee edelleen VPN:n käytön ja siirretyn datan määrän. Tavalliset matkapuhelut ja tekstiviestit eivät kulje VPN:n kautta.

Voiko VPN rikkoa sovelluksia?

Kyllä. Pankkisovellukset, suoratoistopalvelut, työsovellukset ja jotkin pelit voivat estää VPN-liikenteen tai pitää sitä epäilyttävänä. Käytä split tunnelingia, jos vain yksi sovellus ei toimi.

Kannattaako VPN pitää aina päällä?

Julkisissa verkoissa kyllä. Kotona valinta riippuu siitä, painaako yksityisyys vai nopeus enemmän. Testaa tavallisesti käyttämäsi sovellukset ennen kuin otat Always-on VPN -toiminnon ja `Block connections without VPN` -asetuksen käyttöön.

Toimiiko VPN mobiilidatalla?

Kyllä. VPN toimii Wi-Fissä ja mobiilidatassa. Heikko signaali ja operaattorin verkon ruuhka vaikuttavat silti, joten VPN voi tuntua hitaammalta yksinkertaisesti siksi, että perusyhteys on jo valmiiksi huono.
