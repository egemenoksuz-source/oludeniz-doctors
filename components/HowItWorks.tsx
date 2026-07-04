export default function HowItWorks() {
  const steps = [
    ["1", "Contact Us", "Call or send a WhatsApp message."],
    ["2", "Share Your Location", "Tell us your hotel, villa or apartment location."],
    ["3", "Doctor Arrives", "A private doctor visits you as soon as possible."],
  ];

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Get Medical Help in 3 Simple Steps
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Fast and simple medical assistance for tourists, hotels and local
            residents across Ölüdeniz and nearby areas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step[0]}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-2xl font-bold text-slate-950">
                {step[0]}
              </div>

              <h3 className="mb-3 text-2xl font-bold">{step[1]}</h3>

              <p className="text-slate-300">{step[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}