import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/galeria/:path*", destination: "/stands", permanent: true },
      { source: "/tipos-y-tamanos/:path*", destination: "/carpas", permanent: true },
      { source: "/carpas-en-alquiler/:path*", destination: "/carpas", permanent: true },
      { source: "/carpas-2/:path*", destination: "/carpas", permanent: true },
      { source: "/carpas-especiales/:path*", destination: "/carpas", permanent: true },
      { source: "/carpas-tipo-dos-aguas/:path*", destination: "/carpas", permanent: true },
      { source: "/tuneles-con-carpa/:path*", destination: "/carpas", permanent: true },
      { source: "/jambas/:path*", destination: "/carpas", permanent: true },
      { source: "/usos-y-aplicaciones/:path*", destination: "/carpas", permanent: true },
      { source: "/eventos/:path*", destination: "/produccion", permanent: true },
      { source: "/mobiliario-y-accesorios/:path*", destination: "/mobiliario", permanent: true },
      { source: "/sillas/:path*", destination: "/mobiliario/sillas", permanent: true },
      { source: "/mesas/:path*", destination: "/mobiliario", permanent: true },
      { source: "/salas-lounge/:path*", destination: "/mobiliario", permanent: true },
      { source: "/pisos/:path*", destination: "/mobiliario", permanent: true },
      { source: "/exhibicion/:path*", destination: "/mobiliario", permanent: true },
      { source: "/decoracion-para-eventos/:path*", destination: "/produccion", permanent: true },
      { source: "/iluminacion-para-eventos/:path*", destination: "/produccion", permanent: true },
      { source: "/ventiladores-industriales-para-alquiler/:path*", destination: "/mobiliario", permanent: true },
      { source: "/scaffold/:path*", destination: "/estructuras", permanent: true },
      { source: "/octanorm/:path*", destination: "/stands", permanent: true },
      { source: "/porsa/:path*", destination: "/stands", permanent: true },
      { source: "/sistema-keder/:path*", destination: "/stands", permanent: true },
      { source: "/sistema-zero/:path*", destination: "/stands", permanent: true },
      { source: "/trimalla/:path*", destination: "/stands", permanent: true },
      { source: "/paneleria/:path*", destination: "/stands", permanent: true },
      { source: "/truss/:path*", destination: "/estructuras", permanent: true },
      { source: "/diseno-de-stands/:path*", destination: "/stands", permanent: true },
      { source: "/tobogan-arcoiris/:path*", destination: "/atracciones", permanent: true },
      { source: "/contactenos/:path*", destination: "/", permanent: true },
    ];
  },
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.multiespacios.com.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
