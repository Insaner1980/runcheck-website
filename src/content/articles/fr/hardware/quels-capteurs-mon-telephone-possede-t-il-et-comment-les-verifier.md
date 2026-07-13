---
title: "Quels capteurs mon téléphone possède-t-il et comment les vérifier ?"
description: "Pourquoi un téléphone indique-t-il parfaitement votre direction de marche dans Maps, alors qu’un autre se contente d’un vague cercle bleu ? La réponse tient souvent aux capteurs. Tous les téléphones Android en possèdent, mais leur combinaison exacte dépend du modèle, de la gamme de prix et de l’année."
listSummary: "diagnostic, capteurs et android"
hub: "hardware"
sourceNumber: 118
order: 15
tags: ["diagnostic","capteurs","android","materiel","guide"]
locale: "fr"
draft: false
---
Un modèle haut de gamme de 2026 peut intégrer un gyroscope, un baromètre, un capteur d’empreintes sous l’écran, plusieurs capteurs capables de réveiller l’appareil et toute une série de capteurs de mouvement calculés par logiciel. Un téléphone bon marché datant de quelques années peut se limiter au strict nécessaire. Cette différence devient visible lorsque la rotation de l’écran, la luminosité adaptative, la direction de la boussole, les applications AR ou l’activation au soulèvement ne fonctionnent pas comme prévu.

## Commencez par une application de capteurs

L’application Paramètres d’Android ne fournit pas un inventaire complet des capteurs matériels. Elle affiche les informations de base sur l’appareil, mais pas tous les capteurs exposés par le framework de capteurs d’Android.

La vérification la plus simple consiste à utiliser une application de diagnostic tierce comme DevCheck, CPU-Z, Sensor Test ou Sensors Toolbox. Ouvrez-la et cherchez la liste du matériel. Une bonne application affiche chaque capteur enregistré auprès d’Android, avec son nom, son fabricant, ses mesures actuelles, sa résolution et sa consommation électrique.

C’est ce qui se rapproche le plus de la réalité depuis le téléphone lui-même. Il reste une limite : la liste montre les capteurs accessibles à Android, pas tous les composants physiques soudés sur la carte. Un lecteur d’empreintes, un capteur photo, un modem ou un système de proximité à ultrasons peut ne pas apparaître à côté de l’accéléromètre et du gyroscope.

## Les codes de l’application Téléphone peuvent aider, sans être infaillibles

Certains téléphones Android disposent de menus de test cachés. Les modèles Samsung acceptent souvent `*#0*#`, qui peut ouvrir un écran de diagnostic matériel avec des tests de capteurs. Sur certains appareils Android, `*#*#4636#*#*` ouvre un menu de test, mais celui-ci concerne surtout le téléphone, la batterie et le réseau, pas un inventaire complet.

Le problème, c’est que ces codes ne sont pas universels. Les fabricants, les opérateurs, les régions et les versions logicielles récentes peuvent les désactiver. Si un code ne produit aucun effet, cela ne prouve pas que le téléphone ne possède pas le capteur. Cela prouve seulement que le code ne fonctionne pas sur cet appareil.

Les bases de données de caractéristiques sont utiles comme deuxième vérification. GSMArena et les pages produit des fabricants indiquent souvent l’équipement de capteurs prévu en usine, dans les caractéristiques du téléphone. Vous saurez ainsi ce que le modèle devait inclure, mais pas si votre capteur particulier fonctionne correctement.

## Les capteurs que l’on trouve le plus souvent

### Accéléromètre

L’accéléromètre mesure l’accélération sur trois axes. La rotation de l’écran, le comptage des pas, les gestes par secousse et la détection de mouvement de base en dépendent. Presque tous les téléphones Android en possèdent un.

### Gyroscope

Le gyroscope mesure la rotation. Il rend le suivi de l’orientation beaucoup plus précis, surtout pour l’AR, la VR, la stabilisation de l’appareil photo et la direction dans les cartes. Certains téléphones d’entrée de gamme s’en passent. Voilà pourquoi deux appareils peuvent tous deux lancer Google Maps, mais un seul pointer proprement dans la direction où vous regardez.

### Magnétomètre

Le magnétomètre détecte les champs magnétiques et sert de boussole au téléphone. Il aide les applications cartographiques à déterminer l’orientation. Sa précision varie beaucoup, car les coques, les supports de voiture, les ordinateurs portables, les haut-parleurs et d’autres appareils électroniques peuvent le perturber.

### Capteur de proximité

Le capteur de proximité détecte qu’un objet se trouve près de l’écran, généralement votre visage pendant un appel. Le téléphone l’utilise pour éteindre l’affichage et empêcher votre joue d’appuyer sur des commandes.

Les anciens téléphones utilisent souvent un petit capteur physique près de l’écouteur. Les modèles récents peuvent employer une détection de proximité virtuelle fondée sur le logiciel, l’audio, l’écran ou les données de luminosité ambiante. Cette évolution est bien réelle, mais elle complique le diagnostic, car le comportement ne correspond pas forcément à un capteur visible dans une application de diagnostic.

### Capteur de luminosité ambiante

Le capteur de luminosité ambiante mesure l’éclairage autour du téléphone en lux et alimente la luminosité adaptative. Il se trouve généralement près de la caméra avant, même si certains modèles récents le placent sous l’écran.

Un bureau bien éclairé peut donner quelques centaines de lux. La lumière directe du soleil peut largement dépasser 10 000 lux. Ne vous attachez pas trop à la valeur exacte. Vérifiez surtout qu’elle change lorsque vous couvrez le haut du téléphone ou passez dans un environnement plus lumineux.

### Baromètre

Le baromètre mesure la pression atmosphérique, généralement en hectopascals. Les téléphones l’utilisent pour estimer plus rapidement l’altitude et améliorer le contexte de localisation. Il est courant sur de nombreux modèles de milieu et de haut de gamme, mais reste loin d’être garanti sur les appareils moins chers.

### Capteur d’empreintes digitales

Un lecteur d’empreintes reste un capteur, même si l’inventaire normal d’Android ne l’affiche pas. Il peut être optique sous la vitre, ultrasonique sous l’écran ou capacitif sur le côté ou à l’arrière.

### Capteur de fréquence cardiaque

Les capteurs de fréquence cardiaque dédiés sont rares sur les téléphones récents. Samsung en a intégré à certains anciens Galaxy S et Note, mais la fonction a surtout migré vers les montres. Si votre téléphone actuel n’en indique aucun, c’est normal.

## Les capteurs que vous ne remarquez pas forcément

Le compteur de pas et le détecteur de pas peuvent apparaître comme deux capteurs distincts. Android définit `TYPE_STEP_COUNTER` et `TYPE_STEP_DETECTOR`. Certains téléphones les gèrent avec du matériel à faible consommation. D’autres calculent les pas à partir des données de l’accéléromètre.

Le vecteur de rotation, ou `rotation vector`, est généralement un capteur fusionné. Il combine des données de mouvement et d’orientation pour estimer la position 3D du téléphone. Il peut apparaître dans les diagnostics alors qu’aucune puce physique ne porte le nom « rotation vector ».

La gravité et l’accélération linéaire sont elles aussi des mesures dérivées. La première isole l’attraction gravitationnelle. La seconde retire la gravité pour que les applications se concentrent sur le mouvement réel.

Le mouvement significatif, ou `significant motion`, est un capteur déclencheur à faible consommation qui réveille le téléphone lorsqu’il détecte un déplacement notable. Des fonctions comme l’activation au soulèvement et la détection d’activité en arrière-plan peuvent dépendre de ce type de comportement.

Les téléphones pliables ajoutent un capteur plus inhabituel : l’angle de charnière. Android définit un type de capteur `hinge angle` pour les appareils qui communiquent leur position de pliage aux applications. Un téléphone monobloc classique n’en possède pas.

## Capteurs matériels et capteurs logiciels ne sont pas identiques

Android distingue les capteurs physiques des capteurs dérivés par logiciel. L’accéléromètre et le gyroscope sont des capteurs matériels. La gravité, l’accélération linéaire et le vecteur de rotation peuvent être calculés à partir d’un ou plusieurs capteurs matériels.

Cette différence influe sur la consommation. Un compteur de pas matériel à faible consommation peut fonctionner toute la journée pendant que le CPU principal dort. Un compteur logiciel demande davantage de calcul et peut donc utiliser plus de batterie.

Votre application de capteurs peut afficher un fabricant comme Bosch, STMicroelectronics, TDK InvenSense, AKM ou Sensortek. Cela désigne généralement un véritable composant matériel. Un nom générique évoquant Android ou AOSP indique plus souvent un capteur fusionné ou dérivé par logiciel.

Il n’existe pas de règle parfaite pour tous les téléphones. Les OEM peuvent exposer des capteurs propres au fabricant, cacher certains composants derrière des services système ou remplacer une pièce physique par une solution logicielle.

## Quand la liste des capteurs devient utile

La plupart des gens ne s’intéressent aux capteurs qu’après l’apparition d’un problème. L’écran ne pivote plus. La luminosité adaptative change brutalement. Une application de boussole place le nord dans votre canapé. Une application AR refuse de démarrer parce que le téléphone n’a pas de gyroscope.

Une application de capteurs vous aide à distinguer trois cas :

- Le capteur existe et ses mesures changent normalement. Le problème vient probablement des réglages de l’application, de l’étalonnage, des autorisations ou du logiciel.
- Le capteur existe, mais ses valeurs sont figées ou absurdes. Cela peut indiquer un capteur défaillant, un problème de firmware ou un mauvais étalonnage.
- Le capteur n’apparaît pas du tout. Le téléphone n’en possède peut-être pas, et aucun réglage ne pourra l’ajouter après coup.

Vous ne pouvez pas installer un gyroscope manquant par logiciel. Il existe des capteurs Bluetooth externes pour le sport et certains usages spécialisés, mais ils ne deviennent pas des éléments du framework de capteurs Android intégré au téléphone.

Il est également normal de voir plusieurs entrées pour un même capteur. Un téléphone peut exposer des versions wake-up et non-wake-up, des versions étalonnées et non étalonnées, ou des variantes propres au fabricant à côté des types de capteurs standard d’Android.
