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
        La RSE en PME : contrainte ou véritable levier de performance ?
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p>
          La RSE est souvent perçue comme une obligation supplémentaire.
        </p>

        <p>
          Pourtant, elle peut devenir un véritable levier de différenciation
          et de performance.
        </p>

        <p>
          Structurer une démarche RSE permet d’améliorer l’image de l’entreprise,
          de fidéliser les clients et de mobiliser les équipes.
        </p>

        <p>
          Il ne s’agit pas de tout transformer, mais de partir de l’existant.
        </p>

        <p>
          Une approche pragmatique permet d’intégrer la RSE sans complexité.
        </p>

      </div>

      <div className="mt-12 bg-[#F4F4F4] p-6 rounded-xl text-center">
        <h2 className="font-semibold mb-4">
          Envie de structurer votre démarche RSE ?
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