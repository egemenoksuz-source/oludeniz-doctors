export default function WhyChooseUs() {
  const items = [
    "English-speaking medical support",
    "Hotel, villa and home visits",
    "Fast response in tourist areas",
    "24/7 WhatsApp and phone contact",
    "Support for travel insurance documents",
    "Private and discreet medical care",
  ];

  return (
    <section className="bg-slate-900 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Trusted Private Doctor Service for Tourists and Hotels
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Oludeniz Doctor provides fast, professional and English-speaking
            medical assistance for visitors staying in Ölüdeniz, Hisarönü,
            Faralya, Kabak and nearby areas.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-slate-950">
                  ✓
                </span>
                <p className="font-medium text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}