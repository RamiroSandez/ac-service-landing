import { MessageCircle, PhoneCall } from 'lucide-react';

const WHATSAPP_NUMBER = '34612345678';
const WHATSAPP_MSG = encodeURIComponent('Hola, quiero instalar un aire acondicionado hoy');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function CTASection() {
  return (
    <section className="py-14 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full" />
      <div className="absolute -bottom-20 -left-10 w-56 h-56 md:w-80 md:h-80 bg-white/5 rounded-full" />

      <div className="max-w-3xl mx-auto px-5 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          <PhoneCall size={12} />
          Atendemos hoy — presupuesto sin compromiso
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
          ¿Necesitás instalar un aire hoy?
        </h2>
        <p className="text-blue-100/80 text-sm md:text-lg mb-7 max-w-lg mx-auto">
          Consultá sin compromiso. Te enviamos un presupuesto gratis en minutos por WhatsApp.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-[#25d366] hover:bg-[#20c05c] text-white font-bold text-base md:text-lg px-6 md:px-8 py-4 rounded-2xl shadow-xl transition-all"
        >
          <MessageCircle size={20} />
          Escribinos por WhatsApp
        </a>

        <p className="mt-5 text-blue-200/60 text-sm">
          También podés llamarnos al{' '}
          <a href="tel:+34612345678" className="underline text-blue-200 hover:text-white transition-colors">
            +34 612 345 678
          </a>
        </p>
      </div>
    </section>
  );
}
