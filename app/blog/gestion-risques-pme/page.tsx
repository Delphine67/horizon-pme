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
        PME : pourquoi la gestion des risques est devenue incontournable
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p>
          Les PME sont confrontées à des risques multiples : réglementaires, humains,
          opérationnels ou financiers.
        </p>

        <p>
          Souvent perçue comme une contrainte, la gestion des risques est en réalité
          un levier de pilotage et de sécurisation.
        </p>

        <p>
          Identifier les risques permet d'anticiper les situations critiques et
          de prendre des décisions plus éclairées.
        </p>

        <p>
          Une démarche structurée permet également de mieux impliquer les équipes
          et de renforcer la culture d'entreprise.
        </p>

        <p>
          Pour une PME, il ne s'agit pas de complexifier, mais de mettre en place
          des outils simples et adaptés.
        </p>

      </div>

      <div className="mt-12 bg-[#F4F4F4] p-6 rounded-xl text-center">
        <h2 className="font-semibold mb-4">
          Besoin de sécuriser votre activité ?
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