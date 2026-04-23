import Link from 'next/link'

const LOGO_SRC = '/logo.svg' // remplacez si besoin par /logo.png ou le vrai nom

export default function Footer() {
  const linkStyle =
    'inline-block text-sm text-white/90 hover:text-[#FFD166] transition-colors duration-300'

  return (
    <footer className="bg-[#2A4D69] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <div className="inline-flex items-center gap-3 bg-white rounded-xl px-3 py-2 mb-4">
            <img
              src={LOGO_SRC}
              alt="Horizon PME Solutions"
              className="h-12 w-auto object-contain"
            />
            <div>
              <p className="font-semibold text-sm text-[#2A4D69]">
                Horizon PME Solutions
              </p>
              <p className="text-xs text-[#5F7690]">
                Structurer, sécuriser et développer votre PME
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-sm mb-2">Navigation</p>
          <Link href="/" className={linkStyle}>Accueil</Link><br />
          <Link href="/accompagnement" className={linkStyle}>Accompagnement</Link><br />
          <Link href="/expertises" className={linkStyle}>Expertises</Link><br />
          <Link href="/cas-concrets" className={linkStyle}>Cas concrets</Link><br />
          <Link href="/ressources" className={linkStyle}>Ressources</Link><br />
          <Link href="/contact" className={linkStyle}>Contact</Link>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-sm mb-2">Expertises</p>
          <Link href="/strategie-commerciale" className={linkStyle}>
            Stratégie commerciale
          </Link><br />
          <Link href="/securite-conformite" className={linkStyle}>
            Sécurité & conformité
          </Link><br />
          <Link href="/rse-obligations-pme" className={linkStyle}>
            RSE & obligations PME
          </Link>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-sm mb-2">Informations</p>
          <Link href="/mentions-legales" className={linkStyle}>Mentions légales</Link><br />
          <Link href="/confidentialite" className={linkStyle}>Confidentialité</Link><br />
          <Link href="/rgpd" className={linkStyle}>RGPD</Link><br />
          <Link href="/cookies" className={linkStyle}>Cookies</Link>
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-8">
        © 2026 Horizon PME Solutions
      </div>
    </footer>
  )
}