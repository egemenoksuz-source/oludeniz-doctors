import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oludenizdoctor.com";

  const pages = [
    "",
    "/doctor-in-oludeniz",
    "/doctor-in-fethiye",
    "/doctor-in-hisaronu",
    "/hotel-doctor-oludeniz",
    "/iv-therapy-oludeniz",
    "/food-poisoning-treatment",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}