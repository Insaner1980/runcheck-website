---
title: "Comment trouver une consommation de batterie cachée sur Android"
description: "Pourquoi l'écran de batterie accuse-t-il Système Android ou Services Google Play alors que le vrai problème vient probablement d'une application, d'une synchronisation bloquée, de la localisation ou du modem ? Parce que ces entrées système effectuent souvent le travail demandé par d'autres fonctions. C'est agaçant, mais pas inutile."
listSummary: "batterie, consommation et depannage"
hub: "battery"
sourceNumber: 25
order: 15
subgroup: "Drain"
tags: ["batterie","consommation","depannage","android","performances"]
locale: "fr"
draft: false
---
Une consommation cachée consiste surtout à découvrir ce qui empêche le téléphone de dormir lorsque l'écran est éteint.

## Commencez par l'écran le plus banal

Ouvrez d'abord **Paramètres > Batterie > Utilisation de la batterie**. Sur Pixel, passez de la vue des applications à celle du système si cette option est disponible. Sur Samsung, ouvrez **Paramètres > Maintenance de l'appareil > Batterie > Afficher les détails**. Xiaomi, OnePlus, Motorola et les autres marques utilisent des libellés différents, mais toutes proposent une forme de liste d'utilisation par application.

Cherchez trois schémas :

1. Une application avec beaucoup d'activité en arrière-plan et très peu au premier plan.
2. Une entrée système qui reste élevée pendant plusieurs cycles de charge.
3. Un graphique qui baisse nettement pendant une période où l'écran est éteint et le téléphone devrait être calme.

Une mauvaise mesure après une longue sauvegarde Google Photos ou une mise à jour du Play Store ne suffit pas. Trois résultats similaires d'affilée forment un schéma.

## Vérifiez si le téléphone dort réellement

Le mode Doze d'Android réduit le travail en arrière-plan lorsque le téléphone est débranché, immobile et inutilisé. Il reporte certaines tâches et synchronisations, limite l'accès au réseau et regroupe les fenêtres de maintenance. Des exceptions limitées restent possibles, et une notification prioritaire peut réveiller brièvement l'appareil, mais un téléphone au repos doit passer de longues périodes à ne presque rien faire.

Si le graphique de batterie descend régulièrement pendant la nuit, ou si le téléphone est chaud sur la table de nuit, quelque chose perturbe cet état de repos.

Sur certaines versions d'Android, le graphique affiche une ligne **Éveillé** ou un indicateur similaire. Si elle reste active longtemps alors que **Écran allumé** ne l'est pas, vous avez un indice. De nombreuses versions de One UI montrent aussi de fines barres d'état sous le graphique.

Aucune barre ? Passez au niveau suivant.

## Utilisez le mode sans échec avant d'accuser la batterie

Le mode sans échec est sous-estimé. Il désactive temporairement les applications téléchargées et laisse fonctionner le système de base. Si la décharge nocturne disparaît presque entièrement dans ce mode, le matériel n'est probablement pas responsable.

La méthode d'accès varie. Sur de nombreux téléphones Android, vous ouvrez le menu d'alimentation puis maintenez **Éteindre** jusqu'à l'apparition de l'invite du mode sans échec. Google le documente comme un moyen d'identifier les applications problématiques, et Samsung le présente comme un mode de diagnostic qui désactive les applications tierces.

Faites un seul test nocturne en mode sans échec si la décharge est importante. N'y restez pas une semaine. Si le résultat s'améliore, commencez par supprimer ou limiter les applications installées ou mises à jour récemment.

## Les options pour les développeurs montrent ce qui est actif maintenant

Pour activer les options pour les développeurs, ouvrez **Paramètres > À propos du téléphone** et appuyez sept fois sur **Numéro de version**. Revenez ensuite dans **Paramètres > Système > Options pour les développeurs**, ou dans le menu équivalent de votre appareil.

L'écran des services en cours d'exécution, lorsqu'il est présent, fournit un instantané des services qui utilisent de la mémoire et parfois du CPU. Ce n'est pas un rapport complet sur la batterie, mais il peut révéler un problème évident. Si une application de shopping, un fond d'écran, un nettoyeur ou une ancienne application de sport fonctionne alors que vous ne l'avez pas ouverte, examinez-la.

Des écrans consacrés aux applications en veille ou inactives peuvent aussi être disponibles. Ils indiquent comment Android classe l'activité des applications. Ils n'existent pas sur tous les appareils, et certains fabricants les masquent. C'est l'une des difficultés du diagnostic Android : les outils existent, mais il faut d'abord découvrir où le fabricant les a placés.

## Utilisez ADB lorsque vous avez besoin de preuves

ADB est la méthode sans root la plus propre pour examiner les wake locks et l'historique de batterie. Elle demande davantage de travail, mais évite de deviner.

Vous avez besoin d'un ordinateur sur lequel les platform-tools sont installés et du débogage USB activé sur le téléphone. Réinitialisez d'abord les statistiques actuelles :

```bash
adb shell dumpsys batterystats --reset
```

Utilisez ensuite le téléphone normalement, ou laissez-le au repos pendant la nuit. Exportez le rapport :

```bash
adb shell dumpsys batterystats > batterystats.txt
```

Le fichier est volumineux. Commencez par rechercher les sections suivantes, dont le nom exact peut varier selon la version d'Android :

- **Estimated power use**, pour les estimations de consommation par application en mAh.
- **Wake locks**, pour les applications qui ont maintenu le CPU éveillé.
- **Alarm Stats** ou les sections liées aux alarmes, pour repérer les applications qui réveillent l'appareil à répétition.
- **Mobile radio** et **Wi-Fi**, si la consommation semble liée au réseau.

La documentation officielle de Batterystats et de Battery Historian décrit le flux de travail. Batterystats recueille les données sur l'appareil, puis Battery Historian les transforme en chronologie HTML. Battery Historian est excessif pour un diagnostic occasionnel, mais devient utile lorsque vous devez observer sur une même ligne temporelle les wake locks, l'activité radio, la recharge, l'état de l'écran et le niveau de batterie.

Si vous ne voulez utiliser qu'une seule commande, prenez celle-ci :

```bash
adb shell dumpsys batterystats
```

Elle ne désignera pas magiquement l'application coupable en français courant. Elle vous donnera des éléments de preuve.

## Les causes cachées les plus courantes

**Services Google Play** n'est généralement pas le coupable à lui seul. Il gère notamment les notifications push, les API de localisation, la synchronisation des comptes, les services de proximité, certaines mises à jour et une partie de la sécurité de l'appareil. S'il apparaît très haut, vérifiez les erreurs de synchronisation du compte Google, les autorisations de position, la sauvegarde Google Photos et les mises à jour en attente.

N'essayez pas de désinstaller les Services Google Play et évitez de les arrêter de force comme solution durable. Ils sont intégrés au fonctionnement d'Android. Videz le cache si la procédure officielle de votre appareil le recommande, redémarrez, mettez les applications à jour, puis corrigez le problème de compte ou de localisation qui se trouve en dessous.

**Une synchronisation de compte qui échoue** est banale, mais fréquente. Ouvrez les réglages des comptes, puis cherchez les icônes d'avertissement, les anciens comptes professionnels, les mots de passe modifiés ou les services qui ne terminent jamais leur synchronisation. Supprimez le compte si vous ne l'utilisez plus. Ajoutez-le de nouveau si vous en avez besoin.

**Un signal faible** peut ressembler à une consommation du système. Si **Veille du réseau mobile** est élevée, effectuez un test nocturne en mode Avion. Samsung cite la qualité et la stabilité de la connexion réseau parmi les facteurs qui influencent l'autonomie, et dans beaucoup de logements, c'est toute l'explication.

**Les widgets et les fonds d'écran animés** s'oublient facilement, car ils se trouvent sur l'écran d'accueil plutôt que dans le tiroir d'applications. Un widget météo qui actualise la position toutes les quelques minutes n'a rien à voir avec une horloge statique. Supprimez pendant une journée les widgets ajoutés récemment et comparez.

**Les accessoires Bluetooth** peuvent aussi provoquer des boucles. Une montre, des écouteurs, le système d'une voiture ou un traceur peut tenter de se reconnecter à répétition. Si le problème a commencé après un nouvel appairage, faites un test nocturne avec le Bluetooth désactivé.

## Quand soupçonner le matériel

Une consommation logicielle laisse souvent des indices : application, wake lock, activité radio, chaleur liée au CPU ou amélioration en mode sans échec. Un problème matériel est plus obstiné.

Quelques signes vont dans cette direction :

- Le téléphone perd une grande quantité de batterie pendant la nuit, même en mode Avion.
- Le mode sans échec n'améliore rien.
- Le téléphone est chaud alors qu'il n'est ni utilisé ni en charge.
- L'état de la batterie est réduit ou le téléphone s'éteint à des pourcentages aléatoires.

Sur le Pixel 8a et les modèles ultérieurs, ouvrez **Paramètres > Batterie > État de la batterie**. Google indique que l'état **Réduite** correspond à une capacité inférieure à 80 %. Sur Samsung, ouvrez **Samsung Members > Assistance > Démarrer** dans la section Diagnostics du téléphone, puis **État de la batterie**.

Une application tierce peut estimer la capacité, mais ne traitez pas son chiffre comme une mesure de laboratoire. Les données d'état de la batterie sont imparfaites. La température, l'historique de recharge, l'estimation logicielle et la méthode de mesure influencent toutes le résultat.

## Ce qu'il ne faut pas faire

N'installez pas un économiseur de batterie qui promet de tout réparer. La plupart de ces applications reproduisent les commandes déjà intégrées à Android, ajoutent des publicités et exécutent leur propre service en arrière-plan.

Ne videz pas continuellement l'écran Récents. Android gère cela automatiquement. Si une application se comporte mal, utilisez l'arrêt forcé depuis les réglages de l'application, puis mettez-la à jour, limitez-la ou supprimez-la.

Ne commencez pas par une réinitialisation d'usine. Elle peut corriger un état d'application corrompu ou des réglages obsolètes, mais elle vous fait perdre du temps et ne vous apprend rien sur la cause. Gardez-la pour le moment où l'écran de batterie, le mode sans échec, les tests réseau et les restrictions d'applications ont échoué.

runcheck peut aider lorsque le schéma traverse plusieurs catégories. Une décharge accompagnée de chaleur indique une direction. Une décharge associée à un signal faible en indique une autre. Une décharge liée à une forte pression sur le stockage ou à une utilisation intensive des applications mène ailleurs. La solution est meilleure lorsque le diagnostic ne se fait pas à l'aveugle.
