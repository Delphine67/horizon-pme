import Link from 'next/link'

const BRAND = {
  blue: '#2A4D69',
  green: '#7CB342',
  light: '#F4F4F4',
  lightBlue: '#EEF3F7',
  text: '#5F7690',
}

export default function ArticlePage() {
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

        <div className="max-w-4xl mx-auto relative z-10">
          <p
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-5"
            style={{
              background: '#EAEFF3',
              color: BRAND.blue,
            }}
          >
            Catégorie de l’article
          </p>

          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
            style={{ color: BRAND.blue }}
          >
            Titre de l’article
          </h1>

          <div className="mt-6 flex flex-wrap gap-4 text-sm" style={{ color: BRAND.text }}>
            <span>22 avril 2026</span>
            <span>•</span>
            <span>5 min de lecture</span>
          </div>

          <p
            className="mt-8 text-lg md:text-xl leading-relaxed"
            style={{ color: BRAND.text }}
          >
            Résumé introductif de l’article. En 2 ou 3 phrases, expliquez ce que le lecteur
            va comprendre, ce qu’il va pouvoir en tirer, et pourquoi le sujet est important
            pour une PME.
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-4xl mx-auto">
          <article className="rounded-[32px] bg-white p-8 md:p-12 border border-black/5 shadow-sm">
            <h2
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: BRAND.blue }}
            >
              Premier intertitre
            </h2>

            <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
              Premier paragraphe de votre article.
            </p>

            <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
              Deuxième paragraphe de votre article.
            </p>

            <h2
              className="mt-12 text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: BRAND.blue }}
            >
              Deuxième intertitre
            </h2>

            <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
              Nouveau paragraphe.
            </p>

            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: BRAND.green }}
                />
                <span style={{ color: BRAND.text }}>Premier point clé</span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: BRAND.green }}
                />
                <span style={{ color: BRAND.text }}>Deuxième point clé</span>
              </li>
            </ul>

            <h2
              className="mt-12 text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: BRAND.blue }}
            >
              Troisième intertitre
            </h2>

            <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
              Conclusion ou ouverture.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20" style={{ background: BRAND.lightBlue }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ color: BRAND.blue }}
          >
            Besoin d’un regard extérieur
            <br />
            sur votre situation ?
          </h2>

          <p
            className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: BRAND.text }}
          >
            Un article permet d’y voir plus clair. Un échange permet souvent d’identifier
            plus rapidement ce qui mérite d’être traité dans votre PME.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
            >
              Faire le point sur votre situation
            </Link>

            <Link
              href="/ressources"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
            >
              Revenir aux ressources
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}