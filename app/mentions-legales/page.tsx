const BRAND = {
  blue: '#2A4D69',
  green: '#7CB342',
  light: '#F4F4F4',
  text: '#5F7690',
}

export const metadata = {
  title: 'Mentions légales | Horizon PME Solutions',
  description: 'Mentions légales du site Horizon PME Solutions.',
}

export default function MentionsLegalesPage() {
  return (
    <main className="bg-white">
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
            style={{ background: '#EAEFF3', color: BRAND.blue }}
          >
            Informations légales
          </p>

          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
            style={{ color: BRAND.blue }}
          >
            Mentions légales
          </h1>
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-4xl mx-auto">
          <article className="rounded-[32px] bg-white p-8 md:p-12 border border-black/5 shadow-sm space-y-10">
            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                Éditeur du site
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Horizon PME Solutions
                <br />
                Delphine Ravet
                <br />
                Micro-entreprise
                <br />
                78600 Maisons-Laffitte / Île-de-France
                <br />
                Email : delphine@horizonpmesolutions.fr
                <br />
                Téléphone : 07 70 28 64 69
                <br />
                Siret : 89389420400013
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                Directeur de la publication
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Delphine Ravet
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                Hébergement
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Le site est hébergé par Vercel Inc.
                <br />
                440 N Barranca Ave #4133
                <br />
                Covina, CA 91723
                <br />
                États-Unis
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                Propriété intellectuelle
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                L’ensemble des contenus présents sur ce site, sauf mention contraire,
                est la propriété de Horizon PME Solutions. Toute reproduction,
                représentation, diffusion ou exploitation, totale ou partielle, sans
                autorisation préalable, est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                Responsabilité
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Les informations diffusées sur ce site sont fournies à titre
                informatif. Horizon PME Solutions s’efforce d’assurer leur exactitude
                et leur mise à jour, sans pouvoir garantir l’absence totale d’erreurs
                ou d’omissions.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  )
}