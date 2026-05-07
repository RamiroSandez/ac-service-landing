import { useState } from 'react';
import { MessageCircle, Phone, Send, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = '34612345678';
const WHATSAPP_MSG_DEFAULT = encodeURIComponent('Hola, quiero instalar un aire acondicionado');

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola! Soy ${form.name}. Mi teléfono es ${form.phone}. ${form.message || 'Quiero solicitar un presupuesto.'}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
            Contacto
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hablemos hoy
          </h2>
          <p className="mt-2 text-slate-500 text-sm md:text-base max-w-md mx-auto">
            Respondemos en minutos. Sin esperas, sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

          {/* Direct contact cards */}
          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG_DEFAULT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25d366] hover:bg-[#20c05c] active:bg-[#1aad55] text-white rounded-2xl px-5 py-4 shadow-md transition-all group"
            >
              <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle size={22} />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-base">WhatsApp</div>
                <div className="text-white/80 text-xs md:text-sm truncate">+34 612 345 678 · Respondemos al instante</div>
              </div>
              <span className="ml-auto text-white/60 shrink-0">→</span>
            </a>

            <a
              href="tel:+34612345678"
              className="flex items-center gap-4 bg-white hover:bg-blue-50 active:bg-blue-100 border border-slate-200 text-slate-800 rounded-2xl px-5 py-4 shadow-sm transition-all group"
            >
              <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-base">Llamada</div>
                <div className="text-slate-500 text-xs md:text-sm">+34 612 345 678 · Lun–Vie, 8–19 h</div>
              </div>
              <span className="ml-auto text-slate-300 shrink-0">→</span>
            </a>

            <div className="bg-blue-600/5 border border-blue-100 rounded-2xl px-5 py-4">
              <div className="flex items-center gap-2 text-blue-700 font-semibold mb-1.5 text-sm">
                <CheckCircle2 size={15} />
                Garantía en todos nuestros servicios
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Todos los trabajos incluyen garantía por escrito. Si algo falla dentro del período, volvemos sin coste adicional.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm flex flex-col gap-4">
            <h3 className="font-bold text-slate-800 text-base md:text-lg">Envianos un mensaje</h3>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Tu nombre</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Ej: María García"
                value={form.name}
                onChange={handleChange}
                className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Teléfono / WhatsApp</label>
              <input
                type="tel"
                name="phone"
                required
                inputMode="tel"
                placeholder="Ej: 612 345 678"
                value={form.phone}
                onChange={handleChange}
                className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Mensaje (opcional)</label>
              <textarea
                name="message"
                rows={3}
                placeholder="Cuéntanos qué necesitas..."
                value={form.message}
                onChange={handleChange}
                className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-sm"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} />
                  ¡Enviado por WhatsApp!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Enviar por WhatsApp
                </>
              )}
            </button>

            <p className="text-xs text-slate-400 text-center">
              Al enviar, abriremos WhatsApp con tu mensaje listo.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
