---
title: "Comment vérifier votre version d’Android"
description: "Votre téléphone affiche déjà sa version d’Android. Il faut simplement savoir quel numéro regarder."
listSummary: "Votre téléphone affiche déjà sa version d’Android."
hub: "software"
sourceNumber: 119
order: 1
tags: ["android","mises-a-jour","securite","logiciel","guide"]
locale: "fr"
draft: false
---
Sur la plupart des appareils, ouvrez Paramètres, puis À propos du téléphone, puis Version d’Android. Sur un Samsung, utilisez Paramètres > À propos du téléphone > Informations sur le logiciel. Cet écran ne donne pas seulement le grand numéro du système : il affiche aussi la date de la mise à jour de sécurité Android, celle de la mise à jour du système Google Play, le numéro de version et parfois la version logicielle propre au fabricant.

C’est le détail que beaucoup oublient. Android 17 est plus récent qu’Android 16, bien sûr, mais un correctif de sécurité à jour compte tout autant pour juger si un téléphone reste sûr à utiliser.

## Vérifier la version dans les Paramètres

Sur la plupart des téléphones Android :

1. Ouvrez Paramètres.
2. Appuyez sur À propos du téléphone ou À propos de la tablette.
3. Ouvrez Version d’Android si les informations ne sont pas déjà visibles.
4. Vérifiez la version d’Android, la mise à jour de sécurité Android, la mise à jour du système Google Play et le numéro de version.

Samsung place ces informations dans Informations sur le logiciel, à l’intérieur de À propos du téléphone. OnePlus les regroupe souvent sur la page consacrée à l’appareil. Sur les téléphones Xiaomi, Redmi et POCO, le point de départ est généralement Paramètres > À propos du téléphone, puis les détails sont répartis entre la page de la plateforme et les écrans Xiaomi HyperOS.

C’est tout. Vraiment.

## Ce que signifie réellement la version

Le numéro principal désigne la génération majeure d’Android installée sur le téléphone. En juillet 2026, Android 17 est la version majeure la plus récente. Google l’a d’abord déployée sur la plupart des Pixel compatibles, tandis que les nouveaux téléphones et les mises à jour des autres fabricants suivent leur propre calendrier.

Pour les développeurs, chaque version du système correspond à un niveau d’API. La correspondance actuelle est Android 17/API 37, Android 16/API 36, Android 15/API 35, Android 14/API 34 et Android 13/API 33. Vous n’avez pas besoin de la mémoriser, mais elle explique pourquoi une application peut déclarer votre téléphone trop ancien alors qu’il s’allume et fonctionne encore correctement.

Le numéro de version, ou build, est plus précis. Il identifie la version logicielle exacte installée. Deux téléphones peuvent fonctionner sous Android 17 tout en ayant des builds différentes selon la région, la validation de l’opérateur, le canal bêta ou les modifications du fabricant.

## La surcouche du fabricant compte aussi

Samsung ne livre pas simplement un Android « pur ». La marque ajoute One UI. One UI 9 correspond à la génération Android 17 de Samsung, mais en juillet 2026 la version officiellement annoncée reste en phase bêta sur les Galaxy S26 sur certains marchés. Un utilisateur de Galaxy S26 inscrit au programme bêta peut donc voir cette plateforme avant une personne qui utilise un ancien Galaxy sur le canal stable.

Les téléphones Xiaomi, Redmi et POCO utilisent Xiaomi HyperOS. Le numéro d’HyperOS renseigne sur l’interface et les fonctions propres à Xiaomi, mais ne révèle pas toujours clairement la base Android. Consultez la page détaillant la plateforme avant de supposer qu’une version HyperOS 3.x ou une build ultérieure repose sur le même Android sur tous les modèles.

Les Pixel sont plus simples. L’écran À propos du téléphone réunit le numéro de plateforme, le correctif de sécurité et l’identifiant de build. Un Pixel compatible ayant reçu la version stable lancée en juin 2026 peut afficher Android 17, tandis qu’un appareil inscrit au programme bêta peut utiliser une build QPR bêta.

## Vérifier sans passer par le chemin normal des Paramètres

Les codes de l’application Téléphone peuvent afficher des informations sur le firmware de certains appareils, mais leur fonctionnement est irrégulier. Sur les modèles compatibles, `*#1234#` peut montrer les informations AP, CP et CSC d’un Samsung. Le menu de test `*#*#4636#*#*` fonctionne sur certains téléphones Android, mais de nombreux fabricants le désactivent.

Si vous maîtrisez ADB et que le téléphone a déjà autorisé votre ordinateur, ces commandes sont plus précises :

```bash
adb shell getprop ro.build.version.release
adb shell getprop ro.build.version.sdk
adb shell getprop ro.build.version.security_patch
```

Elles renvoient la version du système, le niveau d’API et la date du correctif. C’est utile pour les tests, les réparations ou la vérification d’un téléphone dont les menus ont été fortement personnalisés.

## Pourquoi la version compte

La compatibilité des applications est la raison la plus évidente. Les applications définissent une version minimale de la plateforme. Lorsque votre téléphone passe sous ce seuil, le Play Store peut bloquer l’installation ou cesser de proposer les mises à jour.

La sécurité est une raison encore plus importante. Les mises à jour de sécurité Android sont suivies séparément de la version majeure. Un téléphone sous Android 16 avec un correctif récent est généralement plus sûr qu’un appareil sous Android 17 avec un correctif ancien. La date indique depuis combien de temps l’appareil n’a pas reçu de corrections de vulnérabilités.

Les fonctions dépendent aussi de la plateforme. Android 12 a introduit les couleurs dynamiques de Material You. Android 13 a ajouté les langues par application. Android 14 a renforcé plusieurs règles de confidentialité et de fonctionnement en arrière-plan. Android 17 ajoute App Bubbles, le mode Picture-in-Picture interactif dans les environnements de type bureau, un Contact Picker qui limite l’accès des applications aux contacts choisis, ainsi qu’un bouton de localisation affiché par le système pour accorder la position précise uniquement pendant la session en cours.

Si une fonction manque sur votre téléphone, la génération du système peut en être la cause. Ou le fabricant peut simplement avoir décidé de ne pas l’intégrer. Android est compliqué comme ça.

## Version de la plateforme et date du correctif sont deux choses différentes

Le numéro de plateforme correspond à la génération majeure. Le correctif de sécurité est une date, par exemple 2026-06-05. Les deux évoluent séparément.

Un téléphone peut fonctionner sous Android 15 avec des corrections de vulnérabilités récentes. Un autre peut déjà prendre du retard sur les correctifs alors qu’il utilise Android 17. Pour savoir si vous pouvez continuer à utiliser un appareil en sécurité, regardez les deux.

## Peut-on effectuer la mise à jour manuellement ?

Commencez par Paramètres > Système > Mises à jour logicielles. Sur Samsung, le chemin officiel est Paramètres > Mise à jour du logiciel > Téléchargement et installation. Si le fabricant a publié une mise à jour pour votre modèle exact, votre région et la variante validée par votre opérateur, elle devrait apparaître à cet endroit.

Vous ne pouvez pas installer une version officielle d’Android que le fabricant n’a pas publiée pour votre appareil. Les propriétaires de Pixel peuvent installer manuellement des images OTA officielles avec ADB, et les utilisateurs de Samsung peuvent flasher un firmware officiel avec Odin, mais ces méthodes sont techniques et le choix d’une mauvaise build présente un risque réel. Les ROM personnalisées sont une autre possibilité pour certains téléphones, sans être l’équivalent d’une mise à jour officielle.
