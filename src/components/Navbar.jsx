import { useState, useEffect } from 'react';
import { Phone, Menu, X, Wind } from 'lucide-react';

const WHATSAPP_NUMBER = '5491112345678';
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
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
            <Wind size={20} className="text-white" />
          </div>
          <span className={`font-bold text-lg tracking-tight transition-colors ${scrolled ? 'text-slate-800' : 'text-white'}`}>
            Gorri<span className="text-blue-400">Clima</span>
          </span>
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

        {/* CTA */}
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
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 animate-fade-in">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium px-3 py-2.5 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-4 py-3 rounded-xl"
            >
              <Phone size={16} />
              Pedir presupuesto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
