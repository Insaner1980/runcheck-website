---
title: "Comment vérifier l'état du stockage sur Android"
description: "Le stockage Android peut s'user, mais la plupart des téléphones n'affichent pas un simple pourcentage d'état. Voici ce que vous pouvez vérifier, ce que signifient les chiffres et les signes qui doivent vous inquiéter."
listSummary: "Le stockage Android peut s'user, mais la plupart des téléphones n'affichent pas un simple pourcentage d'état."
hub: "storage"
sourceNumber: 80
order: 2
tags: ["stockage","android","nettoyage","optimisation","guide"]
locale: "fr"
draft: false
---
---

Comment savoir si le stockage de votre téléphone Android est en bon état, et pas simplement s'il lui reste de la place ? C'est agaçant, mais la plupart des appareils ne rendent toujours pas cette vérification facile.

L'état du stockage et l'espace disponible sont deux problèmes différents. Un téléphone peut disposer de 80 Go libres tout en ayant une puce NAND affaiblie. À l'inverse, un appareil presque plein peut sembler lent alors que son stockage matériel fonctionne parfaitement. Ces deux situations sont constamment confondues, alors commencez par les séparer.

## Ce qui use le stockage d'un téléphone

Les téléphones Android utilisent un stockage flash NAND. Les modèles d'entrée de gamme ont souvent employé de l'eMMC, tandis que les appareils de milieu et de haut de gamme utilisent généralement de l'UFS. Ces deux technologies s'usent au fil des cycles de programmation et d'effacement. Chaque écriture, suppression et réécriture use très légèrement les cellules.

Le contrôleur répartit les écritures sur la puce grâce à la gestion de l'usure, ou wear leveling. C'est pourquoi une utilisation normale tue rarement le stockage rapidement. Les photos, les messages, les mises à jour d'applications et la navigation Web ne ressemblent pas à un flux de vidéosurveillance écrit sans interruption toute la journée.

L'enregistrement intensif de vidéos, les installations constantes de jeux, les réinitialisations d'usine répétées et un téléphone maintenu presque plein sollicitent davantage le stockage. Le dernier point compte, car le contrôleur dispose alors de moins de blocs libres pour le nettoyage et la répartition de l'usure. Cela fonctionne. Jusqu'au jour où cela ne fonctionne plus.

Pour la plupart des gens, le stockage n'est pas le premier composant à céder. La batterie, l'écran, le port USB-C ou la fin du suivi logiciel deviennent généralement des raisons de remplacer le téléphone avant lui. L'état du stockage devient plus intéressant sur les smartphones reconditionnés et les modèles d'entrée de gamme très sollicités.

## Le problème des chiffres d'état du stockage sur Android

Il n'existe pas de réglage Android universel indiquant que « 92 % de la durée de vie du stockage reste disponible », contrairement à l'option **État de la batterie** que les Pixel 8a et modèles ultérieurs peuvent afficher pour la batterie.

Le framework Android comprend bien une API capable de renvoyer une estimation, en pourcentage, de la durée de vie restante du stockage interne, ou `-1` lorsque l'information n'est pas disponible. Le problème est son accès. Dans AOSP, cette API est réservée au système et exige l'autorisation `READ_PRIVILEGED_PHONE_STATE`. Une application ordinaire distribuée sur le Play Store ne peut donc généralement pas l'appeler.

Certains Pixel proposent des outils de diagnostic, notamment dans le mode réparation, mais Google ne documente pas un pourcentage universel de durée de vie NAND accessible à tous dans les Paramètres. Samsung Members peut effectuer un diagnostic général des appareils Galaxy, sans pour autant fournir systématiquement un pourcentage clair de durée de vie du stockage.

Android 17 n'a pas transformé l'état du stockage en réglage grand public universel. Google l'a publié le 16 juin 2026 et l'a d'abord déployé sur la plupart des Pixel compatibles. Les différences entre OEM restent donc déterminantes lorsque les autres fabricants l'intègrent à leur interface.

## Commencez par identifier le type de stockage

Avant de lancer un benchmark, déterminez le type de stockage du téléphone. Consultez la fiche technique du fabricant ou utilisez une application d'informations matérielles comme DevCheck, puis ouvrez sa section consacrée au stockage.

À titre indicatif, les téléphones bon marché de ces dernières années utilisent souvent de l'eMMC 5.1. Les meilleurs appareils de milieu de gamme sont équipés d'UFS 2.2 ou d'UFS 3.1. Les modèles haut de gamme récents emploient couramment de l'UFS 4.0 ou de l'UFS 4.1. Des solutions UFS 5.0 ont été annoncées et présentées, mais cette génération n'est pas encore la norme des téléphones actuels.

Le type de stockage compte, car un téléphone eMMC lent et un appareil UFS dégradé peuvent produire des résultats de benchmark similaires pour des raisons différentes.

## Mesurez la vitesse avec prudence

Utilisez une application de benchmark du stockage comme CPDT. Lancez le test lorsque le téléphone est froid, que la batterie dépasse 20 %, qu'il n'est pas en train de chauffer pendant la recharge et qu'au moins 15-20 % du stockage reste libre. Lancez-le ensuite une seconde fois. Un seul mauvais résultat ne prouve rien.

Ces chiffres servent uniquement de repères, pas de règles de réussite ou d'échec :

Pour la lecture et l'écriture séquentielles, l'eMMC 5.1 peut atteindre environ 250/100-125 MB/s, l'UFS 2.1 environ 850/250, l'UFS 3.1 environ 2 100/1 200 et l'UFS 4.0 environ 4 200/2 800.

Les téléphones réels n'atteignent pas toujours ces valeurs. La capacité, le contrôleur, la température, le chiffrement, le firmware, l'espace libre et l'outil de test influencent tous le résultat. Une version de 128 Go peut aussi être plus lente que la version de 512 Go de la même gamme, car elle dispose de moins de puces NAND travaillant en parallèle.

Si votre résultat est bien inférieur à ce qui est attendu, libérez d'abord de l'espace, redémarrez, puis recommencez le test. Si la vitesse reste faible et que le téléphone se bloque aussi pendant les installations, les déplacements de fichiers, l'enregistrement de photos ou les mises à jour d'applications, l'état du stockage devient un suspect crédible.

## Les signes qui indiquent un problème de stockage

Les problèmes de stockage ne ressemblent pas tout à fait au ralentissement habituel d'un vieux téléphone.

Les applications peuvent s'installer ou se mettre à jour avec une lenteur extrême. L'appareil photo peut marquer une pause après chaque prise de vue pendant l'enregistrement. Le téléphone peut se figer lors d'une copie, d'une suppression ou d'un déplacement de fichiers. Le démarrage peut durer bien plus longtemps qu'avant. Les gros jeux peuvent vérifier ou réparer leurs fichiers plus souvent.

Les signes les plus graves sont difficiles à ignorer : photos corrompues, documents impossibles à ouvrir, applications qui plantent lors d'une écriture, erreurs indiquant qu'il est impossible d'écrire sur le stockage malgré l'espace libre, ou téléphone qui échoue parfois à démarrer.

Sauvegardez immédiatement vos données si vous constatez une corruption. Ne passez pas une heure à mesurer les performances alors que les seuls exemplaires de vos fichiers importants se trouvent encore sur ce téléphone.

## Les vérifications réservées aux appareils rootés

Un appareil rooté peut parfois lire des données d'état de plus bas niveau dans sysfs. Sur un appareil eMMC, les estimations de durée de vie peuvent apparaître dans les valeurs Extended CSD sous des chemins comme `/sys/class/mmc_host/mmc0/mmc0:*/life_time`. Sur un appareil UFS, des descripteurs d'état peuvent exister sous `/sys/class/scsi_device/` ou dans des chemins propres au fabricant.

Ce n'est pas un conseil destiné à un usage courant. Les chemins varient, SELinux bloque leur accès sur les téléphones standards et les valeurs sont faciles à mal interpréter. Si votre appareil est déjà rooté et que vous savez ce que vous faites, elles peuvent être utiles. Sinon, ne rootez pas un téléphone uniquement pour contrôler son stockage.

## Comment réduire la sollicitation du stockage

Gardez 15-20 % du stockage interne libre. Sur un téléphone de 128 Go, cela représente environ 20 Go. Sur un modèle de 256 Go, 40 Go constituent une marge confortable, sans qu'il soit nécessaire de surveiller le chiffre au gigaoctet près.

Évitez les réinitialisations d'usine comme entretien régulier. Une réinitialisation pour remettre en ordre un téléphone instable peut se justifier. En faire une chaque mois use inutilement le stockage et recrée généralement le même problème dès que vous réinstallez tout.

Enregistrez les longues vidéos sur un support externe uniquement si le téléphone et l'application photo le prennent correctement en charge. Si vous utilisez une carte SD, gardez-y les médias, pas les applications. Les applications doivent rester sur le stockage interne, car l'UFS est beaucoup plus rapide et plus fiable que la plupart des cartes microSD.

Si vous utilisez runcheck, observez la pression exercée sur le stockage dans le temps au lieu de vous arrêter à une seule mesure. La section stockage affiche l'utilisation de la capacité. Associée à la température de la batterie et aux autres signaux d'état, elle aide à distinguer un téléphone simplement plein d'un possible problème matériel.
