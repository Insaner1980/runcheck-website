---
title: "Comment vérifier si le chargeur de votre téléphone est bon"
description: "Découvrez comment vérifier si le chargeur de votre téléphone Android fournit la bonne puissance grâce à des applications, des changements de câble, des contrôles physiques et un testeur de puissance USB."
listSummary: "recharge, batterie et android"
hub: "charging"
sourceNumber: 44
order: 8
tags: ["recharge","batterie","android","guide","materiel"]
locale: "fr"
draft: false
---
Un chargeur peut réussir le test de la prise sans réussir celui de la charge. USB-C indique seulement que le connecteur entre dans le port. Il ne dit pas si l'adaptateur, le câble et le téléphone se sont accordés sur la charge rapide.

Android 17 ne change pas ce problème de fond. Il n'existe toujours pas d'écran Android universel indiquant : « ce chargeur fournit actuellement 23,4 W ». Vous devez l'estimer ou le mesurer correctement.

## Commencez par lire la petite étiquette de sortie

Commençons par la partie peu passionnante : regardez l'adaptateur. Retournez-le et repérez la ligne indiquant les sorties. Vous pouvez y lire, par exemple, 5 V/3 A, 9 V/2,22 A ou 20 V/3,25 A. Multipliez les volts par les ampères pour obtenir les watts. Un profil de 9 V/2,22 A représente environ 20 W. Un profil de 20 V/3,25 A correspond à 65 W.

Un adaptateur USB-A basique peut n'indiquer que 5 V/1 A ou 5 V/2 A. Cela donne 5 W ou 10 W, ce qui est lent pour un téléphone moderne. Un chargeur USB-C PD affiche généralement plusieurs niveaux de tension et une puissance maximale, par exemple 25 W, 45 W, 65 W ou davantage.

Si le chargeur ne porte aucun marquage, méfiez-vous. Les adaptateurs sérieux de marques connues indiquent leurs caractéristiques de sortie quelque part, même si une lampe est parfois nécessaire pour les lire.

## Utilisez une application pour un contrôle rapide

Android expose le courant de la batterie et d'autres propriétés par l'intermédiaire de ses API système. Des applications peuvent donc estimer ce qui arrive à la batterie. Ampere et AccuBattery sont deux options courantes pour ce type de vérification rapide.

Branchez le chargeur, ouvrez l'application et attendez 20-30 secondes que la mesure se stabilise. Gardez une luminosité faible, fermez les applications exigeantes et réalisez le test avec une batterie située entre 20 % et 70 %. Les téléphones ralentissent la charge près du maximum, et un essai à 94 % peut faire paraître médiocre un bon chargeur.

Interprétez la valeur avec prudence. Une application affiche le courant net de la batterie, pas la puissance exacte délivrée à la sortie de l'adaptateur secteur. Le téléphone consomme en même temps, le circuit de charge perd une partie de l'énergie sous forme de chaleur, et les appareils ne rapportent pas tous le courant de la même façon. Sur certains modèles, la mesure peut être plafonnée, retardée ou simplement peu utile.

Servez-vous de ces mesures pour comparer, pas comme preuve absolue. Si un câble affiche 400 mA et un autre 2 400 mA avec le même adaptateur, vous avez appris quelque chose. Si une application indique que votre chargeur de 30 W n'en fournit que 18 W, cela ne signifie pas automatiquement qu'il est défectueux.

## Changez le câble avant d'accuser l'adaptateur

Les câbles vieillissent discrètement. Ils continuent à transmettre de l'énergie, ce qui donne l'impression qu'ils fonctionnent, mais le téléphone revient à un mode lent parce que le câble ne supporte plus le courant attendu ou ne négocie pas le bon profil.

Testez avec un câble dont vous connaissez le bon fonctionnement. Celui fourni avec le téléphone est un bon point de départ. Un câble USB-C certifié d'une marque d'accessoires reconnue convient aussi. N'utilisez pas un ancien câble fin retrouvé au fond d'un tiroir en espérant obtenir un test fiable.

Les dommages sont fréquents près des connecteurs. Si le téléphone se connecte et se déconnecte lorsque vous bougez le câble, ou si la fiche semble lâche sur plusieurs appareils, remplacez-le. Cela ne mérite pas une heure de dépannage supplémentaire.

## Utilisez un testeur USB pour obtenir de vraies mesures

Un testeur de puissance USB-C en ligne est la méthode la plus claire. Il se place entre le chargeur et le câble, puis affiche la tension, le courant et la puissance sur son propre écran. Les meilleurs modèles présentent aussi les informations USB Power Delivery, notamment le profil de tension négocié et l'activation éventuelle de PPS.

C'est important, car un téléphone ne demande pas forcément la puissance maximale du chargeur. Un adaptateur de 65 W branché à un téléphone limité à 25 W doit fournir environ 25 W au pic, et non 65 W. C'est normal.

Utilisez le même câble lorsque vous comparez plusieurs adaptateurs. Pour comparer des câbles, gardez le même adaptateur. Ne changez qu'un élément à la fois, sinon le résultat devient du bruit.

Un testeur repère aussi certains problèmes de câble que les applications voient mal. Si l'adaptateur est prêt à fournir 9 V mais que le téléphone retombe sans cesse à 5 V, le problème concerne la négociation plutôt qu'une simple mesure de courant faible côté batterie.

## Surveillez les signes physiques

Un chargeur qui devient tiède pendant une charge rapide est normal. Un chargeur trop chaud pour être tenu en main ne l'est pas.

Soyez également attentif aux bourdonnements, à une odeur de brûlé, au plastique fissuré, aux broches tordues, aux marques de chauffe, aux ports USB lâches ou à un connecteur qui bouge dans le téléphone. Une charge intermittente est un autre mauvais signe. Si l'icône de charge apparaît et disparaît, cessez d'utiliser le câble ou l'adaptateur jusqu'à avoir isolé la cause.

Les chargeurs contrefaits bon marché sont le seul domaine où je ne prendrais aucun risque. Les téléphones modernes ont des circuits de protection, mais une tension instable et une mauvaise isolation restent dangereuses. Économiser quelques euros sur un adaptateur sans marque n'en vaut pas la peine.

## Vérifiez le protocole de charge rapide

Un chargeur peut être bon sans être adapté à votre téléphone. Les Google Pixel et de nombreux Samsung utilisent USB-C Power Delivery. Sur les modèles Samsung compatibles avec les modes Charge super rapide, un chargeur prenant en charge PPS est nécessaire pour obtenir les meilleurs débits. Les téléphones OnePlus et OPPO ont souvent besoin d'un chargeur et d'un câble compatibles SUPERVOOC pour atteindre leur vitesse maximale. Xiaomi HyperCharge impose aussi ses propres conditions.

Lorsque les protocoles ne correspondent pas, le téléphone revient généralement à un mode USB plus lent. Rien ne se casse. La charge est simplement moins rapide.

Un chargeur d'ordinateur portable de 65 W peut recharger en toute sécurité un téléphone limité à 25 W, car le téléphone ne demande que la puissance qu'il peut accepter. La valeur supérieure signifie seulement que l'adaptateur dispose de davantage de marge pour les ordinateurs portables, tablettes et autres appareils.

## Quand faut-il le remplacer ?

Remplacez le chargeur s'il surchauffe, dégage une odeur anormale, bourdonne fortement, présente du plastique endommagé ou produit des résultats instables avec plusieurs bons câbles et plusieurs appareils. Remplacez le câble si le problème le suit.

Si les deux fonctionnent normalement avec d'autres appareils, votre téléphone limite peut-être la charge parce que la batterie est chaude, le port est sale, la batterie est presque pleine ou le protocole de charge rapide du chargeur n'est pas pris en charge.
