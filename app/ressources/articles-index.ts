export type ArticleIndexItem = {
  slug: string
  title: string
  summary: string
  metaDescription: string
  category: string
  tags: string[]
  publishedAt: string
  readingTime: string
  featured?: boolean
}

export const articlesIndex: ArticleIndexItem[] = [
  {
    slug: `par-ou-commencer-quand-tout-semble-prioritaire-dans-une-pme`,
    title: `Par où commencer quand tout semble prioritaire dans une PME`,
    summary: `Dans une PME, la surcharge du quotidien pousse souvent à traiter les sujets dans l'urgence plutôt que par ordre d'importance. Sécurité, RSE, marketing : ces trois leviers sont fréquemment relégués au second plan — jusqu'à ce qu'ils deviennent un problème.`,
    metaDescription: `Sécurité, RSE, marketing : et si vos obligations réglementaires devenaient vos meilleurs leviers de croissance ? Découvrez comment reprendre le contrôle.`,
    category: `Pilotage & priorités`,
    tags: [`priorisation`, `pilotage`, `marketing`, `rse`, `securite`],
    publishedAt: `2026-04-22`,
    readingTime: `4 min`,
    featured: true,
  },
  {
    slug: `dirigeant-de-pme-sauriez-vous-citer-vos-5-risques-majeurs-en-ce-moment`,
    title: `Dirigeant de PME : sauriez-vous citer vos 5 risques majeurs en ce moment ?`,
    summary: `Les risques d'une PME ne se limitent pas aux accidents du travail ou à la conformité réglementaire. Ils sont stratégiques, opérationnels, humains, juridiques, environnementaux, immatériels — et souvent invisibles tant qu'on ne s'est pas donné les outils pour les voir.`,
    metaDescription: `Risques stratégiques, humains, réglementaires, immatériels... Votre PME est-elle vraiment protégée ? Découvrez pourquoi l'analyse des risques change tout.`,
    category: `Gestion des risques`,
    tags: [`risques`, `pilotage`, `strategie`, `conformite`, `rse`],
    publishedAt: `2026-04-21`,
    readingTime: `5 min`,
    featured: true,
  },
  {
    slug: `dirigeants-de-pme-et-si-vos-plus-grands-risques-etaient-ceux-que-vous-ne-voyez-pas`,
    title: `Dirigeants de PME : et si vos plus grands risques étaient ceux que vous ne voyez pas ?`,
    summary: `Gérer une PME, c'est avancer en permanence sur plusieurs fronts. Trois domaines concentrent les risques les plus sous-estimés et souvent les plus fréquents : l'offre, la sécurité des salariés, et la RSE.`,
    metaDescription: `Offre floue, sécurité, RSE : et si vos plus grands risques étaient ceux que vous ne voyez pas encore ? Faites le point sur les vrais enjeux de votre PME.`,
    category: `Vision globale`,
    tags: [`risques`, `strategie`, `securite`, `rse`, `pilotage`],
    publishedAt: `2026-04-20`,
    readingTime: `4 min`,
    featured: true,
  },
  {
    slug: `obligations-reglementaires-contrainte-ou-levier-de-performance-pour-les-pme`,
    title: `Obligations réglementaires : contrainte ou levier de performance pour les PME ?`,
    summary: `Beaucoup de dirigeants de PME voient les obligations réglementaires comme un fardeau. Pourtant, DUERP, PAPRIPACT et RSE peuvent devenir de vrais leviers de performance, de crédibilité et de différenciation.`,
    metaDescription: `DUERP, PAPRIPACT, RSE… Et si vos obligations réglementaires devenaient un vrai levier de performance pour votre PME ?`,
    category: `Conformité & performance`,
    tags: [`conformite`, `performance`, `duerp`, `papripact`, `rse`],
    publishedAt: `2026-04-19`,
    readingTime: `4 min`,
    featured: false,
  },
  {
    slug: `duerp-2026-les-points-a-verifier-pour-une-pme`,
    title: `DUERP 2026 : les points à vérifier pour une PME`,
    summary: `En 2026, le DUERP n'est plus un document qu'on range dans un tiroir après l'avoir rempli à la va-vite. Les obligations se sont renforcées : mise à jour annuelle, conservation 40 ans, RPS, dématérialisation.`,
    metaDescription: `DUERP 2026 : nouvelles obligations, RPS, dématérialisation, conservation 40 ans. Votre document est-il vraiment à jour ? Ce que toute PME doit vérifier.`,
    category: `Sécurité & conformité`,
    tags: [`duerp`, `securite`, `conformite`, `prevention`, `rps`],
    publishedAt: `2026-04-18`,
    readingTime: `5 min`,
    featured: false,
  },
  {
    slug: `papripact-quand-faut-il-le-formaliser-et-pourquoi`,
    title: `PAPRIPACT : quand faut-il le formaliser et pourquoi ?`,
    summary: `Obligatoire dès 50 salariés, le PAPRIPACT est le plan d'action concret qui prolonge le DUERP : il traduit l'évaluation des risques en mesures réelles, planifiées, budgétées et suivies dans le temps.`,
    metaDescription: `PAPRIPACT : obligatoire dès 50 salariés, utile pour tous. Quand le formaliser, que doit-il contenir, et pourquoi même les PME plus petites ont intérêt à s'en inspirer.`,
    category: `Sécurité & conformité`,
    tags: [`papripact`, `duerp`, `securite`, `prevention`, `cse`],
    publishedAt: `2026-04-17`,
    readingTime: `5 min`,
    featured: false,
  },
  {
    slug: `securite-au-travail-en-pme-ce-que-la-loi-vous-impose-et-ce-que-vous-risquez-si-vous-nagissez-pas`,
    title: `Sécurité au travail en PME : ce que la loi vous impose — et ce que vous risquez si vous n'agissez pas`,
    summary: `La sécurité au travail reste l'un des domaines où les PME accumulent le plus de retard. Pourtant, DUERP, formations, affichages et prévention des RPS engagent directement la responsabilité du dirigeant.`,
    metaDescription: `Sécurité au travail en PME : DUERP, formations, affichages, RPS… Ce que la loi impose et ce que vous risquez si vous n’agissez pas.`,
    category: `Sécurité & conformité`,
    tags: [`securite`, `duerp`, `rps`, `conformite`, `formations`],
    publishedAt: `2026-04-16`,
    readingTime: `4 min`,
    featured: false,
  },
  {
    slug: `pme-quand-labsence-de-strategie-marketing-devient-un-risque-pour-votre-activite`,
    title: `PME : quand l’absence de stratégie marketing devient un risque pour votre activité`,
    summary: `L'absence de stratégie marketing dans une PME n'est pas une posture neutre. C'est un risque réel : offre floue, dépendance aux clients historiques, croissance non maîtrisée.`,
    metaDescription: `Sans stratégie marketing, une PME subit plutôt qu'elle ne pilote. Positionnement flou, clients mal ciblés, croissance aléatoire : ce que révèle un vrai diagnostic.`,
    category: `Stratégie commerciale`,
    tags: [`marketing`, `strategie`, `positionnement`, `offre`, `diagnostic`],
    publishedAt: `2026-04-15`,
    readingTime: `5 min`,
    featured: false,
  },
  {
    slug: `pourquoi-les-pme-manquent-de-visibilite-et-comment-y-remedier-efficacement`,
    title: `Pourquoi les PME manquent de visibilité (et comment y remédier efficacement)`,
    summary: `Avoir une bonne offre ne suffit plus. En 2026, une PME qui n'apparaît pas là où ses prospects cherchent perd des marchés chaque jour, sans même le savoir.`,
    metaDescription: `PME : votre offre est bonne, mais personne ne le sait ? Découvrez pourquoi vous manquez de visibilité en 2026 — et comment y remédier avec méthode.`,
    category: `Stratégie commerciale`,
    tags: [`visibilite`, `marketing`, `seo`, `linkedin`, `strategie`],
    publishedAt: `2026-04-14`,
    readingTime: `5 min`,
    featured: false,
  },
  {
    slug: `rse-pour-les-pme-que-faut-il-vraiment-traiter-en-priorite`,
    title: `RSE pour PME : que faut-il vraiment traiter en priorité ?`,
    summary: `70 % des PME françaises ont déjà initié des pratiques RSE. Mais seulement 30 % ont franchi le cap d'actions vraiment structurées. L'écart entre intention et mise en œuvre tient souvent à une chose : on ne sait pas par où commencer.`,
    metaDescription: `RSE pour PME : par où commencer vraiment ? Social, environnement, appels d'offres... Découvrez comment prioriser pour agir concrètement sans vous disperser.`,
    category: `RSE & obligations PME`,
    tags: [`rse`, `qvt`, `appels-offres`, `performance`, `priorisation`],
    publishedAt: `2026-04-13`,
    readingTime: `5 min`,
    featured: false,
  },
]

export function getArticleIndexBySlug(slug: string) {
  return articlesIndex.find((article) => article.slug === slug)
}

export function getLatestArticles(limit = 3) {
  return [...articlesIndex]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export function getArticlesByTags(tags: string[], limit = 3, excludeSlug?: string) {
  const lowerTags = tags.map((tag) => tag.toLowerCase())

  return [...articlesIndex]
    .filter((article) => (excludeSlug ? article.slug !== excludeSlug : true))
    .map((article) => {
      const score = article.tags.reduce((total, tag) => {
        return total + (lowerTags.includes(tag.toLowerCase()) ? 1 : 0)
      }, 0)

      return { article, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      return new Date(b.article.publishedAt).getTime() - new Date(a.article.publishedAt).getTime()
    })
    .slice(0, limit)
    .map((item) => item.article)
}

export function formatFrenchDate(dateString: string) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString))
}