import Link from "next/link";
import Image from "next/image";

export default function APropos() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F4F4F4] py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-6">
            Une consultante expérimentée au service des PME
          </h1>

          <p className="text-lg text-gray-600">
            J’accompagne les dirigeants de PME pour structurer leur développement,
            sécuriser leurs pratiques et prendre des décisions plus sereinement.
          </p>

        </div>
      </section>

      {/* PARCOURS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <Image
              src="/photo-delphine.jpg"
              alt="Delphine Ravet"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              30 ans d’expérience dans des environnements exigeants
            </h2>

            <p className="mb-4 text-gray-600">
              J’ai évolué pendant plus de 30 ans dans des contextes variés,
              en accompagnant des entreprises sur des enjeux de marketing,
              d’organisation et de développement.
            </p>

            <p className="text-gray-600">
              Aujourd’hui, j’interviens auprès de PME qui doivent avancer vite,
              avec des ressources limitées et des enjeux multiples à gérer.
            </p>

          </div>

        </div>
      </section>

      {/* POSITIONNEMENT */}
      <section className="py-20 bg-[#2A4D69] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl mb-6">
            Une approche pragmatique et orientée résultats
          </h2>

          <p className="text-lg">
            Mon rôle n’est pas de produire des recommandations théoriques,
            mais de vous aider à structurer, décider et agir efficacement.
          </p>

        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-2xl mb-12">
            Ce qui guide mon accompagnement
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow border-t-4 border-[#2A4D69]">
              Approche concrète
            </div>

            <div className="bg-white p-6 rounded-xl shadow border-t-4 border-[#FFD166]">
              Adaptation à votre réalité
            </div>

            <div className="bg-white p-6 rounded-xl shadow border-t-4 border-[#7CB342]">
              Recherche de résultats
            </div>

          </div>

        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-2xl mb-6">
            Une posture différente
          </h2>

          <p className="text-gray-600">
            Je ne suis ni une agence, ni une consultante théorique.
            <br /><br />
            J'interviens comme un appui externe structurant,
            avec une vision globale et une capacité à adapter les solutions
            à votre contexte réel.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFD166] py-20 text-center">

        <h2 className="text-2xl mb-4">
          Échangeons sur votre situation
        </h2>

        <Link href="#">
          <button className="bg-[#2A4D69] text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Prendre contact
          </button>
        </Link>

      </section>

    </main>
  );
}