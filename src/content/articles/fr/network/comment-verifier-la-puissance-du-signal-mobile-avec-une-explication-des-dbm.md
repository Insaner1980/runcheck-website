---
title: "Comment vérifier la puissance du signal mobile, avec une explication des dBm"
description: "Les barres de réseau sont pratiques pour un coup d'œil, mais ce ne sont pas une mesure. Deux téléphones connectés au même opérateur dans la même pièce peuvent afficher respectivement quatre et deux barres. Pour obtenir un chiffre réel, cherchez la puissance du signal en dBm."
listSummary: "Les barres de réseau sont pratiques pour un coup d'œil, mais ce ne sont pas une mesure."
hub: "network"
sourceNumber: 93
order: 4
tags: ["reseau","connectivite","android","depannage","guide"]
locale: "fr"
draft: false
---
Le terme paraît plus technique qu'il ne l'est. Le dBm représente simplement le niveau de puissance que le téléphone reçoit du réseau mobile. Plus le nombre est proche de zéro, plus le signal est fort. Une valeur de -75 dBm est donc meilleure que -95 dBm. Rien de plus compliqué.

## Lire rapidement une valeur en dBm

La puissance du signal mobile apparaît sous forme de nombre négatif parce que le téléphone mesure une très faible quantité d'énergie radio. En usage normal, la valeur se situe souvent entre environ -50 dBm et -120 dBm. Près d'une antenne, elle peut approcher -50 dBm. Dans un bâtiment en béton, une cave ou en bordure de couverture, elle peut descendre vers -110 dBm ou moins.

L'échelle est logarithmique. Un écart de 3 dBm correspond approximativement à un doublement ou à une division par deux de la puissance reçue. Ainsi, -80 dBm n'est pas seulement un peu meilleur que -86 dBm. En puissance, le signal est environ quatre fois plus fort. Oui, vraiment.

Pour la LTE et la plupart des connexions 5G sous 6 GHz, les valeurs suivantes constituent un repère pratique :

| Valeur | Signification habituelle |
|---|---|
| -50 à -70 dBm | Excellent. Les appels et les données devraient être stables, sauf si l'antenne est saturée. |
| -70 à -85 dBm | Bon. C'est une valeur normale à l'extérieur ou près d'une fenêtre avec une couverture correcte. |
| -85 à -100 dBm | Utilisable, mais médiocre. La navigation fonctionne, le streaming peut mettre en mémoire tampon et le débit montant baisse souvent en premier. |
| -100 à -110 dBm | Faible. Les appels peuvent couper, les messages peuvent arriver en retard et le modem consomme davantage pour maintenir la liaison. |
| Inférieur à -110 dBm | Limite. Attendez-vous à des expirations, à de brèves pertes de service ou à un retour forcé vers une autre couche réseau. |

Ces seuils ne sont pas des limites universelles de réussite ou d'échec. Un téléphone à -95 dBm peut fonctionner correctement si le signal est propre et que l'antenne dispose encore de capacité. Un autre peut être lent à -75 dBm si la cellule est saturée ou très perturbée.

## Comment vérifier la puissance du signal sur Android

Le menu exact change selon le fabricant, la version d'Android et la configuration de l'opérateur. Le moyen le plus rapide consiste à ouvrir les Paramètres et à rechercher « état de la carte SIM » ou « puissance du signal ».

Sur Pixel et sur de nombreux téléphones proches d'Android standard, y compris les Pixel compatibles sous Android 17, essayez **Paramètres > À propos du téléphone**, puis ouvrez les informations d'état de la SIM si elles sont proposées. Certaines versions regroupent aussi les détails de la SIM sous **Paramètres > Réseau et Internet > Profils SIM**. Cherchez la puissance du signal. Elle apparaît généralement en dBm, parfois avec une valeur ASU.

Sur les téléphones Samsung Galaxy, ouvrez **Paramètres > À propos du téléphone > Informations sur le statut**, puis consultez l'état de la carte SIM lorsque cette rubrique est disponible. Le nom peut varier selon la version de One UI et l'opérateur. Si le menu n'apparaît pas, utilisez la recherche des Paramètres.

Attention : Android affiche généralement la mesure correspondant à la couche réseau utilisée à cet instant. Si le téléphone est connecté en LTE, le chiffre concerne la LTE. S'il utilise la 5G NR, la valeur peut reposer sur les mesures du signal de référence 5G, selon ce que le modem et l'opérateur exposent. Les valeurs LTE et 5G ne sont pas toujours affichées côte à côte.

## Les menus de test cachés

De nombreux téléphones Android répondent encore à ce code de numérotation :

`*#*#4636#*#*`

Ouvrez l'application Téléphone, saisissez le code et un menu de test peut apparaître. Appuyez sur les informations du téléphone pour consulter le type de réseau, la puissance du signal, l'état de la connexion de données et d'autres données radio. Ne modifiez pas le type de réseau préféré dans ce menu si vous ne savez pas exactement ce que vous faites. C'est un écran de diagnostic, pas un réglage conçu pour le grand public.

Samsung bloque souvent ce code générique. Sur de nombreux Galaxy, `*#0011#` ouvre plutôt le Service Mode. Il peut afficher la cellule active, la bande et les mesures du signal. Les modèles vendus par certains opérateurs peuvent désactiver l'un ou l'autre code. Aucun de ces codes n'est donc garanti.

## Les applications qui simplifient la lecture

Des applications comme Network Cell Info Lite, CellularZ et Signal Strength placent la valeur en dBm sur l'écran principal et la mettent à jour en continu. Elles sont pratiques lorsque vous vous déplacez dans une maison, un bureau ou un parking pour trouver l'endroit où la connexion est réellement meilleure.

Une bonne application de mesure du signal devrait afficher plus d'un chiffre. Le RSRP indique la puissance, tandis que le RSRQ et le SINR aident à savoir si le signal est exploitable ou noyé dans le bruit.

runcheck affiche la qualité du réseau avec d'autres mesures de l'état de l'appareil et conserve un historique. C'est utile parce qu'une valeur en dBm n'est qu'une photographie. Un historique montre plus facilement si le signal est toujours faible dans une pièce, se dégrade seulement aux heures de pointe ou a changé après une mise à jour.

## RSRP, RSSI, RSRQ et SINR sans migraine

Les écrans de diagnostic utilisent plusieurs sigles qui se ressemblent. Ils ne mesurent pas la même chose.

RSSI signifie Received Signal Strength Indicator. Cette mesure était courante sur les réseaux 2G et 3G et apparaît aussi dans certains outils Wi-Fi. Elle inclut le signal utile, le bruit et les interférences. Elle est donc moins précise pour diagnostiquer une connexion mobile moderne.

RSRP signifie Reference Signal Received Power. Pour la LTE et la 5G, c'est généralement la première mesure de puissance à examiner. Elle mesure le signal de référence de la cellule active, pas toute l'énergie radio présente dans le canal.

RSRQ signifie Reference Signal Received Quality. Cette mesure combine la puissance et les interférences pour donner une indication de qualité. Une valeur moins négative est meilleure. En LTE, une valeur proche de -3 dB est excellente, tandis que -15 dB ou -20 dB indique une mauvaise qualité.

SINR signifie Signal to Interference plus Noise Ratio. Plus la valeur est élevée, mieux c'est. Au-dessus de 20 dB, la qualité est excellente. Entre 10 et 20 dB, elle est bonne. En dessous de 0 dB, le bruit et les interférences sont plus forts que le signal utile.

La version pratique est simple : regardez d'abord le RSRP. S'il est bon mais que les données restent lentes, examinez ensuite le RSRQ et le SINR. Un signal fort mais de mauvaise qualité est fréquent dans les centres-villes, les immeubles, les stades et les zones où plusieurs cellules se chevauchent.

## Pourquoi toutes les barres peuvent quand même donner un débit lent

Les barres décrivent surtout le niveau du signal. Elles ne vous disent pas combien de bande passante reste disponible, combien de personnes utilisent l'antenne, si votre forfait est moins prioritaire ou si le téléphone est connecté à une 5G basse fréquence qui ressemble davantage à une bonne LTE qu'à la 5G spectaculaire des publicités.

Deux tests au même endroit peuvent donc sembler contradictoires. Votre téléphone peut afficher -68 dBm tout en téléchargeant lentement pendant un concert, parce que des centaines ou des milliers d'appareils partagent la même cellule. À 2 heures du matin, le même téléphone au même siège peut sembler rapide.

## Pourquoi les mesures varient sans cesse

La puissance du signal change même lorsque vous restez immobile. Les ondes radio se réfléchissent sur les bâtiments, les voitures, les murs, les personnes et le relief. Certaines réflexions renforcent le signal. D'autres en annulent une partie. Déplacer le téléphone de quelques centimètres peut suffire à modifier la valeur.

Les variations sont plus importantes à l'intérieur. Une fenêtre, une cage d'ascenseur, un mur en béton, un toit métallique ou un vitrage à faible émissivité peuvent modifier la mesure de 10 dB ou davantage. Les caves et les pièces centrales sont souvent les pires endroits, car le signal doit traverser plus de matière.

L'heure peut aussi compter, mais pas toujours parce que le signal lui-même a changé. Aux périodes chargées, la cellule peut être saturée. La connexion paraît alors moins bonne même si la valeur en dBm reste proche.

## Qu'est-ce qu'une bonne valeur en 5G ?

Pour la 5G sous 6 GHz, un RSRP proche de -80 dBm est un bon résultat et une valeur autour de -100 dBm commence à être faible. Pour la mmWave, la couverture stable dépend beaucoup plus de la position. Une connexion mmWave peut être très rapide dehors avec une ligne de vue dégagée, puis disparaître après un coin de rue ou dès que vous entrez dans un bâtiment.

Ne jugez pas la 5G uniquement à son icône. Regardez la puissance, la qualité, le débit, la latence et la fréquence des retours vers la LTE.

## Réponses rapides

Peut-on améliorer le signal sans amplificateur ? Parfois. Approchez-vous d'une fenêtre, montez d'un étage, sortez du bâtiment ou essayez un autre côté de la pièce. Si la 5G est faible à l'intérieur, la LTE peut être plus efficace, car certaines bandes LTE plus basses traversent mieux les murs.

Les dBm du réseau mobile et du Wi-Fi sont-ils identiques ? L'unité est la même, mais les plages utiles diffèrent. En Wi-Fi, -50 dBm est un signal fort et la stabilité commence souvent à souffrir vers -70 dBm. Les réseaux mobiles sont conçus pour de plus longues distances et restent utilisables à des valeurs beaucoup plus faibles.

Faut-il faire confiance aux barres ou aux dBm ? Utilisez les barres pour un coup d'œil. Utilisez les dBm pour diagnostiquer.
