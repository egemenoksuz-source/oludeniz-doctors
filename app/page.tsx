"use client";

import SeoSchema from "@/components/SeoSchema";
import {
  Ambulance,
  Bandage,
  Building2,
  ChevronRight,
  Clock,
  Droplets,
  FileText,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    [Ambulance, "Emergency Doctor", "24/7 urgent private medical support."],
    [Building2, "Hotel Doctor", "Doctor visits to hotels and resorts."],
    [Home, "Home Visit", "Private doctor visits to villas and homes."],
    [Droplets, "IV Therapy", "Hydration and recovery treatments."],
    [Bandage, "Wound Care", "Professional wound care and dressing."],
    [FileText, "Prescription Support", "Medication and document support."],
  ];

  const locations = [
    "Ölüdeniz",
    "Hisarönü",
    "Faralya",
    "Kabak",
    "Ovacık",
    "Kayaköy",
  ];

  return (
    <main className="min-h-screen bg-[#07131F] text-white">
      <SeoSchema />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-[#07131F]/80 px-6 shadow-2xl backdrop-blur-xl">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-[#07131F]">
              <span className="font-black">OD</span>
            </div>
            <div>
              <div className="text-xl font-black">Oludeniz</div>
              <div className="text-xs font-black tracking-[0.25em] text-cyan-300">
                DOCTOR
              </div>
            </div>
          </a>

          <nav className="hidden gap-8 font-bold text-slate-300 md:flex">
            <a href="#services" className="hover:text-cyan-300">
              Services
            </a>
            <a href="#locations" className="hover:text-cyan-300">
              Locations
            </a>
            <a href="#faq" className="hover:text-cyan-300">
              FAQ
            </a>
            <a href="#contact" className="hover:text-cyan-300">
              Contact
            </a>
          </nav>

          <div className="hidden gap-3 md:flex">
            <a
              href="https://wa.me/905519354480"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-500 px-5 py-3 font-black text-white"
            >
              WhatsApp
            </a>
            <a
              href="tel:+905519354480"
              className="rounded-full bg-red-600 px-5 py-3 font-black text-white"
            >
              Call Now
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl bg-white/10 p-3 md:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-[#07131F] p-5 md:hidden">
            {["Services", "Locations", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="mb-3 block rounded-xl bg-white/5 px-4 py-4 font-bold"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="relative min-h-screen overflow-hidden px-6 pt-36">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07131F] via-[#07131F]/90 to-[#07131F]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07131F] via-transparent to-[#07131F]/50" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 pb-24 md:min-h-[calc(100vh-9rem)] md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200">
              <ShieldCheck className="mr-2 h-4 w-4" />
              24/7 Private Doctor Service
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Hotel & Villa
              <br />
              Doctor Visits in
              <br />
              <span className="text-cyan-300">Ölüdeniz</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Fast, discreet and English-speaking medical care for tourists,
              hotels, villas and families in Ölüdeniz, Hisarönü, Faralya and
              Kabak.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+905519354480"
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-8 py-5 text-lg font-black text-white"
              >
                <Phone className="mr-3 h-5 w-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/905519354480"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-8 py-5 text-lg font-black text-white"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                WhatsApp
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["24/7", "Available"],
                ["EN", "English Speaking"],
                ["6+", "Service Areas"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur"
                >
                  <div className="text-3xl font-black text-cyan-300">
                    {value}
                  </div>
                  <div className="mt-1 text-sm text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
            <div className="rounded-[2rem] bg-[#0B1F33]/90 p-8">
              <div className="mb-5 flex gap-1 text-cyan-300">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                Emergency Medical Care
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Doctor visit to your hotel, villa or home.
              </h2>

              <div className="mt-7 space-y-4">
                {[
                  "Hotel doctor visits",
                  "Home & villa visits",
                  "IV therapy support",
                  "Food poisoning care",
                  "Prescription assistance",
                  "Travel insurance support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white/5 p-4"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 font-black text-[#07131F]">
                      ✓
                    </span>
                    <span className="font-semibold text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1F33] px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            [Clock, "24/7", "Medical Support"],
            [ShieldCheck, "5.0", "Trusted Service"],
            [MapPin, "6+", "Service Areas"],
            [MessageCircle, "Fast", "WhatsApp Response"],
          ].map(([Icon, value, label]: any) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <Icon className="mx-auto mb-3 h-7 w-7 text-cyan-300" />
              <div className="text-4xl font-black">{value}</div>
              <div className="mt-2 text-sm font-semibold text-slate-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title
            small="Medical Services"
            title="Private medical care when you need it"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(([Icon, title, text]: any) => (
              <div
                key={title}
                className="group rounded-[2rem] border border-white/10 bg-[#12263A] p-8 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
                <div className="mt-7 flex items-center gap-2 font-black text-cyan-300">
                  Learn More <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="bg-[#0B1F33] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title small="Service Areas" title="We come to you" />

          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((location) => (
              <div
                key={location}
                className="rounded-[2rem] border border-white/10 bg-[#12263A] p-8 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/40"
              >
                <MapPin className="mb-6 h-8 w-8 text-cyan-300" />
                <h3 className="text-2xl font-black">Doctor in {location}</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Private doctor service for hotels, villas, holiday homes and
                  local stays.
                </p>
                <div className="mt-7 font-black text-cyan-300">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Title small="FAQ" title="Frequently asked questions" />

          {[
            [
              "Do you visit hotels?",
              "Yes, we visit hotels, villas, apartments and holiday homes.",
            ],
            [
              "Do you speak English?",
              "Yes, we provide English-speaking medical support.",
            ],
            [
              "Which areas do you cover?",
              "Ölüdeniz, Hisarönü, Faralya, Kabak, Ovacık and Kayaköy.",
            ],
            [
              "Can I contact by WhatsApp?",
              "Yes, WhatsApp is the fastest way to contact us.",
            ],
          ].map(([q, a]) => (
            <div
              key={q}
              className="mb-4 rounded-3xl border border-white/10 bg-[#12263A] p-7"
            >
              <h3 className="text-xl font-black">{q}</h3>
              <p className="mt-3 leading-7 text-slate-300">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-red-600 p-10 text-white md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="font-black uppercase tracking-[0.3em] text-white/80">
                Need help now?
              </span>
              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Need a doctor right now?
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Call or send a WhatsApp message for fast medical support.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <a
                href="tel:+905519354480"
                className="rounded-2xl bg-white px-8 py-5 text-center text-lg font-black text-red-600"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/905519354480"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-green-500 px-8 py-5 text-center text-lg font-black text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#06101A] px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-2xl font-black">
              <span className="text-cyan-300">Oludeniz</span> Doctor
            </div>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              24/7 private doctor service for tourists, hotels, villas and
              residents.
            </p>
          </div>

          <div>
            <h3 className="font-black">Areas</h3>
            <div className="mt-4 grid gap-2 text-slate-400">
              <span>Ölüdeniz</span>
              <span>Hisarönü</span>
              <span>Faralya</span>
              <span>Kabak</span>
            </div>
          </div>

          <div>
            <h3 className="font-black">Contact</h3>
            <div className="mt-4 grid gap-2 text-slate-400">
              <a href="tel:+905519354480">+90 551 935 44 80</a>
              <a
                href="https://wa.me/905519354480"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/905519354480"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl"
          aria-label="WhatsApp"
        >
          <MessageCircle />
        </a>
        <a
          href="tel:+905519354480"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl"
          aria-label="Call"
        >
          <Phone />
        </a>
      </div>
    </main>
  );
}

function Title({ small, title }: { small: string; title: string }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <span className="font-black uppercase tracking-[0.3em] text-cyan-300">
        {small}
      </span>
      <h2 className="mt-5 text-4xl font-black md:text-6xl">{title}</h2>
    </div>
  );
}