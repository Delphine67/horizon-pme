import Link from "next/link";

export default function Methode() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F4F4F4] py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-6">
            Une méthode simple, structurée et efficace
          </h1>

          <p className="text-lg text-gray-600">
            Vous n'avez pas besoin d'une solution complexe,
            mais d'une approche claire pour avancer étape par étape.
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-lg text-gray-600">
            Mon accompagnement repose sur une progression simple,
            qui permet de clarifier votre situation, prioriser vos actions
            et avancer efficacement sans dispersion.
          </p>

        </div>
      </section>

      {/* ETAPES */}
      <section className="py-20 bg-[#2A4D69] text-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl text-center mb-16">
            Une progression en 4 étapes
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {/* ETAPE 1 */}
            <div className="bg-white text-[#2A4D69] p-6 rounded-xl hover:scale-105 transition">
              <p className="font-bold mb-2">01</p>
              <h3 className="font-semibold mb-2">Diagnostic</h3>
              <p className="text-sm">
                Comprendre votre situation, vos enjeux et vos priorités.
              </p>
            </div>

            {/* ETAPE 2 */}
            <div className="bg-[#FFD166] text-black p-6 rounded-xl hover:scale-105 transition">
              <p className="font-bold mb-2">02</p>
              <h3 className="font-semibold mb-2">Priorisation</h3>
              <p className="text-sm">
                Identifier les actions les plus utiles et les plus urgentes.
              </p>
            </div>

            {/* ETAPE 3 */}
            <div className="bg-[#7CB342] text-white p-6 rounded-xl hover:scale-105 transition">
              <p className="font-bold mb-2">03</p>
              <h3 className="font-semibold mb-2">Plan d'actions</h3>
              <p className="text-sm">
                Construire un plan clair, structuré et réaliste.
              </p>
            </div>

            {/* ETAPE 4 */}
            <div className="bg-black text-white p-6 rounded-xl hover:scale-105 transition">
              <p className="font-bold mb-2">04</p>
              <h3 className="font-semibold mb-2">Mise en œuvre</h3>
              <p className="text-sm">
                Vous accompagner dans l'action et l'ajustement.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFICES */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl mb-12">
            Ce que cette méthode vous permet
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow border-t-4 border-[#2A4D69]">
              Prendre du recul sur votre activité
            </div>

            <div className="bg-white p-6 rounded-xl shadow border-t-4 border-[#FFD166]">
              Décider plus facilement
            </div>

            <div className="bg-white p-6 rounded-xl shadow border-t-4 border-[#7CB342]">
              Avancer de manière structurée
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFD166] py-20 text-center">

        <h2 className="text-2xl mb-4">
          Faites un premier point sur votre situation
        </h2>

        <Link href="#">
          <button className="bg-[#2A4D69] text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Prendre rendez-vous
          </button>
        </Link>

      </section>

    </main>
  );
}