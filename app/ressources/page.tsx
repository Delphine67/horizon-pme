import Link from 'next/link'
import { articlesIndex, formatFrenchDate } from './articles-index'

const BRAND = {
  blue: '#2A4D69',
  green: '#7CB342',
  light: '#F4F4F4',
  lightBlue: '#EEF3F7',
  text: '#5F7690',
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-5"
      style={{
        background: '#EAEFF3',
        color: BRAND.blue,
      }}
    >
      {children}
    </p>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-3xl md:text-5xl font-bold leading-tight"
      style={{ color: BRAND.blue }}
    >
      {children}
    </h2>
  )
}

export default function RessourcesPage() {
  const sortedArticles = [...articlesIndex].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  const featured = sortedArticles.slice(0, 3)
  const others = sortedArticles.slice(3)

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24 bg-white">
        <div
          className="absolute left-[-40px] top-[-30px] w-40 h-40 rounded-full opacity-70"
          style={{ background: '#EAEFF3' }}
        />
        <div
          className="absolute right-[-20px] top-[-20px] w-24 h-24 rounded-full opacity-70"
          style={{ background: '#E7F1DA' }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <SectionTag>Ressources</SectionTag>

          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
            style={{ color: BRAND.blue }}
          >
            Conseils, analyses
            <br />
            et repères utiles
            <br />
            <span style={{ color: BRAND.green }}>pour les PME</span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
            style={{ color: BRAND.text }}
          >
            Retrouvez ici des articles concrets pour mieux comprendre vos priorités,
            vos obligations, vos risques et les leviers qui peuvent faire avancer
            votre PME.
          </p>
        </div>
      </section>

      {/* DERNIERS ARTICLES */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>À la une</SectionTag>
          <SectionTitle>Les derniers articles publiés</SectionTitle>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {featured.map((article, index) => (
              <article
                key={article.slug}
                className="rounded-[28px] p-8 border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background:
                    index === 0 ? '#FFFFFF' : index === 1 ? '#FFF8E1' : '#EEF7E8',
                }}
              >
                <p className="text-sm font-semibold" style={{ color: BRAND.green }}>
                  {article.category}
                </p>

                <p className="mt-2 text-sm" style={{ color: BRAND.text }}>
                  {formatFrenchDate(article.publishedAt)}
                </p>

                <h2
                  className="mt-4 text-2xl font-bold leading-snug"
                  style={{ color: BRAND.blue }}
                >
                  {article.title}
                </h2>

                <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                  {article.summary}
                </p>

                <Link
                  href={`/ressources/${article.slug}`}
                  className="mt-6 inline-flex font-semibold"
                  style={{ color: BRAND.blue }}
                >
                  Lire l’article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TOUS LES ARTICLES */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Toutes les ressources</SectionTag>
          <SectionTitle>Les autres articles</SectionTitle>

          <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {others.map((article) => (
              <article
                key={article.slug}
                className="rounded-[24px] bg-white p-8 border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-semibold" style={{ color: BRAND.green }}>
                  {article.category}
                </p>

                <p className="mt-2 text-sm" style={{ color: BRAND.text }}>
                  {formatFrenchDate(article.publishedAt)}
                </p>

                <h3
                  className="mt-4 text-2xl font-bold leading-snug"
                  style={{ color: BRAND.blue }}
                >
                  {article.title}
                </h3>

                <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                  {article.summary}
                </p>

                <Link
                  href={`/ressources/${article.slug}`}
                  className="mt-6 inline-flex font-semibold"
                  style={{ color: BRAND.blue }}
                >
                  Lire l’article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20" style={{ background: BRAND.lightBlue }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionTag>Besoin d’un regard extérieur ?</SectionTag>

          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ color: BRAND.blue }}
          >
            Faites le point
            <br />
            sur votre situation
          </h2>

          <p
            className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: BRAND.text }}
          >
            Lire des articles permet d’y voir plus clair. Un échange permet souvent
            d’identifier ce qui mérite d’être traité en priorité dans votre PME.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
            >
              Faire le point sur votre situation
            </Link>

            <Link
              href="/expertises"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
            >
              Voir les expertises
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}