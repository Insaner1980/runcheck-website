---
title: "Comment vérifier si votre téléphone est compatible avec la 5G"
description: "Meta description : Comment savoir si un téléphone Android prend en charge la 5G, pourquoi l'icône 5G peut malgré tout ne pas s'afficher, et quel rôle jouent les bandes de fréquences, le forfait et l'opérateur."
listSummary: "reseau, connectivite et android"
hub: "network"
sourceNumber: 101
order: 12
tags: ["reseau","connectivite","android","depannage","guide"]
locale: "fr"
draft: false
---
Un téléphone possède le matériel nécessaire à la 5G, ou il ne le possède pas. Android 17, une mise à jour des paramètres de l'opérateur ou une nouvelle carte SIM ne peuvent pas transformer un modem limité à la 4G en modem 5G.

Cela paraît évident, mais c'est une source fréquente de confusion. De nombreux téléphones Android d'entrée de gamme récents restent limités à la 4G, alors que plusieurs anciens modèles haut de gamme sont déjà compatibles avec la 5G. Le numéro de modèle compte davantage que l'année indiquée sur la facture.

## Commencez par vérifier les paramètres réseau

Le moyen le plus rapide consiste à regarder dans les paramètres Android.

Sur un Pixel et de nombreux téléphones proches d'Android standard, ouvrez `Paramètres > Réseau et Internet > Cartes SIM`, sélectionnez votre SIM, puis cherchez `Type de réseau préféré`. Si une option contient `5G`, `NR` ou `5G/LTE`, le téléphone prend en charge la 5G avec cette version logicielle et ce profil d'opérateur.

Sur Samsung, vérifiez `Paramètres > Connexions > Réseaux mobiles > Mode réseau`.

Sur Xiaomi et POCO, vérifiez `Paramètres > Cartes SIM et réseaux mobiles > Type de réseau préféré`.

Sur OnePlus, cherchez `Réseau mobile` dans les paramètres, puis ouvrez les options de la SIM ou du type de réseau préféré.

Si l'option la plus élevée est LTE, 4G, 3G ou 2G, le téléphone est peut-être limité à la 4G. `Peut-être`, car certains opérateurs masquent les réglages 5G lorsque le forfait, la SIM ou la région ne les prend pas en charge. Les caractéristiques exactes du modèle permettent de trancher.

## Recherchez le numéro de modèle exact

Ouvrez `Paramètres > À propos du téléphone` et relevez le numéro de modèle, pas seulement le nom commercial. Un `Galaxy A55 5G` et une variante régionale d'un autre modèle de la série A peuvent prendre en charge des réseaux différents. C'est aussi le cas de nombreux téléphones Xiaomi, Motorola, OPPO et Vivo.

Commencez par rechercher ce numéro sur la page produit du fabricant. GSMArena peut être utile pour une vérification rapide, mais en cas de contradiction, la page du fabricant reste la meilleure référence.

Dans la section consacrée au réseau, cherchez les bandes `5G NR`. Parmi les bandes 5G sub-6 GHz, les déploiements français utilisent notamment les fréquences de 700 MHz, 2 100 MHz et 3,5 GHz, qui correspondent couramment aux bandes n28, n1 et n78. D'autres pays et opérateurs utilisent aussi des bandes comme n41, n71 ou n77. Les bandes mmWave, telles que n260 et n261, sont présentes dans moins de pays et seulement sur certaines variantes de téléphones.

Si la fiche technique ne mentionne que GSM, WCDMA, LTE ou des bandes 4G, le téléphone ne prend pas en charge la 5G.

## Un téléphone 5G a encore besoin de trois autres éléments

Le matériel n'est que la première étape.

Il faut aussi un forfait donnant accès à la 5G. Certains l'incluent automatiquement, d'autres non, notamment parmi les anciennes offres, certains forfaits prépayés, professionnels ou proposés par des MVNO.

Il faut une couverture 5G à l'endroit où vous vous trouvez. La carte de couverture de l'opérateur donne une indication, pas une garantie. La réception à l'intérieur peut être bien moins bonne qu'à l'extérieur, surtout avec les fréquences les plus élevées.

Enfin, les bandes doivent être compatibles. C'est le point le plus souvent oublié. Un téléphone importé d'une autre région peut prendre en charge la 5G dans un pays, mais pas les bandes utilisées par votre opérateur. Il peut donc être `compatible 5G` tout en se comportant comme un téléphone 4G sur votre réseau.

## Regardez la barre d'état, sans lui faire une confiance aveugle

Lorsque le téléphone est connecté à la 5G, la barre d'état affiche généralement `5G`. Selon le pays et l'opérateur, vous pouvez aussi rencontrer des mentions comme `5G+`. Les libellés `5G UW` et `5G UC` sont surtout employés par certains opérateurs aux États-Unis.

L'absence d'icône 5G ne signifie pas automatiquement que le téléphone n'est pas compatible. Vous pouvez être hors couverture, dans un bâtiment qui atténue le signal, sur un forfait limité à la 4G, avec un profil SIM inadapté, ou utiliser un appareil qui désactive la 5G sur l'un des emplacements SIM.

Si vous voyez un jour `5G E`, considérez qu'il s'agit d'un habillage commercial de la LTE, pas de véritable 5G. Aux États-Unis, AT&T a utilisé ce libellé pour un service 4G LTE amélioré, ce qui entretient la confusion depuis des années.

## Vérifiez le processeur, mais ne vous arrêtez pas là

Le SoC indique généralement si la 5G est au moins possible. Le Snapdragon 480 et les puces Qualcomm explicitement présentées comme compatibles 5G, de nombreux Snapdragon des séries 6, 7 et 8 Gen, les puces MediaTek Dimensity, les Samsung Exynos 1280 et modèles 5G plus récents de milieu ou haut de gamme, ainsi que toutes les puces Google Tensor, en sont des exemples courants.

Les noms de processeurs restent toutefois confus. Certaines puces Snapdragon de la série 600 sont limitées à la 4G. Certains téléphones utilisent une plateforme compatible 5G, mais sont commercialisés dans une variante 4G. Les modèles équipés d'une puce MediaTek Helio G sont généralement limités à la 4G, tandis que la gamme Dimensity correspond à l'offre 5G de MediaTek.

Utilisez donc le processeur comme indice, puis vérifiez le modèle complet du téléphone et ses bandes.

## Android 17 ne change pas la réponse matérielle

Android 17 a été publié en juin 2026 pour la plupart des Pixel compatibles, tandis que les nouveaux appareils et les autres fabricants suivent leur propre calendrier. La mise à jour peut améliorer le micrologiciel du modem, le comportement avec l'opérateur et la stabilité du réseau sur les téléphones compatibles.

Elle ne peut pas ajouter la 5G à un modem 4G. Si votre téléphone ne prenait pas en charge la 5G avant Android 17, il ne la prendra pas en charge après la mise à jour.

## 5G SA et NSA

Il existe deux grands modes de déploiement de la 5G.

La 5G NSA, ou Non-Standalone, associe la radio 5G à un cœur de réseau 4G. Cette approche a aidé les opérateurs à déployer la 5G plus rapidement.

La 5G SA, ou Standalone, utilise un cœur de réseau 5G. Elle peut réduire la latence, améliorer l'efficacité du réseau et préparer de futures fonctions, mais son déploiement reste inégal selon les opérateurs.

La plupart des personnes n'ont pas besoin de se préoccuper de la différence entre SA et NSA pour la navigation web, les cartes, la messagerie ou la vidéo. Elle compte davantage si votre opérateur transfère certaines fonctions vers la SA, si vous utilisez un ancien téléphone 5G ou si vous recherchez la latence la plus faible possible.

## Pourquoi votre téléphone 5G affiche toujours LTE

Procédez dans cet ordre :

- Vérifiez que `Type de réseau préféré` comprend 5G ou NR.
- Confirmez que votre forfait inclut la 5G.
- Consultez la carte de couverture de l'opérateur pour l'emplacement exact.
- Sortez ou approchez-vous d'une fenêtre pour écarter une mauvaise réception intérieure.
- Vérifiez que la ligne SIM ou eSIM est active et définie comme SIM de données.
- Voyez si le mode double SIM désactive la 5G sur votre modèle.
- Comparez les bandes 5G NR du téléphone avec celles de l'opérateur.
- Installez les mises à jour système et opérateur disponibles.

Si tout est correct et que le téléphone ne détecte toujours jamais la 5G, essayez une autre SIM du même opérateur ou demandez à celui-ci de réinitialiser le provisionnement de la ligne.

## Faut-il changer de téléphone pour la 5G ?

Parfois. C'est la réponse la plus honnête.

Dans une ville bien couverte en 5G sur les bandes intermédiaires, la différence de débit peut être nette. Les téléchargements se terminent plus vite, le partage de connexion devient plus agréable et la latence peut diminuer. Dans une zone rurale où la 5G est faible ou irrégulière, une bonne connexion 4G peut offrir une meilleure expérience qu'un téléphone qui bascule sans cesse entre LTE et 5G.

Si votre téléphone actuel fonctionne bien et que la couverture 5G est faible chez vous, ne le remplacez pas uniquement pour voir apparaître une icône. Tenez compte de l'ensemble du téléphone : batterie, appareil photo, durée du suivi logiciel, stockage, RAM et qualité du modem.
