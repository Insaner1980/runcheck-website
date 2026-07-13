---
title: "Comment tester la latence réseau sur Android"
description: "Vous participez à un appel vidéo. Tout le monde vous entend, l'image semble correcte, et pourtant la conversation paraît décalée d'une demi-seconde. C'est la latence. Le débit descendant attire davantage l'attention, mais c'est la latence qui détermine si une connexion paraît réactive."
listSummary: "Vous participez à un appel vidéo."
hub: "network"
sourceNumber: 103
order: 14
tags: ["reseau","connectivite","android","depannage","guide"]
locale: "fr"
draft: false
---
La latence se mesure en millisecondes (ms). Plus elle est faible, mieux c'est. Trois valeurs comptent surtout : le ping, la gigue et la perte de paquets. Le ping correspond au temps nécessaire pour qu'une requête parte du téléphone, atteigne un serveur et revienne. La gigue mesure les variations de ce délai entre plusieurs requêtes. La perte de paquets indique la part des données qui n'arrive jamais à destination.

Une connexion à 100 Mbit/s avec 150 ms de ping peut sembler moins bonne qu'une connexion à 20 Mbit/s avec 15 ms de ping. Cela paraît illogique jusqu'au moment où vous jouez en ligne, passez un appel vidéo ou utilisez un bureau à distance. Le débit transporte les données. La latence commande le temps de réaction.

## Comment interpréter les résultats

Ces plages sont des repères pratiques, pas des lois physiques. Le serveur choisi, le réseau utilisé et même l'heure de la journée peuvent modifier le résultat.

Pour le ping :

- 0 à 20 ms : excellent. Les jeux compétitifs, les appels vidéo et le travail à distance paraissent immédiats.
- 20 à 50 ms : bon. Cela convient à presque tout, y compris aux jeux occasionnels et aux appels vocaux.
- 50 à 100 ms : exploitable. La navigation web et le streaming fonctionnent toujours, mais les jeux rapides commencent à sembler retardés.
- Plus de 100 ms : le décalage devient perceptible. Les appels peuvent comporter des silences gênants et les jeux en temps réel deviennent frustrants.

Pour la gigue, moins de 30 ms convient généralement. Entre 30 et 50 ms, les appels et la vidéo en direct peuvent commencer à saccader. Au-dessus de 50 ms, la connexion peut sembler instable même si le débit paraît élevé.

La perte de paquets pardonne moins. Au-delà de 1 à 2 %, elle peut provoquer des coupures audio, des images figées ou des déplacements par à-coups dans les jeux. Non, un forfait plus rapide ne corrige pas automatiquement la perte de paquets.

## Commencez par un test de débit

Le plus simple consiste à lancer un test de débit qui indique aussi la latence. Faites le même test deux fois : une fois en Wi-Fi, puis une fois avec les données mobiles. Si une seule connexion donne de mauvais résultats, vous avez déjà réduit le champ des causes possibles.

### Le test de Google et M-Lab

Recherchez « test de débit » dans Chrome sur le téléphone. Le test intégré de Google repose sur Measurement Lab, généralement appelé M-Lab. Son test NDT indique les débits montant et descendant ainsi que des mesures de latence.

runcheck utilise le protocole NDT7 de M-Lab pour son test de débit intégré. L'intérêt vient surtout du contexte conservé avec le résultat : type de connexion, puissance du signal, ping, gigue, débit montant et débit descendant. Vous n'avez donc pas à vous souvenir si le mauvais résultat provenait du Wi-Fi, de la LTE ou de la 5G.

### Speedtest by Ookla

Speedtest by Ookla reste une option familière pour un contrôle rapide. L'application mesure le ping, la gigue, le débit descendant et le débit montant, et permet de choisir un serveur proche. Pour établir une valeur de référence, sélectionnez un serveur situé près de vous. Pour diagnostiquer un jeu ou un service professionnel, testez plutôt un serveur proche du service concerné lorsque l'application vous laisse le choisir.

### Fast.com

Fast.com est le test de débit de Netflix. Il commence par le débit descendant, mais le bouton « Afficher plus d'informations » révèle le débit montant et la latence. Regardez surtout la latence en charge. La latence hors charge mesure la connexion lorsqu'elle est au repos. La latence en charge la mesure pendant un transfert, ce qui ressemble davantage à une situation où quelqu'un regarde une vidéo, synchronise des photos ou télécharge une mise à jour de jeu sur le même réseau.

## Utilisez un outil de ping pour un test plus long

Un test de débit ne donne qu'un instantané. Un ping lancé pendant quelques minutes montre si la latence reste stable.

PingTools Network Utilities peut exécuter des pings, des traceroutes, des recherches DNS et d'autres contrôles réseau dans une seule application. Pour un test simple, envoyez des pings vers une cible stable comme `1.1.1.1` ou `8.8.8.8`. Si vous dépannez un jeu ou un service professionnel précis, utilisez son nom d'hôte lorsqu'il en publie un.

Termux est pratique si vous êtes à l'aise avec un terminal. Installez-le depuis une source officielle du projet, puis ajoutez l'outil ping si nécessaire :

```text
pkg update
pkg install iputils
ping -c 20 1.1.1.1
```

Le résumé indique les valeurs minimale, moyenne et maximale, ainsi que la variation entre les réponses. C'est cette variation qu'il faut surveiller. Une connexion qui passe de 20 ms à 250 ms avant de redescendre sera moins agréable qu'une connexion stable à 60 ms.

## Testez la latence sous charge

La latence au repos peut être trompeuse. Un routeur peut afficher 12 ms lorsque le réseau est calme, puis grimper à 300 ms dès qu'un ordinateur commence à envoyer des photos.

Ce problème vient souvent du bufferbloat : l'équipement réseau laisse les files d'attente se remplir au lieu de gérer proprement le trafic. Il apparaît surtout pendant les envois de fichiers, les sauvegardes vidéo, la synchronisation dans le cloud et les téléchargements volumineux.

Essayez ce test simple :

1. Mesurez la latence lorsque personne d'autre n'utilise le réseau.
2. Lancez un téléchargement ou un envoi volumineux sur un autre appareil.
3. Refaites exactement le même test de latence.

Si le ping augmente fortement sous charge, le téléphone n'est probablement pas le principal responsable. Le routeur, le modem ou la connexion de l'opérateur gère mal les files d'attente. Des réglages de QoS peuvent aider, mais le SQM (Smart Queue Management) offre une meilleure correction lorsque le routeur le prend en charge.

Le Waveform Bufferbloat Test vaut aussi le détour dans le navigateur du téléphone. Il compare la latence au repos à celle mesurée pendant les transferts descendants et montants. Une note A ou B est généralement satisfaisante. Une note D ou F annonce des difficultés pour les applications en temps réel lorsque le réseau est occupé.

## Comparez le Wi-Fi et les données mobiles

Tester les deux réseaux reste le moyen le plus rapide d'éviter les suppositions.

La latence en Wi-Fi dépend de la distance au routeur, des interférences, de la qualité du routeur, de l'encombrement du canal et de la bande de fréquences. La bande 5 GHz offre souvent moins d'interférences et une meilleure latence que 2,4 GHz à courte distance, mais sa portée est plus faible. Le Wi-Fi 6 et le Wi-Fi 6E peuvent aider sur un réseau chargé, à condition que le téléphone et le routeur les prennent tous les deux en charge.

La latence mobile dépend de la qualité du signal, de la charge de l'antenne, du routage de l'opérateur et du type de connexion, LTE, 5G sub-6 ou 5G mmWave. Dans la pratique, les valeurs se situent souvent dans ces ordres de grandeur :

- 4G LTE : environ 30 à 60 ms, davantage lorsque l'antenne est chargée.
- 5G sub-6 : environ 15 à 40 ms.
- 5G mmWave : parfois moins, mais la couverture est limitée et facilement bloquée.
- 3G : trop lente et irrégulière pour les usages modernes en temps réel.

Ce ne sont pas des garanties. Une bonne connexion LTE peut battre une 5G saturée, et un signal Wi-Fi faible après deux murs peut perdre largement face aux données mobiles.

Sur Android, vérifiez le type de réseau mobile actif dans la barre d'état ou dans les informations d'état de la SIM. Le chemin exact varie selon la marque. Après une mise à jour majeure, notamment Android 17 sur les Pixel compatibles, revérifiez ce point avant d'accuser le matériel, car les paramètres opérateur et le comportement du réseau peuvent évoluer avec le logiciel.

## Ce qui fait augmenter la latence

La distance jusqu'au serveur est l'explication la moins passionnante, mais elle compte. Un serveur situé dans votre ville peut répondre en moins de 10 ms. Un serveur de l'autre côté d'un océan peut dépasser 120 ms même avec une excellente connexion.

La congestion vient ensuite. Trop d'appareils sur le même Wi-Fi, un canal saturé dans un immeuble ou une antenne mobile très sollicitée ajoutent tous du délai. Les tests du soir sont souvent moins bons que ceux du matin.

Les VPN ajoutent une étape. Un serveur VPN proche peut ne coûter que 10 à 20 ms. Un serveur lointain peut ajouter bien davantage. Déconnectez le VPN et recommencez avant de conclure que le téléphone est lent.

Le trafic en arrière-plan joue aussi. Sauvegarde dans le cloud, mises à jour d'applications, synchronisation des photos et streaming peuvent faire grimper la latence, surtout sur les connexions domestiques dont le débit montant est limité.

## Que faire après le test ?

Si la latence est mauvaise uniquement en Wi-Fi, redémarrez le routeur, rapprochez-vous, passez sur 5 GHz et essayez un canal moins encombré. Si elle se dégrade seulement lorsque le réseau est occupé, examinez les options QoS ou SQM du routeur.

Si elle est mauvaise uniquement avec les données mobiles, comparez la puissance du signal à plusieurs endroits. Activez puis désactivez le mode Avion pour forcer une nouvelle connexion à l'antenne. Si le problème a commencé juste après une mise à jour système, vérifiez les mises à jour système et les composants de l'opérateur disponibles.

Si la latence est mauvaise partout, testez un autre téléphone sur les mêmes réseaux. Lorsque deux téléphones affichent le même délai, le réseau est en cause. Si un seul est touché, examinez alors le VPN, les applications en arrière-plan, la surchauffe ou une éventuelle panne radio.

## FAQ

### Le ping et la latence désignent-ils la même chose ?

Techniquement, la latence correspond au délai dans un seul sens, tandis que le ping mesure un aller-retour. Dans le dépannage courant d'un téléphone, les deux mots sont employés presque de la même manière, car les applications affichent un ping aller-retour.

### Comment réduire le ping sur Android ?

Vous ne pouvez pas raccourcir la distance jusqu'au serveur, mais vous pouvez supprimer les délais évitables. Déconnectez un VPN lent, fermez les applications qui consomment beaucoup de bande passante, utilisez le Wi-Fi 5 GHz près du routeur et corrigez le bufferbloat au niveau du routeur si la latence explose sous charge.

### Pourquoi le débit est-il élevé alors que les jeux ralentissent ?

Parce que le débit descendant et la latence sont deux problèmes différents. Une connexion rapide peut tout de même souffrir d'une mauvaise gigue, de pertes de paquets ou d'une forte latence en charge. Les jeux dépendent davantage de la régularité des échanges que du nombre brut de Mbit/s.

### À quelle fréquence faut-il tester la latence ?

Testez à plusieurs heures de la journée pendant quelques jours. Un résultat n'est qu'un instantané. Trois ou quatre mesures en Wi-Fi et avec les données mobiles montrent déjà si le problème est régulier.
