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

export default function ExpertisesPage() {
  const expertises = [
    {
      number: '1',
      title: 'Stratégie commerciale',
      subtitle: 'Vous avez une bonne offre. Mais est-ce que ça se voit ?',
      text:
        "Clarifier ce qui vous différencie réellement, rendre votre offre lisible pour vos clients, identifier ce qui freine votre développement et construire une cohérence entre ce que vous promettez et ce que vous livrez.",
      bullets: [
        "Positionnement et lisibilité de l'offre",
        'Cohérence entre promesse et réalité terrain',
        'Freins au développement identifiés',
        "Premières actions concrètes, pas un plan sur 3 ans",
      ],
      href: '/strategie-commerciale',
      image: '/picto-marketing.png',
      bg: '#EAEFF3',
      accent: BRAND.blue,
    },
    {
      number: '2',
      title: 'Sécurité & conformité',
      subtitle: 'Ce que vous ne savez pas que vous devez avoir en place.',
      text:
        "Pas une liste exhaustive à cocher. Une lecture honnête de ce qui est vraiment en ordre, ce qui manque, ce qui vous expose et un plan pour combler les écarts sans paralyser l'activité.",
      bullets: [
        'DUERP et PAPRIPACT',
        'Prévention et priorités sécurité',
        'Accueil et intégration des nouveaux salariés',
        'Cadre documentaire et organisation interne',
      ],
      href: '/securite-conformite',
      image: '/picto-securite.png',
      bg: '#FFF3CC',
      accent: BRAND.yellow,
    },
    {
      number: '3',
      title: 'RSE & obligations PME',
      subtitle:
        'Pas une contrainte de grande entreprise. Une réalité qui vous concerne déjà.',
      text:
        "Distinguer ce qui s'applique à votre taille, ce que vos clients et partenaires attendent réellement et structurer une démarche qui vous ressemble, sans vous alourdir.",
      bullets: [
        'Obligations réelles vs perçues',
        "Risques d'image et attentes marché",
        'Valorisation de vos engagements existants',
        'Priorités progressives et réalistes',
      ],
      href: '/rse-obligations-pme',
      image: '/picto-rse.png',
      bg: '#E7F1DA',
      accent: BRAND.green,
    },
  ]

  const cases = [
    {
      title: 'Sécurité & conformité',
      situation: 'Un client grand compte demande un dossier de conformité',
      withoutTitle: 'Sans préparation',
      withoutText:
        "Vous découvrez que votre DUERP date de 3 ans, que certains documents n'existent pas et que personne ne sait ce qui est à jour. Vous avez 15 jours pour répondre. Réponse bâclée, stress interne, image dégradée — et parfois, marché perdu.",
      withTitle: 'Avec un cadre en place',
      withText:
        "Vos documents sont à jour, structurés, accessibles. Vous répondez en 2 jours avec un dossier complet. L'interlocuteur est rassuré dès le premier échange. Une contrainte devient un avantage commercial.",
      accent: BRAND.yellow,
      bg: '#FFF8E1',
    },
    {
      title: 'Stratégie commerciale',
      situation: 'Vous perdez des devis sans comprendre pourquoi',
      withoutTitle: "Sans clarté sur l'offre",
      withoutText:
        "Vos propositions sont complètes et sérieuses, mais le prospect choisit un concurrent moins cher. Vous n'arrivez pas à expliquer ce qui vous différencie réellement. Vous baissez vos prix pour rester dans la course, ou vous perdez des marchés que vous auriez dû gagner.",
      withTitle: 'Avec un positionnement clair',
      withText:
        "Votre discours, vos supports et vos devis reflètent votre vraie valeur. Le prospect comprend pourquoi vous n'êtes pas le moins cher — et pourquoi ça vaut la différence. Meilleur taux de transformation, marges défendues, clients mieux qualifiés.",
      accent: BRAND.blue,
      bg: '#EEF3F7',
    },
    {
      title: 'RSE & obligations',
      situation: "Un appel d'offres intègre des critères RSE pour la première fois",
      withoutTitle: 'Sans démarche structurée',
      withoutText:
        "Vous ne savez pas quoi répondre aux questions sur votre bilan carbone ou votre politique sociale. Vous cochez ce que vous pouvez, mais la réponse manque de substance. Vous vous disqualifiez sur un critère qui va devenir systématique.",
      withTitle: 'Avec une démarche documentée',
      withText:
        "Ce que vous faites déjà est formalisé et valorisé. Vous répondez avec des éléments concrets, même si votre démarche est encore en construction. Vous restez dans la course et ouvrez des marchés qui vous étaient jusqu'ici fermés.",
      accent: BRAND.green,
      bg: '#EEF7E8',
    },
  ]

  const quotes = [
    "On sait qu'on devrait s'en occuper, mais on n'a pas le temps de s'y mettre sérieusement.",
    "On fait déjà des choses bien, mais personne ne le sait — ni nos clients, ni nos partenaires.",
    "On a eu un problème l'année dernière. Depuis, on se dit qu'il faudrait mettre ça à plat, mais on ne sait pas par où commencer.",
  ]

  const entryPoints = [
    {
      title: 'Vous perdez des devis, votre offre est floue, votre discours manque de force',
      cta: 'Commencez par la stratégie commerciale',
      href: '/strategie-commerciale',
      bg: '#EAEFF3',
    },
    {
      title: "Vous avez un doute sur vos obligations, vos documents ou votre organisation interne",
      cta: 'Commencez par sécurité & conformité',
      href: '/securite-conformite',
      bg: '#FFF3CC',
    },
    {
      title: 'Vos clients demandent plus de preuves, plus de cohérence, plus de visibilité sur vos engagements',
      cta: 'Commencez par RSE & obligations PME',
      href: '/rse-obligations-pme',
      bg: '#E7F1DA',
    },
  ]

  const relatedArticles = getArticlesByTags(
    ['strategie', 'securite', 'rse', 'conformite', 'pilotage'],
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

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
          <div>
            <SectionTag>Des expertises complémentaires au service de votre PME</SectionTag>

            <h1
              className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
              style={{ color: BRAND.blue }}
            >
              Ce qui freine votre PME,
              <br />
              ce qui l’expose,
              <br />
              <span style={{ color: BRAND.green }}>ce qui peut la faire avancer</span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl leading-relaxed max-w-3xl"
              style={{ color: BRAND.text }}
            >
              La plupart des PME traitent ces sujets quand elles n’ont plus le choix :
              après un incident, avant un audit, parce qu’un client l’exige.
              Abordés en urgence et en silo, ils coûtent plus qu’ils ne rapportent.
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
                Choisir la bonne porte d’entrée
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
              Pourquoi ces trois expertises ensemble ?
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white">
              Ces sujets ne s’additionnent pas.
              <br />
              Ils se multiplient quand on les croise.
            </h2>

            <ul className="mt-8 space-y-4 text-white/85 leading-relaxed">
              <li>
                Une non-conformité documentaire peut bloquer un contrat ou vous sortir
                d’un appel d’offres.
              </li>
              <li>
                Une démarche RSE non valorisée reste invisible, même quand vous faites
                déjà beaucoup de choses bien.
              </li>
              <li>
                Un positionnement flou rend invisibles tous vos efforts, même les plus
                sérieux.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* POURQUOI LES CROISER */}
      <section className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Pourquoi les croiser fait vraiment avancer une PME</SectionTag>
          <SectionTitle>
            Des priorités plus utiles,
            <br />
            plus crédibles,
            <br />
            plus cohérentes
          </SectionTitle>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              "Une PME ne peut pas durablement se développer si sa promesse commerciale n’est pas cohérente avec sa réalité terrain.",
              'Une entreprise qui veut avancer sereinement doit aussi sécuriser ses obligations, ses documents, ses pratiques et son organisation.',
              'Les attentes clients, les sujets de conformité et la valorisation des engagements se rejoignent souvent dans la réalité.',
              'Croiser ces expertises permet d’éviter les actions dispersées et de construire des priorités plus utiles et plus crédibles.',
            ].map((item, index) => (
              <article
                key={item}
                className="rounded-[24px] p-7 shadow-sm border border-black/5 bg-white"
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
                    {index + 1}
                  </div>
                  <p className="leading-relaxed" style={{ color: BRAND.text }}>
                    {item}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TROIS EXPERTISES */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Les trois expertises</SectionTag>
          <SectionTitle>
            Trois lectures croisées
            <br />
            pour des priorités qui tiennent la route
          </SectionTitle>

          <p className="mt-6 text-lg leading-relaxed max-w-3xl" style={{ color: BRAND.text }}>
            J’interviens sur des sujets clés pour structurer votre activité,
            sécuriser vos pratiques et soutenir votre développement.
          </p>

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {expertises.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] p-8 border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white"
                style={{ borderColor: 'rgba(42,77,105,0.08)' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: item.bg }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-9 h-9 object-contain"
                  />
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: item.accent }}>
                  Expertise {item.number}
                </p>

                <h3 className="mt-3 text-2xl font-bold" style={{ color: BRAND.blue }}>
                  {item.title}
                </h3>

                <p className="mt-4 font-semibold leading-relaxed" style={{ color: BRAND.blue }}>
                  {item.subtitle}
                </p>

                <p className="mt-5 leading-relaxed" style={{ color: BRAND.text }}>
                  {item.text}
                </p>

                <ul className="mt-6 space-y-2" style={{ color: BRAND.text }}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span style={{ color: item.accent }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={item.href}
                  className="mt-8 inline-flex items-center rounded-xl px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: item.accent, color: item.title === 'Sécurité & conformité' ? BRAND.blue : BRAND.white }}
                >
                  Découvrir cette expertise
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAS CONCRETS */}
      <section className="px-6 py-20" style={{ background: BRAND.lightBlue }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Ce que ça change concrètement</SectionTag>
          <SectionTitle>
            Des situations que vous
            <br />
            connaissez peut-être
          </SectionTitle>

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {cases.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] p-8 shadow-sm border border-black/5 bg-white"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: item.accent }}>
                  {item.title}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-snug" style={{ color: BRAND.blue }}>
                  {item.situation}
                </h3>

                <div
                  className="mt-6 rounded-2xl p-5"
                  style={{ background: item.bg }}
                >
                  <p className="font-semibold" style={{ color: BRAND.blue }}>
                    {item.withoutTitle}
                  </p>
                  <p className="mt-3 leading-relaxed" style={{ color: BRAND.text }}>
                    {item.withoutText}
                  </p>
                </div>

                <div className="mt-5 rounded-2xl p-5 border border-black/5">
                  <p className="font-semibold" style={{ color: BRAND.green }}>
                    {item.withTitle}
                  </p>
                  <p className="mt-3 leading-relaxed" style={{ color: BRAND.text }}>
                    {item.withText}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUE DISENT LES DIRIGEANTS */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <SectionTag>Ce que disent souvent les dirigeants</SectionTag>
          <SectionTitle>
            Au premier échange,
            <br />
            trois phrases reviennent
          </SectionTitle>

          <div className="mt-12 grid gap-5">
            {quotes.map((quote, index) => (
              <div
                key={quote}
                className="rounded-[24px] px-8 py-6 border border-black/5 shadow-sm"
                style={{
                  background: index === 1 ? '#FFF8E1' : '#FFFFFF',
                }}
              >
                <p className="italic text-lg leading-relaxed" style={{ color: BRAND.blue }}>
                  “{quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAR OU COMMENCER */}
      <section id="par-ou-commencer" className="px-6 py-20" style={{ background: BRAND.light }}>
        <div className="max-w-7xl mx-auto">
          <SectionTag>Par où commencer ?</SectionTag>
          <SectionTitle>
            On commence par les points
            <br />
            les plus concrets et les plus urgents
          </SectionTitle>

          <p className="mt-6 text-lg leading-relaxed max-w-4xl" style={{ color: BRAND.text }}>
            Pas par un audit de 40 pages. L’objectif est de voir rapidement ce qui
            mérite d’être traité en priorité et pourquoi. Un premier échange suffit
            souvent à dégager les deux ou trois chantiers qui feraient vraiment la
            différence.
          </p>

          <p className="mt-4 text-lg leading-relaxed max-w-4xl" style={{ color: BRAND.text }}>
            Mon approche est globale : les sujets marketing, organisationnels et
            réglementaires sont souvent liés. L’objectif est de vous apporter une
            vision cohérente et opérationnelle.
          </p>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {entryPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] p-7 border border-black/5 shadow-sm"
                style={{ background: item.bg }}
              >
                <p className="leading-relaxed" style={{ color: BRAND.blue }}>
                  {item.title}
                </p>

                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center rounded-xl px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-white border border-[#2A4D69] text-[#2A4D69] hover:bg-[#EEF3F7]"
                >
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
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
        </div>
      </section>

      {/* RESSOURCES */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Ressources liées</SectionTag>
          <SectionTitle>Pour aller plus loin</SectionTitle>

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