"use client";

export default function Contact() {

  const formAction = "https://formspree.io/f/xzdkgkry";
  const mailTo = "delphine@horizonpmesolutions.fr";
  const calendarUrl = "https://calendly.com/dravet78/30min";

  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F4F4F4] py-12 text-center">
        <h1 className="text-4xl font-bold">
          Échangeons sur vos priorités
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* FORM */}
          <div className="lg:col-span-2">
            <form action={formAction} method="POST"
              className="bg-white p-8 rounded-xl border shadow-sm">

              <input type="hidden" name="_subject" value="Contact Horizon PME" />

              <div className="grid md:grid-cols-2 gap-4">
                <input name="nom" required placeholder="Nom *" className="input" />
                <input name="entreprise" required placeholder="Entreprise *" className="input" />
                <input name="email" required placeholder="Email *" className="input md:col-span-2" />
                <input name="telephone" placeholder="Téléphone" className="input md:col-span-2" />
              </div>

              <textarea name="message" required
                placeholder="Décrivez votre situation"
                className="mt-6 w-full min-h-[150px] input" />

              <button type="submit"
                className="mt-6 w-full bg-[#FFD166] py-3 rounded-xl font-semibold">
                Envoyer la demande
              </button>

            </form>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">

            <div className="bg-[#F4F4F4] p-6 rounded-xl">
              <p className="font-semibold mb-2">Zone d'intervention</p>
              <p>Île-de-France</p>
              <p className="mt-2">{mailTo}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="font-semibold mb-2">Premier échange</p>
              <ul className="text-sm space-y-1">
                <li>✔ Analyse rapide</li>
                <li>✔ 2-3 pistes d'amélioration</li>
                <li>✔ Orientation claire</li>
              </ul>

              <a href={calendarUrl} target="_blank"
                className="block mt-4 text-center bg-[#FFD166] py-3 rounded-xl font-semibold">
                Choisir un créneau
              </a>

              <a href={`mailto:${mailTo}`}
                className="block mt-3 text-center border py-3 rounded-xl">
                Envoyer un e-mail
              </a>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}