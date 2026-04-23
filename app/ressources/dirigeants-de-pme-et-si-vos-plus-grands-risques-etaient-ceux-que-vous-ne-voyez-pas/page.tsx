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
  title: 'Dirigeants de PME : et si vos plus grands risques étaient ceux que vous ne voyez pas ?' + ' | Horizon PME Solutions',
  description: 'Offre floue, sécurité des salariés, RSE : et si vos plus grands risques étaient ceux que vous ne voyez pas encore ? Faites le point sur les vrais enjeux.',
}

const article = {
  category: 'Vision globale',
  title: 'Dirigeants de PME : et si vos plus grands risques étaient ceux que vous ne voyez pas ?',
  date: '20 avril 2026',
  readingTime: '5 min de lecture',
  intro: "Gérer une PME, c'est avancer en permanence sur plusieurs fronts à la fois. Trois domaines concentrent aujourd'hui les risques les plus fréquents et les plus sous-estimés : l'offre, la sécurité des salariés et la RSE.",
  sections: [
    {
      heading: 'Trois risques souvent sous-estimés',
      paragraphs: [
        "Le quotidien opérationnel prend souvent toute la place, et certaines questions stratégiques — pourtant fondamentales — restent en suspens. Pas par négligence, mais par manque de temps, de méthode, ou simplement parce qu'on n'a pas encore mesuré ce qu'elles coûtent vraiment quand elles ne sont pas traitées.",
        "Trois domaines concentrent aujourd'hui les risques les plus fréquents et les plus sous-estimés dans les PME françaises : l'absence de stratégie marketing structurée, le non-respect des obligations légales en matière de sécurité des salariés, et le retard sur les enjeux RSE. Chacun de ces risques peut fragiliser une entreprise. Ensemble, ils peuvent compromettre sa pérennité."
      ],
    },
    {
      heading: 'Une offre mal définie, c’est une croissance impossible à piloter',
      paragraphs: [
        "Beaucoup de PME font du chiffre d'affaires sans pour autant avoir une stratégie marketing claire. Elles vendent, souvent bien, mais sans avoir formalisé ce qui fait réellement la valeur de leur offre, à qui elle s'adresse précisément, et pourquoi un client devrait les choisir plutôt qu'un concurrent.",
        "Ce flou a des conséquences très concrètes. Une offre mal définie ou mal positionnée rend difficile toute action de développement commercial cohérente. On ne sait pas sur quels segments concentrer ses efforts, on répond à tout sans vraiment se démarquer sur rien, et l'on subit les opportunités plutôt qu'on ne les crée. La dépendance à quelques clients historiques s'installe, et avec elle, une fragilité structurelle.",
        "Formaliser son offre — identifier ses segments prioritaires, clarifier sa proposition de valeur, construire un plan d'action commercial adapté à ses ressources — ce n'est pas réservé aux grands groupes. C'est précisément ce qui permet à une PME de croître de façon maîtrisée, sans disperser son énergie et son budget."
      ],
    },
    {
      heading: 'Sécurité des salariés : des obligations qui engagent directement le dirigeant',
      paragraphs: [
        "En matière de santé et sécurité au travail, la loi est claire : l'employeur est responsable de la protection physique et mentale de ses salariés. Cette responsabilité est personnelle, et les conséquences d'un manquement peuvent être lourdes — sanctions pénales, amendes, arrêt d'activité en cas d'accident grave.",
        "Pourtant, un grand nombre de PME n'ont pas mis en place les dispositifs pourtant obligatoires. Le DUERP est absent ou obsolète dans de nombreuses structures. Les affichages obligatoires ne sont pas à jour. Les formations à la sécurité ne sont pas organisées. Les procédures en cas d'accident ou de situation dangereuse n'existent pas.",
        "Ces manquements ne sont pas anodins. Un accident du travail dans une entreprise qui n'a pas respecté ses obligations expose son dirigeant à une mise en cause directe. Au-delà du risque juridique, c'est aussi la cohésion des équipes et la marque employeur qui en pâtissent."
      ],
    },
    {
      heading: 'RSE : d’une contrainte perçue à un véritable atout concurrentiel',
      paragraphs: [
        "La Responsabilité Sociétale des Entreprises est souvent vécue comme une affaire de grandes structures. Pour une PME, la réalité est plus simple — et l'opportunité plus immédiate qu'on ne le croit.",
        "Clients professionnels, partenaires, candidats à l'embauche, sous-traitants : toutes les parties prenantes accordent une attention croissante aux pratiques de l'entreprise avec laquelle elles travaillent ou envisagent de travailler.",
        "Une démarche RSE adaptée à la taille d'une PME n'a pas besoin d'être exhaustive pour être crédible. Elle peut démarrer par des actions concrètes et visibles. Ce qui compte, c'est la cohérence et la capacité à en parler avec des faits, pas des intentions."
      ],
    },
    {
      heading: 'La vraie question : par où commencer ?',
      paragraphs: [
        "Face à ces trois domaines, la difficulté pour un dirigeant de PME n'est généralement pas le manque de volonté — c'est le manque de visibilité. On sait qu'il y a des choses à faire, mais on ne sait pas précisément lesquelles, dans quel ordre, et avec quelles ressources.",
        "C'est là que réside toute la valeur d'une démarche structurée : identifier rapidement ce qui est obligatoire et non négociable, ce qui est prioritaire pour la sécurité de l'activité, et ce qui peut être planifié dans un second temps. Cette clarté change la façon de piloter l'entreprise — et elle est accessible à toute PME, quelle que soit sa taille.",
        "Vous n'avez pas encore fait cet état des lieux ? C'est probablement la première étape."
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
