import Link from "next/link";

export default function Expertises() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F4F4F4] py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-6">
            Des expertises complémentaires au service de votre PME
          </h1>

          <p className="text-lg text-gray-600">
            J'interviens sur des sujets clés pour structurer votre activité,
            sécuriser vos pratiques et soutenir votre développement.
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-lg text-gray-600">
            Mon approche est globale : les sujets marketing, organisationnels
            et réglementaires sont souvent liés.
            <br /><br />
            L'objectif est de vous apporter une vision cohérente et opérationnelle.
          </p>

        </div>
      </section>

      {/* MARKETING */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="bg-[#E8F1F8] p-10 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-[#2A4D69]">
              Marketing responsable
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Structurer votre stratégie marketing</li>
              <li>Clarifier votre positionnement</li>
              <li>Prioriser vos actions</li>
              <li>Optimiser vos investissements</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600">
              Le marketing ne doit pas être une succession d'actions isolées.
              <br /><br />
              Il doit être structuré, cohérent et aligné avec vos objectifs
              pour produire des résultats durables.
            </p>
          </div>

        </div>
      </section>

      {/* SECURITE */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-gray-600">
              Les obligations peuvent être perçues comme des contraintes.
              <br /><br />
              Bien structurées, elles deviennent un levier de maîtrise
              et de sécurisation de votre activité.
            </p>
          </div>

          <div className="bg-[#EAF7ED] p-10 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-[#7CB342]">
              Sécurité & conformité
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Structurer vos obligations</li>
              <li>Limiter les risques</li>
              <li>Mettre en place des pratiques adaptées</li>
              <li>Gagner en sérénité</li>
            </ul>
          </div>

        </div>
      </section>

      {/* RSE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="bg-[#FFF9E6] p-10 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-[#C9A227]">
              RSE & performance
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>Structurer votre démarche RSE</li>
              <li>Valoriser vos engagements</li>
              <li>Transformer vos contraintes en opportunités</li>
              <li>Créer de la valeur durable</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600">
              La RSE n'est pas uniquement une obligation.
              <br /><br />
              Elle peut devenir un véritable levier de différenciation
              et de performance pour votre entreprise.
            </p>
          </div>

        </div>
      </section>

      {/* LIEN ACCOMPAGNEMENT */}
      <section className="py-20 bg-[#2A4D69] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl mb-6">
            Ces expertises s'intègrent dans un accompagnement global
          </h2>

          <p className="mb-8">
            Chaque situation est différente : l'enjeu est d'adapter l'intervention
            à votre besoin réel.
          </p>

          <Link href="/accompagnement">
            <button className="bg-[#FFD166] px-6 py-3 rounded-xl text-black hover:scale-105 transition">
              Découvrir l'accompagnement
            </button>
          </Link>

        </div>
      </section>

    </main>
  );
}