---
title: "Le mode Doze d'Android expliqué : comment le téléphone économise la batterie pendant son sommeil"
description: "Le mode Doze d'Android réduit la décharge en veille en retardant certaines tâches en arrière-plan lorsque le téléphone est inactif. Voici ce qu'il limite, pourquoi des notifications peuvent arriver en retard et quand exempter une application."
listSummary: "batterie, optimisation et android"
hub: "battery"
sourceNumber: 34
order: 24
subgroup: "Drain"
tags: ["batterie","optimisation","android","conseils","performances"]
locale: "fr"
draft: false
---
Pourquoi dix notifications arrivent-elles au moment précis où vous reprenez votre téléphone ? Très souvent, la réponse est Doze.

Doze est le système de veille intégré à Android. Vous ne l'activez pas et la plupart des gens ne voient jamais d'écran Doze dans les Paramètres. Il agit discrètement lorsque le téléphone n'est pas branché, que l'écran est éteint et qu'Android estime qu'il est temps d'empêcher chaque application de s'exécuter quand bon lui semble.

Android 17 est désormais la version actuelle de la plateforme sur la plupart des Pixel compatibles, tandis que les autres fabricants suivent leurs propres calendriers. Cela ne change pas les conseils essentiels concernant Doze. Pour l'utilisateur, le principe reste le même : moins de réveils en arrière-plan, une meilleure autonomie en veille et, parfois, des notifications non urgentes retardées.

## Ce que fait Doze

Lorsque Doze est actif, Android limite les opérations coûteuses. Les applications perdent leur accès normal au réseau. Les alarmes standard sont reportées. Les tâches et les synchronisations attendent. Les wake locks sont ignorés pendant les phases de veille profonde. Les recherches Wi-Fi s'arrêtent également.

L'appareil n'est pas figé pour autant. Android ouvre de courtes fenêtres de maintenance afin de regrouper le travail en attente. Les applications se synchronisent, les tâches en file d'attente s'exécutent et les notifications de priorité normale peuvent arriver. Puis Android replace le téléphone en veille.

C'est tout le principe. Regrouper le travail en arrière-plan consomme bien moins que laisser chaque application réveiller le CPU et la radio quand elle le souhaite.

## Quand Doze s'active

Doze est apparu avec Android 6.0 (API 23). Dans sa première version, l'appareil devait rester débranché, immobile et écran éteint pendant un certain temps. Android 7.0 a ajouté le comportement souvent appelé « Doze en déplacement », qui applique des restrictions plus légères lorsque le téléphone est débranché et que l'écran reste éteint, même s'il bouge dans votre poche.

En pratique, les téléphones Android modernes bénéficient généralement de deux niveaux de protection. Des restrictions légères s'appliquent pendant que vous les transportez, puis des restrictions plus profondes lorsqu'ils restent immobiles un moment.

Les logiciels des fabricants compliquent parfois les choses. Les Pixel restent assez proches du comportement de référence de Google. Samsung, Xiaomi, OnePlus, Oppo et d'autres ajoutent leurs propres systèmes de gestion de la batterie. Parfois cela aide. Parfois ces systèmes sont trop agressifs et perturbent les notifications.

## Ce qui est retardé

Le retard le plus visible concerne la synchronisation en arrière-plan. La messagerie peut vérifier moins souvent l'arrivée de nouveaux messages. Une application de notes peut se synchroniser plus tard. Un widget météo peut attendre la prochaine fenêtre de maintenance au lieu de s'actualiser immédiatement.

Les tâches programmées par les développeurs sont également concernées. Les tâches `JobScheduler` et `WorkManager` attendent généralement tant que Doze reste actif. Les alarmes standard d'`AlarmManager` sont elles aussi reportées, mais les alarmes d'horloge destinées directement à l'utilisateur continuent de sonner à l'heure.

Les appels et les SMS ne sont pas censés attendre une fenêtre de maintenance. Les notifications Firebase Cloud Messaging (FCM) de haute priorité peuvent aussi réveiller brièvement une application pour afficher une alerte urgente. C'est pourquoi WhatsApp, Signal, Telegram et les applications similaires paraissent généralement immédiates, à condition que l'application et les réglages de batterie du fabricant soient correctement configurés.

Les messages push de priorité normale suivent une autre logique. Si une application les utilise pour actualiser son contenu ou envoyer des alertes peu urgentes, Android peut les conserver jusqu'à la prochaine fenêtre de maintenance.

## Pourquoi les notifications arrivent en retard

Une notification tardive n'est pas toujours un bug. C'est souvent le compromis recherché par Doze.

Une promotion d'application de livraison, une mention « J'aime » sur un réseau social ou une alerte d'actualité peut attendre quelques minutes si cela aide le téléphone à rester en veille. Un message professionnel, une alarme, un appel entrant ou une alerte de sécurité ne devrait pas attendre. Les bonnes applications utilisent la bonne priorité pour chaque type de message. Les mauvaises réclament une priorité excessive ou s'intègrent mal à FCM et interrogent leurs serveurs en arrière-plan.

Le plus frustrant est l'absence d'explication claire pour l'utilisateur. Les messages arrivent simplement en retard, et il faut remonter à la cause.

Commencez par les réglages de notification de l'application. Vérifiez ensuite ses réglages de batterie. Sur un Pixel, ouvrez **Paramètres > Applications > [nom de l'application] > Utilisation de la batterie par les applis**. Sur Samsung, consultez **Paramètres > Maintenance de l'appareil > Batterie > Limites utilisation arrière-plan** et vérifiez que l'application ne figure pas dans **Applications en veille** ou **Applications en veille profonde**.

## Exempter une application de Doze

Android permet d'exempter certaines applications de l'optimisation de la batterie. Sur une version proche d'Android standard, le chemin habituel est **Paramètres > Applications > Accès spécifiques des applications > Optimisation de la batterie**. Sélectionnez l'application puis **Ne pas optimiser**, ou le libellé équivalent.

Soyez sélectif. Chaque exemption donne davantage de liberté à une application en arrière-plan, et trop d'exemptions réduisent l'intérêt de Doze. Les messageries, les VPN, les applications médicales ou de sécurité et certains outils professionnels peuvent être de bons candidats. Une application d'achat, non.

Les règles de Google Play limitent aussi les situations dans lesquelles une application devrait demander à l'utilisateur de l'exempter de la gestion d'énergie d'Android. Le principe est simple : cette exemption doit rester réservée aux applications dont la fonction principale ne peut pas fonctionner correctement sans elle.

## Comment savoir si Doze aide réellement

Le test le plus simple consiste à observer la décharge pendant la nuit. Rechargez le téléphone, débranchez-le avant de vous coucher, laissez l'écran éteint et vérifiez la baisse au matin. Perdre quelques pour cent pendant la nuit est normal. Une perte de 15 % ou 25 % écran éteint signifie qu'un élément réveille trop souvent le téléphone, que le signal est mauvais ou que la batterie vieillit.

Les statistiques de batterie n'afficheront pas forcément « échec de Doze ». Elles peuvent indiquer Système Android, Services Google Play, réseau mobile ou une application au nom vague. Le taux de décharge écran éteint est donc plus utile qu'un seul graphique. Si un téléphone perd plus d'environ 1-2 % par heure alors qu'il est inactif, cela mérite une enquête.

Les développeurs peuvent tester Doze avec ADB et la commande `adb shell dumpsys deviceidle force-idle`, mais il s'agit d'un outil de test, pas d'un réglage destiné à l'usage quotidien.

## Questions fréquentes

Vous ne pouvez pas désactiver Doze dans les réglages Android ordinaires, et mieux vaut ne pas essayer. C'est l'une des principales raisons pour lesquelles les téléphones Android modernes peuvent rester inactifs pendant des heures sans vider complètement leur batterie.

Doze fonctionne lorsque le téléphone est dans votre poche, mais pas toujours à son niveau le plus profond. Depuis Android 7.0, des restrictions plus légères s'appliquent lorsque l'écran est éteint et que l'appareil bouge. Le mode le plus profond dépend toujours de périodes d'inactivité plus longues.

Les alarmes de l'application Horloge continuent de sonner. Ce sont les alarmes d'arrière-plan des autres applications qui sont repoussées aux fenêtres de maintenance, sauf si elles utilisent les API prévues pour les alarmes qui doivent fonctionner pendant la veille.

Si un appareil se décharge davantage en veille qu'un autre, n'en concluez pas que Doze ne fonctionne plus. La puissance du signal, la gestion de la batterie du fabricant, les applications installées, la synchronisation des comptes, les widgets et l'âge de la batterie peuvent faire varier fortement le comportement de deux téléphones Android.

runcheck peut aider à distinguer la décharge écran allumé de la décharge écran éteint et à voir si les périodes d'inactivité coïncident avec l'activité du réseau, la température ou des tâches en arrière-plan. C'est bien plus utile que de tirer des conclusions d'une seule baisse de pourcentage pendant la nuit.
