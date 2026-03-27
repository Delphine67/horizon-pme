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
        Obligations réglementaires : contrainte ou levier de performance pour les PME ?
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p>
          Les obligations réglementaires sont souvent perçues comme une contrainte
          pour les PME. Elles demandent du temps, de la rigueur et des ressources.
        </p>

        <p>
          Pourtant, elles peuvent également devenir un levier de structuration.
          En les abordant de manière organisée, elles permettent de mieux maîtriser
          les risques et d'améliorer les pratiques internes.
        </p>

        <p>
          Par exemple, des démarches comme le DUERP ou le RGPD ne sont pas uniquement
          des obligations administratives. Elles apportent une meilleure visibilité
          sur les risques et les processus.
        </p>

        <p>
          Une approche structurée permet de transformer ces contraintes en outils
          de pilotage utiles pour la direction.
        </p>

        <p>
          L'enjeu n'est pas de faire plus, mais de faire mieux, avec des outils adaptés
          à la réalité de l'entreprise.
        </p>

      </div>

      <div className="mt-12 bg-[#F4F4F4] p-6 rounded-xl text-center">
        <h2 className="font-semibold mb-4">
          Besoin de structurer vos obligations ?
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