"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiImage, FiChevronLeft, FiChevronRight, FiX, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { categories, atracciones } from "./data";
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
  if (!url) return "";
  const parts = url.split("/");
  const filenameWithExt = parts[parts.length - 1];
  const filename = filenameWithExt.split(".")[0];
  const decoded = decodeURIComponent(filename).replace(/[-_]/g, " ").trim();
  return decoded.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
};

// Simple Carousel Component for Stands/Atracciones with multiple images
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
    <div className="relative w-full h-full group/carousel cursor-pointer bg-white" onClick={() => onImageClick(images, currentIndex)}>
      <Image
        src={images[currentIndex]}
        alt={`${alt} - Imagen ${currentIndex + 1}`}
        fill
        className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
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
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? "bg-white scale-125" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function AtraccionesPage() {
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

  const filtered =
    activeCategory === "Todos"
      ? atracciones
      : atracciones.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-[60]"
              onClick={() => setSelectedItem(null)}
            >
              <FiX className="w-6 h-6 md:w-8 md:h-8" />
            </button>

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
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                  <span className="bg-brand-blue text-white text-sm md:text-base font-extrabold px-6 py-3.5 rounded-xl shadow-2xl border border-white/20 tracking-wider whitespace-nowrap">
                    {getProductNameFromUrl(selectedItem.images[selectedItem.index])}
                  </span>
                </div>
              </div>

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

                  <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2.5 z-[60]">
                    {selectedItem.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                           setSelectedItem({ ...selectedItem, index: idx });
                        }}
                        className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${selectedItem.index === idx ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
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
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white">Atracciones</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-5 lg:mt-8">
              Atracciones <span className="text-brand-accent-light">para eventos</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Toboganes gigantes, carros chocones, muros de escalar, jumping y mucho más. Atracciones de primera calidad para animar y entretener a todos tus invitados.
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
          <SearchTriggerButton className="flex-shrink-0" />
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="relative py-16 bg-white min-h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-[0.6] bg-[length:350px] md:bg-[length:500px] bg-center bg-repeat" 
          style={{ backgroundImage: "url('/imagenes/fondos/bg-structural.webp')" }} 
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, i) => {
              const handleOpenLightbox = () => {
                if (Array.isArray(item.image)) {
                  setSelectedItem({ images: item.image, index: 0 });
                } else {
                  setSelectedItem({ images: [item.image], index: 0 });
                }
              };
              const firstImage = Array.isArray(item.image) ? item.image[0] : item.image;
              const whatsappText = `Hola Multiespacios, me interesan sus atracciones, específicamente: ${item.title}.\n\nReferencia: https://www.multiespacios.com.co${firstImage || ""}`;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeInUp}
                  custom={i}
                  layout
                >
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-brand-light">
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden bg-white">
                      {Array.isArray(item.image) && item.image.length > 0 ? (
                        <StandImageCarousel
                          images={item.image}
                          alt={item.title}
                          onImageClick={(images, idx) => setSelectedItem({ images, index: idx })}
                        />
                      ) : Array.isArray(item.image) && item.image.length === 0 ? (
                        <div className="relative w-full h-full flex flex-col gap-3 items-center justify-center bg-brand-light/40">
                          <FiImage className="w-12 h-12 text-brand-dark/30" />
                          <span className="text-sm font-semibold uppercase tracking-wider text-brand-dark/30">Próximamente</span>
                        </div>
                      ) : (
                        <div className="relative w-full h-full cursor-pointer bg-white" onClick={handleOpenLightbox}>
                          <Image
                            src={item.image as string}
                            alt={item.title}
                            fill
                            className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      )}
                      
                      {Array.isArray(item.image) && item.image.length > 0 && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      )}

                      <div className="absolute top-4 left-4 z-10 pointer-events-none">
                        <span className="bg-brand-blue/90 text-white text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm shadow-md">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 flex flex-col justify-between" style={{ minHeight: "200px" }}>
                      <div>
                        <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-brand-dark/60 leading-relaxed mb-4 line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-brand-light/50">
                        {item.title === "Toboganes" || item.title === "Tobogán Arcoíris" ? (
                          <a
                            href="https://www.toboganarcoiris.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue/90 transition-colors"
                          >
                            Visitar página
                            <FiArrowRight className="w-4 h-4" />
                          </a>
                        ) : (
                          <a
                            href={`https://wa.me/573125575477?text=${encodeURIComponent(whatsappText)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:text-brand-green-dark transition-colors"
                          >
                            <FaWhatsapp className="w-4 h-4" />
                            Cotizar
                          </a>
                        )}
                        {(Array.isArray(item.image) && item.image.length > 0) && (
                          <button
                            onClick={handleOpenLightbox}
                            className="text-brand-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-1.5 transition-all cursor-pointer"
                          >
                            Detalles
                            <FiArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {(!Array.isArray(item.image) || item.image.length === 0) && (
                           <span className="text-xs text-brand-dark/40 font-medium">{item.dimensions}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-dark/40 text-lg">No hay productos en esta categoría aún.</p>
            </div>
          )}
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-light py-20">
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">
              ¿Necesitas atracciones para tu evento?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Cotiza tus atracciones con nosotros y haz de tu evento una experiencia inolvidable para todos tus invitados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573125575477?text=Hola%20Multiespacios%2C%20necesito%20atracciones%20para%20un%20evento"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-brand-green/25"
              >
                <FaWhatsapp className="w-5 h-5" />
                Cotizar ahora
              </a>
              <a
                href="tel:+573125575477"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-base font-semibold border border-white/20 transition-all"
              >
                Hablar con un asesor
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ UBICACION ============ */}
      <section className="pt-12 pb-24 bg-white border-t border-brand-light/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-accent mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-brand-dark/60 max-w-2xl mx-auto text-base md:text-lg">
              Encuéntranos en nuestra sede principal. Siempre estamos listos para atenderte.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-brand-light/10 rounded-3xl p-6 md:p-10 border border-brand-light shadow-sm">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-brand-light/50 group"
            >
              <iframe
                src="https://maps.google.com/maps?q=Multiespacios+SAS,+Bogota&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-4"
            >
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-brand-blue mb-8">
                Datos de Contacto
              </h3>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark/80 uppercase tracking-wider mb-1">Dirección</h4>
                    <p className="text-brand-dark/70 text-base md:text-lg">Cra 87 # 84 A – 25, Bogotá</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark/80 uppercase tracking-wider mb-1">Teléfono y WhatsApp</h4>
                    <p className="text-brand-dark/70 text-base md:text-lg">312 557 54 77 – 313 800 43 23</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark/80 uppercase tracking-wider mb-1">Correo</h4>
                    <p className="text-brand-dark/70 text-base md:text-lg">comercial@multiespacios.com.co</p>
                  </div>
                </li>
              </ul>
              <a
                href="https://www.google.com/maps/place/Multiespacios+SAS/@4.7071916,-74.0991715,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-0.5"
              >
                <FiMapPin className="w-5 h-5" />
                Abrir en Google Maps
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
