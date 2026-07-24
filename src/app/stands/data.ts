import { IconType } from "react-icons";
import {
  FiGrid,
  FiImage,
  FiPlusCircle,
  FiHexagon,
  FiBox,
  FiLayers,
  FiAnchor,
} from "react-icons/fi";

export interface Category {
  label: string;
  icon: IconType;
}

export interface Stand {
  title: string;
  category: string;
  dimensions: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  { label: "Todos", icon: FiGrid },
  { label: "Backing", icon: FiImage },
  { label: "Más tipos de Stands", icon: FiPlusCircle },
  { label: "Octanorm", icon: FiHexagon },
  { label: "Panelería", icon: FiBox },
  { label: "Scaffold", icon: FiLayers },
  { label: "Trimalla", icon: FiAnchor },
];

export const stands: Stand[] = [
  // ── Más tipos de Stands ──────────────────────────────────────────────────
  {
    title: "Stand con Piso de Vidrio Iluminado",
    category: "Más tipos de Stands",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Más tipos de Stands/stand-piso-vidrio-iluminado.webp",
    description: "Stand de alto impacto con piso de vidrio iluminado, ideal para exhibiciones de producto que requieren una presentación premium y vanguardista.",
  },
  {
    title: "Stand tipo Carpa Tradicional",
    category: "Más tipos de Stands",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Más tipos de Stands/carpa-tradicional.webp",
    description: "Estructura tipo carpa clásica adaptada como stand, perfecta para eventos al aire libre o interiores que requieran identidad propia.",
  },
  {
    title: "Stand en Madera y Policarbonato",
    category: "Más tipos de Stands",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Más tipos de Stands/madera-y-policarbonato.webp",
    description: "Combinación de madera y policarbonato para crear una estética cálida y moderna, ideal para marcas con una identidad orgánica y premium.",
  },
  {
    title: "Stand Modular",
    category: "Más tipos de Stands",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Más tipos de Stands/stand-modular.webp",
    description: "Sistema modular de fácil armado y desarmado, reutilizable y adaptable a diferentes espacios y configuraciones en ferias.",
  },
  {
    title: "Stand tipo Carpa con Cerramiento",
    category: "Más tipos de Stands",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Más tipos de Stands/stand-carpa.webp",
    description: "Carpa con cerramiento lateral utilizada como stand, brinda privacidad y protección del ambiente exterior en eventos a campo abierto.",
  },
  {
    title: "Stand con Estibas",
    category: "Más tipos de Stands",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Más tipos de Stands/stand-con-estibas.webp",
    description: "Diseño industrial y creativo que incorpora estibas como elemento decorativo y funcional, perfecto para marcas de estilo urbano o artesanal.",
  },
  {
    title: "Stand Geométrico",
    category: "Más tipos de Stands",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Más tipos de Stands/stand-geometric.webp",
    description: "Estructura con formas geométricas contemporáneas que generan un alto impacto visual y una identidad única en el espacio de exposición.",
  },
  {
    title: "Stands bajo Carpa",
    category: "Más tipos de Stands",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Más tipos de Stands/stands-carpa.webp",
    description: "Conjunto de stands dispuestos bajo una carpa compartida, solución versátil para ferias multimarca y eventos con múltiples expositores.",
  },
  {
    title: "Vitrina tipo Container",
    category: "Más tipos de Stands",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Más tipos de Stands/vitrina-tipo-container.webp",
    description: "Vitrina de exhibición con estética industrial inspirada en contenedores, ideal para marcas que buscan una presencia audaz y diferenciadora.",
  },

  // ── Octanorm ─────────────────────────────────────────────────────────────
  {
    title: "Stand Octanorm Clásico",
    category: "Octanorm",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Octanorm/octanorm.webp",
    description: "Sistema de stands Octanorm de aluminio de alta precisión, reconocido mundialmente por su limpieza visual, versatilidad y rapidez de montaje.",
  },
  {
    title: "Stand Octanorm Premium",
    category: "Octanorm",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Octanorm/stand-octanorm.webp",
    description: "Configuración premium del sistema Octanorm con acabados y gráficas de gran formato, creando un espacio de exhibición profesional e impactante.",
  },

  // ── Panelería ─────────────────────────────────────────────────────────────
  {
    title: "Panel Tradicional para Ferias",
    category: "Panelería",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Panelería/panel-tradicional.webp",
    description: "Sistema de panelería tradicional, ligero y de fácil instalación para la delimitación y personalización de espacios en ferias y exposiciones.",
  },

  // ── Scaffold ─────────────────────────────────────────────────────────────
  {
    title: "Estructura Scaffold",
    category: "Scaffold",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Scaffold/estructura-scaffold.webp",
    description: "Estructura tipo scaffold de gran resistencia, perfecta para stands de múltiples niveles o para soportar elementos de iluminación y señalización de gran escala.",
  },
  {
    title: "Estructuras en Scaffold",
    category: "Scaffold",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Scaffold/estructuras-scaffold.webp",
    description: "Configuraciones múltiples en scaffold que permiten crear espacios de exposición amplios, resistentes y con gran capacidad de personalización visual.",
  },

  // ── Trimalla ─────────────────────────────────────────────────────────────
  {
    title: "Techo con Truss y Trimalla",
    category: "Trimalla",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Trimalla/techo-con-truss-y-trimalla.webp",
    description: "Solución de techo suspendido que combina estructura de truss metálico con malla tipo trimalla para lograr una cobertura ligera y de gran impacto visual.",
  },
  {
    title: "Techo en Truss y Trimalla II",
    category: "Trimalla",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Trimalla/techo-con-truss-y-trimalla-2.webp",
    description: "Segunda configuración de techo en truss con trimalla, ideal para eventos de gran formato que requieren cobertura amplia con estética industrial.",
  },
  {
    title: "Túnel en Trimalla",
    category: "Trimalla",
    dimensions: "Personalizable",
    image: "/imagenes/4 Ferias y Stands/Trimalla/tunel-trimalla.webp",
    description: "Estructura de acceso o pasillo tipo túnel construida en trimalla, genera una experiencia de entrada impactante y única para visitantes de eventos.",
  },
];
