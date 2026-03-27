"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" className="w-10" />
          <div>
            <p className="font-semibold text-sm">Horizon PME Solutions</p>
            <p className="text-xs text-gray-500">
              Structurer, sécuriser et développer votre PME
            </p>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-sm">

          <Link href="/">Accueil</Link>
          <Link href="/accompagnement">Accompagnement</Link>
          <Link href="/expertises">Expertises</Link>
          <Link href="/methode">Méthode</Link>
          <Link href="/cas-concrets">Cas concrets</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/apropos">À propos</Link>

          <Link href="/contact">
            <button className="bg-[#FFD166] px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
              Prendre RDV
            </button>
          </Link>

        </nav>

        {/* MENU MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">

          <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link href="/accompagnement" onClick={() => setOpen(false)}>Accompagnement</Link>
          <Link href="/expertises" onClick={() => setOpen(false)}>Expertises</Link>
          <Link href="/methode" onClick={() => setOpen(false)}>Méthode</Link>
          <Link href="/cas-concrets" onClick={() => setOpen(false)}>Cas concrets</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/apropos" onClick={() => setOpen(false)}>À propos</Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            <button className="w-full bg-[#FFD166] py-3 rounded-lg font-semibold">
              Prendre RDV
            </button>
          </Link>

        </div>
      )}

    </header>
  );
}