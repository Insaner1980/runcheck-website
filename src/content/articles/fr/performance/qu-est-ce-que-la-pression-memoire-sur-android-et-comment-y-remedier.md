---
title: "Qu'est-ce que la pression mémoire sur Android, et comment y remédier"
description: "La pression mémoire apparaît quand Android manque de RAM et commence à fermer des applications. Apprenez à la reconnaître, à comprendre ses causes et à appliquer les solutions qui aident vraiment."
listSummary: "La pression mémoire apparaît quand Android manque de RAM et commence à fermer des applications."
hub: "performance"
sourceNumber: 76
order: 13
tags: ["performances","vitesse","android","optimisation","depannage"]
locale: "fr"
draft: false
---
---

La pression mémoire, c'est Android qui choisit ce qu'il doit sacrifier. Quand la RAM ne suffit plus pour tout garder, le système commence à fermer les processus les moins importants afin que le téléphone puisse continuer à fonctionner.

C'est pour cela qu'un navigateur recharge sa page quand vous y revenez. C'est aussi la raison pour laquelle le clavier peut disparaître un instant, une application musicale redémarrer ou un jeu se fermer lorsque vous répondez à un message. Le téléphone n'a pas oublié ce que vous faisiez par caprice. Il avait besoin de mémoire.

Sur Android, l'objectif n'est pas d'avoir le plus de RAM libre possible. Le système cherche à l'utiliser utilement, notamment pour garder des applications prêtes à reprendre. Le problème commence quand il ne reste plus assez de marge pour passer d'une tâche à l'autre sans accroc.

## Ce que fait Android sous pression

Android utilise le Low Memory Killer Daemon, ou lmkd, pour surveiller la pression mémoire. Quand la RAM devient insuffisante, lmkd classe les processus et ferme ceux dont Android peut le plus facilement se passer. Les applications en arrière-plan partent généralement en premier. Celles qui sont au premier plan sont censées être protégées, mais une pression sévère peut tout de même les fermer ou les faire planter.

Android 10 a ajouté la prise en charge des informations PSI du kernel, pour Pressure Stall Information. lmkd peut ainsi réagir aux blocages réellement provoqués par un manque de mémoire, plutôt qu'à de simples seuils de RAM libre. Les anciens systèmes s'appuyaient davantage sur le pilote low memory killer intégré au kernel. Ce pilote a été retiré du kernel Linux principal à partir de la version 4.12, ce qui explique pourquoi Android moderne utilise lmkd dans l'espace utilisateur.

Vous n'avez pas besoin de retenir tous ces détails. Dans la pratique, si Android ferme régulièrement des applications que vous veniez d'utiliser, vous subissez probablement une pression mémoire.

## Les signes d'un manque de RAM réellement utilisable

Le signe le plus clair est le rechargement des applications. Ouvrez Chrome, chargez une page, passez à Messages, puis revenez à Chrome. Si la page repart de zéro à chaque fois, Android a probablement fermé Chrome pendant qu'il était en arrière-plan.

D'autres indices sont moins évidents. Le lanceur se redessine lorsque vous revenez à l'écran d'accueil. Le clavier disparaît au milieu d'un message. Spotify s'arrête après l'ouverture de l'appareil photo. Un jeu redémarre après la consultation d'une notification. Un incident occasionnel est normal. Les voir toute la journée ne l'est pas.

Vous pouvez consulter la mémoire active dans les options pour les développeurs. Ouvrez **Paramètres > À propos du téléphone**, appuyez sept fois sur **Numéro de version**, puis revenez dans **Paramètres > Système > Options pour les développeurs** et ouvrez la section consacrée aux services en cours d'exécution. Le chemin exact varie selon la marque, mais cet écran présente les processus actifs et l'utilisation actuelle de la RAM.

Sur les appareils Samsung, vous pouvez aussi ouvrir **Paramètres > Batterie et maintenance appareil > Mémoire**. Les téléphones Xiaomi, Redmi et POCO proposent souvent une option **Extension de mémoire**, mais elle concerne surtout la RAM virtuelle et ne donne pas une vue directe de la pression exercée sur la RAM physique.

Ne vous focalisez pas sur un seul chiffre. Un téléphone qui n'affiche que quelques centaines de Mo libres n'est pas forcément défaillant. Android utilise volontairement la mémoire comme cache. Ce qui compte, c'est le comportement : rechargements constants, perte de l'état des applications et fermeture d'applications au premier plan.

## Pourquoi cela arrive

La quantité de RAM est la cause la plus évidente. Un téléphone doté de 4 Go peut encore gérer les appels, les messages, la navigation GPS et une utilisation légère du Web en 2026, mais sa marge est faible. Android, les Google Play services, le lanceur, le clavier, les applications de messagerie et la synchronisation en arrière-plan peuvent déjà en occuper une grande partie avant même que vous lanciez une application exigeante.

Les applications modernes sont aussi plus lourdes qu'autrefois. Un navigateur avec plusieurs onglets, Instagram ou TikTok, une application de navigation et une application musicale peuvent faire saturer un appareil doté de peu de RAM. Les modèles avec 6 Go disposent de davantage de marge. Pour la plupart des gens, 8 Go offrent un multitâche confortable. Au-delà de 12 Go, le gain est souvent plus limité, sauf pour les jeux exigeants ou le multitâche de type ordinateur.

Les services en arrière-plan comptent davantage qu'on ne le pense. Les applications de messagerie maintiennent des connexions ouvertes. Les applications de sport se synchronisent. Les applications de messagerie électronique vérifient les nouveaux messages. Les VPN analysent le trafic. Les lanceurs et widgets restent en mémoire pour être immédiatement disponibles. Aucun de ces usages n'est problématique isolément. Accumulez-les, et le téléphone finit par manquer d'air.

Les grandes mises à jour du système peuvent rendre le phénomène plus visible. Android 17 a été publié le 16 juin 2026 et déployé d'abord sur la plupart des Pixel compatibles. Les autres fabricants suivent leur propre calendrier. Après une mise à jour majeure, laissez au téléphone le temps de terminer les mises à jour d'applications et les tâches de nettoyage en arrière-plan avant de juger ses performances. Mais si 4 Go semblaient déjà justes sous Android 14 ou 15, Android 17 ne créera pas de mémoire supplémentaire.

## Ce qui aide vraiment

Ne passez pas votre journée à balayer toutes les applications hors de l'écran des applications récentes. Le geste donne l'impression d'agir, mais Android sait déjà récupérer la mémoire dont il a besoin. Forcer la fermeture de tout peut même conduire les applications à relancer leurs services quelques instants plus tard, avec une consommation de CPU et de batterie supérieure à celle qu'elles auraient eue si vous les aviez laissées tranquilles.

Limitez plutôt l'activité en arrière-plan. Ouvrez **Paramètres > Applications**, sélectionnez une application, puis cherchez les réglages liés à la batterie ou à l'utilisation en arrière-plan. Pour les applications rarement utilisées qui n'ont pas besoin de notifications immédiates, choisissez l'option la plus restrictive proposée. Les applications d'achat, les jeux, les services de voyage ou de livraison, les applications d'actualité et les réseaux sociaux dont vous n'attendez pas d'alertes en temps réel sont de bons candidats.

Désinstallez les applications inutilisées. Restreindre leur activité aide, mais les supprimer est plus propre. Moins d'applications signifie moins de services, moins d'inscriptions aux notifications push, moins de tâches de mise à jour et moins de pression sur le stockage.

Gardez de l'espace de stockage libre. Le manque de RAM et un stockage saturé sont deux problèmes distincts, mais ils apparaissent souvent ensemble sur les anciens téléphones. Si le stockage interne dépasse 85 à 90 %, faites du ménage. Un téléphone qui manque de RAM et dont le stockage est presque plein paraît plus lent que s'il ne souffrait que de l'un de ces problèmes.

Utilisez une version Lite ou le site Web quand cela a du sens. Sur un téléphone doté de peu de RAM, une session légère dans le navigateur peut demander moins de ressources qu'une application sociale complète avec vidéos en arrière-plan, notifications, widgets et médias mis en cache.

Réduisez ou désactivez les animations si le téléphone semble lent. Dans les options pour les développeurs, réglez les trois échelles d'animation, celles des fenêtres, des transitions et de la durée de l'animateur, sur 0,5x ou désactivez-les. Cela n'ajoute pas de RAM. Vous réduisez simplement l'attente visuelle entre deux actions, ce qui suffit parfois à rendre un téléphone limité plus supportable.

## La RAM virtuelle n'est pas de la vraie RAM

Samsung appelle cette fonction RAM Plus. Xiaomi parle d'Extension de mémoire. OnePlus et d'autres marques utilisent des noms similaires. Le principe est simple : le téléphone réserve une partie du stockage interne pour l'utiliser comme une mémoire d'échange.

Cette fonction peut éviter la fermeture de certaines applications sur les appareils dotés de peu de RAM. Elle ne rend pas le stockage aussi rapide que la RAM physique. Le stockage UFS est rapide pour du stockage, mais la RAM joue dans une autre catégorie. Sur un appareil limité en mémoire, la RAM virtuelle peut réduire les rechargements. Sur un téléphone équipé de 8 ou 12 Go, la différence est souvent difficile à percevoir.

Il existe aussi un compromis. Plus de RAM virtuelle signifie moins d'espace de stockage disponible, et les écritures répétées sur le stockage ont un coût. Je ne la désactiverais pas systématiquement, mais je n'achèterais pas non plus un téléphone parce que sa fiche technique annonce 8 Go + 8 Go de RAM virtuelle. Le premier chiffre compte bien davantage.

## Quand la solution est un nouveau téléphone

Si vous avez restreint les applications en arrière-plan, supprimé ce qui était inutile, libéré du stockage et que le téléphone recharge encore tout, le matériel est peut-être simplement trop limité pour votre usage.

Pour une utilisation basique, 4 Go restent utilisables si vous êtes patient et gardez le téléphone propre. Pour un multitâche normal, 6 Go constituent désormais un minimum pratique. Si vous comptez conserver le téléphone plusieurs années, 8 Go représentent un choix plus sûr. Les gros utilisateurs, les joueurs et les personnes qui gardent de nombreuses applications actives en même temps profiteront de 12 Go.

Une réinitialisation d'usine peut faire disparaître la pression mémoire pendant un temps, car le téléphone contient moins d'applications et son état en arrière-plan est plus propre. Puis vous réinstallez vos applications, vous reconnectez tous vos comptes, et le problème revient. Ce n'est pas un échec. C'est le téléphone qui montre sa limite.
