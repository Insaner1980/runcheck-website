---
title: "Que sont les mises à jour du système Google Play ?"
description: "Ouvrez l'écran des mises à jour de votre téléphone Android et vous verrez probablement deux dates différentes. L'une correspond au niveau du correctif de sécurité Android. L'autre indique la date d'une mise à jour modulaire de Google."
listSummary: "Ouvrez l'écran des mises à jour de votre téléphone Android et vous verrez probablement deux dates différentes."
hub: "software"
sourceNumber: 124
order: 6
tags: ["android","mises-a-jour","securite","logiciel","guide"]
locale: "fr"
draft: false
---
Cela ressemble à une erreur. En général, ce n'en est pas une.

Il s'agit de deux canaux distincts. Le niveau du correctif de sécurité arrive par le fabricant du téléphone, par exemple Google, Samsung, Xiaomi, OnePlus ou Motorola. L'autre date provient du système modulaire de mise à jour d'Android de Google, sur les appareils compatibles.

## En bref

Ces mises à jour Mainline corrigent certaines parties d'Android sans attendre une mise à jour complète du système fournie par le fabricant.

Elles ne remplacent pas les mises à jour Android normales. Elles ne font pas passer votre téléphone d'Android 16 à Android 17. Elles ne corrigent pas toutes les vulnérabilités. Mais Google peut ainsi mettre à jour certains composants du système d'exploitation par le même grand canal de diffusion que Google Play.

C'est utile, car une mise à jour Android suit une longue chaîne. Google publie le code. Les fabricants de puces et de téléphones l'intègrent. Les opérateurs peuvent le tester. La mise à jour arrive enfin sur le téléphone. Pour certains composants, le canal modulaire contourne une partie de cette chaîne.

## Fonctionnement de Project Mainline

La technologie s'appelle Project Mainline, également désignée par l'expression composants système modulaires dans la documentation Android. Elle est apparue avec Android 10.

Mainline divise certaines parties d'Android en modules. Certains sont des modules APK, qui se comportent davantage comme des paquets d'application. D'autres sont des modules APEX, capables d'être chargés plus tôt au démarrage et de gérer des composants plus profonds du système.

Le point important est l'installation atomique. Si un ensemble de mises à jour de modules ne peut pas s'installer proprement, Android revient à la version précédente au lieu de laisser le téléphone dans un état partiellement mis à jour.

C'est très bien. Ici, mieux vaut que tout soit ennuyeux.

## Ce qui peut être mis à jour

La liste exacte des modules dépend de la version d'Android et de la configuration de l'appareil. Ne vous attendez donc pas à trouver les mêmes composants sur tous les téléphones. Les versions récentes d'Android comprennent en général davantage d'éléments modulaires qu'Android 10.

On trouve notamment des composants réseau, la résolution DNS, la gestion des contenus multimédias, certains composants liés aux autorisations, Conscrypt pour TLS, la gestion des portails captifs, l'interface des documents, le partage de connexion et certaines parties d'Android Runtime sur les versions compatibles.

Ce ne sont pas des éléments décoratifs. Une faille dans le framework multimédia peut toucher de nombreuses applications. Un défaut dans un composant TLS peut affecter les connexions chiffrées de tout l'appareil. Mettre à jour ces éléments par un canal modulaire peut apporter des correctifs à bien plus de téléphones que d'attendre que chaque fabricant livre un paquet OTA complet.

## Comment vérifier la date

Sur de nombreux téléphones Android récents, ouvrez Paramètres > Sécurité et confidentialité > Système et mises à jour, puis Mise à jour du système Google Play.

Sur Samsung, cherchez cette même entrée dans Paramètres > Sécurité et confidentialité > Mises à jour, ou dans Paramètres > À propos du téléphone > Informations sur le logiciel.

Le chemin change parce que les fabricants réorganisent les Paramètres. Si vous ne trouvez pas l'entrée, ouvrez la recherche des Paramètres et saisissez son nom.

Vous pouvez toucher l'entrée pour rechercher une mise à jour. Si Android demande ensuite un redémarrage, acceptez. Certaines mises à jour fondées sur APEX ne prennent effet qu'après le redémarrage du téléphone.

## Pourquoi la date peut sembler ancienne

La date affichée n'est pas simplement celle de la dernière correction appliquée. Elle peut représenter la version d'un ensemble de modules, et toutes les mises à jour de modules ne font pas avancer cette date de façon évidente.

La date du système Google Play peut donc rester antérieure à celle du correctif de sécurité Android sans que le téléphone soit défectueux. Je commencerais à m'inquiéter seulement si les deux dates sont anciennes, ou si le téléphone n'a installé aucune mise à jour système depuis des mois et ne figure plus sur la liste de suivi du fabricant.

Le plus frustrant, c'est qu'Android ne fournit pas aux utilisateurs ordinaires un journal clair, module par module. Vous obtenez surtout une date et un bouton de redémarrage.

## Quels téléphones les reçoivent ?

Ce canal de mise à jour dépend du système modulaire d'Android et des services Google. En pratique, il concerne la plupart des téléphones Android certifiés par Google sous Android 10 ou une version plus récente.

Les téléphones dépourvus des services Google ne bénéficient pas du même canal de diffusion géré par Google. Certains partenaires Android peuvent mettre à jour des modules Mainline au moyen de leur propre mécanisme OTA, mais ce n'est pas la même chose que le canal Google d'un téléphone certifié.

Les anciennes versions d'Android comportent aussi moins de composants modulaires. Un téléphone sous Android 10 peut profiter de Mainline, mais sa couverture n'est pas celle d'un appareil plus récent sous Android 16 ou Android 17.

## Ce que ces mises à jour ne peuvent pas corriger

Mainline ne peut pas tout corriger.

Ces mises à jour ne réparent pas le kernel, sauf si le correctif concerné passe par un canal modulaire compatible. Elles ne mettent pas à jour le firmware propriétaire du modem, de l'appareil photo, du GPU ou du Wi-Fi. Elles ne corrigent pas non plus les applications système propres au fabricant ni le code du fournisseur. Enfin, elles ne prolongent pas la période de suivi officielle du fabricant.

Le canal modulaire est donc utile. Non, il ne rend pas de nouveau totalement sûr un téléphone abandonné.

## Mises à jour du système Google Play et Google Play Services

Les noms se ressemblent beaucoup trop, ce qui entretient la confusion.

Google Play Services est un framework au niveau des applications. Les applications l'utilisent pour la connexion aux comptes, les API de localisation, les notifications, certaines fonctions de compte, les contrôles de sécurité et d'autres services soutenus par Google. Il se met à jour comme une application.

Le système de mise à jour, lui, gère des modules du système d'exploitation. Il intervient plus profondément dans Android.

Les deux viennent de Google. Les deux peuvent être mis à jour sans paquet OTA complet du fabricant. Ils n'agissent pas au même niveau.

## Que faire de cette information ?

Maintenez les deux canaux à jour. Installez les mises à jour Android normales fournies par le fabricant et vérifiez de temps en temps l'écran de la mise à jour du système Google Play.

Si votre téléphone reçoit encore les correctifs du fabricant, une date du système Google Play légèrement plus ancienne n'est généralement qu'un détail sans conséquence. S'il ne reçoit plus rien par aucun des deux canaux, considérez qu'il arrive à la fin de sa période d'utilisation quotidienne sûre.
