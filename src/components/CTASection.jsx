import { MessageCircle, PhoneCall } from 'lucide-react';

const WHATSAPP_NUMBER = '5491112345678';
const WHATSAPP_MSG = encodeURIComponent('Hola, quiero instalar un aire acondicionado hoy');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
      <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-white/5 rounded-full" />

      <div className="max-w-3xl mx-auto px-4 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
          <PhoneCall size={13} />
          Atendemos hoy — sin cargo de visita
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          ¿Necesitás instalar un aire hoy?
        </h2>
        <p className="text-blue-100/80 text-lg mb-8 max-w-lg mx-auto">
          Consultá sin compromiso. Te enviamos un presupuesto gratis en minutos por WhatsApp.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#20c05c] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-green-400/40 transition-all hover:-translate-y-0.5"
        >
          <MessageCircle size={22} />
          Escribinos por WhatsApp
        </a>

        <p className="mt-5 text-blue-200/60 text-sm">
          También podés llamarnos al{' '}
          <a href="tel:+5491112345678" className="underline text-blue-200 hover:text-white transition-colors">
            +54 9 11 1234-5678
          </a>
        </p>
      </div>
    </section>
  );
}
