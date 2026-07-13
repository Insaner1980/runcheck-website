---
title: "À partir de quelle température un téléphone est-il trop chaud ?"
description: "La température d'un téléphone dépend de la chaleur ambiante, de la batterie, de la recharge et de la charge de travail. En dessous de 35 °C, elle est généralement normale. Au-dessus de 40 °C, elle demande de l'attention, et 45 °C ou plus ne devrait pas devenir habituel."
listSummary: "temperature, thermique et android"
hub: "thermal"
sourceNumber: 59
order: 7
tags: ["temperature","thermique","android","depannage","materiel"]
locale: "fr"
draft: false
---
À partir de quelle température est-ce trop chaud ? La réponse agaçante est que cela dépend de la température que vous mesurez.

L'air autour du téléphone donne une première valeur. La surface extérieure de l'appareil en donne une autre. Le capteur de la batterie en fournit encore une autre, et c'est cette dernière qui compte le plus pour le vieillissement de la batterie. Un téléphone peut sembler seulement tiède dans votre main alors que sa batterie ou son SoC est déjà assez chaud pour qu'Android réduise les performances.

De nombreux smartphones, dont les Google Pixel, sont conçus pour fonctionner au mieux à une température ambiante comprise entre 0 °C et 35 °C. Il s'agit de la température de la pièce ou de l'air extérieur, pas de celle de la batterie. À l'intérieur, un téléphone en fonctionnement est plus chaud que l'air qui l'entoure.

## Les zones de température pratiques

Ces plages sont des repères pratiques pour l'utilisateur, pas une spécification universelle des fabricants. Les capteurs et les limites thermiques varient selon les téléphones. Elles restent néanmoins assez utiles pour un diagnostic quotidien.

### En dessous de 20 °C

C'est une température basse. Un téléphone au repos dans une pièce fraîche peut se situer ici. Il n'y a pas de problème de chaleur, même si un froid marqué peut donner l'impression que la batterie est plus faible jusqu'à ce qu'elle se réchauffe.

### 20-35 °C

C'est une zone confortable pour la température de la batterie pendant une utilisation légère. Messagerie, navigation web, appels, musique et courtes vidéos devraient généralement rester dans cette plage. Si votre téléphone y passe l'essentiel de la journée, la chaleur n'est pas le problème.

### 35-40 °C

Le téléphone est chaud. Cette plage est courante pendant la recharge rapide, les appels vidéo, la navigation GPS, les jeux, l'utilisation de l'appareil photo ou le partage de connexion. De courtes périodes ne sont pas inquiétantes. Y rester plusieurs heures chaque jour est différent, car le vieillissement de la batterie s'accélère lorsque la température augmente.

### 40-45 °C

Le téléphone est très chaud. Vous le sentirez probablement à travers la face arrière ou le châssis. La recharge peut ralentir, l'écran peut s'assombrir, l'appareil photo peut désactiver le flash et les jeux peuvent perdre en performances.

Ne paniquez pas pour une brève pointe à 42 °C pendant une tâche exigeante. En revanche, soyez attentif si le téléphone reste à 42 °C sur votre table de nuit pendant la recharge, ou alors qu'il ne fait rien.

### Au-dessus de 45 °C

C'est trop chaud pour un usage régulier. À ce stade, le téléphone devrait réduire fortement son activité. La recharge peut se mettre en pause, les performances diminuer, les radios être limitées et des avertissements de température apparaître.

Des expositions répétées au-dessus de 45 °C malmènent les batteries lithium-ion. Le problème n'est pas une pointe isolée de cinq minutes. C'est le fait d'en faire une habitude quotidienne.

### Au-dessus de 50 °C

Vous entrez dans la zone dangereuse. Une utilisation normale ne devrait pas pousser un téléphone en bon état jusque-là dans une pièce à température ordinaire. Le soleil direct, une voiture chaude, un chargeur défectueux, une batterie en fin de vie ou une utilisation intensive pendant la recharge peuvent le faire.

Éteignez le téléphone si possible, placez-le dans un endroit plus frais et laissez-le refroidir naturellement. Ne le mettez pas au congélateur. La condensation serait une façon absurde de transformer un problème de chaleur en dégât des eaux.

## Comment vérifier la température

Android ne fournit toujours pas à chaque téléphone une page claire consacrée à la température de la batterie. En théorie, cela devrait être plus simple en 2026. En pratique, tout dépend encore de la marque.

Sur les Pixel compatibles, **Paramètres > Batterie > État de la batterie** fournit surtout des informations sur l'état et la capacité de la batterie. Cette page complète est réservée au Pixel 8a et aux modèles ultérieurs, et elle n'est pas disponible sur la Pixel Tablet. Elle ne remplace pas pour autant un relevé de température sur tous les modèles.

Les utilisateurs de Samsung peuvent commencer par **Samsung Members > Assistance > Diagnostics du téléphone > État de la batterie** pour vérifier l'état général de la batterie. Selon le modèle, ce diagnostic n'affiche pas forcément une température précise. Xiaomi, OnePlus, OPPO et les autres fabricants déplacent assez souvent les informations liées à la batterie, et leur contenu varie selon le modèle et la région.

L'ancien code de test Android `*#*#4636#*#*` ouvre encore les informations sur la batterie de certains téléphones. Beaucoup de modèles récents le bloquent. Des outils tiers comme CPU-Z, DevCheck, AIDA64 ou runcheck peuvent lire le capteur de température de la batterie sur de nombreux appareils, mais l'accès dépend toujours des données que le fabricant expose.

runcheck est utile lorsque les tendances comptent davantage qu'une mesure isolée. L'application suit la température de la batterie dans le temps, conserve les valeurs minimales et maximales de la session et classe la mesure actuelle dans des zones pratiques telles que Cool, Normal, Warm, Hot et Critical.

## Pourquoi la température ambiante change tout

Un téléphone ne dispose d'une marge thermique que si l'air autour de lui est plus frais. À 22 °C en intérieur, la batterie peut rester entre 26 °C et 30 °C au repos tout en gardant de la marge pour chauffer pendant l'utilisation. À 35 °C à l'extérieur, cette marge a presque disparu avant même d'ouvrir Maps.

C'est pourquoi un téléphone peut fonctionner parfaitement en hiver et sembler défectueux en juillet. Même téléphone. Point de départ différent.

Les voitures sont le pire exemple du quotidien. Google avertit les utilisateurs de Pixel de ne pas exposer l'appareil à une température supérieure à 45 °C, par exemple sur un tableau de bord ou près d'une source de chaleur. Un téléphone laissé dans une voiture stationnée n'a pas besoin d'être branché ni de faire tourner un jeu pour que sa batterie vieillisse. La chaleur suffit.

## Le froid fonctionne autrement

Le froid ralentit les réactions d'une batterie lithium-ion. Le téléphone peut afficher moins d'énergie disponible, sembler lent ou s'éteindre plus tôt que prévu. Une fois revenu à une température normale, une grande partie de ce comportement disparaît.

Le vrai risque par temps froid est la recharge sous 0 °C. Un dépôt de lithium peut se former sur l'anode lorsqu'une cellule lithium-ion recharge sous le point de congélation, et ces dommages sont permanents. La plupart des téléphones modernes essaient de l'empêcher, mais ne testez pas leur limite. Si votre appareil est resté dehors par temps glacial, laissez-le dépasser 0 °C, et de préférence se rapprocher de la température ambiante, avant de le brancher.

## La chaleur prolongée compte plus qu'une brève pointe

Le vieillissement de la batterie ne suit pas une frontière nette. Il n'existe pas de ligne magique où elle serait parfaite à 39 °C et abîmée à 40 °C. La chaleur accélère les réactions chimiques secondaires, surtout lorsque la batterie est aussi presque pleine.

Un téléphone qui atteint 42 °C pendant cinq minutes lors d'une recharge rapide, puis redescend à 30 °C, ne pose probablement pas de problème. Un téléphone maintenu à 38 °C toute la nuit parce qu'il recharge sans fil sous une coque, sur une surface molle, subit une usure plus discrète. La valeur la plus basse peut être la pire parce qu'elle dure plus longtemps.

C'est le point souvent oublié. Le pic compte, mais la durée d'exposition compte davantage.

## Que faire lorsque la température est élevée

Éloignez le téléphone du soleil. Débranchez le chargeur. Retirez la coque. Fermez l'application exigeante. Posez l'appareil sur une surface dure en laissant l'air circuler autour.

Une fois qu'il a refroidi, cherchez la cause. Était-ce la recharge rapide ? La recharge sans fil ? Un jeu ? La navigation sur un support de voiture ? Une mise à jour récente vers Android 17 sur un Pixel ? Une application restée bloquée après une mise à jour ? La solution dépend du schéma observé.

Si le téléphone atteint 45 °C ou plus pendant une utilisation ordinaire, ou s'approche un jour de 50 °C sans raison évidente, faites contrôler l'appareil plutôt que de traiter cela comme un simple problème de réglage.

---
