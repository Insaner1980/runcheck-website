---
title: "Menu de diagnostic Samsung #0# : guide complet"
description: "Le code Samsung #0# peut ouvrir un menu de diagnostic caché pour tester l'écran, le tactile, les capteurs, les appareils photo, les haut-parleurs et les vibrations d'un Galaxy. Voici ce qu'il vérifie et quoi utiliser lorsque le code est bloqué."
listSummary: "fabricant, android et diagnostic"
hub: "brands"
sourceNumber: 160
order: 8
tags: ["fabricant","android","diagnostic","specifique-a-la-marque","guide"]
locale: "fr"
draft: false
---
Vous saisissez `*#0*#` dans l'application Téléphone Samsung, et le clavier de numérotation habituel disparaît. À sa place apparaît une grille très simple de boutons pour tester l'écran, la dalle tactile, les haut-parleurs, les capteurs, les appareils photo, le moteur de vibration et les boutons physiques.

Quand cela fonctionne, le procédé semble presque trop facile. Quand rien ne se passe, il peut devenir étonnamment frustrant, car Samsung ne présente pas ce menu comme une fonction ordinaire destinée au grand public. Considérez-le comme un menu de service de bas niveau qui fonctionne souvent sur les téléphones Galaxy, pas comme une option garantie sur chaque modèle, chaque version opérateur ou chaque région.

## Avant d'essayer le code

Utilisez l'application Téléphone Samsung. Le code peut ne pas fonctionner depuis Google Phone ou une autre application de numérotation tierce, même sur le même appareil. Ouvrez le clavier, saisissez `*#0*#` et attendez. N'appuyez pas sur Appeler.

Si rien ne se passe, le menu peut être bloqué par le firmware, la configuration de l'opérateur, un profil professionnel, une politique MDM ou certains réglages de sécurité. Des utilisateurs signalent aussi qu'Auto Blocker peut gêner les codes de service et de diagnostic sur certaines versions récentes de One UI, mais Samsung ne le documente pas comme une règle générale. Si vous décidez de vérifier ce point, désactivez Auto Blocker seulement le temps du test, puis réactivez-le. Cette protection existe pour une bonne raison.

Pour la plupart des personnes, Samsung Members est la solution de repli officielle la plus sûre. Selon votre région et la version de l'application, ouvrez Samsung Members, appuyez sur **Assistance**, puis sur **Diagnostics du téléphone** et **Démarrer**, ou choisissez **Tester tout** lorsque cette option apparaît. Vous pouvez lancer l'ensemble des tests ou sélectionner une catégorie. Les contrôles couvrent ce dont la plupart des personnes ont réellement besoin, avec des instructions plus claires que la grille brute de `*#0*#`.

## Tests de l'écran et du tactile

Les boutons Red, Green, Blue et Black remplissent l'écran d'une couleur unie. Utilisez-les pour repérer les pixels morts ou bloqués, une dominante de couleur, une luminosité irrégulière et des dégâts d'écran peu visibles sur votre fond d'écran.

Black est particulièrement utile sur les Galaxy équipés d'une dalle OLED. Un écran réellement noir devrait sembler éteint. Des points lumineux ou colorés peuvent indiquer des pixels bloqués, tandis que des zones nuageuses peuvent venir d'un panneau endommagé ou de marques de pression.

Le test Touch affiche une grille ou un motif que vous devez suivre avec le doigt. Chaque section doit réagir proprement. Ce test repère les zones mortes proches des bords, faciles à manquer si vous vous contentez de taper quelques mots ou de faire défiler les Paramètres.

Le test Dimming modifie la luminosité et le rendu des couleurs. Cherchez un scintillement, des variations irrégulières, des changements de couleur anormaux ou une dalle qui ne réduit pas progressivement sa luminosité. Sur les anciens Galaxy à écran LCD, vous pouvez remarquer un problème de rétroéclairage. Sur une dalle OLED, vous observez surtout le comportement des pixels et le contrôle de la luminosité.

## Audio, vibration et boutons

Receiver diffuse un son par l'écouteur d'appel. Speaker utilise les haut-parleurs principaux. Sur un Galaxy stéréo récent, écoutez si le haut-parleur de l'écouteur et celui du bas ont un volume déséquilibré. Un côté faible reste un problème, même si le téléphone produit techniquement du son.

Le test Vibration active le moteur haptique. Un moteur en bon état produit une vibration régulière et maîtrisée. S'il cliquette, bourdonne fortement ou semble rugueux, le moteur ou sa fixation interne peut être usé.

Sub key teste les boutons physiques et certaines commandes de navigation. Appuyez sur les touches de volume, le bouton d'alimentation et toute touche de navigation demandée par le test. Si un bouton ne fonctionne qu'avec une forte pression ou sous un angle précis, ne l'ignorez pas. Ce n'est généralement pas un problème logiciel.

## Capteurs et appareils photo

Le menu Sensor est l'une des meilleures raisons d'utiliser `*#0*#`. Il peut afficher les valeurs en direct de l'accéléromètre, du gyroscope, du capteur de proximité, du capteur de luminosité, du capteur magnétique, du baromètre sur les modèles compatibles, du lecteur d'empreintes et des anciens capteurs de fréquence cardiaque présents sur certains Galaxy.

Quelques contrôles sont simples. Couvrez le capteur de proximité près du haut de l'écran et vérifiez que son état change. Déplacez le téléphone pour observer l'accéléromètre. Faites-le pivoter pour contrôler le gyroscope. Couvrez le capteur de luminosité, puis dirigez-le vers une lampe.

Les résultats demandent un peu de bon sens. Un capteur magnétique peut se comporter étrangement près d'un ordinateur portable, d'un aimant de coque, d'un support de voiture ou d'un bureau métallique. Un capteur de proximité peut échouer parce qu'une protection d'écran le masque. Refaites le test dans un environnement dégagé avant de conclure que le capteur est mort.

Mega Cam et Front Cam ouvrent les appareils photo arrière et avant. Ils confirment que les modules démarrent, font la mise au point et capturent une image. Ils ne prouvent pas que chaque objectif est net, que la stabilisation optique fonctionne correctement ou que vos photos de nuit seront bonnes. Les tests matériels restent assez rudimentaires.

## D'autres codes parfois utiles

Samsung possède d'autres codes de numérotation, mais leur prise en charge varie selon le modèle, l'opérateur, la version de One UI et la région. Ne considérez pas les listes trouvées sur Internet comme universelles.

`*#06#` affiche l'IMEI. Ce code est sûr et fonctionne sur de nombreux téléphones, pas seulement chez Samsung.

`*#1234#` affiche des informations sur le firmware Samsung de nombreux appareils Galaxy, notamment les chaînes de build AP, CP et CSC. C'est utile pour vérifier précisément la version logicielle installée.

`*#0228#` peut afficher des détails sur l'état de la batterie sur de nombreux Galaxy. S'il s'ouvre, utilisez-le comme écran de contrôle instantané, pas comme rapport complet sur l'état de la batterie.

D'anciens codes comme `*#7353#`, `*#0842#`, `*#0673#` et `*#0289#` peuvent encore fonctionner sur certains appareils. Sur d'autres, rien ne se passe. C'est aujourd'hui normal.

## Ce que `*#0*#` ne peut pas prouver

Le menu vérifie si le matériel répond à l'instant du test. Il ne fournit pas l'évolution de l'état de la batterie, l'historique des cycles de charge, les journaux de bridage thermique, l'historique de la puissance du signal ni les performances de stockage I/O sur la durée.

Il ne prouve pas non plus à lui seul que le téléphone est authentique. Un menu de diagnostic Samsung fonctionnel est un bon signe, mais ce n'est pas suffisant. Si vous achetez un appareil d'occasion, contrôlez aussi l'IMEI, la version du firmware, l'état de Knox lorsque c'est pertinent, la preuve d'achat et les détails physiques.

Un téléphone peut réussir tous les tests de `*#0*#` et rester lent parce que son stockage est presque plein, qu'une mauvaise application tourne en arrière-plan, que la tension de la batterie chute sous charge ou qu'une mise à jour récente a introduit un bug. Les tests matériels n'expliquent pas tout.

## Quand Samsung Members est le meilleur choix

Utilisez Samsung Members lorsque le code brut ne fonctionne pas, lorsque vous avez besoin d'un résultat plus clair ou lorsque vous voulez envoyer un rapport d'erreur. Selon l'appareil, les diagnostics officiels de Samsung peuvent tester l'état de la batterie, la charge par câble, la charge sans fil, l'écran tactile, les capteurs, le microphone, les haut-parleurs, les appareils photo, le Wi-Fi, le Bluetooth, la carte SIM, le réseau mobile, la reconnaissance d'empreintes, le NFC, les boutons et d'autres composants.

Les personnes moins techniques devraient commencer par Samsung Members. L'application indique plus clairement la marche à suivre lorsqu'un test échoue. Le menu `*#0*#` suppose en grande partie que vous savez déjà interpréter ce que vous voyez.

Cela ne rend pas un outil meilleur dans tous les cas. J'utiliserais `*#0*#` pour contrôler rapidement l'écran, le tactile, les capteurs et l'audio d'un téléphone d'occasion. Pour un dépannage habituel, une demande d'assistance ou un rapport officiel, je choisirais Samsung Members.

## Android 17 et compatibilité Galaxy

La version stable d'Android 17 a d'abord été diffusée sur les appareils Pixel compatibles. Les téléphones Galaxy suivent le calendrier propre à Samsung. En juillet 2026, One UI 9, basé sur Android 17, est encore proposé en bêta sur la série Galaxy S26, et sa disponibilité varie selon le marché.

Lorsque la version Galaxy basée sur Android 17 arrivera sur votre modèle, l'accès au diagnostic pourra toujours dépendre de l'application Téléphone Samsung, de la version de One UI, du firmware opérateur, de la région, des réglages de sécurité et des mises à jour de Samsung Members. Le fait que le code fonctionne sur un Galaxy de la série S ne prouve donc pas qu'il fonctionnera sur un Galaxy de la série A posé juste à côté.

Si `*#0*#` est bloqué, ne perdez pas une heure à lutter avec le clavier. Lancez plutôt les diagnostics de Samsung Members.

---
