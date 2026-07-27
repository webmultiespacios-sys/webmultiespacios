"use client";

import { FiSearch } from "react-icons/fi";

export function openSearchModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-search"));
  }
}

export function SearchTriggerButton({ className = "" }: { className?: string }) {
  return (
    <button
      onClick={openSearchModal}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2 bg-brand-blue hover:bg-[#0a2a4a] text-white rounded-full transition-all duration-300 shadow-md shadow-brand-blue/25 hover:shadow-lg hover:shadow-brand-blue/35 hover:-translate-y-0.5 border border-brand-blue/20 font-semibold text-sm cursor-pointer group ${className}`}
      title="Buscar"
    >
      <FiSearch className="w-4 h-4 text-brand-gold group-hover:scale-110 transition-transform" />
      <span>Buscar</span>
    </button>
  );
}
