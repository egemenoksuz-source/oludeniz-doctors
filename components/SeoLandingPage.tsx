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

type FAQ = {
  question: string;
  answer: string;
};

type LinkItem = {
  title: string;
  href: string;
};

type SeoLandingPageProps = {
  title: string;
  highlightedTitle: string;
  description: string;
  badge?: string;
  areaName: string;
  services?: LinkItem[];
  faqs?: FAQ[];
  relatedPages?: LinkItem[];
};

export default function SeoLandingPage({
  title,
  highlightedTitle,
  description,
  badge = "24/7 Private Medical Assistance",
  areaName,
  services = [
    {
      title: "Hotel Doctor Visits",
      href: "/hotel-doctor-oludeniz",
    },
    {
      title: "IV Therapy",
      href: "/iv-therapy-oludeniz",
    },
    {
      title: "Food Poisoning Treatment",
      href: "/food-poisoning-treatment",
    },
  ],
  faqs = [
    {
      question: `Do you provide doctor visits in ${areaName}?`,
      answer: `Yes. We provide private doctor visits to hotels, villas, apartments and holiday homes in ${areaName}.`,
    },
    {
      question: "Can tourists contact you in English?",
      answer:
        "Yes. English-speaking medical support is available for tourists and international visitors.",
    },
    {
      question: "Can I contact you on WhatsApp?",
      answer:
        "Yes. WhatsApp is the fastest way to contact us and share your location.",
    },
  ],
  relatedPages = [
    { title: "Doctor in Ölüdeniz", href: "/doctor-in-oludeniz" },
    { title: "Doctor in Fethiye", href: "/doctor-in-fethiye" },
    { title: "Doctor in Hisarönü", href: "/doctor-in-hisaronu" },
  ],
}: SeoLandingPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        name: "Oludeniz Doctor",
        url: "https://oludenizdoctor.com",
        telephone: "+905519354800",
        areaServed: areaName,
        medicalSpecialty: [
          "Emergency Medicine",
          "Travel Medicine",
          "Family Medicine",
        ],
        openingHours: "Mo-Su 00:00-23:59",
        description,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
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
                {badge}
              </div>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                {title}
                <br />
                <span className="text-cyan-300">{highlightedTitle}</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                {description}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+905519354800"
                  className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-8 py-5 text-lg font-black text-white"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Call Now
                </a>

                <a
                  href="https://wa.me/905519354800"
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
                  Hotel, villa and home doctor visits.
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
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl bg-white/5 p-4"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 font-black text-[#07131F]">
                        ✓
                      </span>
                      <span className="font-semibold text-slate-200">
                        {item}
                      </span>
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
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <Icon className="mx-auto mb-3 h-7 w-7 text-cyan-300" />
              <div className="text-4xl font-black">{value}</div>
              <div className="mt-2 text-sm font-semibold text-slate-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Title
            small="Private Doctor Service"
            title={`Medical care in ${areaName}`}
          />

          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              Finding a reliable doctor while travelling can be stressful,
              especially if you are staying in a hotel, villa, apartment or
              holiday home and do not know the local healthcare system.
              Oludeniz Doctor helps visitors receive private medical support in
              a faster and more comfortable way.
            </p>

            <p>
              You can contact us directly by phone or WhatsApp for hotel doctor
              visits, villa visits, emergency medical assistance, IV therapy,
              prescription support and care for common holiday health problems.
            </p>

            <p>
              During the summer season, tourists may experience dehydration,
              food poisoning, sun exposure, fever, ear pain after swimming,
              minor injuries, allergic reactions or stomach problems. A private
              doctor visit can help you receive medical assessment without
              unnecessary travel or confusion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F33] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title
            small="Common Holiday Problems"
            title="Medical issues tourists often face"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                "Food Poisoning",
                "Stomach pain, vomiting, diarrhea and dehydration can happen during travel.",
              ],
              [
                "Dehydration & Heat Exhaustion",
                "Hot weather, sun exposure and alcohol can increase dehydration risk.",
              ],
              [
                "Ear Infection After Swimming",
                "Swimming and sea water exposure can sometimes cause ear pain or infection.",
              ],
              [
                "Fever & Flu Symptoms",
                "Fever, sore throat, cough and body aches may need medical assessment.",
              ],
              [
                "Minor Injuries",
                "Cuts, wounds, sprains and small injuries may need cleaning or dressing.",
              ],
              [
                "Prescription Support",
                "Tourists may need help with medication, prescriptions or medical documents.",
              ],
            ].map(([cardTitle, text]) => (
              <div
                key={cardTitle}
                className="rounded-[2rem] border border-white/10 bg-[#12263A] p-8"
              >
                <Stethoscope className="mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="text-2xl font-black">{cardTitle}</h3>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title small="Services" title="Private medical services" />

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="rounded-[2rem] border border-white/10 bg-[#12263A] p-8 transition hover:-translate-y-2"
              >
                <Droplets className="mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-4 text-slate-300">Learn more →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F33] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title small="Related Pages" title="Explore more pages" />

          <div className="grid gap-6 md:grid-cols-3">
            {relatedPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="rounded-[2rem] border border-white/10 bg-[#12263A] p-8 transition hover:-translate-y-2"
              >
                <MapPin className="mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="text-2xl font-black">{page.title}</h3>
                <p className="mt-4 text-slate-300">Open page →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Title small="FAQ" title={`${areaName} FAQ`} />

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="mb-4 rounded-3xl border border-white/10 bg-[#12263A] p-7"
            >
              <h3 className="text-xl font-black">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-red-600 p-10 text-white md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="font-black uppercase tracking-[0.3em] text-white/80">
                Need help now?
              </span>
              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Contact a private doctor.
              </h2>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <a
                href="tel:+905519354800"
                className="rounded-2xl bg-white px-8 py-5 text-center text-lg font-black text-red-600"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/905519354800"
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