---
title: "Comment sauvegarder votre smartphone Android avant un dépannage"
description: "Sauvegardez le téléphone avant d’effacer les données d’une application, de réinitialiser les préférences, d’utiliser le mode de récupération ou de rétablir la configuration d’usine. Certaines manipulations sont sans danger. D’autres le sont seulement jusqu’au moment où un fichier local, un historique de conversation ou un code 2FA disparaît."
listSummary: "performances, vitesse et android"
hub: "device-health"
sourceNumber: 9
order: 5
tags: ["performances","vitesse","android","optimisation","depannage"]
locale: "fr"
draft: false
---
Une bonne sauvegarde n’a pas besoin d’être compliquée. Vous devez surtout savoir ce qu’Android enregistre déjà, ce qu’il laisse de côté et quelles applications exigent leur propre sauvegarde avant toute opération destructive.

## Ce que Google sauvegarde automatiquement

Lorsqu’un smartphone Android est connecté à un compte Google, certaines données sont déjà synchronisées hors de l’appareil. Les contacts enregistrés dans Google Contacts, les événements Google Agenda, Gmail et de nombreux paramètres d’applications Google réapparaissent après une réinitialisation lorsque vous vous reconnectez. Google Photos sauvegarde aussi les photos et vidéos si cette fonction est activée dans l’application.

La sauvegarde Google intégrée à Android couvre plus de choses qu’on ne l’imagine, mais moins que ce que beaucoup supposent. Elle peut inclure les applications et une partie de leurs données, l’historique des appels, les contacts, les paramètres de l’appareil ainsi que les SMS et MMS. Avec Google Messages, les messages RCS peuvent également être inclus. Avec Téléphone par Google, certains paramètres d’appel et les numéros bloqués peuvent aussi être restaurés.

Les données des applications restent la partie la moins prévisible. Android fournit un système de sauvegarde, mais chaque développeur peut limiter les données enregistrées ou désactiver cette fonction. Les applications bancaires, les applications d’authentification à deux facteurs et certains jeux ne se restaurent donc pas toujours comme vous l’attendez. Ce n’est pas nécessairement un dysfonctionnement de la sauvegarde. C’est une conséquence des règles choisies par l’application.

Les fichiers locaux sont un piège encore plus fréquent. Ne supposez pas que les téléchargements, PDF, enregistrements, documents, morceaux de musique ou fichiers stockés dans des dossiers d’applications seront tous repris par la sauvegarde de l’appareil. En février 2026, Google Play services v26.06 a ajouté sur les téléphones compatibles une fonction capable d’enregistrer automatiquement dans Google Drive certains documents téléchargés. Considérez-la comme une protection supplémentaire pour ces fichiers, pas comme une copie complète du stockage interne.

## Android 17 a changé le calendrier, pas la liste des vérifications

Le déploiement d’Android 17 a commencé le 16 juin 2026 sur les Pixel compatibles, par vagues selon l’appareil, la région et l’opérateur. Les autres smartphones Android éligibles suivent plus tard en 2026, selon leur fabricant et leur opérateur.

Deux téléphones placés côte à côte peuvent donc afficher des versions différentes pendant un certain temps. Un Pixel peut déjà utiliser Android 17 alors qu’un Samsung, OnePlus, Motorola ou Xiaomi attend encore sa mise à jour. La liste des éléments à sauvegarder reste la même, même si l’emplacement et l’intitulé des paramètres changent légèrement.

Sur de nombreux téléphones, commencez par Paramètres > Google > Tous les services > Sauvegarde. Sur certains Pixel, vous pouvez aussi voir un chemin plus court vers la rubrique Sauvegarde de Google. Sur Samsung Galaxy, commencez par Paramètres > Comptes et sauvegarde > Sauvegarder les données.

## Vérifiez la sauvegarde avant de dépanner

Ouvrez l’écran de sauvegarde et contrôlez deux choses : la fonction est-elle activée, et quand la dernière sauvegarde réussie a-t-elle eu lieu ? Si la date est ancienne, appuyez sur Sauvegarder maintenant et laissez l’opération se terminer avant de continuer.

Ne bâclez pas cette étape. Google indique qu’une sauvegarde ou une restauration complète peut prendre jusqu’à 24 heures, même si une petite sauvegarde finit souvent beaucoup plus vite. Avant une réinitialisation d’usine, attendez que l’écran confirme une sauvegarde récente et réussie. Ne partez pas du principe qu’elle s’est terminée en arrière-plan.

Si le téléphone reste bloqué sur un message d’attente, vérifiez d’abord les points simples. Connectez-le au Wi-Fi, branchez-le au chargeur, mettez à jour Google Play services et Google One si une mise à jour est proposée, puis contrôlez l’espace disponible sur votre compte Google. L’espace gratuit du compte est partagé entre Gmail, Google Drive et Google Photos, et peut se remplir plus vite que prévu.

## Copiez vous-même les fichiers locaux

Pour les fichiers stockés localement, une copie manuelle reste la solution de secours la plus sûre.

Reliez le téléphone à un ordinateur avec un câble USB-C. Lorsque la notification USB apparaît, appuyez dessus et choisissez le transfert de fichiers. Le stockage interne devrait alors être visible sur l’ordinateur.

Copiez les dossiers suivants s’ils existent :

- DCIM, pour les photos et vidéos prises avec l’appareil photo.
- Download, pour les PDF, billets, installateurs, formulaires et fichiers enregistrés depuis le navigateur.
- Documents, pour les fichiers créés ou enregistrés par les applications de productivité.
- Music et Recordings, si vous conservez des fichiers audio localement.
- Pictures et Movies, notamment si certaines applications enregistrent leurs médias en dehors de DCIM.
- Les dossiers de médias WhatsApp, s’ils sont présents. Sur les versions récentes d’Android, ils peuvent se trouver dans Android/media/com.whatsapp/WhatsApp/Media plutôt qu’à la racine du stockage interne.

Même si la sauvegarde Google Photos est active, conservez une copie locale de DCIM avant une réinitialisation d’usine. Je préfère ne pas confier des photos irremplaçables à un seul bouton de sauvegarde dans le cloud. Un mauvais compte, un quota saturé ou un dossier qui n’a jamais été sélectionné suffit à provoquer une perte définitive.

Les utilisateurs Samsung disposent d’une autre solution utile : Samsung Smart Switch. Installez Smart Switch sur un PC Windows ou un Mac, reliez le Galaxy par USB, choisissez la sauvegarde, puis vérifiez les catégories avant de commencer. Smart Switch peut copier notamment les appels, les contacts, les messages et certaines données d’applications, mais Samsung précise que tous les types de fichiers et tous les éléments ne sont pas pris en charge. Utilisez-le comme filet de sécurité général, pas comme l’unique copie de vos fichiers les plus importants.

## Sauvegardez séparément les applications de messagerie

Les applications de messagerie suivent leurs propres règles. Ne supposez pas qu’Android les gère toutes.

WhatsApp utilise son propre système. Ouvrez WhatsApp > Paramètres > Discussions > Sauvegarde des discussions, puis vérifiez le compte Google, la fréquence et la date de la dernière sauvegarde. Lors d’un changement de téléphone Android ou d’une restauration après effacement, les conversations ne reviennent que si la sauvegarde avait été activée avant la réinitialisation.

Les conversations ordinaires de Telegram sont conservées sur les serveurs du service et réapparaissent lorsque vous vous connectez. Les discussions secrètes fonctionnent autrement. Elles sont liées à l’appareil, ne font pas partie du cloud Telegram et ne sont pas transférées vers un autre téléphone.

Signal propose désormais plusieurs méthodes. Signal Secure Backups est une option chiffrée de bout en bout qui utilise une clé de récupération. Signal prend aussi en charge les sauvegardes locales Android, stockées sous forme d’archive chiffrée sur l’appareil. Pour cette deuxième méthode, copiez l’intégralité du dossier de sauvegarde Signal dans un endroit sûr et conservez la clé de récupération. Sans les deux, la sauvegarde ne pourra pas être restaurée.

## Protégez les applications d’authentification et les codes 2FA

C’est l’étape la plus souvent oubliée. C’est aussi celle qui peut vous fermer l’accès à vos comptes les plus importants.

Google Authenticator peut synchroniser les codes avec le compte Google actif dans l’application. Ouvrez Authenticator et vérifiez l’icône de compte en haut de l’écran. Si l’application fonctionne sans profil Google connecté, transférez les codes manuellement avant la réinitialisation : ouvrez le menu, choisissez le transfert de comptes, puis l’exportation, et scannez les codes QR avec un autre appareil.

Microsoft Authenticator propose une sauvegarde dans le cloud, mais une sauvegarde Android se restaure uniquement sur Android, et une sauvegarde iOS uniquement sur iOS. Ouvrez les paramètres de l’application, activez la sauvegarde dans le cloud et vérifiez le compte Microsoft personnel utilisé pour la récupération. Les comptes professionnels ou scolaires peuvent encore demander une nouvelle connexion après la restauration.

Authy prend en charge une sauvegarde chiffrée dans le cloud et la synchronisation entre plusieurs appareils mobiles. Vérifiez que la sauvegarde est activée et que vous connaissez son mot de passe. Authy ne peut pas le récupérer à votre place.

Pour chaque service protégé par la 2FA, conservez aussi les codes de récupération. Placez-les dans un gestionnaire de mots de passe ou imprimez-les et rangez-les dans un endroit privé. Une capture d’écran vaut mieux que rien, mais elle dépose également des informations de récupération sensibles dans votre photothèque, ce qui n’est pas toujours souhaitable.

## Quand une sauvegarde complète est-elle nécessaire ?

Vider le cache d’une application supprime des fichiers temporaires. Cette opération ne devrait pas effacer votre compte, vos documents, vos photos ni les données enregistrées par l’application. Pour ce seul geste, une sauvegarde complète n’est généralement pas nécessaire.

Effacer les données d’une application est différent. L’application revient à l’état d’une installation neuve. Des notes locales, téléchargements, sessions de connexion, cartes hors ligne, progressions de jeu et réglages propres à l’application peuvent disparaître. Sauvegardez d’abord cette application.

Le mode sans échec désactive temporairement les applications tierces pendant qu’Android fonctionne dans ce mode. Il ne les supprime pas. Après un redémarrage normal, elles devraient revenir. La sauvegarde reste facultative, sauf si le mode sans échec fait partie d’une opération plus large et plus risquée.

L’effacement de la partition cache, sur les téléphones qui proposent encore cette option, supprime des fichiers système temporaires depuis le mode de récupération. Les données personnelles devraient rester intactes, mais vous utilisez déjà une interface de dépannage de bas niveau. Sauvegardez d’abord si l’appareil est assez stable pour le faire.

Une réinitialisation d’usine efface le téléphone. Sans exception. Sur Samsung Galaxy, le chemin est généralement Paramètres > Gestion globale > Réinitialisation > Réinitialisation données d’usine. Sur Pixel et sur de nombreux appareils proches d’Android d’origine, ouvrez Paramètres > Système > Options de réinitialisation > Effacer toutes les données (rétablir la configuration d’usine). Ne commencez pas avant d’avoir contrôlé la sauvegarde Google, Google Photos, la copie des fichiers locaux, les messageries et les applications 2FA.

## Avant la réinitialisation, vérifiez FRP

Factory Reset Protection (FRP) est la protection antivol d’Android après réinitialisation. Au redémarrage, Android peut demander le verrouillage d’écran ou l’un des comptes Google déjà synchronisés sur le téléphone. Sans ces informations, vous pouvez rester bloqué pendant la configuration jusqu’à ce que la propriété de l’appareil soit vérifiée.

Avant d’aller jusqu’à la réinitialisation d’usine, confirmez l’adresse du compte Google présent sur le téléphone et testez son mot de passe dans un navigateur ou sur un autre appareil. Vérifiez aussi le code PIN, le schéma ou le mot de passe de déverrouillage du téléphone.

Ne supprimez pas votre compte Google uniquement pour éviter FRP si vous réinitialisez votre propre appareil dans le cadre d’un dépannage. Vous pourriez aussi perdre l’accès à la sauvegarde que vous comptiez restaurer. La préparation d’un téléphone destiné à être vendu ou donné est une autre procédure. Pour un dépannage, l’objectif est simple : confirmer les identifiants, terminer les sauvegardes, puis ne réinitialiser qu’après l’échec des solutions moins risquées.
