---
title: "Comment tester le port de charge de votre téléphone"
description: "Découvrez comment tester le port de charge d'un téléphone Android en vérifiant les câbles, en le nettoyant sans risque, en comparant le courant de charge et en utilisant les diagnostics intégrés."
listSummary: "recharge, batterie et android"
hub: "hardware"
sourceNumber: 108
order: 5
tags: ["recharge","batterie","android","guide","materiel"]
locale: "fr"
draft: false
---
---

Vous devez tenir le câble dans un angle improbable, l'icône de charge apparaît puis disparaît, et le téléphone ne se recharge que s'il reste parfaitement immobile. Tout porte à croire que le port est hors service, mais ne commencez pas par cette conclusion.

Faites d'abord les vérifications les plus simples. Elles résolvent plus de problèmes qu'on ne l'imagine.

## Écarter d'abord le câble et l'adaptateur

Essayez un autre câble USB-C ou Micro-USB avec le même adaptateur. Testez ensuite un autre adaptateur avec le câble d'origine. Si vous le pouvez, branchez aussi ces accessoires sur un autre téléphone ou une tablette.

Un câble peut être endommagé à l'intérieur bien avant que cela se voie. Une seule broche d'alimentation ou de données peut défaillir et transformer une charge rapide en filet de courant. L'extérieur du câble peut rester impeccable. C'est agaçant, mais courant.

Si le même câble et le même adaptateur chargent correctement un autre appareil, le port du téléphone devient plus suspect. Si un autre câble règle immédiatement le problème, le port n'était probablement pas en cause.

## Examiner le port

Éteignez le téléphone et éclairez directement le port de charge avec une lampe. Cherchez des fibres compactées contre sa paroi du fond. Les peluches de poche s'accumulent lentement, puis la fiche du chargeur les tasse jusqu'à ce que le connecteur ne puisse plus s'enfoncer complètement.

Vérifiez aussi la tenue de la fiche. Un connecteur USB-C en bon état doit rester fermement en place. Il ne devrait pas tomber, bouger fortement ou se déconnecter lorsque vous déplacez légèrement le téléphone. Un peu de jeu est normal, surtout sur un appareil ancien. Des coupures répétées ne le sont pas.

Repérez d'éventuels dépôts verts, blancs ou foncés sur les contacts. Ils peuvent signaler de la corrosion ou une exposition à l'humidité. Un nettoyage peut retirer la poussière ou les peluches, mais il ne réparera pas un contact corrodé.

## Nettoyer avec précaution

Si vous voyez de la poussière ou des fibres, gardez le port orienté vers le bas et utilisez quelques souffles courts avec une poire à air ou une bombe d'air comprimé. Ne soufflez pas à bout portant. Le but est de décoller les débris, pas de les pousser plus loin.

Pour les peluches compactées, utilisez une petite brosse sèche pour appareils électroniques ou une brosse à dents propre et sèche. Évitez les outils métalliques. Une aiguille peut tordre un contact ou provoquer un court-circuit. Mieux vaut aussi éviter le cure-dent en bois, sauf en dernier recours, car il peut se fendre et laisser des morceaux dans le port.

Ne versez pas d'alcool ni de nettoyant pour contacts dans le téléphone. Qu'un technicien emploie un produit liquide dans un atelier contrôlé ne signifie pas que la méthode est sans risque à la maison.

Après le nettoyage, rebranchez le chargeur. Si la fiche s'enclenche désormais plus fermement, les peluches étaient probablement la cause principale.

## Contrôler le courant de charge

Android peut exposer les mesures de courant de la batterie par l'intermédiaire de `BatteryManager` sur les appareils qui les prennent en charge. Des applications comme Ampere affichent ces valeurs, mais utilisez-les pour comparer des essais, pas comme un instrument de laboratoire.

Ouvrez Ampere sans chargeur et notez la valeur de décharge. Branchez ensuite le chargeur, attendez environ 10 secondes et laissez la mesure se stabiliser. Le niveau de batterie, la température, la luminosité de l'écran et les règles de charge du téléphone influencent tous le résultat.

Un chargeur 2 A n'affichera pas forcément 2 000 mA à l'écran. Lorsque la batterie est presque pleine, le téléphone réduit volontairement le courant. En revanche, si un chargeur secteur et un câble dont vous avez vérifié le bon fonctionnement ne donnent que 200 ou 300 mA, et que la valeur saute dès que vous touchez la fiche, le port n'assure probablement pas un contact stable.

Les propriétaires d'un Samsung disposent d'une autre méthode. Ouvrez Samsung Members, appuyez sur Assistance, puis sur Diagnostics du téléphone. Lancez Rechargement par câble, ou le test de connexion USB s'il est proposé sur votre modèle. Le nom et l'emplacement exacts peuvent varier selon la version de l'application et le téléphone.

Le code Samsung `*#0*#` peut également ouvrir un menu de test matériel sur de nombreux Galaxy. Utilisez l'application Téléphone de Samsung, pas un composeur tiers. Sur certaines versions récentes de One UI, certains modèles d'opérateur ou des appareils soumis à des restrictions de sécurité, le code peut ne rien faire. C'est désormais normal.

Android 17 n'a pas ajouté de test universel du port de charge pour tous les téléphones Android. Les Pixel, Samsung et Xiaomi continuent d'utiliser des procédures de diagnostic différentes.

## Essayer le mode sans échec

Si le port est propre, que le câble tient correctement et que la charge se comporte toujours de façon étrange, démarrez en mode sans échec. Ce mode désactive temporairement les applications tierces et aide à repérer une interférence logicielle.

Sur de nombreux téléphones Android, ouvrez le menu d'alimentation puis maintenez l'option Éteindre jusqu'à ce que le mode sans échec soit proposé. Sur beaucoup de Samsung, redémarrez l'appareil en maintenant Volume bas pendant le démarrage. La procédure peut varier selon le modèle.

Si la charge redevient normale en mode sans échec, examinez les applications récemment installées liées à la batterie, à l'automatisation, à la sécurité ou aux animations de charge. L'une d'elles peut perturber le comportement de charge ou ses notifications.

## Quand le port doit être réparé

Le port est probablement endommagé lorsque toutes ces conditions sont réunies : le chargeur et le câble fonctionnent sur un autre appareil, le port est propre, la fiche reste lâche et les mesures de courant demeurent faibles ou instables.

La difficulté de la réparation dépend du téléphone. Sur de nombreux Samsung Galaxy, Xiaomi, Motorola et modèles Android d'entrée de gamme, le port USB se trouve sur une petite carte secondaire. Son remplacement est alors généralement courant. Sur d'autres appareils, il est soudé à la carte mère. Le travail demande plus de compétences et coûte davantage, car il s'agit d'une intervention au niveau de la carte électronique.

La charge sans fil peut vous dépanner si votre téléphone la prend en charge. Elle contourne entièrement le port USB, même si elle est souvent plus lente et moins pratique que la charge filaire.

Si la charge se dégrade depuis plusieurs semaines, n'attendez pas que le port cesse complètement de fonctionner. runcheck enregistre le comportement de charge, le courant absorbé et les tendances d'alimentation au fil du temps, ce qui aide à repérer un port défaillant avant de se retrouver avec une batterie vide.
