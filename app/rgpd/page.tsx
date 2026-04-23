const BRAND = {
  blue: '#2A4D69',
  green: '#7CB342',
  light: '#F4F4F4',
  text: '#5F7690',
}

export const metadata = {
  title: 'RGPD | Horizon PME Solutions',
  description:
    'Informations RGPD du site Horizon PME Solutions : principes de traitement, droits des personnes et cadre de protection des données.',
}

export default function RgpdPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden px-6 py-16 md:py-24 bg-white">
        <div
          className="absolute left-[-40px] top-[-30px] w-40 h-40 rounded-full opacity-70"
          style={{ background: '#EAEFF3' }}
        />
        <div
          className="absolute right-[-20px] top-[-20px] w-24 h-24 rounded-full opacity-70"
          style={{ background: '#E7F1DA' }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <p
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-5"
            style={{ background: '#EAEFF3', color: BRAND.blue }}
          >
            Protection des données
          </p>

          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
            style={{ color: BRAND.blue }}
          >
            RGPD
          </h1>

          <p
            className="mt-8 text-lg md:text-xl leading-relaxed"
            style={{ color: BRAND.text }}
          >
            Horizon PME Solutions s’engage à traiter les données personnelles dans
            le respect du Règlement Général sur la Protection des Données et des
            règles françaises applicables.
          </p>
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-4xl mx-auto">
          <article className="rounded-[32px] bg-white p-8 md:p-12 border border-black/5 shadow-sm space-y-10">
            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                1. Principes généraux
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Horizon PME Solutions veille à ce que les traitements de données
                personnelles soient :
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'licites, loyaux et transparents',
                  'collectés pour des finalités déterminées, explicites et légitimes',
                  'adéquats, pertinents et limités à ce qui est nécessaire',
                  'exactes et, si nécessaire, tenues à jour',
                  'conservés pendant une durée limitée et proportionnée',
                  'protégés par des mesures de sécurité adaptées',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ background: BRAND.green }}
                    />
                    <span style={{ color: BRAND.text }}>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                2. Responsable du traitement et point de contact
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Le responsable du traitement est Delphine Ravet pour le site horizonpmesolutions.fr.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Point de contact pour les questions relatives aux données
                personnelles :
                <br />
                delphine@horizonpmesolutions.fr
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Aucun délégué à la protection des données distinct n’est indiqué à
                ce jour sur le site. Le point de contact ci-dessus doit donc être
                utilisé pour toute demande relative aux données personnelles, sauf
                désignation ultérieure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                3. Finalités et bases légales
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Les données personnelles peuvent être traitées pour :
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'répondre aux demandes adressées via le formulaire de contact',
                  'gérer les demandes de rendez-vous et les échanges précontractuels',
                  'suivre la relation avec les prospects et clients',
                  'respecter certaines obligations légales, comptables ou de preuve',
                  'assurer la sécurité technique du site et la continuité du service',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ background: BRAND.green }}
                    />
                    <span style={{ color: BRAND.text }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Ces traitements reposent, selon les cas, sur l’intérêt légitime,
                les mesures précontractuelles prises à la demande de la personne,
                l’exécution d’un contrat ou le respect d’une obligation légale.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                4. Catégories de données traitées
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Les catégories de données traitées peuvent inclure :
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'données d’identification',
                  'coordonnées de contact',
                  'informations professionnelles liées à l’entreprise',
                  'contenu des messages et demandes formulées',
                  'informations utiles à l’organisation des échanges ou rendez-vous',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ background: BRAND.green }}
                    />
                    <span style={{ color: BRAND.text }}>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                5. Information des personnes concernées
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Les personnes dont les données sont collectées sont informées de
                manière claire sur les finalités du traitement, les bases légales,
                les destinataires, les durées de conservation, les droits dont
                elles disposent et les modalités d’exercice de ces droits.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Cette information est fournie au moyen des pages juridiques du
                site, du formulaire de contact, et le cas échéant dans les échanges
                directs avec Horizon PME Solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                6. Durées de conservation
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Les données relatives aux prospects et aux demandes de contact sont conservées pendant une durée maximale de trois ans à compter du dernier contact émanant de la personne concernée ou, à défaut, de leur collecte.
                Les données relatives aux clients peuvent être conservées pendant la durée de la relation contractuelle, puis pendant une durée maximale de trois ans à compter de la fin de la relation commerciale lorsqu’elles sont utilisées à des fins de suivi ou de prospection commerciale.
                Les données nécessaires à la prise en compte d’une opposition à la prospection peuvent être conservées pendant une durée minimale de trois ans.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Certaines données peuvent être conservées plus longtemps lorsqu’une
                obligation légale, comptable, fiscale ou de preuve l’impose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                7. Sous-traitants et transferts
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Horizon PME Solutions peut recourir à des sous-traitants ou
                prestataires techniques pour l’hébergement du site, la gestion des
                formulaires, la prise de rendez-vous ou la maintenance technique.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Selon les outils utilisés, certains traitements peuvent impliquer
                des transferts hors Union européenne. Lorsque cela est le cas, ils
                doivent être encadrés par des garanties appropriées conformément à
                la réglementation applicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                8. Droits des personnes
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Vous disposez, selon les cas, des droits suivants :
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'accès',
                  'rectification',
                  'effacement',
                  'limitation du traitement',
                  'opposition',
                  'portabilité',
                  'retrait du consentement lorsque le traitement repose sur le consentement',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ background: BRAND.green }}
                    />
                    <span style={{ color: BRAND.text }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Ces droits peuvent être exercés en écrivant à :
                delphine@horizonpmesolutions.fr
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Horizon PME Solutions répond dans les meilleurs délais et, en
                principe, dans un délai d’un mois à compter de la réception de la
                demande, sous réserve des possibilités de prolongation prévues par
                les textes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                9. Droit de réclamation
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Si vous estimez que le traitement de vos données n’est pas conforme
                à la réglementation, vous pouvez adresser une réclamation à la
                CNIL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                10. Décision automatisée et profilage
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Le site n’a pas vocation à mettre en œuvre une décision automatisée
                ou un profilage produisant des effets juridiques ou affectant
                significativement les personnes concernées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                11. Mise à jour
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Cette page peut être mise à jour pour tenir compte des évolutions
                légales, techniques ou organisationnelles liées au site et à
                l’activité de Horizon PME Solutions.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  )
}