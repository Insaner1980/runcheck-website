---
title: "Codes de diagnostic Android : liste complète par fabricant"
description: "Codes de maintenance Android qui fonctionnent selon la marque, avec des informations à jour sur Android 17, les Pixel, Samsung, Xiaomi, OnePlus, Motorola, Huawei, Realme et OPPO."
listSummary: "diagnostic, capteurs et android"
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostic","capteurs","android","materiel","guide"]
locale: "fr"
draft: false
---
Les codes de maintenance Android sont utiles, mais leur fonctionnement est désordonné. Certains viennent d'Android, d'autres sont ajoutés par le fabricant, et quelques-uns disparaissent après une mise à jour du micrologiciel sans le moindre avertissement.

La situation est encore plus visible depuis le déploiement d'Android 17. Google a d'abord publié Android 17 pour la plupart des Pixel compatibles, tandis que Samsung, Xiaomi, OnePlus, Motorola et les autres marques proposeront plus tard leurs propres versions d'Android 17. Un code qui fonctionne aujourd'hui sur un Pixel sous Android 17 ne dit donc rien sur un Galaxy ou un Redmi qui n'a pas encore reçu son micrologiciel Android 17.

Deux règles avant de commencer. La plupart des codes s'activent dès la saisie du dernier caractère, sans appuyer sur le bouton d'appel. Et si un code ouvre un menu que vous ne comprenez pas, regardez les informations, mais ne modifiez rien.

## Codes universels

Ces codes sont ce qui se rapproche le plus d'une base commune sous Android. Un micrologiciel personnalisé peut tout de même les bloquer.

`*#06#` affiche le ou les numéros IMEI associés aux radios mobiles du téléphone. Les appareils double SIM en présentent généralement deux. C'est le code le plus sûr de cette liste et il fonctionne sur presque tous les téléphones, y compris les iPhone.

`*#*#4636#*#*` ouvre le menu de test d'Android sur de nombreux appareils. Il peut afficher des informations sur le téléphone, la batterie, la puissance du signal et la radio. De nombreuses interfaces OEM le restreignent désormais, surtout sur les micrologiciels récents de Samsung et Xiaomi.

`*#*#426#*#*` ouvre les diagnostics Firebase Cloud Messaging. Il sert surtout lorsque les notifications push arrivent en retard ou pas du tout, car il montre si les services Google Play maintiennent une connexion avec les serveurs de Google.

`*#07#` affiche les informations relatives au débit d'absorption spécifique, ou DAS, sur de nombreux téléphones Android. Le DAS mesure l'énergie radiofréquence absorbée par le corps pendant l'utilisation. Aux États-Unis, la limite de la FCC pour les téléphones est de 1,6 W/kg, valeur moyennée sur 1 gramme de tissu. En France et dans l'Union européenne, la limite applicable au DAS tête et au DAS tronc est de 2,0 W/kg, moyennée sur 10 grammes de tissu.

## Samsung Galaxy

Samsung conserve l'un des systèmes de diagnostic les plus pratiques, notamment parce qu'il propose à la fois des codes à saisir et une application officiellement prise en charge.

`*#0*#` ouvre l'écran de test matériel de Samsung sur de nombreux Galaxy. La présentation dépend du modèle, mais vous pouvez souvent vérifier l'écran, le tactile, les appareils photo, les haut-parleurs, la vibration, les capteurs et parfois le lecteur d'empreintes. Sur certains modèles opérateur ou micrologiciels fortement verrouillés, le code ne s'ouvre pas.

Samsung Members est la solution la plus sûre pour la plupart des utilisateurs. Ouvrez l'application, appuyez sur Assistance, puis sur Diagnostics du téléphone. Les résultats sont plus faciles à interpréter que ceux du menu de maintenance.

`*#0228#` affiche, sur de nombreux micrologiciels Galaxy, des données d'état de la batterie comme la tension et la température. Il ne fournit pas un pourcentage clair d'état de la batterie.

`*#0011#` ouvre ServiceMode sur de nombreux modèles, avec des données mobiles en direct comme la bande, la cellule active et le niveau de signal. C'est utile, mais facile à mal interpréter sans connaissances en réseaux mobiles.

`*#9900#` ouvre SysDump sur certains Galaxy. La seule option que la plupart des utilisateurs devraient envisager est le nettoyage des journaux, et uniquement si l'assistance leur a demandé d'effacer des fichiers dumpstate ou logcat accumulés.

`*#2663#` affiche les informations du micrologiciel de la dalle tactile sur certains modèles. Ne lancez pas une mise à jour tactile simplement parce qu'un bouton existe. Utilisez cette fonction seulement pour diagnostiquer un véritable problème de toucher.

## Xiaomi, Redmi et POCO

La suite de tests d'usine de Xiaomi s'appelle CIT. C'est l'un des rares menus de diagnostic Android encore documentés de façon relativement claire par le fabricant.

`*#*#6484#*#*` ouvre la détection matérielle CIT sur de nombreux téléphones Xiaomi, Redmi et POCO. Si rien ne se passe, essayez `*#*#64663#*#*`. Les pages d'assistance Xiaomi mentionnent l'un ou l'autre selon le modèle et la région.

Le menu CIT peut inclure des tests pour l'écran, le tactile, le haut-parleur, le microphone, la vibration, l'appareil photo, le capteur de proximité, le capteur de luminosité, l'accéléromètre, le gyroscope, la boussole, le Wi-Fi, le Bluetooth, la détection SIM, l'empreinte digitale, le NFC et la charge. La liste dépend du matériel présent dans le téléphone.

Le même menu est parfois accessible sans code. Depuis la page consacrée à l'appareil dans les Paramètres, ouvrez les informations détaillées ou les spécifications, puis touchez plusieurs fois la version du noyau. Xiaomi modifie les intitulés entre MIUI et HyperOS, mais cette méthode reste utile lorsque le code est bloqué.

`*#*#6485#*#*` affiche des informations sur la batterie de nombreux téléphones Xiaomi. Considérez ces valeurs comme des mesures techniques, pas comme un remplacement simple d'une page sur l'état de la batterie.

## Google Pixel

Les Pixel prennent en charge certains codes Android communs, mais le principal code de diagnostic actuel leur est propre.

`*#*#7287#*#*` ouvre la Pixel Repair Diagnostics App sur les Pixel compatibles. Google le documente pour contrôler le matériel avant ou après une réparation. Une connexion Internet est nécessaire et l'application vous guide à l'écran.

Pour les contrôles liés à la batterie sur les Pixel 6 et modèles ultérieurs, ouvrez Paramètres > Batterie > Diagnostics de la batterie. Il s'agit d'un chemin normal dans les Paramètres, pas d'un code caché.

`*#*#4636#*#*` fonctionne encore sur de nombreux Pixel pour consulter des données radio et batterie. Ce n'est pas un outil de réparation et il ne forcera pas l'installation d'une mise à jour Android.

D'anciens articles mentionnent parfois le code `.12345+=` dans la calculatrice pour ouvrir un mode d'ingénierie Pixel. Mieux vaut ne pas compter dessus en 2026. Utilisez plutôt le code officiel des diagnostics Pixel.

## OnePlus

Les codes OnePlus manquent de constance, car OxygenOS s'est rapproché de ColorOS au cours des dernières années.

`*#808#` ouvre Engineer Mode sur certains anciens téléphones OnePlus, notamment des séries OnePlus 7, 8 et 9. Il peut être bloqué par les micrologiciels plus récents.

`*#899#` ouvre un menu de diagnostic ou de journaux sur certains appareils de la famille OnePlus et OPPO. Son contenu varie beaucoup.

`*#*#4636#*#*` reste souvent le code de base le plus utile pour les informations réseau et batterie. Sur les OnePlus récents, l'application de diagnostic intégrée, l'application d'assistance ou un outil de capteurs fiable est souvent moins frustrant que la recherche d'anciens codes.

## Motorola

`*#*#2486#*#*` est souvent signalé comme donnant accès au menu d'ingénierie ou de test matériel sur de nombreux téléphones Moto. La prise en charge dépend du modèle.

L'application Device Help est plus fiable. Elle propose, sur de nombreux modèles, un parcours Device diagnosis > Hardware test pour vérifier les composants. Cette voie est plus simple à expliquer et ne dépend pas du maintien d'un code caché.

`*#*#4636#*#*` fonctionne sur de nombreux Motorola, dont l'interface Android reste souvent assez proche de la version standard.

## Huawei et Honor

`*#*#2846579#*#*` ouvre ProjectMenu sur de nombreux téléphones Huawei et sur d'anciens Honor fonctionnant sous EMUI ou MagicUI. Le menu regroupe des informations logicielles, réseau et de maintenance, avec certaines options destinées aux techniciens.

`*#*#6130#*#*` affiche des informations réseau sur certains modèles Huawei.

Sur les appareils HarmonyOS récents, utilisez plutôt l'application Support que d'attendre le fonctionnement de tous les anciens codes Android. Huawei a déplacé une grande partie des diagnostics destinés au public vers des parcours d'assistance guidés.

## Realme et OPPO

`*#800#` ouvre Engineer Mode sur certains téléphones Realme et OPPO. L'accès est beaucoup plus restreint sur les versions récentes de ColorOS.

`*#899#` peut ouvrir un menu de diagnostic ou de journaux sur certains modèles.

Ces marques modifient régulièrement l'accès aux diagnostics. Si un code ne fonctionne pas, n'enchaînez pas des listes aléatoires issues d'anciens forums. Utilisez Phone Manager, l'application d'assistance ou une application connue d'informations matérielles.

## Pourquoi les codes cessent de fonctionner

L'application Téléphone compte. Une application tierce ne traite pas forcément les codes MMI et de maintenance comme l'application préinstallée. Commencez par cette dernière.

Le micrologiciel opérateur peut supprimer des codes. Un Galaxy verrouillé par un opérateur peut se comporter différemment d'un Galaxy non verrouillé équipé du même matériel.

Les grandes mises à jour peuvent tout changer. Android 17 en est un bon exemple : les Pixel l'ont reçu en premier, mais chaque OEM publiera ensuite sa propre version, avec ses menus de maintenance, ses autorisations et ses restrictions. Lorsqu'un code cesse de fonctionner après une mise à jour système, il peut avoir été bloqué plutôt que cassé.

Et oui, certaines listes publiées en ligne sont obsolètes. Un code copié depuis un forum consacré au Galaxy S8 ne fonctionnera pas forcément sur un Galaxy S26, même si l'article promet une compatibilité avec « tous les téléphones Samsung ».

## Solutions plus sûres

Pour les contrôles courants, l'application de diagnostic du fabricant est généralement préférable à un menu caché. Samsung Members, Xiaomi CIT, Pixel Repair Diagnostics, Motorola Device Help et Huawei Support sont plus faciles à interpréter et moins risqués.

Pour une vue en lecture seule, des applications comme DevCheck, CPU-Z, AIDA64 et Phone Doctor Plus peuvent afficher des mesures de batterie, les valeurs des capteurs, des informations sur le CPU, le stockage et le réseau via les API publiques d'Android. Elles n'accèdent pas à tous les tests d'usine, mais suffisent pour la plupart des dépannages.

Pour une vue plus large de l'état du téléphone, runcheck réunit les diagnostics de batterie, de température, de réseau et de stockage dans un même tableau de bord, au lieu de vous faire passer d'un menu de maintenance à l'autre.

## Ce qu'il ne faut pas modifier

Ne changez pas les bandes réseau sans savoir précisément pourquoi vous le faites.

Ne lancez pas les boutons de mise à jour du micrologiciel présents dans les menus de maintenance juste pour voir ce qui se passe.

N'utilisez pas les fonctions de réinitialisation, d'étalonnage ou de restauration d'usine d'une liste de codes sans avoir sauvegardé le téléphone et compris leur effet.

Lire les valeurs est sans danger. Modifier des réglages cachés, c'est là que les problèmes commencent.
