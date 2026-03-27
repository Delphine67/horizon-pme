import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2A4D69] text-white py-12">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* LOGO */}
        <div>
          <p className="font-semibold mb-2">Horizon PME Solutions</p>
          <p className="text-sm text-gray-300">
            Structurer, sécuriser et développer votre PME
          </p>
        </div>

        {/* NAV */}
        <div className="space-y-2 text-sm">
          <Link href="/">Accueil</Link><br />
          <Link href="/expertises">Expertises</Link><br />
          <Link href="/methode">Méthode</Link><br />
          <Link href="/cas-concrets">Cas concrets</Link><br />
          <Link href="/blog">Blog</Link>
        </div>

        {/* LEGAL */}
        <div className="space-y-2 text-sm">
          <Link href="/mentions-legales">Mentions légales</Link><br />
          <Link href="/confidentialite">Confidentialité</Link><br />
          <Link href="/cookies">Cookies</Link><br />
          <Link href="/rgpd">RGPD</Link>
        </div>

      </div>

      <div className="text-center text-xs text-gray-400 mt-8">
        © 2026 Horizon PME Solutions
      </div>

    </footer>
  );
}