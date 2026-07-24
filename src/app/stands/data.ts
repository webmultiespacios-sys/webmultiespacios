import { IconType } from "react-icons";
import {
  FiGrid,
  FiBox,
  FiHexagon,
  FiLayers,
  FiAnchor,
  FiImage,
  FiPlusCircle,
} from "react-icons/fi";

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
  { label: "Panelería", icon: FiBox },
  { label: "Octanorm", icon: FiHexagon },
  { label: "Scaffold", icon: FiLayers },
  { label: "Trimalla", icon: FiAnchor },
  { label: "Backing", icon: FiImage },
  { label: "Más tipos de Stands", icon: FiPlusCircle },
];

export const stands: Stand[] = [
  // 1. Panelería
  {
    title: "Stands en Panelería",
    category: "Panelería",
    dimensions: "Personalizable",
    image: [
      "/imagenes/4 Ferias y Stands/Panelería/panel-tradicional.webp"
    ],
    description: "Paneles modulares tradicionales y cenefas de identificación para ferias comerciales y distribución estandarizada de expositores.",
  },
  // 2. Octanorm
  {
    title: "Stands en Sistema Octanorm",
    category: "Octanorm",
    dimensions: "Personalizable",
    image: [
      "/imagenes/4 Ferias y Stands/Octanorm/octanorm.webp",
      "/imagenes/4 Ferias y Stands/Octanorm/stand-octanorm.webp"
    ],
    description: "Sistema de aluminio modular por excelencia para exhibiciones, asegurando una presentación limpia, profesional y de rápido montaje.",
  },
  // 3. Scaffold
  {
    title: "Stands tipo Scaffold",
    category: "Scaffold",
    dimensions: "Personalizable",
    image: [
      "/imagenes/4 Ferias y Stands/Scaffold/estructura-scaffold.webp",
      "/imagenes/4 Ferias y Stands/Scaffold/estructuras-scaffold.webp"
    ],
    description: "Estructuras de andamiaje industrial robustas y de gran escala para stands de diseño contemporáneo, soportes de pantallas y sonido.",
  },
  // 4. Trimalla
  {
    title: "Stands y Techos en Trimalla",
    category: "Trimalla",
    dimensions: "Personalizable",
    image: [
      "/imagenes/4 Ferias y Stands/Trimalla/techo-con-truss-y-trimalla.webp",
      "/imagenes/4 Ferias y Stands/Trimalla/techo-con-truss-y-trimalla-2.webp",
      "/imagenes/4 Ferias y Stands/Trimalla/tunel-trimalla.webp"
    ],
    description: "Estructuras de acceso tipo túnel y techos suspendidos que combinan mallas tridimensionales con estructuras truss de aluminio.",
  },
  // 5. Backing
  {
    title: "Backings Publicitarios",
    category: "Backing",
    dimensions: "Personalizable",
    image: [],
    description: "Estructuras de soporte para banners de gran formato, ideales para ruedas de prensa, fondos fotográficos (photocalls) y branding corporativo.",
  },
  // 6. Más tipos de stands
  {
    title: "Otros Tipos de Stands",
    category: "Más tipos de Stands",
    dimensions: "Personalizable",
    image: [
      "/imagenes/4 Ferias y Stands/Más tipos de Stands/stand-piso-vidrio-iluminado.webp",
      "/imagenes/4 Ferias y Stands/Más tipos de Stands/carpa-tradicional.webp",
      "/imagenes/4 Ferias y Stands/Más tipos de Stands/madera-y-policarbonato.webp",
      "/imagenes/4 Ferias y Stands/Más tipos de Stands/stand-modular.webp",
      "/imagenes/4 Ferias y Stands/Más tipos de Stands/stand-carpa.webp",
      "/imagenes/4 Ferias y Stands/Más tipos de Stands/stand-con-estibas.webp",
      "/imagenes/4 Ferias y Stands/Más tipos de Stands/stand-geometric.webp",
      "/imagenes/4 Ferias y Stands/Más tipos de Stands/stands-carpa.webp",
      "/imagenes/4 Ferias y Stands/Más tipos de Stands/vitrina-tipo-container.webp"
    ],
    description: "Diseños especiales que integran iluminación LED en pisos, acabados artesanales en madera, elementos temáticos y adaptaciones de carpas.",
  },
];
