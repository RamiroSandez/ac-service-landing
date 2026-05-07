import { MessageCircle, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo-siaca.jpeg';

const WHATSAPP_NUMBER = '34612345678';
const WHATSAPP_MSG = encodeURIComponent('Hola, quiero instalar un aire acondicionado');

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-5 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

        {/* Brand */}
        <div className="col-span-2">
          <div className="mb-4 inline-block bg-white rounded-xl px-3 py-1.5">
            <img
              src={logo}
              alt="SIACA"
              className="h-8 md:h-9 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed max-w-xs mb-4">
            Servicio técnico de aire acondicionado profesional en Málaga y provincia.
            Instalación, reparación y mantenimiento con garantía.
          </p>
          <div className="flex gap-2.5">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-slate-800 hover:bg-[#25d366] rounded-xl flex items-center justify-center transition-colors"
            >
              <MessageCircle size={16} className="text-white" />
            </a>
            <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-pink-500 rounded-xl flex items-center justify-center transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3 md:mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm">
            {['Instalación', 'Reparación', 'Mantenimiento', 'Carga de gas'].map((s) => (
              <li key={s}>
                <a href="#servicios" className="hover:text-white transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3 md:mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={13} className="mt-0.5 shrink-0 text-blue-400" />
              <a href="tel:+34612345678" className="hover:text-white transition-colors">
                +34 612 345 678
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle size={13} className="mt-0.5 shrink-0 text-green-400" />
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp disponible
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={13} className="mt-0.5 shrink-0 text-blue-400" />
              <span>Málaga, España</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-center">
          <span>© {year} SIACA — Todos los derechos reservados</span>
          <span>Lunes a Viernes, 8:00 – 19:00 h</span>
        </div>
      </div>
    </footer>
  );
}
