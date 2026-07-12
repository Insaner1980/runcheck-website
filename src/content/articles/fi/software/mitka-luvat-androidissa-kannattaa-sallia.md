---
title: "Mitkä luvat Androidissa kannattaa sallia?"
description: "Helpoin sääntö Androidin sovelluslupiin on tämä: jos lupa ei liity toimintoon, jota juuri yritit käyttää, estä se."
listSummary: "android, käyttöoikeudet ja yksityisyys"
hub: "software"
sourceNumber: 127
order: 9
tags: ["android","käyttöoikeudet","yksityisyys","tietoturva","opas"]
locale: "fi"
draft: false
---
Kamerasovelluksen pyyntö käyttää kameraa on järkevä. Taskulamppusovelluksen pyyntö käyttää yhteystietoja ei ole. Useimmat lupapäätökset eivät ole tämän monimutkaisempia.

Ongelma on ajoituksessa. Sovellus kysyy lupaa juuri silloin, kun yrität saada jotakin tehtyä, joten Salli tuntuu nopeimmalta painikkeelta. Näin tarpeettomia lupia kertyy.

## Lupien kolme pääryhmää

Androidin luvat voi jakaa kolmeen laajaan ryhmään.

Tavalliset luvat ovat vähäriskisiä ja myönnetään yleensä automaattisesti. Verkkoyhteys on selvä esimerkki. Et näe ponnahdusikkunaa aina, kun sovellus tarvitsee internetiä.

Ajon aikana pyydettävät luvat, joita Androidin dokumentaatiossa kutsutaan usein dangerous permissions -luviksi, suojaavat yksityisiä tietoja tai laitteistoa. Tähän ryhmään kuuluvat sijainti, kamera, mikrofoni, yhteystiedot, kalenteri, puhelin, tekstiviestit, lähellä olevat laitteet ja median käyttö. Näistä näet lupapyynnön sovellusta käyttäessäsi.

Erityiset käyttöoikeudet ovat tavallista voimakkaampia, ja ne myönnetään yleensä Asetuksissa. Tähän ryhmään kannattaa ajatella kuuluviksi esteettömyyspalvelun käyttö, ilmoitusten käyttöoikeus, oikeus näkyä muiden sovellusten päällä, laitteen järjestelmänvalvojan oikeudet, käyttötietojen käyttö, tuntemattomien sovellusten asentaminen ja kaikkien tiedostojen käyttö. Suhtaudu niihin epäluuloisemmin kuin tavalliseen kamera- tai sijaintipyyntöön.

Android 6 toi ajon aikana pyydettävät luvat. Android 5.1:ssä ja sitä vanhemmissa versioissa sovellukset saivat laajoja oikeuksia asennuksen yhteydessä. Jos puhelin on yhä siinä versiossa, vanha lupamalli on vain yksi monista syistä vaihtaa laite.

## Sijainti

Sijainti on hyödyllinen, mutta sitä pyydetään liikaa.

Kartta-, sää-, kyytipalvelu-, ruokalähetti-, kuntoilu- ja navigointisovelluksilla voi olla hyvä peruste. Laskimella, gallerian suodatinsovelluksella, QR-koodinlukijalla tai taustakuvasovelluksella ei yleensä ole.

Valitse Salli vain, kun sovellus on käytössä, ellei sovelluksella ole todellista taustatoimintoa. Reittiohjaus, juoksun seuranta, perheen turvallisuustoiminnot ja laitteen paikannus ovat esimerkkejä, joissa taustasijainti voi olla perusteltu.

Käytä likimääräistä sijaintia säähän, paikalliseen sisältöön, myymäläsaatavuuteen ja kaikkeen, mikä ei tarvitse tarkkaa GPS-sijaintia. Android 17 tuo tuettuihin sovelluksiin järjestelmän tarjoaman sijaintipainikkeen, jolla tarkan sijainnin voi myöntää vain nykyisen istunnon ajaksi. Se sopii tilanteeseen, jossa tarkkaa sijaintia tarvitaan kerran, mutta pysyvä tarkka käyttöoikeus olisi liikaa.

## Kamera, mikrofoni ja tallennusoikeudet

Kameran tai mikrofonin tarpeen pitäisi olla täysin ilmeinen.

Videopuhelut tarvitsevat molempia. Viestisovellukset käyttävät niitä kuviin, ääniviesteihin ja videoviesteihin. Pankkisovellus voi tarvita kameraa asiakirjan kuvaamiseen tai QR-koodin lukemiseen.

Jos sovelluksessa ei ole näkyvää toimintoa, joka käyttää kameraa tai mikrofonia, estä pyyntö. Android näyttää tietosuojailmaisimen, kun sovellus käyttää jompaakumpaa tunnistinta. Android 12 toi myös tietosuojan hallintapaneelin, josta näkee viimeaikaisen sijainnin, kameran ja mikrofonin käytön.

Tarkista se silloin tällöin. Yllätykset löytyvät sieltä.

## Yhteystiedot

Yhteystietolupa myönnetään turhan helposti.

Viestintä- ja yhteisöpalvelusovellukset pyytävät sitä löytääkseen tuttuja käyttäjiä. Toiminto on kätevä, mutta sovellus voi lähettää osoitekirjan palvelimelle tai verrata sen tietoja palvelun käyttäjiin. Yhteystiedoissasi olevat ihmiset eivät välttämättä ole suostuneet siihen.

Android 17 tuo yhteystietojen valitsimen, jonka avulla tuettu sovellus voi saada vain erikseen valitsemasi yhteystiedot koko osoitekirjan sijaan. Käytä sitä, kun vaihtoehto on tarjolla. Jos sovellus toimii ilman yhteystietolupaa, estän sen yleensä ja lisään ihmiset käsin.

## Tekstiviestit ja puhelin

Tekstiviestilupa on suuri riski. Se voi paljastaa vahvistuskoodeja, yksityisiä keskusteluja ja tilien palautusviestejä. Laaja tekstiviestilupa kuuluu yleensä vain varsinaiselle viestisovellukselle.

Jotkin pankkisovellukset pyytävät lupaa lukeakseen kertakäyttöisen koodin automaattisesti. Se on kätevää, mutta koodin kirjoittaminen itse on turvallisempi vaihtoehto. Jos sovellus toimii ilman tekstiviestilupaa, estä se.

Puhelinlupa voi sovelluksesta ja Android-versiosta riippuen paljastaa puhelun tilan, puhelinnumeron tai puheluihin liittyviä tietoja. Puhelin-, puhelunseulonta-, vastaaja- ja operaattorisovelluksilla voi olla peruste pyytää sitä. Useimmilla muilla ei ole.

## Tiedostot, kuvat ja media

Tallennustilan luvat ovat muuttuneet paljon Android-versioiden välillä.

Vanhoissa Android-versioissa tallennustilaan annettiin laaja käyttöoikeus. Android 13 jakoi yhteisen median käytön erillisiin kuva-, video- ja äänilupiin. Android 14 lisäsi valittujen kuvien käyttöoikeuden, joten sovellukselle voi antaa vain tietyt kuvat ja videot koko kirjaston sijaan.

Valitse aina suppein vaihtoehto. Anna kuvankäsittelysovellukselle valitut kuvat, älä koko mediakirjastoa. Anna musiikkisovellukselle äänitiedostojen käyttö, älä kaikkia tiedostoja. Ole erityisen varovainen kaikkien tiedostojen käyttöoikeuden kanssa, sillä se on tarkoitettu esimerkiksi tiedostonhallinta- ja varmuuskopiointisovelluksille.

## Lähellä olevat laitteet ja Wi-Fi

Bluetooth- ja lähilaiteoikeudet voivat olla perusteltuja. Kuuloke-, älykoti-, kello-, kaiutin- ja tulostinsovellukset tarvitsevat niitä usein.

Android 13 toi myös lähellä olevien Wi-Fi-laitteiden luvan sovelluksille, jotka hallitsevat Wi-Fi-yhteyksiä mutta eivät tarvitse sijaintia tähän tehtävään. Se on parempi ratkaisu kuin sijaintiluvan antaminen vain siksi, että sovellus etsii tulostinta tai muodostaa yhteyden paikalliseen laitteeseen.

Älä silti anna lähilaiteoikeutta sovellukselle, jossa ei ole mitään lähilaitteisiin liittyvää toimintoa.

## Esteettömyys, päälle piirtäminen ja järjestelmänvalvojan oikeudet

Tämä on vaaravyöhyke.

Esteettömyyspalvelun käyttöoikeudella sovellus voi lukea näytön sisältöä, seurata toimintoja ja suorittaa käyttäjän puolesta käyttöliittymätoimia. Sitä tarvitsevat aidot esteettömyystyökalut, jotkin salasanojen hallintasovellukset, automaatiosovellukset ja muutamat avustavat sovellukset. Myös haittaohjelmat käyttävät sitä väärin.

Oikeus näkyä muiden sovellusten päällä antaa sovelluksen piirtää käyttöliittymän muiden näkymien päälle. Keskustelukuplat ja näytön suodatinsovellukset käyttävät sitä. Myös huijausikkunat käyttävät.

Laitteen järjestelmänvalvojan oikeus voi tehdä sovelluksesta vaikeamman poistaa. Yritysten laitehallinnalla, lapsilukkosovelluksilla ja varkaudenestolla voi olla siihen peruste. Pelillä ei ole.

Jos satunnainen puhdistussovellus pyytää jotakin näistä, poista sovellus.

## Tarkista jo myöntämäsi luvat

Luvat eivät ole pysyviä.

Avaa Asetusten Lupienhallinta. Google-tyylisessä Androidissa se löytyy kohdasta Asetukset > Tietoturva ja yksityisyys > Yksityisyys > Lupienhallinta. Valitse esimerkiksi Sijainti, Kamera, Mikrofoni, Yhteystiedot, Tekstiviestit, Puhelin tai Tiedostot ja poista oikeudet sovelluksilta, jotka eivät niitä tarvitse.

Etsi Asetuksista myös sovellusten erityiset käyttöoikeudet. Tarkista esteettömyyspalvelut, ilmoitusten käyttöoikeus, muiden sovellusten päällä näkyminen, laitteen järjestelmänvalvojasovellukset, tuntemattomien sovellusten asentaminen, käyttötietojen käyttö ja kaikkien tiedostojen käyttö.

Android 11 ja sitä uudemmat versiot voivat nollata automaattisesti sellaisten sovellusten luvat, joita ei ole käytetty muutamaan kuukauteen. Google Play Protect voi nollata harvoin käytettyjen sovellusten lupia myös Android 6.0-10 -laitteissa. Se auttaa, mutta ei korvaa luettelon tarkistamista itse.

## Käytännön tarkistuslista lupapyyntöön

Kun lupapyyntö ilmestyy, kysy kolme asiaa.

Liittyykö lupa toimintoon, jonka juuri avasin?

Voinko valita suppeamman vaihtoehdon, kuten Salli vain, kun sovellus on käytössä, likimääräisen sijainnin, valitut kuvat tai kertaluonteisen käyttöoikeuden?

Toimiiko sovellus, jos estän luvan?

Jos olet epävarma, estä lupa. Sovellus voi pyytää sitä uudelleen, kun käytät toimintoa, joka todella tarvitsee sen.
