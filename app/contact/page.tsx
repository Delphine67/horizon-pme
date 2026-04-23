'use client'

import { useState } from 'react'

const BRAND = {
  yellow: '#FFD166',
  green: '#7CB342',
  light: '#F4F4F4',
  lightBlue: '#EEF3F7',
  blue: '#2A4D69',
  text: '#5F7690',
}

export default function ContactPage() {
  const formAction = 'https://formspree.io/f/xzdkgkry'
  const mailTo = 'delphine@horizonpmesolutions.fr'
  const calendarUrl = 'https://calendly.com/dravet78/30min'
  const telephone = '07 70 28 64 69'

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const chipStyle =
    'border px-3 py-1.5 rounded-full text-sm cursor-pointer transition bg-white text-[#2A4D69] border-[#2A4D69] hover:bg-[#EEF3F7]'
  const inputStyle =
    'mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:border-[#2A4D69] outline-none'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        form.reset()
        window.location.href = '/merci'
        return
      }

      setErrorMessage("L’envoi a échoué. Merci de réessayer.")
    } catch {
      setErrorMessage("Une erreur est survenue. Merci de réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24 bg-white">
        <div
          className="absolute left-[-40px] top-[-30px] w-40 h-40 rounded-full opacity-70"
          style={{ background: '#EAEFF3' }}
        />
        <div
          className="absolute right-[-20px] top-[-20px] w-24 h-24 rounded-full opacity-70"
          style={{ background: '#E7F1DA' }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start relative z-10">
          <div>
            <p
              className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-5"
              style={{ background: '#E7F1DA', color: BRAND.green }}
            >
              Contact
            </p>

            <h1
              className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
              style={{ color: BRAND.blue }}
            >
              Échangeons
              <br />
              sur vos priorités
            </h1>

            <p
              className="mt-8 text-lg md:text-xl leading-relaxed max-w-2xl"
              style={{ color: BRAND.text }}
            >
              Vous souhaitez clarifier des risques, structurer une démarche, faire
              le point sur vos obligations ou savoir par où commencer ?
            </p>

            <p
              className="mt-4 text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: BRAND.text }}
            >
              Remplissez le formulaire ou contactez-moi directement. Je vous réponds
              rapidement pour voir ce qui est le plus utile à votre situation.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold"
                  style={{ background: '#EAEFF3', color: BRAND.blue }}
                >
                  ✉
                </div>
                <div>
                  <p className="text-sm" style={{ color: BRAND.text }}>
                    Email
                  </p>
                  <p className="font-semibold" style={{ color: BRAND.blue }}>
                    {mailTo}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold"
                  style={{ background: '#E7F1DA', color: BRAND.green }}
                >
                  ☎
                </div>
                <div>
                  <p className="text-sm" style={{ color: BRAND.text }}>
                    Téléphone
                  </p>
                  <p className="font-semibold" style={{ color: BRAND.blue }}>
                    {telephone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold"
                  style={{ background: '#FFF3CC', color: BRAND.blue }}
                >
                  ⌖
                </div>
                <div>
                  <p className="text-sm" style={{ color: BRAND.text }}>
                    Zone d’intervention
                  </p>
                  <p className="font-semibold" style={{ color: BRAND.blue }}>
                    Île-de-France
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mt-10 rounded-[24px] p-6 border"
              style={{
                background: '#EEF7E8',
                borderColor: '#CFE3B8',
              }}
            >
              <p className="font-semibold" style={{ color: BRAND.blue }}>
                Diagnostic général gratuit offert
              </p>
              <p className="mt-3 leading-relaxed" style={{ color: BRAND.text }}>
                Premier échange sans engagement pour évaluer vos besoins et vous
                proposer un accompagnement adapté à votre situation.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div
            className="rounded-[28px] p-6 md:p-8 border border-black/5 shadow-sm"
            style={{ background: '#FFFFFF' }}
          >
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="Contact Horizon PME" />
              <input type="text" name="_gotcha" className="hidden" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label style={{ color: BRAND.blue }}>Nom et prénom *</label>
                  <input
                    name="nom"
                    required
                    placeholder="Votre nom"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ color: BRAND.blue }}>Entreprise *</label>
                  <input
                    name="entreprise"
                    required
                    placeholder="Nom de l’entreprise"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ color: BRAND.blue }}>Ville *</label>
                  <input
                    name="ville"
                    required
                    placeholder="Ex : Nanterre"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ color: BRAND.blue }}>Code postal *</label>
                  <input
                    name="code_postal"
                    required
                    placeholder="Ex : 92000"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ color: BRAND.blue }}>Taille de l’entreprise *</label>
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
                  <label style={{ color: BRAND.blue }}>Secteur d’activité *</label>
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
                  <label style={{ color: BRAND.blue }}>Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="vous@entreprise.fr"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ color: BRAND.blue }}>Téléphone</label>
                  <input
                    name="telephone"
                    placeholder="06..."
                    className={inputStyle}
                  />
                </div>
              </div>

              <div className="mt-8">
                <label style={{ color: BRAND.blue }}>Votre besoin</label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    'Faire le point',
                    'Diagnostic des risques',
                    'Risques stratégiques',
                    'Risques commerciaux / marketing',
                    'Mise en conformité sécurité',
                    'Risques RSE',
                    'Mission ponctuelle',
                    'Mission projet',
                    'Accompagnement',
                  ].map((item) => (
                    <label key={item}>
                      <input
                        type="checkbox"
                        name="besoin[]"
                        value={item}
                        className="hidden peer"
                      />
                      <span
                        className={`${chipStyle} peer-checked:bg-[#FFD166] peer-checked:border-[#FFD166]`}
                      >
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <label style={{ color: BRAND.blue }}>Format souhaité</label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    'Mission ponctuelle',
                    'Mission projet',
                    'Accompagnement récurrent',
                    'À définir ensemble',
                  ].map((item) => (
                    <label key={item}>
                      <input
                        type="radio"
                        name="format"
                        value={item}
                        className="hidden peer"
                      />
                      <span
                        className={`${chipStyle} peer-checked:bg-[#FFD166] peer-checked:border-[#FFD166]`}
                      >
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <label style={{ color: BRAND.blue }}>Décrivez votre situation *</label>
                <textarea
                  name="message"
                  required
                  placeholder="Contexte, difficultés rencontrées, objectifs, échéance…"
                  className={`${inputStyle} min-h-[150px]`}
                />
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                  style={{ background: BRAND.yellow, color: BRAND.blue }}
                >
                  Choisir un créneau
                </a>

                <a
                  href={`mailto:${mailTo}`}
                  className="text-center py-3 rounded-xl font-semibold border transition-all duration-300 hover:bg-[#EEF3F7]"
                  style={{ borderColor: BRAND.blue, color: BRAND.blue }}
                >
                  Envoyer un e-mail
                </a>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl font-semibold disabled:opacity-60 transition-all duration-300 hover:shadow-lg"
                  style={{ background: BRAND.green, color: '#FFFFFF' }}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                </button>

                {errorMessage && (
                  <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}