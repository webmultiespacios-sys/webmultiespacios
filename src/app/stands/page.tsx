"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { categories, stands } from "./data";
import { SearchTriggerButton } from "@/components/SearchTriggerButton";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

// Helper function to extract and format product name from image URL
const getProductNameFromUrl = (url: string) => {
  if (!url || url.startsWith("http")) return "";
  const parts = url.split("/");
  const filenameWithExt = parts[parts.length - 1];
  const filename = filenameWithExt.split(".")[0];
  const decoded = decodeURIComponent(filename).replace(/[-_]/g, " ").trim();
  return decoded.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
};

// Simple Carousel Component for Stands with multiple images
function StandImageCarousel({ images, alt, onImageClick }: { images: string[]; alt: string, onImageClick: (images: string[], index: number) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-full group/carousel cursor-pointer" onClick={() => onImageClick(images, currentIndex)}>
      <Image
        src={images[currentIndex]}
        alt={`${alt} - Imagen ${currentIndex + 1}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 right-4 flex justify-center gap-2 z-20">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === idx ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function StandsPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<{ images: string[], index: number } | null>(null);

  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem) {
      setSelectedItem({
        ...selectedItem,
        index: selectedItem.index === selectedItem.images.length - 1 ? 0 : selectedItem.index + 1
      });
    }
  };

  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem) {
      setSelectedItem({
        ...selectedItem,
        index: selectedItem.index === 0 ? selectedItem.images.length - 1 : selectedItem.index - 1
      });
    }
  };

  const filteredStands =
    activeCategory === "Todos"
      ? stands
      : stands.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* ============ LIGHTBOX MODAL ============ */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-[60]"
              onClick={() => setSelectedItem(null)}
            >
              <FiX className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Main Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full h-full max-w-6xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] md:h-[85vh]">
                <Image
                  src={selectedItem.images[selectedItem.index]}
                  alt="Imagen ampliada"
                  fill
                  className="object-contain"
                  quality={100}
                />

                {/* Lightbox Product Name Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                  <span className="bg-brand-blue text-white text-sm md:text-base font-extrabold px-6 py-3.5 rounded-xl shadow-2xl border border-white/20 tracking-wider whitespace-nowrap">
                    {getProductNameFromUrl(selectedItem.images[selectedItem.index])}
                  </span>
                </div>
              </div>

              {/* Carousel Controls (only if multiple images) */}
              {selectedItem.images.length > 1 && (
                <>
                  <button
                    onClick={handleLightboxPrev}
                    className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all shadow-xl z-[60]"
                  >
                    <FiChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                  </button>
                  <button
                    onClick={handleLightboxNext}
                    className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all shadow-xl z-[60]"
                  >
                    <FiChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2.5 z-[60]">
                    {selectedItem.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedItem({ ...selectedItem, index: idx });
                        }}
                        className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                          selectedItem.index === idx ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ HEADER ============ */}
      <section className="bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue pt-36 lg:pt-44 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-white">Ferias y Stands</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-5">
              Portafolio de{" "}
              <span className="text-brand-accent-light">Stands</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Diseñamos y fabricamos stands personalizados para ferias,
              exposiciones y eventos comerciales. Cada proyecto refleja la
              identidad de tu marca con acabados de primera calidad y montaje
              profesional incluido.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ FILTERS & SEARCH ============ */}
      <section className="bg-white border-b border-brand-light shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-base font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.label
                    ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                    : "bg-brand-light/60 text-brand-dark/70 hover:bg-brand-light hover:text-brand-dark"
                }`}
              >
                <cat.icon className="w-5 h-5" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Botón de búsqueda estático */}
          <SearchTriggerButton className="flex-shrink-0" />
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="relative py-16 bg-white min-h-[50vh] overflow-hidden">
        {/* Fondo Decorativo Estructural */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.25] bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('/imagenes/fondos/bg-structural.webp')" }} 
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {filteredStands.map((stand, i) => {
              const handleOpenLightbox = () => {
                if (Array.isArray(stand.image)) {
                  if (stand.image.length > 0) {
                    setSelectedItem({ images: stand.image, index: 0 });
                  }
                } else if (stand.image) {
                  setSelectedItem({ images: [stand.image], index: 0 });
                }
              };

              return (
                <motion.div
                  key={stand.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeInUp}
                  custom={i}
                  layout
                >
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-brand-light">
                    {/* Image */}
                    <div className="relative h-64 lg:h-80 overflow-hidden bg-gray-100">
                      {Array.isArray(stand.image) && stand.image.length > 0 ? (
                        <StandImageCarousel
                          images={stand.image}
                          alt={stand.title}
                          onImageClick={(images, idx) => setSelectedItem({ images, index: idx })}
                        />
                      ) : Array.isArray(stand.image) && stand.image.length === 0 ? (
                        <div className="relative w-full h-full flex items-center justify-center bg-brand-light/50">
                          <span className="text-sm font-semibold text-brand-dark/45">Próximamente</span>
                        </div>
                      ) : (
                        <div className="relative w-full h-full cursor-pointer" onClick={handleOpenLightbox}>
                          <Image
                            src={stand.image as string}
                            alt={stand.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      {/* Hover overlay button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="bg-white text-brand-blue px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                          Ampliar fotos
                        </span>
                      </div>
                      {/* Badge */}
                      <div className="absolute top-4 left-4 z-10 pointer-events-none">
                        <span className="bg-brand-blue/90 text-white text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm shadow-md">
                          {stand.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                        {stand.title}
                      </h3>
                      <p className="text-sm lg:text-base text-brand-accent font-semibold mb-4">
                        {stand.dimensions}
                      </p>
                      <p className="text-base text-brand-dark/60 leading-relaxed mb-6">
                        {stand.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-brand-light/50">
                        <a
                          href={`https://wa.me/573178394478?text=Hola%20Multiespacios%2C%20me%20interesa%20cotizar%20el%20${encodeURIComponent(stand.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-base font-semibold text-brand-green hover:text-brand-green-dark transition-colors"
                        >
                          <FaWhatsapp className="w-5 h-5" />
                          Cotizar
                        </a>
                        <button
                          onClick={handleOpenLightbox}
                          className="text-brand-accent text-base font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all cursor-pointer"
                        >
                          Detalles
                          <FiArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredStands.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-dark/40 text-lg">
                No hay stands en esta categoría aún.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.multiespacios.com.co/wp-content/uploads/2025/02/Stand-3m-x-2m-800x600.jpg"
            alt="Stand Multiespacios"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 to-brand-blue/80" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">
              ¿Necesitas un stand a la medida?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Diseñamos tu stand según las dimensiones, identidad de marca y
              objetivos comerciales de tu empresa. Solicita tu cotización sin
              compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573178394478?text=Hola%20Multiespacios%2C%20necesito%20un%20stand%20para%20una%20feria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-brand-green/25"
              >
                <FaWhatsapp className="w-5 h-5" />
                Cotizar mi stand
              </a>
              <a
                href="tel:+573178394478"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-base font-semibold border border-white/20 transition-all"
              >
                Hablar con un asesor
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
