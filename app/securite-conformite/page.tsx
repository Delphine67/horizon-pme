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

export default function SecuriteConformitePage() {
  const situations = [
    'DUERP absent, incomplet ou non mis à jour',
    'PAPRIPACT manquant ou insuffisamment formalisé',
    'Mesures de prévention peu structurées',
    'Accueil sécurité des nouveaux salariés incomplet',
    "Livret d’accueil absent ou non adapté",
    "Difficulté à savoir ce qui est vraiment en ordre, ce qui manque et ce qui expose l’entreprise",
  ]

  const whatItHelps = [
    {
      title: 'Documents et obligations',
      text:
        "Vérifier ce qui est déjà en place, ce qui doit être mis à jour, et ce qui manque vraiment au regard de votre activité.",
      bg: '#EAEFF3',
    },
    {
      title: 'Prévention et priorités sécurité',
      text:
        "Mettre à plat les points de vigilance, hiérarchiser les écarts et poser un plan d’action réaliste sans bloquer l’activité.",
      bg: '#FFF3CC',
    },
    {
      title: 'Accueil et intégration',
      text:
        "Structurer l’accueil des nouveaux salariés, les consignes, les repères essentiels et les supports utiles, dont le livret d’accueil si nécessaire.",
      bg: '#E7F1DA',
    },
    {
      title: 'Sensibilisation et organisation interne',
      text:
        "Ateliers de sensibilisation, formation des équipes à la sécurité et mise en place de processus internes plus clairs et adaptés à votre réalité.",
      bg: '#FFFFFF',
    },
    {
      title: 'Veille réglementaire et adaptation',
      text:
        "Suivi des évolutions légales en matière de sécurité, repérage des nouvelles obligations et appui pour adapter vos pratiques et vos documents.",
      bg: '#EEF3F7',
    },
    {
      title: 'Valorisation et préparation',
      text:
        "Structuration de supports pour valoriser vos engagements sécurité et préparation à certaines exigences clients, audits ou démarches plus structurantes.",
      bg: '#FFF8E1',
    },
  ]

  const entryPoints = [
    "Vous avez un doute sur vos obligations ou sur l’état réel de vos documents",
    "Vous avez déjà des éléments en place, mais pas de vision claire de ce qui est à jour",
    "Vous voulez sécuriser votre fonctionnement sans alourdir inutilement l’entreprise",
    "Vous avez besoin d’un cadre plus propre avant un audit, une demande client ou un chantier interne",
  ]

  const relatedArticles = getArticlesByTags(
    ['securite', 'conformite', 'duerp', 'papripact'],
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
          style={{ background: '#FFF3CC' }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center relative z-10">
          <div>
            <SectionTag>Expertise sécurité & conformité</SectionTag>

            <h1
              className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
              style={{ color: BRAND.blue }}
            >
              Sécuriser vos obligations,
              <br />
              vos documents
              <br />
              <span style={{ color: BRAND.green }}>et vos priorités d’action</span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl leading-relaxed max-w-3xl"
              style={{ color: BRAND.text }}
            >
              Ce que vous ne savez pas que vous devez avoir en place peut finir par
              vous exposer plus que vous ne le pensez.
            </p>

            <p
              className="mt-4 text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ color: BRAND.text }}
            >
              Cette expertise vous aide à identifier ce qui est réellement en ordre,
              ce qui manque, ce qui vous expose et comment combler les écarts sans
              paralyser l’activité.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-4 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
              >
                Faire le point sur votre situation
              </Link>

              <Link
                href="#par-ou-commencer"
                className="inline-flex items-center rounded-xl px-6 py-4 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
              >
                Voir par où commencer
              </Link>
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
              style={{ background: '#FFF3CC', borderColor: 'rgba(255,255,255,0.15)', }}
>
            <img
              src="/picto-securite.png"
              alt="Sécurité et conformité"
              className="w-13 h-13 object-contain"
  />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Ce que cette expertise apporte
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
              Une lecture honnête
              <br />
              de ce qui est en ordre,
              <br />
              de ce qui manque,
              <br />
              de ce qui vous expose
            </h2>

            <ul className="mt-8 space-y-4 text-white/85 leading-relaxed">
              <li>Remettre à plat les obligations réelles</li>
              <li>Structurer les documents et les priorités</li>
              <li>Réduire les écarts sans complexifier inutilement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Les situations les plus fréquentes</SectionTag>
          <SectionTitle>
            Quand la sécurité et la conformité avancent
            <br />
            sans cadre suffisamment clair
          </SectionTitle>

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
          <SectionTitle>
            Mettre de l’ordre,
            <br />
            structurer,
            <br />
            sécuriser
          </SectionTitle>

          <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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
            Un client grand compte demande
            <br />
            un dossier de conformité
          </SectionTitle>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <article className="rounded-[28px] p-8 border border-black/5 shadow-sm bg-white">
              <p className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: BRAND.blue }}>
                Sans préparation
              </p>

              <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                Vous découvrez que votre DUERP date de plusieurs années, que certains
                documents n’existent pas et que personne ne sait ce qui est à jour.
                Vous avez quinze jours pour répondre.
              </p>

              <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                Résultat : réponse bâclée, stress interne, image dégradée — et parfois
                marché perdu.
              </p>
            </article>

            <article className="rounded-[28px] p-8 border border-black/5 shadow-sm" style={{ background: '#E7F1DA' }}>
              <p className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: BRAND.green }}>
                Avec un cadre en place
              </p>

              <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                Vos documents sont à jour, structurés et accessibles. Vous répondez
                rapidement avec un dossier complet. L’interlocuteur est rassuré dès le
                premier échange.
              </p>

              <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                Résultat : vous vous différenciez de concurrents moins organisés et
                une contrainte devient un avantage.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PAR OU COMMENCER */}
      <section id="par-ou-commencer" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          <div>
            <SectionTag>Par où commencer ?</SectionTag>
            <SectionTitle>On commence par ce qui expose vraiment l’entreprise</SectionTitle>

            <p className="mt-8 text-lg leading-relaxed" style={{ color: BRAND.text }}>
              Pas par une liste infinie d’obligations. L’objectif est de voir
              rapidement ce qui est réellement prioritaire : documents, prévention,
              organisation, accueil, mise à jour ou adaptation à une nouvelle exigence.
            </p>

            <p className="mt-4 text-lg leading-relaxed" style={{ color: BRAND.text }}>
              Une fois cette base clarifiée, il devient plus simple d’agir dans le bon
              ordre, avec un cadre réaliste et utile pour la PME.
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

          <Link
            href="/accompagnement"
            className="inline-flex items-center rounded-xl px-6 py-4 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
          >
            Voir l’accompagnement
          </Link>
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
            Un premier échange permet souvent d’identifier rapidement les écarts les
            plus sensibles et les premières actions vraiment utiles.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
            >
              Faire le point sur votre situation
            </Link>

            <Link
              href="/cas-concrets"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
            >
              Voir des cas concrets
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}