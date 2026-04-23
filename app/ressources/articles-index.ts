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
    slug: 'par-ou-commencer-quand-tout-semble-prioritaire-dans-une-pme',
    title: 'Par où commencer quand tout semble prioritaire dans une PME ?',
    summary:
      "Dans une PME, la surcharge du quotidien pousse souvent à traiter les sujets dans l'urgence plutôt que par ordre d'importance. Sécurité, RSE, marketing : ces trois leviers sont fréquemment relégués au second plan — jusqu'à ce qu'ils deviennent un problème. Pourtant, bien structurés, ils produisent des résultats concrets.",
    metaDescription:
      "Sécurité, RSE, marketing : et si vos obligations réglementaires devenaient vos meilleurs leviers de croissance ? Découvrez comment reprendre le contrôle.",
    category: 'Pilotage & priorités',
    tags: ['priorisation', 'pilotage', 'strategie', 'rse', 'securite', 'marketing'],
    publishedAt: '2026-04-22',
    readingTime: '4 min',
    featured: true,
  },
  {
    slug: 'dirigeant-de-pme-sauriez-vous-citer-vos-5-risques-majeurs-en-ce-moment',
    title: 'Dirigeant de PME : sauriez-vous citer vos 5 risques majeurs en ce moment ?',
    summary:
      "Les risques d'une PME ne se limitent pas aux accidents du travail ou à la conformité réglementaire. Ils sont stratégiques, opérationnels, humains, juridiques, environnementaux et immatériels. Une cartographie sérieuse permet de prioriser, d'anticiper et de transformer des menaces en décisions éclairées.",
    metaDescription:
      "Risques stratégiques, humains, réglementaires, immatériels... Votre PME est-elle vraiment protégée ? Découvrez pourquoi l'analyse des risques change tout.",
    category: 'Gestion des risques',
    tags: ['risques', 'pilotage', 'strategie', 'pme', 'priorisation'],
    publishedAt: '2026-04-21',
    readingTime: '4 min',
    featured: true,
  },
  {
    slug: 'dirigeants-de-pme-et-si-vos-plus-grands-risques-etaient-ceux-que-vous-ne-voyez-pas',
    title: 'Dirigeants de PME : et si vos plus grands risques étaient ceux que vous ne voyez pas ?',
    summary:
      "Trois domaines concentrent aujourd'hui les risques les plus sous-estimés dans les PME : l'offre, la sécurité des salariés et la RSE. Chacun peut fragiliser l'entreprise ; ensemble, ils peuvent compromettre sa pérennité. Identifier ce qui est obligatoire, prioritaire et planifiable change la façon de piloter.",
    metaDescription:
      "Offre floue, sécurité, RSE : et si vos plus grands risques étaient ceux que vous ne voyez pas encore ? Faites le point sur les vrais enjeux de votre PME.",
    category: 'Vision globale',
    tags: ['risques', 'strategie', 'securite', 'rse', 'pilotage', 'offre'],
    publishedAt: '2026-04-20',
    readingTime: '5 min',
    featured: true,
  },
  {
    slug: 'obligations-reglementaires-contrainte-ou-levier-de-performance-pour-les-pme',
    title: 'Obligations réglementaires : contrainte ou levier de performance pour les PME ?',
    summary:
      "DUERP, PAPRIPACT, RSE, conformité : mal gérés, ces sujets coûtent. Bien structurés, ils rapportent. Une PME qui formalise ses obligations et sait les valoriser peut réduire l'absentéisme, mieux répondre aux appels d'offres et transformer la conformité en atout concurrentiel.",
    metaDescription:
      "DUERP, PAPRIPACT, RSE… Et si vos obligations réglementaires devenaient un vrai levier de performance pour votre PME ?",
    category: 'Conformité & performance',
    tags: ['conformite', 'duerp', 'papripact', 'rse', 'performance', 'appels-offres'],
    publishedAt: '2026-04-19',
    readingTime: '5 min',
  },
  {
    slug: 'duerp-2026-les-points-a-verifier-pour-une-pme',
    title: 'DUERP 2026 : les points à vérifier pour une PME',
    summary:
      "En 2026, le DUERP n'est plus un document qu'on remplit une fois pour l'oublier. Mise à jour annuelle, conservation 40 ans, risques psychosociaux, dématérialisation : les obligations se renforcent. Mais au-delà de la conformité, un DUERP bien construit devient un outil de pilotage.",
    metaDescription:
      "DUERP 2026 : nouvelles obligations, RPS, dématérialisation, conservation 40 ans. Votre document est-il vraiment à jour ?",
    category: 'Sécurité & conformité',
    tags: ['duerp', 'securite', 'conformite', 'rps', 'prevention'],
    publishedAt: '2026-04-18',
    readingTime: '5 min',
  },
  {
    slug: 'papripact-quand-faut-il-le-formaliser-et-pourquoi',
    title: 'PAPRIPACT : quand faut-il le formaliser et pourquoi ?',
    summary:
      "Obligatoire dès 50 salariés, le PAPRIPACT est le prolongement concret du DUERP : il transforme l'évaluation des risques en actions planifiées, budgétées et suivies. Même pour les PME plus petites, s'en inspirer permet de mieux structurer la prévention et de renforcer la crédibilité de l'entreprise.",
    metaDescription:
      "PAPRIPACT : obligatoire dès 50 salariés, utile pour tous. Quand le formaliser, que doit-il contenir, et pourquoi s’en inspirer ?",
    category: 'Sécurité & conformité',
    tags: ['papripact', 'duerp', 'prevention', 'securite', 'cse'],
    publishedAt: '2026-04-17',
    readingTime: '4 min',
  },
  {
    slug: 'securite-au-travail-en-pme-ce-que-la-loi-vous-impose-et-ce-que-vous-risquez-si-vous-nagissez-pas',
    title:
      "Sécurité au travail en PME : ce que la loi vous impose — et ce que vous risquez si vous n’agissez pas",
    summary:
      "DUERP, formations, affichages obligatoires, prévention des RPS : les obligations de sécurité sont nombreuses et souvent sous-estimées dans les PME. Pourtant, en cas d'accident ou de manquement, c'est la responsabilité personnelle du dirigeant qui peut être engagée.",
    metaDescription:
      "Sécurité au travail en PME : DUERP, formations, affichages, RPS… Ce que la loi impose et ce que vous risquez si vous n’agissez pas.",
    category: 'Sécurité & conformité',
    tags: ['securite', 'duerp', 'obligations', 'rps', 'conformite'],
    publishedAt: '2026-04-16',
    readingTime: '5 min',
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

export function getArticlesByTags(
  tags: string[],
  limit = 3,
  excludeSlug?: string
) {
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