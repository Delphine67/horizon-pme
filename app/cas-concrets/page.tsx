import Link from 'next/link'

const BRAND = {
  blue: '#2A4D69',
  yellow: '#FFD166',
  green: '#7CB342',
  light: '#F4F4F4',
  lightBlue: '#EEF3F7',
  text: '#5F7690',
  white: '#FFFFFF',
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-5"
      style={{
        background: '#EAEFF3',
        color: BRAND.blue,
      }}
    >
      {children}
    </p>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-3xl md:text-5xl font-bold leading-tight"
      style={{ color: BRAND.blue }}
    >
      {children}
    </h2>
  )
}

export default function CasConcretsPage() {
  const cases = [
    {
      sector: 'Logistique / Distribution',
      theme: 'Performance & satisfaction client',
      title: 'Optimisation logistique et satisfaction client',
      problem:
        "Décalage entre les offres commerciales par lots de 100 unités et la réalité de palettisation à 96, générant pertes de temps, surcoûts, casse et insatisfaction client.",
      action:
        "Diagnostic terrain, analyse des flux logistiques et des pratiques commerciales, alignement des offres sur les capacités de palettisation, coordination entre commerce et logistique, et nouveaux process.",
      results: [
        'Réduction du temps de préparation',
        'Diminution des frais de transport',
        'Réduction des risques de casse',
        'Amélioration de la satisfaction client',
        'Meilleure coordination entre équipes',
      ],
      proof:
        "Une lecture croisée entre commerce et logistique permet de révéler des coûts cachés et d’améliorer immédiatement la qualité de service.",
      bg: '#EEF3F7',
      accent: BRAND.blue,
    },
    {
      sector: 'Industrie / BTP',
      theme: 'Innovation d’usage',
      title: 'Simplifier l’usage sur chantier',
      problem:
        "La peinture était vendue en pot métallique rond, obligeant les équipes à transvaser dans un bac rectangulaire pour utiliser leur rouleau, avec pertes de temps, manipulations inutiles et manque d’ergonomie.",
      action:
        "Observation des usages réels, proposition d’un emballage rectangulaire directement compatible avec les rouleaux, adaptation du conditionnement avec les équipes production et marketing.",
      results: [
        "Suppression de l’étape de transvasement",
        'Gain de temps immédiat',
        'Amélioration de l’ergonomie',
        'Moins de manipulations sur chantier',
        'Satisfaction accrue des utilisateurs',
      ],
      proof:
        "Observer le geste métier réel permet souvent de trouver des innovations simples, utiles et immédiatement adoptables.",
      bg: '#FFF8E1',
      accent: BRAND.yellow,
    },
    {
      sector: 'Industrie / BTP',
      theme: 'RSE & réduction des déchets',
      title: 'Réduction des déchets et amélioration de la performance',
      problem:
        "Le conditionnement historique en pot rond imposait un transvasement dans un seau ou bac séparé, générant pertes de peinture, déchets doubles et gaspillage de ressources.",
      action:
        "Repenser le conditionnement autour d’un emballage rectangulaire compatible avec le rouleau, supprimer le contenant intermédiaire et valoriser l’avantage environnemental de cette évolution.",
      results: [
        'Réduction significative des pertes de produit',
        'Moins de déchets métalliques et plastiques',
        'Meilleure productivité sur chantier',
        'Amélioration de l’image produit',
        'Innovation devenue standard du marché',
      ],
      proof:
        "Une innovation centrée sur l’usage réel peut concilier performance opérationnelle, confort utilisateur et responsabilité environnementale.",
      bg: '#EEF7E8',
      accent: BRAND.green,
    },
    {
      sector: 'Gestion immobilière',
      theme: 'RH & intégration',
      title: 'Création d’un livret d’accueil pour professionnaliser l’intégration',
      problem:
        "Absence de support d’accueil, intégration difficile des nouveaux collaborateurs, transmission incomplète des informations clés et manque d’homogénéité dans les pratiques.",
      action:
        "Conception d’un livret d’accueil complet, structuration des contenus, intégration des informations pratiques, des procédures internes, des contacts utiles et d’une version numérique et imprimée.",
      results: [
        'Intégration facilitée',
        'Transmission homogène des informations',
        'Gain de temps pour la direction',
        'Renforcement du sentiment d’appartenance',
        'Outil simple à mettre à jour',
      ],
      proof:
        "Un livret d’accueil bien pensé devient un vrai outil d’organisation interne, pas seulement un support de bienvenue.",
      bg: '#FFFFFF',
      accent: BRAND.blue,
    },
    {
      sector: 'Gestion immobilière / PME sans service RH',
      theme: 'Conformité RH & sécurité',
      title: 'Un livret d’accueil comme levier de conformité',
      problem:
        "Sans service RH dédié, l’entreprise peinait à transmettre correctement les règles internes, les informations obligatoires et les consignes de sécurité aux nouveaux arrivants.",
      action:
        "Création d’un livret sur-mesure intégrant les éléments d’information, les repères RH, les consignes de sécurité, les procédures utiles et les obligations à transmettre dès l’embauche.",
      results: [
        'Meilleure appropriation des règles de sécurité',
        'Réduction des risques de non-conformité',
        'Traçabilité de l’information transmise',
        'Support pratique pour managers et direction',
        'Image employeur renforcée',
      ],
      proof:
        "Même sans service RH intégré, une PME peut professionnaliser son onboarding et sécuriser ses obligations avec un outil clair, conforme et pédagogique.",
      bg: '#FFF8E1',
      accent: BRAND.yellow,
    },
    {
      sector: 'Logistique / BTP',
      theme: 'Sécurité & conformité',
      title: 'Mise en conformité DUERP & PAPRIPACT',
      problem:
        "Le DUERP existait mais n’était ni à jour ni décliné correctement selon les entités. Le PAPRIPACT, pourtant obligatoire au vu de la taille de l’entreprise, n’avait jamais été engagé.",
      action:
        "Diagnostic réglementaire complet, sensibilisation de la direction, mise à jour du DUERP par entité, élaboration du PAPRIPACT, planification des actions et transmission de supports de suivi.",
      results: [
        'Mise en conformité immédiate',
        'Réduction des risques juridiques',
        'Prévention plus structurée',
        'Meilleure implication des équipes',
        'Démarche continue adaptée à chaque site',
      ],
      proof:
        "Même sans service QHSE dédié, une PME peut transformer une obligation complexe en cadre de pilotage utile et rassurant.",
      bg: '#EEF3F7',
      accent: BRAND.blue,
    },
  ]

  const themes = [
    {
      title: 'Performance & développement',
      text:
        "Mieux aligner l’offre, l’organisation et la réalité terrain pour réduire les pertes, améliorer la satisfaction client et faire gagner l’entreprise en efficacité.",
      bg: '#EAEFF3',
    },
    {
      title: 'Innovation & usage',
      text:
        "Observer les usages réels pour simplifier le quotidien des équipes, améliorer l’ergonomie, réduire les déchets et faire émerger des solutions à fort impact.",
      bg: '#E7F1DA',
    },
    {
      title: 'RH, sécurité & conformité',
      text:
        "Structurer les supports, formaliser les obligations, mieux intégrer les collaborateurs et sécuriser l’entreprise face aux risques et aux contrôles.",
      bg: '#FFF3CC',
    },
  ]

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
          style={{ background: '#FFF3CC' }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <SectionTag>Cas concrets</SectionTag>

          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
            style={{ color: BRAND.blue }}
          >
            Des cas concrets
            <br />
            pour montrer comment
            <br />
            <span style={{ color: BRAND.green }}>j’aide les PME à avancer</span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
            style={{ color: BRAND.text }}
          >
            Ces exemples montrent comment une approche structurée, concrète et ancrée
            terrain permet d’identifier des leviers d’amélioration utiles, de réduire
            les risques et de faire progresser la PME de façon mesurable.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-4 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
            >
              Faire le point sur votre situation
            </Link>

            <Link
              href="/expertises"
              className="inline-flex items-center rounded-xl px-6 py-4 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
            >
              Voir mes expertises
            </Link>
          </div>
        </div>
      </section>

      {/* THEMES */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Par grandes thématiques</SectionTag>
          <SectionTitle>Des situations différentes, une même logique d’action</SectionTitle>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {themes.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] p-7 border border-black/5 shadow-sm bg-white"
                style={{ background: item.bg }}
              >
                <h3 className="text-2xl font-bold" style={{ color: BRAND.blue }}>
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6 CASES */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cases.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-black/5 shadow-sm overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-7" style={{ background: item.bg }}>
                <p
                  className="text-sm font-semibold uppercase tracking-[0.15em]"
                  style={{ color: item.accent }}
                >
                  {item.theme}
                </p>
                <p className="mt-2 text-sm" style={{ color: BRAND.text }}>
                  {item.sector}
                </p>

                <h2
                  className="mt-4 text-2xl font-bold leading-snug"
                  style={{ color: BRAND.blue }}
                >
                  {item.title}
                </h2>
              </div>

              <div className="p-7">
                <div>
                  <p className="font-semibold" style={{ color: BRAND.blue }}>
                    Problème
                  </p>
                  <p className="mt-3 leading-relaxed" style={{ color: BRAND.text }}>
                    {item.problem}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="font-semibold" style={{ color: BRAND.blue }}>
                    Action menée
                  </p>
                  <p className="mt-3 leading-relaxed" style={{ color: BRAND.text }}>
                    {item.action}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="font-semibold" style={{ color: BRAND.blue }}>
                    Résultats obtenus
                  </p>
                  <ul className="mt-4 space-y-3">
                    {item.results.map((result) => (
                      <li key={result} className="flex items-start gap-3">
                        <span
                          className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ background: item.accent }}
                        />
                        <span style={{ color: BRAND.text }}>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-[20px] p-5 border border-black/5 bg-white">
                  <p className="font-semibold" style={{ color: BRAND.blue }}>
                    Ce que cela démontre
                  </p>
                  <p className="mt-3 italic leading-relaxed" style={{ color: BRAND.text }}>
                    {item.proof}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20" style={{ background: BRAND.lightBlue }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionTag>Passons à l’action</SectionTag>

          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ color: BRAND.blue }}
          >
            Votre situation est différente,
            <br />
            mais la logique est la même
          </h2>

          <p
            className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: BRAND.text }}
          >
            Un premier échange permet souvent d’identifier rapidement les points qui
            freinent l’activité, les risques sous-estimés et les premières actions qui
            feraient une vraie différence.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
            >
              Faire le point sur votre situation
            </Link>

            <Link
              href="/accompagnement"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
            >
              Voir l’accompagnement
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}