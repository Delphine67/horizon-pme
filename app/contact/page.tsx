"use client";

export default function Contact() {

  const formAction = "https://formspree.io/f/xzdkgkry";
  const mailTo = "delphine@horizonpmesolutions.fr";
  const calendarUrl = "https://calendly.com/dravet78/30min";

  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F4F4F4] py-20 text-center">
        <h1 className="text-4xl font-bold">Échangeons sur vos priorités</h1>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* FORM */}
          <form action={formAction} method="POST"
            className="md:col-span-2 bg-white p-8 rounded-xl shadow">

            <input type="hidden" name="_subject" value="Contact Horizon PME" />

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input name="nom" required placeholder="Nom *" className="input" />
              <input name="entreprise" required placeholder="Entreprise *" className="input" />
              <input name="email" required type="email" placeholder="Email *" className="input" />
              <input name="telephone" placeholder="Téléphone" className="input" />
            </div>

            <textarea name="message" required placeholder="Votre situation"
              className="input w-full min-h-[150px]" />

            <button type="submit"
              className="mt-6 w-full bg-[#FFD166] py-3 rounded-xl font-semibold">
              Envoyer la demande
            </button>

          </form>

          {/* SIDEBAR */}
          <div className="space-y-6">

            <div className="bg-[#F4F4F4] p-6 rounded-xl">
              <p>Île-de-France</p>
              <p><a href={`mailto:${mailTo}`}>{mailTo}</a></p>
            </div>

            <a href={calendarUrl} target="_blank"
              className="block text-center bg-[#FFD166] py-3 rounded-xl font-semibold">
              Choisir un créneau
            </a>

          </div>
        </div>
      </section>

      {/* CALENDLY */}
      <section className="pb-20">
        <iframe src={calendarUrl} width="100%" height="700"></iframe>
      </section>

    </main>
  );
}