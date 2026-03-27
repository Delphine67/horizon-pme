import Link from "next/link";

export default function Article() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      <Link href="/blog">
        <p className="text-sm text-gray-500 mb-6 hover:underline cursor-pointer">
          ← Retour au blog
        </p>
      </Link>

      <h1 className="text-3xl font-bold mb-6">
        PME : assurer sa conformité RGPD en 7 étapes clés
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p>
          Le RGPD concerne toutes les PME, quel que soit leur secteur.
        </p>

        <p>
          La première étape consiste à identifier les données collectées et leur usage.
        </p>

        <p>
          Il est ensuite nécessaire de sécuriser les données et de formaliser les procédures.
        </p>

        <p>
          Informer les clients et collaborateurs est également une obligation essentielle.
        </p>

        <p>
          Une démarche progressive permet de se mettre en conformité sans complexifier l'organisation.
        </p>

      </div>

      <div className="mt-12 bg-[#F4F4F4] p-6 rounded-xl text-center">
        <h2 className="font-semibold mb-4">
          Besoin de structurer votre conformité ?
        </h2>
        <Link href="/contact">
          <button className="bg-[#2A4D69] text-white px-6 py-3 rounded-xl">
            Prendre contact
          </button>
        </Link>
      </div>

    </main>
  );
}