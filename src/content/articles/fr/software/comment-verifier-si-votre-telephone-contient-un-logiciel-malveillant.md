---
title: "Comment vérifier si votre téléphone contient un logiciel malveillant"
description: "Vous utilisez votre téléphone comme d'habitude, puis la batterie commence à se vider rapidement, des fenêtres publicitaires apparaissent sur l'écran d'accueil et une application inconnue, dont vous ne vous souvenez pas de l'installation, surgit dans la liste."
listSummary: "android, logiciels-malveillants et securite"
hub: "software"
sourceNumber: 125
order: 7
tags: ["android","logiciels-malveillants","securite","depannage","guide"]
locale: "fr"
draft: false
---
Cela ne prouve pas la présence d'un logiciel malveillant. Un téléphone peut aussi se comporter bizarrement lorsque son stockage est plein, qu'une application fonctionne mal ou qu'une mise à jour a échoué. Ces symptômes méritent tout de même une vérification.

Commencez par les explications les plus banales. Cherchez ensuite un éventuel logiciel malveillant.

## Signes à prendre au sérieux

Un seul symptôme suffit rarement. Un ensemble de signes est plus parlant.

La batterie est un bon point de départ. Ouvrez Paramètres > Batterie > Utilisation de la batterie et cherchez les applications qui consomment plus d'énergie qu'elles ne le devraient. Une application de navigation qui a utilisé beaucoup de batterie après un long trajet, c'est normal. Un lecteur de codes QR qui épuise la batterie pendant la nuit ne l'est pas.

Vérifiez aussi les données mobiles. Ouvrez Paramètres > Réseau et Internet > Utilisation des données, ou Paramètres > Connexions > Utilisation des données sur Samsung. Un logiciel malveillant qui envoie des données, télécharge des publicités ou communique avec un serveur de commande doit utiliser de la bande passante quelque part.

Les publicités qui apparaissent en dehors de l'application qui les a créées sont un signal plus inquiétant. Les annonces dans un jeu gratuit sont agaçantes. Des publicités flottant au-dessus de l'écran d'accueil, de l'écran de verrouillage ou de l'application Paramètres indiquent généralement la présence d'un adware.

Les applications inconnues sont un autre signe clair. Ouvrez Paramètres > Applications et parcourez toute la liste. Cherchez les noms génériques, les icônes vides, les utilitaires qui semblent dupliqués, les applications appelées par exemple « System Service » alors qu'elles ne viennent manifestement pas du fabricant, ou tout élément installé à peu près au moment où le problème a commencé.

La chaleur et les ralentissements peuvent compter, mais ne les interprétez pas trop vite. Un téléphone peut surchauffer à cause d'un mauvais signal, d'une application bloquée, d'une recharge en plein soleil ou d'une batterie défaillante. Un logiciel malveillant n'est qu'une cause possible, pas l'explication par défaut.

## Lancer une analyse Google Play Protect

Tous les téléphones Android certifiés par Google disposent de Google Play Protect. Ouvrez le Google Play Store > icône de votre profil > Play Protect, puis lancez l'analyse.

Vérifiez que l'option Analyser les applications avec Play Protect est activée. Activez également Améliorer la détection des applis dangereuses si vous installez des applications en dehors du Play Store, car cela aide Google à analyser plus en profondeur les applications inconnues.

Play Protect contrôle les applications lors de leur installation et analyse ensuite régulièrement l'appareil. Google indique que Play Protect analyse plus de 350 milliards d'applications Android par jour. Il peut vous avertir, désactiver une application ou supprimer automatiquement une application dangereuse.

C'est la première analyse à lancer. Elle n'est pas parfaite, mais elle est intégrée au téléphone et couvre aussi les applications installées en dehors du Play Store.

## Examiner les autorisations suspectes

Ouvrez Paramètres > Sécurité et confidentialité > Confidentialité > Gestionnaire d'autorisations. Sur certains téléphones, vous pouvez aussi passer par Paramètres > Applications, choisir une application, puis ouvrir Autorisations.

Examinez l'accès à l'appareil photo, au microphone, à la position, aux contacts, aux SMS, au téléphone, ainsi qu'aux fichiers ou aux contenus multimédias. La question est simple : l'application a-t-elle besoin de cette autorisation pour faire son travail ?

Une application de messagerie qui accède au microphone, c'est logique. Une calculatrice qui accède aux SMS ne l'est pas. Une application de fond d'écran disposant d'un accès aux fonctions d'accessibilité est suspecte, sauf si elle possède une fonction précise que vous comprenez.

Retirez toute autorisation qui vous paraît injustifiée. Si une application cesse de fonctionner parce que vous lui avez retiré un accès dont elle n'aurait jamais dû avoir besoin, désinstallez-la.

## Vérifier les installations récentes et les applications installées hors du Play Store

La plupart des logiciels malveillants Android commencent par l'installation d'une application. Il peut s'agir d'une application malveillante téléchargée depuis un site, d'une fausse demande de mise à jour, d'un APK modifié ou d'une mauvaise application passée entre les mailles d'un contrôle de boutique.

Ouvrez Google Play Store > icône de votre profil > Gérer les applications et l'appareil > Gérer, puis triez la liste par date de mise à jour ou d'installation récente. Comparez-la au moment où les symptômes ont commencé.

Inspectez plus attentivement les applications installées en dehors du Play Store. Sur de nombreux téléphones Android récents, la fiche d'une application indique sa provenance. Si la source est un navigateur, un gestionnaire de fichiers, une messagerie ou un programme d'installation inconnu, considérez le risque comme plus élevé.

Ne conservez pas des fichiers APK uniquement parce qu'ils ont été difficiles à trouver. C'est précisément ainsi qu'on finit par garder un logiciel douteux.

## Utiliser le mode sans échec

Le mode sans échec démarre Android avec les applications tierces désactivées. Si les fenêtres publicitaires, la surchauffe ou les comportements étranges en arrière-plan disparaissent dans ce mode, une application téléchargée est probablement responsable.

Sur de nombreux téléphones, maintenez le bouton d'alimentation, puis appuyez longuement sur Éteindre à l'écran et choisissez le mode sans échec. Sur Samsung, la même méthode affiche généralement Mode sécurisé. Certaines marques utilisent une autre combinaison de boutons, alors consultez les instructions de votre modèle si l'option n'apparaît pas.

Restez dans ce mode assez longtemps pour reproduire le problème. Redémarrez ensuite normalement et désinstallez les applications récentes ou suspectes une par une.

Commencez par les applications installées hors du Play Store, puis par les utilitaires qui demandent l'accès aux fonctions d'accessibilité, aux notifications, à l'administration de l'appareil, aux SMS ou à l'affichage par-dessus d'autres applications.

## Si une application refuse d'être désinstallée

Certaines applications malveillantes se rendent plus difficiles à supprimer en demandant des droits d'administration de l'appareil ou l'accès aux fonctions d'accessibilité.

Dans Paramètres, recherchez les applications d'administration de l'appareil. Retirez les droits d'administration de tout élément suspect, puis désinstallez-le.

Vérifiez aussi Paramètres > Accessibilité et retirez l'accès aux applications qui ne devraient pas l'avoir. Les fonctions d'accessibilité sont puissantes, car elles peuvent lire le contenu de l'écran et agir sur l'interface. Les gestionnaires de mots de passe et les outils d'accessibilité ont une raison de les utiliser. Une application de nettoyage, non.

Après la suppression, relancez Play Protect.

## Changer les mots de passe après une véritable infection

Si vous avez trouvé une application clairement malveillante, ne vous arrêtez pas à sa désinstallation.

Changez les mots de passe des comptes utilisés sur le téléphone, en particulier ceux de votre messagerie, de votre banque, des réseaux sociaux, du stockage dans le cloud et de votre gestionnaire de mots de passe. Faites-le si possible depuis un appareil sain.

Si l'application avait accès aux SMS, partez du principe que les codes à usage unique ont pu être exposés. Si elle avait accès aux fonctions d'accessibilité, supposez qu'elle a pu observer davantage de choses que ne le laisse penser sa liste d'autorisations.

## Rétablir la configuration d'usine lorsque le résultat n'est pas fiable

Un rétablissement de la configuration d'usine supprime presque tous les logiciels malveillants Android, car il efface les applications et les données installées par l'utilisateur. Sauvegardez d'abord les photos, les messages et les fichiers, mais ne restaurez pas ensuite exactement le même ensemble d'applications.

Après la réinitialisation, réinstallez manuellement les applications depuis Google Play. Évitez de restaurer des fichiers APK inconnus ou d'anciennes sauvegardes d'applications.

De rares logiciels malveillants peuvent survivre en exploitant un accès au niveau du système ou des composants préinstallés par le fabricant, mais ce n'est pas le cas habituel pour le grand public. Si les problèmes persistent après la réinitialisation sur un ancien téléphone qui n'est plus suivi, remplacer l'appareil est la solution la plus réaliste.

## Réduire les risques à l'avenir

Maintenez les correctifs de sécurité Android à jour. Utilisez Google Play ou une autre source de confiance pour vos applications. Laissez Play Protect activé. Méfiez-vous des liens vers des APK reçus par message, des fausses alertes du navigateur et des fenêtres « mettez cette application à jour maintenant » qui ne viennent ni du Play Store ni de l'outil de mise à jour du téléphone.

Et si un site affirme que votre téléphone est infecté et vous demande d'appuyer sur un bouton, fermez l'onglet. C'est une arnaque, pas un diagnostic.
