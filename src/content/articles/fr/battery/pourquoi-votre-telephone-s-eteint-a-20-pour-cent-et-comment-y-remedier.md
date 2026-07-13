---
title: "Pourquoi votre téléphone s'éteint à 20 % et comment y remédier"
description: "La batterie affiche 22 %, vous ouvrez l'appareil photo et l'écran devient noir. Vous branchez ensuite le téléphone, qui indique soudain 18 % ou 24 %. Vous avez l'impression que le pourcentage vous ment."
listSummary: "La batterie affiche 22 %, vous ouvrez l'appareil photo et l'écran devient noir."
hub: "battery"
sourceNumber: 22
order: 12
subgroup: "Drain"
tags: ["batterie","calibrage","depannage","android","guide"]
locale: "fr"
draft: false
---
D'une certaine manière, c'est le cas. Le nombre affiché est une estimation, et une batterie vieillissante est plus difficile à évaluer correctement.

## La première chose à vérifier

Vérifiez l'état de la batterie avant de vous lancer dans des manipulations d'étalonnage.

Sur le Pixel 8a et les modèles ultérieurs, ouvrez Paramètres > Batterie > État de la batterie. Le Pixel indique Normale lorsque la capacité reste dans les limites normales et Réduite lorsqu'elle est inférieure à 80 %. Sur ces mêmes modèles, le nombre de cycles se trouve dans Paramètres > À propos du téléphone > Informations sur la batterie.

Sur Samsung, ouvrez Samsung Members > Assistance > Démarrer dans la section Diagnostics du téléphone, puis sélectionnez État de la batterie. Samsung peut afficher Normal, Faible ou Mauvais. Les noms et l'organisation des menus peuvent varier selon le modèle, la version du logiciel et celle de l'application, mais Samsung Members reste l'outil de diagnostic officiel.

Sur les autres téléphones Android, commencez par Paramètres > Batterie. S'il n'existe aucune page native consacrée à l'état de la batterie, utilisez une application de diagnostic comme AccuBattery et laissez-la recueillir des données pendant plusieurs sessions de recharge. Une seule mesure après une seule recharge ne suffit pas.

Une capacité inférieure à 80 % associée à un arrêt vers 20 % désigne directement la batterie comme principale suspecte.

## Pourquoi le pourcentage est faux

Android estime le niveau de batterie à partir de la tension, du courant, de la température et d'un modèle décrivant le comportement attendu de la cellule. Certains téléphones suivent aussi la quantité de courant qui entre et sort au fil du temps.

Ce modèle fonctionne mieux avec une batterie en bon état. En vieillissant, la cellule perd de la capacité et sa résistance interne augmente. La courbe de tension se modifie. Le téléphone peut encore interpréter 20 % comme une réserve confortable alors qu'il reste beaucoup moins d'énergie réellement utilisable.

Les erreurs apparaissent d'abord dans le bas de la jauge. Au milieu de la plage de charge, la courbe de tension est assez plate. Près de zéro, elle devient beaucoup plus raide. Une petite chute de tension sous forte charge peut alors donner l'impression que la batterie tombe brusquement dans le vide.

C'est pourquoi l'appareil photo, le GPS, les jeux, les appels vidéo et la 5G peuvent déclencher l'arrêt. Ces usages provoquent de brèves pointes de consommation. Une batterie saine les absorbe. Une batterie usée voit sa tension passer sous le seuil minimal de fonctionnement du téléphone, qui s'éteint pour se protéger.

## Pourquoi une vieille batterie s'éteint trop tôt

Une batterie dégradée cumule deux problèmes.

D'abord, elle stocke moins d'énergie. Une batterie de 5 000 mAh à 80 % de capacité conserve environ 4 000 mAh. À 70 %, elle n'en conserve plus qu'environ 3 500 mAh. L'affichage peut sembler normal, mais chaque point de pourcentage correspond à moins de capacité réelle.

Ensuite, sa résistance interne est plus élevée. La tension chute donc davantage lorsque le téléphone demande du courant. Un ancien appareil peut rester tranquillement à 25 % sur l'écran d'accueil, puis s'éteindre dès que vous ouvrez l'appareil photo.

Le froid aggrave encore la situation. La chimie lithium-ion ralentit à basse température, et la batterie fournit moins facilement le courant demandé. Un téléphone qui tient à 20 % à l'intérieur peut s'éteindre au même niveau dehors.

La chaleur agit autrement. Elle ne provoque généralement pas à elle seule l'arrêt instantané à 20 %, mais elle accélère le vieillissement qui finit par créer ce problème.

## Étalonnage : ce qu'il peut corriger, et ce qu'il ne peut pas faire

L'étalonnage de la batterie est largement mal compris. Il ne restaure aucune capacité. Au mieux, il aide le logiciel à estimer plus correctement la charge restante.

Sur les Pixel, Google indique qu'il n'est pas nécessaire d'étalonner la batterie en la déchargeant puis en la rechargeant complètement. Si les arrêts ont commencé après une mise à jour logicielle, un remplacement de batterie ou une longue période de comportement incohérent, commencez par redémarrer le téléphone et utilisez-le normalement pendant quelques cycles. La sortie d'Android 17 sur les Pixel compatibles ne signifie pas, à elle seule, que la batterie est défectueuse.

Pour que l'estimation de capacité reste précise, les Pixel effectuent une recharge complète tous les 10 cycles, même lorsque la limite à 80 % est activée. Lorsque cela se produit, Google recommande de laisser le téléphone branché pendant au moins 30 minutes après l'affichage de 100 %. Pour les autres marques, suivez les instructions officielles du fabricant plutôt qu'une méthode générique trouvée en ligne.

Ne prenez pas l'habitude de vider la batterie jusqu'à zéro. Les décharges complètes répétées sollicitent davantage une batterie lithium-ion que les recharges partielles.

Si l'affichage devient plus stable après quelques cycles normaux, le problème venait peut-être en partie de l'estimation. Si le téléphone continue de s'éteindre à 20 %, ou commence à le faire à 30 %, la cellule est probablement trop usée pour que le logiciel puisse masquer le défaut.

## Quand le logiciel est responsable

L'usure matérielle n'explique pas toujours tout. Une application défaillante peut maintenir des wake locks, garder le CPU actif ou déclencher au mauvais moment une activité réseau et de localisation. Cette charge supplémentaire peut suffire à faire chuter une batterie déjà faible sous son seuil de fonctionnement.

Ouvrez Paramètres > Batterie > Utilisation de la batterie. Si une application présente une forte activité en arrière-plan, limitez-la ou désinstallez-la pendant une journée, puis recommencez le test.

Le mode sans échec est utile si le téléphone est assez récent et que l'état de la batterie paraît normal. Il désactive les applications tierces. Si les arrêts cessent dans ce mode, une application installée est probablement en cause.

Une réinitialisation d'usine peut corriger une estimation de charge défectueuse ou une boucle logicielle, mais c'est la solution lourde. Sauvegardez d'abord vos données. Après la réinitialisation, testez le téléphone avant de restaurer toutes les applications et tous les réglages. Une restauration immédiate peut ramener exactement le même problème.

## Questions fréquentes

Pourquoi le téléphone redémarre-t-il avec un pourcentage plus élevé après avoir été branché ? Sous charge, la tension d'une batterie faible chute brutalement. Une fois le chargeur connecté, il fournit du courant et la tension de la batterie remonte. Le téléphone n'a pas gagné beaucoup d'énergie en une seconde. La mesure de tension s'est simplement stabilisée.

Faut-il garder le téléphone branché pour éviter qu'il ne s'éteigne à 20 % ? Pour une urgence ponctuelle, oui. Comme solution quotidienne, non. Si vous ne pouvez plus faire confiance au téléphone sous 25 %, la batterie demande une intervention.

Une application peut-elle réparer le problème ? Aucune application ne répare l'usure chimique. Une bonne application peut estimer l'état de la batterie et montrer des tendances. Elle ne peut pas reconstruire la cellule.

Lorsqu'un téléphone s'éteint alors qu'il affiche encore une réserve confortable, vous avez généralement affaire à une cellule usée, à une jauge imprécise, ou aux deux. Vérifiez d'abord l'état de la batterie, ne tentez un étalonnage que selon les recommandations du fabricant, puis remplacez la batterie lorsque les indices convergent.
