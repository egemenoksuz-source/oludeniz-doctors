import type { Metadata } from "next";
import {
  Ambulance,
  Building2,
  Clock,
  Droplets,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Doctor in Ölüdeniz | 24/7 Private Doctor & Hotel Visits",
  description:
    "English-speaking private doctor in Ölüdeniz. 24/7 hotel doctor visits, villa visits, emergency medical care, IV therapy and tourist medical support.",
  alternates: {
    canonical: "/doctor-in-oludeniz",
  },
};

const faqs = [
  [
    "Do you provide doctor visits in Ölüdeniz?",
    "Yes. Oludeniz Doctor provides private doctor visits to hotels, villas, apartments and holiday homes in Ölüdeniz and nearby areas.",
  ],
  [
    "Can tourists contact you in English?",
    "Yes. English-speaking medical support is available for tourists and international visitors.",
  ],
  [
    "Can a doctor visit my hotel?",
    "Yes. Hotel doctor visits are available in Ölüdeniz, Hisarönü, Ovacık, Faralya, Kabak and nearby Fethiye areas.",
  ],
  [
    "Do you provide IV therapy in Ölüdeniz?",
    "Yes. IV therapy and hydration support may be provided depending on the medical situation and doctor assessment.",
  ],
  [
    "Can I contact you on WhatsApp?",
    "Yes. WhatsApp is the fastest way to contact us, share your location and request a private doctor visit.",
  ],
];

export default function DoctorInOludenizPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": "https://oludenizdoctor.com/doctor-in-oludeniz/#business",
        name: "Oludeniz Doctor",
        url: "https://oludenizdoctor.com/doctor-in-oludeniz",
        telephone: "+905519354480",
        areaServed: ["Ölüdeniz", "Hisarönü", "Ovacık", "Faralya", "Kabak", "Fethiye"],
        medicalSpecialty: ["Emergency Medicine", "Travel Medicine", "Family Medicine"],
        openingHours: "Mo-Su 00:00-23:59",
        description:
          "24/7 private doctor service in Ölüdeniz for tourists, hotels, villas and holiday homes.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: {
            "@type": "Answer",
            text: a,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#07131F] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#07131F] via-[#0B1F33] to-[#12263A]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <a href="/" className="text-sm font-bold text-cyan-300">
            ← Back to Home
          </a>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200">
                <ShieldCheck className="mr-2 h-4 w-4" />
                24/7 Private Medical Assistance
              </div>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                Doctor in
                <br />
                <span className="text-cyan-300">Ölüdeniz</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Oludeniz Doctor provides fast, discreet and English-speaking
                private doctor service for tourists, hotels, villas and families
                staying in Ölüdeniz. If you need medical help during your holiday,
                you can contact us by phone or WhatsApp for hotel, villa or home visits.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+905519354480"
                  className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-8 py-5 text-lg font-black text-white"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Call Now
                </a>

                <a
                  href="https://wa.me/905519354480"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-green-500 px-8 py-5 text-lg font-black text-white"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <div className="rounded-[2rem] bg-[#0B1F33]/90 p-8">
                <div className="mb-5 flex gap-1 text-cyan-300">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <h2 className="text-3xl font-black">
                  Hotel, villa and home doctor visits in Ölüdeniz.
                </h2>

                <div className="mt-7 space-y-4">
                  {[
                    "English-speaking doctor",
                    "Hotel doctor visits",
                    "Villa and home visits",
                    "Emergency medical support",
                    "IV therapy support",
                    "Prescription assistance",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 font-black text-[#07131F]">
                        ✓
                      </span>
                      <span className="font-semibold text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1F33] px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            [Clock, "24/7", "Medical Support"],
            [ShieldCheck, "EN", "English Speaking"],
            [Building2, "Hotel", "Doctor Visits"],
            [Ambulance, "Fast", "Emergency Help"],
          ].map(([Icon, value, label]: any) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <Icon className="mx-auto mb-3 h-7 w-7 text-cyan-300" />
              <div className="text-4xl font-black">{value}</div>
              <div className="mt-2 text-sm font-semibold text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Title small="Private Doctor Service" title="Medical care at your hotel, villa or holiday home" />

          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              Finding a reliable doctor in Ölüdeniz can be stressful when you are
              on holiday. Many visitors stay in hotels, villas, apartments or
              holiday homes and may not know where to go when they suddenly feel unwell.
              Oludeniz Doctor is designed to make medical support easier, faster
              and more comfortable for tourists.
            </p>

            <p>
              Instead of trying to find a clinic on your own, you can contact us
              directly by phone or WhatsApp. We help visitors who need private
              doctor visits, hotel doctor service, emergency medical support,
              IV therapy, prescription assistance and help with common holiday
              health problems.
            </p>

            <p>
              Ölüdeniz is one of Turkey’s most popular holiday destinations.
              During the summer months, visitors may experience dehydration,
              food poisoning, sunstroke, ear infections after swimming, minor
              injuries, allergic reactions, fever or stomach problems. A fast
              private doctor visit can help you receive appropriate medical
              assessment without interrupting your holiday more than necessary.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F33] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title small="Common Holiday Problems" title="Medical issues tourists often face in Ölüdeniz" />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                "Food Poisoning",
                "Stomach pain, vomiting, diarrhea and dehydration can happen during travel. A doctor can assess your condition and recommend suitable care.",
              ],
              [
                "Dehydration & Heat Exhaustion",
                "Hot weather, sun exposure and alcohol can increase the risk of dehydration. IV therapy may be considered after medical evaluation.",
              ],
              [
                "Ear Infection After Swimming",
                "Swimming and sea water exposure can sometimes cause ear pain or infection, especially during summer holidays.",
              ],
              [
                "Fever & Flu Symptoms",
                "Fever, sore throat, cough and body aches can occur during travel. Medical assessment helps determine the right next step.",
              ],
              [
                "Minor Injuries",
                "Cuts, wounds, sprains and small injuries may need cleaning, dressing or follow-up care.",
              ],
              [
                "Prescription Support",
                "Tourists may need assistance with medication, prescriptions or medical documents during their stay.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border border-white/10 bg-[#12263A] p-8">
                <Stethoscope className="mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title small="Services" title="Doctor services available in Ölüdeniz" />

          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["Hotel Doctor Visits", "Private doctor visits to hotels and resorts in Ölüdeniz."],
              ["Villa & Home Visits", "Medical care at your villa, apartment or holiday home."],
              ["Emergency Doctor", "Fast support for urgent health concerns during your stay."],
              ["IV Therapy", "Hydration and recovery support for tourists."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border border-white/10 bg-[#12263A] p-7">
                <Home className="mb-5 h-7 w-7 text-cyan-300" />
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F33] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title small="Areas Covered" title="Private doctor service around Ölüdeniz" />

          <div className="grid gap-6 md:grid-cols-3">
            {["Ölüdeniz Beach", "Blue Lagoon", "Hisarönü", "Ovacık", "Faralya", "Kabak"].map((area) => (
              <div key={area} className="rounded-[2rem] border border-white/10 bg-[#12263A] p-8">
                <MapPin className="mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="text-2xl font-black">{area}</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Private doctor support is available for hotels, villas,
                  apartments and holiday stays in this area.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Title small="FAQ" title="Doctor in Ölüdeniz FAQ" />

          {faqs.map(([q, a]) => (
            <div key={q} className="mb-4 rounded-3xl border border-white/10 bg-[#12263A] p-7">
              <h3 className="text-xl font-black">{q}</h3>
              <p className="mt-3 leading-7 text-slate-300">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0B1F33] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title small="Related Pages" title="Explore more medical services" />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Hotel Doctor Ölüdeniz", "/hotel-doctor-oludeniz"],
              ["IV Therapy Ölüdeniz", "/iv-therapy-oludeniz"],
              ["Food Poisoning Treatment", "/food-poisoning-treatment"],
              ["Doctor in Fethiye", "/doctor-in-fethiye"],
              ["Doctor in Hisarönü", "/doctor-in-hisaronu"],
              ["Back to Home", "/"],
            ].map(([title, href]) => (
              <a key={href} href={href} className="rounded-[2rem] border border-white/10 bg-[#12263A] p-8 transition hover:-translate-y-2">
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 text-slate-300">Learn more →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-red-600 p-10 text-white md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="font-black uppercase tracking-[0.3em] text-white/80">
                Need help in Ölüdeniz?
              </span>
              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Contact a private doctor now.
              </h2>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <a href="tel:+905519354480" className="rounded-2xl bg-white px-8 py-5 text-center text-lg font-black text-red-600">
                Call Now
              </a>
              <a
                href="https://wa.me/905519354480"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-green-500 px-8 py-5 text-center text-lg font-black text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Title({ small, title }: { small: string; title: string }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <span className="font-black uppercase tracking-[0.3em] text-cyan-300">
        {small}
      </span>
      <h2 className="mt-5 text-4xl font-black md:text-6xl">{title}</h2>
    </div>
  );
}