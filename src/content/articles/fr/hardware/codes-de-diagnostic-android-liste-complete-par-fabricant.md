---
title: "Codes de diagnostic Android : liste complète par fabricant"
description: "Codes de diagnostic à saisir dans le téléphone selon le fabricant, notamment pour Samsung, Pixel, Xiaomi, OnePlus, Motorola, OPPO et Realme, avec des informations à jour sur Android 17."
listSummary: "diagnostic, capteurs et android"
hub: "hardware"
sourceNumber: 112
order: 9
tags: ["diagnostic","capteurs","android","materiel","guide"]
locale: "fr"
draft: false
---
---

Vous saisissez `*#0*#` sur un Galaxy et un menu complet de tests matériels s'ouvre. Vous entrez le même code sur un autre Galaxy et il ne se passe rien.

C'est normal avec les codes de diagnostic Android. Ils sont utiles, mais Internet les présente comme bien plus universels qu'ils ne le sont. Un code peut fonctionner sur un téléphone, échouer sur un autre modèle de la même marque, puis disparaître après une mise à jour du micrologiciel opérateur. Ces codes se trouvent à la frontière entre Android, l'application Téléphone, les menus de maintenance des OEM et les restrictions des opérateurs.

Google a publié Android 17 le 16 juin 2026 et l'a d'abord proposé aux appareils Pixel compatibles. Les appareils partenaires de marques comme OnePlus, OPPO, realme, vivo, Xiaomi, HONOR, Lenovo, Sharp et iQOO restent gérés par les canaux bêta et les calendriers de déploiement d’Android 17 propres à chaque fabricant. Android 17 n'uniformise donc pas les codes de diagnostic cachés entre les marques.

Utilisez l'application Téléphone préinstallée pour les essayer. Les codes Samsung nécessitent généralement l'application Téléphone de Samsung. Ceux de Google fonctionnent plutôt avec Téléphone par Google. Les applications tierces ne traitent souvent pas du tout les codes MMI ou de maintenance.

## Avant d'essayer un code

Limitez-vous aux codes qui affichent des informations ou lancent des tests matériels. Ne saisissez pas de code de réinitialisation, de configuration opérateur, de réglage du modem ou de programmation de maintenance sans savoir précisément ce qu'il fait.

La plupart des codes de test s'exécutent dès la saisie du dernier caractère. Certains téléphones demandent d'appuyer sur le bouton d'appel. Si rien ne se produit, inutile de retaper le code en boucle. Il n'est probablement pas pris en charge par ce modèle, cette application Téléphone, ce micrologiciel opérateur ou cette version d'Android.

## Codes utilisables sur de nombreux téléphones Android

Ce sont les codes qui se rapprochent le plus d'un socle commun sous Android, mais même eux ne sont pas garantis partout.

| Code | Fonction | Remarques |
|---|---|---|
| `*#06#` | Affiche l'IMEI et parfois le MEID ou l'EID | C'est le code téléphonique le plus largement pris en charge. Il est utile pour la garantie, les vérifications de liste noire et l'assistance de l'opérateur. |
| `#07#` | Affiche les informations réglementaires et les données de DAS | Fonctionne sur de nombreux téléphones Android. Certains demandent d'appuyer sur le bouton d'appel. |
| `*#*#4636#*#*` | Ouvre le menu de test d'Android | Peut afficher des informations sur le téléphone, l'état du réseau, le signal, la batterie et le Wi-Fi. Sa disponibilité varie fortement. |
| `*#*#426#*#*` | Ouvre les diagnostics Firebase Cloud Messaging | À essayer de préférence dans Téléphone par Google. Utile lorsque les notifications push n'arrivent pas. |

Le menu `*#*#4636#*#*` est l'un des plus cités, mais ne soyez pas surpris s'il contient moins de données que sur d'anciennes captures d'écran. Les versions récentes d'Android et les interfaces des fabricants masquent davantage d'informations réseau et batterie qu'auparavant.

## Samsung Galaxy

Samsung propose deux voies de diagnostic : Samsung Members et les codes cachés de l'application Téléphone. Commencez par Samsung Members. Cette solution est prise en charge, actuelle et plus simple pour la plupart des utilisateurs.

Ouvrez Samsung Members, appuyez sur l'onglet Assistance, puis sur Diagnostics du téléphone. Selon le modèle, les tests peuvent porter sur l'appareil photo, la connexion USB, la charge par câble, l'état de la batterie, l'écran tactile, les capteurs, la vibration, le microphone, le haut-parleur, le Wi-Fi, le Bluetooth, la carte SIM, le NFC et la reconnaissance d'empreintes digitales.

Les codes Samsung restent utiles, surtout sur les téléphones non verrouillés par un opérateur, mais les réglages de sécurité de One UI, Auto Blocker, les politiques d'entreprise et le micrologiciel opérateur peuvent les bloquer.

| Code | Fonction | Remarques |
|---|---|---|
| `*#0*#` | Ouvre le principal menu de test matériel Samsung | Les tests peuvent couvrir les couleurs de l'écran, le tactile, l'écouteur, le haut-parleur, la vibration, les appareils photo, les capteurs, le S Pen et d'autres composants. |
| `*#0228#` | Affiche l'écran d'état de la batterie | Présente la tension en temps réel et d'autres données sur de nombreux modèles. Certaines versions récentes le bloquent. |
| `*#0011#` | Ouvre l'écran réseau ServiceMode | Utile pour le signal et les informations sur la cellule active. Ne modifiez aucun réglage. |
| `*#0842#` | Lance un test de vibration | Fonctionne sur de nombreux modèles Samsung, mais pas tous. |
| `*#0673#` ou `*#0289#` | Lance un test audio | Le comportement du haut-parleur et de l'écouteur varie selon le modèle. |
| `*#2663#` | Affiche les informations du micrologiciel tactile | Souvent utilisé par les techniciens de maintenance. |
| `*#7353#` | Ouvre un menu de test rapide | Plus courant sur les anciens modèles Galaxy. |
| `*#1234#` | Affiche les détails de version du micrologiciel | Indique les versions AP, CP et CSC. |
| `*#7412365#` | Affiche les informations du micrologiciel de l'appareil photo | La disponibilité varie. |
| `*#0588#` | Lance un test du capteur de proximité | Utile lorsque l'écran ne s'éteint pas pendant les appels. |
| `*#9900#` | Ouvre le mode SysDump | Principalement destiné aux journaux et au débogage. Ne modifiez pas des options au hasard. |
| `*#9090#` | Ouvre la configuration de diagnostic | Ne changez rien, sauf si vous suivez des instructions officielles de maintenance. |

Si `*#0*#` ne fonctionne pas, n'en concluez pas que le téléphone est contrefait. Essayez d'abord l'application Téléphone de Samsung à la place de Téléphone par Google, puis les diagnostics de Samsung Members. Si ces derniers fonctionnent, une voie de test matériel reste disponible même lorsque le code caché est bloqué.

## Google Pixel

Les Pixel sont plus restrictifs que les téléphones Samsung. Il n'existe pas d'équivalent Pixel direct au menu Samsung `*#0*#`.

| Code | Fonction | Remarques |
|---|---|---|
| `*#*#7287#*#*` | Ouvre les diagnostics de réparation Pixel sur les appareils compatibles | Google documente ce code pour les procédures d'autoréparation des Pixel. Une connexion Internet est nécessaire et la disponibilité peut varier selon le modèle, la région et l'état du logiciel. |
| `*#*#4636#*#*` | Ouvre le menu de test d'Android | Souvent utilisé pour consulter les informations téléphoniques et réseau, mais les champs varient selon la version d'Android. |
| `*#*#426#*#*` | Ouvre les diagnostics FCM | Utile pour dépanner les notifications push. |
| `#07#` | Affiche les informations réglementaires et le DAS | Fonctionne sur de nombreux modèles Pixel. |

Les Pixel 6 et modèles ultérieurs, y compris le Pixel Fold, disposent aussi de la rubrique Paramètres > État de l'appareil et assistance. C'est souvent un meilleur point de départ pour les questions de batterie, de charge, de performances et d'assistance. L'assistance conversationnelle ajoutée sur les Pixel 9 et modèles ultérieurs reste limitée à certaines langues.

Android 17 est disponible en OTA pour les appareils Pixel compatibles, du Pixel 6 au Pixel 10a. Cela ne signifie pas que tous les Pixel disposent des mêmes diagnostics. Le matériel, la région et la prise en charge du mode de réparation comptent toujours.

## Xiaomi, Redmi et POCO

Le menu CIT de Xiaomi fait partie des suites de tests OEM les plus complètes, mais son contenu varie selon MIUI, HyperOS, la région et la gamme de l'appareil.

| Code | Fonction | Remarques |
|---|---|---|
| `*#*#6484#*#*` | Ouvre le menu de test matériel CIT | Peut inclure l'écran, le tactile, la vibration, les haut-parleurs, les microphones, les appareils photo, les capteurs, le GPS, le Wi-Fi, le Bluetooth, la SIM, les boutons, l'empreinte digitale, l'émetteur infrarouge et le NFC. |
| `*#*#64663#*#*` | Code CIT alternatif | Fonctionne sur certains anciens modèles Xiaomi. |
| `*#*#4636#*#*` | Ouvre le menu de test d'Android | La disponibilité varie, en particulier sur les versions récentes d'HyperOS. |

Sur certains téléphones Xiaomi, le diagnostic est également accessible depuis la page consacrée à l'appareil dans les Paramètres. Ouvrez les informations détaillées ou les spécifications, puis touchez plusieurs fois la version du noyau. Si le code échoue, cette méthode mérite d'être essayée, mais les intitulés varient selon MIUI et HyperOS.

## OnePlus

L'accès aux diagnostics OnePlus a changé au fil des années, à mesure qu'OxygenOS se rapprochait de ColorOS. Les anciens guides ne correspondent donc pas toujours aux téléphones actuels.

| Code | Fonction | Remarques |
|---|---|---|
| `*#808#` | Ouvre Engineering Mode | Les tests matériels peuvent inclure l'écran, le tactile, les appareils photo, les capteurs, l'audio, la charge et les modules réseau. La disponibilité varie selon OxygenOS et la région. |
| `*#*#4636#*#*` | Ouvre le menu de test d'Android | Fonctionne encore sur de nombreux modèles. |
| `*#888#` | Affiche la version matérielle ou des informations de production | N'est pas présent sur tous les modèles. |
| `*#1234#` | Affiche la version du micrologiciel | Fonctionne sur certaines versions OnePlus. |

Soyez prudent dans Engineering Mode. Utilisez les écrans de test, mais ne modifiez pas les réglages du modem, de l'étalonnage ou de la maintenance.

## Motorola

Motorola publie moins de codes que Samsung ou Xiaomi, mais de nombreux modèles intègrent une application de test.

| Code | Fonction | Remarques |
|---|---|---|
| `*#*#2486#*#*` | Ouvre CQATest ou un menu de maintenance | Peut proposer des tests de l'écran, du tactile, du haut-parleur, de la vibration, de l'appareil photo et des capteurs. |
| `*#*#4636#*#*` | Ouvre le menu de test d'Android | Fonctionne sur de nombreux modèles. |
| `.12345+=` | Ouvre un mode d'ingénierie depuis l'application Calculatrice préinstallée | Ne fonctionne que sur certains appareils Motorola et uniquement dans leur calculatrice d'origine. |

Si CQATest apparaît dans la liste des applications après un test, ne vous inquiétez pas. Il s'agit d'un composant de test d'usine de Motorola.

## OPPO et Realme

OPPO et Realme partagent une grande partie de l'architecture de ColorOS, leurs codes de maintenance se recoupent donc.

| Code | Fonction | Remarques |
|---|---|---|
| `*#899#` | Ouvre un menu de test manuel ou d'ingénierie | Point d'entrée courant vers les tests matériels sur de nombreuses versions de ColorOS et Realme UI. |
| `*#800#` | Ouvre un outil d'ingénierie et de journaux | Souvent utilisé pour les journaux et les diagnostics réseau. |
| `*#6776#` | Affiche les informations sur le logiciel et l'appareil | Présente le modèle et le micrologiciel sur de nombreux appareils. |
| `*#*#4636#*#*` | Ouvre le menu de test d'Android | La disponibilité varie. |

La voie la plus sûre reste généralement l'application intégrée Phone Manager, My OPPO, My realme ou Support, lorsque le modèle en possède une.

## Codes à éviter

Évitez les codes de réinitialisation d'usine et de programmation de maintenance trouvés dans des listes aléatoires. Le code dangereux encore souvent recopié est `*2767*3855#`, un ancien code de réinitialisation d'usine Samsung. Ne le saisissez pas « juste pour voir ». C'est une bonne manière de perdre vos données.

Évitez aussi tout menu décrit comme NV, étalonnage RF, programmation du modem, provisionnement opérateur ou configuration de maintenance. Ce ne sont pas des jouets de diagnostic.

## Si les codes ne fonctionnent pas

Commencez par l'application Téléphone préinstallée, puis essayez l'application d'assistance ou de diagnostic du fabricant. Samsung Members, les diagnostics Pixel, Xiaomi CIT via les Paramètres, Motorola Device Help et les outils d'assistance OPPO ou Realme fonctionnent souvent lorsque les codes saisis dans le téléphone sont bloqués.

Les téléphones verrouillés par un opérateur peuvent bloquer certains codes. Les appareils gérés par une entreprise aussi. Des fonctions de sécurité ou une mise à jour d'Android peuvent supprimer ou masquer une partie d'un menu. C'est agaçant, mais cela ne signifie pas automatiquement qu'un composant matériel est défectueux.

Pour vérifier une fois un composant, les codes de diagnostic sont pratiques. Ils ne suffisent pas pour les problèmes qui évoluent lentement. Un test du haut-parleur ne montrera pas que le téléphone surchauffe chaque après-midi, et un écran d'état de la batterie ne révélera pas que le courant de charge diminue depuis un mois. runcheck complète ces tests en suivant dans le temps la batterie, la température, le réseau, le stockage et les tendances de charge.

## FAQ

### Les codes de diagnostic peuvent-ils endommager le téléphone ?

Les codes d'information et de test sont généralement sans danger. Ceux qui effacent les données ou modifient les paramètres de maintenance ne le sont pas. Recherchez la fonction exacte d'un code avant de le saisir.

### Faut-il appuyer sur le bouton d'appel ?

En général, non. La plupart des codes `*#*#...#*#*` et `*#...#` s'exécutent dès la saisie du dernier caractère. Certains téléphones demandent toutefois d'appuyer sur le bouton d'appel, en particulier pour des codes courts comme `#07#`.

### Pourquoi un code fonctionne-t-il sur un téléphone, mais pas sur un autre ?

Parce que son fonctionnement dépend de l'OEM, de l'application Téléphone, du micrologiciel et parfois de l'opérateur. Android ne garantit pas de menu universel de test matériel.

### Une application peut-elle remplacer les codes de diagnostic ?

En partie. Des applications comme Samsung Members, Phone Doctor Plus, TestM et DevCheck peuvent tester l'écran, les haut-parleurs, les appareils photo et les capteurs, ou afficher des données sur la batterie et le réseau au moyen des API Android. Elles n'accèdent généralement pas aux mêmes écrans de maintenance de bas niveau que les menus OEM.
