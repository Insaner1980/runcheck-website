---
title: "Qu'est-ce que le bridage thermique et quel effet a-t-il sur votre téléphone ?"
description: "Le bridage thermique intégré à Android protège votre téléphone contre la chaleur. Découvrez les niveaux thermiques d'Android, la marge thermique, les causes fréquentes et les moyens de réduire le bridage sans risque."
listSummary: "Le bridage thermique intégré à Android protège votre téléphone contre la chaleur."
hub: "thermal"
sourceNumber: 56
order: 4
tags: ["temperature","thermique","android","depannage","materiel"]
locale: "fr"
draft: false
---
Pourquoi un téléphone rapide devient-il soudain lent au milieu d'une partie, d'un appel vidéo ou d'une séance photo ? Le plus souvent, il s'agit de bridage thermique. L'appareil chauffe, alors Android et le fabricant réduisent ses performances avant que la température ne devienne un problème de sécurité.

## Ce que signifie le bridage thermique

C'est un ralentissement contrôlé. Le téléphone réduit la vitesse du CPU ou du GPU, la luminosité de l'écran, la puissance de recharge, l'activité des radios ou d'autres fonctions gourmandes en énergie afin de faire baisser la température.

Ce comportement n'est pas un bug en soi. Le téléphone choisit un niveau de performances inférieur pour que la batterie, l'écran, le modem et le SoC restent dans les limites de sécurité fixées par le fabricant.

Vous en voyez les effets sous forme de pertes d'images, d'applications plus lentes à s'ouvrir, de luminosité réduite, de limitations de l'appareil photo, de recharge ralentie ou d'un jeu d'abord fluide qui finit par saccader. Android ne demande pas votre autorisation. Il agit directement.

## Les niveaux thermiques d'Android

Android propose des API publiques d'état thermique depuis Android 10. Sur les appareils compatibles, les applications peuvent lire des niveaux de gravité simplifiés via `PowerManager` :

- **Aucun :** aucun bridage thermique en cours.
- **Léger :** bridage léger, avec peu d'effet sur l'utilisation normale.
- **Modéré :** bridage perceptible, mais l'appareil reste généralement utilisable.
- **Sévère :** bridage important qui affecte clairement les performances.
- **Critique :** la plateforme a déjà fortement réduit la puissance.
- **Urgence :** certains composants essentiels peuvent commencer à s'arrêter à cause des conditions thermiques.
- **Arrêt :** l'appareil doit s'éteindre immédiatement.

Ces niveaux sont standardisés. Les températures qui les déclenchent ne le sont pas. Un Pixel, un Galaxy S Ultra, un téléphone gaming Xiaomi et un Motorola d'entrée de gamme peuvent associer la chaleur à ces niveaux de manière différente, car leur refroidissement, leur batterie, leur châssis, leur écran et leurs marges de sécurité ne sont pas les mêmes.

C'est pour cette raison que les conseils fondés sur une température exacte deviennent vite approximatifs. Un téléphone peut déclencher un bridage à une température de batterie qu'un autre tolère pendant la recharge.

## La marge thermique donne un meilleur avertissement précoce

L'état thermique indique le niveau actuel. La marge thermique montre à quel point la charge de travail se rapproche d'un bridage sévère.

Dans ses recommandations sur les performances des jeux, Android décrit généralement la marge thermique sur une échelle de 0,0-1,0. La valeur 1,0 correspond au niveau `THERMAL_STATUS_SEVERE`. Certaines lectures peuvent toutefois dépasser 1,0, ce qui indique que l'appareil peut déjà se trouver au niveau sévère ou au-delà. Un jeu peut utiliser ce signal pour réduire la fréquence d'images ou la qualité visuelle avant que le joueur ne ressente le ralentissement.

Il y a une limite : la prise en charge varie selon l'appareil. Certains téléphones fournissent peu de données, d'autres renvoient `NaN` si l'API est interrogée trop souvent, et la correspondance entre marge et état thermique dépend de la conception de chaque modèle. Un bon outil de diagnostic doit traiter cette marge comme un signal, pas comme un thermomètre universel.

runcheck utilise les signaux thermiques publics d'Android lorsque l'appareil les expose. C'est important, car une application ordinaire ne devrait pas s'appuyer sur des fichiers de température sysfs privés pour afficher un état thermique à l'utilisateur.

## Ce qui déclenche le bridage

Les longues sessions de jeu sont le cas le plus évident. Un jeu 3D peut solliciter en même temps le CPU, le GPU, l'écran, les haut-parleurs, le réseau et les retours haptiques.

L'appareil photo est une autre source fréquente. L'enregistrement en 4K ou 8K, le traitement HDR, les longues vidéos et la lumière directe du soleil peuvent faire chauffer rapidement un téléphone. L'application photo peut réduire la qualité ou interrompre l'enregistrement si l'appareil devient trop chaud.

La navigation est plus progressive, donc plus trompeuse. L'écran reste allumé, le GPS fonctionne, le modem télécharge les données cartographiques et le téléphone peut être fixé sur un support déjà chaud. Ajoutez le soleil à travers le pare-brise et le bridage arrive plus vite.

Utiliser le téléphone pendant la recharge est une erreur facile à commettre. La recharge rapide produit déjà de la chaleur. Ajoutez un jeu, un appel vidéo, un point d'accès Wi-Fi ou un enregistrement vidéo, et l'appareil dispose de moins de marge pour refroidir.

Un signal faible peut aussi solliciter davantage le modem. Un téléphone qui lutte pour maintenir une connexion 5G dans une zone mal couverte peut chauffer même lorsque l'écran est éteint.

Les mises à jour système majeures peuvent également provoquer une chaleur temporaire. Android 17 a d'abord été déployé sur la plupart des Pixel compatibles. Les autres téléphones Android éligibles reçoivent ensuite les versions adaptées par leur fabricant. Après une mise à jour majeure, l'optimisation des applications et la synchronisation en arrière-plan peuvent rendre le téléphone chaud pendant un jour ou deux.

## Bridage thermique et gestion des performances de la batterie

Le bridage thermique est temporaire. Arrêtez la tâche exigeante, laissez le téléphone refroidir et les performances reviennent.

La gestion des performances liée à la batterie est différente. Avec l'âge, la résistance interne de la batterie augmente et sa capacité à fournir une puissance de pointe diminue. Certains téléphones réduisent la tension maximale, la vitesse de recharge ou d'autres paramètres afin de stabiliser une batterie vieillissante. Google documente par exemple l'Assistant d'état de la batterie sur les Pixel 6a et modèles ultérieurs, avec des ajustements progressifs de la tension à partir de 200 cycles de charge sur les modèles concernés.

Ce n'est pas la même chose qu'un jeu qui ralentit après 20 minutes. Dans un cas, la chaleur apparaît sous charge. Dans l'autre, le système gère le vieillissement de la batterie.

La solution change elle aussi. La chaleur demande un meilleur refroidissement et une charge de travail plus faible. Une batterie dégradée peut nécessiter un remplacement ou des habitudes de recharge plus prudentes.

## Comment reconnaître le bridage

Le signe le plus évident est une baisse des performances au cours d'une même session. Un jeu démarre à 60 fps, puis ralentit. L'appareil photo enregistre normalement, avant d'afficher un avertissement de température. L'écran s'assombrit sans que vous touchiez au réglage de luminosité. La recharge se met en pause ou devient nettement plus lente.

L'emplacement de la chaleur donne aussi un indice. Une zone chaude près des appareils photo correspond souvent au SoC. Une chaleur au centre de la face arrière évoque davantage la batterie ou la bobine de recharge sans fil. Une chaleur concentrée autour du port USB-C peut indiquer un problème de câble, de chargeur ou de circuit de recharge.

Les applications capables de lire l'état thermique d'Android rendent la situation moins vague. Passer d'Aucun à Léger puis Modéré pendant une partie est attendu. Atteindre les niveaux Sévère, Critique ou Arrêt à répétition pendant une utilisation normale ne l'est pas.

## Comment réduire le bridage

Réduisez la charge de travail avant que le téléphone ne soit obligé de le faire à votre place.

Dans les jeux, baissez d'abord la fréquence d'images. C'est souvent le réglage le plus efficace. Réduisez ensuite la résolution, les ombres, les effets et la qualité des textures. Un réglage moyen avec une fréquence stable est généralement plus agréable qu'un mode ultra qui se met à ralentir au bout de dix minutes.

Retirez la coque pendant les usages intensifs. La face arrière et le châssis participent au refroidissement.

Utilisez le Wi-Fi plutôt que les données mobiles lorsque la couverture est mauvaise. Un réseau cellulaire faible peut transformer une session ordinaire en source de chaleur.

Évitez la lumière directe du soleil. Un téléphone peut subir un bridage sur un support de voiture ensoleillé même si la tâche n'est pas particulièrement exigeante.

N'utilisez pas la recharge rapide pendant une activité exigeante. Débranchez le téléphone ou choisissez un chargeur moins puissant si vous devez continuer à jouer.

Gardez les applications et le système à jour. Les fabricants ajustent le comportement thermique au fil du temps, et une mauvaise mise à jour d'application peut aussi provoquer de la chaleur jusqu'à l'arrivée d'un correctif.

## Quand le bridage révèle un problème plus sérieux

Un bridage pendant un jeu exigeant est normal. Un bridage pendant que vous écrivez un message, téléphone posé sur un bureau frais, ne l'est pas.

Si le téléphone chauffe au repos, vérifiez l'utilisation de la batterie, la puissance du signal, les applications installées récemment et le mode sans échec. S'il chauffe encore en mode sans échec, ou si la batterie gonfle, se décharge brutalement ou provoque des arrêts alors qu'il reste de la charge, considérez qu'il peut s'agir d'un problème matériel ou de batterie.

Une capacité restante inférieure à 80 % est un seuil courant de remplacement sur les téléphones qui affichent cette information. Sur les Pixel compatibles, l'état de la batterie devient « Réduite » sous 80 %. Samsung Members propose également un diagnostic de l'état de la batterie. Ces indications sont plus utiles que de tirer des conclusions à partir de la chaleur seule.

## Ce qu'il faut retenir

Le système de protection thermique de votre téléphone n'est pas votre ennemi. Vous pouvez limiter son intervention en réduisant la charge de travail, en améliorant le refroidissement, en évitant les environnements chauds et en ne combinant pas recharge rapide et utilisation intensive. En revanche, n'ignorez pas un bridage qui apparaît pendant une tâche légère. Le problème peut alors venir d'une application, d'un signal faible, d'un chargeur ou d'une batterie usée.
