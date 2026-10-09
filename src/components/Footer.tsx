import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaYoutube, FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-center">
          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/imagenes/logos/image18.png"
              alt="Multiespacios S.A.S."
              width={180}
              height={60}
              className="h-14 w-auto object-contain mb-6 mx-auto"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xl">
              Más de 35 años creando experiencias que inspiran. Somos líderes en
              diseño de arquitectura efímera y producción de eventos en
              Colombia.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://www.instagram.com/abcmultiespacios/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:scale-110 hover:shadow-lg hover:shadow-brand-accent/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/abcmultiespacios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:scale-110 hover:shadow-lg hover:shadow-brand-accent/30 transition-all duration-300"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@multiespaciosltda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:scale-110 hover:shadow-lg hover:shadow-brand-accent/30 transition-all duration-300"
                aria-label="TikTok"
              >
                <FaTiktok className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.youtube.com/@MultiespaciosSAS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:scale-110 hover:shadow-lg hover:shadow-brand-accent/30 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Multiespacios S.A.S. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <Link href="#" className="hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
