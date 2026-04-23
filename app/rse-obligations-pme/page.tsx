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

export default function RseObligationsPmePage() {
  const situations = [
    "Vous ne savez pas exactement quelles obligations ou attentes RSE concernent déjà votre PME.",
    "Vous répondez à des demandes clients ou donneurs d’ordre sans cadre clair.",
    "Vous faites déjà des choses utiles, mais elles ne sont ni formalisées ni valorisées.",
    "Vous craignez de passer à côté d’un sujet important ou de mal répondre à une exigence marché.",
    "Vous voulez distinguer ce qui est obligatoire, ce qui est attendu et ce qui peut venir progressivement.",
    "Vous souhaitez avancer de façon crédible sans alourdir inutilement votre organisation.",
  ]

  const whatItHelps = [
    {
      title: 'Obligations réelles vs perçues',
      text:
        "Identifier ce qui s’applique réellement à votre PME, ce qui relève d’une exigence client ou marché, et ce qui peut être traité plus tard.",
      bg: '#EAEFF3',
    },
    {
      title: 'Risques d’image et attentes du marché',
      text:
        "Mieux comprendre ce que vos clients, partenaires ou donneurs d’ordre attendent déjà, même quand votre démarche RSE n’est pas encore formalisée.",
      bg: '#FFF3CC',
    },
    {
      title: 'Valorisation de vos engagements existants',
      text:
        "Mettre en lumière ce que vous faites déjà, souvent plus que vous ne le pensez, pour le rendre visible, crédible et utile commercialement.",
      bg: '#E7F1DA',
    },
    {
      title: 'Sensibilisation et organisation interne',
      text:
        "Ateliers de sensibilisation, formation des équipes à la RSE et mise en place de processus internes plus clairs, adaptés à votre taille et à votre réalité.",
      bg: '#FFFFFF',
    },
    {
      title: 'Veille réglementaire et adaptation',
      text:
        "Suivi des évolutions légales en matière de RSE, repérage des nouvelles obligations et appui pour adapter progressivement vos pratiques, vos documents et votre organisation.",
      bg: '#EEF3F7',
    },
    {
      title: 'Préparation à des exigences externes',
      text:
        "Préparation à certaines démarches structurantes, exigences clients, audits ou référentiels si l’entreprise souhaite aller plus loin.",
      bg: '#FFF8E1',
    },
  ]

  const entryPoints = [
    "Vous avez déjà des actions utiles, mais elles ne sont pas formalisées.",
    "Un client ou un appel d’offres commence à poser des questions RSE plus précises.",
    "Vous voulez éviter de répondre dans l’urgence avec des éléments flous ou incomplets.",
    "Vous cherchez une démarche réaliste, progressive et adaptée à votre PME.",
  ]

  const relatedArticles = getArticlesByTags(
    ['rse', 'conformite', 'priorisation', 'pilotage'],
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
            <SectionTag>Expertise RSE & obligations PME</SectionTag>

            <h1
              className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
              style={{ color: BRAND.blue }}
            >
              Structurer vos engagements,
              <br />
              clarifier ce qui vous concerne
              <br />
              <span style={{ color: BRAND.green }}>et avancer de façon crédible</span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl leading-relaxed max-w-3xl"
              style={{ color: BRAND.text }}
            >
              Pas une contrainte réservée aux grandes entreprises. Une réalité qui
              vous concerne déjà.
            </p>

            <p
              className="mt-4 text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ color: BRAND.text }}
            >
              Cette expertise vous aide à distinguer ce qui s’applique à votre taille,
              ce que vos clients et partenaires attendent réellement et comment poser
              une base crédible, pragmatique et adaptée à votre activité.
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
              style={{ background: '#EEF7E8', borderColor: 'rgba(255,255,255,0.15)', }}
>
             <img
              src="/picto-rse.png"
              alt="RSE et obligations PME"
              className="w-13 h-13 object-contain"
  />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Ce que cette expertise apporte
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
              Distinguer ce qui est
              <br />
              obligatoire,
              <br />
              attendu,
              <br />
              utile à valoriser
            </h2>

            <ul className="mt-8 space-y-4 text-white/85 leading-relaxed">
              <li>Éviter les réponses improvisées ou trop fragiles</li>
              <li>Formaliser ce que vous faites déjà</li>
              <li>Avancer de façon progressive et crédible</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Les situations les plus fréquentes</SectionTag>
          <SectionTitle>
            Quand la RSE concerne déjà votre PME,
            <br />
            même sans démarche formalisée
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
            Formaliser, valoriser,
            <br />
            structurer,
            <br />
            anticiper
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
            Un appel d’offres intègre
            <br />
            des critères RSE pour la première fois
          </SectionTitle>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <article className="rounded-[28px] p-8 border border-black/5 shadow-sm bg-white">
              <p className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: BRAND.blue }}>
                Sans démarche structurée
              </p>

              <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                Vous ne savez pas précisément quoi répondre aux questions sur vos
                pratiques environnementales, sociales ou organisationnelles. Vous
                cochez ce que vous pouvez, mais la réponse manque de cohérence et de
                substance.
              </p>

              <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                Résultat : vous vous fragilisez sur un critère qui devient de plus en
                plus courant dans les prochaines années.
              </p>
            </article>

            <article className="rounded-[28px] p-8 border border-black/5 shadow-sm" style={{ background: '#E7F1DA' }}>
              <p className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: BRAND.green }}>
                Avec une démarche documentée
              </p>

              <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                Ce que vous faites déjà est formalisé et valorisé. Vous répondez avec
                des éléments concrets, même si votre démarche est encore en
                construction.
              </p>

              <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                Résultat : vous restez dans la course, vous gagnez en crédibilité et
                vous ouvrez des marchés qui vous étaient jusque-là plus difficiles
                d’accès.
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
            <SectionTitle>
              On commence par ce qui est
              <br />
              le plus concret
              <br />
              et le plus utile
            </SectionTitle>

            <p className="mt-8 text-lg leading-relaxed" style={{ color: BRAND.text }}>
              Pas par une démarche lourde, ni par un discours théorique. L’objectif
              est de voir rapidement ce qui mérite d’être clarifié en priorité :
              obligations réelles, attentes clients, preuves disponibles, actions déjà
              en place ou points à formaliser.
            </p>

            <p className="mt-4 text-lg leading-relaxed" style={{ color: BRAND.text }}>
              Une fois cette base clarifiée, il devient plus simple d’avancer avec une
              logique progressive, crédible et adaptée à la PME.
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
            Un premier échange permet souvent d’identifier rapidement ce qui mérite
            d’être formalisé, valorisé ou traité en priorité.
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