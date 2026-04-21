import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5491112345678';
const WHATSAPP_MSG = encodeURIComponent('Hola, quiero instalar un aire acondicionado');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-5 z-50 group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-40 pointer-events-none" />

      {/* Button */}
      <span className="relative flex items-center gap-2.5 bg-[#25d366] hover:bg-[#20c05c] text-white font-semibold text-sm px-4 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5">
        <MessageCircle size={22} />
        <span className="hidden sm:inline">Pedir presupuesto</span>
      </span>
    </a>
  );
}
