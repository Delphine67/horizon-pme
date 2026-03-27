"use client";

export default function Contact() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F4F4F4] py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h1 className="text-3xl font-bold mb-4">
            Échangeons sur vos priorités
          </h1>

          <p className="text-gray-600">
            Vous avez besoin de structurer votre développement, clarifier un projet
            ou sécuriser certaines décisions ? Décrivez votre situation et je reviens vers vous.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* FORMULAIRE */}
          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow">

            <h2 className="font-semibold mb-6">Parlons de votre projet</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-4">

              <input placeholder="Nom et prénom *" className="border p-3 rounded-lg" />
              <input placeholder="Entreprise *" className="border p-3 rounded-lg" />

              <input placeholder="Secteur d’activité" className="border p-3 rounded-lg" />
              <input placeholder="Téléphone" className="border p-3 rounded-lg" />

            </div>

            <input placeholder="Email *" className="border p-3 rounded-lg w-full mb-4" />

            <textarea
              placeholder="Décrivez votre situation (objectifs, difficultés, contexte...)"
              className="border p-3 rounded-lg w-full h-32 mb-6"
            />

            <button className="bg-[#2A4D69] text-white px-6 py-3 rounded-xl hover:scale-105 transition">
              Envoyer la demande
            </button>

          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* ZONE */}
            <div className="bg-[#F4F4F4] p-6 rounded-xl text-sm">

              <p className="font-semibold mb-3">Zone d’intervention</p>

              <ul className="space-y-2 text-gray-600">
                <li>Île-de-France</li>
                <li>Yvelines, Hauts-de-Seine, Paris</li>
              </ul>

              <div className="mt-4 text-gray-600">
                <p>delphine@horizonpmesolutions.fr</p>
              </div>

            </div>

            {/* RDV */}
            <div className="bg-white p-6 rounded-xl shadow text-center">

              <p className="font-semibold mb-3">Premier échange</p>

              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>✔ Analyse rapide de votre situation</li>
                <li>✔ 2-3 pistes d’amélioration</li>
                <li>✔ Orientation claire</li>
              </ul>

              <a href="https://calendly.com/dravet78/30min" target="_blank">
                <button className="w-full bg-[#FFD166] py-3 rounded-xl font-semibold hover:scale-105 transition">
                  Choisir un créneau
                </button>
              </a>

            </div>

            {/* TEMOIGNAGE */}
            <div className="bg-[#F4F4F4] p-6 rounded-xl text-sm">

              <p className="italic">
                “Approche concrète, efficace et adaptée à nos enjeux.”
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CALENDLY */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-xl shadow overflow-hidden">

            <iframe
              src="https://calendly.com/dravet78/30min"
              width="100%"
              height="700"
            ></iframe>

          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Aucun engagement • Échange confidentiel • Réponse adaptée à votre situation
          </p>

        </div>
      </section>

    </main>
  );
}