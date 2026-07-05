import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oludenizdoctor.com"),
  title: {
    default: "Oludeniz Doctor | 24/7 Private Doctor in Ölüdeniz",
    template: "%s | Oludeniz Doctor",
  },
  description:
    "Oludeniz Doctor provides 24/7 English-speaking private doctor service in Ölüdeniz, Fethiye, Hisarönü, Faralya and Kabak. Hotel visits, villa visits, emergency care and IV therapy.",
  keywords: [
    "Oludeniz Doctor",
    "doctor in oludeniz",
    "private doctor oludeniz",
    "hotel doctor oludeniz",
    "emergency doctor oludeniz",
    "doctor in fethiye",
    "english speaking doctor fethiye",
    "iv therapy oludeniz",
    "food poisoning doctor oludeniz",
  ],
  authors: [{ name: "Oludeniz Doctor" }],
  creator: "Oludeniz Doctor",
  publisher: "Oludeniz Doctor",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Oludeniz Doctor | 24/7 Private Doctor in Ölüdeniz",
    description:
      "English-speaking private doctor service for tourists, hotels and villas in Ölüdeniz and Fethiye.",
    url: "https://oludenizdoctor.com",
    siteName: "Oludeniz Doctor",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Oludeniz Doctor private doctor service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oludeniz Doctor | Private Doctor in Ölüdeniz",
    description:
      "24/7 private doctor service for tourists, hotels and villas in Ölüdeniz and Fethiye.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#00B8D9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}