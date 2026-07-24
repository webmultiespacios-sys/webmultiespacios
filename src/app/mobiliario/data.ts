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
  // 1. SILLAS
  {
    title: "Sillas para Eventos",
    category: "Sillas",
    dimensions: "Múltiples referencias",
    image: [
      "/imagenes/3_Mobiliario/Sillas/silla-decorada.webp",
      "/imagenes/3_Mobiliario/Sillas/silla-director.webp",
      "/imagenes/3_Mobiliario/Sillas/silla-eclipse-alta.webp",
      "/imagenes/3_Mobiliario/Sillas/silla-eclipse.webp",
      "/imagenes/3_Mobiliario/Sillas/silla-gerente.webp",
      "/imagenes/3_Mobiliario/Sillas/silla-interlocutora.webp",
      "/imagenes/3_Mobiliario/Sillas/silla-malla.webp",
      "/imagenes/3_Mobiliario/Sillas/silla-oficina.webp",
      "/imagenes/3_Mobiliario/Sillas/silla-plastica.webp",
      "/imagenes/3_Mobiliario/Sillas/silla-plegable-2.webp",
      "/imagenes/3_Mobiliario/Sillas/silla-poltrona-plegable.webp",
      "/imagenes/3_Mobiliario/Sillas/silla-pupitre.webp",
    ],
    description: "Amplio catálogo de sillas para todo tipo de evento: plegables, plásticas, ejecutivas, tipo director, eclipse, pupitre y más. Selecciona la que se adapte a tu montaje.",
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
