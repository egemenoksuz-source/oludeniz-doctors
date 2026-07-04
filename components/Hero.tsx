import Image from "next/image";
import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function Hero() {
  const features = [
    "Hotel doctor visits",
    "Home & villa visits",
    "IV therapy support",
    "Food poisoning care",
    "Prescription assistance",
    "Travel insurance support",
  ];

  const stats = [
    { icon: Clock, value: "24/7", label: "Available" },
    { icon: MapPin, value: "6+", label: "Service Areas" },
    { icon: ShieldCheck, value: "EN", label: "Speaking" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pt-32">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Private doctor service in Oludeniz"
          fill
          priority
          quality={100}
          className="object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pb-24 md:min-h-[calc(100vh-8rem)] md:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-200 backdrop-blur">
            <ShieldCheck className="mr-2 h-4 w-4" />
            24/7 Private Doctor Service
          </div>

          <h1 className="font-[var(--font-poppins)] text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
            Private Doctor
            <br />
            for Tourists in
            <br />
            <span className="premium-gradient-text">Ölüdeniz</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Fast, discreet and English-speaking medical assistance for hotels,
            villas and holiday stays in Ölüdeniz, Hisarönü, Faralya and Kabak.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+905519354480"
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-300 px-8 py-5 text-lg font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              <Phone className="mr-3 h-5 w-5" />
              Call Now
            </a>

            <a
              href="https://wa.me/905519354480"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-5 text-lg font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
                >
                  <Icon className="mb-3 h-6 w-6 text-cyan-300" />
                  <div className="font-[var(--font-poppins)] text-2xl font-black">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="glass-card relative rounded-[2.5rem] p-5">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/75 p-8">
            <div className="mb-6 flex gap-1 text-cyan-300">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-5 w-5 fill-current" />
              ))}
            </div>

            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Emergency Medical Care
            </p>

            <h2 className="mt-3 font-[var(--font-poppins)] text-3xl font-black">
              Doctor visit to your hotel, villa or home.
            </h2>

            <div className="mt-7 space-y-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
                    ✓
                  </span>
                  <span className="font-semibold text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-cyan-300 p-6 text-slate-950">
              <p className="text-sm font-black uppercase tracking-[0.2em]">
                Direct Line
              </p>
              <a
                href="tel:+905519354480"
                className="mt-2 block font-[var(--font-poppins)] text-2xl font-black"
              >
                +90 551 935 44 80
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}