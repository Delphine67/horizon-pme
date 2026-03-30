import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F4F4F4] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Structurez et développez votre PME <br />
              <span className="text-[#2A4D69]">
                sans dispersion ni perte de temps
              </span>
            </h1>

            <p className="text-lg mb-8 text-gray-600">
              Vous dirigez une PME et devez avancer vite, prendre des décisions,
              répondre aux obligations et développer votre activité ?
              <br /><br />
              Je vous aide à structurer vos actions, sécuriser vos pratiques
              et obtenir des résultats concrets.
            </p>

            <div className="flex gap-4">

              <Link href="/contact">
                <button className="bg-[#FFD166] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                  Être accompagné
                </button>
              </Link>

              <Link href="/cas-concrets">
                <button className="border border-[#2A4D69] px-6 py-3 rounded-xl hover:bg-[#2A4D69] hover:text-white transition">
                  Voir des cas concrets
                </button>
              </Link>

            </div>

          </div>

          <div className="flex justify-center">
            <img src="/logo.svg" className="w-48 opacity-90" />
          </div>

        </div>
      </section>

      {/* PROBLEME */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-xl font-semibold mb-6">
              Vous êtes dans cette situation ?
            </h2>

            <ul className="space-y-3">
              <li>✔ Vous avancez sans vision claire</li>
              <li>✔ Vous subissez les obligations</li>
              <li>✔ Vous manquez de temps</li>
              <li>✔ Vous prenez des décisions sans visibilité</li>
            </ul>

            <Link href="/methode">
              <button className="mt-6 border px-5 py-2 rounded-lg hover:bg-[#2A4D69] hover:text-white transition">
                Découvrir la méthode
              </button>
            </Link>

          </div>

          <div className="bg-[#FFD166] p-6 rounded-xl flex items-center">
            <p className="font-semibold">
              Résultat : perte de temps, risques, manque de performance
            </p>
          </div>

        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-[#2A4D69] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl text-center mb-12">
            Des solutions concrètes pour faire avancer votre PME
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <Link href="/expertises">
              <div className="bg-white text-[#2A4D69] p-8 rounded-xl text-center hover:shadow-xl transition cursor-pointer">
                <img src="/picto-marketing.png" className="w-16 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Marketing</h3>
                <p>Développez votre activité avec cohérence</p>
              </div>
            </Link>

            <Link href="/expertises">
              <div className="bg-white text-[#2A4D69] p-8 rounded-xl text-center hover:shadow-xl transition cursor-pointer">
                <img src="/picto-securite.png" className="w-16 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Sécurité & conformité</h3>
                <p>Structurez et sécurisez votre activité</p>
              </div>
            </Link>

            <Link href="/expertises">
              <div className="bg-white text-[#2A4D69] p-8 rounded-xl text-center hover:shadow-xl transition cursor-pointer">
                <img src="/picto-rse.png" className="w-16 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">RSE & performance</h3>
                <p>Transformez vos obligations en opportunités</p>
              </div>
            </Link>

          </div>

          <div className="text-center mt-10">
            <Link href="/expertises">
              <button className="bg-[#FFD166] px-6 py-3 rounded-xl hover:scale-105 transition">
                Voir toutes les expertises
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* METHODE */}
      <section className="py-20 bg-[#F4F4F4] text-center">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl mb-12">
            Une progression simple et structurée
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl">Diagnostic</div>
            <div className="bg-[#FFD166] p-6 rounded-xl">Priorisation</div>
            <div className="bg-[#7CB342] text-white p-6 rounded-xl">Plan d'actions</div>
            <div className="bg-black text-white p-6 rounded-xl">Mise en œuvre</div>

          </div>

          <Link href="/methode">
            <button className="mt-10 bg-[#2A4D69] text-white px-6 py-3 rounded-xl hover:scale-105 transition">
              Comprendre la méthode complète
            </button>
          </Link>

        </div>
      </section>

      {/* CAS */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl mb-6">
            Des résultats concrets
          </h2>

          <p className="text-gray-600 mb-8">
            Découvrez des exemples d'accompagnement réalisés auprès de PME.
          </p>

          <Link href="/cas-concrets">
            <button className="border px-6 py-3 rounded-xl hover:bg-black hover:text-white transition">
              Voir des cas concrets
            </button>
          </Link>

        </div>
      </section>

      {/* BLOG */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl mb-10 text-center">
            Conseils pour les PME
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <Link href="/blog/visibilite-pme">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer">
                <h3 className="font-semibold mb-2">Manque de visibilité</h3>
                <p className="text-sm">Comprendre et agir efficacement</p>
              </div>
            </Link>

            <Link href="/blog/priorites-pme">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer">
                <h3 className="font-semibold mb-2">Tout est prioritaire</h3>
                <p className="text-sm">Comment structurer vos décisions</p>
              </div>
            </Link>

            <Link href="/blog/obligations-pme">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer">
                <h3 className="font-semibold mb-2">Obligations</h3>
                <p className="text-sm">Les transformer en opportunités</p>
              </div>
            </Link>

          </div>

          <div className="text-center mt-10">
            <Link href="/blog">
              <button className="bg-[#2A4D69] text-white px-6 py-3 rounded-xl">
                Voir tous les articles
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* FORMAT */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl mb-6">
            Un accompagnement adapté à votre situation
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#F4F4F4] p-6 rounded-xl">
              Mission ponctuelle
            </div>

            <div className="bg-[#FFD166] p-6 rounded-xl">
              Accompagnement régulier
            </div>

            <div className="bg-[#7CB342] text-white p-6 rounded-xl">
              Temps partagé
            </div>

          </div>

          <Link href="/accompagnement">
            <button className="mt-10 bg-[#2A4D69] text-white px-6 py-3 rounded-xl">
              Voir les modalités
            </button>
          </Link>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#FFD166] py-20 text-center">

        <h2 className="text-2xl mb-4">
          Faites un premier point sur votre situation
        </h2>

        <p className="mb-6">
          Un échange simple pour clarifier vos priorités.
        </p>

        <Link href="/contact">
          <button className="bg-[#2A4D69] text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Prendre rendez-vous
          </button>
        </Link>

      </section>

    </main>
  );
}