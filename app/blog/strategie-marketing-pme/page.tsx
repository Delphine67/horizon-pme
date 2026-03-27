import Link from "next/link";

export default function Article() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* RETOUR */}
      <Link href="/blog">
        <p className="text-sm text-gray-500 mb-6 hover:underline cursor-pointer">
          ← Retour au blog
        </p>
      </Link>

      {/* TITRE */}
      <h1 className="text-3xl font-bold mb-6">
        Pourquoi une PME doit structurer sa stratégie marketing pour se développer durablement
      </h1>

      {/* INTRO */}
      <p className="text-gray-600 mb-6">
        Dans de nombreuses PME, le marketing repose encore sur des actions ponctuelles...
      </p>

      {/* CONTENU */}
      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p>
          L’absence de structuration marketing se traduit généralement par une dispersion des efforts...
        </p>

        <p>
          Mettre en place une stratégie marketing ne signifie pas complexifier l’organisation...
        </p>

        <p>
          Une stratégie marketing structurée permet également de mieux piloter l’activité...
        </p>

        <p>
          Dans un contexte où les PME doivent à la fois se développer...
        </p>

        <p>
          Enfin, une approche structurée permet d’adapter le marketing aux réalités de l’entreprise...
        </p>

      </div>

      {/* CTA */}
      <div className="mt-12 bg-[#F4F4F4] p-6 rounded-xl text-center">

        <h2 className="font-semibold mb-4">
          Besoin de structurer votre marketing ?
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          Échangeons sur votre situation et vos priorités.
        </p>

        <Link href="/contact">
          <button className="bg-[#2A4D69] text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Prendre contact
          </button>
        </Link>

      </div>

    </main>
  );
}