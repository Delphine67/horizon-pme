import { ArticlePageTemplate, type ArticleData } from '../../components/ArticleTemplate'

export const metadata = {
  title: `PAPRIPACT : quand faut-il le formaliser et pourquoi ? | Horizon PME Solutions`,
  description: `PAPRIPACT : obligatoire dès 50 salariés, utile pour tous. Quand le formaliser, que doit-il contenir, et pourquoi même les PME plus petites ont intérêt à s'en inspirer.`,
}

const article: ArticleData = {
  category: `Sécurité & conformité`,
  title: `PAPRIPACT : quand faut-il le formaliser et pourquoi ?`,
  date: `17 avril 2026`,
  readingTime: `5 min de lecture`,
  intro: `Le PAPRIPACT : vous y êtes peut-être obligé. Mais surtout, vous y avez intérêt.`,
  sections: [
    {
      paragraphs: [
        `Beaucoup de dirigeants de PME découvrent le PAPRIPACT lors d'un contrôle, d'une réunion CSE tendue, ou au moment de répondre à un appel d'offres public. Trop tard pour agir sereinement. Juste à temps pour réaliser qu'on aurait dû s'en occuper bien avant.`,
        `Pourtant, derrière cet acronyme un peu austère se cache un outil concret, utile — et, pour les entreprises concernées, pleinement obligatoire.`,
      ],
    },
    {
      heading: `C'est quoi, exactement ?`,
      paragraphs: [
        `Le PAPRIPACT — Programme Annuel de Prévention des Risques Professionnels et d'Amélioration des Conditions de Travail — est le plan d'action qui découle directement du DUERP. Là où le DUERP identifie et évalue les risques, le PAPRIPACT répond à la question suivante : qu'est-ce qu'on fait concrètement pour les réduire ?`,
        `Ce n'est pas un document de plus. C'est le prolongement logique de l'évaluation des risques — la partie qui transforme le diagnostic en actions réelles, chiffrées, planifiées, avec des responsables désignés et des indicateurs de suivi.`,
      ],
    },
    {
      heading: `Qui est concerné — et depuis quand ?`,
      paragraphs: [
        `Le PAPRIPACT est obligatoire pour toutes les entreprises de 50 salariés et plus, depuis la loi Santé au Travail du 2 août 2021, entrée en vigueur le 31 mars 2022. Il doit être présenté chaque année au CSE dans le cadre de la consultation sur la politique sociale de l'entreprise — au plus tard lors du dernier CSE de décembre pour l'année suivante.`,
        `Pour les entreprises de moins de 50 salariés, la formalisation d'un PAPRIPACT distinct n'est pas obligatoire. Mais la logique reste la même : le DUERP doit contenir une liste d'actions de prévention concrètes, mise à jour régulièrement. En clair, l'esprit du PAPRIPACT s'applique à toutes les structures — seul le formalisme change selon la taille.`,
      ],
    },
    {
      heading: `Ce que le document doit contenir.`,
      paragraphs: [
        `Un PAPRIPACT n'a pas de modèle officiel imposé. Mais son contenu est précisément encadré par le Code du travail. Il doit comporter cinq éléments essentiels : la liste détaillée des actions de prévention prévues pour l'année, les conditions d'exécution de chaque mesure, le calendrier de mise en œuvre, les responsables désignés pour chaque action, et le budget prévisionnel associé.`,
        `Ce cadre n'est pas une contrainte bureaucratique. C'est une discipline de gestion. Une entreprise qui sait ce qu'elle va faire, qui le fait, quand, et avec quels moyens, pilote mieux que celle qui improvise au fil des incidents.`,
      ],
    },
    {
      heading: `Le rôle du CSE : pas une formalité, un levier.`,
      paragraphs: [
        `Beaucoup d'employeurs présentent le PAPRIPACT au CSE comme une obligation à cocher. C'est une erreur — juridique et stratégique.`,
        `Le CSE peut proposer un ordre de priorité différent pour les actions, suggérer des mesures supplémentaires, et donner un avis circonstancié. Si certaines actions prévues ne sont pas mises en œuvre, l'employeur doit le justifier par écrit. Et l'avis du CSE sur le PAPRIPACT doit obligatoirement être joint à toute demande de marchés publics, de subventions ou d'avantages fiscaux.`,
        `En d'autres termes : un CSE bien associé à la démarche, c'est une prévention plus efficace — et un document plus solide le jour où il compte vraiment.`,
      ],
    },
    {
      heading: `Pourquoi même les PME de moins de 50 salariés ont intérêt à s'en inspirer.`,
      paragraphs: [
        `Formaliser volontairement un programme de prévention — même simplifié — produit des effets concrets : actions mieux priorisées, équipes mieux informées, risques mieux maîtrisés. Et dans un contexte où les donneurs d'ordre scrutent de plus en plus les pratiques internes de leurs fournisseurs, disposer d'une démarche structurée et documentée devient un argument commercial à part entière.`,
        `La prévention n'est pas un coût. C'est un investissement dont le retour se mesure en arrêts de travail évités, en engagement salarié préservé, et en réputation employeur renforcée.`,
      ],
    },
    {
      heading: `Ce que révèle l'absence de PAPRIPACT.`,
      paragraphs: [
        `Une entreprise qui n'a pas de PAPRIPACT — ou qui en a un copié-collé de l'année précédente sans mise à jour réelle — envoie un signal clair : la prévention n'est pas un sujet pris au sérieux. Ce signal, les élus du CSE le voient. Les inspecteurs du travail aussi. Et de plus en plus, les clients et donneurs d'ordre également.`,
        `À l'inverse, un PAPRIPACT bien construit, présenté avec transparence, suivi dans le temps, dit quelque chose de la façon dont l'entreprise est gérée. C'est un marqueur de sérieux — et de confiance.`,
        `Vous atteignez ou approchez les 50 salariés, ou vous souhaitez simplement structurer votre démarche de prévention avant d'y être contraint ? C'est exactement le type de chantier sur lequel j'accompagne les PME en Île-de-France. Contactez-moi pour un premier échange.`,
      ],
    },
  ],
}

export default function ArticlePage() {
  return <ArticlePageTemplate article={article} />
}