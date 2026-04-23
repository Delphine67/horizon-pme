import Image from 'next/image'
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

export default function AccompagnementPage() {
  const needs = [
    "Vous manquez de temps pour structurer",
    "Vous n'avez pas toutes les compétences en interne",
    'Vous hésitez à recruter',
    "Vous ne savez pas par où commencer",
  ]

  const formats = [
    {
      title: 'Mission ponctuelle',
      subtitle: 'Pour débloquer un sujet précis',
      text:
        "Répondre à une difficulté concrète, structurer un document, clarifier une priorité ou prendre une décision avec plus de recul.",
      bg: '#FFFFFF',
      accent: BRAND.blue,
    },
    {
      title: 'Appui régulier',
      subtitle: 'Pour avancer dans la durée sans recruter',
      text:
        "Quelques heures par semaine ou quelques jours par mois pour suivre les actions, structurer les priorités et bénéficier d’une expertise régulière sans alourdir votre organisation.",
      bg: '#FFF3CC',
      accent: BRAND.yellow,
    },
    {
      title: 'Mission ciblée',
      subtitle: 'Pour traiter un chantier cadré',
      text:
        "Une intervention limitée dans le temps sur un sujet précis : conformité, organisation, documents, plan d’action ou accompagnement terrain.",
      bg: '#E7F1DA',
      accent: BRAND.green,
    },
  ]

  const methodSteps = [
    {
      n: '1',
      title: 'Diagnostic gratuit',
      text:
        "Un premier échange pour comprendre votre situation, repérer les points de vigilance et identifier 3 axes prioritaires à corriger.",
      bg: '#EAEFF3',
    },
    {
      n: '2',
      title: 'Diagnostic approfondi',
      text:
        "Si nécessaire, un travail plus détaillé est mené sur une expertise précise : documents, pratiques, organisation, risques ou priorités.",
      bg: '#FFF3CC',
    },
    {
      n: '3',
      title: 'Plan d’action',
      text:
        "Un plan d’action écrit permet de hiérarchiser ce qu’il faut traiter, dans quel ordre et avec quel niveau de priorité.",
      bg: '#E7F1DA',
    },
    {
      n: '4',
      title: 'Mise en œuvre',
      text:
        "Je peux intervenir directement, en partie ou plus largement, selon vos besoins, vos ressources internes et le niveau d’appui attendu.",
      bg: '#EEF3F7',
    },
    {
      n: '5',
      title: 'Suivi, reporting et ajustement',
      text:
        "L’accompagnement peut inclure un suivi dans le temps, un point d’avancement, des ajustements et un travail progressif avec vos équipes.",
      bg: '#FFFFFF',
    },
  ]

  const interventionModes = [
    'Intervention chez vous ou à distance',
    'Travail mené avec vos équipes',
    'Guidage et cadrage pour vous permettre d’avancer en interne',
    'Appui ponctuel ou suivi dans la durée selon votre besoin',
  ]

  const principles = [
    "Commencer par ce qui est obligatoire, prioritaire et réellement utile",
    "Ne pas alourdir inutilement votre organisation",
    "Adapter l’accompagnement à la taille, au secteur et à la maturité de votre PME",
    "Avancer de façon pragmatique, mesurable et progressive",
  ]

  const relatedArticles = getArticlesByTags(
    ['priorisation', 'risques', 'pilotage', 'pme'],
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
            <SectionTag>Accompagnement structuré pour PME</SectionTag>

            <h1
              className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
              style={{ color: BRAND.blue }}
            >
              Un accompagnement structuré
              <br />
              pour faire avancer
              <br />
              <span style={{ color: BRAND.green }}>votre PME</span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl leading-relaxed max-w-3xl"
              style={{ color: BRAND.text }}
            >
              Vous avez besoin d’avancer, mais sans recruter, sans perdre du temps
              et sans multiplier les essais ?
            </p>

            <p
              className="mt-4 text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ color: BRAND.text }}
            >
              Un accompagnement concret et adapté à votre réalité pour identifier,
              prioriser et mettre en œuvre les bonnes actions.
            </p>

            <p
              className="mt-4 text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ color: BRAND.text }}
            >
              Je vous accompagne pour clarifier votre situation, traiter ce qui est
              obligatoire ou prioritaire, puis avancer de façon structurée sur les
              sujets de conformité, de sécurité, de RSE, d’organisation et de
              développement.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-4 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
              >
                Faire un premier point
              </Link>

              <Link
                href="#formats"
                className="inline-flex items-center rounded-xl px-6 py-4 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
              >
                Voir les formats d’accompagnement
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

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Ce que vous cherchez souvent
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
              Avancer avec méthode,
              <br />
              sans recruter trop tôt,
              <br />
              sans vous disperser
            </h2>

            <ul className="mt-8 space-y-4 text-white/85 leading-relaxed">
              <li>Un cadre clair pour décider et prioriser</li>
              <li>Une intervention souple selon vos besoins réels</li>
              <li>Une mise en œuvre possible avec ou sans vos équipes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VOUS AVEZ BESOIN DAVANCER */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Vous avez besoin d’avancer, mais…</SectionTag>
          <SectionTitle>Ces freins reviennent souvent dans les PME</SectionTitle>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {needs.map((item, index) => (
              <article
                key={item}
                className="rounded-[24px] p-7 border border-black/5 shadow-sm bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold"
                  style={{
                    background:
                      index % 3 === 0 ? '#EAEFF3' : index % 3 === 1 ? '#FFF3CC' : '#E7F1DA',
                    color: BRAND.blue,
                  }}
                >
                  {index + 1}
                </div>
                <p className="mt-5 text-lg font-semibold leading-relaxed" style={{ color: BRAND.blue }}>
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VOTRE INTERLOCUTRICE */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-[28px]"
              style={{ background: '#DCE6EE' }}
            />
            <div className="relative z-10 overflow-hidden rounded-[28px] shadow-xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/photo-delphine.jpg"
                  alt="Delphine Ravet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div>
            <SectionTag>Votre interlocutrice</SectionTag>
            <SectionTitle>
              Une approche pragmatique,
              <br />
              structurée et ancrée terrain
            </SectionTitle>

            <p className="mt-8 text-lg leading-relaxed" style={{ color: BRAND.text }}>
              Delphine Ravet, consultante indépendante, accompagne les PME avec une
              approche pragmatique, structurée et ancrée terrain.
            </p>

            <p className="mt-4 text-lg leading-relaxed" style={{ color: BRAND.text }}>
              J’interviens en particulier auprès des PME de l’ouest francilien,
              notamment en industrie, BTP et immobilier, avec une logique simple :
              commencer par ce qui doit être clarifié, sécurisé ou mis à niveau,
              pour aider l’entreprise à avancer de façon réaliste.
            </p>

            <div className="mt-8">
              <a
                href="https://delphine-ravet.fr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
              >
                En savoir plus sur mon parcours
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MON ROLE */}
      <section className="px-6 py-20" style={{ background: BRAND.lightBlue }}>
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-[32px] p-10 md:p-12 relative overflow-hidden"
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

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Mon rôle
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-white">
              Vous aider à structurer
              <br />
              et décider
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/85 max-w-4xl">
              Je ne remplace pas vos équipes. Je vous apporte une vision, une
              méthode et un cadre pour avancer efficacement, sans alourdir
              inutilement votre organisation.
            </p>
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section id="formats" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Un accompagnement adapté à vos besoins</SectionTag>
          <SectionTitle>Trois formats pour s’adapter à votre réalité</SectionTitle>

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {formats.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] p-8 border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ background: item.bg, borderColor: 'rgba(42,77,105,0.08)' }}
              >
                <p
                  className="text-sm font-semibold uppercase tracking-[0.15em]"
                  style={{ color: item.accent }}
                >
                  {item.title}
                </p>

                <h3 className="mt-3 text-2xl font-bold" style={{ color: BRAND.blue }}>
                  {item.subtitle}
                </h3>

                <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Une méthode simple et efficace</SectionTag>
          <SectionTitle>Une progression claire en cinq étapes</SectionTitle>

          <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-5 gap-6">
            {methodSteps.map((step) => (
              <article
                key={step.n}
                className="rounded-[24px] p-7 border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: step.bg }}
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold"
                  style={{ background: '#FFFFFF', color: BRAND.blue }}
                >
                  {step.n}
                </div>

                <h3 className="mt-5 text-xl font-bold" style={{ color: BRAND.blue }}>
                  {step.title}
                </h3>

                <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT JINTERVIENS */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          <div>
            <SectionTag>Comment j’interviens concrètement</SectionTag>
            <SectionTitle>
              Un cadre souple,
              <br />
              selon votre besoin réel
            </SectionTitle>

            <p className="mt-8 text-lg leading-relaxed" style={{ color: BRAND.text }}>
              Selon votre besoin, je peux prendre en charge tout ou partie de ces
              étapes seule ou en collaboration avec vos équipes, ou simplement vous
              aider à structurer ce qui doit être mis en place en interne.
            </p>
          </div>

          <div className="grid gap-5">
            {interventionModes.map((item, index) => (
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
      </section>

      {/* ARTICLES */}
      <section className="px-6 py-20" style={{ background: BRAND.lightBlue }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Articles à lire sur ce sujet</SectionTag>
          <SectionTitle>Les articles sélectionnés</SectionTitle>

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

      {/* PRINCIPES */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Les principes qui guident mon intervention</SectionTag>
          <SectionTitle>Une façon d’avancer claire et utile</SectionTitle>

          <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {principles.map((item, index) => (
              <article
                key={item}
                className="rounded-[24px] p-7 border border-black/5 shadow-sm"
                style={{
                  background:
                    index % 4 === 0
                      ? '#EAEFF3'
                      : index % 4 === 1
                      ? '#FFF3CC'
                      : index % 4 === 2
                      ? '#E7F1DA'
                      : '#FFFFFF',
                }}
              >
                <p className="font-semibold leading-relaxed" style={{ color: BRAND.blue }}>
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionTag>Faisons le point sur votre situation</SectionTag>

          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ color: BRAND.blue }}
          >
            Un premier échange permet
            <br />
            de clarifier vos priorités
          </h2>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
            >
              Prendre rendez-vous
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