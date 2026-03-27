import Link from "next/link";

export default function Blog() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F4F4F4] py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-6">
            Conseils et analyses pour les PME
          </h1>

          <p className="text-lg text-gray-600">
            Des contenus concrets pour vous aider à structurer votre activité,
            prendre du recul et avancer efficacement.
          </p>

        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-6">

            {/* ARTICLE 1 */}
            <Link href="/blog/visibilite-pme">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer border-t-4 border-[#2A4D69]">
                <h2 className="font-semibold mb-2">
                  Pourquoi les PME manquent de visibilité
                </h2>
                <p className="text-sm text-gray-600">
                  Comprendre les causes et retrouver de la cohérence.
                </p>
              </div>
            </Link>

            {/* ARTICLE 2 */}
            <Link href="/blog/priorites-pme">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer border-t-4 border-[#FFD166]">
                <h2 className="font-semibold mb-2">
                  Par où commencer quand tout est prioritaire
                </h2>
                <p className="text-sm text-gray-600">
                  Clarifier et prioriser efficacement.
                </p>
              </div>
            </Link>

            {/* ARTICLE 3 */}
            <Link href="/blog/obligations-pme">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer border-t-4 border-[#7CB342]">
                <h2 className="font-semibold mb-2">
                  Obligations réglementaires : contrainte ou levier ?
                </h2>
                <p className="text-sm text-gray-600">
                  Transformer les obligations en opportunités.
                </p>
              </div>
            </Link>

            {/* ARTICLE 4 */}
            <Link href="/blog/strategie-marketing-pme">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer border-t-4 border-[#2A4D69]">
                <h2 className="font-semibold mb-2">
                  Structurer sa stratégie marketing
                </h2>
                <p className="text-sm text-gray-600">
                  Passer d’actions isolées à une stratégie efficace.
                </p>
              </div>
            </Link>

            {/* ARTICLE 5 */}
            <Link href="/blog/marketing-externalise">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer border-t-4 border-[#FFD166]">
                <h2 className="font-semibold mb-2">
                  Le marketing externalisé
                </h2>
                <p className="text-sm text-gray-600">
                  Une solution souple pour structurer votre marketing.
                </p>
              </div>
            </Link>

            {/* ARTICLE 6 */}
            <Link href="/blog/gestion-risques-pme">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer border-t-4 border-[#7CB342]">
                <h2 className="font-semibold mb-2">
                  Gestion des risques en PME
                </h2>
                <p className="text-sm text-gray-600">
                  Anticiper et sécuriser votre activité.
                </p>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFD166] py-20 text-center">

        <h2 className="text-2xl mb-4">
          Besoin d’y voir plus clair ?
        </h2>

        <p className="mb-6">
          Échangeons sur votre situation et vos priorités.
        </p>

        <Link href="/contact">
          <button className="bg-[#2A4D69] text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Prendre contact
          </button>
        </Link>

      </section>

    </main>
  );
}