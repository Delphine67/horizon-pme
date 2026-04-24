import Link from 'next/link'

const BRAND = {
  blue: '#2A4D69',
  light: '#F4F4F4',
  lightBlue: '#EEF3F7',
  text: '#5F7690',
}

export type Section = {
  heading?: string
  paragraphs: string[]
}

export type ArticleData = {
  category: string
  title: string
  date: string
  readingTime: string
  intro: string
  sections: Section[]
}

function ArticleHero({ article }: { article: ArticleData }) {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-24 bg-white">
      <div
        className="absolute left-[-40px] top-[-30px] h-40 w-40 rounded-full opacity-70"
        style={{ background: '#EAEFF3' }}
      />
      <div
        className="absolute right-[-20px] top-[-20px] h-24 w-24 rounded-full opacity-70"
        style={{ background: '#E7F1DA' }}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p
          className="mb-5 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: '#EAEFF3', color: BRAND.blue }}
        >
          {article.category}
        </p>

        <h1
          className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
          style={{ color: BRAND.blue }}
        >
          {article.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-4 text-sm" style={{ color: BRAND.text }}>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readingTime}</span>
        </div>

        <p className="mt-8 text-lg leading-relaxed md:text-xl" style={{ color: BRAND.text }}>
          {article.intro}
        </p>
      </div>
    </section>
  )
}

function ArticleBody({ sections }: { sections: Section[] }) {
  return (
    <section className="px-6 py-20" style={{ background: BRAND.light }}>
      <div className="mx-auto max-w-4xl">
        <article className="rounded-[32px] border border-black/5 bg-white p-8 shadow-sm md:p-12">
          {sections.map((section, index) => (
            <div key={index} className={index === 0 ? '' : 'mt-12'}>
              {section.heading && (
                <h2
                  className="text-2xl font-bold leading-tight md:text-3xl"
                  style={{ color: BRAND.blue }}
                >
                  {section.heading}
                </h2>
              )}

              <div className={section.heading ? 'mt-5' : ''}>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className={pIndex === 0 ? 'leading-relaxed' : 'mt-5 leading-relaxed'}
                    style={{ color: BRAND.text }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div
            className="mt-12 rounded-[24px] border border-black/5 p-6"
            style={{ background: '#EEF3F7' }}
          >
            <p className="text-lg font-bold" style={{ color: '#2A4D69' }}>
              Delphine Ravet
            </p>
            <p className="mt-2" style={{ color: '#5F7690' }}>
              Horizon PME Solutions
            </p>
            <p className="mt-2 leading-relaxed" style={{ color: '#5F7690' }}>
              Conseil en stratégie, sécurité, RSE et performance pour PME.
              <br />
              Prenons un moment pour clarifier vos priorités.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function ArticleCta() {
  return (
    <section className="px-6 py-20" style={{ background: BRAND.lightBlue }}>
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="text-3xl font-bold leading-tight md:text-5xl"
          style={{ color: BRAND.blue }}
        >
          Besoin d’un regard extérieur sur votre situation ?
        </h2>

        <p
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed"
          style={{ color: BRAND.text }}
        >
          Un article permet d’y voir plus clair. Un échange permet souvent d’identifier plus rapidement
          ce qui mérite d’être traité dans votre PME.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-[#FFD166] px-6 py-3 font-semibold text-[#2A4D69] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F2C94C] hover:shadow-lg"
          >
            Faire le point sur votre situation
          </Link>

          <Link
            href="/ressources"
            className="inline-flex items-center rounded-xl border border-[#2A4D69] bg-white px-6 py-3 font-semibold text-[#2A4D69] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EEF3F7] hover:shadow-lg"
          >
            Revenir aux ressources
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ArticlePageTemplate({ article }: { article: ArticleData }) {
  return (
    <main className="bg-white">
      <ArticleHero article={article} />
      <ArticleBody sections={article.sections} />
      <ArticleCta />
    </main>
  )
}