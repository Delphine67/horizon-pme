import { ArticlePageTemplate, type ArticleData } from '../../components/ArticleTemplate'

export const metadata = {
  title: `Par où commencer quand tout semble prioritaire dans une PME | Horizon PME Solutions`,
  description: `Sécurité, RSE, marketing : et si vos obligations réglementaires devenaient vos meilleurs leviers de croissance ? Découvrez comment reprendre le contrôle.`,
}

const article: ArticleData = {
  category: `Pilotage & priorités`,
  title: `Par où commencer quand tout semble prioritaire dans une PME`,
  date: `22 avril 2026`,
  readingTime: `4 min de lecture`,
  intro: `Trop de sujets à gérer en même temps ? C'est souvent là que les PME perdent du terrain.`,
  sections: [
    {
      paragraphs: [
        `Vous connaissez cette sensation : une journée qui commence avec trois priorités, et qui se termine avec douze dossiers ouverts, aucun vraiment avancé. Dans une PME, c'est presque la norme. Le développement commercial, les obligations réglementaires, les équipes, l'organisation… Tout semble urgent. Tout arrive en même temps.`,
        `Et c'est précisément dans cet état de saturation que se prennent les mauvaises décisions.`,
      ],
    },
    {
      heading: `Quand tout est prioritaire, rien ne l'est vraiment.`,
      paragraphs: [
        `Le problème n'est pas le manque de travail. C'est le manque de lisibilité. Sans recul, on traite les sujets dans l'ordre où ils se présentent — pas dans l'ordre où ils comptent. On règle ce qui fait du bruit, on reporte ce qui semble moins urgent. Jusqu'au jour où ce qui était « moins urgent » devient un risque réel.`,
        `Un DUERP non mis à jour. Une démarche RSE absente d'un mémoire technique. Une offre produits qui ne correspond plus à la demande du marché ciblé. Une communication qui ne reflète plus la réalité de l'entreprise. Des signaux faibles, longtemps ignorés, qui finissent par coûter cher.`,
      ],
    },
    {
      heading: `La première valeur ajoutée d'un regard extérieur : remettre les sujets dans le bon ordre.`,
      paragraphs: [
        `Avant de résoudre quoi que ce soit, il faut voir clairement. Quels sont les risques réels ? Où sont les opportunités que l'entreprise ne saisit pas, faute de temps ? Quels points de blocage freinent la croissance sans qu'on s'en rende vraiment compte ?`,
        `Ce diagnostic, la plupart des dirigeants n'ont pas le temps de le faire seuls. Pas parce qu'ils manquent de compétences — mais parce qu'ils sont dedans. Et quand on est dedans, on ne voit pas ce qu'on ne voit pas.`,
      ],
    },
    {
      heading: `Sécurité, RSE, marketing : trois sujets que les PME traitent trop souvent dans l'urgence.`,
      paragraphs: [
        `Ces trois leviers ont un point commun : quand ils sont subis, ils coûtent. Quand ils sont anticipés, ils créent de la valeur.`,
        `Un DUERP construit sérieusement réduit l'absentéisme et protège l'employeur. Un PAPRIPACT bien structuré devient un outil de pilotage RH. Une démarche RSE documentée pèse jusqu'à 30 % de la note dans un appel d'offres public. Une nouvelle gamme en phase avec les nouveaux besoins des consommateurs. Une communication alignée sur les valeurs réelles de l'entreprise construit une réputation durable.`,
        `Ce ne sont pas des contraintes administratives. Ce sont des leviers de performance — à condition de les aborder dans le bon ordre, avec la bonne méthode.`,
      ],
    },
    {
      heading: `Faire moins, mais faire mieux. Voilà ce qui change tout.`,
      paragraphs: [
        `L'objectif n'est pas d'ajouter des chantiers à une liste déjà longue. C'est de transformer ce que vous êtes déjà obligé de faire en quelque chose d'utile. De passer d'une logique de conformité subie à une logique de pilotage choisie.`,
        `Ce changement de posture ne demande pas plus de ressources. Il demande une méthode, un regard extérieur, et un peu de recul que le quotidien ne laisse pas toujours.`,
        `Vous dirigez une PME en Île-de-France et vous reconnaissez une partie de ce tableau ? Prenons le temps d'un échange. Ensemble, on identifie les vrais enjeux — et on construit un plan d'action qui tient la route.`,
      ],
    },
  ],
}

export default function ArticlePage() {
  return <ArticlePageTemplate article={article} />
}