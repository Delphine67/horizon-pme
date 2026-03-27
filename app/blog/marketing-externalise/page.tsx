export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">
        Marketing externalise : un levier concret pour structurer et accelerer votre PME
      </h1>

      <p className="mb-4">
        De nombreuses PME avancent sans strategie marketing structuree. Les actions sont souvent ponctuelles et peu pilotees.
      </p>

      <p className="mb-4">
        Le marketing externalise permet de beneficier d'une expertise experimentee sans recruter immediatement.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Pourquoi externaliser ?
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Prendre du recul sur votre activite</li>
        <li>Structurer vos actions</li>
        <li>Gagner en visibilite</li>
        <li>Optimiser vos investissements</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Un format adaptable
      </h2>

      <p className="mb-6">
        L'accompagnement peut etre ponctuel, en mode projet ou en temps partage.
      </p>

      <div className="mt-10">
        <a
          href="/contact"
          className="inline-block bg-[#2a4d69] text-white px-6 py-3 rounded-xl hover:bg-[#1f3a52] transition"
        >
          Echanger sur votre situation
        </a>
      </div>
    </main>
  );
}