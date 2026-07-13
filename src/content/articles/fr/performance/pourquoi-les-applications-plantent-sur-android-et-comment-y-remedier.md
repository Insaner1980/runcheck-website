---
title: "Pourquoi les applications plantent sur Android, et comment y remédier"
description: "Les applications Android plantent pour des raisons précises. Apprenez à déterminer si le problème vient d'une seule application, de WebView, d'un manque de RAM ou de stockage, ou d'une mise à jour récente d'Android."
listSummary: "Les applications Android plantent pour des raisons précises."
hub: "performance"
sourceNumber: 77
order: 14
tags: ["performances","vitesse","android","optimisation","depannage"]
locale: "fr"
draft: false
---
---

La plupart des plantages d'applications ne sont pas aléatoires. Ils en donnent l'impression parce que vous ne voyez pas l'erreur qui les a déclenchés.

Une application plante lorsqu'elle rencontre une situation dont elle ne sait pas se remettre. Android la ferme, parfois avec un message indiquant qu'elle s'arrête systématiquement, parfois sans rien afficher. Une application qui plante au lancement ne présente pas le même problème qu'une autre qui se ferme après dix minutes. Et une seule application instable n'a rien à voir avec la moitié du téléphone qui plante en même temps.

Voilà l'idée : n'essayez pas de réparer « Android » dans son ensemble. Cherchez le schéma commun.

## Une seule application plante sans arrêt

Commencez par son cache. Sur Pixel et de nombreux appareils proches d'Android standard, ouvrez **Paramètres > Applications > Afficher toutes les applis > [nom de l'application] > Espace de stockage et cache > Vider le cache**. Sur Samsung, le chemin est généralement **Paramètres > Applications > [nom de l'application] > Stockage > Vider le cache**.

Vider le cache supprime des fichiers temporaires. Cette opération ne vous déconnecte pas et n'efface pas les données de votre compte. L'application plante encore ? Vous pouvez vider son espace de stockage ou effacer ses données, mais arrêtez-vous un instant avant de le faire. Cela réinitialise l'application. Pour WhatsApp, Signal, les applications de notes, les cartes hors connexion, les téléchargements musicaux ou les jeux dont les sauvegardes sont locales, effacer les données sans sauvegarde peut supprimer des éléments importants.

Mettez ensuite l'application à jour. Ouvrez Google Play, recherchez-la et installez toute mise à jour disponible. Si les plantages ont commencé juste après une mise à jour, consultez les avis récents sur le Play Store. Lorsque des dizaines de personnes signalent le même problème avec la même version, la correction devra probablement venir du développeur.

Désinstallez puis réinstallez l'application si elle refuse toujours de fonctionner correctement. La manipulation est peu passionnante, mais elle reconstruit proprement le paquet de l'application et ses fichiers locaux. Elle marche plus souvent qu'on ne le croit.

## Plusieurs applications ont commencé à planter en même temps

Lorsque plusieurs applications sans rapport entre elles plantent le même jour, soupçonnez un composant Android qu'elles partagent. Android System WebView est l'exemple classique.

WebView permet aux applications d'afficher du contenu Web sans vous envoyer dans un navigateur. Les applications de messagerie électronique, de shopping ou de banque, les écrans d'aide, les procédures de connexion et les applications d'actualité peuvent toutes en dépendre. En mars 2021, une mauvaise mise à jour de WebView a provoqué des plantages massifs jusqu'à ce que Google diffuse des correctifs pour WebView et Chrome.

Commencez donc par mettre à jour WebView et Chrome. Ouvrez Google Play, recherchez Android System WebView et installez la mise à jour, puis faites de même pour Google Chrome. Si WebView vient d'être mis à jour juste avant le début des plantages et qu'aucun correctif n'est encore disponible, la désinstallation des mises à jour de WebView peut servir de solution provisoire sur certains appareils. Elle doit rester temporaire, car WebView est un composant sensible pour la sécurité.

Les Google Play services peuvent provoquer des problèmes tout aussi étendus lorsqu'ils sont obsolètes ou bloqués. Mettez-les à jour si Google Play vous le propose, puis redémarrez le téléphone après la mise à jour des composants système.

## Plantages dus au manque de RAM ou de stockage

Une application peut planter lorsqu'elle demande plus de mémoire qu'Android ne peut lui en fournir. Le système ferme parfois discrètement une application en arrière-plan. Dans d'autres cas, c'est celle que vous utilisez qui s'effondre.

Le phénomène est courant sur les téléphones de 3 ou 4 Go qui font tourner des applications modernes. Les jeux, les éditeurs vidéo, les applications photo et les navigateurs chargés de nombreux onglets sont les premiers concernés. Une application de messagerie peut fonctionner toute la journée, puis planter lorsque vous tentez de joindre une vidéo volumineuse, simplement parce que cette action exige soudain plus de mémoire.

Un stockage presque plein peut aussi ressembler à un bug d'application. Les applications ont besoin de place pour leurs caches, téléchargements, bases de données et mises à jour. Quand le stockage interne est presque saturé, ces écritures peuvent échouer. Libérer 1 ou 2 Go suffit parfois à arrêter les plantages sur un téléphone à l'étroit, mais mieux vaut conserver au moins 10 à 15 % de stockage libre.

Ouvrez **Paramètres > Stockage**. Supprimez les vidéos volumineuses, les anciens téléchargements, les doublons, les applications inutilisées et les fichiers APK dont vous n'avez plus besoin. Videz aussi la corbeille des applications de galerie ou de gestion de fichiers lorsqu'elles conservent les éléments supprimés pendant 30 jours.

## Plantages après une mise à jour d'Android

Une mise à jour majeure du système modifie l'environnement dans lequel fonctionne chaque application. Android 17 est l'exemple actuel : Google l'a publié le 16 juin 2026 et l'a d'abord déployé sur la plupart des Pixel compatibles. Les autres fabricants suivent leur propre calendrier. Si une application était déjà à la limite de la compatibilité, une mise à jour majeure peut rapidement le révéler.

Mettez vos applications à jour après celle du système. Mettez ensuite à jour WebView, Chrome, les Google Play services et l'application qui plante. Redémarrez une fois. Si la mise à jour vient juste d'être installée, laissez quelques heures au téléphone, car Android peut encore optimiser les applications et reconstruire des caches en arrière-plan.

Si une seule application plante sous Android 17, son développeur doit probablement l'adapter. Vider le cache ou les données peut aider lorsque d'anciens fichiers locaux sont en cause, mais cela ne corrigera pas un code incompatible avec la nouvelle version d'Android.

Si de nombreuses applications plantent après la mise à jour, recherchez un correctif système du fabricant. Les utilisateurs de Pixel doivent vérifier les mises à jour mensuelles. Samsung, Xiaomi, OnePlus, OPPO et les autres marques diffusent les correctifs dans leurs propres canaux, souvent à un autre rythme que Google.

## Le mode sans échec indique si une autre application intervient

Le mode sans échec démarre Android en désactivant les applications téléchargées. Il ne les supprime pas. Il fournit simplement un environnement plus propre pour effectuer un test.

Sur Pixel, ouvrez le menu Marche/Arrêt, maintenez **Éteindre** ou **Redémarrer**, puis validez le passage en mode sans échec. Sur Samsung, éteignez le téléphone, rallumez-le et maintenez le bouton de volume bas lorsque le logo Samsung apparaît. Sur Xiaomi, le libellé et le moment exact varient, mais de nombreux modèles utilisent aussi le bouton de volume bas pendant le démarrage.

Si les plantages disparaissent en mode sans échec, une application téléchargée interfère avec le système. Redémarrez normalement, puis désinstallez en priorité les applications récentes ou particulièrement intrusives : nettoyeurs, économiseurs de batterie, antivirus, VPN, lanceurs personnalisés, outils d'automatisation et applications disposant d'une autorisation d'accessibilité.

Si les plantages continuent en mode sans échec, le problème vient plus probablement du logiciel système, du stockage, du matériel ou d'une application préinstallée.

## Quand une application se bloque au lieu de planter

Un message indiquant qu'une application ne répond pas correspond à un ANR, pour Application Not Responding. L'application n'a pas encore planté. Android vous avertit simplement qu'elle n'a pas répondu assez vite.

Pour une action de l'utilisateur, le délai ANR par défaut est de 5 secondes. Les BroadcastReceiver ont des délais différents selon leur priorité et la version d'Android. Sous Android 14 et versions ultérieures, un intent prioritaire au premier plan dispose généralement de 10 à 20 secondes, tandis qu'un intent en arrière-plan peut disposer de 60 à 120 secondes. Pour vous, la sensation reste la même : vous appuyez, vous attendez, et rien ne se passe.

Choisissez d'attendre lorsqu'une opération mérite d'être sauvegardée, par exemple pendant l'exportation d'une vidéo ou l'envoi d'un gros fichier. Fermez l'application si elle est manifestement bloquée. Des ANR répétés dans la même application indiquent souvent qu'elle effectue trop de travail sur son thread principal, attend une requête réseau lente ou se bat avec un manque de mémoire.

## Ce qu'il ne faut pas installer

N'installez pas d'application prétendant réparer les plantages, augmenter la RAM ou améliorer la stabilité. Elle ne peut pas corriger le code d'une autre application. Dans le meilleur des cas, elle vide des caches et force la fermeture d'applications en arrière-plan. Dans le pire, elle ajoute un service permanent à un téléphone qui manque déjà de mémoire.

Les solutions utiles sont peu spectaculaires : mettre l'application à jour, vider son cache, n'effacer ses données que lorsque c'est sans risque, la réinstaller, libérer du stockage, tester le mode sans échec et attendre le développeur ou le fabricant lorsque le bug vient de leur côté.

Les plantages n'endommagent pas le téléphone. Ils peuvent toutefois vous faire perdre un travail non enregistré. S'ils surviennent pendant l'enregistrement de photos, de notes ou de documents, cessez de faire confiance à l'application tant que vos données ne sont pas sauvegardées.
