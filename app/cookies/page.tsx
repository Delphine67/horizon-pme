const BRAND = {
  blue: '#2A4D69',
  green: '#7CB342',
  light: '#F4F4F4',
  text: '#5F7690',
}

export const metadata = {
  title: 'Politique de cookies | Horizon PME Solutions',
  description: 'Politique de coockies du site Horizon PME Solutions.',
}

export default function cookiesPage() {
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
            Données personnelles
          </p>

          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
            style={{ color: BRAND.blue }}
          >
            Politique de cookies
          </h1>
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-4xl mx-auto">
          <article className="rounded-[32px] bg-white p-8 md:p-12 border border-black/5 shadow-sm space-y-10">
            <section>
              
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Le site Horizon PME Solutions utilise des cookies uniquement pour améliorer l’expérience utilisateur.
                </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                Qu’est-ce qu’un cookie ?
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Un cookie est un petit fichier stocké sur votre ordinateur lors de la consultation d’un site web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                Utilisation
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Aucun cookie publicitaire n’est utilisé actuellement.
                </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                Gestion
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Vous pouvez configurer votre navigateur pour refuser les cookies.
                </p>
            </section>
       
          </article>
        </div>
      </section>
    </main>
  )
}