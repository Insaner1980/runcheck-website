---
title: "Comment vérifier la puissance du signal WiFi sur Android"
description: "Apprenez à lire la puissance du WiFi sur Android en dBm, et pas seulement avec les barres de l'icône. L'article présente les réglages intégrés, les applications d'analyse et la signification des valeurs."
listSummary: "Apprenez à lire la puissance du WiFi sur Android en dBm, et pas seulement avec les barres de l'icône."
hub: "network"
sourceNumber: 90
order: 1
tags: ["reseau","connectivite","android","depannage","guide"]
locale: "fr"
draft: false
---
Les barres WiFi de la barre d'état donnent une indication approximative, pas une mesure. Placez deux téléphones côte à côte et ils peuvent afficher des résultats différents, car les interfaces Android et les fabricants ne convertissent pas tous la puissance du signal de la même manière.

Pour un vrai diagnostic, cherchez la valeur en dBm. Elle indique la puissance du signal que votre téléphone reçoit du routeur.

## Commencez dans les paramètres Android

Sur un Pixel ou un appareil proche d'Android standard, ouvrez **Paramètres > Réseau et Internet > Internet**. Sur un Samsung Galaxy, ouvrez **Paramètres > Connexions > Wi-Fi**. Appuyez ensuite sur le réseau auquel vous êtes connecté.

L'écran de détail indique généralement une qualité comme Excellente, Bonne, Moyenne ou Faible. Il peut aussi afficher la vitesse de connexion, la fréquence, le type de sécurité, l'adresse IP et d'autres informations. Le contenu exact varie selon la marque et la version d'Android. Ne vous inquiétez donc pas si votre téléphone ne ressemble pas parfaitement à la capture d'écran d'un guide.

Sur beaucoup de téléphones actuels, les paramètres Android n'affichent pas la valeur brute en dBm. C'est frustrant, mais courant. La vitesse de connexion donne tout de même un contexte utile. Si elle passe de plusieurs centaines de Mbps près du routeur à 40 Mbps dans la chambre située au fond du logement, la connexion vous fournit déjà un indice.

## Essayez les options pour les développeurs, sans trop compter dessus

Certains téléphones peuvent afficher davantage d'informations WiFi après l'activation des options pour les développeurs.

Ouvrez **Paramètres > À propos du téléphone** et appuyez 7 fois sur le numéro de build. Revenez ensuite dans **Paramètres > Système > Options pour les développeurs**, puis cherchez dans la section Réseaux l'option de journalisation Wi-Fi détaillée. La documentation de Google indique qu'elle augmente le niveau de journalisation de chaque SSID en fonction de sa puissance relative reçue, ou RSSI.

Dans la pratique, le résultat visible varie. Les Pixel et les appareils proches d'Android standard ont davantage de chances d'afficher des détails utiles. Samsung et d'autres versions OEM peuvent masquer les mêmes informations ou les présenter autrement. C'est l'une de ces astuces Android qui fonctionnent jusqu'au jour où elles ne fonctionnent plus.

## Utilisez une application d'analyse WiFi pour obtenir les dBm

Une application d'analyse WiFi reste le moyen le plus simple d'obtenir une mesure en dBm sur des téléphones différents.

WiFiman d'Ubiquiti affiche notamment la puissance du signal, le canal, le SSID, le BSSID, la passerelle, le DNS, la latence et la perte de paquets. C'est un bon premier choix si vous cherchez une seule application qui propose aussi des tests de débit et la détection des appareils présents sur le réseau.

NetSpot convient mieux lorsque vous voulez cartographier un espace. Il peut afficher la puissance du signal et vous aider à construire une vue approximative de la couverture pendant que vous vous déplacez dans une maison ou un bureau.

Network Analyzer est utile lorsque le problème ne vient peut-être pas du signal. L'application associe des informations WiFi et mobiles à des outils comme le ping, la recherche DNS et le traceroute.

Après l'installation, repérez le nom de votre réseau et observez la valeur en dBm pendant vos déplacements. Ce chiffre compte davantage que l'icône affichée dans la barre d'état.

## Comment interpréter les valeurs en dBm

Les valeurs en dBm sont négatives. Plus elles sont proches de zéro, plus le signal est puissant. Une mesure de -45 dBm est donc bien meilleure qu'une mesure de -75 dBm.

Vous pouvez utiliser ces seuils pratiques pour un réseau domestique :

- -30 à -50 dBm : excellent. Vous êtes probablement près du routeur ou du point d'accès.
- -50 à -60 dBm : puissant. Le streaming, les appels vidéo et la navigation ordinaire devraient rester stables.
- -60 à -67 dBm : encore bon pour la plupart des usages, notamment la vidéo HD et les appels si les interférences restent faibles.
- -67 à -70 dBm : utilisable, mais les appels en temps réel et les jeux peuvent commencer à souffrir.
- -70 à -80 dBm : faible. La navigation peut fonctionner, mais la qualité vidéo risque de baisser et les appels de se figer.
- Sous -80 dBm : mauvais. Le téléphone peut rester connecté alors que les transferts de données semblent presque bloqués.

Il n'existe pas de seuil parfait, car le bruit et les interférences comptent eux aussi. Dans un immeuble rempli de routeurs, un signal propre à -68 dBm peut être meilleur qu'un signal bruyant à -60 dBm.

## Vérifiez la bande de fréquences

La plupart des routeurs utilisent une bande basse de 2,4 GHz et une bande de 5 GHz plus rapide. Les modèles récents peuvent aussi exploiter 6 GHz avec le WiFi 6E ou le WiFi 7.

La bande la plus basse porte plus loin et traverse mieux les murs, mais elle est encombrée. Les appareils Bluetooth, les routeurs voisins, les babyphones et les fours à micro-ondes peuvent tous ajouter du bruit.

La bande de 5 GHz est plus rapide à courte et moyenne distance. Son signal faiblit davantage en traversant les murs et les planchers. Un téléphone peut y afficher une valeur en dBm moins bonne tout en obtenant de meilleurs débits, parce que davantage de spectre est disponible.

La bande de 6 GHz est encore plus dégagée lorsqu'elle est disponible, mais sa portée est plus courte. Elle fonctionne très bien dans la même pièce ou dans les pièces voisines. Ce n'est pas une solution magique pour toute la maison.

Si votre routeur regroupe les bandes sous un seul nom de réseau, le téléphone en choisit une automatiquement. Ce choix convient généralement, mais pas toujours. Lorsque vous analysez une zone morte, vérifiez la bande réellement utilisée avant d'accuser le routeur.

## Parcourez les zones problématiques

Ouvrez l'application d'analyse et marchez lentement dans les pièces où le WiFi fonctionne mal. Repérez l'endroit où votre réseau descend sous environ -70 dBm.

Les obstacles classiques sont banals mais bien réels : murs en béton, briques, portes métalliques, miroirs avec couche métallique, chauffage au sol et routeurs cachés dans un meuble. Placer le routeur dans un placard est un problème que l'on s'inflige soi-même.

runcheck affiche la mesure WiFi actuelle sur l'écran de détail du réseau, avec les dBm, une évaluation de la qualité, la vitesse de connexion, la fréquence et la latence lorsque Android fournit ces valeurs. L'historique du réseau devient utile lorsque le problème est intermittent, par exemple si les débits chutent tous les soirs ou si la qualité du signal baisse uniquement dans une pièce.

## Comment améliorer un signal faible

Commencez par déplacer le routeur. Placez-le plus haut, plus près du centre du logement et à distance des objets métalliques. Ne le cachez pas derrière le téléviseur ou dans un meuble.

Changez de canal si les routeurs voisins encombrent le même. Sur 2,4 GHz, les canaux 1, 6 et 11 sont les choix non chevauchants habituels. Sur 5 GHz et 6 GHz, l'espace disponible est plus vaste, mais la congestion existe aussi dans les immeubles.

Utilisez un réseau maillé lorsqu'un seul routeur ne peut pas couvrir toute la surface. Un système mesh avec des bornes bien placées donne généralement de meilleurs résultats qu'un répéteur bon marché installé à la limite de la zone déjà mal couverte. Le répéteur a lui aussi besoin d'un signal correct. S'il entend à peine le routeur, il ne peut pas créer un bon réseau à partir de rien.

Mettez à jour le micrologiciel du routeur lorsque des mises à jour sont disponibles. Cela ne changera pas les lois de la physique, mais peut corriger des bugs, des problèmes d'itinérance et des incompatibilités avec les téléphones récents.
