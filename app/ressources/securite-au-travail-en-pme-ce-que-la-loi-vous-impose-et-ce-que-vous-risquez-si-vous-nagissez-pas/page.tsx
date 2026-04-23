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
  title: 'Sécurité au travail en PME : ce que la loi vous impose et ce que vous risquez si vous n’agissez pas' + ' | Horizon PME Solutions',
  description: 'Sécurité au travail en PME : DUERP, formations, affichages, RPS… Ce que la loi impose et ce que vous risquez si vous n’agissez pas.',
}

const article = {
  category: 'Sécurité & conformité',
  title: 'Sécurité au travail en PME : ce que la loi vous impose et ce que vous risquez si vous n’agissez pas',
  date: '16 avril 2026',
  readingTime: '5 min de lecture',
  intro: 'La sécurité des salariés est l’un des domaines où les PME accumulent le plus de retard, souvent sans le savoir. Pourtant, en cas d’accident du travail ou de maladie professionnelle, c’est la responsabilité personnelle du dirigeant qui peut être engagée.',
  sections: [
    {
      heading: 'La sécurité des salariés : un sujet trop souvent relégué',
      paragraphs: [
        "La sécurité des salariés est l'un des domaines où les PME françaises accumulent le plus de retard — souvent sans le savoir. Non pas par mauvaise volonté, mais parce que les obligations légales en la matière sont nombreuses, peu connues des dirigeants non spécialisés, et rarement au cœur des priorités quotidiennes.",
        "Pourtant, en cas d'accident du travail ou de maladie professionnelle, c'est la responsabilité personnelle du dirigeant qui est engagée. Et les conséquences — pénales, financières, humaines — peuvent être considérables."
      ],
    },
    {
      heading: 'Ce que la loi impose à tout employeur',
      paragraphs: [
        "L'obligation de sécurité de l'employeur est inscrite dans le Code du travail. Elle est dite de résultat : il ne suffit pas d'avoir de bonnes intentions, il faut pouvoir démontrer que des mesures concrètes ont été mises en place pour protéger les salariés.",
        'Parmi les obligations les plus courantes et les plus souvent négligées dans les PME, plusieurs méritent une attention particulière.'
      ],
      bullets: [
        'Le DUERP, obligatoire dès le premier salarié, doit recenser tous les risques et prévoir un plan d’action.',
        'Les formations à la sécurité sont obligatoires pour les postes exposés et doivent être tracées et renouvelées.',
        'Les affichages obligatoires doivent être présents et à jour dans les locaux.',
        'La prévention des risques psychosociaux fait partie intégrante des obligations de l’employeur.'
      ],
    },
    {
      heading: 'Les conséquences concrètes d’un manquement',
      paragraphs: [
        "Un accident du travail dans une entreprise qui n'a pas respecté ses obligations de sécurité peut aboutir à une reconnaissance de faute inexcusable de l'employeur.",
        "Les conséquences sont alors multiples : majoration des indemnités versées au salarié, remboursement à la CPAM, sanctions pénales pouvant aller jusqu'à l'emprisonnement dans les cas les plus graves.",
        'Au-delà des aspects juridiques, les effets internes sont aussi très lourds : perte de confiance des équipes, désorganisation, absentéisme, atteinte à l’image employeur et parfois arrêt de l’activité.'
      ],
    },
    {
      heading: 'La sécurité comme investissement utile',
      paragraphs: [
        "Mettre une PME en conformité demande un effort initial, mais cet investissement se rentabilise rapidement : baisse des accidents, réduction de l'absentéisme, équipes plus stables et sérénité accrue du dirigeant.",
        "Un audit rapide permet souvent d'identifier en peu de temps ce qui est déjà en ordre, ce qui manque et ce qui mérite d'être priorisé.",
        "La sécurité n'est pas seulement un coût réglementaire. C'est aussi un levier de stabilité et de performance."
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
