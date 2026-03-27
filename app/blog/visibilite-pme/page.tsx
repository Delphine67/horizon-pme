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
        Pourquoi les PME manquent de visibilité (et comment y remédier efficacement)
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p>
          De nombreuses PME constatent un manque de visibilité, malgré des efforts réguliers.
          Site internet, réseaux sociaux, actions commerciales… les initiatives existent,
          mais les résultats restent limités.
        </p>

        <p>
          Dans la majorité des cas, le problème ne vient pas d’un manque d’actions,
          mais d’un manque de structuration. Les actions sont menées de manière isolée,
          sans vision globale ni cohérence.
        </p>

        <p>
          Cette dispersion entraîne une perte d’efficacité. Les dirigeants investissent
          du temps et des ressources sans toujours savoir ce qui fonctionne réellement.
        </p>

        <p>
          Retrouver de la visibilité nécessite d’abord de clarifier son positionnement,
          ses cibles et ses priorités. Il ne s’agit pas d’en faire plus, mais de faire mieux.
        </p>

        <p>
          Une approche structurée permet de concentrer les efforts sur les actions
          à plus forte valeur ajoutée et d’obtenir des résultats mesurables.
        </p>

      </div>

      <div className="mt-12 bg-[#F4F4F4] p-6 rounded-xl text-center">
        <h2 className="font-semibold mb-4">
          Manque de visibilité ?
        </h2>
        <p className="text-sm mb-4">
          Échangeons pour clarifier votre stratégie et vos priorités.
        </p>
        <Link href="/contact">
          <button className="bg-[#2A4D69] text-white px-6 py-3 rounded-xl">
            Prendre contact
          </button>
        </Link>
      </div>

    </main>
  );
}