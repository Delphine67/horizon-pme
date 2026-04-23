'use client'

import Link from 'next/link'
import { useState } from 'react'

const LOGO_SRC = '/logo.svg' // remplacez si besoin par /logo.png ou le vrai nom

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <div className="shrink-0">
            <img
              src={LOGO_SRC}
              alt="Horizon PME Solutions"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </div>

          <div>
            <p className="font-semibold text-sm md:text-base text-[#111827]">
              Horizon PME Solutions
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              Structurer, sécuriser et développer votre PME
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/">Accueil</Link>
          <Link href="/accompagnement">Accompagnement</Link>
          <Link href="/expertises">Expertises</Link>
          <Link href="/cas-concrets">Cas concrets</Link>
          <Link href="/ressources">Ressources</Link>

          <Link href="/contact">
            <button className="bg-[#FFD166] px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
              Faire le point
            </button>
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)}>Accueil</Link><br />
          <Link href="/accompagnement" onClick={() => setOpen(false)}>Accompagnement</Link><br />
          <Link href="/expertises" onClick={() => setOpen(false)}>Expertises</Link><br />
          <Link href="/cas-concrets" onClick={() => setOpen(false)}>Cas concrets</Link><br />
          <Link href="/ressources" onClick={() => setOpen(false)}>Ressources</Link><br />

          <Link href="/contact" onClick={() => setOpen(false)}>
            <button className="w-full bg-[#FFD166] py-3 rounded-lg font-semibold">
              Faire le point
            </button>
          </Link>
        </div>
      )}
    </header>
  )
}