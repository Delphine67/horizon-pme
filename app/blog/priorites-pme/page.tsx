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
        Par où commencer quand tout semble prioritaire dans une PME ?
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p>
          Dans une PME, tout peut rapidement devenir urgent : développement commercial,
          obligations réglementaires, gestion des équipes, organisation interne.
        </p>

        <p>
          Cette accumulation crée une pression constante et rend les décisions plus complexes.
          Le risque est alors de traiter les sujets au fil de l’eau, sans réelle priorisation.
        </p>

        <p>
          Pourtant, toutes les actions n’ont pas le même impact. Certaines permettent
          de débloquer des situations, d’autres consomment du temps sans réelle valeur.
        </p>

        <p>
          La première étape consiste à prendre du recul pour identifier les enjeux majeurs
          de l’entreprise : risques, opportunités, points de blocage.
        </p>

        <p>
          Une fois ces éléments clarifiés, il devient possible de prioriser les actions
          et d’avancer de manière structurée, sans dispersion.
        </p>

      </div>

      <div className="mt-12 bg-[#F4F4F4] p-6 rounded-xl text-center">
        <h2 className="font-semibold mb-4">
          Besoin de prioriser efficacement ?
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