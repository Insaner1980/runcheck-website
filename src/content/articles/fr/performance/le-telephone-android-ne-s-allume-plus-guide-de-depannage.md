---
title: "Le téléphone Android ne s'allume plus : guide de dépannage"
description: "Votre téléphone Android ne s'allume plus ou reste sur un écran noir ? Suivez d'abord les vérifications les plus sûres, de la charge au redémarrage forcé, puis au mode Recovery et aux solutions de réparation."
listSummary: "Votre téléphone Android ne s'allume plus ou reste sur un écran noir ?"
hub: "performance"
sourceNumber: 75
order: 12
tags: ["runcheck","seo","android","article","guide"]
locale: "fr"
draft: false
---
---

Quelqu'un branche un téléphone, ne voit rien, appuie cinq fois sur Marche-Arrêt et conclut qu'il est mort. C'est parfois vrai. Mais le plus souvent, la batterie est complètement vide, le logiciel s'est figé alors que l'écran était éteint ou l'écran est en panne tandis que le téléphone fonctionne encore.

L'ordre des vérifications compte. Commencez par les étapes les moins risquées. Ne passez pas directement aux outils de rétablissement de la configuration d'usine, sauf si Android commence clairement à se charger et qu'aucune autre solution ne reste possible.

## Chargez-le comme si la batterie était vraiment vide

Utilisez un chargeur mural, pas le port USB d'un ordinateur et pas un chargeur sans fil. La recharge sans fil est pratique quand tout fonctionne, mais elle ajoute des variables d'alignement et de chaleur dont vous n'avez pas besoin pendant un dépannage.

Branchez le téléphone avec un câble et un adaptateur dont vous connaissez le bon fonctionnement. Laissez-le ensuite tranquille pendant au moins 15 minutes. Un téléphone dont la batterie est profondément déchargée peut ne pas afficher immédiatement l'icône de charge. C'est normal.

Après 15 minutes, cherchez le moindre signe de vie. Une icône de batterie, une vibration, un son de charge ou une petite LED signifie que l'alimentation arrive. Laissez la charge atteindre au moins 10 % avant d'essayer de démarrer.

Si rien ne s'affiche, changez un seul élément à la fois : le câble, le chargeur, puis la prise. Examinez le port USB-C avec une lampe. Des peluches de poche peuvent s'y tasser au point que le câble semble correctement inséré sans établir un bon contact. Pour nettoyer le port, utilisez un cure-dent en bois ou un outil en plastique. N'utilisez pas de métal.

## Forcez correctement le redémarrage

Un écran noir ne signifie pas toujours qu'Android est éteint. Le système peut être figé alors que l'écran reste en veille.

Utilisez la méthode adaptée à votre marque :

- Sur Pixel, maintenez **Marche-Arrêt** pendant 60 secondes au maximum. Relâchez lorsque le logo Google apparaît.
- Sur Samsung Galaxy, maintenez simultanément le bouton latéral (ou Marche-Arrêt) et **Volume bas** jusqu'à ce que le téléphone s'éteigne puis redémarre. Il faut généralement plus de 7 secondes.
- Sur Xiaomi, Redmi et POCO, maintenez **Marche-Arrêt** pendant plus de 10 secondes.
- Sur les autres téléphones Android, essayez **Marche-Arrêt + Volume bas** pendant 10 à 20 secondes. Si cela échoue, maintenez uniquement Marche-Arrêt plus longtemps.

Des vibrations, des sons de notification ou une sonnerie lorsque vous appelez le téléphone orientent plutôt vers une panne d'écran que vers un appareil entièrement hors service. C'est un indice utile. Réparer un écran est contraignant, mais ce n'est pas la même chose qu'une carte mère morte.

## Vérifiez si seul l'écran est en panne

Appelez le téléphone. Utilisez l'application **Localiser** depuis un autre appareil si elle était activée. Branchez le téléphone à un chargeur et écoutez s'il émet un son ou vibre. Connectez-le aussi à un ordinateur pour voir si Windows ou macOS détecte un périphérique USB.

Même si l'ordinateur détecte le téléphone, ne supposez pas que vos données sont déjà accessibles. La plupart des téléphones Android récents n'affichent pas leurs fichiers par USB tant que vous n'avez pas déverrouillé l'écran et autorisé le transfert. La détection indique toutefois qu'une partie du matériel fonctionne encore.

Un écran fissuré avec des taches noires, des lignes ou un rétroéclairage très faible évoque un dommage de l'affichage. Une exposition récente à un liquide est plus sérieuse. Même brève, elle peut corroder les connecteurs ou provoquer plus tard un court-circuit dans le circuit d'alimentation.

Une batterie gonflée est le cas où il faut s'arrêter. Si le dos du téléphone bombe, si l'écran se soulève ou si l'appareil ne repose plus à plat, ne le chargez pas et n'essayez pas de le refermer en appuyant dessus. Apportez-le à un réparateur.

## S'il atteint le logo mais ne démarre pas

L'apparition du logo Samsung, Pixel, Xiaomi ou Android signifie que l'appareil n'est pas complètement mort. Le démarrage échoue en cours de route.

Essayez le mode sans échec si le lancement avance suffisamment. Sur de nombreux appareils, maintenir **Volume bas** pendant le démarrage lance Android avec les applications téléchargées désactivées. Si le mode sans échec fonctionne, désinstallez les applications récentes, puis redémarrez normalement.

Une boucle ou un blocage avant l'écran de verrouillage justifie le mode Recovery. Sur Pixel, maintenez généralement **Marche-Arrêt + Volume bas** pour atteindre le mode Fastboot, puis sélectionnez **Mode Recovery**. Sur Samsung, utilisez souvent **Volume haut + Marche-Arrêt** lorsque l'appareil est éteint, et les modèles récents peuvent demander une connexion USB. Sur Xiaomi, la combinaison est souvent **Volume haut + Marche-Arrêt**.

Dans le mode Recovery, sélectionnez d'abord **Reboot system now**. Si le téléphone propose **Wipe cache partition**, essayez ensuite cette option, car elle n'efface pas vos données. Les Pixel ne l'affichent généralement pas, passez donc cette étape sur ces modèles. **Wipe data/factory reset** reste la dernière solution locale, car elle efface le téléphone.

Android 17 est maintenant disponible sur la plupart des Pixel compatibles, tandis que d'autres appareils éligibles le recevront selon le calendrier de leur fabricant. Si le problème de démarrage a commencé juste après cette mise à niveau ou une autre mise à jour majeure du système, consultez la page d'assistance du fabricant pour rechercher un outil de réparation ou un avis avant d'effacer les données.

## Utilisez les outils de réparation sur ordinateur avec prudence

Les outils informatiques peuvent réinstaller Android, mais ils ne sauvent pas les fichiers par magie.

Pour les Pixel 4a et modèles ultérieurs, l'outil Google Pixel de mise à jour et de réparation du logiciel est le point de départ le plus sûr lorsque le téléphone peut se connecter en USB. Pour les images d'usine Pixel, Android Flash Tool peut flasher les appareils compatibles depuis un navigateur prenant en charge WebUSB, mais le téléphone doit être dans l'état requis et l'opération peut demander un déverrouillage ou un effacement.

Samsung Smart Switch propose une récupération logicielle d'urgence dans certains cas d'échec de mise à jour. MiFlash peut réinstaller le micrologiciel de certains appareils Xiaomi, mais il demande souvent un accès au bootloader ou au mode Fastboot ainsi que la ROM correspondant exactement au modèle.

C'est à ce stade que les tutoriels deviennent dangereux. Flasher la mauvaise version peut compliquer encore la récupération. Si vous ne connaissez pas déjà le numéro exact du modèle, la région du micrologiciel, l'état du bootloader et la situation de vos sauvegardes, un atelier de réparation est plus sûr.

## Quand il s'agit probablement du matériel

Aucune icône de charge, aucune vibration, aucune détection USB et aucune réaction au redémarrage forcé après plusieurs chargeurs orientent vers une panne matérielle.

Les causes fréquentes sont une batterie hors service, un port USB-C endommagé, un circuit de gestion de l'alimentation défaillant, une panne d'écran, des dégâts causés par un liquide ou une défaillance de la carte mère. Le remplacement de la batterie ou du port se situe généralement parmi les réparations les moins coûteuses. Une intervention sur la carte mère, non.

Si le téléphone est encore sous garantie ou couvert par une assurance, utilisez d'abord cette voie. Un réparateur indépendant peut convenir, mais le fabricant ou l'assureur peut refuser une demande ultérieure si l'appareil a déjà été ouvert ailleurs.

## Sauver vos données

Sans sauvegarde, un échec de démarrage réduit rapidement les possibilités. Le mode Recovery ne donne pas accès aux fichiers d'un téléphone normal non rooté. Le transfert USB demande généralement que le téléphone soit déverrouillé. Avec un écran hors service, un adaptateur vidéo USB-C, un hub, un clavier et une souris peuvent parfois contourner le problème, mais uniquement sur les modèles compatibles avec la sortie vidéo et qui démarrent encore.

La récupération professionnelle de données existe, mais elle coûte cher et ne garantit rien. Le chiffrement des Android récents signifie aussi que la puce de stockage seule ne suffit généralement pas. L'appareil doit être réparé assez longtemps pour être déverrouillé.

C'est ce que personne n'aime entendre. Les sauvegardes sont ennuyeuses jusqu'au jour où elles ne le sont plus.
