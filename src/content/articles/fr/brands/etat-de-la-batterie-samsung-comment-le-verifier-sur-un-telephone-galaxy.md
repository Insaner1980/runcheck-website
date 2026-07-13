---
title: "État de la batterie Samsung : comment le vérifier sur un téléphone Galaxy"
description: "Samsung complique encore davantage l'état de la batterie que nécessaire. Sur de nombreux téléphones Galaxy, vous n'obtenez pas un chiffre clair comme sur l'iPhone, par exemple 94 % ou 81 %. Vous avez plutôt droit à un résultat de diagnostic sommaire, à quelques réglages de protection et, sur les modèles les plus récents, éventuellement à une véritable page d'informations sur la batterie."
listSummary: "Samsung complique encore davantage l'état de la batterie que nécessaire."
hub: "brands"
sourceNumber: 153
order: 1
tags: ["batterie","etat","diagnostic","android","guide"]
locale: "fr"
draft: false
---
C'est justement cette incertitude qui pose problème. Un Galaxy S25 équipé d'une version récente de One UI peut afficher un pourcentage d'état et un nombre de cycles. Un Galaxy S23 qui semble utiliser une mise à jour comparable peut ne rien montrer de tout cela. Android 17 est maintenant disponible sur la plupart des Pixel compatibles, et Samsung a lancé la bêta de One UI 9, basée sur Android 17, pour la série Galaxy S26. Le déploiement plus large suivra toutefois le calendrier propre à Samsung, qui continuera aussi à décider quelles données de batterie sont visibles sur chaque modèle.

Voici les vérifications qui valent la peine, et celles qui paraissent utiles sans vraiment vous renseigner.

## Commencez par Samsung Members

La méthode officielle passe par Samsung Members. L'application est installée sur la plupart des téléphones Galaxy, et les pages d'assistance de Samsung consacrées à la batterie orientent elles aussi vers cet autodiagnostic.

Ouvrez Samsung Members, appuyez sur Assistance, puis lancez les Diagnostics du téléphone. Choisissez État de la batterie, ou exécutez l'ensemble des diagnostics en incluant le test de la batterie.

Le résultat reste simple. Vous obtenez généralement un état plutôt qu'un pourcentage. Il peut indiquer si la batterie est Normal, Faible ou Mauvais, mais pas si la cellule conserve encore 96 % de sa capacité d'origine ou si elle est descendue à 83 %.

C'est frustrant, mais ce résultat présente un avantage : Samsung le comprendra si vous contactez l'assistance ou vous rendez dans un centre de réparation. Si Samsung Members signale que la batterie nécessite votre attention et que le téléphone subit aussi des arrêts aléatoires, une décharge rapide ou des chutes brutales du pourcentage, ne perdez pas plusieurs jours à essayer cinq applications différentes. Faites contrôler la batterie.

## Cherchez Battery information dans les Paramètres

Sur les téléphones Galaxy récents, en particulier certains modèles haut de gamme sous One UI 7 ou une version ultérieure, vérifiez ce chemin :

Paramètres > Batterie > Battery information

Lorsqu'elle est disponible, cette page peut afficher des données plus utiles, comme le pourcentage d'état de la batterie, le nombre de cycles, la date de fabrication ou la date de première utilisation. C'est ce qui se rapproche le plus d'une véritable transparence sur la batterie des téléphones Galaxy.

Le problème, c'est sa disponibilité. Samsung n'a pas généralisé cet écran à tous les modèles ni à toutes les régions. Certains utilisateurs de Galaxy S25 l'ont. Quelques anciens modèles haut de gamme mis à jour l'affichent aussi. D'autres téléphones équipés d'une version récente de One UI ne le proposent toujours pas.

Si la page n'apparaît pas, vous ne pourrez probablement pas l'activer avec un réglage ordinaire. Cela ne signifie pas forcément que le téléphone est incapable de mesurer ces données. Samsung a simplement choisi de ne pas les afficher dans les Paramètres pour ce modèle, cette région ou cette version du firmware.

C'est là que le numéro de version d'Android devient trompeur. Android a progressivement ajouté des mécanismes pour le nombre de cycles et les données liées à l'état de santé. Mais la présence d'Android 14, d'Android 16 ou d'Android 17 ne garantit pas l'apparition d'un écran Samsung consacré à l'état de la batterie. Le fabricant conserve la maîtrise de l'interface visible.

## Activez la protection avant que la batterie soit usée

La protection de la batterie est le réglage qui peut réellement ralentir l'usure future. Elle ne répare pas une batterie ancienne. Elle réduit simplement le temps passé à une tension élevée.

Sous One UI 7 et les versions ultérieures, ouvrez :

Paramètres > Batterie > Protection de la batterie

Selon la région et la version du logiciel, vous verrez des modes comme Basique, Maximale, Adaptive ou Protection mode veille. Les intitulés et les possibilités peuvent varier, mais le principe reste familier :

- Basique charge jusqu'à 100 %, interrompt la charge, puis la reprend lorsque le niveau redescend vers 95 %.
- Protection mode veille, ou un mode Adaptive selon la version, interrompt la charge autour de 80 % pendant votre sommeil, puis la termine près de 100 % avant votre heure de réveil habituelle.
- Maximale applique une limite fixe. Sous One UI 7, Samsung indique des limites sélectionnables de 80 %, 85 %, 90 % ou 95 % sur les appareils compatibles.

Pour la plupart des gens, 90 % ou 95 % représente un compromis pratique. La batterie passe moins de longues heures à 100 %, sans donner l'impression que sa capacité quotidienne a été fortement amputée. Si vous restez près d'un chargeur toute la journée, 80 % peut convenir. Si vous voyagez ou terminez souvent la journée presque à plat, ne vous imposez pas une contrainte inutile. Un réglage de protection qui vous rend anxieux n'est pas le bon réglage.

Sous One UI 6 et les versions antérieures, l'option peut être plus simple, avec souvent une seule limite autour de 85 % au lieu de plusieurs choix.

## Les codes cachés de Samsung ne mesurent pas l'état de la batterie

Les codes du composeur Samsung circulent beaucoup parce qu'ils donnent accès à des menus de service qui semblent secrets. Certains sont utiles. La plupart ne constituent pas un véritable contrôle de l'état de la batterie.

`*#0*#` ouvre un menu de test matériel sur de nombreux téléphones Galaxy. Il sert à vérifier l'écran, la dalle tactile, les capteurs, les vibrations, les haut-parleurs et les appareils photo. Il n'affiche pas de pourcentage d'état de la batterie. Sur certains modèles récents ou verrouillés par un opérateur, le code ne fait rien.

`*#0228#` ouvre un écran d'informations sur la batterie sur certains téléphones Samsung. Il peut afficher la tension, la température, le niveau de charge et une valeur appelée Level Block. Ne prenez pas Level Block pour l'état de la batterie. Cette valeur évolue avec le niveau de charge actuel, et Samsung ne la présente pas comme une mesure de capacité restante.

Méfiez-vous du bouton Quick Start sur cet écran. Il peut réinitialiser le calibrage de la jauge, après quoi le pourcentage de batterie risque de se comporter de façon étrange. Consulter l'écran est une chose. Appuyer sur des boutons de calibrage parce qu'un message de forum vous l'a conseillé en est une autre.

`*#*#4636#*#*` ouvre le menu de test standard d'Android. Lorsqu'il fonctionne, la section consacrée à la batterie affiche son état, son niveau, sa température, sa tension et sa technologie. Le champ d'état peut prendre des valeurs comme Good, Overheat, Dead, Over Voltage, Cold ou Unknown. Il ne signifie pas que la batterie conserve encore 100 % de sa capacité d'origine.

C'est le piège. Good indique seulement que le système n'a pas détecté de panne grave. Une batterie de deux ans visiblement usée peut encore être déclarée Good.

## Les applications tierces estiment, elles ne savent pas tout

Si votre Galaxy n'affiche pas de pourcentage dans les Paramètres, les applications tierces peuvent toujours être utiles, à condition de comprendre leurs limites.

AccuBattery estime la capacité en observant la quantité d'énergie qui entre dans la batterie pendant plusieurs sessions. L'estimation devient meilleure après plusieurs cycles de charge. Elle peut aider à suivre une tendance, surtout si vous rechargez toujours le téléphone de manière assez similaire.

DevCheck et les autres applications matérielles du même type affichent des valeurs brutes fournies par le système, comme la température, la tension, le courant et parfois des champs liés à la capacité. Elles ne peuvent pas corriger des données matérielles absentes ou incorrectes. Si le téléphone rapporte une valeur incohérente, l'application ne peut qu'afficher cette incohérence.

Ce point compte particulièrement sur les téléphones Samsung, car les mesures de courant varient selon le modèle. Les appareils haut de gamme fournissent généralement des données plus exploitables. Certains modèles de la série A et des téléphones plus anciens renvoient un courant instable, nul ou sans rapport avec la consommation réelle.

runcheck sépare donc la valeur de son niveau de confiance. Si un Galaxy fournit des données de courant et de capacité exploitables, l'application peut afficher des relevés de batterie plus détaillés. Si le modèle ne communique pas de valeurs fiables, runcheck indique que la mesure est estimée ou indisponible au lieu de présenter un signal faible comme une donnée précise.

## Ce que les différents Galaxy peuvent généralement afficher

La répartition est désordonnée, mais voici une manière réaliste de l'envisager.

Les modèles Galaxy haut de gamme récents sous One UI 7 ou une version ultérieure peuvent afficher Battery information dans les Paramètres, avec notamment un pourcentage d'état et un nombre de cycles. La série Galaxy S25 est l'exemple le plus clair, même si la disponibilité dépend toujours de la région et de la version du logiciel.

Les Galaxy S21 à S24 fournissent généralement les champs Android de base : état de charge, niveau, statut, tension, température et souvent courant. Certaines versions peuvent ajouter des informations plus riches, mais ne le supposez pas simplement parce que le téléphone vient de recevoir une mise à jour de sécurité.

Les téléphones de la série Galaxy A et les modèles plus anciens sont moins prévisibles. Samsung Members reste le meilleur contrôle officiel. Les applications tierces peuvent suivre les tendances, mais les mesures de courant et de capacité ont davantage de chances d'être absentes ou bruitées.

La bêta de One UI 9 apporte déjà Android 17 à la série Galaxy S26, mais elle ne rend pas tous les téléphones Galaxy plus transparents du jour au lendemain. Le déploiement plus large passera par le calendrier de Samsung. Même après la mise à jour, le fabricant décidera quels écrans et quelles valeurs de batterie sont activés sur chaque modèle.

## Quand la batterie doit probablement être remplacée

Ne vous fiez pas à un seul chiffre. Observez le comportement du téléphone.

Un remplacement mérite d'être envisagé si l'appareil s'éteint alors qu'il affiche encore beaucoup de charge, passe de 30 % à 5 % en quelques minutes, chauffe anormalement pendant une utilisation ordinaire ou ne tient plus une journée qu'il couvrait auparavant sans difficulté. Samsung indique également qu'une batterie détériorée peut provoquer une forte baisse d'autonomie, des arrêts inattendus et une réponse plus lente dans les applications exigeantes.

Si Samsung Members indique Faible ou Mauvais et que le téléphone fonctionne mal, vous disposez déjà de suffisamment d'éléments. Si l'application indique Normal mais que l'appareil s'éteint toujours trop tôt, vérifiez d'abord l'utilisation de la batterie afin de repérer une application défaillante. Une application sociale qui tourne sans arrêt en arrière-plan peut ressembler à une batterie fatiguée pendant un jour ou deux.

## Réponses rapides

Samsung Members n'affiche généralement pas de pourcentage d'état de la batterie. L'application fournit un résultat de diagnostic. Pour obtenir un pourcentage, cherchez Battery information dans **Paramètres > Batterie** sur les versions compatibles de One UI, ou utilisez une estimation tierce.

L'écran `*#0228#` peut être consulté sans problème, mais n'appuyez pas sur Quick Start sans raison précise. Cette action peut perturber le calibrage de la jauge.

Si Battery information est absent, votre téléphone peut tout à fait fonctionner normalement. Samsung déploie cette page selon le modèle, la région et la version du logiciel.

Un résultat Faible ou Mauvais dans Samsung Members est plus utile qu'une estimation aléatoire fournie par une application. Prenez-le comme signal officiel pour vérifier les possibilités de remplacement.

La protection de la batterie mérite d'être activée tôt. Une fois la batterie dégradée, limiter la charge ne lui rendra pas sa capacité.
