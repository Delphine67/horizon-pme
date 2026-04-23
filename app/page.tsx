import Image from 'next/image'
import Link from 'next/link'
import { formatFrenchDate, getLatestArticles } from './ressources/articles-index'

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

function IconTile({
  children,
  bg,
  color = BRAND.blue,
}: {
  children: React.ReactNode
  bg: string
  color?: string
}) {
  return (
    <div
      className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold shrink-0"
      style={{ background: bg, color }}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  const latestArticles = getLatestArticles(3)

  const painPoints = [
    {
      title: 'Trop de sujets à gérer en même temps',
      text:
        "Quand tout semble urgent, il devient difficile de savoir quoi traiter en premier et comment avancer sans dispersion.",
      bg: BRAND.white,
      iconBg: '#EAEFF3',
      icon: '01',
    },
    {
      title: 'Des obligations mal identifiées ou repoussées',
      text:
        "Sécurité, conformité, RSE, documents à jour : certains sujets restent flous ou sont traités trop tard.",
      bg: '#FFF7DF',
      iconBg: '#FFE6A0',
      icon: '02',
    },
    {
      title: 'Des actions qui manquent de cohérence',
      text:
        "Votre offre, votre communication, votre organisation et vos pratiques ne racontent pas toujours la même chose.",
      bg: BRAND.white,
      iconBg: '#E3F0D4',
      icon: '03',
    },
    {
      title: 'Peu de visibilité sur les vraies priorités',
      text:
        "Vous avancez, mais sans lecture claire de ce qui vous expose, de ce qui peut attendre et de ce qui fera réellement progresser la PME.",
      bg: '#EEF3F7',
      iconBg: '#DCE8F0',
      icon: '04',
    },
  ]

  const expertises = [
    {
      title: 'Stratégie commerciale',
      text:
        "Clarifier votre offre, votre positionnement et les freins à votre développement pour retrouver de la cohérence et des leviers d’action.",
      href: '/strategie-commerciale',
      color: BRAND.blue,
      light: '#EAEFF3',
      image: '/picto-marketing.png',
    },
    {
      title: 'Sécurité & conformité',
      text:
        "Sécuriser vos obligations, vos documents, votre prévention, votre DUERP, votre organisation et l’intégration des nouveaux salariés.",
      href: '/securite-conformite',
      color: BRAND.yellow,
      light: '#FFF3CC',
      image: '/picto-securite.png',
    },
    {
      title: 'RSE & obligations PME',
      text:
        "Identifier ce qui concerne réellement votre PME, structurer vos engagements et mieux répondre aux attentes de vos clients et partenaires.",
      href: '/rse-obligations-pme',
      color: BRAND.green,
      light: '#E7F1DA',
      image: '/picto-rse.png',
    },
  ]

  const methodSteps = [
    {
      n: '1',
      title: 'Premier point gratuit',
      text:
        "Un échange simple pour comprendre votre situation et repérer vos premiers points de vigilance.",
      bg: '#EAEFF3',
      color: BRAND.blue,
    },
    {
      n: '2',
      title: 'Priorisation',
      text:
        "Identification de 3 axes prioritaires à traiter selon vos obligations, vos risques et vos enjeux réels.",
      bg: '#FFF3CC',
      color: BRAND.blue,
    },
    {
      n: '3',
      title: 'Plan d’action',
      text:
        "Construction d’une feuille de route claire, réaliste et adaptée à votre PME.",
      bg: '#E7F1DA',
      color: BRAND.blue,
    },
    {
      n: '4',
      title: 'Mise en œuvre & suivi',
      text:
        "Intervention ponctuelle ou accompagnement dans la durée, avec ajustements et appui aux équipes.",
      bg: BRAND.blue,
      color: BRAND.white,
    },
  ]

  const supportModes = [
    'Mission ponctuelle sur un sujet ciblé',
    'Accompagnement régulier quelques heures par semaine ou par mois',
    'Plan d’action, mise en œuvre et suivi dans la durée',
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

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <SectionTag>Accompagnement PME • Île-de-France Ouest</SectionTag>

            <h1
              className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
              style={{ color: BRAND.blue }}
            >
              Structurez, sécurisez
              <br />
              et développez votre PME
              <span className="block mt-2" style={{ color: BRAND.green }}>
                sans dispersion
              </span>
              <span className="relative inline-block mt-2">
                <span style={{ color: BRAND.blue }}>ni perte de temps</span>
                <span
                  className="absolute left-0 bottom-1 h-3 rounded-full -z-10"
                  style={{ background: BRAND.yellow, width: '100%', opacity: 0.9 }}
                />
              </span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl leading-relaxed max-w-2xl"
              style={{ color: BRAND.text }}
            >
              Vous dirigez une PME et vous devez avancer, répondre à certaines
              obligations, structurer vos priorités et développer votre activité ?
            </p>

            <p
              className="mt-4 text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: BRAND.text }}
            >
              J’interviens à vos côtés pour clarifier ce qui manque, ce qui est
              obligatoire, ce qui doit être priorisé, puis mettre en œuvre les bonnes
              actions de façon concrète et progressive.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
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
                Découvrir l’accompagnement
              </Link>
            </div>

            <div
              className="mt-5 inline-flex items-start gap-3 rounded-2xl px-4 py-3 border"
              style={{
                background: '#FFFFFF',
                borderColor: '#E3EAF0',
              }}
            >
              <div
                className="mt-1 h-3 w-3 rounded-full shrink-0"
                style={{ background: BRAND.green }}
              />
              <div>
                <p className="text-sm font-semibold" style={{ color: BRAND.green }}>
                  Diagnostic général gratuit
                </p>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.blue }}>
                  Un premier échange pour identifier vos priorités.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {['PME industrie', 'BTP', 'Immobilier', 'Transport', 'Service'].map((item) => (
                <span
                  key={item}
                  className="rounded-full px-4 py-2"
                  style={{
                    background: '#FFFFFF',
                    color: BRAND.blue,
                    border: '1px solid rgba(42,77,105,0.12)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[560px] rounded-[32px] p-5 md:p-6 shadow-[0_20px_60px_rgba(42,77,105,0.18)]"
              style={{ background: '#DCE6EE' }}
            >
              <div className="relative overflow-hidden rounded-[24px] bg-white">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/photosite-hero.png"
                    alt="Accompagnement Horizon PME Solutions"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div
                className="absolute -bottom-5 -right-5 h-16 w-16 rounded-full"
                style={{ background: BRAND.yellow }}
              />
              <div
                className="absolute bottom-4 right-8 h-10 w-10 rounded-full"
                style={{ background: BRAND.green }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI MOI */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <div>
            <SectionTag>Pourquoi me choisir</SectionTag>
            <SectionTitle>
              Un accompagnement structuré, à la hauteur de vos enjeux
            </SectionTitle>

            <p className="mt-8 text-lg leading-relaxed max-w-3xl" style={{ color: BRAND.text }}>
              Mon approche croise développement commercial, conformité
              réglementaire et impact sociétal. L’objectif : vous aider à conjuguer
              <strong style={{ color: BRAND.blue }}> performance</strong>,
              <strong style={{ color: BRAND.blue }}> conformité</strong> et
              <strong style={{ color: BRAND.blue }}> crédibilité</strong>, sans
              complexifier inutilement votre quotidien.
            </p>

            <div className="mt-10 border-l-4 pl-6 max-w-3xl" style={{ borderColor: BRAND.green }}>
              <p className="italic text-lg leading-relaxed" style={{ color: BRAND.text }}>
                “Mon objectif : transformer vos contraintes en leviers de
                performance, de conformité et de satisfaction client.”
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "30 ans d'expertise",
                text: "Une expérience solide en marketing, développement, conformité et accompagnement PME.",
                bg: '#EAEFF3',
                icon: '◔',
              },
              {
                title: 'Approche sur-mesure',
                text: "Diagnostic, plan d’action et accompagnement adaptés à votre secteur, votre taille et vos priorités.",
                bg: '#E7F1DA',
                icon: '◎',
              },
              {
                title: 'Mise en œuvre concrète',
                text: "Formation, outils pratiques, cadrage et actions utiles pour des résultats mesurables.",
                bg: '#FFF3CC',
                icon: '↗',
              },
              {
                title: 'Veille continue',
                text: "Anticipation des évolutions légales en sécurité et en RSE pour rester aligné dans le temps.",
                bg: '#EAEFF3',
                icon: '◷',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] p-7 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white"
              >
                <IconTile bg={item.bg}>{item.icon}</IconTile>
                <h3 className="mt-5 text-xl font-bold" style={{ color: BRAND.blue }}>
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed" style={{ color: BRAND.text }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FRICTION */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Vous avancez, mais avec trop de friction</SectionTag>
          <SectionTitle>
            Quand les priorités ne sont pas claires, l’activité se disperse
          </SectionTitle>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {painPoints.map((item) => (
              <article
                key={item.title}
                className="group rounded-[24px] p-8 shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: item.bg }}
              >
                <div className="flex items-start gap-5">
                  <IconTile bg={item.iconBg}>{item.icon}</IconTile>
                  <div>
                    <h3
                      className="text-xl font-bold transition-colors duration-300 group-hover:text-[#7CB342]"
                      style={{ color: BRAND.blue }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISES */}
      <section className="px-6 py-20" style={{ background: BRAND.lightBlue }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Trois expertises complémentaires</SectionTag>
          <SectionTitle>
            Une lecture globale pour faire avancer votre PME
          </SectionTitle>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {expertises.map((item) => (
              <Link key={item.title} href={item.href}>
                <article
                  className="group rounded-[28px] p-8 border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full bg-white"
                  style={{ borderColor: 'rgba(42,77,105,0.08)' }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: item.light }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-9 h-9 object-contain"
                    />
                  </div>

                  <h3
                    className="mt-6 text-2xl font-bold transition-colors duration-300"
                    style={{ color: BRAND.blue }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed" style={{ color: BRAND.text }}>
                    {item.text}
                  </p>

                  <span
                    className="mt-8 inline-flex font-semibold transition-colors duration-300"
                    style={{ color: item.color }}
                  >
                    Découvrir →
                  </span>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/expertises"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: BRAND.blue, color: BRAND.white }}
            >
              Voir toutes les expertises
            </Link>
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Une progression simple et visible</SectionTag>
          <SectionTitle>
            Une méthode claire pour avancer sans vous disperser
          </SectionTitle>

          <div className="mt-12 hidden lg:grid grid-cols-4 gap-0">
            {methodSteps.map((step, index) => (
              <div
                key={step.n}
                className="relative px-8 py-10"
                style={{
                  background: step.bg,
                  color: step.color,
                  clipPath:
                    'polygon(0 0, 86% 0, 100% 50%, 86% 100%, 0 100%, 12% 50%)',
                  marginLeft: index === 0 ? '0' : '-26px',
                }}
              >
                <div className="pl-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80">
                    {step.n}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold">{step.title}</h3>
                  <p className="mt-4 leading-relaxed opacity-90">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:hidden mt-12 grid gap-6">
            {methodSteps.map((step) => (
              <div
                key={step.n}
                className="rounded-[24px] p-8"
                style={{ background: step.bg, color: step.color }}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80">
                  {step.n}
                </div>
                <h3 className="mt-3 text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 leading-relaxed opacity-90">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/accompagnement"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: BRAND.blue, color: BRAND.white }}
            >
              Comprendre l’accompagnement
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-[#2A4D69] text-[#2A4D69] bg-white hover:bg-[#EEF3F7]"
            >
              Faire le point
            </Link>
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <div
            className="rounded-[32px] p-10 text-white relative overflow-hidden"
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
              Un accompagnement adapté
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              Des formats souples pour s’adapter à votre réalité
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {supportModes.map((item, index) => {
              const cards = [
                { bg: '#FFFFFF', color: BRAND.blue },
                { bg: '#FFF3CC', color: BRAND.blue },
                { bg: '#E7F1DA', color: BRAND.blue },
              ]
              return (
                <div
                  key={item}
                  className="rounded-[24px] p-6 border border-black/5 shadow-sm"
                  style={{ background: cards[index].bg, color: cards[index].color }}
                >
                  <p className="font-semibold leading-relaxed">{item}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10">
          <Link
            href="/accompagnement"
            className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-[#FFD166] text-[#2A4D69] hover:bg-[#F2C94C]"
          >
            Voir les modalités d’accompagnement
          </Link>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Ressources récentes</SectionTag>
          <SectionTitle>Les derniers articles publiés</SectionTitle>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
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

          <div className="mt-10 text-center">
            <Link
              href="/ressources"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: BRAND.blue, color: BRAND.white }}
            >
              Voir toutes les ressources
            </Link>
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
            Faites un premier point sur votre situation
          </h2>

          <p
            className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: BRAND.text }}
          >
            Un échange simple permet souvent d’identifier rapidement vos priorités,
            les points à sécuriser et la meilleure façon d’avancer.
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