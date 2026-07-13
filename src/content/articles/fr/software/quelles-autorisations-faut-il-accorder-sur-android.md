---
title: "Quelles autorisations faut-il accorder sur Android ?"
description: "La règle la plus simple est la suivante : si l'autorisation ne correspond pas à la fonction que vous venez d'utiliser, refusez-la."
listSummary: "android, autorisations et confidentialite"
hub: "software"
sourceNumber: 127
order: 9
tags: ["android","autorisations","confidentialite","securite","guide"]
locale: "fr"
draft: false
---
Il est logique qu'une application photo demande l'accès à l'appareil photo. Une lampe torche qui réclame vos contacts, beaucoup moins. La plupart des décisions ne sont pas plus compliquées que cela.

Le problème, c'est le moment choisi. Une application vous interrompt alors que vous essayez de faire quelque chose, et le bouton Autoriser devient le choix le plus rapide. C'est ainsi que les autorisations inutiles s'accumulent.

## Les trois grandes catégories d'autorisations

Les autorisations Android se répartissent en trois grands groupes.

Les autorisations normales présentent peu de risques et sont généralement accordées automatiquement lors de l'installation. L'accès à Internet en est l'exemple le plus évident. Android ne vous affiche pas de fenêtre chaque fois qu'une application se connecte au réseau.

Les autorisations à l'exécution, appelées « autorisations dangereuses » dans une partie de la documentation Android, protègent des données ou du matériel susceptibles de révéler des informations privées. La position, l'appareil photo, le micro, les contacts, l'agenda, le téléphone, les SMS, les appareils à proximité et les contenus multimédias entrent dans cette catégorie. Ce sont les demandes que vous voyez pendant l'utilisation d'une application.

Les accès spéciaux sont plus puissants et nécessitent généralement un passage par les Paramètres. L'accessibilité, l'accès aux notifications, l'affichage par-dessus d'autres applications, l'administration de l'appareil, l'accès aux données d'utilisation, l'installation d'applications inconnues et l'accès à tous les fichiers appartiennent à cette catégorie pratique. Traitez-les avec davantage de méfiance qu'une demande ordinaire d'accès à l'appareil photo ou à la position.

Android 6 a introduit les autorisations à l'exécution. Sous Android 5.1 et les versions antérieures, les applications recevaient des autorisations étendues dès l'installation. Si un téléphone est encore bloqué sur une version aussi ancienne, le modèle d'autorisations n'est qu'une raison parmi d'autres de le remplacer.

## Position

L'accès à la position est utile, mais il est demandé trop souvent.

Les applications de cartographie, de météo, de VTC, de livraison, de sport et de navigation peuvent avoir une raison valable. Une calculatrice, un filtre de galerie, un lecteur de QR code ou une application de fonds d'écran n'en ont généralement pas besoin.

Limitez l'accès au moment où l'application est utilisée, sauf si une fonction de fond le justifie réellement. La navigation guidée, le suivi d'une course, la sécurité familiale et la localisation d'un appareil sont des exemples où l'accès en arrière-plan peut avoir du sens.

Choisissez la position approximative pour la météo, les contenus locaux, la disponibilité en magasin et toute fonction qui n'a pas besoin de vos coordonnées GPS exactes. Android 17 ajoute aussi un bouton de localisation fourni par le système que les applications compatibles peuvent intégrer. Lorsqu'il est utilisé, il accorde la position précise uniquement pour la session en cours, ce qui convient mieux à une action ponctuelle qu'un accès précis permanent.

## Appareil photo, micro et enregistrement

L'accès à l'appareil photo ou au micro devrait être parfaitement évident.

Les appels vidéo ont besoin des deux. Les messageries les utilisent pour les photos, les messages vocaux et les vidéos. Une application bancaire peut avoir besoin de l'appareil photo pour photographier un document ou lire un QR code.

S'il n'existe aucune fonction visible qui utilise l'appareil photo ou le micro, refusez la demande. Android affiche des indicateurs de confidentialité lorsqu'une application utilise l'un de ces capteurs. Depuis Android 12, le Tableau de bord Confidentialité permet aussi de consulter les accès récents à la position, à l'appareil photo et au micro.

Regardez ce tableau de bord de temps en temps. Il révèle les accès inattendus.

## Contacts

L'accès aux contacts est accordé beaucoup trop facilement.

Les messageries et réseaux sociaux le demandent pour retrouver des personnes que vous connaissez. C'est pratique, mais le service peut envoyer votre carnet d'adresses à ses serveurs ou le comparer à sa base. Vos contacts n'ont pas forcément accepté cela.

Android 17 améliore la situation avec un sélecteur de contacts fourni par le système. Une application compatible peut ainsi recevoir uniquement les contacts et les champs que vous choisissez, au lieu d'obtenir tout le carnet d'adresses. Utilisez cette option lorsqu'elle apparaît. Si l'application fonctionne sans accès aux contacts, je préfère généralement le refuser et ajouter les personnes manuellement.

## SMS et téléphone

L'accès aux SMS est particulièrement sensible. Il peut révéler des codes de vérification, des conversations privées et des messages de récupération de compte. Seule votre véritable application de messagerie devrait disposer d'un accès étendu aux SMS.

Certaines applications bancaires demandent à lire automatiquement les codes à usage unique. C'est pratique, mais la saisie manuelle limite l'accès. Si l'application fonctionne sans autorisation SMS, refusez-la.

L'autorisation Téléphone peut exposer l'état des appels, le numéro de téléphone ou d'autres données liées aux appels, selon l'application et la version d'Android. Les applications de téléphonie, de filtrage d'appels, de messagerie vocale et celles de l'opérateur peuvent avoir une raison de la demander. La plupart des autres applications, non.

## Fichiers, photos et contenus multimédias

Les autorisations de stockage ont beaucoup évolué selon les versions d'Android.

Les anciennes versions accordaient un accès très large au stockage. Android 13 a séparé l'accès aux images, aux vidéos et aux fichiers audio. Android 14 a ajouté l'accès limité aux photos et vidéos sélectionnées, afin que vous puissiez partager seulement certains éléments au lieu de toute la bibliothèque.

Choisissez toujours l'option la plus étroite. Donnez à un éditeur photo l'accès aux images sélectionnées, pas à toute votre photothèque. Donnez à une application musicale l'accès aux fichiers audio, pas à tous les fichiers. Soyez particulièrement prudent avec l'accès à l'ensemble du stockage, réservé à des usages centraux comme les gestionnaires de fichiers et les outils de sauvegarde.

## Appareils à proximité et Wi-Fi

Les autorisations Bluetooth et Appareils à proximité peuvent être légitimes. Les applications pour casques, objets domotiques, montres, enceintes et imprimantes en ont souvent besoin.

Android 13 a aussi introduit une autorisation dédiée aux appareils Wi-Fi à proximité pour les applications qui gèrent des connexions Wi-Fi sans avoir besoin de déduire votre position. C'est plus cohérent que d'accorder la position simplement pour rechercher une imprimante ou se connecter à un appareil local.

N'accordez tout de même pas cet accès à une application qui ne propose aucune fonction liée à un appareil proche.

## Accessibilité, superposition et administration

C'est la zone à haut risque.

L'accès aux fonctions d'accessibilité peut lire le contenu de l'écran, observer vos interactions et effectuer des actions à votre place. Il est indispensable aux véritables outils d'accessibilité, à certains gestionnaires de mots de passe, aux outils d'automatisation et à quelques applications d'assistance. Les logiciels malveillants l'exploitent aussi.

L'autorisation d'afficher par-dessus d'autres applications permet de superposer du contenu à l'écran. Les bulles de discussion et certains filtres d'écran l'utilisent. Les fausses fenêtres destinées à voler des informations également.

L'administration de l'appareil peut rendre une application plus difficile à supprimer. Les outils de gestion d'entreprise, de contrôle parental et d'antivol peuvent avoir une raison de l'utiliser. Un jeu, non.

Si un utilitaire de nettoyage inconnu demande l'un de ces accès, désinstallez-le.

## Vérifier les autorisations déjà accordées

Les autorisations ne sont pas définitives.

Sur Android standard en français, ouvrez Paramètres > Sécurité et confidentialité > Confidentialité > Gestionnaire d'autorisations. Sélectionnez Position, Appareil photo, Micro, Contacts, SMS, Téléphone, Fichiers ou une autre catégorie, puis retirez l'accès aux applications qui n'en ont pas besoin. Le chemin peut varier selon le fabricant.

Recherchez aussi les accès spécifiques des applications dans les Paramètres. Vérifiez notamment les services d'accessibilité, l'accès aux notifications, l'affichage par-dessus d'autres applications, les applications d'administration, l'installation d'applications inconnues, l'accès aux données d'utilisation et l'accès à tous les fichiers.

Depuis Android 11, le système peut réinitialiser automatiquement les autorisations des applications inutilisées depuis quelques mois. Sur les appareils équipés des services Google Play et fonctionnant sous Android 6 à Android 10, une fonction équivalente est fournie par Google Play Protect. C'est utile, mais cela ne remplace pas une vérification manuelle.

## Une méthode simple au moment de choisir

Lorsqu'une demande apparaît, posez-vous trois questions.

Cette autorisation correspond-elle à la fonction que je viens d'ouvrir ?

Puis-je choisir une option plus limitée, comme l'accès seulement pendant l'utilisation, la position approximative, quelques photos sélectionnées ou une autorisation ponctuelle ?

L'application fonctionnera-t-elle encore si je refuse ?

En cas de doute, refusez. L'application pourra demander de nouveau l'autorisation lorsque vous utiliserez une fonction qui en a réellement besoin.
