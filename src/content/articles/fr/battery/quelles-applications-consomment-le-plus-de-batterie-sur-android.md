---
title: "Quelles applications consomment le plus de batterie sur Android"
description: "La plupart des listes d'« applications qui vident la batterie » sont beaucoup trop affirmatives. Votre téléphone se moque de savoir quelle application a terminé en tête d'un classement réalisé sur l'appareil de quelqu'un d'autre. Ce qui compte, c'est ce que vous avez installé, les autorisations accordées, la fréquence d'utilisation et le fait que l'application continue ou non à travailler lorsque l'écran s'éteint."
listSummary: "La plupart des listes d'« applications qui vident la batterie » sont beaucoup trop affirmatives."
hub: "battery"
sourceNumber: 24
order: 14
subgroup: "Drain"
tags: ["batterie","consommation","depannage","android","performances"]
locale: "fr"
draft: false
---
Cela dit, les mêmes catégories reviennent souvent.

## Les types d'applications qui arrivent généralement en tête

Les applications vidéo sont les plus évidentes. YouTube, Netflix, TikTok, Instagram Reels et les services similaires maintiennent l'écran allumé, décodent la vidéo et téléchargent continuellement des données. Ils fonctionnent aussi souvent avec une forte luminosité, car les vidéos sont regardées dans une pièce claire ou à l'extérieur. Si une application vidéo figure en haut de la liste après deux heures de visionnage, ce n'est pas un bug. C'est de la physique.

Les applications de navigation viennent juste après. Google Maps, Waze, les applications de livraison, de VTC et de suivi sportif combinent GPS, données mobiles, écran allumé et parfois Bluetooth. 1 heure de guidage détaillé peut retirer une part visible de la batterie, surtout en 5G ou avec un signal faible.

Les jeux ne font pas dans la subtilité. Un jeu 3D sollicite simultanément le GPU, le CPU, l'écran, le son, la saisie tactile et le réseau. Le point positif, c'est que les jeux consomment généralement pendant que vous jouez, pas discrètement à 3 heures du matin. Si un jeu présente une activité en arrière-plan, limitez-la.

Les applications sociales et de messagerie sont plus difficiles à juger. Facebook, Instagram, Snapchat, TikTok, WhatsApp, Telegram, Discord, X, Threads, Reddit et les applications d'actualités veulent tous récupérer du contenu récent et envoyer des notifications. Certaines se comportent bien. D'autres non. Deux personnes peuvent installer la même application et obtenir des résultats très différents, parce que l'une a activé la localisation, les notifications, la lecture automatique, la synchronisation des contacts et l'actualisation en arrière-plan, tandis que l'autre ne l'a pas fait.

## L'activité en arrière-plan compte plus que le nom de l'application

Si l'écran de batterie indique qu'une application a utilisé 8 % pendant une heure de vidéo, l'information est assez banale. S'il indique 8 % d'utilisation en arrière-plan alors que le téléphone est resté dans votre poche, vous tenez quelque chose d'utile.

Commencez par chercher cette différence. Sur Pixel, ouvrez **Paramètres > Batterie > Utilisation de la batterie**, affichez l'utilisation par application, puis sélectionnez l'application. Sur Samsung, ouvrez **Paramètres > Maintenance de l'appareil > Batterie > Afficher les détails**. Les mots exacts varient selon le modèle, mais vous cherchez le temps au premier plan, le temps en arrière-plan et l'autorisation éventuelle de continuer à fonctionner.

Règle pratique : si une application non essentielle consomme plus de quelques points en arrière-plan sur une journée, elle doit avoir une bonne raison. Une application de messagerie, de musique, de navigation, de santé ou de sécurité peut en avoir une. Une application de shopping, beaucoup moins.

Les mécanismes les plus courants sont simples : notifications push, synchronisation de contenu, vérifications de position, wake locks, trafic réseau en arrière-plan et SDK d'analyse. Les wake locks méritent d'être nommés parce que Google les traite désormais comme un indicateur de qualité sur Google Play. Un partial wake lock maintient le CPU éveillé alors que l'écran est éteint. Utilisé avec mesure, c'est normal. Conservé trop longtemps, c'est du gaspillage.

## Google Play dispose désormais d'un signal de qualité lié à la batterie

C'est le changement majeur par rapport aux anciennes versions de cet article. Google a fait de l'indicateur **Excessive partial wake locks** un critère central d'Android vitals. Depuis le 1er mars 2026, les applications qui dépassent le seuil peuvent perdre de la visibilité dans les surfaces de découverte de Google Play et afficher un avertissement sur leur fiche.

Le seuil est précis. Pour une application mobile, Android vitals considère l'utilisation de partial wake locks non exemptés comme excessive lorsque leur durée cumulée atteint au moins deux heures sur une période de 24 heures et que ce comportement touche plus de 5 % des sessions de l'application sur 28 jours.

Cela ne signifie pas que Google Play vous révèle chaque coût énergétique avant l'installation. Un jeu n'est pas signalé simplement parce qu'il consomme beaucoup pendant que vous jouez. Le système ne juge pas non plus le fait que vous passiez personnellement cinq heures sur TikTok. Il vise le comportement qui garde le CPU actif en arrière-plan alors que l'écran est éteint.

C'est malgré tout utile. Un utilisateur ordinaire peut désormais voir un avertissement avant d'installer une application qui se comporte mal. C'est préférable à découvrir le problème après trois nuits de décharge.

## Ce qu'il faut modifier avant de désinstaller

La désinstallation est la solution la plus nette, mais peu de personnes veulent supprimer leur principale application sociale, vidéo ou de messagerie. Commencez donc par les réglages qui réduisent le travail silencieux.

Désactivez la lecture automatique lorsque l'application le permet. Instagram, Facebook, X, Reddit, YouTube et TikTok peuvent consommer de la batterie et des données en préparant des vidéos que vous ne regarderez peut-être jamais.

Limitez la localisation. Ouvrez les autorisations de position et examinez les applications autorisées en permanence. Une application météo peut généralement se contenter de la position pendant son utilisation. Une application de navigation en a besoin pendant le trajet. Un réseau social a rarement besoin d'un accès permanent.

Réduisez l'utilisation de la batterie en arrière-plan. Sur un Pixel ou une interface proche d'Android standard, ouvrez les réglages de l'application puis son utilisation de la batterie, et réduisez l'accès en arrière-plan pour les applications qui n'ont pas besoin de mises à jour immédiates. Sur Samsung, ouvrez **Paramètres > Maintenance de l'appareil > Batterie > Limites utilisation arrière-plan**, puis ajoutez les applications rarement utilisées aux applications en veille ou en veille profonde.

Réduisez les notifications. Chaque notification peut réveiller le téléphone, allumer l'écran, déclencher une vibration et récupérer du contenu frais. Soyez strict avec les applications qui envoient des promotions, des recommandations ou des messages du type « ceci pourrait vous intéresser ».

Mettez les applications à jour. Le conseil est ennuyeux, mais il compte après les mises à jour d'Android, y compris le premier déploiement d'Android 17 sur les Pixel compatibles. Les développeurs corrigent des bugs de batterie, de wake locks, de synchronisation et de compatibilité. Samsung et Google recommandent tous deux de mettre à jour le système et les applications lors d'un diagnostic de décharge rapide.

## Le navigateur n'est pas toujours préférable à l'application

Un conseil courant consiste à utiliser la version web au lieu de l'application. C'est parfois judicieux, car un site ne peut pas exécuter exactement le même type de service Android persistant qu'une application installée. Si Facebook ou X consomme surtout parce que l'application native réveille sans cesse le téléphone, le site mobile peut aider.

N'en faites pas une règle générale. Des études contrôlées comparant des applications Android natives à leurs équivalents web ont montré que, pour certains services, l'application native peut consommer moins d'énergie pendant l'utilisation active. Un onglet de navigateur n'est pas magique. Il doit toujours afficher de la vidéo, exécuter du JavaScript, charger des publicités, des outils de suivi et des images.

Le choix le plus pratique est simple : utilisez le navigateur pour les services consultés occasionnellement et dont vous ne voulez pas les notifications. Gardez l'application native pour les services utilisés intensivement, surtout si la version web est lente ou pénible. Si l'application commence ensuite à apparaître dans les consommations nocturnes, limitez son activité en arrière-plan.

## Quand une application de diagnostic devient utile

L'écran de batterie intégré à Android doit rester votre premier arrêt. Il est déjà présent et reçoit ses données directement du système d'exploitation.

Un outil comme runcheck devient utile lorsque le chiffre de batterie n'explique pas tout. Si la décharge augmente en même temps que la température, un signal faible, un réseau lent ou une forte pression sur le stockage, la solution ne sera pas la même que si vous accusez simplement Instagram. Le contexte compte.

AccuBattery et des outils similaires peuvent aussi estimer la capacité au fil du temps, mais considérez leurs chiffres comme des estimations tant que le téléphone lui-même n'affiche pas l'état de la batterie.

## Une meilleure méthode pour trouver vos applications les plus gourmandes

Faites ce test pendant deux journées normales :

1. Rechargez et utilisez le téléphone comme d'habitude.
2. Le soir, ouvrez **Paramètres > Batterie > Utilisation de la batterie**.
3. Notez les cinq premières applications et précisez si elles ont consommé au premier plan ou en arrière-plan.
4. Limitez uniquement celles dont l'activité en arrière-plan n'a pas de sens.
5. Vérifiez de nouveau le lendemain.

Ne videz pas l'écran Récents toutes les heures. Android gère automatiquement la mémoire et la batterie, et fermer de force les applications peut gaspiller de l'énergie lorsqu'elles doivent se relancer. L'arrêt forcé sert à interrompre une application défaillante, pas à faire le ménage chaque jour.

Les applications qui consomment le plus sont généralement celles qui gardent l'écran, le réseau, le GPS, le CPU ou le GPU occupés. Celles qu'il faut corriger en priorité sont celles qui le font alors que vous ne les utilisez pas.
