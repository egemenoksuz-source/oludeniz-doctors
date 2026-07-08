export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://oludenizdoctor.com/#organization",
        name: "Oludeniz Doctor",
        url: "https://oludenizdoctor.com",
        logo: "https://oludenizdoctor.com/icon.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+905519354800",
          contactType: "customer service",
          availableLanguage: ["English", "Turkish"],
        },
      },
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": "https://oludenizdoctor.com/#business",
        name: "Oludeniz Doctor",
        url: "https://oludenizdoctor.com",
        telephone: "+905519354800",
        image: "https://oludenizdoctor.com/images/hero.jpg",
        priceRange: "$$",
        description:
          "24/7 English-speaking private doctor service in Ölüdeniz, Fethiye, Hisarönü, Faralya and Kabak. Hotel visits, villa visits, emergency care and IV therapy.",
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
      },
      {
        "@type": "WebSite",
        "@id": "https://oludenizdoctor.com/#website",
        url: "https://oludenizdoctor.com",
        name: "Oludeniz Doctor",
        publisher: {
          "@id": "https://oludenizdoctor.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://oludenizdoctor.com/#webpage",
        url: "https://oludenizdoctor.com",
        name: "Oludeniz Doctor | 24/7 Private Doctor in Ölüdeniz",
        isPartOf: {
          "@id": "https://oludenizdoctor.com/#website",
        },
        about: {
          "@id": "https://oludenizdoctor.com/#business",
        },
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