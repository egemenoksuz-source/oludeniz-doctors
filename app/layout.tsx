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
    "24/7 private doctor service in Ölüdeniz, Hisarönü, Faralya and Kabak. Hotel visits, villa visits, emergency medical care and IV therapy.",
  keywords: [
    "doctor in oludeniz",
    "private doctor oludeniz",
    "hotel doctor oludeniz",
    "emergency doctor oludeniz",
    "doctor hisaronu",
    "doctor faralya",
    "doctor kabak",
    "iv therapy oludeniz",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Oludeniz Doctor | 24/7 Private Doctor in Ölüdeniz",
    description:
      "English-speaking private doctor service for hotels, villas and tourists in Ölüdeniz, Hisarönü, Faralya and Kabak.",
    url: "https://oludenizdoctor.com",
    siteName: "Oludeniz Doctor",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oludeniz Doctor | Private Doctor in Ölüdeniz",
    description:
      "24/7 private doctor service for tourists, hotels and villas in Ölüdeniz and nearby areas.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#07131F",
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