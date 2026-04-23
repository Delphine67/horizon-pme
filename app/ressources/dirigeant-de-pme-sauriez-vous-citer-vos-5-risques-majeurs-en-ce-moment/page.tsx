import Link from 'next/link'
import type { Metadata } from 'next'

const BRAND = {
  blue: '#2A4D69',
  green: '#7CB342',
  light: '#F4F4F4',
  lightBlue: '#EEF3F7',
  text: '#5F7690',
}

type Section = {
  heading?: string
  paragraphs: string[]
  bullets?: string[]
}

function ArticleHero({
  category,
  title,
  date,
  readingTime,
  intro,
}: {
  category: string
  title: string
  date: string
  readingTime: string
  intro: string
}) {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-24 bg-white">
      <div className="absolute left-[-40px] top-[-30px] w-40 h-40 rounded-full opacity-70" style={{ background: '#EAEFF3' }} />
      <div className="absolute right-[-20px] top-[-20px] w-24 h-24 rounded-full opacity-70" style={{ background: '#E7F1DA' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <p className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-5" style={{ background: '#EAEFF3', color: BRAND.blue }}>
          {category}
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight" style={{ color: BRAND.blue }}>
          {title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-4 text-sm" style={{ color: BRAND.text }}>
          <span>{date}</span>
          <span>•</span>
          <span>{readingTime}</span>
        </div>

        <p className="mt-8 text-lg md:text-xl leading-relaxed" style={{ color: BRAND.text }}>
          {intro}
        </p>
      </div>
    </section>
  )
}

function ArticleBody({ sections }: { sections: Section[] }) {
  return (
    <section className="px-6 py-20" style={{ background: BRAND.light }}>
      <div className="max-w-4xl mx-auto">
        <article className="rounded-[32px] bg-white p-8 md:p-12 border border-black/5 shadow-sm">
          {sections.map((section, index) => (
            <div key={index} className={index === 0 ? '' : 'mt-12'}>
              {section.heading && (
                <h2 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: BRAND.blue }}>
                  {section.heading}
                </h2>
              )}

              <div className={section.heading ? 'mt-5' : ''}>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className={pIndex === 0 ? 'leading-relaxed' : 'mt-5 leading-relaxed'} style={{ color: BRAND.text }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 w-2.5 h-2.5 rounded-full shrink-0" style={{ background: BRAND.green }} />
                      <span style={{ color: BRAND.text }}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}

function ArticleCta() {
  return (
    <section className="px-6 py-20" style={{ background: BRAND.lightBlue }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: BRAND.blue }}>
          Besoin d’un regard extérieur
          <br />
          sur votre situation ?
        </h2>

        <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: BRAND.text }}>
          Un article permet d’y voir plus clair. Un échange permet souvent d’identifier
          plus rapidement ce qui mérite d’être traité dans votre PME.
        </p>

        <div className="mt-8 flex justify-center flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]">
            Faire le point sur votre situation
          </Link>

          <Link href="/ressources" className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]">
            Revenir aux ressources
          </Link>
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Dirigeant de PME : sauriez-vous citer vos 5 risques majeurs en ce moment ?' + ' | Horizon PME Solutions',
  description: 'Risques stratégiques, humains, réglementaires, immatériels... Votre PME est-elle vraiment protégée ? Découvrez pourquoi l’analyse des risques change tout.',
}

const article = {
  category: 'Gestion des risques',
  title: 'Dirigeant de PME : sauriez-vous citer vos 5 risques majeurs en ce moment ?',
  date: '21 avril 2026',
  readingTime: '5 min de lecture',
  intro: "Les risques d'une PME ne se limitent pas aux accidents du travail ou à la conformité réglementaire. Ils sont stratégiques, opérationnels, humains, juridiques, environnementaux et immatériels — et souvent invisibles tant qu'on ne s'est pas donné les outils pour les voir.",
  sections: [
    {
      heading: 'PME : l’analyse des risques n’est pas un luxe',
      paragraphs: [
        "Votre plus grand risque en tant que dirigeant ? Celui que vous n'avez pas encore nommé. On parle souvent des risques quand il est trop tard. Un client clé qui part sans prévenir. Un collaborateur essentiel qui démissionne. Un contrôle réglementaire qui tombe au mauvais moment. Un bad buzz qui s'emballe sur les réseaux. Une dépendance fournisseur qu'on n'avait pas mesurée.",
        "Ces situations ont rarement été une surprise totale. Les signaux étaient là. Personne n'avait pris le temps de les regarder en face."
      ],
    },
    {
      heading: '86 % des entreprises font face à plusieurs risques simultanément',
      paragraphs: [
        "C'est ce que révèle le dernier baromètre QBE-OpinionWay publié en 2026 auprès des dirigeants de PME et ETI françaises. Risques humains, risques de marché, risques réglementaires, risques immatériels : ils se cumulent, s'alimentent les uns les autres, et rarement de façon prévisible.",
        "Pourtant, seul un dirigeant sur trois considère la gestion des risques comme un vrai levier de compétitivité. Les autres la perçoivent encore comme un sujet secondaire — quelque chose qu'on traitera quand on aura le temps.",
        "Ce temps n'arrive jamais. Et l'absence d'analyse, elle, a un coût bien réel."
      ],
    },
    {
      heading: 'Une analyse sérieuse couvre un spectre beaucoup plus large',
      paragraphs: [
        "Les risques d'une PME ne se résument pas aux accidents du travail : c'est l'erreur la plus courante. On pense risques et on pense sécurité, conformité. Ces sujets comptent, bien sûr. Mais ils ne représentent qu'une partie du tableau.",
        'Une analyse sérieuse couvre aussi les risques stratégiques, les risques opérationnels, les risques humains, les risques réglementaires et juridiques, les risques immatériels et les risques environnementaux.'
      ],
      bullets: [
        'Risque stratégique : dépendance excessive à un client ou positionnement mal calibré',
        'Risque opérationnel : process critique porté par une seule personne ou chaîne d’approvisionnement tendue',
        'Risque humain : turnover, absentéisme, perte d’un collaborateur clé',
        'Risque réglementaire : mise en conformité insuffisante et responsabilité du dirigeant engagée',
        'Risque immatériel : réputation, cybersécurité, dépendance aux outils numériques',
        'Risque environnemental : aléas climatiques, pression carbone, exigences RSE des donneurs d’ordre'
      ],
    },
    {
      heading: 'Nommer un risque, c’est déjà commencer à le maîtriser',
      paragraphs: [
        "Une cartographie des risques n'est pas un exercice académique réservé aux grands groupes. C'est un outil de pilotage concret, accessible à toute PME — à condition d'aborder le sujet avec méthode plutôt qu'à la va-vite.",
        "L'objectif n'est pas d'éliminer tous les risques. C'est d'en avoir une vision claire : savoir lesquels sont prioritaires, lesquels peuvent être anticipés, lesquels peuvent être transformés en opportunités. Un risque réglementaire bien géré devient un avantage concurrentiel. Un risque humain identifié tôt peut être désamorcé avant de devenir une crise.",
        'Ce travail de diagnostic change profondément la façon dont une entreprise prend ses décisions — et dont elle se développe.'
      ],
    },
    {
      heading: 'Ce que les dirigeants les plus solides ont en commun',
      paragraphs: [
        "Ils ont décidé de regarder. Pas de regarder tout à la fois. Pas de tout résoudre d'un coup. Mais de poser un regard structuré sur leur entreprise, de nommer ce qui pourrait fragiliser leur activité, et d'agir dans le bon ordre.",
        "C'est précisément ce qui distingue une PME qui subit de celle qui pilote.",
        "Vous dirigez une PME en Île-de-France et vous n'avez jamais fait de cartographie globale de vos risques ? C'est souvent le premier chantier le plus utile. Un échange de 30 minutes suffit pour commencer à y voir clair."
      ],
    },
  ] as Section[],
}

export default function ArticlePage() {
  return (
    <main className="bg-white">
      <ArticleHero
        category={article.category}
        title={article.title}
        date={article.date}
        readingTime={article.readingTime}
        intro={article.intro}
      />
      <ArticleBody sections={article.sections} />
      <ArticleCta />
    </main>
  )
}
