import Link from 'next/link'
import { formatFrenchDate, getArticlesByTags } from '../ressources/articles-index'

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

export default function StrategieCommercialePage() {
  const situations = [
    "Votre offre est sérieuse, mais elle n’est pas toujours clairement perçue par vos prospects.",
    "Votre développement repose surtout sur l’habitude, le réseau ou les urgences du moment.",
    "Vous perdez des devis sans comprendre précisément ce qui bloque.",
    "Votre discours commercial, vos supports et votre réalité terrain ne sont pas parfaitement alignés.",
  ]

  const whatItHelps = [
    {
      title: 'Positionnement et lisibilité de l’offre',
      text:
        "Clarifier ce que vous apportez réellement, à qui, et ce qui vous différencie de façon crédible.",
      bg: '#EAEFF3',
    },
    {
      title: 'Cohérence entre promesse et réalité terrain',
      text:
        "Vérifier que ce que vous vendez, ce que vous montrez et ce que vous délivrez racontent bien la même chose.",
      bg: '#FFF3CC',
    },
    {
      title: 'Freins au développement',
      text:
        "Identifier ce qui ralentit votre développement commercial : offre floue, argumentaire faible, mauvaise lecture de la valeur, priorités dispersées.",
      bg: '#E7F1DA',
    },
    {
      title: 'Premières actions concrètes',
      text:
        "Définir des actions utiles et réalistes à court terme, pas un plan théorique sur trois ans.",
      bg: '#FFFFFF',
    },
  ]

  const entryPoints = [
    'Vous perdez des devis sans comprendre pourquoi',
    "Vos prospects comparent surtout vos prix au lieu de percevoir votre valeur",
    "Votre offre est utile, mais elle manque de lisibilité",
    'Vous voulez clarifier vos priorités avant de lancer des actions marketing plus larges',
  ]

  const relatedArticles = getArticlesByTags(
    ['strategie', 'pilotage', 'priorisation', 'risques'],
    3
  )

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

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center relative z-10">
          <div>
            <SectionTag>Expertise stratégie commerciale</SectionTag>

            <h1
              className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
              style={{ color: BRAND.blue }}
            >
              Clarifier votre offre,
              <br />
              votre positionnement
              <br />
              <span style={{ color: BRAND.green }}>et vos leviers de développement</span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl leading-relaxed max-w-3xl"
              style={{ color: BRAND.text }}
            >
              Vous avez une bonne offre. Mais est-ce que cela se voit vraiment ?
            </p>

            <p
              className="mt-4 text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ color: BRAND.text }}
            >
              Cette expertise vous aide à clarifier ce qui vous différencie, rendre
              votre offre plus lisible pour vos clients, identifier ce qui freine
              votre développement et remettre de la cohérence entre ce que vous
              promettez et ce que vous livrez.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-4 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
              >
                Faire le point sur votre situation
              </Link>

              <a
                href="https://xpmarketing.fr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl px-6 py-4 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
              >
                Découvrir XPMarketing
              </a>
            </div>
          </div>

          <div
            className="rounded-[32px] p-8 md:p-10 relative overflow-hidden"
            style={{ background: BRAND.blue }}
          >
            <div
              className="absolute -right-10 -top-10 w-32 h-32 rounded-full"
              style={{ background: 'rgba(255,209,102,0.18)' }}
            />
            <div
              className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full"
              style={{ background: 'rgba(124,179,66,0.22)' }}
            />

            <div
              className="w-15 h-15 rounded-2xl flex items-center justify-center border"
              style={{ background: '#EAEFF3', borderColor: 'rgba(255,255,255,0.15)', }}
>
              <img
               src="/picto-marketing.png"
                alt="Stratégie commerciale"
                className="w-13 h-13 object-contain"
                />
              </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Ce que cette expertise permet
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
              Rendre vos efforts
              <br />
              plus visibles,
              <br />
              plus cohérents,
              <br />
              plus efficaces
            </h2>

            <ul className="mt-8 space-y-4 text-white/85 leading-relaxed">
              <li>Clarifier votre proposition de valeur</li>
              <li>Réduire le temps passé à convaincre</li>
              <li>Retrouver une logique commerciale plus lisible</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Les situations les plus fréquentes</SectionTag>
          <SectionTitle>Quand le fond est bon, mais que cela ne se voit pas assez</SectionTitle>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {situations.map((item, index) => (
              <article
                key={item}
                className="rounded-[24px] p-7 border border-black/5 shadow-sm bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold"
                  style={{
                    background:
                      index % 3 === 0 ? '#EAEFF3' : index % 3 === 1 ? '#FFF3CC' : '#E7F1DA',
                    color: BRAND.blue,
                  }}
                >
                  {index + 1}
                </div>
                <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUE CETTE EXPERTISE PERMET */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Ce que cette expertise permet de traiter</SectionTag>
          <SectionTitle>Remettre de la lisibilité avant d’aller plus loin</SectionTitle>

          <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {whatItHelps.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] p-7 border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: item.bg }}
              >
                <h3 className="text-xl font-bold" style={{ color: BRAND.blue }}>
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

      {/* CAS CONCRET */}
      <section className="px-6 py-20" style={{ background: BRAND.lightBlue }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Un exemple concret</SectionTag>
          <SectionTitle>
            Vous perdez des devis
            <br />
            sans comprendre pourquoi
          </SectionTitle>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <article className="rounded-[28px] p-8 border border-black/5 shadow-sm bg-white">
              <p className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: BRAND.blue }}>
                Sans clarté sur l’offre
              </p>

              <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                Vos propositions sont complètes et sérieuses, mais le prospect choisit
                un concurrent moins cher. Vous n’arrivez pas à expliquer clairement
                ce qui vous différencie réellement.
              </p>

              <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                Résultat : vous baissez vos prix pour rester dans la course, ou vous
                perdez des marchés que vous auriez dû gagner.
              </p>
            </article>

            <article className="rounded-[28px] p-8 border border-black/5 shadow-sm" style={{ background: '#E7F1DA' }}>
              <p className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: BRAND.green }}>
                Avec un positionnement clair
              </p>

              <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                Votre discours, vos supports et vos devis reflètent votre vraie
                valeur. Le prospect comprend pourquoi vous n’êtes pas le moins cher —
                et pourquoi cela vaut la différence.
              </p>

              <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                Résultat : meilleur taux de transformation, marges mieux défendues,
                clients mieux qualifiés en amont.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PAR OU COMMENCER */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          <div>
            <SectionTag>Par où commencer ?</SectionTag>
            <SectionTitle>On commence par ce qui bloque vraiment</SectionTitle>

            <p className="mt-8 text-lg leading-relaxed" style={{ color: BRAND.text }}>
              Pas par une refonte globale, ni par un plan théorique. L’objectif est
              d’identifier rapidement ce qui mérite d’être clarifié en priorité :
              votre offre, votre discours, vos supports ou le décalage entre votre
              promesse et votre réalité terrain.
            </p>

            <p className="mt-4 text-lg leading-relaxed" style={{ color: BRAND.text }}>
              Une fois cette base remise à plat, il devient plus simple d’engager un
              travail plus approfondi sur votre stratégie marketing et commerciale.
            </p>
          </div>

          <div className="grid gap-5">
            {entryPoints.map((item, index) => (
              <article
                key={item}
                className="rounded-[24px] p-6 border border-black/5 shadow-sm bg-white"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold shrink-0"
                    style={{
                      background:
                        index % 3 === 0 ? '#EAEFF3' : index % 3 === 1 ? '#FFF3CC' : '#E7F1DA',
                      color: BRAND.blue,
                    }}
                  >
                    ✓
                  </div>
                  <p className="leading-relaxed" style={{ color: BRAND.blue }}>
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl px-6 py-4 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
          >
            Faire le point sur votre situation
          </Link>

          <a
            href="https://xpmarketing.fr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl px-6 py-4 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
          >
            Aller plus loin avec XPMarketing
          </a>
        </div>
      </section>

      {/* RESSOURCES */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Articles à lire sur ce sujet</SectionTag>
          <SectionTitle>Les ressources liées</SectionTitle>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <article
                key={article.slug}
                className="rounded-[24px] bg-white p-8 border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-semibold" style={{ color: BRAND.green }}>
                  {article.category}
                </p>
                <p className="mt-2 text-sm" style={{ color: BRAND.text }}>
                  {formatFrenchDate(article.publishedAt)}
                </p>
                <h3
                  className="mt-4 text-2xl font-bold leading-snug"
                  style={{ color: BRAND.blue }}
                >
                  {article.title}
                </h3>
                <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                  {article.summary}
                </p>
                <Link
                  href={`/ressources/${article.slug}`}
                  className="mt-6 inline-flex font-semibold"
                  style={{ color: BRAND.blue }}
                >
                  Lire l’article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20" style={{ background: BRAND.lightBlue }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionTag>Passons à l’action</SectionTag>

          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ color: BRAND.blue }}
          >
            Faites un premier point
            <br />
            sur votre situation
          </h2>

          <p
            className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: BRAND.text }}
          >
            Un premier échange permet de clarifier vos priorités et de voir si le
            vrai sujet se situe dans l’offre, le positionnement, le discours ou la
            cohérence globale.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
            >
              Faire le point sur votre situation
            </Link>

            <a
              href="https://xpmarketing.fr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
            >
              Découvrir XPMarketing
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}