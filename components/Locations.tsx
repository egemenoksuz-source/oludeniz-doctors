import { ArrowRight, MapPin } from "lucide-react";

export default function Locations() {
  const locations = [
    {
      name: "Ölüdeniz",
      text: "Private doctor visits for hotels, resorts, villas and holiday homes near the Blue Lagoon.",
    },
    {
      name: "Hisarönü",
      text: "Fast medical support for tourists, nightlife areas, hotels and apartments.",
    },
    {
      name: "Faralya",
      text: "Doctor visits for boutique hotels, villas and remote holiday stays.",
    },
    {
      name: "Kabak",
      text: "Medical assistance for Kabak Bay, camps, retreats and beach stays.",
    },
    {
      name: "Ovacık",
      text: "Home and hotel doctor visits across Ovacık and nearby areas.",
    },
    {
      name: "Kayaköy",
      text: "Private medical care around Kayaköy, villas and rural stays.",
    },
  ];

  return (
    <section id="locations" className="section-padding bg-slate-950">
      <div className="container-premium">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
            Service Areas
          </span>

          <h2 className="mt-5 font-[var(--font-poppins)] text-4xl font-black md:text-6xl">
            Doctor Service Across Fethiye’s Holiday Areas
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We provide private medical assistance to the most popular tourism
            areas around Ölüdeniz, Fethiye and the surrounding coastline.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {locations.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />

              <div className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
                  <MapPin className="h-7 w-7" />
                </div>

                <h3 className="font-[var(--font-poppins)] text-2xl font-black">
                  Doctor in {item.name}
                </h3>

                <p className="mt-4 min-h-24 leading-7 text-slate-300">
                  {item.text}
                </p>

                <div className="mt-8 flex items-center gap-2 font-black text-cyan-300">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}