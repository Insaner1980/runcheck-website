---
title: "Comment fonctionne le stockage flash NAND des smartphones, et pourquoi il ralentit"
description: "Le stockage des smartphones utilise de la mémoire flash NAND. Voici pourquoi un stockage plein réduit les performances, à quoi servent TRIM et le garbage collection, et comment préserver de bonnes performances d'E/S du stockage (storage I/O)."
listSummary: "Le stockage des smartphones utilise de la mémoire flash NAND."
hub: "storage"
sourceNumber: 89
order: 11
tags: ["performances","vitesse","android","optimisation","depannage"]
locale: "fr"
draft: false
---
Votre téléphone peut disposer d'un SoC rapide et de beaucoup de RAM, tout en devenant poussif lorsque son stockage est presque plein. Les applications marquent une pause avant de s'ouvrir. L'appareil photo met un peu plus de temps à enregistrer une image. Les mises à jour durent plus longtemps qu'elles ne le devraient.

Le processeur n'est pas toujours responsable. Le stockage peut être le goulot d'étranglement.

## Ce que fait la mémoire flash NAND

Les smartphones stockent les applications, photos, messages, caches et données système sur des puces de mémoire flash NAND soudées à la carte mère. Un téléphone vendu avec 128 GB ne vous laisse jamais utiliser les 128 GB en entier, car Android, les partitions système, les données de récupération, l'espace réservé et les métadonnées du système de fichiers en occupent déjà une partie.

La NAND enregistre les données sous forme de charges électriques dans de minuscules cellules. Ces cellules sont organisées en pages, elles-mêmes regroupées dans de plus grands blocs d'effacement. Le point délicat est le suivant : la NAND peut écrire dans une page vide, mais elle ne peut pas écraser directement une page déjà utilisée.

Pour modifier une donnée, le contrôleur écrit la nouvelle version ailleurs, marque l'ancienne page comme invalide et actualise sa table de correspondance. Plus tard, pendant le nettoyage, il rassemble les pages encore valides d'un bloc, les déplace si nécessaire, puis efface l'ancien bloc afin de pouvoir le réutiliser.

Ce processus s'appelle le garbage collection. Il est normal. C'est aussi l'une des raisons pour lesquelles un téléphone presque plein semble plus lent que le même appareil disposant d'une marge confortable.

## Pourquoi un stockage plein ralentit le téléphone

Quand le stockage possède beaucoup de blocs vides, l'écriture est simple. Le contrôleur choisit une zone propre et poursuit son travail.

À l'approche de la saturation, il reste moins de blocs immédiatement disponibles. Le contrôleur doit chercher de la place, déplacer des données encore valides, effacer des blocs, puis seulement écrire les nouvelles données. Ce travail interne supplémentaire s'appelle l'amplification d'écriture et peut se traduire par de petites pauses au quotidien.

Vous pouvez le remarquer pendant l'installation d'applications, l'enregistrement de vidéos, le téléchargement de mises à jour ou le passage entre des applications qui conservent de gros caches. Un téléphone dont le stockage est utilisé à 95 % peut sembler bien plus ancien qu'il ne l'est réellement.

La règle pratique est simple : essayez de garder au moins 15 à 20 % du stockage interne libre. Ce n'est pas une formule magique et les contrôleurs ne réagissent pas tous de la même manière, mais cette marge donne à Android et au contrôleur l'espace nécessaire pour travailler.

## TRIM, garbage collection et périodes d'inactivité

La suppression d'un fichier n'efface pas immédiatement chaque cellule NAND qui le contenait. Android marque le fichier comme supprimé dans le système de fichiers. Le contrôleur doit encore savoir quels blocs physiques peuvent être nettoyés.

TRIM fournit cette information. Sur Android, le processus d'entretien passe par `fstrim` et les opérations de maintenance du stockage pendant les périodes d'inactivité. Le système indique ainsi à la couche de stockage quels blocs ne sont plus nécessaires, afin que le garbage collection puisse les récupérer plus tard.

C'est pour cela qu'après un grand nettoyage, laisser le téléphone branché et inutilisé peut aider. Vous supprimez les fichiers, Android obtient l'occasion de lancer sa maintenance et le contrôleur peut réorganiser le stockage. N'attendez pas un miracle au bout de cinq minutes. Le travail se fait en arrière-plan.

Non, il ne faut pas défragmenter le stockage d'un smartphone. La défragmentation était utile pour les disques durs mécaniques. Sur de la NAND, elle provoque des écritures inutiles sans résoudre le vrai problème.

## SLC, MLC, TLC et QLC, simplement

Les cellules NAND peuvent stocker des quantités différentes de données.

La SLC stocke un bit par cellule. Elle est rapide et endurante, mais trop coûteuse pour le stockage ordinaire des smartphones.

La MLC stocke deux bits par cellule. Elle était plus courante dans les anciens stockages haut de gamme, mais des NAND plus denses l'ont largement remplacée.

La TLC stocke trois bits dans une même cellule. Elle est fréquente dans le stockage grand public moderne, car elle offre un compromis acceptable entre coût, capacité et vitesse pour un smartphone.

La QLC stocke quatre bits. Elle est plus dense et moins chère par gigaoctet, mais son endurance est inférieure. Les fabricants de téléphones indiquent rarement le type exact de cellule NAND, n'essayez donc pas de le déduire uniquement de la capacité annoncée.

Plus une cellule contient de données, plus la lecture des niveaux de tension et la correction d'erreurs doivent être précises. C'est le compromis. Les contrôleurs modernes masquent l'essentiel de cette complexité grâce à la répartition de l'usure, à l'ECC, à l'espace de réserve et aux caches.

## La différence entre UFS et eMMC compte plus qu'on ne le croit

L'interface de stockage est aussi importante que la NAND elle-même.

Beaucoup d'anciens smartphones Android et de modèles d'entrée de gamme utilisent de l'eMMC. Cette solution est simple et économique, mais elle gère moins bien les charges lourdes et le multitâche. Les composants eMMC 5.1 de Samsung, par exemple, annonçaient à leur lancement jusqu'à 250 MB/s en lecture séquentielle et 125 MB/s en écriture séquentielle.

L'UFS est la norme plus récente pour le stockage des smartphones. Elle prend en charge la mise en file des commandes et le fonctionnement en duplex intégral, ce qui améliore l'efficacité des lectures et écritures sous charge. Les appareils en UFS 3.1 annoncent couramment des lectures séquentielles proches de 2 100 MB/s. L'UFS 4.0 a doublé la valeur maximale affichée pour atteindre 4 200 MB/s en lecture séquentielle sur le premier stockage UFS 4.0 annoncé par Samsung.

Ce sont des résultats séquentiels obtenus dans les meilleures conditions, pas la promesse que chaque application s'ouvrira deux fois plus vite. La différence reste néanmoins réelle. Un téléphone bon marché équipé d'eMMC peut ralentir davantage lors des mises à jour, des installations d'applications ou des rafales photo, même si son processeur paraît correct sur la fiche technique.

## À quoi ressemble l'usure du stockage ?

La NAND s'use à mesure que les blocs subissent des cycles de programmation et d'effacement. Le contrôleur répartit les écritures afin qu'une même zone ne meure pas prématurément. C'est la répartition de l'usure.

Dans un usage normal, cette usure met généralement des années à devenir importante. Les gens remplissent le stockage, installent des mises à jour, filment et vident des caches bien avant que l'endurance de la NAND soit la cause principale des ralentissements. Les charges d'écriture intensives sont différentes. Un appareil utilisé en permanence pour la journalisation, l'enregistrement vidéo ou des tests peut user son stockage plus vite.

Android n'affiche pas pour la plupart des utilisateurs un pourcentage clair d'« état du stockage ». Certains outils de maintenance des fabricants montrent davantage de détails, mais rien n'est uniforme. Les symptômes sont moins nets : installation d'applications lente, enregistrement de fichiers très long, blocages pendant les écritures et performances médiocres même après avoir libéré de la place et réduit les tâches évidentes en arrière-plan.

## Comment préserver le stockage du téléphone

Gardez de l'espace libre. C'est la réponse la moins originale, et toujours la meilleure.

Évitez les applications de nettoyage qui promettent des accélérations miraculeuses. Beaucoup se contentent de supprimer des caches qu'Android reconstruira ensuite. Pire, certaines continuent à tourner en arrière-plan et créent davantage de bruit qu'elles n'en éliminent.

Supprimez les anciens téléchargements, retirez les applications inutilisées, transférez les grosses vidéos hors du téléphone et laissez l'appareil branché au repos après un nettoyage important. S'il accepte une carte SD, utilisez-la pour les médias, pas pour les applications qui ont besoin d'E/S de stockage rapides (storage I/O).

Des applications comme runcheck peuvent aider en montrant l'évolution de la pression sur le stockage au lieu de réduire le problème à un chiffre ponctuel. Cette tendance est utile, car un téléphone qui passe lentement de 70 % à 94 % d'occupation vous indique très clairement pourquoi il commence à ralentir.
