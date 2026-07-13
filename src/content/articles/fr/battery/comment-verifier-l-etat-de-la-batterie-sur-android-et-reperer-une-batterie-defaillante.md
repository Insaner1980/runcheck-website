---
title: "Comment vérifier l'état de la batterie sur Android et repérer une batterie défaillante"
description: "Une batterie de téléphone en fin de vie ne s'annonce pas toujours par un arrêt spectaculaire. Les signes apparaissent souvent peu à peu : autonomie réduite lorsque l'écran est allumé, redémarrage inattendu, téléphone tiède pendant une utilisation légère. Une décharge rapide, un arrêt alors qu'il reste 20 % ou plus, une recharge plus lente, une chaleur persistante pendant des tâches ordinaires ou une coque arrière qui se soulève peuvent aussi indiquer une batterie qui se dégrade."
listSummary: "Une batterie de téléphone en fin de vie ne s'annonce pas toujours par un arrêt spectaculaire."
hub: "battery"
sourceNumber: 11
order: 1
subgroup: "Health"
tags: ["batterie","etat","diagnostic","android","guide"]
locale: "fr"
draft: false
---
Contrairement aux iPhone compatibles, qui affichent un pourcentage d'état de la batterie depuis iOS 11.3, Android a longtemps rendu cette information plus difficile à trouver. Il n'existe pas d'écran universel consacré à l'état de la batterie. Il faut souvent recouper les outils du fabricant, les menus cachés, les habitudes de consommation et les applications de diagnostic.


## Réponse rapide : comment vérifier l'état de la batterie

Voici trois méthodes, de la plus rapide à la plus détaillée.

**Outils intégrés du fabricant.** Ouvrez Paramètres > Batterie et cherchez un indicateur d'état. Sur **Samsung**, ouvrez l'application Samsung Members, puis allez dans Assistance > Diagnostics du téléphone et lancez le test État de la batterie. Sur les **Google Pixel 8a et modèles ultérieurs**, l'état de la batterie se trouve dans Paramètres > Batterie > État de la batterie, tandis que le nombre de cycles apparaît dans Paramètres > À propos du téléphone > Informations sur la batterie. Certains modèles récents de **OnePlus, OPPO et Realme** peuvent afficher une information d'état dans les réglages de batterie, mais cela dépend du modèle, de la région et de la version du système. Il en va de même pour certains appareils **Xiaomi et POCO** sous HyperOS.

**Menu de diagnostic caché.** Ouvrez l'application Téléphone et saisissez `*#*#4636#*#*`. Sur les appareils compatibles, un menu de test s'ouvre et peut afficher des informations sur la batterie, comme son état, sa température et sa tension. Ce code ne fonctionne pas sur tous les téléphones. De nombreux modèles Samsung et Pixel récents le désactivent.

**Application de diagnostic.** Les applications tierces estiment l'état de la batterie en suivant les cycles de charge et de décharge pendant plusieurs jours. C'est souvent l'option la plus détaillée lorsque le téléphone ne propose aucun indicateur intégré.

Une capacité estimée inférieure à 80 % de la capacité nominale, ou un indicateur qui ne signale plus un état bon ou normal, justifie d'envisager un remplacement.


## Pourquoi les batteries s'usent

Tous les téléphones Android utilisent une batterie lithium-ion ou lithium-polymère. Ces batteries sont légères, denses en énergie et rechargeables, mais leur chimie leur impose une durée de vie limitée.

**Les cycles de charge sont l'un des principaux mécanismes de vieillissement.** Un cycle complet correspond à l'utilisation de 100 % de la capacité de la batterie, en une seule fois ou en plusieurs recharges partielles. Utiliser 50 % aujourd'hui et 50 % demain représente donc un cycle. Les anciennes recommandations évoquaient souvent un seuil de 500 cycles, mais de nombreux modèles actuels sont conçus pour conserver environ 80 % de leur capacité initiale après 800 à 1 000 cycles complets. Les téléphones mis sur le marché dans l'Union européenne à partir du 20 juin 2025 doivent supporter au moins 800 cycles de charge et de décharge tout en conservant au moins 80 % de leur capacité initiale.

**Le vieillissement calendaire se produit même sans utilisation.** Les cellules lithium-ion subissent des réactions chimiques secondaires inévitables, simplement sous l'effet du temps et de la thermodynamique. La couche d'interface électrolyte solide sur l'anode s'épaissit progressivement, ce qui augmente la résistance interne. Un téléphone laissé un an dans un tiroir aura donc une batterie mesurablement moins performante qu'à l'état neuf.

**La chaleur cause le plus de dégâts.** Au-delà de 30 °C (86 °F), la température devient élevée pour une cellule lithium-ion. Jouer pendant la recharge, laisser le téléphone dans une voiture chaude ou l'utiliser en plein soleil accélère la dégradation chimique. Une surchauffe prolongée peut provoquer des dommages définitifs. Les effets se cumulent : une température élevée associée à une charge complète est particulièrement défavorable. C'est pourquoi de nombreux téléphones modernes proposent une limite à 80 % ou ralentissent la recharge pendant la nuit. Même sous un climat modéré, un téléphone posé sur un tableau de bord en plein soleil peut atteindre une température dommageable en moins d'une heure.

**Les habitudes de recharge comptent, mais moins qu'on ne le prétend souvent.** Recharger systématiquement jusqu'à 100 % et descendre jusqu'à 0 % sollicite davantage la batterie que de rester, lorsque c'est pratique, dans une plage de 20-80 %. La recharge rapide produit aussi plus de chaleur qu'une recharge standard. Sur une année, l'écart entre une recharge rapide systématique à 100 % et une recharge plus douce limitée à 80 % est toutefois souvent moins spectaculaire que ne le laissent entendre certains conseils en ligne. La chaleur et le temps pèsent davantage. Les chargeurs non certifiés présentent un risque plus concret, car une alimentation mal régulée peut endommager durablement les cellules.

Au final, une batterie de 5 000 mAh devient lentement une batterie de 4 000 mAh, puis de 3 500 mAh, jusqu'à ne plus tenir une journée normale.


## Étapes de diagnostic manuel

Même sans pourcentage d'état dédié, les réglages d'Android fournissent des indices utiles. Aucune de ces vérifications ne nécessite d'installer une application.

**Vérifiez l'utilisation de la batterie par application.** Ouvrez Paramètres > Batterie > Utilisation de la batterie. Le chemin exact varie, et certains téléphones utilisent une rubrique comme « Batterie et maintenance de l'appareil ». Recherchez les applications qui consomment beaucoup d'énergie alors que vous les avez peu utilisées. Une application en arrière-plan qui représente 15 % ou plus de la consommation peut être le véritable problème, plutôt qu'une cellule usée.

**Comparez le temps d'écran allumé.** Notez combien d'heures d'écran allumé vous obtenez avec une charge complète, puis comparez ce chiffre aux caractéristiques d'origine ou à votre expérience des premiers mois. Une baisse de 30-40 % par rapport à l'autonomie passée indique une dégradation réelle.

**Surveillez les chutes soudaines du pourcentage.** Une batterie en bon état se décharge de façon assez régulière. Si le niveau passe de 45 % à 20 % en quelques minutes pendant une utilisation légère, ou si le téléphone s'éteint à 15 %, la courbe de tension réelle ne correspond plus à l'estimation logicielle. C'est un symptôme classique de vieillissement.

**Chronométrez la recharge.** Mesurez le temps nécessaire pour passer de 20 % à 80 % avec le même chargeur. Une durée nettement plus longue qu'avant peut signaler une hausse de la résistance interne. L'inverse est également révélateur : un téléphone qui se recharge vite mais se vide tout aussi vite peut mal estimer la capacité restante.

**Repérez les arrêts en charge élevée.** Une batterie dégradée ne parvient plus toujours à maintenir sa tension lorsque la demande augmente. Si le téléphone s'éteint au lancement d'un jeu exigeant alors que le niveau indiqué reste raisonnable, la batterie approche probablement de sa fin de vie.

**Contrôlez la température au toucher.** La navigation web, la messagerie et une utilisation légère des réseaux sociaux ne devraient produire qu'une chaleur modérée. Si l'arrière du téléphone devient franchement chaud pendant ces activités, la résistance interne peut générer un excès de chaleur.

**Cherchez des signes physiques.** Une coque arrière qui se soulève, un écran qui se décolle légèrement du châssis ou un téléphone qui oscille sur une surface plane peuvent indiquer une batterie gonflée. C'est un problème de sécurité. Cessez d'utiliser et de recharger le téléphone, ne tentez pas d'appuyer sur la coque et confiez l'appareil à un réparateur. Ce n'est pas une situation à « surveiller ». Le gonflement ne se résorbe pas.

**Utilisez les diagnostics du fabricant.** En plus des indicateurs mentionnés dans la réponse rapide, certains téléphones proposent des outils dédiés. Sur Pixel, cherchez Diagnostics de la batterie dans Paramètres > Batterie. Samsung Members comprend une rubrique Diagnostics du téléphone avec un test de l'état de la batterie. Sur d'autres marques, les informations disponibles varient selon le modèle et la version logicielle.


## Diagnostic avancé : tension, température et courbe de décharge

Plusieurs mesures donnent une meilleure idée de ce qui se passe dans la cellule.

**Comportement de la tension.** Une cellule lithium-ion complètement chargée se situe souvent autour de 4,2 V, et autour de 3,0-3,3 V lorsqu'elle est déchargée. Les valeurs exactes dépendent de la chimie et de la conception du téléphone. Une batterie en bon état maintient une tension relativement stable sous une charge modérée. Une tension qui fluctue fortement pendant une utilisation légère, chute brutalement pendant une tâche moyenne ou reste bien en dessous de 3,7 V alors que le téléphone affiche encore une charge peut indiquer une jauge mal étalonnée ou une cellule trop dégradée pour rester fiable.

**Évolution de la température.** Une plage de 20-35 °C (68-95 °F) est normale en usage courant. Une température pouvant atteindre 40 °C peut se produire pendant un jeu exigeant ou la navigation GPS. Au-delà de 45 °C de manière répétée, la gestion thermique du téléphone réduit généralement les performances et ralentit la recharge. La batterie entre alors dans un cercle vicieux : la chaleur accélère sa dégradation, qui produit à son tour davantage de chaleur.

**Forme de la courbe de décharge.** Dans une cellule en bon état, la partie centrale de la décharge, autour de 30-70 %, est assez plate et lente. À mesure que la batterie s'use, cette zone se resserre : la charge baisse plus vite dans les pourcentages élevés, le milieu de plage raccourcit et les valeurs sous 30 % deviennent moins fiables. Une batterie qui traverse très vite la zone de 50-30 % a perdu une partie de sa capacité utilisable. Suivre ces courbes pendant plusieurs jours ou semaines montre si la situation se dégrade et à quel rythme.

**Effets de la résistance interne.** Les outils grand public ne la mesurent pas directement, mais ses conséquences sont visibles : chaleur pendant la recharge, niveau qui baisse rapidement sous charge puis remonte au repos, vitesse maximale de recharge réduite. La batterie a plus de mal à déplacer les ions à travers ses structures internes dégradées.

Les applications de diagnostic ajoutent des chiffres à ces observations. Elles suivent les phases de charge et de décharge pendant plusieurs jours pour estimer la capacité actuelle par rapport à la capacité nominale. Si une batterie de 5 000 mAh ne stocke plus que 3 800 mAh, son état est d'environ 76 %, et son remplacement devient pertinent. La plupart des applications ont besoin de plusieurs jours et de plusieurs cycles avant que l'estimation se stabilise. Ne tirez donc pas de conclusion après une seule journée.

runcheck réunit le diagnostic de la batterie, du réseau, de la température et du stockage dans une même évaluation. C'est utile, car un problème de batterie n'est pas toujours isolé. Un composant qui chauffe anormalement peut se manifester comme une décharge rapide, tandis qu'un stockage saturé oblige le CPU à travailler davantage.

Évitez les applications qui promettent de « booster », « étalonner » ou « restaurer » l'état de la batterie. Aucune application ne peut inverser une dégradation chimique. Les outils utiles affichent la tension et la température réelles, suivent les données dans le temps et fonctionnent sur l'appareil sans exiger de compte ni d'envoi vers le cloud.


## Questions fréquentes

**Combien de temps une batterie de téléphone Android doit-elle durer avant d'être remplacée ?**

Les anciennes batteries étaient souvent associées à un seuil de 500 cycles, mais ce chiffre est trop bas comme règle générale pour les modèles actuels. De nombreux téléphones récents sont conçus pour conserver environ 80 % de leur capacité après 800 à 1 000 cycles complets, selon le modèle, la chimie, les habitudes de recharge, l'exposition à la chaleur et l'intensité d'utilisation. Certaines personnes conservent une batterie quatre ans. D'autres constatent une dégradation marquée après 18 mois.

**À partir de quel pourcentage faut-il remplacer la batterie ?**

Autour de 80 % de la capacité nominale, la différence devient sensible pour beaucoup de personnes. Une batterie de 4 500 mAh ne stocke alors plus qu'environ 3 600 mAh. Sous 70 %, l'autonomie quotidienne devient souvent difficile à accepter.

**Peut-on restaurer l'état de la batterie ?**

Non. La dégradation est un processus chimique irréversible. Vous pouvez seulement la ralentir : gardez le téléphone au frais, rechargez-le entre 20 et 80 % lorsque c'est pratique, utilisez le chargeur du fabricant ou un modèle certifié et activez les fonctions de recharge intelligente si elles sont disponibles.

**Une mise à jour logicielle peut-elle provoquer une décharge qui ressemble à une panne matérielle ?**

Oui, et cela arrive plus souvent qu'on ne le pense. Une mise à jour mal optimisée peut augmenter l'activité du CPU en arrière-plan, vider la batterie et produire de la chaleur. Avant de conclure à une panne matérielle, vérifiez Paramètres > Batterie > Utilisation de la batterie. Si une application ou un processus système précis consomme anormalement, une mise à jour, la suppression de son cache ou un correctif ultérieur peut résoudre le problème.

**Est-il sûr de continuer à utiliser un téléphone dont la batterie est gonflée ?**

Non. Cessez de l'utiliser et de le recharger, puis confiez-le à un réparateur. Le gonflement vient d'une accumulation de gaz liée à une dégradation chimique interne. Une batterie lithium-ion endommagée peut, dans des cas extrêmes, se rompre ou prendre feu.

**La recharge rapide use-t-elle plus vite la batterie ?**

La recharge rapide produit davantage de chaleur, et la chaleur accélère la dégradation. Les protocoles modernes gèrent toutefois ce risque en rechargeant rapidement jusqu'à environ 70-80 %, puis en ralentissant. L'effet existe, mais il reste généralement faible par rapport à la température ambiante et aux habitudes globales de recharge. Le chargeur du fabricant est normalement sûr. Réserver la recharge rapide aux moments où elle est nécessaire et utiliser une recharge standard la nuit est un compromis raisonnable.

**Pourquoi le téléphone s'éteint-il à 15-20 % au lieu d'atteindre 0 % ?**

La capacité réelle de la batterie ne correspond plus à ce que le logiciel attend. Avec le vieillissement, la courbe de tension change et l'algorithme d'estimation perd en précision. Le téléphone pense qu'il reste de l'énergie, mais la batterie ne peut plus maintenir la tension sous charge. Un cycle complet peut parfois corriger l'affichage, mais si le problème revient régulièrement, la batterie doit être remplacée.

**À quelle fréquence faut-il vérifier l'état de la batterie ?**

Tous les quelques mois. La dégradation est progressive, et la vérifier constamment ne change rien. Faites un contrôle plus tôt si l'autonomie chute soudainement, si le téléphone s'éteint sans raison ou s'il chauffe davantage que d'habitude.


## Que faire des résultats

Commencez par consulter le graphique d'utilisation de la batterie et les outils intégrés du fabricant. Observez aussi le comportement quotidien du téléphone, car les symptômes concrets comptent souvent plus qu'un chiffre isolé. Pour un suivi précis, une application de diagnostic qui enregistre la tension, la température et la capacité au fil du temps peut révéler des tendances invisibles sur une seule journée.

Le seuil de 80 % correspond souvent au moment où la dégradation commence à gêner l'usage quotidien. En dessous, remplacer la batterie coûte bien moins cher qu'acheter un nouveau téléphone et peut prolonger la durée de vie utile de l'appareil de deux à trois ans.
