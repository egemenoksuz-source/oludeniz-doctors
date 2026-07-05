export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": "https://oludenizdoctor.com/#business",
        name: "Oludeniz Doctor",
        url: "https://oludenizdoctor.com",
        telephone: "+905519354480",
        priceRange: "$$",
        image: "https://oludenizdoctor.com/images/hero.jpg",
        description:
          "24/7 private doctor service in Ölüdeniz, Hisarönü, Faralya and Kabak. Hotel visits, villa visits, emergency medical care and IV therapy.",
        areaServed: [
          "Ölüdeniz",
          "Hisarönü",
          "Faralya",
          "Kabak",
          "Ovacık",
          "Kayaköy",
          "Fethiye",
        ],
        medicalSpecialty: [
          "Emergency Medicine",
          "Family Medicine",
          "Travel Medicine",
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        sameAs: ["https://oludenizdoctor.com"],
      },
      {
        "@type": "WebSite",
        "@id": "https://oludenizdoctor.com/#website",
        url: "https://oludenizdoctor.com",
        name: "Oludeniz Doctor",
        publisher: {
          "@id": "https://oludenizdoctor.com/#business",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://oludenizdoctor.com/#webpage",
        url: "https://oludenizdoctor.com",
        name: "Oludeniz Doctor | Private Doctor in Ölüdeniz",
        isPartOf: {
          "@id": "https://oludenizdoctor.com/#website",
        },
        about: {
          "@id": "https://oludenizdoctor.com/#business",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://oludenizdoctor.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you visit hotels in Ölüdeniz?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Oludeniz Doctor provides private doctor visits to hotels, villas, apartments and holiday homes in Ölüdeniz and nearby areas.",
            },
          },
          {
            "@type": "Question",
            name: "Do you speak English?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. English-speaking medical support is available for tourists and international visitors.",
            },
          },
          {
            "@type": "Question",
            name: "Which areas do you cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We cover Ölüdeniz, Hisarönü, Faralya, Kabak, Ovacık, Kayaköy and nearby Fethiye areas.",
            },
          },
          {
            "@type": "Question",
            name: "Can I contact you on WhatsApp?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. WhatsApp is available for fast communication and location sharing.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}