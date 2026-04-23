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
  title: 'Par où commencer quand tout semble prioritaire dans une PME ?' + ' | Horizon PME Solutions',
  description: 'Sécurité, RSE, marketing : et si vos obligations réglementaires devenaient vos meilleurs leviers de croissance ? Découvrez comment reprendre le contrôle.',
}

const article = {
  category: 'Pilotage & priorités',
  title: 'Par où commencer quand tout semble prioritaire dans une PME ?',
  date: '22 avril 2026',
  readingTime: '4 min de lecture',
  intro: "Dans une PME, la surcharge du quotidien pousse souvent à traiter les sujets dans l'urgence plutôt que par ordre d'importance. Sécurité, RSE, marketing : ces trois leviers sont fréquemment relégués au second plan — jusqu'à ce qu'ils deviennent un problème.",
  sections: [
    {
      heading: 'Trop de sujets à gérer en même temps ?',
      paragraphs: [
        "Vous connaissez cette sensation : une journée qui commence avec trois priorités, et qui se termine avec douze dossiers ouverts, aucun vraiment avancé. Dans une PME, c'est presque la norme. Le développement commercial, les obligations réglementaires, les équipes, l'organisation… Tout semble urgent. Tout arrive en même temps.",
        "Et c'est précisément dans cet état de saturation que se prennent les mauvaises décisions."
      ],
    },
    {
      heading: 'Quand tout est prioritaire, rien ne l’est vraiment',
      paragraphs: [
        "Le problème n'est pas le manque de travail. C'est le manque de lisibilité. Sans recul, on traite les sujets dans l'ordre où ils se présentent — pas dans l'ordre où ils comptent. On règle ce qui fait du bruit, on reporte ce qui semble moins urgent. Jusqu'au jour où ce qui était moins urgent devient un risque réel.",
        "Un DUERP non mis à jour. Une démarche RSE absente d'un mémoire technique. Une offre produits qui ne correspond plus à la demande du marché ciblé. Une communication qui ne reflète plus la réalité de l'entreprise. Des signaux faibles, longtemps ignorés, qui finissent par coûter cher."
      ],
    },
    {
      heading: 'La première valeur ajoutée d’un regard extérieur',
      paragraphs: [
        "Avant de résoudre quoi que ce soit, il faut voir clairement. Quels sont les risques réels ? Où sont les opportunités que l'entreprise ne saisit pas, faute de temps ? Quels points de blocage freinent la croissance sans qu'on s'en rende vraiment compte ?",
        "Ce diagnostic, la plupart des dirigeants n'ont pas le temps de le faire seuls. Pas parce qu'ils manquent de compétences — mais parce qu'ils sont dedans. Et quand on est dedans, on ne voit pas ce qu'on ne voit pas."
      ],
    },
    {
      heading: 'Sécurité, RSE, marketing : trois sujets trop souvent traités dans l’urgence',
      paragraphs: [
        'Ces trois leviers ont un point commun : quand ils sont subis, ils coûtent. Quand ils sont anticipés, ils créent de la valeur.',
        "Un DUERP construit sérieusement réduit l'absentéisme et protège l'employeur. Un PAPRIPACT bien structuré devient un outil de pilotage RH. Une démarche RSE documentée pèse jusqu'à 30 % de la note dans un appel d'offres public. Une nouvelle gamme en phase avec les nouveaux besoins des consommateurs. Une communication alignée sur les valeurs réelles de l'entreprise construit une réputation durable.",
        'Ce ne sont pas des contraintes administratives. Ce sont des leviers de performance — à condition de les aborder dans le bon ordre, avec la bonne méthode.'
      ],
    },
    {
      heading: 'Faire moins, mais faire mieux',
      paragraphs: [
        "L'objectif n'est pas d'ajouter des chantiers à une liste déjà longue. C'est de transformer ce que vous êtes déjà obligé de faire en quelque chose d'utile. De passer d'une logique de conformité subie à une logique de pilotage choisie.",
        'Ce changement de posture ne demande pas plus de ressources. Il demande une méthode, un regard extérieur, et un peu de recul que le quotidien ne laisse pas toujours.',
        "Vous dirigez une PME en Île-de-France et vous reconnaissez une partie de ce tableau ? Prenons le temps d'un échange. Ensemble, on identifie les vrais enjeux — et on construit un plan d'action qui tient la route."
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
