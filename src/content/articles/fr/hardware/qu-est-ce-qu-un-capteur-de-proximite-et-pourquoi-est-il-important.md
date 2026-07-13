---
title: "Qu’est-ce qu’un capteur de proximité et pourquoi est-il important ?"
description: "Comment fonctionne le capteur de proximité de votre téléphone Android, pourquoi les appels se passent mal lorsqu’il tombe en panne, et comment tester et corriger les problèmes les plus courants."
listSummary: "diagnostic, capteurs et android"
hub: "hardware"
sourceNumber: 117
order: 14
tags: ["diagnostic","capteurs","android","materiel","guide"]
locale: "fr"
draft: false
---
En plein appel, l’écran se rallume contre votre visage et votre joue ouvre le clavier. Le plus souvent, ce minuscule capteur ne remplit plus la seule tâche que personne ne remarque tant qu’elle fonctionne.

Le capteur indique au téléphone qu’un objet se trouve près de la vitre avant. Pendant un appel, cet « objet » est généralement votre visage. Android éteint alors l’écran et ignore les commandes tactiles, pour éviter que votre oreille ne devienne un accessoire pour écran tactile.

## Comment il fonctionne

La plupart des téléphones Android utilisent un capteur de proximité infrarouge placé près de l’écouteur ou de la caméra avant. Il émet une lumière infrarouge et mesure la quantité renvoyée. Si la réflexion est suffisante, le téléphone considère qu’un objet est proche. Lorsqu’elle diminue, il signale de nouveau que l’objet est éloigné.

La documentation d’Android laisse un peu plus de souplesse qu’on pourrait le croire. La plupart des capteurs de proximité renvoient une distance en centimètres, mais certains indiquent seulement « proche » ou « éloigné ». Pour le comportement normal pendant un appel, Android n’a pas vraiment besoin de plus.

Quelques téléphones n’utilisent plus de composant infrarouge dédié de la manière classique et visible. Certains s’appuient sur un capteur sous l’écran ou sur une détection de proximité virtuelle, qui combine d’autres capteurs et du logiciel. Cela libère de la place autour du bord supérieur, mais peut rendre le système plus sensible aux protections d’écran, à la saleté, aux dommages sur le verre et aux bugs du firmware.

## Où se trouve-t-il ?

Sur les anciens téléphones dotés d’une bordure supérieure visible, le capteur se trouve généralement à côté de l’écouteur, de la caméra avant et du capteur de luminosité ambiante. Vous ne le voyez pas forcément, car il est placé derrière une zone sombre de la vitre.

Sur les modèles récents à écran poinçonné et aux bordures presque absentes, il peut être installé sous l’écran ou derrière une zone moins évidente de la vitre avant. Son emplacement exact devient donc plus difficile à deviner. Pour le tester à la main, commencez par couvrir la zone autour de l’écouteur et de la caméra avant.

## Signes d’un capteur de proximité défaillant

L’écran reste allumé pendant les appels. C’est le symptôme classique. Vous approchez le téléphone de votre oreille et votre joue commence à appuyer sur des boutons.

L’écran reste noir lorsque vous éloignez le téléphone. Vous terminez l’appel et devez appuyer sur le bouton d’alimentation parce que l’affichage ne se rallume pas tout seul.

L’écran s’éteint pendant que vous utilisez le téléphone. Cela peut arriver si le capteur reste bloqué sur l’état « proche » parce qu’un élément le masque.

Les appuis accidentels dans la poche deviennent plus fréquents. Le capteur n’est pas la seule protection contre ce problème, mais des mesures constamment erronées augmentent le risque.

## Test rapide pendant un appel

Appelez votre messagerie vocale ou un autre numéro que vous pouvez déranger sans conséquence. Pendant l’appel, couvrez avec la paume la zone proche de l’écouteur.

L’écran doit s’éteindre rapidement. Retirez votre main : il doit se rallumer en une seconde environ. S’il faut plusieurs secondes, si rien ne se passe ou si l’écran alterne entre allumé et éteint, le capteur mérite votre attention.

Simple. Et agaçant de constater à quel point c’est utile.

## Tests de diagnostic plus poussés

Sur un Samsung Galaxy, essayez `*#0*#` dans l’application Téléphone de Samsung et cherchez le test des capteurs. Samsung Members > Assistance > Diagnostics du téléphone est l’option la plus conviviale et devrait être votre premier choix si les menus de maintenance ne vous attirent pas.

Sur les téléphones Xiaomi, Redmi et POCO, saisissez `*#*#6484#*#*` ou `*#*#64663#*#*` pour ouvrir le mode CIT. L’assistance Xiaomi recommande aussi de retirer la coque et la protection d’écran, de nettoyer le haut du téléphone, de mettre le logiciel à jour et d’utiliser l’outil de détection du matériel lorsque les fonctions tactiles ou les capteurs se comportent mal.

Sur les autres téléphones Android, utilisez Sensor Test, Sensors Multitool ou DevCheck. Ouvrez la mesure de proximité, passez la main au-dessus du haut du téléphone et observez si la valeur change. Certains appareils affichent des centimètres. D’autres passent de 0 à une valeur maximale, ce qui correspond simplement à « proche » et « éloigné ».

Si la valeur ne change jamais, le capteur est masqué, désactivé, mal étalonné ou hors service.

Certains anciens guides recommandent Proximity Sensor Reset. Je n’en ferais pas la première étape. Ne l’utilisez qu’après les vérifications de base et n’attendez pas d’une application d’étalonnage tierce qu’elle répare un capteur que le téléphone ne parvient pas du tout à lire.

## Commencez par les causes courantes

Nettoyez le haut de l’écran. Le sébum, la poussière, le maquillage, les peluches et les résidus secs peuvent masquer la fenêtre du capteur. Utilisez un chiffon microfibre propre et insistez autour de l’écouteur.

Retirez la protection d’écran. C’est une cause majeure sur les téléphones équipés d’un capteur de proximité caché ou placé sous l’écran. La protection peut être trop épaisse, trop sombre près de la zone du capteur ou légèrement décalée. Testez le téléphone sans protection avant d’accuser la carte mère.

Retirez la coque. Les étuis à rabat, les rebords trop hauts et les découpes imprécises peuvent gêner le bord supérieur de l’écran.

Redémarrez le téléphone. Les pilotes des capteurs peuvent se bloquer, surtout après une longue période sans redémarrage ou juste après une mise à jour du système.

Mettez le logiciel à jour. Le comportement du capteur dépend en partie du firmware. Une mise à jour majeure, comme le passage à Android 17 proposé d’abord sur les Pixel puis dans les versions des autres OEM, peut modifier ce comportement, car la couche du fabricant contrôle le matériel.

Vérifiez les réglages d’appel. Certaines versions de Xiaomi proposent un réglage de proximité dans les options d’appel. Le chemin exact varie, mais les anciennes interfaces de type MIUI utilisaient `Settings > Apps > System app settings > Call settings > Incoming call settings > Proximity sensor`.

## Étalonnage et capteurs virtuels

Certains menus de diagnostic proposent un étalonnage de la proximité. Le mode CIT de Xiaomi et les anciens modes d’usine OnePlus en sont les exemples habituels. Ne lancez l’étalonnage que si le menu le propose clairement, avec le téléphone posé à plat, propre et sans rien qui couvre l’écran.

Les capteurs de proximité virtuels sont plus délicats. Si le téléphone estime la proximité par logiciel, il n’existe peut-être aucun composant physique à remplacer. Dans ce cas, les mises à jour du firmware comptent davantage qu’une réparation. Une réinitialisation d’usine peut effacer un mauvais état d’étalonnage, mais elle doit rester la dernière étape, après sauvegarde.

## Quand le problème est matériel

Si la valeur ne change toujours pas dans les diagnostics après le nettoyage, le retrait des accessoires, le redémarrage, la mise à jour et un essai en mode sans échec, une panne matérielle est probable.

Une chute peut fissurer la zone du capteur ou déplacer l’écran. L’eau peut corroder le capteur ou sa nappe. Une réparation peut laisser un connecteur mal fixé ou recouvrir le capteur avec un adhésif inadapté. Aucune nouvelle application de test ne corrigera ces problèmes.

Lorsque le téléphone possède un capteur de proximité infrarouge séparé, le composant lui-même est petit, mais la main-d’œuvre fait monter le coût de la réparation. Sur les modèles dont la détection est cachée ou intégrée à l’écran, l’intervention peut être liée au remplacement du bloc écran.

Si la réparation ne vaut pas son prix, vous pouvez contourner le problème. Utilisez le bouton d’alimentation pour rallumer l’écran pendant les appels, activez la protection contre les appuis accidentels si votre téléphone en propose une et évitez les étuis à rabat qui recouvrent la zone du capteur. Ce n’est pas parfait, mais le téléphone reste utilisable.
