---
title: "Comprendre les diagnostics de batterie des Google Pixel"
description: "Comment savoir si la batterie d'un Pixel est réellement usée, plutôt que malmenée par une application défaillante ou une journée très chaude ? Sur les Pixel récents, Google fournit enfin des outils corrects. Sur les anciens modèles, la réponse reste plus compliquée qu'elle ne devrait l'être."
listSummary: "batterie, etat et diagnostic"
hub: "brands"
sourceNumber: 154
order: 2
tags: ["batterie","etat","diagnostic","android","guide"]
locale: "fr"
draft: false
---
Le moment compte aussi. Android 17 est déjà disponible sur la plupart des Pixel compatibles, tandis que les autres marques Android recevront leurs propres mises à jour fondées sur Android 17 selon leur calendrier. Cela ne signifie pas que tous les Pixel obtiennent soudainement le même écran de batterie. Les diagnostics de Google restent répartis selon le modèle.

## État et capacité de la batterie

L'écran principal se trouve ici :

Paramètres > Batterie > État de la batterie

Sur les téléphones compatibles, il indique si l'état de la batterie est Normale, Réduite ou Indisponible. Il peut également afficher la Capacité de la batterie, c'est-à-dire une estimation en pourcentage de la charge qu'elle peut encore stocker par rapport à son état neuf.

La limite importante est la suivante : Google précise que l'État de la batterie n'est disponible que sur le Pixel 8a et les modèles plus récents. Les Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8 et Pixel 8 Pro n'affichent pas cet état, même si certains continuent de recevoir de nouvelles versions d'Android.

Réduite signifie que la capacité restante estimée est inférieure à 80 %. À ce stade, Google recommande d'envisager un remplacement. Ce seuil n'est pas arbitraire. En dessous de 80 %, la baisse d'autonomie devient assez forte pour être perceptible au quotidien, surtout par temps froid ou lors de l'utilisation de l'appareil photo, des jeux, de la navigation et du partage de connexion.

Considérez le pourcentage comme une estimation, pas comme une mesure de laboratoire. Google choisit lui-même ses mots avec prudence, car le téléphone interprète les données de sa jauge et les intègre à un modèle. Si votre appareil indique 92 %, inutile de vous demander si la valeur réelle est 91,4 % ou 93 %. La tendance compte davantage.

## Nombre de cycles

Le nombre de cycles ne correspond pas au nombre de fois où vous avez branché le chargeur. Une décharge et une recharge complètes de 100 % représentent un cycle. Deux journées pendant lesquelles vous utilisez 50 % puis rechargez le téléphone représentent elles aussi un cycle au total.

Sur le Pixel 8a et les modèles plus récents, Google place cette information ici :

Paramètres > À propos du téléphone > Informations sur la batterie

La même page peut également afficher la date de fabrication de la batterie et sa date de première utilisation.

L'ancienne version de cet article indiquait que le nombre de cycles était disponible à partir du Pixel 6a. La page d'assistance actuelle de Google ne dit pas cela. Elle donne le chemin correspondant au Pixel 8a et aux modèles plus récents. L'article a donc été corrigé.

Les indications de remplacement de Google sont désormais séparées selon les générations :

- Les Pixel 3 à Pixel 8 Pro et le Pixel Fold devraient conserver jusqu'à 80 % de leur capacité pendant environ 800 cycles.
- Le Pixel 8a et les modèles plus récents devraient conserver jusqu'à 80 % de leur capacité pendant environ 1 000 cycles.

Un Pixel 9 Pro à 650 cycles n'est donc pas automatiquement en difficulté. Un Pixel 7 Pro à 850 cycles dont l'autonomie a fortement diminué constitue un meilleur candidat au remplacement.

## Assistant d'état de la batterie

L'Assistant d'état de la batterie est la fonction de Google destinée à gérer l'usure à long terme. Elle fonctionne sur le Pixel 6a et les modèles plus récents, à l'exception de la Pixel Tablet.

La fonction ajuste progressivement la tension maximale de la batterie. Elle commence à 200 cycles de charge et poursuit ces ajustements par étapes jusqu'à 1 000 cycles. Son objectif est de ralentir le vieillissement chimique et de stabiliser davantage la batterie pendant la durée de vie du téléphone.

Il y a un compromis. À mesure que le téléphone vieillit, vous pouvez observer une autonomie légèrement plus courte ou une recharge plus lente, car le logiciel réduit volontairement les contraintes imposées à la batterie. Ce n'est pas un bug. C'est le fonctionnement prévu.

Une distinction importante existe selon le modèle :

- Du Pixel 6a au Pixel 9 Pro Fold, vous pouvez activer ou désactiver l'Assistant d'état de la batterie.
- Sur le Pixel 9a et les modèles plus récents, il est activé par défaut et Google indique qu'il ne peut pas être désactivé.

Ce second point a agacé certains utilisateurs, ce qui se comprend. La fonction se défend du point de vue de la longévité, mais Google devrait expliquer plus clairement dans l'interface ce qu'elle fait et pourquoi. Les gens remarquent qu'un téléphone tient moins longtemps après plusieurs mois, même si la raison technique est raisonnable.

## Optimisation de la recharge

Sur les versions compatibles, les réglages de recharge des Pixel se trouvent ici :

Paramètres > Batterie > État de la batterie > Optimisation de la recharge

Deux choix principaux sont proposés.

La Recharge adaptative apprend vos habitudes et essaie de terminer la recharge à 100 % peu avant le moment où vous débranchez le téléphone. Sur le Pixel 4, son fonctionnement dépend d'une recharge nocturne associée à une alarme adaptée. À partir du Pixel 4a, elle apprend plutôt de votre comportement de recharge. Google indique qu'il lui faut environ 14 jours pour connaître vos habitudes, alors ne la jugez pas après une seule nuit.

Limiter à 80 % bloque la recharge à 80 % la plupart du temps. Cette option est disponible sur le Pixel 6a et les modèles plus récents. Elle ménage la batterie, mais vous renoncez à 20 % de capacité quotidienne.

Un comportement peut sembler défectueux alors qu'il ne l'est pas. Même avec Limiter à 80 % activé, un Pixel doit effectuer une recharge complète tous les dix cycles afin de conserver une estimation précise de la capacité. Google recommande de le laisser branché au moins 30 minutes après qu'il a atteint 100 %, afin que le calibrage puisse se terminer.

Pour la plupart des gens, la Recharge adaptative est le meilleur choix par défaut. Utilisez la limite de 80 % si vous terminez habituellement la journée avec beaucoup de batterie, si vous travaillez près d'un chargeur ou si la longévité vous importe davantage que l'autonomie maximale au quotidien.

## Diagnostics de la batterie et État de l'appareil et assistance

Les Pixel disposent maintenant de deux niveaux de dépannage.

L'ancien chemin est :

Paramètres > Batterie > Diagnostics de la batterie

Google indique que les Diagnostics de la batterie sont disponibles sur le Pixel 6 et les modèles plus récents, y compris le Pixel Fold. L'outil contrôle les performances de la batterie et peut aider à déterminer si le problème concerne l'autonomie, le comportement de la recharge ou la nécessité d'un remplacement.

Le tableau de bord plus récent se trouve ici :

Paramètres > État de l'appareil et assistance

Selon Google, État de l'appareil et assistance est disponible sur le Pixel 6 et les modèles plus récents, y compris le Fold. Il regroupe l'état de l'appareil, l'état de la batterie, la température du téléphone, les diagnostics de recharge et de l'écran tactile, la garantie, l'assistance et les options de réparation. Sur le Pixel 9 et les modèles plus récents, il comprend aussi une assistance conversationnelle en anglais, en allemand et en japonais.

Cette organisation est plus claire que l'ancienne répartition entre des écrans de dépannage cachés et plusieurs rubriques des Paramètres. Elle ne donne toujours pas un pourcentage d'état aux anciens Pixel, mais elle constitue un meilleur point de départ lorsque le téléphone semble mal fonctionner.

## Diagnostics de température

Les Pixel chauffent plus souvent que beaucoup de personnes ne le souhaiteraient. Les modèles équipés d'une puce Tensor peuvent notamment monter en température pendant l'utilisation de l'appareil photo, de la 5G, de la navigation, de la restauration d'une sauvegarde, des jeux, du partage de connexion et d'Android Auto.

Sur le Pixel 6a et les modèles plus récents, vous pouvez vérifier l'état thermique actuel du téléphone ici :

Paramètres > Batterie > Diagnostics de la batterie > Le téléphone est très chaud

Google classe l'état dans les catégories Cold, Normal, Warm ou Elevated. Elevated ne signifie pas seulement que le téléphone paraît chaud dans votre main. Le système peut alors réduire la luminosité de l'écran, le débit réseau ou les performances, voire suspendre certaines fonctions pour refroidir l'appareil.

La chaleur accélère le vieillissement de la batterie. Si votre Pixel recharge régulièrement alors qu'il est chaud, reste sur un support de voiture en plein soleil ou combine tous les jours navigation et charge rapide, son état se dégradera plus vite.

## L'ancien code de test Android

Le code du composeur `*#*#4636#*#*` fonctionne encore sur de nombreux Pixel. Il ouvre un menu de test contenant des informations de base sur la batterie, notamment son état, son niveau, sa température, sa tension et sa technologie.

Le champ health de ce menu n'est pas le pourcentage d'état de la batterie. Good signifie que le téléphone n'a pas détecté de panne majeure. Une batterie peut afficher Good tout en ayant perdu une grande partie de sa capacité.

Utilisez ce code pour contrôler rapidement la température et la tension, pas pour prendre une décision définitive de remplacement.

## Programme relatif aux performances de la batterie du Pixel 6a

Le Pixel 6a mérite une section à part, car Google a lancé un programme officiel concernant les appareils touchés.

À partir du 8 juillet 2025, les Pixel 6a concernés ont reçu une mise à jour obligatoire vers Android 16 afin de réduire un risque potentiel de surchauffe de la batterie. Les fonctions de gestion ne s'activent que si l'appareil est concerné et si sa batterie a atteint 400 cycles de charge.

Si vous possédez un Pixel 6a et constatez une réduction de capacité ou de performances de recharge après cette mise à jour, ne concluez pas immédiatement à une usure normale. Consultez l'outil d'éligibilité de Google. Selon le pays et l'éligibilité, le programme proposait notamment un remplacement sans frais, un paiement ou un avoir Google Store, mais Google précise que ces options d'assistance ne sont plus disponibles après le 8 juillet 2026. Vos droits prévus par la législation applicable restent distincts de ce programme.

## Ce que runcheck peut apporter

Les Pixel communiquent généralement des données de courant plus propres que beaucoup d'autres appareils Android, ce qui donne un meilleur point de départ aux outils tiers. Toutes les valeurs ne sont toutefois pas garanties.

runcheck lit les données de batterie qu'Android rend accessibles et leur associe un niveau de confiance. C'est important, car un chiffre dépourvu de contexte peut vous induire en erreur. Un taux de décharge fondé sur des mesures de courant solides est utile. S'il repose sur des valeurs manquantes ou instables, il doit être considéré comme une estimation.

L'application suit également la température en parallèle des données de batterie, ce qui compte particulièrement sur les Pixel. Une batterie qui semble correcte sur le papier peut vieillir rapidement si le téléphone passe trop de temps à une température élevée.

## Ce qu'il faut retenir pour les anciens Pixel

L'erreur principale consiste à croire qu'Android 17 va ajouter tous les écrans de batterie à tous les Pixel encore compatibles. Ce n'est pas le cas. Android 17 est arrivé d'abord sur les Pixel pris en charge, mais la page d'état de la batterie reste limitée à certains modèles.

Avec un Pixel 7, vous n'obtenez pas de pourcentage dans les Paramètres. Avec un Pixel 8a ou un modèle plus récent, vous disposez des informations utiles : État de la batterie, Capacité de la batterie et nombre de cycles dans les chemins documentés par Google.

Le seuil de remplacement de 80 % est une bonne règle, mais ce n'est pas le seul indice. Un téléphone au-dessus de 80 % peut avoir une autonomie médiocre à cause de la chaleur, d'un signal faible, d'une application défaillante ou d'une mise à jour récente. Un téléphone sous les 80 % peut encore convenir à une utilisation légère. Utilisez ce chiffre comme un élément de preuve, pas comme un ordre.

Il en va de même pour la limite de recharge à 80 %. Si votre Pixel monte occasionnellement à 100 %, il effectue peut-être le calibrage prévu tous les dix cycles. Laissez-le branché environ 30 minutes après qu'il a atteint 100 % si vous souhaitez que ce calibrage se termine.
