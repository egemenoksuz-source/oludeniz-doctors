import { Clock, Languages, MapPinned, ShieldCheck, Star } from "lucide-react";

export default function TrustBar() {
  const stats = [
    { icon: Star, value: "5.0", label: "Trusted Service" },
    { icon: Clock, value: "24/7", label: "Medical Support" },
    { icon: Languages, value: "EN", label: "English Speaking" },
    { icon: MapPinned, value: "6+", label: "Service Areas" },
  ];

  return (
    <section className="relative border-y border-white/10 bg-slate-950 px-6 py-12">
      <div className="absolute inset-0 bg-cyan-300/[0.03]" />

      <div className="relative mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>

              <div className="font-[var(--font-poppins)] text-4xl font-black text-white">
                {item.value}
              </div>

              <div className="mt-2 text-sm font-medium text-slate-400">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}