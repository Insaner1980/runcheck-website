---
title: "Comment tester le NFC sur Android"
description: "Méthodes simples pour vérifier le fonctionnement du NFC sur un téléphone Android avec les Paramètres, une carte sans contact, Google Wallet, les diagnostics Samsung, Xiaomi CIT et des applications de test NFC."
listSummary: "diagnostic, capteurs et android"
hub: "hardware"
sourceNumber: 115
order: 12
tags: ["diagnostic","capteurs","android","materiel","guide"]
locale: "fr"
draft: false
---
Vous approchez le téléphone d'un terminal de paiement et rien ne se passe. Vous avez maintenant deux problèmes : le paiement a échoué et vous ne savez pas si le NFC, Google Wallet, la carte, la coque ou le terminal est responsable.

Commencez plus simplement. Le NFC se teste facilement lorsque vous séparez la lecture matérielle du paiement.

## Vérifiez que le téléphone possède le NFC

Ouvrez les Paramètres et recherchez NFC. Sur de nombreux téléphones Android, le chemin est Paramètres > Appareils connectés > Préférences de connexion > NFC. Sur Samsung, ouvrez Paramètres > Connexions > NFC et paiements sans contact, puis vérifiez l'application de paiement sélectionnée sur cette page.

Si l'option NFC n'apparaît pas, le téléphone ne possède probablement pas de puce NFC. Cela reste courant sur les appareils Android d'entrée de gamme, surtout lorsqu'un même modèle existe en plusieurs variantes régionales. Une version peut intégrer le NFC alors qu'une autre, presque identique par son nom, en est dépourvue.

Activez le NFC avant le test. Vérifiez aussi l'application de paiement par défaut si vous testez Google Wallet, Samsung Pay ou Samsung Wallet, selon la région et le modèle du téléphone.

## Testez avec une carte sans contact

C'est le test matériel le plus simple. Utilisez une carte bancaire sans contact, une carte de transport, un badge professionnel ou un tag NFC. Plaquez-la contre le dos du téléphone et déplacez-la lentement dans la moitié supérieure de l'appareil.

Si le NFC fonctionne, le téléphone vibre généralement, émet un son, ouvre une demande liée au portefeuille ou affiche un message indiquant qu'un tag est inconnu. Chacune de ces réactions indique que le lecteur et l'antenne NFC répondent.

Rien ne se passe ? Retirez la coque et recommencez. Les plaques métalliques, les supports magnétiques, les anneaux de maintien et les coques portefeuille épaisses peuvent bloquer ou affaiblir le NFC. La portée est courte, un simple changement de position peut donc faire la différence.

## Testez avec un terminal de paiement

Un paiement sans contact réussi est un bon test en conditions réelles, car il vérifie davantage que la simple lecture d'un tag. Le NFC doit être activé, le portefeuille pris en charge, la carte valide, le verrouillage de l'écran configuré et la bonne application choisie par défaut.

Pour Google Wallet, Google recommande d'ouvrir Paramètres > Appareils connectés > Préférences de connexion > NFC, puis Paiements sans contact, et de choisir Google Wallet comme application de paiement par défaut. Sur les téléphones Samsung, les réglages équivalents se trouvent dans Connexions, sur la page NFC et paiements sans contact.

Si la lecture des tags fonctionne mais pas le paiement, la puce NFC n'est probablement pas en cause. Vérifiez la configuration du portefeuille, la compatibilité de la banque et de la carte, le verrouillage de l'écran, les services Google Play, l'intégrité de l'appareil et l'application de paiement par défaut.

## Utilisez un menu ou une application de diagnostic

La voie officiellement prise en charge par Samsung passe par Samsung Members > Assistance > Diagnostics du téléphone. Un test NFC séparé n'est pas proposé sur tous les modèles, mais l'application peut contrôler de nombreux composants et vous orienter vers une réparation en cas d'échec.

Les téléphones Xiaomi, Redmi et POCO incluent souvent le NFC dans la suite CIT. Ouvrez l'application Téléphone et saisissez `*#*#6484#*#*`, ou essayez `*#*#64663#*#*` si le premier code ne fonctionne pas. Dans le test NFC, placez une carte ou un tag près du téléphone et attendez le résultat.

Les modèles Fairphone ont déjà proposé un test NFC manuel dans un menu de maintenance, mais les codes varient selon la génération. Utilisez de préférence la procédure officielle correspondant exactement à votre modèle.

Pour un contrôle rapide par application, NFC Check indique si Android détecte le matériel NFC et s'il est activé. NFC Tools est plus adapté si vous voulez lire des tags et afficher leur identifiant, leur technologie et leurs enregistrements NDEF.

## Trouvez l'emplacement de l'antenne

L'antenne NFC ne se trouve pas toujours au même endroit.

Sur de nombreux Samsung Galaxy S, elle est située dans la partie supérieure du dos, près des appareils photo. Sur les Pixel, elle se trouve généralement dans la zone supérieure arrière. Son emplacement varie davantage entre les modèles Xiaomi et OnePlus.

C'est pourquoi un téléphone peut fonctionner lorsque vous placez la bosse de l'appareil photo contre le lecteur, tandis qu'un autre ne réagit que lorsque le milieu du dos le touche. Si le manuel de votre modèle contient un schéma de l'antenne NFC, fiez-vous à ce document plutôt qu'à un conseil générique.

## Raisons courantes d'un échec du NFC

La coque bloque le signal. C'est banal, mais fréquent. Testez le téléphone sans coque avant de modifier les réglages.

Vous utilisez le mauvais point de contact. Déplacez lentement la carte ou le téléphone. Ne l'agitez pas comme si vous lisiez un code-barres.

Le NFC est désactivé ou le mauvais portefeuille est sélectionné. Recherchez NFC et Paiements sans contact dans les Paramètres.

Le téléphone est verrouillé alors que le portefeuille demande une authentification. Certaines versions d'Android lisent les tags lorsque l'écran est allumé, mais exigent un déverrouillage pour les paiements. Testez séparément la lecture simple et le paiement.

Une mise à jour récente a modifié le comportement. Android 17 a d'abord été proposé aux Pixel compatibles, tandis que les autres marques Android publieront plus tard leurs propres versions d'Android 17. Si un problème NFC apparaît juste après une mise à jour Pixel, recherchez les informations d'assistance propres aux Pixel au lieu de supposer que le même problème touche Samsung, Xiaomi ou OnePlus.

Le téléphone a été réparé. L'antenne NFC fait souvent partie de la coque arrière, de la bobine de charge sans fil ou d'un assemblage flexible. Si le NFC a cessé de fonctionner après le remplacement de la batterie ou de la coque arrière, l'antenne a peut-être été mal reconnectée.

## Quand le matériel est probablement hors service

Si le NFC est activé, que la coque est retirée, que plusieurs cartes et tags ne provoquent aucune réaction, que le mode sans échec ne change rien et qu'une application de diagnostic ne détecte toujours aucune activité NFC, une panne matérielle devient probable.

La puce peut tomber en panne, mais l'antenne est plus souvent endommagée. Les chutes, l'eau, les réparations de la coque arrière et les câbles flexibles mal fixés sont autant de causes possibles.

La vraie question est alors de savoir si la réparation vaut son coût. Si vous payez sans contact tous les jours, elle peut se justifier. Si le téléphone est ancien et fonctionne bien par ailleurs, une montre connectée compatible avec le paiement sans contact peut représenter une solution moins chère.
