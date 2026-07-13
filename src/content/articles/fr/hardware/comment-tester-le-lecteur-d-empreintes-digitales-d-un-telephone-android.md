---
title: "Comment tester le lecteur d'empreintes digitales d'un téléphone Android"
description: "Vérifiez si le lecteur d'empreintes digitales de votre téléphone Android fonctionne à l'aide des diagnostics intégrés, de codes, des outils Pixel, de Samsung Members, de Xiaomi CIT et de tests pratiques."
listSummary: "diagnostic, capteurs et android"
hub: "hardware"
sourceNumber: 114
order: 11
tags: ["diagnostic","capteurs","android","materiel","guide"]
locale: "fr"
draft: false
---
Le lecteur d'empreintes est-il cassé, ou votre protection d'écran lui complique-t-elle simplement la tâche ? La question paraît légère, mais c'est la première à se poser.

Les causes d'échec sont souvent banales. Une peau sèche, de l'humidité, un verre trempé bas de gamme, un mauvais enregistrement ou une mise à jour logicielle inachevée peuvent donner l'impression qu'un lecteur en bon état est hors service. Une panne matérielle reste possible, surtout après une chute ou un remplacement d'écran, mais ne commencez pas par cette hypothèse.

## Test rapide : déverrouillez dix fois

Enregistrez une empreinte, nettoyez la zone du lecteur, séchez votre doigt, puis essayez de déverrouiller le téléphone dix fois de suite.

Avec un lecteur capacitif arrière ou latéral, 8 ou 9 réussites sur 10 indiquent généralement que le matériel fonctionne. Un ou deux échecs viennent plus probablement du placement du doigt, de saletés, de l'état de la peau ou du logiciel.

Pour un lecteur intégré à l'écran, soignez davantage la préparation et soyez un peu plus tolérant avec le résultat. Les capteurs optiques et ultrasoniques dépendent de la surface de l'écran, une protection peut donc fortement réduire la précision. Si un téléphone propre, sans protection, échoue plus de 3 fois sur 10, poursuivez les tests.

## Tests sur Samsung Galaxy

Sur de nombreux Galaxy, ouvrez l'application Téléphone préinstallée et saisissez `*#0*#`. Dans le menu de diagnostic, cherchez Fingerprint Scanner ou une option liée aux empreintes dans la rubrique des capteurs. Le menu peut indiquer si le matériel détecte le doigt et si la correspondance fonctionne.

Samsung Members est la voie la mieux prise en charge. Ouvrez l'application, appuyez sur Assistance, puis sur Diagnostics du téléphone et lancez le test des empreintes s'il est proposé sur votre modèle. Les conseils de Samsung citent aussi des causes courantes comme les protections d'écran non certifiées, les capteurs sales, le verre rayé, la peau sèche et les coques qui gênent le lecteur.

Un détail récent mérite d'être signalé : sur les Galaxy fonctionnant sous Android 16 avec One UI 8 ou version ultérieure, Samsung utilise une méthode d'enregistrement par glissement sur certains appareils. Suivez le mouvement indiqué à l'écran au lieu de supposer que tous les Galaxy demandent encore des pressions statiques répétées.

## Tests sur Xiaomi, Redmi et POCO

Sur un téléphone Xiaomi, Redmi ou POCO, ouvrez l'application Téléphone et saisissez `*#*#6484#*#*`. Si le mode CIT ne s'ouvre pas, essayez `*#*#64663#*#*`.

Dans CIT, cherchez Fingerprint sensor check, Fingerprint input test ou un intitulé proche. L'assistance Xiaomi recommande précisément la détection matérielle CIT lorsque l'option d'empreinte a disparu. Ce n'est donc pas une simple astuce trouvée sur un forum.

Vous pouvez aussi passer par la page consacrée au téléphone dans les Paramètres, ouvrir les informations détaillées ou les spécifications, puis toucher plusieurs fois la version du noyau. Xiaomi modifie les intitulés entre MIUI et HyperOS, mais cette méthode fonctionne souvent lorsque le code est bloqué.

## Tests sur Google Pixel

Les Pixel ne proposent pas le même type de menu public consacré uniquement aux empreintes que Samsung et Xiaomi.

Pour les diagnostics de réparation, Google documente le code `*#*#7287#*#*`, qui ouvre la Pixel Repair Diagnostics App sur les Pixel compatibles. Il peut aider à vérifier le matériel avant ou après une réparation. Google renvoie aussi vers l'outil Pixel Update and Software Repair pour mettre à jour le système et régler le Under-Display Fingerprint Sensor, ou UDFPS.

Pour un contrôle courant, la méthode pratique reste simple : supprimez toutes les empreintes, redémarrez le téléphone, enregistrez de nouveau un seul doigt, puis répétez les déverrouillages. Si le lecteur a complètement disparu des Paramètres ou si l'enregistrement ne démarre jamais, le problème est plus sérieux que quelques reconnaissances manquées.

Android 17 mérite d'être mentionné, car il a d'abord été proposé aux Pixel compatibles. Si un problème d'empreinte commence juste après une mise à jour majeure vers Android 17, vérifiez les correctifs suivants et les informations d'assistance propres aux Pixel avant de payer une réparation.

## Autres téléphones Android

Les téléphones OnePlus, Motorola, Realme, OPPO et les modèles Nokia sous Android varient trop pour qu'un seul code d'empreinte soit universel.

Commencez par l'application d'assistance ou de diagnostic du fabricant, lorsqu'elle existe. Motorola propose par exemple Device Help et des tests matériels sur de nombreux modèles. Certains appareils OnePlus et de la famille OPPO peuvent ouvrir `*#899#` ou d'anciens menus d'ingénierie, mais leur disponibilité manque de constance.

Une application tierce peut tout de même répondre à une question de base : Android détecte-t-il un lecteur d'empreintes ? Des outils comme Sensor Test, DevCheck et Phone Doctor Plus peuvent signaler la présence de la couche d'abstraction matérielle des empreintes. Ils ne peuvent généralement pas effectuer une correspondance biométrique sécurisée, car Android protège volontairement ces données, mais ils aident à distinguer un matériel absent d'une mauvaise reconnaissance.

## Interprétez le résultat

Si les réglages d'empreinte ont disparu, si le lecteur n'est pas détecté ou si les diagnostics signalent une panne matérielle, le problème est probablement physique. Un câble flexible endommagé, un capteur fissuré, une exposition à l'eau ou un écran remplacé sans alignement ni appairage correct du lecteur intégré sont des causes fréquentes.

Si le matériel est détecté mais reconnaît mal les doigts, ne concluez pas immédiatement que la pièce est défectueuse. Ce type de problème se corrige souvent.

Supprimez toutes les empreintes et recommencez l'enregistrement. Utilisez d'abord un seul doigt. Pendant la procédure, présentez le centre, les bords et le bout du doigt afin que le téléphone obtienne une carte utile, au lieu de scanner dix fois la même petite zone.

Enregistrez deux fois le même doigt si votre téléphone l'autorise. Ce n'est pas très élégant, mais cela fonctionne étonnamment souvent. Changez légèrement l'angle et la pression lors du second enregistrement.

Retirez la protection d'écran pour le test. C'est le problème le plus fréquent avec les lecteurs intégrés à l'écran. Une protection qui n'est pas conçue pour le modèle exact peut diffuser la lumière d'un capteur optique ou perturber la lecture ultrasonique. Si la reconnaissance fonctionne sans protection, vous avez trouvé la cause.

Nettoyez le lecteur et votre doigt. Le sébum, la poussière, les résidus de crème, la transpiration et les gerçures réduisent le nombre de crêtes exploitables. Si vos mains sont très sèches, appliquez une petite quantité de crème et laissez-la pénétrer avant de réessayer. Un doigt mouillé pose tout autant de problèmes.

Installez les mises à jour système en attente. Les pilotes d'empreinte font partie du micrologiciel et des défauts biométriques peuvent arriver jusqu'aux versions publiques. Les grandes mises à niveau d'Android, dont Android 17 sur les Pixel puis les versions des autres OEM, peuvent modifier le comportement du lecteur, car le micrologiciel du fabricant se place entre Android et le capteur.

## Quand une réparation se justifie

N'envisagez une réinitialisation d'usine qu'après avoir sauvegardé le téléphone et essayé les solutions normales. Elle peut supprimer des données biométriques corrompues ou un mauvais état d'étalonnage, mais c'est une méthode radicale.

Si le lecteur échoue toujours après la réinitialisation ou si les diagnostics ne détectent pas le matériel, demandez un devis. Les lecteurs arrière et latéraux sont souvent des pièces séparées et leur remplacement peut rester abordable. Les capteurs sous l'écran sont différents. S'ils sont intégrés au bloc écran ou nécessitent un étalonnage après son remplacement, le coût peut devenir assez élevé pour rendre le changement de téléphone plus raisonnable.

La réponse est agaçante, mais elle vaut mieux que de payer pour la mauvaise pièce.
