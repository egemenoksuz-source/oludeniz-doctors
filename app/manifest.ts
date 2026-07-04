import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Oludeniz Doctor",
    short_name: "Oludeniz Doctor",
    description:
      "24/7 private doctor service in Ölüdeniz, Hisarönü, Faralya and Kabak.",
    start_url: "/",
    display: "standalone",
    background_color: "#07131F",
    theme_color: "#07131F",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}