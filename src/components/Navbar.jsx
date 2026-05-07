import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logo from '../assets/logo-siaca.jpeg';

const WHATSAPP_NUMBER = '34612345678';
const WHATSAPP_MSG = encodeURIComponent('Hola, quiero instalar un aire acondicionado');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo — wrapped in a white pill so the JPEG background blends on any bg */}
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="flex items-center bg-white rounded-xl px-3 py-1.5 shadow-sm"
        >
          <img
            src={logo}
            alt="SIACA"
            className="h-8 md:h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                scrolled ? 'text-slate-600' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all hover:shadow-md"
        >
          <Phone size={15} />
          Pedir presupuesto
        </a>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[56px] bg-white z-40 flex flex-col animate-fade-in">
          <nav className="flex flex-col px-5 pt-4 pb-6 gap-1 flex-1 overflow-y-auto">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium px-4 py-3.5 rounded-xl transition-colors text-base"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="px-5 pb-8 pt-2 border-t border-slate-100">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#25d366] text-white font-bold px-4 py-4 rounded-2xl text-base w-full"
            >
              <Phone size={18} />
              Pedir presupuesto por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
