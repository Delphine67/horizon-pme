import Link from "next/link";

export default function Accompagnement() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F4F4F4] py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-6">
            Un accompagnement structuré pour faire avancer votre PME
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Vous avez besoin d'avancer, mais sans recruter, sans perdre du temps
            et sans multiplier les essais ?
            <br /><br />
            Je vous accompagne pour structurer, prioriser et piloter vos actions
            avec une approche concrète et adaptée à votre réalité.
          </p>

          <Link href="https://calendly.com/TON-LIEN">
            <button className="bg-[#FFD166] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Faire un premier point
            </button>
          </Link>

        </div>
      </section>

      {/* PROBLEME */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl mb-12 text-center">
            Vous avez besoin d'avancer, mais…
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Vous manquez de temps pour structurer",
              "Vous n'avez pas toutes les compétences en interne",
              "Vous hésitez à recruter",
              "Vous ne savez pas par où commencer",
            ].map((item, i) => (
              <div key={i} className="bg-[#F4F4F4] p-6 rounded-xl shadow hover:shadow-lg transition">
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* POSITIONNEMENT */}
      <section className="py-20 bg-[#2A4D69] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl mb-6">
            Mon rôle : vous aider à structurer et décider
          </h2>

          <p className="text-lg">
            Je ne remplace pas vos équipes.
            <br />
            Je vous apporte une vision, une méthode et un cadre pour avancer efficacement.
          </p>

        </div>
      </section>

      {/* FORMATS */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl mb-12">
            Un accompagnement adapté à votre besoin
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-t-4 border-[#2A4D69]">
              <h3 className="font-semibold mb-2">Mission ponctuelle</h3>
              <p className="text-sm">
                Répondre à un sujet précis ou débloquer une situation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-t-4 border-[#FFD166]">
              <h3 className="font-semibold mb-2">Accompagnement</h3>
              <p className="text-sm">
                Structurer un projet dans la durée avec un suivi régulier.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-t-4 border-[#7CB342]">
              <h3 className="font-semibold mb-2">Temps partagé</h3>
              <p className="text-sm">
                Bénéficier d'une expertise régulière sans recruter.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* METHODE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl mb-12">
            Une méthode simple et efficace
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-[#F4F4F4] p-6 rounded-xl">Diagnostic</div>
            <div className="bg-[#FFD166] p-6 rounded-xl">Priorisation</div>
            <div className="bg-[#2A4D69] text-white p-6 rounded-xl">Plan d'action</div>
            <div className="bg-black text-white p-6 rounded-xl">Mise en œuvre</div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFD166] py-20 text-center">

        <h2 className="text-2xl mb-4">
          Faisons le point sur votre situation
        </h2>

        <p className="mb-6">
          Un premier échange permet de clarifier vos priorités.
        </p>

        <Link href="https://calendly.com/TON-LIEN">
          <button className="bg-[#2A4D69] text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Prendre rendez-vous
          </button>
        </Link>

      </section>

    </main>
  );
}