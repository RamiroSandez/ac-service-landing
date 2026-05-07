import { MessageCircle, Search, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Contacto',
    description:
      'Escribinos por WhatsApp o llamanos. Te respondemos en minutos y coordinamos una visita sin cargo.',
    color: 'bg-blue-600',
    light: 'bg-blue-50 text-blue-600',
  },
  {
    number: '02',
    icon: Search,
    title: 'Diagnóstico',
    description:
      'Un técnico visita tu domicilio, evalúa el espacio y te entrega un presupuesto detallado y sin sorpresas.',
    color: 'bg-teal-600',
    light: 'bg-teal-50 text-teal-600',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Instalación / Reparación',
    description:
      'Realizamos el trabajo con materiales de calidad. Al finalizar te entregamos garantía escrita del servicio.',
    color: 'bg-green-600',
    light: 'bg-green-50 text-green-600',
  },
];

export default function ProcessSteps() {
  return (
    <section id="proceso" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
            ¿Cómo trabajamos?
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple, rápido y sin vueltas
          </h2>
          <p className="mt-2 text-slate-500 text-sm md:text-base max-w-xl mx-auto">
            En solo 3 pasos tu equipo estará funcionando a la perfección.
          </p>
        </div>

        {/* Mobile: vertical list with connector. Desktop: horizontal grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-0 md:gap-8 relative">
          {/* Desktop horizontal connector */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200" />

          {steps.map(({ number, icon: Icon, title, description, color, light }, i) => (
            <div key={title} className="relative flex md:flex-col md:items-center md:text-center gap-5 md:gap-4">

              {/* Mobile vertical connector line */}
              {i < steps.length - 1 && (
                <div className="md:hidden absolute left-[26px] top-[56px] w-0.5 h-[calc(100%-32px)] bg-slate-200" />
              )}

              {/* Icon bubble */}
              <div className={`relative w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl ${color} flex items-center justify-center shadow-lg z-10 shrink-0`}>
                <Icon size={22} className="text-white md:hidden" />
                <Icon size={30} className="text-white hidden md:block" />
                <span className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-white border-2 border-slate-100 rounded-full text-xs font-bold text-slate-600 flex items-center justify-center shadow-sm">
                  {i + 1}
                </span>
              </div>

              {/* Text — mobile: left aligned, desktop: centered */}
              <div className="pb-8 md:pb-0 flex-1 md:flex-none">
                <div className={`inline-block text-xs font-bold px-2 py-0.5 rounded-md mb-1.5 ${light}`}>
                  Paso {number}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1.5">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
