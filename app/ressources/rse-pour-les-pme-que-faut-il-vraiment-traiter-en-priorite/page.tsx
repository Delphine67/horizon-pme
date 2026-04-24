import { ArticlePageTemplate, type ArticleData } from '../../components/ArticleTemplate'

export const metadata = {
  title: `RSE pour PME : que faut-il vraiment traiter en priorité ? | Horizon PME Solutions`,
  description: `RSE pour PME : par où commencer vraiment ? Social, environnement, appels d'offres... Découvrez comment prioriser pour agir concrètement sans vous disperser.`,
}

const article: ArticleData = {
  category: `RSE & obligations PME`,
  title: `RSE pour PME : que faut-il vraiment traiter en priorité ?`,
  date: `13 avril 2026`,
  readingTime: `5 min de lecture`,
  intro: `RSE pour les PME : arrêtez de tout vouloir faire. Commencez par ce qui compte vraiment.`,
  sections: [
    {
      paragraphs: [
        `La RSE fait peur à beaucoup de dirigeants de PME. Pas parce qu'ils n'y croient pas, mais parce qu'ils ne savent pas par où commencer. Entre le bilan carbone, les obligations réglementaires, la qualité de vie au travail, la diversité, les achats responsables, la gouvernance… le sujet semble immense. Et dans une PME où tout le monde est déjà à pleine capacité, « immense » se traduit souvent par « reporté à plus tard ».`,
        `C'est exactement là que se perd la majorité des démarches RSE : pas dans le manque de volonté, mais dans le manque de méthode.`,
      ],
    },
    {
      heading: `La RSE n'est pas une liste de bonnes intentions. C'est un choix de priorités.`,
      paragraphs: [
        `En 2026, la question n'est plus « faut-il faire de la RSE ? » — 70 % des PME françaises ont déjà initié des pratiques responsables. La vraie question est : sur quoi concentrer ses efforts pour que ça produise un effet réel, visible, et durable ?`,
        `La réponse tient en un principe : la matérialité. Identifier les enjeux qui comptent vraiment pour votre entreprise, votre secteur, vos clients, vos salariés. Pas les enjeux qui font bien dans un rapport. Ceux qui, s'ils sont mal gérés, fragilisent l'activité — et s'ils sont bien gérés, créent de la valeur.`,
      ],
    },
    {
      heading: `Ce que les PME doivent traiter en priorité.`,
      paragraphs: [
        `Le volet social d'abord — parce que c'est là que le risque est le plus immédiat.`,
        `Les risques humains arrivent en tête des préoccupations de 75 % des dirigeants de PME et ETI (baromètre QBE-OpinionWay 2026). Absentéisme, turnover, burn-out, difficultés de recrutement : ces sujets ont un impact direct sur la performance, le chiffre d'affaires, et la capacité à se développer.`,
        `Une démarche RSE sérieuse commence par là : qualité de vie au travail, conditions d'emploi, prévention des risques psychosociaux, équilibre vie professionnelle et personnelle. Ce ne sont pas des sujets « en plus ». Ce sont les fondations.`,
        `L'environnement ensuite — mais de façon ciblée, pas globale.`,
        `Inutile de vouloir tout mesurer d'un coup. Un premier bilan carbone simplifié — accessible gratuitement via les outils de l'ADEME — suffit à identifier les postes les plus émetteurs : déplacements, énergie, achats, numérique. C'est ce diagnostic qui permet d'agir efficacement, sans se disperser.`,
        `Pour les PME qui travaillent avec des grands groupes soumis à la CSRD, ce n'est plus une démarche volontaire : leurs donneurs d'ordre doivent eux-mêmes intégrer l'empreinte carbone de leurs fournisseurs dans leur reporting. Anticiper, c'est rester dans la course.`,
        `La gouvernance et la transparence — parce que c'est ce que vos parties prenantes regardent.`,
        `75 % des Français estiment que les entreprises font de la RSE pour l'image plutôt que pour l'impact. Ce chiffre dit quelque chose d'important : la communication RSE sans substance ne convainc plus personne. Ce qui convainc, ce sont des engagements concrets, mesurables, et honnêtement communiqués — y compris sur les marges de progrès.`,
        `Pour une PME, ça peut être aussi simple que de formaliser sa politique d'achats responsables, de publier quelques indicateurs clés, ou d'associer les équipes à la démarche. L'authenticité vaut plus que la perfection.`,
        `Les appels d'offres — parce que la RSE est désormais un critère de sélection.`,
        `Depuis la loi Climat et Résilience de 2021, les critères RSE pèsent jusqu'à 10 à 30 % de la note finale dans les marchés publics. À partir d'août 2026, tout marché devra intégrer au moins un critère environnemental. Et dans les chaînes d'approvisionnement privées, la tendance est identique.`,
        `Une PME qui a structuré sa démarche — même modeste — et qui sait la raconter dans un mémoire technique se retrouve en position de force face à une concurrente qui n'a rien documenté. Ce n'est pas une question de taille. C'est une question de méthode.`,
      ],
    },
    {
      heading: `Ce qu'il ne faut surtout pas faire.`,
      paragraphs: [
        `Lancer dix chantiers en même temps. Créer un document RSE pour l'image sans actions derrière. Confier le sujet à quelqu'un qui n'a ni temps ni légitimité pour le porter. Ou au contraire, attendre d'avoir « tout compris » avant de commencer.`,
        `La RSE, dans une PME, ça avance pas à pas. Deux ou trois priorités bien choisies, bien traitées, bien documentées — c'est plus efficace et plus crédible qu'une démarche ambitieuse sur le papier qui ne produit rien sur le terrain.`,
      ],
    },
    {
      heading: `La vraie question à se poser.`,
      paragraphs: [
        `Qu'est-ce qui, dans mon entreprise, fragilise mes équipes, expose mon activité, ou freine ma capacité à répondre aux attentes de mes clients ? C'est par là que commence une démarche RSE utile. Pas par la liste des choses qu'on « devrait » faire.`,
        `Un diagnostic honnête, quelques priorités claires, un plan d'action réaliste. C'est tout ce qu'il faut pour commencer à transformer la RSE en levier — plutôt qu'en charge supplémentaire.`,
        `Vous dirigez une PME en Île-de-France et vous voulez structurer votre démarche RSE sans vous disperser ? C'est exactement le type d'accompagnement que je propose. Contactez-moi pour un premier échange.`,
      ],
    },
  ],
}

export default function ArticlePage() {
  return <ArticlePageTemplate article={article} />
}