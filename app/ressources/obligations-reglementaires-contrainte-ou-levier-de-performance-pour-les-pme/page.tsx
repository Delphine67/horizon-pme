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
  title: 'Obligations réglementaires : contrainte ou levier de performance pour les PME ?' + ' | Horizon PME Solutions',
  description: 'DUERP, PAPRIPACT, RSE… Et si vos obligations réglementaires devenaient un vrai levier de performance pour votre PME ?',
}

const article = {
  category: 'Conformité & performance',
  title: 'Obligations réglementaires : contrainte ou levier de performance pour les PME ?',
  date: '19 avril 2026',
  readingTime: '5 min de lecture',
  intro: 'DUERP, PAPRIPACT, RSE, conformité : mal gérés, ces sujets coûtent. Bien structurés, ils rapportent. Une PME qui formalise ses obligations et sait les valoriser peut transformer la conformité en outil de pilotage et en avantage commercial.',
  sections: [
    {
      heading: 'Et si votre prochain avantage concurrentiel s’appelait… DUERP ?',
      paragraphs: [
        "Beaucoup de dirigeants de PME ont la même réaction quand on leur parle d'obligations réglementaires : un soupir, un regard vers le plafond, et un encore une contrainte. C'est humain. Le temps est rare, les équipes sont sollicitées, et les documents à produire s'accumulent.",
        'Pourtant, quelque chose cloche dans ce raisonnement.'
      ],
    },
    {
      heading: 'Ce que vous voyez comme un fardeau, vos concurrents le traitent comme un outil',
      paragraphs: [
        "Le DUERP est obligatoire dès le premier salarié. Le PAPRIPACT entre en jeu à partir de 50. La RSE s'impose progressivement dans les appels d'offres publics et privés. Le marketing, lui, doit intégrer ces réalités pour rester crédible.",
        'Ce sont trois sujets distincts. Mais ils ont un point commun : mal gérés, ils coûtent. Bien structurés, ils rapportent.'
      ],
    },
    {
      heading: 'Un document réglementaire peut-il vraiment faire gagner des marchés ?',
      paragraphs: [
        "La question peut sembler surprenante. Pourtant, depuis la loi Climat et Résilience de 2021, les critères RSE représentent jusqu'à 10 à 30 % de la note finale dans de nombreux appels d'offres publics. À partir d'août 2026, tout marché public devra intégrer au moins un critère environnemental. Ce n'est plus une option — c'est une réalité commerciale.",
        "Une PME qui a structuré son DUERP, formalisé sa démarche RSE et sait en parler dans un mémoire technique se retrouve en position de force face à une concurrente qui n'a rien documenté. Même si les deux entreprises font le même travail sur le terrain.",
        "Ce n'est pas une question de taille. C'est une question de méthode."
      ],
    },
    {
      heading: 'La vraie question n’est pas “dois-je le faire ?” mais “comment en tirer parti ?”',
      paragraphs: [
        "Prenons un exemple concret. Une PME industrielle met à jour son DUERP sérieusement : elle identifie des risques de TMS sur certains postes, met en place des rotations, réduit les arrêts de travail. Résultat : moins d'absentéisme, des équipes plus engagées, une meilleure productivité. Et en prime, un document solide à présenter lors d'un audit client ou d'un appel d'offres.",
        "Ce n'est pas de la conformité. C'est du pilotage.",
        'De la même façon, une démarche RSE bien construite — même modeste — devient un argument marketing tangible. Elle renforce la marque employeur, facilite le recrutement, fidélise les clients sensibles aux pratiques responsables. Elle donne du contenu à votre communication, là où les promesses vagues ne convainquent plus personne.'
      ],
    },
    {
      heading: 'L’erreur classique des PME : traiter ces sujets en urgence',
      paragraphs: [
        "Un DUERP fait à la va-vite la veille d'un contrôle. Une démarche RSE lancée parce qu'un client l'exige. Une communication construite sans fil directeur. Ce mode réactif coûte plus cher, prend plus de temps, et ne produit aucun avantage durable.",
        'La bonne approche est inverse : anticiper, structurer, puis valoriser. Ce qui ressemble à une contrainte administrative devient alors un système cohérent — un outil de gestion des risques, un levier de différenciation, un argument commercial.',
        "L'enjeu n'est pas de faire plus. C'est de faire mieux, avec des outils calibrés pour votre réalité."
      ],
    },
    {
      heading: 'Ce que la réglementation vous oblige à faire, autant en faire un atout',
      paragraphs: [
        "Les PME qui avancent ne sont pas celles qui ont plus de ressources. Ce sont celles qui ont décidé de traiter ces sujets comme des projets d'entreprise, pas comme des cases à cocher.",
        "La différence entre une contrainte et un levier, c'est souvent juste une question de regard — et d'accompagnement.",
        'Vous dirigez une PME en Île-de-France et ces sujets vous concernent ? Parlons-en. Un premier échange suffit souvent pour identifier où se situent les risques… et les opportunités.'
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
