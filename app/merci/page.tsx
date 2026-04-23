import Link from 'next/link'

const BRAND = {
  blue: '#2A4D69',
  yellow: '#FFD166',
  green: '#7CB342',
  light: '#F4F4F4',
  lightBlue: '#EEF3F7',
  text: '#5F7690',
}

export default function MerciPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden px-6 py-20 md:py-28 bg-white min-h-[70vh] flex items-center">
        <div
          className="absolute left-[-40px] top-[-30px] w-40 h-40 rounded-full opacity-70"
          style={{ background: '#EAEFF3' }}
        />
        <div
          className="absolute right-[-20px] top-[-20px] w-24 h-24 rounded-full opacity-70"
          style={{ background: '#FFF3CC' }}
        />
        <div
          className="absolute right-[8%] bottom-[10%] w-28 h-28 rounded-full opacity-60"
          style={{ background: '#E7F1DA' }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-5"
            style={{
              background: '#E7F1DA',
              color: BRAND.green,
            }}
          >
            Message envoyé
          </p>

          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
            style={{ color: BRAND.blue }}
          >
            Merci pour votre message
          </h1>

          <p
            className="mt-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: BRAND.text }}
          >
            Votre demande a bien été envoyée.
          </p>

          <p
            className="mt-4 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: BRAND.text }}
          >
            Je reviens vers vous rapidement pour faire un premier point sur votre
            situation et voir ce qui est le plus utile pour votre PME.
          </p>

          <div
            className="mt-10 rounded-[28px] p-6 md:p-8 border border-black/5 shadow-sm max-w-2xl mx-auto"
            style={{ background: BRAND.lightBlue }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{ color: BRAND.blue }}
            >
              Et maintenant ?
            </h2>

            <ul className="mt-6 space-y-3 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: BRAND.green }}
                />
                <span style={{ color: BRAND.text }}>
                  J’analyse votre demande et votre contexte.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: BRAND.green }}
                />
                <span style={{ color: BRAND.text }}>
                  Je vous réponds rapidement pour convenir de la suite.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: BRAND.green }}
                />
                <span style={{ color: BRAND.text }}>
                  Un premier échange permet souvent d’identifier 2 ou 3 priorités
                  concrètes.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-10 flex justify-center flex-wrap gap-4">
            <Link
              href="/cas-concrets"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
            >
              Voir des cas concrets
            </Link>

            <Link
              href="/ressources"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
            >
              Lire les ressources
            </Link>

            <Link
              href="/"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
            >
              Revenir à l’accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}