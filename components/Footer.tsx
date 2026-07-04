export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-[var(--font-poppins)] text-2xl font-extrabold">
            <span className="text-cyan-300">Oludeniz</span> Doctor
          </div>
          <p className="mt-4 max-w-xl leading-7 text-slate-400">
            24/7 private doctor service for tourists, hotels, villas and
            residents in Ölüdeniz, Hisarönü, Faralya, Kabak and nearby areas.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Service Areas</h3>
          <div className="mt-4 grid gap-2 text-slate-400">
            <span>Ölüdeniz</span>
            <span>Hisarönü</span>
            <span>Faralya</span>
            <span>Kabak</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Contact</h3>
          <div className="mt-4 grid gap-2 text-slate-400">
            <a href="tel:+905519354480">+90 551 935 44 80</a>
            <a href="https://wa.me/905519354480" target="_blank">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        © 2026 Oludeniz Doctor. All rights reserved.
      </div>
    </footer>
  );
}