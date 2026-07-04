import {
  Ambulance,
  Building2,
  Home,
  Droplets,
  Bandage,
  FileText,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Ambulance,
      title: "Emergency Doctor",
      text: "Fast private medical assistance for urgent health concerns.",
    },
    {
      icon: Building2,
      title: "Hotel Doctor",
      text: "Doctor visits directly to hotels, resorts and holiday apartments.",
    },
    {
      icon: Home,
      title: "Home Visit Doctor",
      text: "Private medical care at your villa, home or accommodation.",
    },
    {
      icon: Droplets,
      title: "IV Therapy",
      text: "Hydration, vitamins and recovery support when you need it.",
    },
    {
      icon: Bandage,
      title: "Wound Care",
      text: "Professional wound dressing, aftercare and medical follow-up.",
    },
    {
      icon: FileText,
      title: "Prescription Support",
      text: "Assistance with prescriptions, medication and travel documents.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-slate-900/80">
      <div className="container-premium">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            Medical Services
          </span>

          <h2 className="mt-5 font-[var(--font-poppins)] text-4xl font-extrabold md:text-6xl">
            Premium Private Medical Care
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Fast, discreet and English-speaking medical support for tourists,
            hotels, villas and residents across Ölüdeniz and nearby areas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.07]"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="font-[var(--font-poppins)] text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {service.text}
                </p>

                <div className="mt-7 text-sm font-bold text-cyan-300">
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}