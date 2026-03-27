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
        DUERP : transformer une obligation en levier de performance pour votre PME
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p>
          Le DUERP est souvent perçu comme une obligation administrative.
        </p>

        <p>
          Pourtant, bien utilisé, il permet d’identifier les risques et
          d’améliorer les conditions de travail.
        </p>

        <p>
          Il constitue un outil de pilotage utile pour la direction.
        </p>

        <p>
          Il permet également d’impliquer les équipes dans une démarche
          de prévention.
        </p>

        <p>
          Une approche structurée transforme cette obligation en levier
          de performance durable.
        </p>

      </div>

      <div className="mt-12 bg-[#F4F4F4] p-6 rounded-xl text-center">
        <h2 className="font-semibold mb-4">
          Besoin de structurer votre DUERP ?
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