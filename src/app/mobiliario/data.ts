import { IconType } from "react-icons";
import { FiGrid, FiLayout, FiMaximize, FiWind, FiLayers, FiUsers } from "react-icons/fi";
import { FaChair, FaCouch } from "react-icons/fa";
import { MdOutlineTableBar } from "react-icons/md";

export interface Category {
  label: string;
  icon: IconType;
}

export interface Stand {
  title: string;
  category: string;
  dimensions: string;
  image: string | string[];
  description: string;
}

export const categories: Category[] = [
  { label: "Todos", icon: FiGrid },
  { label: "Sillas", icon: FaChair },
  { label: "Mesas", icon: MdOutlineTableBar },
  { label: "Salas Lounge", icon: FaCouch },
  { label: "Exhibición", icon: FiLayout },
  { label: "Pisos", icon: FiMaximize },
  { label: "Ventiladores", icon: FiWind },
  { label: "Separadores", icon: FiLayers },
  { label: "Camerinos", icon: FiUsers },
];

export const stands: Stand[] = [
  {
    title: "Sillas para Eventos",
    category: "Sillas",
    dimensions: "Múltiples referencias",
    image: "/imagenes/3_Mobiliario/Sillas/Cross-Back/silla-cross-back.webp",
    description: "Amplio catálogo de sillas para todo tipo de evento: Italiana, Eclipse, Eames, Tiffani, Director, plegables, plásticas, tipo bar y más. Selecciona la que se adapte a tu montaje.",
  },
  // 2. MESAS
  {
    title: "Mesas para Eventos",
    category: "Mesas",
    dimensions: "Múltiples referencias",
    image: [
      "/imagenes/3_Mobiliario/Mesas/mesa-alta-counter.webp",
      "/imagenes/3_Mobiliario/Mesas/mesa-bar-acrilico.webp",
      "/imagenes/3_Mobiliario/Mesas/mesa-bar-vestido.webp",
      "/imagenes/3_Mobiliario/Mesas/mesa-con-licra-1.webp",
      "/imagenes/3_Mobiliario/Mesas/mesa-expandex.webp",
      "/imagenes/3_Mobiliario/Mesas/mesa-metalica.webp",
      "/imagenes/3_Mobiliario/Mesas/mesa-plastica.webp",
      "/imagenes/3_Mobiliario/Mesas/mesa-redonda.webp",
      "/imagenes/3_Mobiliario/Mesas/mesa-tapa-madera.webp",
      "/imagenes/3_Mobiliario/Mesas/mesa-tipo-bar.webp",
      "/imagenes/3_Mobiliario/Mesas/mesa-y-meson.webp",
      "/imagenes/3_Mobiliario/Mesas/meson-plastico.webp",
    ],
    description: "Mesas altas tipo counter, cocteleras, de bar, redondas, plásticas, con tapa de madera y mesones de gran longitud para cualquier configuración de evento.",
  },
  // 3. SALAS LOUNGE
  {
    title: "Salas Lounge",
    category: "Salas Lounge",
    dimensions: "Personalizable",
    image: [
      "/imagenes/3_Mobiliario/Salas Lounge/barra-circular.webp",
      "/imagenes/3_Mobiliario/Salas Lounge/barra-curva.webp",
      "/imagenes/3_Mobiliario/Salas Lounge/poltrona-doble.webp",
      "/imagenes/3_Mobiliario/Salas Lounge/poltona-doble.webp",
      "/imagenes/3_Mobiliario/Salas Lounge/puff-cuadrado.webp",
      "/imagenes/3_Mobiliario/Salas Lounge/puff-doble.webp",
      "/imagenes/3_Mobiliario/Salas Lounge/puff-redondo.webp",
      "/imagenes/3_Mobiliario/Salas Lounge/sofa-doble.webp",
      "/imagenes/3_Mobiliario/Salas Lounge/sofa-sencillo.webp",
    ],
    description: "Sofás, poltronas, puffs y barras circulares y curvas para crear ambientes lounge elegantes en eventos corporativos, lanzamientos de marca y ferias.",
  },
  // 4. EXHIBICIÓN
  {
    title: "Elementos de Exhibición",
    category: "Exhibición",
    dimensions: "Personalizable",
    image: [
      "/imagenes/3_Mobiliario/Exhibicion/alquiler-de-atriles-bogota-e1739771729729.webp",
      "/imagenes/3_Mobiliario/Exhibicion/backing.webp",
      "/imagenes/3_Mobiliario/Exhibicion/estanteria-con-entrepano-piso-laminado.webp",
      "/imagenes/3_Mobiliario/Exhibicion/hablador3-copia.webp",
      "/imagenes/3_Mobiliario/Exhibicion/porta-pendo-grande.webp",
      "/imagenes/3_Mobiliario/Exhibicion/vitrina-1200x796.webp",
    ],
    description: "Atriles, backings para prensa, estanterías, habladores acrílicos, portapendones y vitrinas de vidrio para la presentación profesional de tu marca y productos.",
  },
  // 5. PISOS
  {
    title: "Pisos y Alfombras",
    category: "Pisos",
    dimensions: "Personalizable",
    image: [],
    description: "Variedad de acabados para pisos de eventos: tapetes modulares, alfombras de alto tráfico, pisos vinílicos y acabados personalizados para cualquier espacio.",
  },
  // 6. VENTILADORES
  {
    title: "Ventiladores Industriales",
    category: "Ventiladores",
    dimensions: "Gran alcance",
    image: [
      "/imagenes/3_Mobiliario/Ventiladores/ventiladores-industriales.webp",
      "/imagenes/3_Mobiliario/Ventiladores/ventiladores-industriales-2.webp",
    ],
    description: "Ventiladores de pedestal y de pared de alto rendimiento para refrescar carpas, pabellones y espacios de gran afluencia de público.",
  },
  // 7. SEPARADORES
  {
    title: "Separadores y Catenarias",
    category: "Separadores",
    dimensions: "Estándar",
    image: [],
    description: "Postes con cinta retráctil o cordón de gala para el control ordenado de accesos, filas de ingreso y delimitación de áreas restringidas en eventos.",
  },
  // 8. CAMERINOS
  {
    title: "Mobiliario para Camerinos",
    category: "Camerinos",
    dimensions: "Personalizable",
    image: [],
    description: "Montaje completo de camerinos VIP con espejos con iluminación profesional, percheros, mesas de maquillaje y sofás para artistas y conferencistas.",
  },
];

export interface SillaCategory {
  title: string;
  slug: string;
  images: string[];
  description: string;
}

export const sillasData: SillaCategory[] = [
  {
    title: "Butaco Picnic",
    slug: "butaco-picnic",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Butaco Picnic/butaco-picnic.webp",
      "/imagenes/3_Mobiliario/Sillas/Butaco Picnic/butaco-picnic-2.webp",
    ],
    description: "Butacos estilo rústico ideales para decoraciones campestres y mesas de madera natural.",
  },
  {
    title: "Silla Cross-Back",
    slug: "cross-back",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Cross-Back/silla-cross-back.webp",
      "/imagenes/3_Mobiliario/Sillas/Cross-Back/silla-cross-back-2.webp",
    ],
    description: "Silla rústica y elegante con respaldo cruzado, perfecta para bodas campestres y eventos vintage.",
  },
  {
    title: "Silla Director",
    slug: "director",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Director/silla-director.webp",
      "/imagenes/3_Mobiliario/Sillas/Director/silla-director-2.webp",
    ],
    description: "Silla plegable de madera con lona, cómoda y práctica para eventos al aire libre o zonas de producción.",
  },
  {
    title: "Silla Eames",
    slug: "eames",
    images: [
      "/imagenes/3_Mobiliario/Sillas/eames/silla-eames.webp",
      "/imagenes/3_Mobiliario/Sillas/eames/silla-eames-2.webp",
      "/imagenes/3_Mobiliario/Sillas/eames/silla-eames-3.webp",
      "/imagenes/3_Mobiliario/Sillas/eames/silla-eames-4.webp",
    ],
    description: "Diseño icónico y moderno, versátil para cualquier tipo de evento corporativo o social.",
  },
  {
    title: "Silla Eames Alta Madera (Bar)",
    slug: "eames-alta-madera",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Eames Alta madera - bar/silla-eames-alta-madera-bar.webp",
      "/imagenes/3_Mobiliario/Sillas/Eames Alta madera - bar/silla-eames-alta-madera-bar-2.webp",
    ],
    description: "Silla alta tipo bar con el clásico diseño Eames y patas de madera, ideal para barras y mesas cocteleras.",
  },
  {
    title: "Silla Eames Alta Metal (Bar)",
    slug: "eames-alta-metal",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Eames alta metal - bar/silla-eames-alta-metal-bar.webp",
      "/imagenes/3_Mobiliario/Sillas/Eames alta metal - bar/silla-eames-alta-metal-bar-2.webp",
    ],
    description: "Silla alta de bar con base metálica, resistente y con estilo moderno para zonas lounge o cafeterías.",
  },
  {
    title: "Silla Eclipse",
    slug: "eclipse",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Eclipse/silla-eclipse.webp",
      "/imagenes/3_Mobiliario/Sillas/Eclipse/silla-eclipse-2.webp",
      "/imagenes/3_Mobiliario/Sillas/Eclipse/silla-eclipse-3.webp",
      "/imagenes/3_Mobiliario/Sillas/Eclipse/silla-eclipse-4.webp",
      "/imagenes/3_Mobiliario/Sillas/Eclipse/silla-eclipse-5.webp",
      "/imagenes/3_Mobiliario/Sillas/Eclipse/silla-eclipse-6.webp",
    ],
    description: "Silla ergonómica de diseño contemporáneo, excelente opción para auditorios y eventos de negocios.",
  },
  {
    title: "Silla de Gerencia",
    slug: "gerencia",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Gerencia/silla-gerencia.webp",
      "/imagenes/3_Mobiliario/Sillas/Gerencia/silla-gerencia-2.webp",
      "/imagenes/3_Mobiliario/Sillas/Gerencia/silla-gerencia-3.webp",
      "/imagenes/3_Mobiliario/Sillas/Gerencia/silla-gerencia-4.webp",
    ],
    description: "Silla ejecutiva ergonómica, acolchada y con soporte lumbar, ideal para directivos y mesas de control.",
  },
  {
    title: "Silla Glam",
    slug: "glam",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Glam/silla-glam.webp",
    ],
    description: "Silla de diseño vanguardista y elegante que añade un toque sofisticado a cualquier montaje.",
  },
  {
    title: "Silla Interlocutora Isoseles",
    slug: "interlocutora-isoseles",
    images: [
      "/imagenes/3_Mobiliario/Sillas/interlocutora isoseles/silla-interlocutora.webp",
      "/imagenes/3_Mobiliario/Sillas/interlocutora isoseles/silla-interlocutora-2.webp",
      "/imagenes/3_Mobiliario/Sillas/interlocutora isoseles/silla-interlocutora-3.webp",
      "/imagenes/3_Mobiliario/Sillas/interlocutora isoseles/silla-interlocutora-4.webp",
      "/imagenes/3_Mobiliario/Sillas/interlocutora isoseles/silla-interlocutora-5.webp",
    ],
    description: "Silla interlocutora clásica y resistente, muy utilizada para salas de reuniones, capacitaciones y conferencias.",
  },
  {
    title: "Silla Italiana",
    slug: "italiana",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Italiana/silla-italiana.webp",
      "/imagenes/3_Mobiliario/Sillas/Italiana/silla-italiana-2.webp",
    ],
    description: "Silla de diseño italiano, elegante y cómoda para eventos formales y cenas de gala.",
  },
  {
    title: "Silla Italiana Negra",
    slug: "italiana-negra",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Italiana negra/silla-italiana-negra.webp",
      "/imagenes/3_Mobiliario/Sillas/Italiana negra/silla-italiana-negra-2.webp",
    ],
    description: "Versión en color negro de la silla italiana, ideal para contrastes y eventos sobrios.",
  },
  {
    title: "Silla Italiana Tejida en Mimbre",
    slug: "italiana-mimbre",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Italiana tejida en mimbre/silla-italiana-tejida-en-mimbre.webp",
      "/imagenes/3_Mobiliario/Sillas/Italiana tejida en mimbre/silla-italiana-tejida-en-mimbre-2.webp",
    ],
    description: "Variante de la silla italiana con un atractivo tejido en mimbre, perfecta para ambientes relajados y elegantes.",
  },
  {
    title: "Silla Plegable",
    slug: "plegable",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Plegable/silla-plegable.webp",
      "/imagenes/3_Mobiliario/Sillas/Plegable/silla-plegable-2.webp",
    ],
    description: "Silla plegable tradicional, muy práctica y fácil de transportar para todo tipo de reuniones.",
  },
  {
    title: "Silla Plegable Plástica",
    slug: "plegable-plastica",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Plegable plastica/silla-plegable-plastica.webp",
      "/imagenes/3_Mobiliario/Sillas/Plegable plastica/silla-plegable-plastica-2.webp",
    ],
    description: "Silla plegable de plástico, ligera, resistente y económica, ideal para eventos masivos y exteriores.",
  },
  {
    title: "Silla Poltrona Plegable",
    slug: "poltrona-plegable",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Poltrona plegable/silla-poltrona-plegable.webp",
      "/imagenes/3_Mobiliario/Sillas/Poltrona plegable/silla-poltrona-plegable-2.webp",
      "/imagenes/3_Mobiliario/Sillas/Poltrona plegable/silla-poltrona-plegable-3.webp",
    ],
    description: "Silla acolchada tipo poltrona, sumamente confortable y plegable para optimizar espacio.",
  },
  {
    title: "Silla Pupitre",
    slug: "pupitre",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Pupitre/silla-pupitre.webp",
      "/imagenes/3_Mobiliario/Sillas/Pupitre/silla-pupitre-2.webp",
    ],
    description: "Silla con mesa de apoyo incorporada (brazo paleta), la elección clásica para talleres, cursos y aulas.",
  },
  {
    title: "Silla Eva",
    slug: "eva",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Silla Eva/silla-eva.webp",
      "/imagenes/3_Mobiliario/Sillas/Silla Eva/silla-eva-2.webp",
      "/imagenes/3_Mobiliario/Sillas/Silla Eva/silla-eva-3.webp",
    ],
    description: "Silla ligera de diseño sencillo, versátil y económica para grandes aforos.",
  },
  {
    title: "Silla Plástica",
    slug: "plastica",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Silla plastica/silla-plastica.webp",
      "/imagenes/3_Mobiliario/Sillas/Silla plastica/silla-plastica-2.webp",
    ],
    description: "Silla plástica apilable, la solución más resistente y confiable para todo tipo de eventos y exteriores.",
  },
  {
    title: "Silla Plástica Vestida",
    slug: "plastica-vestida",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Silla plastica vestida/silla-decorada.webp",
      "/imagenes/3_Mobiliario/Sillas/Silla plastica vestida/silla-decorada-2.webp",
    ],
    description: "Silla plástica tradicional vestida con forro y moño decorativo, transformándola para eventos formales y banquetes.",
  },
  {
    title: "Silla Tiffani - Shibari",
    slug: "tiffani",
    images: [
      "/imagenes/3_Mobiliario/Sillas/Tiffani - Shibari/silla-tiffani.webp",
      "/imagenes/3_Mobiliario/Sillas/Tiffani - Shibari/silla-tiffani-2.webp",
      "/imagenes/3_Mobiliario/Sillas/Tiffani - Shibari/silla-tiffani-3.webp",
      "/imagenes/3_Mobiliario/Sillas/Tiffani - Shibari/silla-tiffani-4.webp",
      "/imagenes/3_Mobiliario/Sillas/Tiffani - Shibari/silla-tiffani-5.webp",
    ],
    description: "Silla elegante y muy solicitada para matrimonios y eventos de gala, disponible en diferentes acabados y colores.",
  }
];
