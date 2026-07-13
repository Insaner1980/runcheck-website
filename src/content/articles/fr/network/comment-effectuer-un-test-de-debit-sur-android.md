---
title: "Comment effectuer un test de débit sur Android"
description: "Vous appuyez sur Lancer, regardez l'aiguille bondir et obtenez un chiffre qui semble officiel. C'est utile, oui. Ce n'est pas une conclusion définitive."
listSummary: "Vous appuyez sur Lancer, regardez l'aiguille bondir et obtenez un chiffre qui semble officiel."
hub: "network"
sourceNumber: 92
order: 3
tags: ["reseau","connectivite","android","depannage","guide"]
locale: "fr"
draft: false
---
Le test indique ce qui s'est passé à cet instant, avec ce serveur et dans ces conditions réseau. C'est une photographie, pas un diagnostic complet. Cela reste néanmoins le meilleur premier chiffre à obtenir lorsque votre téléphone paraît lent.

## Ce que mesure le test

Un test classique indique le débit descendant, le débit montant et la latence.

Le débit descendant correspond à la vitesse à laquelle les données arrivent sur votre téléphone. Il influence la navigation, le streaming, le téléchargement d'applications, l'affichage des photos dans le cloud et la plupart des usages quotidiens.

Le débit montant correspond à la vitesse à laquelle les données quittent votre téléphone. Il compte pour l'envoi de vidéos, la sauvegarde des photos, le transfert de fichiers, les appels vidéo et le partage d'écran.

La latence, souvent appelée ping, est le temps d'aller-retour mesuré en millisecondes. Une faible latence rend la connexion réactive. Une latence élevée donne une impression de retard dans les jeux, les appels, le travail à distance et même après une simple pression à l'écran, alors que le débit descendant peut sembler bon.

Certaines applications affichent aussi la gigue. Elle mesure la variation de la latence d'un instant à l'autre. Un ping de 30 ms avec peu de gigue paraît stable. Le même ping qui varie fortement peut encore provoquer des appels hachés.

## Utilisez le test intégré à Google pour une vérification rapide

Ouvrez un navigateur, recherchez **test de débit** sur Google, puis appuyez sur **Lancer le test de débit** lorsque la carte s'affiche. Le test repose sur Measurement Lab, ou M-Lab, et indique les principales mesures sans installer d'application.

C'est un bon contrôle rapide. Il fournit peu d'historique et n'est pas le meilleur outil pour comparer plusieurs réseaux sur la durée. Mais lorsque quelqu'un dit que « la connexion est lente », il permet de voir rapidement si le téléphone reçoit 2 Mbit/s ou 200 Mbit/s.

## Utilisez une application si vous avez besoin d'un historique

Speedtest by Ookla est l'option la plus connue. L'application mesure le débit descendant, le débit montant, la latence et généralement la gigue, permet de choisir un serveur et conserve un historique. Elle convient pour comparer le Wi-Fi, la LTE, la 5G et différents lieux.

FAST de Netflix est plus simple. Il met d'abord l'accent sur le débit descendant, car il a été conçu autour des performances de streaming. Appuyez sur **Afficher plus d'informations** pour voir le débit montant et la latence.

Meteor d'OpenSignal s'adresse bien aux lecteurs peu techniques, car l'application explique si la connexion mesurée convient à des usages courants comme le streaming, les jeux, la navigation ou les appels vidéo.

runcheck utilise M-Lab NDT7 pour son test intégré et enregistre les résultats avec le type de connexion et le contexte du signal. Ce contexte compte, car le débit seul peut induire en erreur. Un mauvais résultat avec un signal faible ne signifie pas la même chose qu'un mauvais résultat avec un signal fort et une latence élevée.

## Surveillez la consommation de données mobiles

Chaque test transfère de vraies données. En Wi-Fi, cela a rarement de l'importance. Sur le réseau mobile, oui.

Un petit test sur le Web peut ne consommer que quelques dizaines de Mo. Une application de test sur une connexion LTE ou 5G rapide peut utiliser beaucoup plus de données, car elle essaie de mesurer le volume maximal transférable pendant la durée du test. Plusieurs essais successifs peuvent consommer des centaines de Mo.

Testez donc les données mobiles volontairement. Désactivez le Wi-Fi, lancez un ou deux tests, conservez les résultats, puis arrêtez.

## Comment obtenir un résultat plus propre

Restez immobile. Pendant un test mobile, vos déplacements peuvent pousser le téléphone à changer d'antenne, de bande ou de conditions radio.

Fermez d'abord les gros consommateurs évidents. Les sauvegardes dans le cloud, les mises à jour, les flux vidéo et les téléchargements se disputent la bande passante avec le test.

Testez séparément le Wi-Fi et les données mobiles. Si le Wi-Fi est actif, vous testez le Wi-Fi. Pour tester le réseau mobile, désactivez-le.

Ne lancez trois tests que si vous avez besoin d'une moyenne plus représentative. Si un résultat est très éloigné des deux autres, écartez-le. Il a probablement coïncidé avec un bref pic de saturation, un mauvais choix de serveur ou un transfert en arrière-plan.

Pour un diagnostic normal, utilisez un serveur proche. Un serveur lointain ajoute de la latence et peut réduire le débit pour des raisons sans rapport avec votre connexion locale. Tester un serveur distant n'est utile que si vous souhaitez précisément mesurer l'accès à des services situés dans cette région.

## Ce que les chiffres signifient en pratique

Pour la navigation et la messagerie, même 5 Mbit/s peuvent suffire si la latence est faible. Pour une vidéo HD, 5 à 10 Mbit/s sont généralement suffisants. Pour du streaming en 4K, visez au moins 25 Mbit/s par flux.

Les appels vidéo dépendent davantage du débit montant et de la latence qu'on ne l'imagine. Un débit descendant de 200 Mbit/s ne sauvera pas un appel si le débit montant tombe à 0,5 Mbit/s ou si la gigue est élevée.

Pour les jeux, la latence et la gigue comptent plus que le débit descendant une fois le jeu installé. Une connexion stable à 40 Mbit/s peut être plus agréable qu'une connexion à 400 Mbit/s accompagnée de pics de latence aléatoires.

Pour les sauvegardes dans le cloud, le débit montant détermine la durée de l'opération. Il est souvent bien inférieur au débit descendant sur les connexions fixes et mobiles. Ne supposez donc pas qu'un bon débit descendant garantit des sauvegardes rapides.

## Comparez avec la bonne promesse

Pour le Wi-Fi domestique, comparez le résultat avec votre abonnement Internet tout en tenant compte des pertes liées au Wi-Fi. Si votre forfait annonce 100 Mbit/s et que votre téléphone atteint 80 ou 90 Mbit/s près du routeur, il n'y a pas de problème. S'il n'atteint que 25 Mbit/s à côté du routeur, examinez le routeur, les canaux encombrés, le fournisseur d'accès ou les autres appareils qui utilisent la bande passante.

Sur le réseau mobile, n'attendez pas systématiquement le chiffre spectaculaire affiché dans les publicités 5G. Le débit réel dépend de l'opérateur, de la bande, de la charge de l'antenne, de la priorité du forfait, du signal à l'intérieur des bâtiments et du modem du téléphone. Faites des essais à plusieurs endroits avant d'accuser l'appareil.

Comparez aussi le résultat avec votre usage. Si Netflix fonctionne, que les appels sont nets et que les applications se téléchargent normalement, chercher un chiffre plus flatteur peut être une perte de temps.

## Ne conservez les résultats que s'ils racontent quelque chose

Un seul résultat suffit pour confirmer qu'un problème existe. Quelques mesures réparties dans le temps sont plus utiles pour repérer une tendance.

Lancez un test lorsque la connexion semble mauvaise, puis un autre lorsqu'elle paraît normale. Notez le réseau, le lieu, l'heure, la puissance du signal et la présence éventuelle d'un VPN.

C'est là que l'historique devient utile. Si le Wi-Fi ralentit tous les soirs, pensez à la charge du foyer ou à la saturation du fournisseur d'accès. Si le réseau mobile ne ralentit que dans un bâtiment, pensez à la couverture. Si tous les réseaux sont lents sur un seul téléphone, cherchez du côté du téléphone.
