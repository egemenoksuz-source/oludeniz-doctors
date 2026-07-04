export default function FAQ() {
  const faqs = [
    {
      q: "Do you visit hotels in Ölüdeniz?",
      a: "Yes. We provide private doctor visits to hotels, villas, apartments and holiday homes in Ölüdeniz and nearby areas.",
    },
    {
      q: "Can I contact you on WhatsApp?",
      a: "Yes. You can contact us directly on WhatsApp for fast medical assistance and location sharing.",
    },
    {
      q: "Do you speak English?",
      a: "Yes. We provide English-speaking medical support for tourists and international visitors.",
    },
    {
      q: "Which areas do you cover?",
      a: "We cover Ölüdeniz, Hisarönü, Faralya, Kabak, Ovacık, Kayaköy and nearby Fethiye areas.",
    },
  ];

  return (
    <section className="section-padding bg-slate-950">
      <div className="container-premium">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            FAQ
          </span>
          <h2 className="mt-5 font-[var(--font-poppins)] text-4xl font-extrabold md:text-6xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
            >
              <h3 className="font-[var(--font-poppins)] text-xl font-bold">
                {item.q}
              </h3>
              <p className="mt-3 leading-7 text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}