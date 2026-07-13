---
title: "Ces réglages Android discrets qui vident la batterie"
description: "Android peut continuer à rechercher des réseaux Wi-Fi et des appareils Bluetooth, synchroniser des données, vérifier la localisation et alimenter l'affichage permanent, même lorsque vous n'utilisez pas le téléphone. Ces réglages méritent d'être contrôlés si la décharge en veille est trop élevée."
listSummary: "android, mises-a-jour et securite"
hub: "battery"
sourceNumber: 33
order: 23
subgroup: "Drain"
tags: ["android","mises-a-jour","securite","logiciel","guide"]
locale: "fr"
draft: false
---
Une grande partie de la décharge d'un téléphone Android se produit alors que vous ne faites rien de particulier. L'écran est éteint, l'appareil est posé sur une table, mais la batterie continue de baisser parce que des applications, des radios, des capteurs et les synchronisations de comptes le réveillent régulièrement.

Android 17 a été publié le 16 juin 2026 et rendu disponible sur la plupart des Pixel compatibles. Les téléphones Samsung, Xiaomi, OnePlus, Motorola et ceux des autres fabricants reçoivent leurs propres versions d'Android 17 selon des calendriers distincts. Les principes ci-dessous restent valables, mais le chemin exact peut changer d'un niveau selon le téléphone et la version du logiciel.

## Activité des applications en arrière-plan

C'est généralement le premier endroit à examiner. Des applications peuvent synchroniser des données, rechercher des mises à jour, vérifier les notifications, envoyer des journaux, actualiser des widgets et conserver des wake locks sans attirer votre attention. Les réseaux sociaux, les applications d'achat, d'actualités et de stockage cloud, ainsi que certains utilitaires mal conçus, sont les suspects habituels.

Sur un Pixel ou une version d'Android proche de celle de Google, commencez par **Paramètres > Batterie > Utilisation de la batterie**. Ouvrez les détails par application et cherchez celles qui ont continué à consommer après que vous avez cessé de les utiliser. Sur de nombreuses versions récentes de Pixel, vous pouvez aussi ouvrir **Paramètres > Applications > Utilisation de la batterie par les applis**. Selon la version, Android présente des options équivalentes à une utilisation **Sans restriction**, **Optimisée** ou **Restreinte**.

Choisissez le réglage le plus restrictif pour les applications qui n'ont pas besoin de fonctionner après leur fermeture. Les jeux, les applications d'achat, les services de voyage que vous n'ouvrez qu'à la demande, les applications de livraison et les utilitaires occasionnels sont de bons candidats. Ne limitez pas les messageries, la messagerie professionnelle, les VPN, les dispositifs de suivi médical, les applications de sécurité familiale ni tout service dont une notification tardive pourrait poser un vrai problème.

Sur les appareils Samsung récents, l'idée se trouve généralement dans **Paramètres > Maintenance de l'appareil > Batterie > Limites utilisation arrière-plan**. L'option la plus forte est **Applications en veille profonde**, utile pour les applications que vous ouvrez rarement. Il est aussi facile d'aller trop loin. Si une notification compte, ne placez pas cette application en veille profonde.

La Batterie adaptative mérite de rester activée. Elle apprend quelles applications vous utilisez souvent et limite plus discrètement les autres. Elle ne détecte pas tout, mais constitue une bonne base.

## Recherche Wi-Fi et Bluetooth

Ce réglage est un peu trompeur. Désactiver le Wi-Fi ou le Bluetooth dans les réglages rapides n'empêche pas toujours Android d'utiliser ces radios pour améliorer la localisation. Le téléphone peut continuer à rechercher des points d'accès Wi-Fi et des appareils Bluetooth à proximité.

Sous Android 12 et les versions ultérieures, le chemin standard est **Paramètres > Localisation > Services de localisation > Recherche Wi-Fi** ou **Recherche Bluetooth**. Sous Android 11 et les versions antérieures, ces options peuvent se trouver directement dans **Paramètres > Localisation**. Samsung les place généralement aussi dans les services de localisation.

Les désactiver peut réduire de petits réveils radio répétés. En contrepartie, la localisation en intérieur peut être moins précise. Si vous utilisez Google Maps dans des bâtiments, Localiser, la géolocalisation d'une maison connectée ou des rappels liés à un lieu, la position peut être obtenue plus lentement ou avec moins de précision.

Pour la plupart des gens, je ne couperais ces recherches que si la décharge en veille est déjà gênante. Sur un téléphone en bon état, ce n'est pas le premier interrupteur à toucher.

## Horloge sur l'écran verrouillé et affichage permanent

L'affichage permanent, ou AOD, est pratique. Il fait aussi exactement ce que son nom annonce : une partie de l'écran reste allumée toute la journée.

Un écran OLED n'allume pas les pixels noirs. Une simple horloge sur fond noir consomme donc peu à un instant donné. Mais le téléphone peut rester inutilisé pendant 15 à 20 heures par jour. Une petite consommation constante finit par se voir, surtout si l'AOD affiche des couleurs, des widgets, un fond d'écran ou des notifications lumineuses.

Sur les Pixel récents, cherchez **Mode Always-on** dans **Paramètres > Écran et commandes tactiles**. Sur certaines versions antérieures, l'option se trouve dans les réglages de l'écran de verrouillage sous un libellé proche de **Toujours afficher heure et infos**. Samsung utilise généralement **Paramètres > Écran de verrouillage et AOD > Always On Display**, ou un chemin voisin selon la version de One UI.

Le meilleur compromis n'est pas toujours de tout désactiver. De nombreux téléphones proposent un affichage au toucher, uniquement à l'arrivée de nouvelles notifications ou selon un horaire. Vous conservez ainsi l'essentiel du confort sans allumer des pixels à chaque minute de la journée.

## Précision de la localisation et autorisations des applications

La précision de la localisation aide Android à déterminer votre position plus vite et plus précisément sans s'appuyer uniquement sur le GPS. Les points d'accès Wi-Fi, les antennes mobiles, les capteurs, l'adresse IP et certaines données de l'appareil peuvent contribuer à l'estimation lorsque ce réglage est activé.

Cela ne veut pas dire que la précision de la localisation est mauvaise. C'est notamment grâce à elle que le téléphone peut vous situer à l'intérieur d'un bâtiment où le GPS passe mal. Mais les applications autorisées à accéder à votre position disposent aussi de davantage de moyens pour la demander en arrière-plan, et ces requêtes répétées peuvent consommer de l'énergie.

Vérifiez **Paramètres > Localisation > Autorisation des applications**. Toute application autorisée à accéder à votre position **Tout le temps** mérite un examen. Les widgets météo, les réseaux sociaux, les applications d'achat, de photo et de voyage n'ont souvent pas besoin d'une localisation permanente. Choisissez **Uniquement si l'appli est utilisée**, sauf si le suivi en arrière-plan constitue précisément la fonction de l'application.

Depuis Android 12, vous pouvez aussi n'accorder qu'une position approximative à de nombreuses applications. Le gain concerne surtout la confidentialité, mais c'est tout de même une bonne habitude. La navigation, le suivi sportif et les applications d'urgence ou de sécurité sont les exceptions évidentes.

## Synchronisation et comptes

Chaque compte enregistré sur le téléphone peut suivre son propre calendrier de synchronisation. Google, Samsung, Microsoft, la messagerie, le calendrier, les contacts, les notes dans le cloud, Drive, Photos, le navigateur et les comptes tiers ajoutent tous du travail en arrière-plan.

Ouvrez **Paramètres > Mots de passe, clés d'accès et comptes**, ou simplement **Paramètres > Comptes** selon le téléphone, puis vérifiez ce que chaque compte synchronise. S'il s'agit de votre seul téléphone, vous voudrez probablement conserver les contacts, le calendrier et l'adresse principale. En revanche, un ancien compte professionnel, un espace cloud qui n'a pas besoin d'être synchronisé sur le téléphone ou une vieille adresse e-mail peuvent être retirés.

De nombreux téléphones proposent aussi un interrupteur global de synchronisation automatique. Je déconseille de le laisser désactivé en permanence, car les messages en retard et les calendriers non actualisés deviennent vite pénibles. Pour une journée de voyage, une longue randonnée ou une panne de courant, il peut toutefois aider.

## Le réglage de transition vers le réseau mobile

Les Options pour les développeurs contiennent un réglage appelé **Données mobiles toujours actives**. Lorsqu'il est activé, Android maintient la connexion de données mobiles prête même quand le Wi-Fi est utilisé. L'avantage est une transition plus rapide si le Wi-Fi disparaît. L'inconvénient est que le modem peut rester éveillé plus longtemps que nécessaire.

L'effet est surtout visible lorsque le signal mobile est faible. Un téléphone connecté au Wi-Fi dans un sous-sol, avec une seule barre de réseau LTE, peut continuer à gaspiller de l'énergie pour entretenir la connexion mobile.

Pour y accéder, ouvrez **Paramètres > À propos du téléphone** et appuyez sept fois sur **Numéro de build** afin d'activer les Options pour les développeurs. Vérifiez ensuite **Paramètres > Système > Options pour les développeurs > Données mobiles toujours actives**. Sur Samsung, les Options pour les développeurs apparaissent généralement tout en bas des Paramètres après leur activation.

Désactivez ce réglage si votre téléphone passe l'essentiel de la journée sur un Wi-Fi stable. Attendez-vous à un bref délai lorsque le Wi-Fi se coupe et que l'appareil repasse aux données mobiles.

## Notifications, gestes de réveil et petits réveils répétés

Une notification isolée consomme très peu. Une journée entière de notifications bruyantes, davantage. Chaque son, vibration, allumage de l'écran et animation de verrouillage donne au téléphone une nouvelle raison de quitter son état de veille le plus profond.

Ouvrez **Paramètres > Notifications > Notifications des applications** et soyez strict avec les applications promotionnelles. Les offres commerciales, rappels de jeux, recommandations de streaming, promotions de restaurants et messages marketing n'ont pas besoin de réveiller votre téléphone.

Vérifiez aussi les réglages de l'écran de verrouillage et des gestes : **Relever le téléphone pour activer l'écran**, **Appuyer pour activer l'écran**, **Appuyer deux fois pour consulter le téléphone** et les options similaires. Ils utilisent des capteurs peu gourmands et ne sont donc pas, à eux seuls, d'énormes consommateurs. Le problème vient plutôt des allumages accidentels dans une poche, un sac ou sur un bureau qui vibre.

Désactivez ceux que vous n'utilisez pas. Gardez ceux qui rendent réellement le téléphone plus agréable.

## Un signal faible, la décharge cachée qu'aucun réglage ne supprime

Un mauvais signal mobile peut consommer plus que n'importe quel réglage de cette liste. Lorsque le téléphone peine à rester connecté, le modem travaille davantage. Cela arrive dans les zones rurales, les sous-sols, les bâtiments en béton, les ascenseurs et les logements où le téléphone s'accroche à une seule barre.

Si vous êtes connecté au Wi-Fi et n'avez pas besoin des appels mobiles ni des SMS pendant un moment, le Mode Avion associé au Wi-Fi peut aider. Activez le Mode Avion, puis réactivez le Wi-Fi. La radio mobile s'arrête tandis que l'accès à Internet reste disponible. Ne le faites pas si vous devez recevoir des appels ou des SMS classiques, ou conserver les fonctions d'urgence de votre opérateur.

C'est dans ce type de situation qu'un outil comme runcheck devient utile. Si la décharge écran éteint coïncide avec un signal faible plutôt qu'avec l'utilisation de l'écran, le problème ne vient pas d'une mystérieuse application. Il vient de la radio.
