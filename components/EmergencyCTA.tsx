import { MessageCircle, Phone } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300 p-10 text-slate-950 md:p-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.3em]">
              Need help now?
            </span>
            <h2 className="mt-4 font-[var(--font-poppins)] text-4xl font-black md:text-6xl">
              Need a Doctor Right Now?
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-medium text-slate-800">
              Call or send a WhatsApp message for fast private medical support
              in Ölüdeniz, Hisarönü, Faralya and Kabak.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <a
              href="tel:+905519354480"
              className="flex w-full items-center justify-center rounded-2xl bg-slate-950 px-8 py-5 text-lg font-black text-white transition hover:bg-slate-800 md:w-auto"
            >
              <Phone className="mr-3 h-5 w-5" />
              Call Now
            </a>

            <a
              href="https://wa.me/905519354480"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-2xl border border-slate-950/20 bg-white/40 px-8 py-5 text-lg font-black text-slate-950 transition hover:bg-white/60 md:w-auto"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}