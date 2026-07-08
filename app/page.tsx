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
    [Droplets, "IV Therapy", "Hydration treatments."],
    [Bandage, "Wound Care", "Professional wound care and dressing."],
    [FileText, "Prescription Support", "Medication and document support."],
  ];

  const seoPages = [
    ["Doctor in Ölüdeniz", "/doctor-in-oludeniz"],
    ["About Oludeniz Doctor", "/about-doctor"],
    ["Doctor in Fethiye", "/doctor-in-fethiye"],
    ["Doctor in Hisarönü", "/doctor-in-hisaronu"],
    ["Hotel Doctor Ölüdeniz", "/hotel-doctor-oludeniz"],
    ["IV Therapy Ölüdeniz", "/iv-therapy-oludeniz"],
  ];

  const locations = ["Ölüdeniz", "Hisarönü", "Faralya", "Kabak", "Ovacık", "Kayaköy"];

  return (
    <main className="min-h-screen text-[#12344D]">
      <SeoSchema />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-3xl border border-white/70 bg-white/60 px-6 shadow-xl backdrop-blur-2xl">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00B8D9] text-white shadow-lg">
              <span className="font-black">OD</span>
            </div>
            <div>
              <div className="text-xl font-black text-[#12344D]">Oludeniz</div>
              <div className="text-xs font-black tracking-[0.25em] text-[#00B8D9]">
                DOCTOR
              </div>
            </div>
          </a>

          <nav className="hidden gap-8 font-bold text-[#5A7386] md:flex">
            <a href="/about-doctor" className="hover:text-[#00B8D9]">About</a>
            <a href="#services" className="hover:text-[#00B8D9]">Services</a>
            <a href="#locations" className="hover:text-[#00B8D9]">Locations</a>
            <a href="#faq" className="hover:text-[#00B8D9]">FAQ</a>
            <a href="#contact" className="hover:text-[#00B8D9]">Contact</a>
          </nav>

          <div className="hidden gap-3 md:flex">
            <a
              href="https://wa.me/905519354800"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-5 py-3 font-black text-white shadow-lg transition hover:scale-105"
            >
              WhatsApp
            </a>

            <a
              href="tel:+905519354800"
              className="rounded-full bg-[#FF5A5F] px-5 py-3 font-black text-white shadow-lg transition hover:scale-105"
            >
              Call Now
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/70 bg-white/80 p-3 text-[#12344D] shadow md:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur-xl md:hidden">
            {[
              ["About", "/about-doctor"],
              ["Services", "#services"],
              ["Locations", "#locations"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
            ].map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="mb-3 block rounded-xl bg-[#D8F7FF] px-4 py-4 font-bold text-[#12344D]"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,184,217,0.28),transparent_35%),linear-gradient(135deg,#8EDCF2_0%,#AEEAF8_45%,#D8F7FF_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:min-h-[calc(100vh-9rem)] md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-[#00B8D9]/25 bg-white/60 px-4 py-2 text-sm font-black text-[#00B8D9] shadow-sm backdrop-blur-xl">
              <ShieldCheck className="mr-2 h-4 w-4" />
              24/7 Private Doctor Service
            </div>

            <h1 className="text-5xl font-black leading-tight text-[#12344D] md:text-7xl">
              Oludeniz Doctor
              <br />
              Private Doctor in
              <br />
              <span className="text-[#00B8D9]">Ölüdeniz</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5A7386] md:text-xl">
              Fast, discreet and English-speaking medical care for tourists,
              hotels, villas and families in Ölüdeniz, Hisarönü, Faralya and Kabak.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+905519354800"
                className="inline-flex items-center justify-center rounded-2xl bg-[#FF5A5F] px-8 py-5 text-lg font-black text-white shadow-xl transition hover:scale-105"
              >
                <Phone className="mr-3 h-5 w-5" />
                Call Now
              </a>

              <a
                href="https://wa.me/905519354800"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-white shadow-xl transition hover:scale-105"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/70 bg-white/50 p-5 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[2rem] border border-white/70 bg-[#F9FDFF] p-8 shadow-lg">
              <div className="mb-5 flex gap-1 text-[#D4AF37]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#00B8D9]">
                Emergency Medical Care
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#12344D]">
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
                    className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/85 p-4"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00B8D9] font-black text-white">
                      ✓
                    </span>
                    <span className="font-semibold text-[#12344D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/70 bg-[#D8F7FF]/80 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            [Clock, "24/7", "Medical Support"],
            [ShieldCheck, "5.0", "Trusted Service"],
            [MapPin, "6+", "Service Areas"],
            [MessageCircle, "Fast", "WhatsApp Response"],
          ].map(([Icon, value, label]: any) => (
            <div
              key={label}
              className="rounded-3xl border border-white/70 bg-[#F9FDFF] p-6 text-center shadow-sm"
            >
              <Icon className="mx-auto mb-3 h-7 w-7 text-[#00B8D9]" />
              <div className="text-4xl font-black text-[#12344D]">{value}</div>
              <div className="mt-2 text-sm font-semibold text-[#5A7386]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title small="Medical Services" title="Private medical care when you need it" />

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(([Icon, title, text]: any) => (
              <div
                key={title}
                className="group rounded-[2rem] border border-white/70 bg-[#F9FDFF] p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D8F7FF] text-[#00B8D9]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black text-[#12344D]">{title}</h3>
                <p className="mt-4 leading-7 text-[#5A7386]">{text}</p>
                <div className="mt-7 flex items-center gap-2 font-black text-[#00B8D9]">
                  Learn More <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#BFEAF5]/70 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title small="Popular Pages" title="Popular medical services and areas" />

          <div className="grid gap-6 md:grid-cols-3">
            {seoPages.map(([title, href]) => (
              <a
                key={href}
                href={href}
                className="group rounded-[2rem] border border-white/70 bg-[#F9FDFF] p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <MapPin className="mb-6 h-8 w-8 text-[#00B8D9]" />
                <h3 className="text-2xl font-black text-[#12344D]">{title}</h3>
                <p className="mt-4 leading-7 text-[#5A7386]">
                  Learn more about private doctor services, hotel visits and emergency medical care.
                </p>
                <div className="mt-7 flex items-center gap-2 font-black text-[#00B8D9]">
                  Open Page <ChevronRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title small="Service Areas" title="We come to you" />

          <div className="grid gap-6 md:grid-cols-3">
            {locations.map((location) => (
              <div
                key={location}
                className="rounded-[2rem] border border-white/70 bg-[#F9FDFF] p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <MapPin className="mb-6 h-8 w-8 text-[#00B8D9]" />
                <h3 className="text-2xl font-black text-[#12344D]">Doctor in {location}</h3>
                <p className="mt-4 leading-7 text-[#5A7386]">
                  Private doctor service for hotels, villas, holiday homes and local stays.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#D8F7FF]/80 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Title small="FAQ" title="Frequently asked questions" />

          {[
            ["Do you visit hotels?", "Yes, we visit hotels, villas, apartments and holiday homes."],
            ["Do you speak English?", "Yes, we provide English-speaking medical support."],
            ["Which areas do you cover?", "Ölüdeniz, Hisarönü, Faralya, Kabak, Ovacık and Kayaköy."],
            ["Can I contact by WhatsApp?", "Yes, WhatsApp is the fastest way to contact us."],
          ].map(([q, a]) => (
            <div
              key={q}
              className="mb-4 rounded-3xl border border-white/70 bg-[#F9FDFF] p-7 shadow-sm"
            >
              <h3 className="text-xl font-black text-[#12344D]">{q}</h3>
              <p className="mt-3 leading-7 text-[#5A7386]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#FF5A5F] p-10 text-white shadow-2xl md:p-16">
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
                href="tel:+905519354800"
                className="rounded-2xl bg-white px-8 py-5 text-center text-lg font-black text-[#FF5A5F]"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/905519354800"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#25D366] px-8 py-5 text-center text-lg font-black text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/70 bg-[#12344D] px-6 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-2xl font-black">
              <span className="text-[#8EDCF2]">Oludeniz</span> Doctor
            </div>

            <p className="mt-4 max-w-xl leading-7 text-white/70">
              24/7 private doctor service for tourists, hotels, villas and residents.
            </p>
          </div>

          <div>
            <h3 className="font-black">Areas</h3>
            <div className="mt-4 grid gap-2 text-white/70">
              <a href="/doctor-in-oludeniz">Doctor in Ölüdeniz</a>
              <a href="/doctor-in-fethiye">Doctor in Fethiye</a>
              <a href="/doctor-in-hisaronu">Doctor in Hisarönü</a>
              <span>Faralya</span>
              <span>Kabak</span>
            </div>
          </div>

          <div>
            <h3 className="font-black">Services</h3>
            <div className="mt-4 grid gap-2 text-white/70">
              <a href="/hotel-doctor-oludeniz">Hotel Doctor</a>
              <a href="/iv-therapy-oludeniz">IV Therapy</a>
              <a href="/food-poisoning-treatment">Food Poisoning</a>
              <a href="tel:+905519354800">+90 551 935 48 00</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/905519354800"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
          aria-label="WhatsApp"
        >
          <MessageCircle />
        </a>

        <a
          href="tel:+905519354800"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF5A5F] text-white shadow-2xl"
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
      <span className="font-black uppercase tracking-[0.3em] text-[#00B8D9]">
        {small}
      </span>
      <h2 className="mt-5 text-4xl font-black text-[#12344D] md:text-6xl">
        {title}
      </h2>
    </div>
  );
}