"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { searchIndex, SearchItem } from "@/data/searchIndex";
import { buildWhatsAppUrl } from "@/config/site";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// La funcion normaliza el texto para permitir busquedas sin tildes.
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Al abrir el modal, el cursor pasa automaticamente al campo de busqueda.
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Este listener permite cerrar el modal al presionar Escape.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // El filtrado exige que todos los tokens escritos esten presentes.
  const normalizedQuery = normalizeText(query.trim());
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);

  const filteredResults: SearchItem[] = queryTokens.length > 0
    ? searchIndex.filter((item) => {
        const itemTitle = normalizeText(item.title);
        const itemCat = normalizeText(item.category);
        const itemDesc = normalizeText(item.description);
        const itemKeywords = (item.keywords || []).map(normalizeText).join(" ");
        const combinedText = `${itemTitle} ${itemCat} ${itemDesc} ${itemKeywords}`;

        return queryTokens.every((token) => combinedText.includes(token));
      })
    : [];


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop con desenfoque */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
            className="relative w-full max-w-3xl bg-slate-900/95 border border-white/15 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl z-10 flex flex-col max-h-[80vh]"
          >
            {/* Header del Input de Búsqueda */}
            <div className="relative flex items-center px-6 py-4 border-b border-white/10 bg-white/5">
              <FiSearch className="w-6 h-6 text-brand-gold mr-3 flex-shrink-0 animate-pulse" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Escribe lo que buscas... (ej. Carpas, Sillas Cross-Back, Tarimas, Stands)"
                className="w-full bg-transparent text-white placeholder-slate-400 text-lg sm:text-xl font-medium focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors mr-2"
                  title="Limpiar búsqueda"
                >
                  <FiX className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={onClose}
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                ESC
              </button>
            </div>

            {/* Resultados / Cuerpo de Búsqueda */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-3 custom-scrollbar flex-1">
              {!query.trim() && (
                <div className="text-center py-10 px-4">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-brand-gold">
                    <FiSearch className="w-7 h-7" />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-1">
                    ¿Qué estás buscando para tu evento?
                  </h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
                    Digita el producto o servicio que deseas cotizar (Carpas, Tarimas, Mobiliario, Sillas, Stands, etc.)
                  </p>

                  {/* Búsquedas Sugeridas */}
                  <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold mr-1">
                      Sugerencias:
                    </span>
                    {["Carpa Pagoda", "Silla Cross-Back", "Tarima Vidrio", "Stands Octanorm", "Salas Lounge"].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-all hover:border-brand-gold/50"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {query.trim() && filteredResults.length === 0 && (
                <div className="text-center py-12 px-4">
                  <p className="text-slate-300 text-base mb-2">
                    No encontramos resultados exactos para &quot;<span className="text-brand-gold font-semibold">{query}</span>&quot;
                  </p>
                  <p className="text-slate-400 text-sm mb-6">
                    ¿Requieres un montaje especial o personalizado? ¡Contáctanos directamente!
                  </p>
                  <a
                    href={buildWhatsAppUrl(
                      `Hola Multiespacios, estoy buscando informacion sobre: ${query}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-brand-green/20"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              )}

              {query.trim() && filteredResults.length > 0 && (
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-2 flex items-center justify-between">
                    <span>Resultados ({filteredResults.length})</span>
                    <span>Haga clic para ver detalles</span>
                  </div>

                  {filteredResults.map((item) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      onClick={onClose}
                      className="group flex items-start gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-gold/40 transition-all duration-300"
                    >
                      {/* Imagen Miniatura */}
                      {item.image ? (
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800 border border-white/10">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0 bg-brand-blue/60 border border-white/10 flex items-center justify-center text-brand-gold">
                          <FiCheckCircle className="w-8 h-8" />
                        </div>
                      )}

                      {/* Información del Resultado */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
                            {item.category}
                          </span>
                        </div>
                        <h4 className="text-white font-semibold text-base sm:text-lg group-hover:text-brand-gold transition-colors truncate">
                          {item.title}
                        </h4>
                        <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 mt-0.5">
                          {item.description}
                        </p>
                      </div>

                      {/* Flecha indicadora */}
                      <div className="self-center p-2 rounded-full bg-white/5 group-hover:bg-brand-gold group-hover:text-slate-950 text-slate-400 transition-all duration-300">
                        <FiArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Footer del Modal */}
            <div className="px-6 py-3 border-t border-white/10 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
              <span>Multiespacios S.A.S. — Experiencias que Inspiran</span>
              <button
                onClick={onClose}
                className="hover:text-white transition-colors underline"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function GlobalSearchModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-search", handleOpen);
    return () => window.removeEventListener("open-search", handleOpen);
  }, []);

  return <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}

