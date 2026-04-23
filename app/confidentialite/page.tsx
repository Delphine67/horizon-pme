const BRAND = {
  blue: '#2A4D69',
  green: '#7CB342',
  light: '#F4F4F4',
  text: '#5F7690',
}

export const metadata = {
  title: 'Politique de confidentialité | Horizon PME Solutions',
  description:
    'Politique de confidentialité du site Horizon PME Solutions : collecte, traitement, conservation et droits des personnes.',
}

export default function ConfidentialitePage() {
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
            Données personnelles
          </p>

          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
            style={{ color: BRAND.blue }}
          >
            Politique de confidentialité
          </h1>

          <p
            className="mt-8 text-lg md:text-xl leading-relaxed"
            style={{ color: BRAND.text }}
          >
            Cette politique explique comment Horizon PME Solutions collecte,
            utilise, conserve et protège les données personnelles traitées via
            ce site.
          </p>
        </div>
      </section>

      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-4xl mx-auto">
          <article className="rounded-[32px] bg-white p-8 md:p-12 border border-black/5 shadow-sm space-y-10">
            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                1. Responsable du traitement
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Le responsable du traitement des données personnelles collectées
                sur le site Horizon PME Solutions est :
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Horizon PME Solutions
                <br />
                Delphine Ravet
                <br />
                24 ter rue Pierre Curie, 78600 Maisons-Laffitte / Île-de-France
                <br />
                Email : delphine@horizonpmesolutions.fr
                <br />
                Téléphone : 07 70 28 64 69
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Pour toute question relative à la protection des données
                personnelles, vous pouvez utiliser cette même adresse de
                contact.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                2. Données collectées
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Selon les formulaires et les échanges, les données collectées
                peuvent inclure :
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'nom et prénom',
                  'entreprise',
                  'ville et code postal',
                  "taille de l’entreprise et secteur d’activité",
                  'adresse e-mail',
                  'numéro de téléphone',
                  'besoin exprimé, format souhaité et contenu du message',
                  'éventuellement, toute information transmise volontairement dans le cadre des échanges',
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
                Les champs marqués d’un astérisque dans le formulaire sont
                nécessaires pour traiter la demande. Si ces informations ne sont
                pas fournies, Horizon PME Solutions peut ne pas être en mesure de
                répondre dans de bonnes conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                3. Finalités du traitement
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Les données personnelles sont traitées pour les finalités
                suivantes :
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'recevoir, analyser et traiter les demandes envoyées via le formulaire de contact',
                  'répondre aux demandes d’information, de rendez-vous ou de devis',
                  'organiser et assurer le suivi des échanges avec les prospects et clients',
                  'préparer une éventuelle relation précontractuelle ou contractuelle',
                  'assurer le suivi administratif, commercial et opérationnel des demandes',
                  'conserver un historique des échanges utile à la bonne gestion de la relation',
                  'garantir la sécurité technique et le bon fonctionnement du site',
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
                4. Base légale des traitements
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Les traitements sont fondés, selon les cas, sur :
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "l’exécution de mesures précontractuelles prises à votre demande lorsque vous contactez Horizon PME Solutions pour un besoin d’accompagnement, d’information ou de devis",
                  "l’intérêt légitime d’Horizon PME Solutions à gérer les demandes entrantes, assurer le suivi des échanges, sécuriser le site et organiser son activité",
                  "l’exécution d’un contrat lorsque la relation devient contractuelle",
                  "le respect d’obligations légales lorsque certaines données doivent être conservées ou traitées pour répondre à des exigences réglementaires",
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
                5. Destinataires des données
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Les données sont destinées en priorité à Horizon PME Solutions.
                Elles ne sont ni vendues ni cédées à des tiers à des fins
                commerciales.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Elles peuvent toutefois être traitées, dans la limite de leurs
                attributions et pour les finalités strictement nécessaires, par
                certains prestataires techniques intervenant pour :
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "l’hébergement et le déploiement du site",
                  'la gestion technique des formulaires',
                  'la prise de rendez-vous',
                  'la maintenance et la sécurité technique',
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
                À la date de rédaction de la présente politique, les outils
                susceptibles d’intervenir sont notamment Vercel, Formspree et
                Calendly, selon les fonctionnalités effectivement utilisées sur le
                site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                6. Transferts hors Union européenne
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Certains prestataires techniques utilisés pour l’hébergement, les
                formulaires ou la prise de rendez-vous peuvent impliquer des
                traitements ou accès aux données depuis des pays situés hors Union
                européenne.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Lorsque de tels transferts existent, Horizon PME Solutions veille
                à ce qu’ils soient encadrés par des garanties appropriées
                prévues par la réglementation applicable, telles que des clauses
                contractuelles types de la Commission européenne ou tout autre
                mécanisme juridiquement valable selon le contexte.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Vous pouvez demander des informations complémentaires sur ces
                garanties à l’adresse de contact indiquée ci-dessus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                7. Durée de conservation
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Les données relatives aux prospects et aux demandes de contact sont conservées pendant une durée maximale de trois ans à compter du dernier contact émanant de la personne concernée ou, à défaut, de leur collecte.
                Les données relatives aux clients peuvent être conservées pendant la durée de la relation contractuelle, puis pendant une durée maximale de trois ans à compter de la fin de la relation commerciale lorsqu’elles sont utilisées à des fins de suivi ou de prospection commerciale.
                Les données nécessaires à la prise en compte d’une opposition à la prospection peuvent être conservées pendant une durée minimale de trois ans.
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "les données liées à une demande de contact sont conservées le temps nécessaire au traitement de la demande et au suivi de la relation",
                  "les échanges avec un prospect ou un client peuvent être conservés pendant la durée utile à la gestion de la relation commerciale et au suivi du dossier",
                  "certaines données peuvent être conservées plus longtemps lorsqu’une obligation légale, comptable, fiscale ou de preuve l’impose",
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
                Au terme des durées applicables, les données sont supprimées,
                archivées ou anonymisées lorsque cela est possible et pertinent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                8. Caractère obligatoire ou facultatif des données
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Certaines données sont nécessaires pour traiter votre demande, vous
                recontacter ou organiser un échange. D’autres informations peuvent
                être facultatives et n’ont pour objet que de mieux comprendre votre
                besoin.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Si vous ne renseignez pas les données nécessaires, Horizon PME
                Solutions peut ne pas être en mesure de traiter votre demande de
                manière complète.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                9. Sécurité et confidentialité
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Horizon PME Solutions met en œuvre des mesures techniques et
                organisationnelles adaptées afin de préserver la sécurité, la
                confidentialité et l’intégrité des données personnelles, et de
                limiter les risques d’accès non autorisé, de perte, de divulgation
                ou d’altération.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Malgré ces précautions, aucun système n’offrant une sécurité
                absolue, les utilisateurs sont invités à éviter de transmettre des
                données inutilement sensibles dans les formulaires de contact.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                10. Droits des personnes
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Conformément à la réglementation applicable, vous disposez, selon
                les cas, des droits suivants :
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "droit d’accès à vos données personnelles",
                  'droit de rectification des données inexactes ou incomplètes',
                  'droit à l’effacement dans les cas prévus par les textes',
                  'droit à la limitation du traitement',
                  "droit d’opposition lorsque le traitement est fondé sur l’intérêt légitime",
                  'droit à la portabilité lorsque ce droit est applicable',
                  'droit de retirer votre consentement à tout moment lorsque le traitement repose sur le consentement',
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
                Pour exercer vos droits, vous pouvez écrire à :
                delphine@horizonpmesolutions.fr
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Une réponse vous sera adressée dans les meilleurs délais et, en
                principe, dans un délai maximum d’un mois, sous réserve des cas de
                prolongation prévus par la réglementation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                11. Réclamation auprès de l’autorité de contrôle
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Si vous estimez, après contact avec Horizon PME Solutions, que vos
                droits ne sont pas respectés, vous pouvez introduire une
                réclamation auprès de la CNIL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                12. Absence de décision automatisée
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                Les traitements réalisés via ce site n’ont pas pour objet de mettre
                en œuvre une prise de décision automatisée produisant des effets
                juridiques ou affectant significativement les personnes concernées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                13. Mise à jour de la politique
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                La présente politique peut être mise à jour à tout moment afin de
                tenir compte des évolutions du site, des outils utilisés, de la
                réglementation ou des pratiques de traitement.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  )
}