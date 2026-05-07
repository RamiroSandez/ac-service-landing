import { MessageCircle, ShieldCheck, Clock, Star } from 'lucide-react';

const WHATSAPP_NUMBER = '5491112345678';
const WHATSAPP_MSG = encodeURIComponent('Hola, quiero instalar un aire acondicionado');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const badges = [
  { icon: ShieldCheck, text: 'Trabajo garantizado' },
  { icon: Clock,       text: 'Respuesta en 24 hs' },
  { icon: Star,        text: '+500 instalaciones' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900">
      {/* Decorative blobs — smaller on mobile */}
      <div className="absolute -top-16 -right-16 w-64 h-64 md:w-[500px] md:h-[500px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-10 w-52 h-52 md:w-[400px] md:h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 pt-28 pb-20 md:pt-40 md:pb-32 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 animate-fade-in-up">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Servicio técnico profesional · CABA y GBA
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight text-balance animate-fade-in-up delay-100">
            Instalación de aire acondicionado{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              profesional
            </span>{' '}
            en tu zona
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-base md:text-xl text-blue-100/80 leading-relaxed max-w-xl animate-fade-in-up delay-200">
            Rápido, garantizado y al mejor precio.
            Técnicos certificados, marcas líderes y presupuesto sin cargo.
          </p>

          {/* CTA buttons — stacked on mobile, row on sm+ */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#20c05c] text-white font-bold px-6 py-4 rounded-2xl shadow-lg hover:shadow-green-500/30 transition-all text-base"
            >
              <MessageCircle size={20} />
              Solicitar presupuesto por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-4 rounded-2xl transition-all text-base backdrop-blur-sm"
            >
              Ver servicios
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-2.5 animate-fade-in-up delay-400">
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/8 border border-white/10 text-white/80 text-xs sm:text-sm px-3 py-2 rounded-xl backdrop-blur-sm"
              >
                <Icon size={14} className="text-blue-400 shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1200 60 900 0 720 15C540 30 240 60 0 30L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
