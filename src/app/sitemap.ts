import type { MetadataRoute } from "next";

const baseUrl = "https://jado.or.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/founder`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/services/altif`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services/mirai`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services/training`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services/seminar`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.3 },
  ];
}
