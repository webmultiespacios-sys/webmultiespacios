import { MetadataRoute } from "next";

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
    sitemap: "https://www.multiespacios.com.co/sitemap.xml",
    host: "https://www.multiespacios.com.co",
  };
}
