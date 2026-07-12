---
title: "Miten puhelimen NAND-flash-tallennustila toimii ja miksi se hidastuu"
description: "Puhelimen tallennustila perustuu NAND-flash-muistiin. Näin täysi tallennustila heikentää suorituskykyä, TRIM ja roskienkeruu toimivat ja storage I/O pysyy kunnossa."
listSummary: "Puhelimen tallennustila perustuu NAND-flash-muistiin."
hub: "storage"
sourceNumber: 89
order: 11
tags: ["suorituskyky","nopeus","android","optimointi","vianetsintä"]
locale: "fi"
draft: false
---
Puhelimessa voi olla nopea SoC, runsaasti RAM-muistia ja silti tahmea käyttötuntuma, kun tallennustila on lähes täynnä. Sovellukset pysähtyvät hetkeksi ennen avautumista. Kamera tarvitsee ylimääräisen hetken kuvan tallentamiseen. Päivitykset kestävät liian kauan.

Syy ei aina ole suorittimessa. Joskus pullonkaula on tallennustila.

## Mitä NAND-flash tekee

Puhelin tallentaa sovellukset, kuvat, viestit, välimuistit ja järjestelmädatan emolevylle juotetuille NAND-flash-siruille. 128 Gt:n puhelimessa ei ole käytettävissä täyttä 128 Gt:a omille tiedostoille, koska Android, järjestelmäosiot, palautusdata, varattu tila ja tiedostojärjestelmän rakenteet vievät osansa.

NAND tallentaa dataa sähkövarauksena pieniin soluihin. Solut on järjestetty sivuiksi, ja sivut muodostavat suurempia tyhjennyslohkoja. Hankala kohta on tämä: NAND voi kirjoittaa tyhjälle sivulle, mutta se ei voi korvata käytössä olevaa sivua suoraan samalla paikalla.

Kun dataa päivitetään, ohjain kirjoittaa uuden version toiseen paikkaan, merkitsee vanhan sivun virheelliseksi ja päivittää kartoitustaulunsa. Myöhemmin siivouksen aikana se kerää lohkon yhä kelvolliset sivut, siirtää ne tarvittaessa ja tyhjentää vanhan lohkon uudelleenkäyttöä varten.

Tätä kutsutaan roskienkeruuksi eli garbage collectioniksi. Se on normaalia. Se on myös yksi syy siihen, miksi lähes täysi puhelin tuntuu huonommalta kuin sama puhelin, jossa on vapaata tilaa.

## Miksi täysi tallennustila tuntuu hitaalta

Kun tallennustilassa on paljon tyhjiä lohkoja, datan kirjoittaminen on helppoa. Ohjain valitsee puhtaan alueen ja jatkaa eteenpäin.

Kun tallennustila on lähes täynnä, puhtaita lohkoja on vähemmän. Ohjaimen on tehtävä enemmän töitä vapaan tilan löytämiseksi, kelvollisen datan siirtämiseksi, lohkojen tyhjentämiseksi ja uuden datan kirjoittamiseksi. Tätä ylimääräistä sisäistä työtä kutsutaan kirjoitusvahvistukseksi eli write amplificationiksi, ja se voi näkyä arjessa pieninä pysähdyksinä.

Sen voi huomata sovelluksia asennettaessa, videoita tallennettaessa, päivityksiä ladattaessa tai vaihdettaessa sellaisten sovellusten välillä, joilla on suuret välimuistit. 95-prosenttisesti täysi puhelin voi tuntua paljon ikäistään vanhemmalta.

Käytännöllinen nyrkkisääntö on pitää sisäisestä tallennustilasta 15-20 % vapaana aina kun mahdollista. Se ei ole mikään taikaraja, ja eri tallennusohjaimet toimivat eri tavoin, mutta vapaa tila antaa sekä Androidille että tallennusohjaimelle työskentelyvaraa.

## TRIM, roskienkeruu ja joutenoloaika

Tiedoston poistaminen ei pyyhi välittömästi kaikkia NAND-soluja, joissa tiedosto oli. Android merkitsee tiedoston poistetuksi tiedostojärjestelmässä. Tallennusohjaimen on silti saatava tieto siitä, mitkä taustalla olevat lohkot voidaan siivota.

TRIM välittää tämän tiedon. Androidissa ylläpito tapahtuu `fstrim`-toiminnon ja tallennustilan joutenoloylläpidon avulla. Se kertoo tallennuskerrokselle, mitä lohkoja ei enää tarvita, jotta roskienkeruu voi vapauttaa ne myöhemmin.

Siksi puhelimen jättäminen käyttämättömäksi ja laturiin suuren siivouksen jälkeen voi auttaa. Poistat tiedostot, Android saa tilaisuuden tehdä ylläpitotyöt ja ohjain ehtii järjestellä tallennustilaa. Viidessä minuutissa ei kannata odottaa ihmettä. Työ tapahtuu taustalla.

Puhelimen tallennustilaa ei pidä eheyttää. Eheyttäminen kuului pyöriville kiintolevyille. NAND-flashissa se aiheuttaa tarpeettomia kirjoituksia eikä ratkaise oikeaa ongelmaa.

## SLC, MLC, TLC ja QLC selkokielellä

NAND-soluun voidaan tallentaa eri määrä dataa.

SLC tallentaa yhden bitin kuhunkin soluun. Se on nopea ja kestävä, mutta liian kallis tavalliseen puhelintallennukseen.

MLC tallentaa kaksi bittiä. Sitä käytettiin aiemmin useammin huippuluokan tallennustilassa, mutta tiheämmät NAND-tyypit ovat suurelta osin syrjäyttäneet sen.

TLC tallentaa samaan soluun kolme bittiä. Se on tavallinen nykyaikaisessa kuluttajatallennuksessa, koska hinnan, kapasiteetin ja nopeuden tasapaino sopii puhelimiin riittävän hyvin.

QLC tallentaa neljä bittiä. Se on tiheämpää ja gigatavua kohden halvempaa, mutta kestävyys on heikompi. Puhelinvalmistajat kertovat harvoin tarkkaa NAND-solutyyppiä, joten sitä ei voi päätellä pelkästä tallennuskapasiteetista.

Kun yhteen soluun pakataan enemmän dataa, jännitetasot on luettava tarkemmin ja virheenkorjausta tarvitaan enemmän. Siinä on kompromissi. Nykyaikaiset ohjaimet piilottavat suuren osan monimutkaisuudesta kulumisen tasauksella eli wear levelingillä, ECC-virheenkorjauksella, vara-alueella ja välimuistilla.

## UFS:n ja eMMC:n ero merkitsee enemmän kuin moni ajattelee

Tallennusliitäntä on yhtä tärkeä kuin itse NAND.

Monet vanhat ja edulliset Android-puhelimet käyttävät eMMC:tä. Se on yksinkertainen ja halpa, mutta selviytyy raskaasta moniajosta UFS:ää heikommin. Samsungin eMMC 5.1 -osille ilmoitettiin esimerkiksi enintään 250 MB/s:n peräkkäinen lukunopeus ja 125 MB/s:n peräkkäinen kirjoitusnopeus niiden tullessa markkinoille.

UFS on uudempi puhelinten tallennusstandardi. Se tukee komentojonoja ja full-duplex-toimintaa, joten luku- ja kirjoitusoperaatiot voidaan käsitellä tehokkaammin kuormituksen aikana. UFS 3.1 -laitteille ilmoitetaan yleisesti noin 2 100 MB/s:n peräkkäisiä lukunopeuksia. Samsungin ensimmäisen UFS 4.0 -tallennusratkaisun ilmoitettu peräkkäinen lukunopeus oli 4 200 MB/s, kaksinkertainen edellisen sukupolven otsikkolukemaan verrattuna.

Nämä ovat parhaiden olosuhteiden peräkkäisiä nopeuksia, eivät lupaus siitä, että jokainen sovellus avautuu kaksi kertaa nopeammin. Ero on silti todellinen. eMMC:tä käyttävä halpa puhelin voi tuntua hitaammalta päivityksissä, sovellusten asennuksessa ja kameran sarjakuvauksessa, vaikka suoritin näyttäisi paperilla kelvolliselta.

## Miltä tallennustilan kuluminen näyttää

NAND kuluu, kun lohkoihin ohjelmoidaan dataa ja niitä tyhjennetään. Ohjaimet jakavat kirjoitukset eri alueille, jotta yksi kohta ei kulu loppuun ennen muita. Tätä kutsutaan wear levelingiksi.

Tavallisessa puhelinkäytössä tallennustilan kuluminen alkaa yleensä vaikuttaa vasta vuosien jälkeen. Käyttäjä täyttää tallennustilan, asentaa päivityksiä, kuvaa videoita ja tyhjentää välimuisteja paljon ennen kuin NANDin kestävyys on puhelimen hidastumisen pääsyy. Raskas kirjoituskuorma on eri asia. Jatkuva lokitus, videon tallennus tai testaaminen voi vanhentaa tallennustilaa nopeammin.

Android ei näytä useimmille käyttäjille selkeää tallennustilan kuntoa kuvaavaa prosenttilukua. Osa valmistajien huoltotyökaluista näyttää enemmän tietoa, mutta käytäntö ei ole yhtenäinen. Näkyvä oire on arkisempi: sovellusten asentaminen hidastuu, tiedostojen tallennus kestää, kirjoittaminen nykii ja suorituskyky jää heikoksi myös sen jälkeen, kun olet vapauttanut tilaa ja poistanut selvän taustakuorman.

## Näin pidät puhelimen tallennustilan kunnossa

Pidä vapaata tilaa. Se on tylsä vastaus, mutta edelleen paras.

Vältä tallennustilan puhdistussovelluksia, jotka lupaavat taianomaisia nopeusparannuksia. Monet niistä vain poistavat välimuisteja, jotka Android rakentaa myöhemmin uudelleen. Jotkin jäävät lisäksi pyörimään taustalle ja aiheuttavat enemmän häiriötä kuin poistavat.

Poista vanhat lataukset, poista sovellukset, joita et käytä, siirrä suuret videot pois puhelimesta ja jätä laite suuren siivouksen jälkeen käyttämättömäksi laturiin. Jos puhelin tukee SD-korttia, käytä sitä medialle, ei nopeaa storage I/O -toimintaa tarvitseville sovelluksille.

runcheckin kaltaiset sovellukset voivat auttaa näyttämällä tallennustilan kuormituksen kehityksen sen sijaan, että ne käsittelisivät tallennustilaa yhtenä hetkellisenä lukuna. Kehitys kertoo paljon: jos puhelin täyttyy hiljalleen 70 prosentista 94 prosenttiin, se samalla selittää, miksi käyttötuntuma alkaa heiketä.
