"use client";

import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Locations", href: "#locations" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-slate-950/70 px-6 backdrop-blur-xl shadow-2xl">

        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold text-slate-300 transition hover:text-cyan-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://wa.me/905519354480"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/20"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a
            href="tel:+905519354480"
            className="flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-200"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-slate-950/95 p-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-white/5 px-5 py-4 font-bold text-white transition hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/905519354480"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-5 py-4 text-center font-black text-white"
            >
              WhatsApp
            </a>

            <a
              href="tel:+905519354480"
              className="rounded-xl bg-cyan-300 px-5 py-4 text-center font-black text-slate-950"
            >
              Call Now
            </a>

          </div>
        </div>
      )}
    </header>
  );
}