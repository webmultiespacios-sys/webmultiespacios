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

const placeholderImg = "/imagenes/3_Mobiliario/Salas Lounge/sofa-doble.webp";

export const stands: Stand[] = [
  // 1. SILLAS
  {
    title: "Silla Decorada",
    category: "Sillas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Sillas/silla-decorada.webp",
    description: "Silla vestida y decorada ideal para banquetes, bodas y eventos sociales elegantes.",
  },
  {
    title: "Silla Director",
    category: "Sillas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Sillas/silla-director.webp",
    description: "Silla plegable tipo director, cómoda y práctica, ideal para eventos al aire libre o zonas de producción.",
  },
  {
    title: "Silla Eclipse Alta",
    category: "Sillas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Sillas/silla-eclipse-alta.webp",
    description: "Silla alta de diseño moderno, ideal para barras de bar, mesas cocteleras y stands de exhibición.",
  },
  {
    title: "Silla Eclipse",
    category: "Sillas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Sillas/silla-eclipse.webp",
    description: "Silla ergonómica de diseño contemporáneo, perfecta para auditorios y eventos corporativos.",
  },
  {
    title: "Silla de Gerente",
    category: "Sillas",
    dimensions: "Ajustable",
    image: "/imagenes/3_Mobiliario/Sillas/silla-gerente.webp",
    description: "Silla ejecutiva ergonómica con soporte lumbar y altura regulable para oficinas y mesas de control.",
  },
  {
    title: "Silla Interlocutora",
    category: "Sillas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Sillas/silla-interlocutora.webp",
    description: "Silla interlocutora fija para salas de reuniones, capacitaciones y conferencias.",
  },
  {
    title: "Silla de Malla",
    category: "Sillas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Sillas/silla-malla.webp",
    description: "Silla con espaldar de malla transpirable, ideal para largas jornadas de conferencias o staff.",
  },
  {
    title: "Silla de Oficina",
    category: "Sillas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Sillas/silla-oficina.webp",
    description: "Silla operativa clásica para estaciones de trabajo temporales en ferias y eventos.",
  },
  {
    title: "Silla Plástica",
    category: "Sillas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Sillas/silla-plastica.webp",
    description: "Silla plástica tradicional, ligera y apilable, excelente para eventos masivos y exteriores.",
  },
  {
    title: "Silla Plegable",
    category: "Sillas",
    dimensions: "Plegable",
    image: "/imagenes/3_Mobiliario/Sillas/silla-plegable-2.webp",
    description: "Silla plegable metálica muy resistente y fácil de transportar para todo tipo de reuniones.",
  },
  {
    title: "Poltrona Plegable",
    category: "Sillas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Sillas/silla-poltrona-plegable.webp",
    description: "Silla acolchada tipo poltrona, plegable y sumamente confortable para zonas VIP.",
  },
  {
    title: "Silla Pupitre",
    category: "Sillas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Sillas/silla-pupitre.webp",
    description: "Silla universitaria con mesa de apoyo incorporada para talleres, cursos y capacitaciones.",
  },

  // 2. MESAS
  {
    title: "Mesa Alta Counter",
    category: "Mesas",
    dimensions: "Personalizable",
    image: "/imagenes/3_Mobiliario/Mesas/mesa-alta-counter.webp",
    description: "Mesa alta ideal para atención al cliente en stands, recepciones o zonas de coctel.",
  },
  {
    title: "Mesa de Bar en Acrílico",
    category: "Mesas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Mesas/mesa-bar-acrilico.webp",
    description: "Elegante mesa de bar con superficie de acrílico traslúcido, ideal para eventos nocturnos.",
  },
  {
    title: "Mesa de Bar Vestida",
    category: "Mesas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Mesas/mesa-bar-vestido.webp",
    description: "Mesa coctelera vestida con mantel largo y moño decorativo para recepciones de gala.",
  },
  {
    title: "Mesa con Licra",
    category: "Mesas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Mesas/mesa-con-licra-1.webp",
    description: "Mesa alta tipo bar con funda de licra ajustada, brindando un estilo moderno y minimalista.",
  },
  {
    title: "Mesa Expandex",
    category: "Mesas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Mesas/mesa-expandex.webp",
    description: "Mesa coctelera con forro de tela elástica expandex, ideal para eventos de marca y activaciones corporativas.",
  },
  {
    title: "Mesa Metálica",
    category: "Mesas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Mesas/mesa-metalica.webp",
    description: "Mesa con estructura metálica resistente y duradera, apta para ferias e intemperie.",
  },
  {
    title: "Mesa Plástica",
    category: "Mesas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Mesas/mesa-plastica.webp",
    description: "Mesa plástica multiusos, ideal para montajes masivos, comedores de staff o exteriores.",
  },
  {
    title: "Mesa Redonda",
    category: "Mesas",
    dimensions: "Familiar",
    image: "/imagenes/3_Mobiliario/Mesas/mesa-redonda.webp",
    description: "Mesa redonda clásica para banquetes y cenas formales, con capacidad para 8 a 10 personas.",
  },
  {
    title: "Mesa Tapa de Madera",
    category: "Mesas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Mesas/mesa-tapa-madera.webp",
    description: "Mesa con superficie de madera, ideal para salas de juntas temporales o conferencias VIP.",
  },
  {
    title: "Mesa Tipo Bar",
    category: "Mesas",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Mesas/mesa-tipo-bar.webp",
    description: "Mesa tipo bar tradicional con base metálica y tope compacto, ideal para cafeterías y ferias.",
  },
  {
    title: "Juego de Mesa y Mesón",
    category: "Mesas",
    dimensions: "Grande",
    image: "/imagenes/3_Mobiliario/Mesas/mesa-y-meson.webp",
    description: "Mesones rectangulares de gran longitud con sillas tipo banco, perfectos para ferias gastronómicas o áreas comunes.",
  },
  {
    title: "Mesón Plástico",
    category: "Mesas",
    dimensions: "Rectangular",
    image: "/imagenes/3_Mobiliario/Mesas/meson-plastico.webp",
    description: "Mesón plástico rectangular plegable de alta capacidad, versátil para registro, catering y soporte.",
  },

  // 3. SALAS LOUNGE
  {
    title: "Barra Circular",
    category: "Salas Lounge",
    dimensions: "Circular",
    image: "/imagenes/3_Mobiliario/Salas Lounge/barra-circular.webp",
    description: "Barra de bar en formato circular con iluminación interna, el centro de atención para cocteles.",
  },
  {
    title: "Barra Curva",
    category: "Salas Lounge",
    dimensions: "Curva",
    image: "/imagenes/3_Mobiliario/Salas Lounge/barra-curva.webp",
    description: "Módulos de barra curva que se pueden acoplar para diseñar barras a la medida de tu espacio.",
  },
  {
    title: "Poltrona Doble",
    category: "Salas Lounge",
    dimensions: "2 Puestos",
    image: "/imagenes/3_Mobiliario/Salas Lounge/poltrona-doble.webp",
    description: "Poltrona capitoneada de dos puestos, ofreciendo máxima comodidad y diseño elegante.",
  },
  {
    title: "Puff Cuadrado",
    category: "Salas Lounge",
    dimensions: "Individual",
    image: "/imagenes/3_Mobiliario/Salas Lounge/puff-cuadrado.webp",
    description: "Puff individual en cuero sintético blanco, combinable para crear configuraciones de salas.",
  },
  {
    title: "Puff Doble",
    category: "Salas Lounge",
    dimensions: "2 Puestos",
    image: "/imagenes/3_Mobiliario/Salas Lounge/puff-doble.webp",
    description: "Puff alargado de dos puestos para áreas lounge fluidas y de interacción rápida.",
  },
  {
    title: "Puff Redondo",
    category: "Salas Lounge",
    dimensions: "Familiar/Grande",
    image: "/imagenes/3_Mobiliario/Salas Lounge/puff-redondo.webp",
    description: "Puff redondo gigante para sentarse alrededor en zonas lounge relajadas y modernas.",
  },
  {
    title: "Sofá Doble",
    category: "Salas Lounge",
    dimensions: "2 Puestos",
    image: "/imagenes/3_Mobiliario/Salas Lounge/sofa-doble.webp",
    description: "Sofá doble tapizado de diseño limpio, la pieza clave para armar tu sala lounge corporativa.",
  },
  {
    title: "Sofá Sencillo",
    category: "Salas Lounge",
    dimensions: "1 Puesto",
    image: "/imagenes/3_Mobiliario/Salas Lounge/sofa-sencillo.webp",
    description: "Sofá individual de un puesto, cómodo e ideal para complementar áreas de descanso VIP.",
  },

  // 4. EXHIBICION
  {
    title: "Atril de Exhibición",
    category: "Exhibición",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Exhibicion/alquiler-de-atriles-bogota-e1739771729729.webp",
    description: "Atril elegante metálico y acrílico para oradores y presentadores en congresos y conferencias.",
  },
  {
    title: "Estructura Backing",
    category: "Exhibición",
    dimensions: "Personalizable",
    image: "/imagenes/3_Mobiliario/Exhibicion/backing.webp",
    description: "Estructura de soporte para telones de fondo de prensa (photocalls) o escenografías corporativas.",
  },
  {
    title: "Estantería con Entrepaño",
    category: "Exhibición",
    dimensions: "Estándar",
    image: "/imagenes/3_Mobiliario/Exhibicion/estanteria-con-entrepano-piso-laminado.webp",
    description: "Estantería modular de madera y metal ideal para exhibición de productos en ferias y showrooms.",
  },
  {
    title: "Hablador Acrílico",
    category: "Exhibición",
    dimensions: "Variadas",
    image: "/imagenes/3_Mobiliario/Exhibicion/hablador3-copia.webp",
    description: "Porta-gráficos de acrílico o tótems informativos para stands, señalización e información general.",
  },
  {
    title: "Porta Pendón Grande",
    category: "Exhibición",
    dimensions: "Grande",
    image: "/imagenes/3_Mobiliario/Exhibicion/porta-pendo-grande.webp",
    description: "Soporte metálico expandible para banners y pendones publicitarios de gran formato.",
  },
  {
    title: "Vitrina de Exhibición",
    category: "Exhibición",
    dimensions: "120x80 cm",
    image: "/imagenes/3_Mobiliario/Exhibicion/vitrina-1200x796.webp",
    description: "Vitrina con paneles de vidrio templado e iluminación integrada para exhibir productos de valor con total seguridad.",
  },

  // 5. PISOS
  {
    title: "Pisos y Alfombras Modulares",
    category: "Pisos",
    dimensions: "Personalizable",
    image: placeholderImg,
    description: "Variedad de acabados para pisos de eventos, tapetes modulares y alfombras para tránsito pesado.",
  },

  // 6. VENTILADORES
  {
    title: "Ventilador Industrial de Pedestal",
    category: "Ventiladores",
    dimensions: "Gran Alcance",
    image: "/imagenes/3_Mobiliario/Ventiladores/ventiladores-industriales.webp",
    description: "Ventilador de pedestal industrial potente para refrescar carpas y pabellones de gran tamaño.",
  },
  {
    title: "Ventilador Industrial de Pared",
    category: "Ventiladores",
    dimensions: "Gran Alcance",
    image: "/imagenes/3_Mobiliario/Ventiladores/ventiladores-industriales-2.webp",
    description: "Ventiladores industriales de anclaje a estructura o pared para circulación de aire constante en el evento.",
  },

  // 7. SEPARADORES
  {
    title: "Separadores de Fila y Catenarias",
    category: "Separadores",
    dimensions: "Estándar",
    image: placeholderImg,
    description: "Postes separadores de fila con cinta retráctil o cordón de gala para control de accesos e ingresos ordenados.",
  },

  // 8. CAMERINOS
  {
    title: "Mobiliario para Camerinos",
    category: "Camerinos",
    dimensions: "Personalizable",
    image: placeholderImg,
    description: "Montaje completo de camerinos VIP con espejos con iluminación, percheros, mesas de maquillaje y sofás.",
  },
];
