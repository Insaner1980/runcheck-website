---
title: "Qu'est-ce qu'Android System WebView et pourquoi faut-il le mettre à jour ?"
description: "Pourquoi un composant système que vous n'ouvrez jamais reçoit-il autant de mises à jour ? Parce qu'Android System WebView affiche discrètement du contenu Web à l'intérieur d'autres applications, et que ce contenu est complexe, évolue vite et touche directement à la sécurité."
listSummary: "Pourquoi un composant système que vous n'ouvrez jamais reçoit-il autant de mises à jour ?"
hub: "software"
sourceNumber: 129
order: 11
tags: ["android","mises-a-jour","securite","logiciel","guide"]
locale: "fr"
draft: false
---
Vous n'appuyez probablement jamais sur une icône WebView. La plupart des gens ne le font pas. Pourtant, lorsqu'une application de messagerie ouvre une page de connexion, qu'un réseau social affiche un article sans vous faire quitter l'application ou qu'une application bancaire charge un écran d'authentification basé sur le Web, WebView peut assurer le rendu en arrière-plan.

## Ce que fait réellement WebView

Les applications Android n'ont pas besoin d'intégrer un moteur de navigateur complet chaque fois qu'elles doivent afficher une page Web. WebView leur fournit un composant partagé pour rendre du HTML, du CSS, du JavaScript, des images, des formulaires, des pages de connexion, des articles d'assistance, des flux de paiement et d'autres outils Web intégrés.

Il repose sur Chromium, le projet de navigateur open source qui sert aussi de base à Chrome. C'est important, car les pages Web modernes ne sont plus de simples documents. Elles exécutent du JavaScript, chargent des contenus multimédias, conservent l'état d'une session, suivent des redirections et utilisent des protections de sécurité qui évoluent constamment.

Prenons un exemple simple : vous ouvrez un lien d'aide dans une application d'achat. L'application pourrait vous envoyer dans Chrome, mais beaucoup préfèrent garder la page dans leur propre interface et la rendre avec WebView. L'expérience paraît plus fluide, mais WebView se retrouve alors exposé au contenu Web chargé par l'application.

## Pourquoi il se met à jour séparément d'Android

WebView est un composant système pouvant être mis à jour depuis Android 5 Lollipop. Google peut donc distribuer une nouvelle version du fournisseur WebView par Google Play sans attendre une mise à jour complète du système d'exploitation préparée par chaque fabricant.

Cette séparation reste utile aujourd'hui. Android 17 est disponible depuis le 16 juin 2026 sur la plupart des Pixel compatibles, tandis que les nouveaux appareils et les autres fabricants suivent leur propre calendrier. Les correctifs WebView n'ont pas à attendre ce déploiement téléphone par téléphone. Un appareil Samsung ou Xiaomi qui n'est pas encore passé à Android 17 peut tout de même recevoir les mises à jour WebView par Google Play s'il est encore pris en charge et utilise les services Google Play.

Sur de nombreux appareils sous Android 7, 8 et 9, Chrome servait de fournisseur WebView actif. Sous Android 10 et les versions suivantes, Android System WebView est normalement le composant distinct que vous voyez dans Google Play et dans la liste des applications. Les détails peuvent différer sur les appareils atypiques, les ROM personnalisées et les versions d'Android dépourvues de Google Play.

## Pourquoi les mises à jour sont si fréquentes

WebView traite du contenu provenant du Web ouvert. Cela en fait une cible intéressante.

Une faille dans WebView peut avoir davantage de conséquences qu'un bug dans une application ordinaire, car de nombreuses applications utilisent le même composant. Un problème de rendu peut casser les pages de connexion. Une faille de sécurité peut donner plus de marge à une page malveillante chargée dans une application. Un problème de compatibilité peut faire planter plusieurs applications sans rapport apparent le même jour.

Cela s'est déjà produit. En mars 2021, une mauvaise mise à jour de WebView a provoqué des plantages généralisés d'applications Android, dont Gmail et d'autres services importants. Google a corrigé le problème avec de nouvelles versions de WebView et Chrome. L'incident était pénible, mais il a aussi montré l'intérêt d'un composant pouvant être corrigé par Google Play au lieu de rester figé dans le système.

En juin 2026, les notes publiques des services système de Google indiquaient Android WebView v150, daté du 17 juin 2026. La fiche stable d'Android System WebView dans Google Play avait été mise à jour le 29 juin 2026. Ne considérez pas ce numéro comme une version à atteindre pour toujours. WebView avance en permanence, et les déploiements progressifs expliquent que deux téléphones puissent afficher temporairement des versions différentes.

## Que se passe-t-il si WebView n'est pas à jour ?

La sécurité est la principale raison de s'en préoccuper. WebView traite du contenu Web non fiable à l'intérieur des applications, donc les failles connues ne devraient pas rester sans correctif plus longtemps que nécessaire.

Les symptômes peuvent aussi être très concrets. Une version obsolète ou défectueuse peut afficher des pages intégrées entièrement blanches, faire tourner les écrans de connexion en boucle, bloquer un paiement, déformer une page d'aide ou provoquer un plantage lorsqu'une application tente d'afficher une vue Web. Si plusieurs applications qui chargent du contenu Web tombent en panne en même temps, WebView devient un suspect sérieux.

Ne lui attribuez pas tous les problèmes pour autant. Si une seule application plante et que le reste du téléphone fonctionne, mettez d'abord cette application à jour. Videz son cache. Redémarrez le téléphone. WebView est plus plausible lorsque le problème traverse plusieurs applications.

## Comment le mettre à jour

Sur la plupart des téléphones équipés d'Android 10 ou d'une version ultérieure avec Google Play, WebView se met à jour automatiquement par le Play Store.

Pour vérifier manuellement, ouvrez Google Play Store, appuyez sur l'icône de votre profil, puis sur Gérer les applications et l'appareil. Sous Mises à jour disponibles, ouvrez les détails et cherchez Android System WebView. Installez la mise à jour si elle est proposée.

Vous pouvez aussi rechercher directement Android System WebView dans Google Play. Si le bouton Mettre à jour apparaît, utilisez-le. Si vous ne voyez qu'Ouvrir, Désinstaller les mises à jour ou aucun bouton de mise à jour, votre téléphone dispose probablement déjà de la version disponible pour son canal de déploiement.

Pour consulter la version installée, ouvrez la fiche d'Android System WebView dans la liste des applications des Paramètres. Il peut être nécessaire d'afficher les applications système. Certains téléphones indiquent aussi le fournisseur WebView dans les options pour les développeurs, mais la plupart des utilisateurs n'ont aucune raison de modifier ce réglage.

Si la mise à jour semble bloquée, commencez par les solutions ordinaires : redémarrez le téléphone, mettez à jour les services Google Play et Chrome, puis videz le cache du Play Store. N'installez pas un APK WebView trouvé au hasard, sauf si vous savez précisément ce que vous faites. Un paquet incompatible avec votre appareil peut créer davantage de problèmes qu'il n'en résout.

## Faut-il désactiver ou désinstaller WebView ?

Non, pas sur un téléphone Android moderne.

Android System WebView est un composant système. Il n'est généralement pas possible de le désinstaller complètement, mais vous pouvez parfois désinstaller ses mises à jour ou le désactiver selon la version d'Android et le fabricant. Revenir à une ancienne version supprime des correctifs de sécurité. Le désactiver peut casser les navigateurs intégrés, les écrans de connexion, les pages d'aide embarquées et d'autres parties d'applications qui utilisent du contenu Web.

Il existe des exceptions. Sur certains appareils plus anciens sous Android 7 à Android 9, Chrome peut assurer le rôle de WebView, ce qui explique qu'Android System WebView apparaisse désactivé. C'est normal sur ces versions. Sous Android 10 et les versions suivantes, gardez WebView activé et à jour.

## Que faire si WebView provoque des problèmes ?

Si plusieurs applications se mettent soudain à planter ou à afficher des pages blanches, mettez à jour Android System WebView et Chrome depuis Google Play, puis redémarrez le téléphone.

Si le problème a commencé immédiatement après une mise à jour de WebView et rend le téléphone presque inutilisable, la désinstallation des mises à jour de WebView peut servir de retour temporaire. Ouvrez la fiche d'Android System WebView dans les Paramètres, puis cherchez l'option de désinstallation des mises à jour dans le menu. Temporaire est le mot important. Réinstallez la version corrigée dès que Google la propose, car conserver un ancien WebView est un mauvais compromis.

Pour les défauts d'affichage, vider le cache de WebView peut aider. Dans la fiche de l'application, ouvrez la rubrique de stockage et commencez par vider le cache. Effacer le stockage est une mesure plus forte et rarement nécessaire, mais elle reste bien moins destructrice que la réinitialisation complète du téléphone.

WebView est conçu pour rester discret. Lorsqu'il fonctionne bien, vous ne le remarquez pas. Autant le garder dans cet état.
