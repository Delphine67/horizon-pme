"use client";

import { useState } from "react";

const BRAND = {
  yellow: "#FFD166",
  grayBg: "#F4F4F4",
  text: "#111827",
};

export default function Contact() {
  const formAction = "https://formspree.io/f/xzdkgkry";
  const mailTo = "delphine@horizonpmesolutions.fr";
  const calendarUrl = "https://calendly.com/dravet78/30min";
  const telephone = "07 70 28 64 69";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const chipStyle =
    "border px-3 py-1.5 rounded-full text-sm cursor-pointer transition";
  const inputStyle =
    "mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:border-black outline-none";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        window.location.href = "/merci";
        return;
      }

      setErrorMessage("L’envoi a échoué. Merci de réessayer.");
    } catch {
      setErrorMessage("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white" style={{ color: BRAND.text }}>
      {/* HERO */}
      <section className="py-12 text-center" style={{ background: BRAND.grayBg }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Échangeons sur vos priorités</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Vous souhaitez clarifier des risques, sécuriser certaines décisions,
            structurer une démarche ou faire le point sur vos obligations ? Décrivez
            votre situation et je reviens vers vous rapidement.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* FORM */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl border shadow-sm"
            >
              <input type="hidden" name="_subject" value="Contact Horizon PME" />
              <input type="text" name="_gotcha" className="hidden" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label>Nom et prénom *</label>
                  <input
                    name="nom"
                    required
                    placeholder="Votre nom"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label>Entreprise *</label>
                  <input
                    name="entreprise"
                    required
                    placeholder="Nom de l’entreprise"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label>Ville *</label>
                  <input
                    name="ville"
                    required
                    placeholder="Ex : Nanterre"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label>Code postal *</label>
                  <input
                    name="code_postal"
                    required
                    placeholder="Ex : 92000"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label>Taille de l’entreprise *</label>
                  <select
                    name="taille"
                    required
                    defaultValue=""
                    className={inputStyle}
                  >
                    <option value="" disabled>
                      Sélectionner
                    </option>
                    <option value="-10">Moins de 10 salariés</option>
                    <option value="10-49">10 à 49 salariés</option>
                    <option value="50-250">50 à 250 salariés</option>
                    <option value="250+">Plus de 250 salariés</option>
                  </select>
                </div>

                <div>
                  <label>Secteur d’activité *</label>
                  <select
                    name="secteur"
                    required
                    defaultValue=""
                    className={inputStyle}
                  >
                    <option value="" disabled>
                      Sélectionner
                    </option>
                    <option value="Industrie">Industrie</option>
                    <option value="BTP">BTP</option>
                    <option value="Immobilier">Immobilier</option>
                    <option value="Gestion immobilière">Gestion immobilière</option>
                    <option value="Services">Services</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Transport">Transport</option>
                    <option value="Santé">Santé</option>
                    <option value="Finance">Finance</option>
                    <option value="IT / Digital">IT / Digital</option>
                    <option value="Éducation">Éducation</option>
                    <option value="Hôtellerie / Restauration">
                      Hôtellerie / Restauration
                    </option>
                    <option value="Associatif">Associatif</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label>Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="vous@entreprise.fr"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label>Téléphone</label>
                  <input
                    name="telephone"
                    placeholder="06..."
                    className={inputStyle}
                  />
                </div>
              </div>

              {/* BESOIN */}
              <div className="mt-8">
                <label>Votre besoin</label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    "Faire le point",
                    "Diagnostic des risques",
                    "Risques stratégiques",
                    "Risques commerciaux / marketing",
                    "Mise en conformité sécurité",
                    "Risques RSE",
                    "Mission ponctuelle",
                    "Mission projet",
                    "Accompagnement",
                  ].map((item) => (
                    <label key={item}>
                      <input
                        type="checkbox"
                        name="besoin[]"
                        value={item}
                        className="hidden peer"
                      />
                      <span
                        className={`${chipStyle} peer-checked:bg-amber-300 peer-checked:border-amber-300`}
                      >
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* FORMAT */}
              <div className="mt-8">
                <label>Format souhaité</label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    "Mission ponctuelle",
                    "Mission projet",
                    "Accompagnement récurrent",
                    "À définir ensemble",
                  ].map((item) => (
                    <label key={item}>
                      <input
                        type="radio"
                        name="format"
                        value={item}
                        className="hidden peer"
                      />
                      <span
                        className={`${chipStyle} peer-checked:bg-amber-300 peer-checked:border-amber-300`}
                      >
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* MESSAGE */}
              <div className="mt-8">
                <label>Décrivez votre situation *</label>
                <textarea
                  name="message"
                  required
                  placeholder="Contexte, difficultés rencontrées, objectifs, échéance…"
                  className={`${inputStyle} min-h-[150px]`}
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl font-semibold disabled:opacity-60"
                  style={{ background: BRAND.yellow }}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                </button>

                {errorMessage && (
                  <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
                )}
              </div>
            </form>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div
              className="p-6 rounded-xl"
              style={{ background: BRAND.grayBg }}
            >
              <p className="font-semibold mb-2">Zone d’intervention</p>
              <p>Île-de-France</p>
              <p className="mt-2">{mailTo}</p>
              <p>{telephone}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border">
              <p className="font-semibold mb-2">Premier échange</p>
              <ul className="text-sm space-y-1">
                <li>✔ Analyse rapide</li>
                <li>✔ 2–3 pistes d’amélioration</li>
                <li>✔ Orientation claire</li>
              </ul>

              <a
                href={calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="block mt-4 text-center py-3 rounded-xl font-semibold"
                style={{ background: BRAND.yellow }}
              >
                Choisir un créneau
              </a>

              <a
                href={`mailto:${mailTo}`}
                className="block mt-3 text-center border py-3 rounded-xl"
              >
                Envoyer un e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}