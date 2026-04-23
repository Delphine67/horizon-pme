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
  title: 'PAPRIPACT : quand faut-il le formaliser et pourquoi ?' + ' | Horizon PME Solutions',
  description: 'PAPRIPACT : obligatoire dès 50 salariés, utile pour tous. Quand le formaliser, que doit-il contenir, et pourquoi s’en inspirer ?',
}

const article = {
  category: 'Sécurité & conformité',
  title: 'PAPRIPACT : quand faut-il le formaliser et pourquoi ?',
  date: '17 avril 2026',
  readingTime: '4 min de lecture',
  intro: 'Obligatoire dès 50 salariés, le PAPRIPACT est le prolongement concret du DUERP. Il transforme l’évaluation des risques en actions planifiées, budgétées et suivies. Même pour une PME plus petite, s’en inspirer est souvent très utile.',
  sections: [
    {
      heading: 'Le PAPRIPACT : vous y êtes peut-être obligé. Mais surtout, vous y avez intérêt.',
      paragraphs: [
        "Beaucoup de dirigeants de PME découvrent le PAPRIPACT lors d'un contrôle, d'une réunion CSE tendue, ou au moment de répondre à un appel d'offres public. Trop tard pour agir sereinement. Juste à temps pour réaliser qu'on aurait dû s'en occuper bien avant.",
        'Pourtant, derrière cet acronyme un peu austère se cache un outil concret, utile — et, pour les entreprises concernées, pleinement obligatoire.'
      ],
    },
    {
      heading: 'C’est quoi, exactement ?',
      paragraphs: [
        "Le PAPRIPACT — Programme Annuel de Prévention des Risques Professionnels et d'Amélioration des Conditions de Travail — est le plan d'action qui découle directement du DUERP. Là où le DUERP identifie et évalue les risques, le PAPRIPACT répond à la question suivante : qu'est-ce qu'on fait concrètement pour les réduire ?",
        "Ce n'est pas un document de plus. C'est le prolongement logique de l'évaluation des risques — la partie qui transforme le diagnostic en actions réelles, chiffrées, planifiées, avec des responsables désignés et des indicateurs de suivi."
      ],
    },
    {
      heading: 'Qui est concerné — et depuis quand ?',
      paragraphs: [
        "Le PAPRIPACT est obligatoire pour toutes les entreprises de 50 salariés et plus, depuis la loi Santé au Travail du 2 août 2021, entrée en vigueur le 31 mars 2022. Il doit être présenté chaque année au CSE dans le cadre de la consultation sur la politique sociale de l'entreprise.",
        "Pour les entreprises de moins de 50 salariés, la formalisation d'un PAPRIPACT distinct n'est pas obligatoire. Mais la logique reste la même : le DUERP doit contenir une liste d'actions de prévention concrètes, mise à jour régulièrement. En clair, l'esprit du PAPRIPACT s'applique à toutes les structures — seul le formalisme change selon la taille."
      ],
    },
    {
      heading: 'Ce que le document doit contenir',
      paragraphs: [
        "Un PAPRIPACT n'a pas de modèle officiel imposé. Mais son contenu est précisément encadré par le Code du travail. Il doit comporter cinq éléments essentiels : la liste détaillée des actions prévues pour l'année, les conditions d'exécution de chaque mesure, le calendrier de mise en œuvre, les responsables désignés et le budget prévisionnel associé.",
        "Ce cadre n'est pas une contrainte bureaucratique. C'est une discipline de gestion. Une entreprise qui sait ce qu'elle va faire, quand et avec quels moyens, pilote mieux que celle qui improvise au fil des incidents."
      ],
    },
    {
      heading: 'Le rôle du CSE : pas une formalité, un levier',
      paragraphs: [
        "Beaucoup d'employeurs présentent le PAPRIPACT au CSE comme une obligation à cocher. C'est une erreur — juridique et stratégique.",
        'Le dialogue avec les représentants du personnel peut enrichir la prévention, faire émerger des problèmes de terrain et renforcer l’appropriation des actions décidées. Un bon PAPRIPACT n’est pas seulement un document transmis. C’est un outil partagé.'
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
