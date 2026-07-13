---
title: "Que sont les wake locks et comment vident-ils la batterie ?"
description: "Les wake locks permettent aux applications Android de maintenir le processeur actif après l'extinction de l'écran. Mal utilisés, ils peuvent empêcher le téléphone d'atteindre ses états de veille basse consommation et provoquer une forte décharge en veille."
listSummary: "batterie, consommation et depannage"
hub: "battery"
sourceNumber: 35
order: 25
subgroup: "Drain"
tags: ["batterie","consommation","depannage","android","performances"]
locale: "fr"
draft: false
---
Vous dormez. L'écran du téléphone est éteint. Rien ne joue, aucun téléchargement n'est en cours, et la batterie perd tout de même 18 % pendant la nuit.

C'est le genre de décharge que peuvent provoquer les wake locks. Une demande de wake lock maintient une partie de l'appareil éveillée alors qu'Android la laisserait normalement s'endormir. Le problème le plus courant est le wake lock partiel, qui maintient le processeur en activité alors que l'écran reste éteint.

Les wake locks ne sont pas mauvais par nature. Une application musicale en a besoin pour continuer à lire du son. Une application de navigation peut en avoir besoin pendant un trajet. Un envoi lancé par l'utilisateur doit parfois aller jusqu'au bout au lieu de s'interrompre à mi-chemin. Le problème commence lorsqu'une application conserve un wake lock trop longtemps, en demande trop souvent ou oublie de le libérer une fois son travail terminé.

## Comment fonctionnent les wake locks

Lorsque l'écran s'éteint, Android essaie de suspendre le CPU et de faire passer le téléphone dans des états à faible consommation. Si une application doit poursuivre une tâche, elle peut acquérir un wake lock par l'intermédiaire de l'API PowerManager d'Android. Une fois la tâche terminée, elle libère le verrou et le téléphone peut de nouveau dormir.

C'est à ce passage de relais que les choses se compliquent.

Une application peut lancer une synchronisation en arrière-plan, rencontrer un délai d'attente réseau et ne pas nettoyer correctement son état. Une autre peut interroger un serveur toutes les quelques minutes au lieu d'utiliser des notifications push. Une application de sport peut conserver des capteurs et des traitements actifs plus longtemps que nécessaire. Pour l'utilisateur, le téléphone semble inactif. À l'intérieur, il ne l'est pas du tout.

Depuis le 1er mars 2026, ce point compte aussi davantage pour les développeurs. Google Play peut réduire la visibilité des applications qui dépassent le seuil Android vitals relatif aux wake locks partiels excessifs. Android vitals considère leur utilisation comme excessive lorsque les wake locks non exemptés totalisent au moins 2 heures sur une période de 24 heures, et lorsque ce comportement touche plus de 5 % des sessions de l'application en moyenne sur 28 jours.

## Pourquoi la décharge due aux wake locks est difficile à repérer

La consommation liée aux wake locks se cache souvent derrière des libellés système. L'écran de batterie peut afficher **Système Android**, **Services Google Play** ou une vague activité en arrière-plan sans nommer précisément le wake lock responsable.

Commencez tout de même par les vérifications de base. Ouvrez **Paramètres > Batterie > Utilisation de la batterie** et regardez quelles applications ont consommé de l'énergie en arrière-plan. Sur les versions récentes de Pixel, sélectionnez une application puis ouvrez **Utilisation de la batterie par les applis**. Sur Samsung, consultez **Paramètres > Maintenance de l'appareil > Batterie**, puis examinez la consommation des applications et les limites d'utilisation en arrière-plan.

Si le téléphone perd beaucoup de charge écran éteint alors qu'aucune application évidente n'apparaît dans les statistiques, les wake locks deviennent une hypothèse plus crédible.

L'ancien code de numérotation `*#*#4636#*#*` n'est plus une solution fiable. Il fonctionne sur certains téléphones Android, ne produit rien sur d'autres et fournit souvent peu d'informations utiles sur la batterie des appareils Samsung et Xiaomi récents. Je ne construirais pas une méthode de diagnostic autour de ce code.

Pour aller plus loin, utilisez ADB. La commande `adb shell dumpsys batterystats` peut afficher l'historique des wake locks et le temps pendant lequel l'appareil est resté éveillé, mais le résultat n'est pas facile à lire. Des outils comme BetterBatteryStats et GSam Battery Monitor peuvent aider. Sur les versions modernes d'Android, beaucoup d'outils avancés demandent toutefois des autorisations accordées par ADB ou une configuration supplémentaire. Méfiez-vous d'une application qui promet des miracles instantanés sans autorisation ni données.

## Les responsables habituels

Les Services Google Play sont souvent accusés parce qu'ils prennent en charge de nombreuses fonctions : localisation, notifications push, synchronisation des comptes, services de proximité, contrôles de sécurité et bien d'autres. Une certaine durée de wake lock provenant de ces services est normale. Une consommation incontrôlée après une mise à jour du système, une synchronisation cassée ou un cache corrompu ne l'est pas.

Les réseaux sociaux peuvent eux aussi être bruyants. Ils actualisent les fils, envoient des données d'analyse, synchronisent les messages, mettent à jour des widgets et maintiennent les notifications actives. Une application sociale que vous ouvrez deux fois par semaine n'a aucune raison de disposer d'un accès illimité en arrière-plan.

La messagerie électronique constitue un autre cas classique. La réception push est généralement efficace. Interroger les serveurs toutes les quelques minutes gaspille de l'énergie, surtout avec plusieurs comptes.

Les VPN, les applications musicales, la navigation et les bracelets d'activité sont différents. Leurs wake locks peuvent être attendus puisque l'utilisateur leur a demandé de poursuivre une tâche. La bonne question n'est pas « cette application maintient-elle le téléphone éveillé ? », mais « continue-t-elle de le faire alors que je n'utilise plus sa fonction principale ? ».

## Ce que vous pouvez faire

Limitez l'activité en arrière-plan des applications qui n'en ont pas besoin. Sur un Pixel ou une version d'Android proche de celle de Google, ouvrez **Paramètres > Applications > [nom de l'application] > Utilisation de la batterie par les applis** et choisissez le réglage le plus restrictif adapté. Sur Samsung, utilisez **Applications en veille** ou **Applications en veille profonde** dans **Limites utilisation arrière-plan**.

Ne limitez pas les applications qui doivent réellement fonctionner en temps réel. Les messageries, les VPN, les outils de santé, la navigation, les applications d'urgence et les services professionnels indispensables peuvent se comporter de manière imprévisible si vous les bloquez trop fortement.

Pour les Services Google Play, commencez doucement. Redémarrez le téléphone. Vérifiez les mises à jour du système Google Play et des applications. Si la décharge continue, videz le cache dans **Paramètres > Applications > Services Google Play > Stockage et cache > Vider le cache**. Évitez d'effacer toutes les données si vous ne savez pas ce que cela implique, car vous pouvez réinitialiser l'état local des services et déclencher temporairement davantage de synchronisations.

Si le problème a commencé juste après une mise à jour vers Android 17, attendez un jour ou deux avant de tirer des conclusions. Les Pixel ont reçu Android 17 en premier, et un téléphone effectue souvent davantage d'indexation, d'optimisation des applications et de nettoyage après une mise à niveau majeure. Une décharge qui persiste plusieurs jours est une autre affaire.

## Ce que Doze change

Doze aide à limiter les dégâts causés par les wake locks pendant la veille profonde. Lorsque l'appareil est en mode Doze, Android ignore les wake locks durant les phases restreintes et autorise surtout le travail pendant les fenêtres de maintenance.

Doze n'est pas magique pour autant. Les applications exemptées de l'optimisation de la batterie disposent de plus de liberté. Les services de premier plan peuvent continuer à travailler. Les systèmes de gestion de batterie des fabricants se comportent parfois différemment. Et si le téléphone n'atteint jamais un état réellement inactif à cause des mouvements, d'un mauvais signal ou d'une activité répétée en arrière-plan, vous ne profitez pas pleinement de Doze.

C'est pourquoi la décharge pendant la nuit est un indice si utile. Si le téléphone reste immobile pendant sept heures et perd 4 %, vous n'avez probablement pas de problème majeur de wake lock. S'il perd 20 % écran éteint sans lecture multimédia, quelque chose le maintient éveillé ou force la radio à travailler.

runcheck est conçu pour rapprocher ces différents signaux. La décharge écran éteint, le comportement en veille profonde, la qualité du signal et la température racontent ensemble une histoire bien plus claire que l'écran de batterie par défaut.

## Quelques questions utiles

Un wake lock peut-il garder l'écran allumé ? Un wake lock partiel, non. Il maintient le CPU actif tandis que l'écran reste éteint. D'anciens types de wake locks capables d'agir sur l'écran existent, mais les applications Android modernes sont fortement limitées dans ce domaine. L'essentiel de la décharge cachée provient des wake locks partiels qui concernent le CPU.

Une certaine activité de wake lock est-elle normale ? Oui. Même un téléphone Android sain utilise de courts wake locks pour les services système, les notifications push, les changements de connexion et les tâches programmées. Quelques minutes sont normales. Plusieurs heures pendant une période d'inactivité ne le sont pas.

Une réinitialisation d'usine résoudra-t-elle le problème ? Parfois. Elle peut supprimer un mauvais état d'application, une synchronisation défaillante ou des restes de mise à jour. C'est aussi une mesure brutale. Limitez d'abord les applications suspectes, mettez tout à jour, videz les caches lorsque c'est pertinent et confirmez le schéma de décharge avant d'effacer le téléphone.
