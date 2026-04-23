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
  title: 'DUERP 2026 : les points à vérifier pour une PME' + ' | Horizon PME Solutions',
  description: 'DUERP 2026 : nouvelles obligations, RPS, dématérialisation, conservation 40 ans. Votre document est-il vraiment à jour ? Ce que toute PME doit vérifier.',
}

const article = {
  category: 'Sécurité & conformité',
  title: 'DUERP 2026 : les points à vérifier pour une PME',
  date: '18 avril 2026',
  readingTime: '5 min de lecture',
  intro: "En 2026, le DUERP n'est plus un document qu'on remplit une fois pour l'oublier. Mise à jour annuelle, conservation pendant 40 ans, risques psychosociaux, dématérialisation : les obligations se renforcent et le document devient un véritable outil de pilotage.",
  sections: [
    {
      heading: 'Votre DUERP est peut-être à jour sur le papier. Mais l’est-il vraiment ?',
      paragraphs: [
        "C'est la question que beaucoup de dirigeants de PME évitent de se poser. Le document existe, il a été fait il y a peu, il est quelque part dans un dossier partagé ou un classeur. Ça devrait aller.",
        "Sauf que selon les estimations de l'Inspection du travail, près d'une entreprise française sur deux ne dispose pas d'un DUERP réellement à jour. Et en 2026, les exigences se sont renforcées. Un document obsolète est désormais juridiquement considéré comme inexistant — avec les conséquences que cela implique pour la responsabilité personnelle du dirigeant."
      ],
    },
    {
      heading: 'Ce qui a changé — et ce que vous devez vérifier',
      paragraphs: [
        "La loi Santé au Travail de 2021 a profondément transformé la nature du DUERP. Il ne s'agit plus d'un document statique qu'on sort lors d'un contrôle. C'est un outil vivant, soumis à des obligations précises que beaucoup de PME n'ont pas encore pleinement intégrées.",
        'Voici les points concrets à passer en revue.'
      ],
      bullets: [
        'La fréquence de mise à jour : au minimum annuelle pour les entreprises de 11 salariés et plus, et immédiatement après accident, réorganisation ou changement important.',
        'La conservation sur 40 ans : toutes les versions successives doivent être conservées.',
        'La dématérialisation : les PME doivent se préparer au dépôt numérique progressif.',
        'Les risques psychosociaux : un DUERP sans section dédiée aux RPS est incomplet.',
        'Les risques émergents : fortes chaleurs, télétravail, intensification numérique, nouveaux outils.'
      ],
    },
    {
      heading: 'Le DUERP n’est pas qu’un bouclier juridique',
      paragraphs: [
        "C'est là où beaucoup de PME passent à côté de la valeur réelle de cet exercice. Un DUERP bien construit — avec les équipes, à partir du terrain — révèle des dysfonctionnements qu'on ne voit pas au quotidien. Des postes fragilisants. Des organisations qui épuisent. Des risques qui, pris en charge tôt, coûtent infiniment moins cher qu'un accident ou un arrêt long.",
        "Les entreprises qui ont structuré une vraie politique de prévention observent en moyenne 23 % d'arrêts de travail en moins. C'est du temps de travail préservé, des équipes plus stables, et une marque employeur qui s'en ressent.",
        "En clair : faire son DUERP sérieusement, ce n'est pas juste être en règle. C'est décider de mieux piloter."
      ],
    },
    {
      heading: 'Et si votre DUERP n’était pas aussi à jour que vous le pensez ?',
      paragraphs: [
        "La réponse honnête, pour beaucoup de dirigeants de PME, est : probablement pas. Pas par négligence, mais parce que le quotidien prend le dessus, que les obligations évoluent vite, et que personne en interne n'a vraiment le temps ni la méthode pour s'en occuper sérieusement.",
        "C'est précisément là qu'un regard extérieur change tout.",
        "Vous n'êtes pas certain que votre DUERP soit conforme aux exigences 2026 ? C'est souvent le premier point qu'on peut vérifier ensemble rapidement."
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
