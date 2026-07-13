---
title: "AccuBattery, DevCheck ou runcheck : quelle application de diagnostic choisir ?"
description: "Quelle application faut-il installer si votre téléphone Android chauffe, se décharge trop vite ou semble simplement ne plus fonctionner normalement ? La réponse agaçante est qu'AccuBattery, DevCheck et runcheck ne font pas vraiment le même travail."
listSummary: "comparaison, applications et android"
hub: "device-health"
sourceNumber: 139
order: 8
tags: ["comparaison","applications","android","guide-d-achat","test"]
locale: "fr"
draft: false
---
AccuBattery sert à suivre la capacité de la batterie sur la durée. DevCheck affiche des informations matérielles et des données système en direct. runcheck donne une vue plus large de l'état du téléphone en combinant batterie, température, réseau et stockage.

La nuance peut sembler excessive, jusqu'au moment où vous vous trouvez face au vendeur d'un smartphone d'occasion avec dix minutes pour prendre une décision. Là, elle devient utile.

## AccuBattery sert à suivre l'historique de la batterie

AccuBattery estime la quantité de charge que votre batterie peut encore contenir par rapport à sa capacité nominale d'origine. Pour cela, l'application enregistre les sessions de recharge et calcule le nombre de mAh transférés vers la batterie au fil du temps.

Elle affiche aussi la vitesse de recharge, la vitesse de décharge, la consommation écran allumé et écran éteint, le sommeil profond, l'usure estimée par session et une alarme de recharge que vous pouvez régler à 80 % ou à une autre limite. Pro supprime les publicités et donne accès à un historique plus ancien. Il s'agit d'un achat intégré dont le prix et les conditions peuvent varier selon la région, donc considérez les anciennes références tarifaires comme périmées.

La grande force d'AccuBattery est sa spécialisation. Pour vérifier si la batterie de 5 000 mAh de votre téléphone se comporte désormais plutôt comme une batterie de 3 900 mAh, c'est l'outil le plus direct de ce comparatif.

L'estimation reste toutefois limitée par les données fournies par le téléphone. BatteryManager peut rapporter le courant et le compteur de charge, mais les implémentations des fabricants sont irrégulières. Certains appareils fournissent des valeurs propres en microampères. D'autres les arrondissent, les lissent ou ne les exposent pas. Voilà pourquoi l'estimation peut se stabiliser après quelques sessions sur un téléphone et continuer à sauter sur un autre au point de vous faire douter du résultat.

AccuBattery a aussi besoin de temps. L'application n'est pas adaptée à une vérification rapide avant achat. Si vous inspectez un téléphone d'occasion dans un café, l'installer cinq minutes avant de payer ne vous apprendra presque rien.

## DevCheck sert à consulter les données matérielles en direct

Ouvrez DevCheck lorsque vous voulez des détails. L'application identifie le SoC, les cœurs du CPU et leurs fréquences en direct, le GPU, la RAM, le stockage, le matériel photo, les caractéristiques de l'écran, les capteurs, le Wi-Fi, le réseau mobile, le système d'exploitation et les mesures de batterie.

Sa fiche Play Store mentionne aussi la prise en charge de root et de Shizuku pour obtenir davantage d'informations système sur les appareils compatibles. Cela convient bien aux développeurs et aux utilisateurs avancés qui veulent voir plus que ce qu'affichent les Paramètres Android.

L'onglet batterie donne la tension, le courant, la température et la puissance en direct. L'onglet réseau montre le type de connexion et des détails sur le signal. L'onglet capteurs se met à jour en temps réel. Cela fait beaucoup d'informations.

Trop, pour certaines personnes.

DevCheck ne vous dira généralement pas si -82 dBm est acceptable dans votre situation, si 42 °C pose problème pendant la recharge ou si le téléphone est globalement en bon état. Il affiche les données et suppose que vous savez quoi en faire. Cela convient à un lecteur technique. Beaucoup moins à quelqu'un qui attend un verdict clair.

Pro ajoute des tests, des benchmarks, un suivi de la batterie, des widgets et des moniteurs flottants. La version gratuite reste assez utile pour que vous n'ayez aucune raison de payer immédiatement.

## runcheck sert à évaluer l'état général de l'appareil

runcheck examine quatre domaines : l'état de la batterie, la température, la connectivité et la pression sur le stockage. Il les combine dans un score d'état de 0 à 100, avec une pondération de 40 % pour la batterie, de 25 % pour la température, de 25 % pour le réseau et de 10 % pour le stockage.

Le score ne remplace pas les mesures détaillées. C'est un outil de triage. Si le téléphone est chaud, si le signal est mauvais, si le stockage est presque plein et si la batterie semble faible, vous ne devriez pas avoir à interpréter six écrans différents avant de comprendre l'essentiel.

runcheck considère aussi la fiabilité de la mesure comme une information à part entière. Le courant de la batterie est l'exemple le plus simple. Android peut exposer le courant instantané, mais les téléphones ne le rapportent pas tous avec la même qualité. runcheck indique si les mesures sont fiables, estimées ou indisponibles selon ce que l'appareil fournit réellement.

Cela paraît secondaire, mais change la manière de lire le chiffre. « 420 mA » semble précis. « 420 mA, estimation » vous indique qu'il ne faut pas surinterpréter la valeur.

La version gratuite couvre les quatre mêmes domaines. Pro est un achat unique sans abonnement. Il ajoute la comparaison des chargeurs, l'utilisation des applications, un historique étendu, les journaux de bridage thermique, les widgets, l'export CSV et un suivi plus approfondi. Tout le traitement s'effectue sur l'appareil et aucun compte n'est requis.

runcheck ne sert pas à identifier le matériel. Il ne vous donnera ni le modèle du capteur photo ni l'architecture du GPU. Associez-le à DevCheck si vous avez besoin de ces informations.

## Les fonctions qui se chevauchent

Les trois applications peuvent afficher l'état de base de la batterie et sa température. AccuBattery et DevCheck montrent toutes deux le comportement pendant la recharge et la décharge. DevCheck et runcheck abordent tous deux le réseau et les données thermiques, mais de manière différente.

Le chevauchement est plus faible qu'il n'y paraît.

AccuBattery est la seule des trois construite autour d'une estimation de capacité basée sur les sessions de recharge. DevCheck est la seule centrée sur des informations détaillées concernant les composants et le système. runcheck est la seule organisée autour d'un score d'état combiné accompagné d'indicateurs de confiance.

Vous pouvez installer les trois, mais cela en vaut rarement la peine. Vous obtiendrez plusieurs fois la température de la batterie et davantage de services en arrière-plan que nécessaire.

## La version d'Android et le modèle comptent

Sur les anciens téléphones sous Android 10 ou Android 11, les informations natives sur l'état de la batterie sont souvent absentes. AccuBattery devient alors plus utile, car le système vous donne peu d'alternatives.

Sur le Pixel 8a et les modèles ultérieurs, les versions actuelles du logiciel Pixel proposent Paramètres > Batterie > État de la batterie pour l'état et Paramètres > À propos du téléphone > Informations sur la batterie pour le nombre de cycles et d'autres détails. Cela ne signifie pas que tous les téléphones sous Android 17 possèdent les mêmes pages. Android 17 a d'abord été rendu disponible sur la plupart des Pixel compatibles, et les autres fabricants choisissent eux-mêmes les données qu'ils exposent dans leur interface.

Les informations thermiques connaissent la même fragmentation. L'API d'état thermique est arrivée avec Android 10 et thermal headroom avec Android 11. runcheck peut utiliser ces API lorsqu'elles sont disponibles, mais les anciens téléphones et certaines versions modifiées par les OEM exposent encore moins de données qu'on ne pourrait l'espérer.

En pratique, un logiciel plus récent aide, mais ne rend pas les diagnostics Android uniformes. Cela n'a jamais été le cas.

## Vérifier un smartphone d'occasion

Pour un téléphone d'occasion, DevCheck est généralement la plus rapide des trois pour vérifier les caractéristiques. Vous pouvez confirmer le SoC, la RAM, l'écran, le stockage et les informations sur les caméras assez vite pour repérer les incohérences évidentes d'une annonce.

runcheck convient mieux à une vérification rapide de l'état général. Batterie, température, stockage et réseau comptent tous au moment de décider si le téléphone vaut son prix. Vous n'obtiendrez pas plusieurs semaines d'historique, mais vous pourrez voir si quelque chose paraît anormal à cet instant.

AccuBattery est la moins adaptée à ce scénario précis. Elle a besoin d'un historique de recharge. Installez-la après l'achat, pas pendant l'inspection.

## Que faut-il installer ?

Si le vieillissement de la batterie est votre principale préoccupation, installez AccuBattery et laissez-lui assez de temps pour construire une estimation sérieuse.

Pour les détails matériels, choisissez DevCheck. C'est l'application à garder pour les développeurs, les personnes qui s'intéressent aux réparations et celles qui veulent connaître le nom exact du SoC.

Pour une vue d'ensemble pratique, installez runcheck. Associez-le à DevCheck lorsque les informations sur les composants comptent aussi.

Pour la plupart des utilisateurs, runcheck et DevCheck forment la combinaison la plus utile au quotidien. AccuBattery conserve tout son intérêt lorsque le suivi de la capacité de la batterie est la priorité absolue.

*Méta-description : Comparaison d'AccuBattery, DevCheck et runcheck selon le suivi de la batterie, les informations matérielles, la compatibilité avec les versions d'Android et les usages pratiques du diagnostic.*
