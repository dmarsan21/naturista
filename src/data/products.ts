import type { ImageMetadata } from "astro";
import moringaImg from "../assets/products/moringa.svg";
import colagenoImg from "../assets/products/colageno.svg";
import propoleoImg from "../assets/products/propoleo.svg";
import espirulinaImg from "../assets/products/espirulina.svg";
import curcumaImg from "../assets/products/curcuma.svg";
import clorofilaImg from "../assets/products/clorofila.svg";

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  presentation: string;
  shortDescription: string;
  retailPrice: number;
  wholesalePrice: number;
  minWholesaleQty: number;
  stock: number;
  badge?: string;
  isFeatured?: boolean;
  image: ImageMetadata;
}

export const products: Product[] = [
  {
    id: "prod-01",
    sku: "NAT-MOR-090",
    name: "Cápsulas de Moringa Orgánica",
    category: "Superalimentos",
    presentation: "Frasco con 90 cápsulas (500 mg)",
    shortDescription:
      "Hoja pura de moringa pulverizada en frío. Rica en antioxidantes, hierro y vitaminas esenciales para energía vital diaria.",
    retailPrice: 245,
    wholesalePrice: 168,
    minWholesaleQty: 6,
    stock: 142,
    badge: "Más Vendido",
    isFeatured: true,
    image: moringaImg,
  },
  {
    id: "prod-02",
    sku: "NAT-COL-500",
    name: "Colágeno Hidrolizado + Biotina",
    category: "Belleza y Articulaciones",
    presentation: "Bote de 500 g en polvo soluble",
    shortDescription:
      "Fórmula premium enriquecida con vitamina C, ácido hialurónico y magnesio para fortalecer piel, cabello y cartílagos.",
    retailPrice: 380,
    wholesalePrice: 265,
    minWholesaleQty: 6,
    stock: 85,
    badge: "Alta Rotación",
    isFeatured: true,
    image: colagenoImg,
  },
  {
    id: "prod-03",
    sku: "NAT-PRO-060",
    name: "Extracto Puro de Propóleo con Equinácea",
    category: "Sistema Inmune",
    presentation: "Gotero ámbar de 60 ml",
    shortDescription:
      "Concentrado natural de colmena y raíz de equinácea orgánica para proteger las vías respiratorias y elevar defensas.",
    retailPrice: 195,
    wholesalePrice: 132,
    minWholesaleQty: 10,
    stock: 64,
    badge: "100% Puro",
    isFeatured: true,
    image: propoleoImg,
  },
  {
    id: "prod-04",
    sku: "NAT-ESP-120",
    name: "Espirulina Azul-Verde Prensada",
    category: "Superalimentos",
    presentation: "Frasco con 120 tabletas (400 mg)",
    shortDescription:
      "Microalga de cultivo limpio con 65% de proteína vegetal biodisponible, clorofila y complejo B natural.",
    retailPrice: 290,
    wholesalePrice: 198,
    minWholesaleQty: 6,
    stock: 52,
    image: espirulinaImg,
  },
  {
    id: "prod-05",
    sku: "NAT-CUR-060",
    name: "Cúrcuma Dorada + Pimienta Negra",
    category: "Bienestar Articular",
    presentation: "Frasco con 60 cápsulas vegetales",
    shortDescription:
      "Extracto estandarizado al 95% de curcuminoides con piperina activa que multiplica su absorción antiinflamatoria.",
    retailPrice: 260,
    wholesalePrice: 179,
    minWholesaleQty: 6,
    stock: 19,
    badge: "Fórmula Potenciada",
    image: curcumaImg,
  },
  {
    id: "prod-06",
    sku: "NAT-CLO-500",
    name: "Clorofila Líquida Concentrada Menta",
    category: "Detox y Digestión",
    presentation: "Botella de 500 ml (Rinde 33 litros)",
    shortDescription:
      "Oxigenador celular y desintoxicante hepático natural con aceite esencial de hierbabuena y menta piperita.",
    retailPrice: 220,
    wholesalePrice: 149,
    minWholesaleQty: 8,
    stock: 94,
    image: clorofilaImg,
  },
];

export interface AdminStat {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: "up" | "neutral";
  subtitle: string;
  icon: "box" | "currency" | "orders" | "wholesale";
}

export const adminStats: AdminStat[] = [
  {
    id: "stat-products",
    title: "Total de Productos",
    value: "50",
    change: "+4 este mes",
    trend: "up",
    subtitle: "46 activos en catálogo mayoreo/menudeo",
    icon: "box",
  },
  {
    id: "stat-sales",
    title: "Ventas del Mes",
    value: "$84,650 MXN",
    change: "+18.4% vs mes anterior",
    trend: "up",
    subtitle: "62% mayoreo · 38% menudeo directo",
    icon: "currency",
  },
  {
    id: "stat-orders",
    title: "Pedidos Nuevos",
    value: "18",
    change: "7 por enviar hoy",
    trend: "up",
    subtitle: "11 distribuidores y 7 clientes finales",
    icon: "orders",
  },
  {
    id: "stat-wholesale",
    title: "Socios Mayoristas",
    value: "34",
    change: "+3 nuevos registros",
    trend: "up",
    subtitle: "Ticket promedio: $3,850 MXN",
    icon: "wholesale",
  },
];

