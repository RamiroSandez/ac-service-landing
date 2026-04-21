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
    <section id="proceso" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            ¿Cómo trabajamos?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple, rápido y sin vueltas
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            En solo 3 pasos tu equipo estará funcionando a la perfección.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 -z-0" />

          {steps.map(({ number, icon: Icon, title, description, color, light }, i) => (
            <div key={title} className="relative flex flex-col items-center text-center gap-4">
              {/* Step number bubble */}
              <div className={`relative w-20 h-20 rounded-2xl ${color} flex items-center justify-center shadow-lg z-10`}>
                <Icon size={30} className="text-white" />
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-slate-100 rounded-full text-xs font-bold text-slate-600 flex items-center justify-center shadow-sm">
                  {i + 1}
                </span>
              </div>

              <div>
                <div className={`inline-block text-xs font-bold px-2 py-0.5 rounded-md mb-2 ${light}`}>
                  Paso {number}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
