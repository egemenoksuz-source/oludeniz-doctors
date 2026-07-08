import type { Metadata } from "next";
import {
  Award,
  Clock,
  Globe2,
  HeartPulse,
  Home,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Oludeniz Doctor | Private Doctor for Tourists",
  description:
    "Learn about Oludeniz Doctor, a 24/7 English-speaking private doctor service for tourists, hotels, villas and holiday homes in Ölüdeniz and Fethiye.",
  alternates: {
    canonical: "/about-doctor",
  },
};

export default function AboutDoctorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://oludenizdoctor.com/about-doctor/#medicalbusiness",
        name: "Oludeniz Doctor",
        url: "https://oludenizdoctor.com/about-doctor",
        telephone: "+905519354800",
        description:
          "24/7 English-speaking private doctor service for tourists, hotels, villas and holiday homes in Ölüdeniz and Fethiye.",
        areaServed: [
          "Ölüdeniz",
          "Fethiye",
          "Hisarönü",
          "Ovacık",
          "Faralya",
          "Kabak",
          "Kayaköy",
        ],
        medicalSpecialty: [
          "Travel Medicine",
          "Emergency Medicine",
          "Family Medicine",
        ],
        openingHours: "Mo-Su 00:00-23:59",
      },
      {
        "@type": "WebPage",
        "@id": "https://oludenizdoctor.com/about-doctor/#webpage",
        url: "https://oludenizdoctor.com/about-doctor",
        name: "About Oludeniz Doctor",
        about: {
          "@id": "https://oludenizdoctor.com/about-doctor/#medicalbusiness",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen text-[#12344D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,184,217,0.28),transparent_35%),linear-gradient(135deg,#8EDCF2_0%,#AEEAF8_45%,#D8F7FF_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <a href="/" className="text-sm font-black text-[#00B8D9]">
            ← Back to Home
          </a>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-[#00B8D9]/25 bg-white/60 px-4 py-2 text-sm font-black text-[#00B8D9] shadow-sm backdrop-blur-xl">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Trusted Private Medical Support
              </div>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                About
                <br />
                <span className="text-[#00B8D9]">Oludeniz Doctor</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5A7386] md:text-xl">
                Oludeniz Doctor provides private, English-speaking medical
                support for tourists, hotels, villas and holiday homes in
                Ölüdeniz, Fethiye and nearby areas.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+905519354800"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#FF5A5F] px-8 py-5 text-lg font-black text-white shadow-xl transition hover:scale-105"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Call Now
                </a>

                <a
                  href="https://wa.me/905519354800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-black text-white shadow-xl transition hover:scale-105"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/70 bg-white/50 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[2rem] border border-white/70 bg-[#F9FDFF] p-8 shadow-lg">
                <Stethoscope className="mb-6 h-12 w-12 text-[#00B8D9]" />
                <h2 className="text-3xl font-black">
                  Medical care designed for travellers.
                </h2>
                <p className="mt-5 leading-8 text-[#5A7386]">
                  The service focuses on fast communication, clear guidance and
                  private doctor visits to hotels, villas, apartments and holiday
                  homes. This helps visitors receive medical support without
                  unnecessary confusion during their holiday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/70 bg-[#D8F7FF]/80 px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            [Clock, "24/7", "Availability"],
            [Languages, "EN", "English Speaking"],
            [Home, "Hotel", "Villa Visits"],
            [MapPin, "Fethiye", "Service Area"],
          ].map(([Icon, value, label]: any) => (
            <div
              key={label}
              className="rounded-3xl border border-white/70 bg-[#F9FDFF] p-6 text-center shadow-sm"
            >
              <Icon className="mx-auto mb-3 h-7 w-7 text-[#00B8D9]" />
              <div className="text-4xl font-black">{value}</div>
              <div className="mt-2 text-sm font-semibold text-[#5A7386]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Title small="Medical Philosophy" title="Private care with clarity and trust" />

          <div className="space-y-6 text-lg leading-8 text-[#5A7386]">
            <p>
              When visitors become unwell during a holiday, they often need more
              than a medical appointment. They need clear communication,
              confidence, fast response and practical support. Oludeniz Doctor
              was created to make private medical assistance easier for
              international visitors staying in Ölüdeniz and Fethiye.
            </p>

            <p>
              The service is especially useful for tourists staying in hotels,
              villas, apartments and holiday homes. Instead of trying to find the
              right clinic or hospital alone, visitors can contact the service by
              phone or WhatsApp and request medical guidance or a private doctor
              visit where appropriate.
            </p>

            <p>
              Common holiday health concerns include food poisoning, stomach
              problems, dehydration, fever, ear pain after swimming, sun exposure,
              minor wounds, allergic reactions and prescription needs. The goal is
              to provide professional medical support while helping visitors feel
              informed, respected and safe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#BFEAF5]/70 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title small="Why It Matters" title="Trust signals for travellers" />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                Award,
                "Professional Support",
                "Private medical service focused on tourist care, hotel visits and clear communication.",
              ],
              [
                Globe2,
                "Tourist Friendly",
                "English-speaking support for international visitors staying in Ölüdeniz and Fethiye.",
              ],
              [
                HeartPulse,
                "Fast Response",
                "Phone and WhatsApp contact options help visitors reach medical support quickly.",
              ],
            ].map(([Icon, title, text]: any) => (
              <div
                key={title}
                className="rounded-[2rem] border border-white/70 bg-[#F9FDFF] p-8 shadow-lg"
              >
                <Icon className="mb-6 h-9 w-9 text-[#00B8D9]" />
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-[#5A7386]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Title small="Service Areas" title="Where medical support is available" />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Ölüdeniz",
              "Fethiye",
              "Hisarönü",
              "Ovacık",
              "Faralya",
              "Kabak",
              "Kayaköy",
              "Hotels",
              "Private Villas",
            ].map((area) => (
              <div
                key={area}
                className="rounded-[2rem] border border-white/70 bg-[#F9FDFF] p-7 shadow-lg"
              >
                <MapPin className="mb-5 h-7 w-7 text-[#00B8D9]" />
                <h3 className="text-xl font-black">{area}</h3>
                <p className="mt-3 leading-7 text-[#5A7386]">
                  Private medical support for visitors staying in and around this
                  area.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#D8F7FF]/80 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Title small="FAQ" title="About Oludeniz Doctor FAQ" />

          {[
            [
              "Is Oludeniz Doctor for tourists?",
              "Yes. The service is designed for tourists, hotels, villas and visitors who need private medical support in Ölüdeniz and nearby areas.",
            ],
            [
              "Do you provide English-speaking support?",
              "Yes. English-speaking medical support is available for international visitors.",
            ],
            [
              "Can I request a hotel or villa visit?",
              "Yes. Doctor visits may be arranged for hotels, villas, apartments and holiday homes depending on the situation.",
            ],
            [
              "What is the fastest way to contact you?",
              "WhatsApp and phone calls are the fastest ways to contact Oludeniz Doctor.",
            ],
          ].map(([q, a]) => (
            <div
              key={q}
              className="mb-4 rounded-3xl border border-white/70 bg-[#F9FDFF] p-7 shadow-sm"
            >
              <h3 className="text-xl font-black">{q}</h3>
              <p className="mt-3 leading-7 text-[#5A7386]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#FF5A5F] p-10 text-white shadow-2xl md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="font-black uppercase tracking-[0.3em] text-white/80">
                Need medical help?
              </span>
              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Contact Oludeniz Doctor.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Call or send a WhatsApp message for private doctor service in
                Ölüdeniz and Fethiye.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:items-end">
              <a
                href="tel:+905519354800"
                className="rounded-2xl bg-white px-8 py-5 text-center text-lg font-black text-[#FF5A5F]"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/905519354800"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#25D366] px-8 py-5 text-center text-lg font-black text-white"
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
      <span className="font-black uppercase tracking-[0.3em] text-[#00B8D9]">
        {small}
      </span>
      <h2 className="mt-5 text-4xl font-black text-[#12344D] md:text-6xl">
        {title}
      </h2>
    </div>
  );
}