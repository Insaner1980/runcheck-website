---
title: "Comment démarrer Android en mode sans échec et quand l'utiliser"
description: "Comment démarrer Android en mode sans échec, ce que ce mode désactive et comment l'utiliser pour repérer une application problématique."
listSummary: "batterie, consommation et depannage"
hub: "performance"
sourceNumber: 70
order: 7
tags: ["batterie","consommation","depannage","android","performances"]
locale: "fr"
draft: false
---
Comment savoir si votre téléphone est lent parce qu'Android passe une mauvaise journée ou parce qu'une application perturbe tout en arrière-plan ? Le mode sans échec est le test le plus propre.

Ce mode démarre Android uniquement avec le logiciel système et les applications préinstallées. Les applications que vous avez ajoutées ensuite sont désactivées jusqu'au prochain redémarrage normal. Rien n'est supprimé. Le but est d'isoler la cause : si le problème disparaît en mode sans échec, une application tierce est probablement impliquée. S'il reste présent, examinez plutôt Android, le stockage, la batterie ou le matériel.

## Quand le mode sans échec vaut la peine d'être utilisé

Utilisez-le lorsque le téléphone plante, se fige, redémarre, surchauffe, vide sa batterie anormalement vite ou affiche des fenêtres intempestives impossibles à fermer. Il est aussi utile après une mise à jour Android majeure si l'appareil devient soudainement très mauvais et que l'utilisation de la batterie ne désigne pas clairement une application.

Il ne sert pas seulement aux pannes spectaculaires. Si le clavier réagit en retard, si le lanceur se recharge sans cesse ou si le téléphone met plusieurs secondes à répondre après le déverrouillage, le mode sans échec peut toujours répondre à la question importante : une application installée participe-t-elle au problème ?

Le test est simple. Démarrez en mode sans échec, utilisez le téléphone pendant quelques minutes et essayez de reproduire le défaut.

## Démarrer en mode sans échec lorsque le téléphone est allumé

Sur la plupart des téléphones Android, commencez par ouvrir le menu d'alimentation.

Sur les Pixel 6 et modèles ultérieurs, y compris les Pixel Fold, maintenez **Marche/Arrêt + Volume haut** pendant quelques secondes. Sur beaucoup d'autres téléphones, maintenez le bouton **Marche/Arrêt** ou le bouton latéral. Les Samsung utilisent souvent **bouton latéral + Volume bas**, ou l'icône d'alimentation dans les réglages rapides.

Lorsque le menu apparaît, appuyez de manière prolongée sur **Éteindre** ou **Redémarrer** à l'écran. Android devrait alors afficher une invite pour le mode sans échec. Appuyez sur **OK** ou sur l'option correspondante.

Le téléphone redémarre. Une fois l'opération terminée, la mention **Mode sans échec** devrait apparaître dans l'angle inférieur gauche.

## Démarrer en mode sans échec lorsque le téléphone est éteint

Cette méthode est utile lorsque le téléphone est trop instable pour atteindre le menu d'alimentation.

Allumez-le normalement. Dès que le logo du fabricant ou l'animation de démarrage apparaît, maintenez **Volume bas**. Gardez le bouton enfoncé jusqu'à l'affichage de l'écran de verrouillage ou de l'écran d'accueil. Si l'opération a fonctionné, la mention **Mode sans échec** apparaît en bas de l'écran.

Le moment compte. Si vous appuyez trop tôt, certains téléphones peuvent ouvrir le bootloader ou le mode de récupération. Trop tard, Android démarre normalement. Si vous manquez le bon moment, éteignez le téléphone et recommencez.

## Remarques pour les Samsung

Samsung prend en charge les deux méthodes sur les téléphones et tablettes Galaxy actuels. Le fabricant emploie l'intitulé **Mode sécurisé** pour cette fonction.

Sur un Galaxy allumé, ouvrez le menu d'alimentation, maintenez **Éteindre**, puis appuyez sur **Mode sécurisé**. Sur un Galaxy éteint, allumez-le et maintenez **Volume bas** lorsque le logo Samsung apparaît.

Samsung précise que les icônes des applications installées peuvent changer de place après l'utilisation du mode sécurisé. Les applications et les réglages sont conservés, mais ce changement d'organisation peut être irritant. Faites une capture d'écran de l'écran d'accueil au préalable si sa disposition compte pour vous.

## Si le téléphone est bloqué

S'il ne répond plus, forcez d'abord son redémarrage.

Sur la plupart des Samsung, maintenez **Marche/Arrêt + Volume bas** pendant plus de 7 secondes. Sur beaucoup d'autres téléphones Android, maintenez **Marche/Arrêt** ou **Marche/Arrêt + Volume bas** pendant environ 10 à 15 secondes, jusqu'à ce que l'écran s'éteigne ou que l'appareil redémarre.

Utilisez ensuite la méthode destinée au téléphone éteint : rallumez-le, attendez l'apparition du logo, puis maintenez **Volume bas**.

## Que faut-il tester en mode sans échec ?

Ne démarrez pas dans ce mode pour en sortir immédiatement. Utilisez le téléphone assez longtemps pour obtenir une information utile.

Essayez précisément ce qui ne fonctionnait pas. Ouvrez les Paramètres. Déverrouillez le téléphone plusieurs fois. Saisissez du texte dans un champ. Surveillez la température de la batterie. Laissez l'écran allumé pendant cinq minutes. Si l'appareil redémarrait au hasard, laissez-le simplement posé un moment.

Le mode sans échec désactive les applications téléchargées. Vos applications habituelles de messagerie, réseaux sociaux, banque, VPN, lanceur et clavier peuvent donc ne pas fonctionner. C'est normal. Le téléphone, les SMS, le Wi-Fi, les données mobiles et les Paramètres intégrés devraient rester disponibles. Google précise toutefois que le mode Avion peut s'activer automatiquement sur certains Pixel au passage en mode sans échec. Désactivez-le si vous avez besoin d'une connexion pour votre test.

## Si le problème disparaît

Une application tierce devient la principale suspecte.

Commencez par ce qui a changé récemment. Les nouvelles installations, les mises à jour récentes, les lanceurs, VPN, applications de nettoyage, outils d'automatisation, économiseurs de batterie, claviers et tout ce qui possède des droits d'accessibilité ou d'administration de l'appareil méritent votre attention en premier.

Quittez le mode sans échec, désinstallez ou désactivez une seule application suspecte, puis testez normalement. Ne supprimez pas dix applications à la fois, sauf si le téléphone est inutilisable. En procédant une par une, vous saurez ce qui a réellement corrigé le problème.

Certaines applications résistent parce qu'elles disposent de droits d'administration de l'appareil. Si Android refuse d'en désinstaller une, ouvrez les réglages **Sécurité et confidentialité** et recherchez la liste des applications d'administration de l'appareil. Le chemin exact varie selon le téléphone. Retirez d'abord ce droit, puis désinstallez l'application.

## Si le problème reste présent

Si le mode sans échec n'améliore rien, une application téléchargée n'est probablement pas responsable.

La cause peut alors être un bug du système, un état logiciel corrompu, un stockage sous pression, une mauvaise mise à jour, une batterie défaillante, une surchauffe ou un autre problème matériel. Après une mise à niveau récente vers Android 17, par exemple, je vérifierais si d'autres propriétaires du même modèle signalent le même symptôme avant de prendre une mesure radicale.

Les étapes suivantes restent pratiques : installez une nouvelle mise à jour si un correctif est disponible, libérez du stockage, vérifiez l'utilisation et la température de la batterie, effacez la partition de cache uniquement si votre téléphone propose encore cette option, puis sauvegardez vos données importantes avant d'envisager une réinitialisation d'usine.

La réinitialisation d'usine est un dernier recours. Elle peut corriger des problèmes logiciels, mais demande beaucoup de travail et ne réparera ni un stockage vieillissant, ni une batterie faible, ni un bouton endommagé.

## Comment quitter le mode sans échec

Redémarrez le téléphone normalement. C'est tout.

Appuyez sur le bouton d'alimentation ou utilisez son icône dans les réglages rapides, puis choisissez **Redémarrer**. Sur certains modèles, Samsung propose aussi une notification liée au mode sécurisé sur laquelle vous pouvez appuyer pour le désactiver.

Si le téléphone revient sans cesse en mode sans échec, vérifiez le bouton **Volume bas**. Un bouton coincé, une coque trop serrée, de la saleté autour de la touche ou un interrupteur endommagé peut déclencher ce mode au démarrage. Retirez la coque et redémarrez de nouveau.

## Limites et surprises fréquentes

Le mode sans échec ne supprime ni les applications, ni les photos, ni les messages, ni les données de compte. Il désactive seulement les applications téléchargées tant qu'il reste actif.

Les widgets provenant d'applications tierces peuvent disparaître pendant le test. Google recommande précisément de faire une capture d'écran avant d'utiliser le mode sans échec si vos widgets comptent pour vous. Vous devrez peut-être les ajouter de nouveau après le redémarrage normal.

Le mode sans échec ne désactive pas non plus les applications système du fabricant. Des composants Samsung, Xiaomi, OnePlus, de l'opérateur ou de Google peuvent continuer à fonctionner parce qu'Android les considère comme faisant partie de l'image système installée. Si une application préinstallée pose problème, le mode sans échec ne l'isolera pas forcément.

Cette limite est agaçante, mais le mode sans échec reste utile. Il répond en moins de cinq minutes à l'une des questions de dépannage les plus importantes.
