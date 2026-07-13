---
title: "Recharge USB-C : comprendre les watts, les ampères et les volts"
description: "Meta description : Comprendre le rôle des watts, des ampères et des volts dans la recharge d'un smartphone Android, le fonctionnement de l'USB Power Delivery et les raisons pour lesquelles tous les chargeurs USB-C n'offrent pas la même vitesse."
listSummary: "recharge, batterie et android"
hub: "charging"
sourceNumber: 46
order: 10
tags: ["recharge","batterie","android","guide","materiel"]
locale: "fr"
draft: false
---
Les watts sont le chiffre à regarder en priorité. Les volts et les ampères expliquent comment le chargeur y parvient, mais la puissance en watts indique la puissance disponible.

Un chargeur qui fournit 9 V à 2 A délivre 18 W. Avec 20 V à 3 A, il délivre 60 W. Le calcul est simple : volts multipliés par ampères égale watts.

Simple. Jusqu'à ce que la négociation USB-C entre en jeu.

## Que signifie l'étiquette du chargeur ?

La plupart des chargeurs USB-C indiquent plusieurs combinaisons de sortie. Vous pouvez voir, par exemple :

- 5 V/3 A = 15 W
- 9 V/3 A = 27 W
- 15 V/3 A = 45 W
- 20 V/3,25 A = 65 W

Ce sont les profils de puissance que le chargeur peut proposer. Le téléphone ne choisit pas automatiquement le plus élevé. Il demande un profil qu'il prend en charge, puis le chargeur passe au niveau correspondant.

C'est pourquoi un chargeur d'ordinateur portable de 100 W ne grille pas un téléphone limité à 18 W. Le téléphone ne demandera pas 100 W. Il choisira un profil inférieur ou retombera sur une recharge de base si le chargeur et le téléphone ne parviennent pas à s'accorder sur un meilleur mode.

## Comment fonctionne la négociation USB Power Delivery ?

USB Power Delivery, généralement abrégé en USB PD, est la principale norme ouverte de recharge rapide utilisée par de nombreux smartphones Android, tablettes, ordinateurs portables et accessoires.

Quand vous branchez un câble USB-C, le chargeur et le téléphone communiquent par les broches du canal de configuration, ou Configuration Channel. Le chargeur annonce les Power Data Objects, ou PDO, qu'il prend en charge. Le téléphone en choisit un. Le chargeur fournit ensuite la tension et l'intensité convenues, dans les limites négociées.

Un chargeur USB PD de 45 W peut proposer 5 V/3 A, 9 V/3 A, 15 V/3 A et 20 V/2,25 A. Un téléphone compatible avec une recharge de 25 W peut choisir un profil proche de 9 V. Un ordinateur portable peut sélectionner 20 V sur le même adaptateur.

Le chargeur ne pousse pas la puissance dans le téléphone. Le téléphone prélève ce qu'il peut utiliser.

## Pourquoi le PPS compte-t-il ?

L'USB PD standard utilise des paliers de tension fixes, comme 5 V, 9 V, 15 V et 20 V. Le PPS, pour Programmable Power Supply, laisse le téléphone demander de petits ajustements de tension et d'intensité à l'intérieur de la plage annoncée par le chargeur.

C'est utile parce qu'une batterie lithium-ion n'a pas besoin de la même tension pendant toute la recharge. À mesure qu'elle se remplit, les conditions idéales changent. Avec une tension fixe, une plus grande partie de la conversion se fait dans le téléphone, ce qui produit de la chaleur. Avec le PPS, le chargeur peut se rapprocher de ce dont le téléphone a besoin à cet instant.

Le mode Super Fast Charging de Samsung repose sur l'USB PD avec PPS. Les téléphones Pixel prennent également en charge le PPS. Un chargeur USB PD ordinaire sans PPS peut tout de même fonctionner, mais il n'atteindra pas nécessairement le meilleur mode de recharge sur ces téléphones.

## Quick Charge, VOOC, SUPERVOOC et HyperCharge

L'USB PD est ce qui se rapproche le plus d'un langage de recharge commun sur Android. Ce n'est pas le seul.

Qualcomm Quick Charge a été très répandu sur les téléphones Android pendant des années. Les versions récentes de Quick Charge se rapprochent davantage de l'USB PD, mais les anciens adaptateurs et téléphones peuvent encore se comporter différemment d'un ensemble entièrement USB PD.

OPPO VOOC et OnePlus SUPERVOOC suivent une autre approche. Ces systèmes font souvent passer une forte intensité par un chargeur et un câble compatibles, afin de produire moins de chaleur dans le téléphone. Ils peuvent donc être très rapides, mais aussi exigeants sur les accessoires. OnePlus précise que la recharge rapide SUPERVOOC nécessite un téléphone et un câble de données compatibles SUPERVOOC.

Xiaomi HyperCharge présente un comportement propriétaire comparable sur de nombreux modèles. Un chargeur USB-C PD standard rechargera généralement ces téléphones, mais la puissance maximale annoncée exige souvent le chargeur et le câble d'origine, ou des accessoires compatibles avec le protocole.

Les appellations de Samsung peuvent aussi prêter à confusion. Adaptive Fast Charging, utilisé sur les anciens téléphones Samsung, n'est pas identique à Super Fast Charging sur les modèles plus récents. Ce dernier mode utilise l'USB PD avec PPS.

## La puissance du câble limite aussi la vitesse

Le câble participe à la négociation. Le considérer comme un simple fil explique une bonne partie des problèmes de recharge.

De nombreux câbles USB-C sont prévus pour 3 A. À 20 V, cela suffit pour 60 W. Au-delà, il faut un câble de 5 A doté d'une puce e-marker, afin que le chargeur et l'appareil sachent qu'il peut transporter ce courant en toute sécurité.

Les marquages de certification USB-IF deviennent plus clairs. Les câbles USB-C certifiés indiquent une puissance de 60 W ou 240 W. Les câbles de données plus rapides peuvent aussi afficher un logo correspondant à leur débit. C'est bien plus lisible qu'un long nom de version USB.

Pour un téléphone, un bon câble USB-C de 60 W suffit dans la plupart des cas. Pour les ordinateurs portables, les tablettes et les chargeurs puissants, un câble de 240 W peut être utile. Avec les systèmes propriétaires des fabricants de téléphones, le câble correspondant peut toutefois compter davantage que la puissance imprimée dessus.

## Quel chargeur acheter ?

Pour de nombreux téléphones Android utilisant l'USB PD ou le PPS, un chargeur USB-C PD PPS de 25-30 W suffit. Il couvre les vitesses habituelles de recharge rapide de la plupart des Pixel et de nombreux modèles Samsung.

Si votre Samsung accepte une recharge de 45 W, choisissez un chargeur PPS qui prend explicitement en charge le profil de 45 W approprié. Avec un téléphone OnePlus, OPPO ou Xiaomi, utilisez le chargeur et le câble conçus pour son protocole si vous voulez atteindre la vitesse maximale annoncée.

Vous pouvez acheter un chargeur plus puissant que ce que votre téléphone accepte. Cela ne l'endommagera pas et peut être pratique si le même adaptateur recharge aussi un ordinateur portable ou une tablette. N'attendez simplement pas d'un chargeur de 100 W qu'il recharge quatre fois plus vite un téléphone limité à 25 W.

Le conseil le moins spectaculaire reste le meilleur : choisissez le bon protocole au lieu de courir après le plus gros chiffre.
