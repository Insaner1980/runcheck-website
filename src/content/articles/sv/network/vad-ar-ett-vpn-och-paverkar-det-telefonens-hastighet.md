---
title: "Vad är ett VPN och påverkar det telefonens hastighet?"
description: "En lättbegriplig guide till vad ett VPN gör på Android, hur det påverkar hastighet och batteritid och när det är rimligt att använda ett."
listSummary: "nätverk, anslutningar och android"
hub: "network"
sourceNumber: 99
order: 10
tags: ["nätverk","anslutningar","android","felsökning","guide"]
locale: "sv"
draft: false
---
Ett VPN ändrar vägen som telefonens internettrafik tar. I stället för att apparna ansluter direkt via Wi-Fi-nätverket eller mobiloperatören skickar telefonen först trafiken genom en krypterad tunnel till en VPN-server. Webbplatser och appar ser VPN-serverns IP-adress, inte telefonens vanliga offentliga IP-adress.

Det låter mer mystiskt än det är. Ett VPN är användbart, men det är inget kraftfält för integriteten.

## Vad ett VPN faktiskt döljer

När ett VPN är aktivt kan den som driver Wi-Fi-nätverket, surfzonen eller mobilnätet vanligtvis se att telefonen är ansluten till en VPN-server. De kan också se hur mycket data som överförs. Däremot ska de inte kunna se de enskilda webbplatserna och appdestinationerna inne i tunneln, förutsatt att VPN-tjänsten fungerar korrekt och även hanterar DNS-trafiken.

VPN-leverantören hamnar samtidigt i mitten. Leverantören kan se anslutningsmetadata och kan, beroende på hur tjänsten är uppbyggd, ha möjlighet att se mer. Därför spelar valet av leverantör stor roll. En tveksam kostnadsfri VPN-tjänst kan vara sämre för integriteten än inget VPN alls.

På Android körs en VPN-app som en ständig bakgrundstjänst. Vanligtvis visas en liten nyckelsymbol i statusfältet. Om appen inte använder split tunneling, alltså delad tunnel, går trafik från webbläsare, appar och systemtjänster genom VPN-tunneln.

## Varför ett VPN kan göra telefonen långsammare

Alla VPN-anslutningar innebär extra arbete. Telefonen krypterar datapaketen, skickar dem till VPN-servern, väntar på att servern ska vidarebefordra dem och tar sedan emot svaret samma väg tillbaka.

Två saker förändras:

- Fördröjningen ökar. En närliggande VPN-server kanske bara lägger till lite väntetid. En server på andra sidan jorden kan få webbsurfning, spel och videosamtal att kännas tröga.
- Genomströmningen kan sjunka. Krypteringen tar bearbetningstid, och VPN-servern kan bli flaskhalsen om den är hårt belastad eller ligger långt bort.

Med en bra VPN-tjänst, en närliggande server och ett modernt protokoll märker du kanske knappt någon skillnad vid vanlig surfning eller meddelanden. Med en avlägsen server, en full kostnadsfri server eller ett äldre protokoll kan försämringen vara tydlig.

Det här är jämförelsen som betyder något: en WireGuard-anslutning till en server i Sverige kan kännas nästan normal, medan OpenVPN TCP till en server 8 000 km bort kan få även enkla sidor att kännas tunga.

## Protokollet spelar roll

VPN-appar låter dig ofta välja protokoll. Vissa döljer valet bakom namn som `Smart`, `Automatic` eller ett eget varumärkesnamn.

WireGuard är det moderna standardval jag skulle prova först när VPN-appen stöder det. Konstruktionen är mindre än hos äldre protokoll och prestandan brukar vara bra på telefoner.

OpenVPN är äldre och har brett stöd. Det är fortfarande användbart, särskilt i nätverk som blockerar nyare protokoll, men känns ofta långsammare. OpenVPN UDP är vanligtvis snabbare än OpenVPN TCP. TCP kan hjälpa i instabila nätverk, men ger mer overhead.

IKEv2/IPsec är fortfarande vanligt på mobila enheter eftersom det hanterar växling mellan Wi-Fi och mobildata bra. Det kan vara en bra kompromiss, särskilt för arbets-VPN.

Om VPN-anslutningen känns långsam behöver du inte byta leverantör direkt. Prova först en server i närheten och ett annat protokoll.

## Batteriförbrukningen är verklig, men varierar

Ett VPN kan använda extra batteri eftersom telefonen håller tunneln aktiv och krypterar trafiken. Det finns ingen ärlig procentsiffra som gäller för alla. Skärmens ljusstyrka, signalkvalitet, synkronisering i bakgrunden, videoströmning och VPN-protokollet påverkar resultatet.

Vid lätt surfning och meddelanden är den extra förbrukningen ofta för liten för att synas tydligt i batteristatistiken. Strömmar du video i flera timmar genom ett VPN över svag mobildata kan den märkas.

Batterioptimering kan också få VPN-tjänster att sluta fungera. Vissa Android-versioner pausar bakgrundsappar aggressivt. Om VPN-anslutningen bryts ofta öppnar du appens batteriinställningar och tillåter obegränsad bakgrundsanvändning. Formuleringen varierar mellan märken, men inställningen finns ofta under `Settings > Apps > [VPN app] > Battery`.

## Always-on VPN och kill switch

Android 7.0 och senare stöder `Always-on VPN`, alltså ett alltid aktivt VPN. Android kan starta VPN-anslutningen när enheten startar och försöka hålla den igång så länge telefonen är på. Det finns även ett alternativ som heter `Block connections without VPN`, ofta kallat kill switch.

På Pixel och många standardnära Android-telefoner hittar du det under `Settings > Network & internet > VPN`. Tryck sedan på kugghjulet bredvid VPN-profilen. Samsung och Xiaomi placerar menyn på andra ställen, så sök efter `VPN` i Inställningar om du inte hittar den.

En kill switch är användbar, men kompromissen är verklig. Om VPN-appen kraschar, servern inte går att nå eller batterisparfunktionen stoppar appen kan Android blockera all internettrafik tills VPN-anslutningen fungerar igen. Då kan det se ut som om Wi-Fi är trasigt trots att själva nätverket fungerar.

## När ett VPN kan förbättra hastigheten

Det låter bakvänt, men i vissa särskilda situationer kan ett VPN ge bättre hastighet.

Om ett nätverk begränsar vissa typer av trafik kan VPN-tunneln dölja vilken typ av data som skickas. Nätverket ser fortfarande krypterad trafik till en VPN-server, men kan få svårare att identifiera en videoström, spelsession eller VoIP-samtal.

Det betyder inte att ett VPN skapar bandbredd. Det kan inte förvandla en svag 4G-signal till en stark 5G-anslutning. Det kan inte reparera en dålig router. Det ändrar bara vägen och döljer trafiktypen för det lokala nätverket.

## Kostnadsfria VPN-tjänster förtjänar extra misstänksamhet

Kostnadsfria VPN-tjänster måste finansiera sina servrar på något sätt. Vissa gör det genom en betalnivå. Andra använder annonser, datainsamling, trafikgränser, svag infrastruktur eller sämre metoder.

Proton VPN:s kostnadsfria abonnemang är ett av de mer välkända undantagen. Det erbjuder obegränsad data, inga annonser och en policy utan aktivitetsloggar, men ger fortfarande mindre kontroll över servervalet än betalabonnemangen. Det är den rimliga versionen av kompromissen.

Den dåliga versionen är en kostnadsfri VPN-app med otydlig ägare, långtgående behörigheter, ingen granskning, oklar affärsmodell och en integritetspolicy som nästan inte säger någonting. Installera inte en sådan på en telefon som används för bankärenden, arbete eller privata meddelanden.

## När du bör använda ett VPN på Android

Ett VPN är mest motiverat på offentliga Wi-Fi-nätverk, hotell, flygplatser, kaféer, delade boenden och skol- eller arbetsnätverk där du inte kontrollerar infrastrukturen. Det är också användbart när du vill dölja nätverksdestinationer för internetleverantören eller mobiloperatören.

På hemmets Wi-Fi beror nyttan på vad som är viktigast för dig. Om målet är att dölja vilka destinationer du besöker för internetleverantören kan du låta VPN vara på. Om du vill ha högsta möjliga hastighet och lägsta fördröjning för spel eller videosamtal kan du stänga av det eller använda delad tunnel för dessa appar.

Delad tunnel är värd att använda. Låt känslig surfning, meddelanden och trafik i okända Wi-Fi-nät gå genom VPN. Låt appar som inte fungerar bakom VPN, till exempel vissa bankappar, gå förbi tunneln.

## Vad ett VPN inte skyddar mot

Ett VPN stoppar inte nätfiske. Det gör inte en falsk banksida säker. Det skyddar inte ett konto med ett återanvänt lösenord. Det tar inte bort skadlig kod från telefonen. Och det gör inte en opålitlig VPN-leverantör pålitlig.

Det skyddar ett lager: nätverksvägen och trafiken mellan telefonen och VPN-servern.

Det är användbart. Begär bara inte att det ska sköta alla säkerhetsuppgifter.

## Snabba svar

Döljer ett VPN min aktivitet för mobiloperatören?

Det döljer webbplatserna och appdestinationerna inne i tunneln, men operatören kan fortfarande se att du använder ett VPN och hur mycket data som överförs. Vanliga mobilsamtal och SMS går inte genom VPN-tunneln.

Kan ett VPN få appar att sluta fungera?

Ja. Bankappar, strömningstjänster, arbetsappar och vissa spel kan blockera VPN-trafik eller behandla den som misstänkt. Använd delad tunnel om bara en app har problem.

Bör VPN vara på hela tiden?

På offentliga nätverk är det ofta klokt. Hemma beror det på om integritet eller hastighet väger tyngst. Testa dina vanliga appar innan du aktiverar `Always-on VPN` tillsammans med `Block connections without VPN`.

Fungerar VPN med mobildata?

Ja. Ett VPN fungerar både med Wi-Fi och mobildata. Svag signal och överbelastning i mobilnätet spelar fortfarande roll, så VPN kan kännas långsammare när grundanslutningen redan kämpar.
