import { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/config/site";

/**
 * Archivo robots.txt generado automáticamente por Next.js.
 * Se sirve en /robots.txt al hacer build.
 * Idéntico a la configuración del WordPress anterior.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
