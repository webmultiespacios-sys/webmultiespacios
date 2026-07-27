import { stands as carpasData } from "@/app/carpas/data";
import { stands as estructurasData } from "@/app/estructuras/data";
import { stands as mobiliarioData, sillasData } from "@/app/mobiliario/data";
import { stands as standsData } from "@/app/stands/data";

export interface SearchItem {
  id: string;
  title: string;
  category: "Carpas" | "Estructuras y Tarimas" | "Mobiliario" | "Sillas" | "Stands" | "Sección";
  description: string;
  image?: string;
  url: string;
  keywords?: string[];
}

export const getProductNameFromUrl = (url: string): string => {
  if (!url || url.startsWith("http")) return "";
  const parts = url.split("/");
  const filenameWithExt = parts[parts.length - 1];
  const filename = filenameWithExt.split(".")[0];
  const decoded = decodeURIComponent(filename)
    .replace(/[-_]/g, " ")
    .replace(/\b[0-9]{10,}\b/g, "")
    .replace(/\be\d+\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return decoded
    .split(" ")
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : ""))
    .join(" ")
    .trim();
};

// Secciones principales estáticas
const staticSections: SearchItem[] = [
  {
    id: "sec-carpas",
    title: "Alquiler de Carpas y Pabellones",
    category: "Sección",
    description: "Carpas Pagoda, Polos, Pabellones modulares e Inflables para eventos.",
    image: "/imagenes/1_carpas/Carpa pagoda/carpa-pagoda.webp",
    url: "/carpas",
    keywords: ["carpa", "toldo", "cubierta", "pabellon", "techo", "evento"],
  },
  {
    id: "sec-estructuras",
    title: "Estructuras y Tarimas",
    category: "Sección",
    description: "Tarimas certificadas, escenarios, estructuras Truss, Octanorm, scaffold y graderías.",
    image: "/imagenes/2_Estructuras_y_tarimas/Tarimas/Tarima Americana/tarima-americana.webp",
    url: "/estructuras",
    keywords: ["tarima", "escenario", "truss", "estructura", "graderia", "piso"],
  },
  {
    id: "sec-mobiliario",
    title: "Mobiliario para Eventos",
    category: "Sección",
    description: "Mesas, sillas, salas lounge, elementos de exhibición, camerinos y ventiladores.",
    image: "/imagenes/3_Mobiliario/Sillas/Cross-Back/silla-cross-back.webp",
    url: "/mobiliario",
    keywords: ["mobiliario", "muebles", "mesas", "sillas", "lounge", "puff", "sofa"],
  },
  {
    id: "sec-sillas",
    title: "Catálogo General de Sillas",
    category: "Sección",
    description: "Silla Italiana, Eames, Cross-Back, Eclipse, Tiffani, Director, Pupitres y más.",
    image: "/imagenes/3_Mobiliario/Sillas/Cross-Back/silla-cross-back.webp",
    url: "/mobiliario/sillas",
    keywords: ["sillas", "silla", "asiento", "butaco", "tiffani", "eames", "italiana"],
  },
  {
    id: "sec-stands",
    title: "Ferias y Stands",
    category: "Sección",
    description: "Diseño y montaje de stands en panelería, Octanorm, scaffold, trimalla y backings.",
    image: "/imagenes/4 Ferias y Stands/Octanorm/stand-octanorm.webp",
    url: "/stands",
    keywords: ["stand", "feria", "exposicion", "octanorm", "paneleria", "backing", "estibas"],
  },
  {
    id: "sec-atracciones",
    title: "Atracciones para Eventos",
    category: "Sección",
    description: "Inflables gigantes, toboganes, carros chocones, muro de escalar, jumping y más.",
    url: "/atracciones",
    keywords: ["atraccion", "inflable", "tobogan", "jumping", "muro", "escalar", "chocones", "cuatrimoto", "ninja"],
  },
  {
    id: "sec-produccion",
    title: "Producción de Eventos",
    category: "Sección",
    description: "Producción integral de eventos corporativos, gubernamentales, ferias regionales y universitarios.",
    url: "/produccion",
    keywords: ["produccion", "evento", "corporativo", "gubernamental", "feria", "universidad", "marca"],
  },
  {
    id: "sec-campamentos",
    title: "Campamentos y Bodegas",
    category: "Sección",
    description: "Campamentos temporales, hangares industriales y pabellones de gran escala para proyectos en campo.",
    url: "/campamentos",
    keywords: ["campamento", "bodega", "hangar", "pabellon", "obra", "mineria", "construccion", "temporal"],
  },
];

// Generador dinámico a partir de las fotos y datos del portafolio
function buildDynamicSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [...staticSections];
  const seenIds = new Set<string>();

  const addItem = (item: SearchItem) => {
    if (!seenIds.has(item.id) && item.title.length > 1) {
      seenIds.add(item.id);
      items.push(item);
    }
  };

  // Helper para procesar listas de stands/productos de cada módulo
  const processModuleItems = (
    moduleStands: Array<{ title: string; category: string; description: string; image: string | string[] }>,
    categoryLabel: "Carpas" | "Estructuras y Tarimas" | "Mobiliario" | "Stands",
    baseUrl: string
  ) => {
    moduleStands.forEach((stand, idx) => {
      // Agregar el grupo macro
      const macroId = `${baseUrl}-${idx}-${stand.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
      const mainImg = Array.isArray(stand.image) ? stand.image[0] : stand.image;
      if (mainImg) {
        addItem({
          id: macroId,
          title: stand.title,
          category: categoryLabel,
          description: stand.description,
          image: mainImg,
          url: baseUrl,
          keywords: [stand.category, categoryLabel],
        });
      }

      // Agregar cada foto individual con su nombre derivado del archivo webp
      const imageList = Array.isArray(stand.image) ? stand.image : stand.image ? [stand.image] : [];
      imageList.forEach((imgUrl, imgIdx) => {
        if (!imgUrl || imgUrl.startsWith("http")) return;
        const photoTitle = getProductNameFromUrl(imgUrl);
        if (photoTitle && photoTitle !== stand.title) {
          const photoId = `photo-${baseUrl}-${idx}-${imgIdx}-${photoTitle.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
          addItem({
            id: photoId,
            title: photoTitle,
            category: categoryLabel,
            description: `${stand.title} — ${stand.description}`,
            image: imgUrl,
            url: baseUrl,
            keywords: [stand.title, stand.category, categoryLabel],
          });
        }
      });
    });
  };

  // 1. CARPAS
  processModuleItems(carpasData, "Carpas", "/carpas");

  // 2. ESTRUCTURAS Y TARIMAS
  processModuleItems(estructurasData, "Estructuras y Tarimas", "/estructuras");

  // 3. MOBILIARIO GENERAL
  processModuleItems(mobiliarioData, "Mobiliario", "/mobiliario");

  // 4. STANDS Y FERIAS (Incluye Stand Con Estibas, Vitrina Tipo Container, etc.)
  processModuleItems(standsData, "Stands", "/stands");

  // 5. CATÁLOGO ESPECÍFICO DE SILLAS
  sillasData.forEach((silla, idx) => {
    const mainImg = silla.images[0];
    if (mainImg) {
      addItem({
        id: `silla-${idx}-${silla.slug}`,
        title: silla.title,
        category: "Sillas",
        description: silla.description,
        image: mainImg,
        url: "/mobiliario/sillas",
        keywords: ["silla", "asiento", silla.slug],
      });
    }

    silla.images.forEach((imgUrl, imgIdx) => {
      const photoTitle = getProductNameFromUrl(imgUrl);
      if (photoTitle && photoTitle !== silla.title) {
        addItem({
          id: `photo-silla-${idx}-${imgIdx}-${photoTitle.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
          title: photoTitle,
          category: "Sillas",
          description: `${silla.title} — ${silla.description}`,
          image: imgUrl,
          url: "/mobiliario/sillas",
          keywords: ["silla", silla.title],
        });
      }
    });
  });

  return items;
}

export const searchIndex: SearchItem[] = buildDynamicSearchIndex();
