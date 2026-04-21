import { Wrench, Zap, Thermometer, Wind, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5491112345678';

const services = [
  {
    icon: Wind,
    title: 'Instalación',
    description:
      'Instalamos equipos split, multi-split y cassette de todas las marcas. Mano de obra prolija, cañería embutida o canaleta.',
    msg: 'Hola, necesito instalar un aire acondicionado',
    color: 'bg-blue-50 text-blue-600',
    border: 'hover:border-blue-200',
  },
  {
    icon: Wrench,
    title: 'Reparación',
    description:
      'Diagnóstico en el día y reparación de cualquier falla: no enfría, pierde agua, hace ruido o no enciende.',
    msg: 'Hola, necesito reparar mi aire acondicionado',
    color: 'bg-orange-50 text-orange-500',
    border: 'hover:border-orange-200',
  },
  {
    icon: Thermometer,
    title: 'Mantenimiento',
    description:
      'Limpieza profunda de filtros y serpentinas, desinfección antibacterial y revisión general para un funcionamiento óptimo.',
    msg: 'Hola, necesito hacer el mantenimiento de mi aire acondicionado',
    color: 'bg-teal-50 text-teal-600',
    border: 'hover:border-teal-200',
  },
  {
    icon: Zap,
    title: 'Carga de gas',
    description:
      'Recarga de gas refrigerante R22, R32 y R410A. Detección de pérdidas y sellado incluido en el servicio.',
    msg: 'Hola, necesito cargar gas en mi aire acondicionado',
    color: 'bg-purple-50 text-purple-600',
    border: 'hover:border-purple-200',
  },
];

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Lo que hacemos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Servicios de climatización
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Cubrimos todo lo que tu equipo necesita, desde la instalación inicial hasta el mantenimiento preventivo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description, msg, color, border }) => {
            const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
            return (
              <div
                key={title}
                className={`group flex flex-col bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${border}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${color}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{description}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[#25d366] font-semibold text-sm hover:gap-3 transition-all"
                >
                  <MessageCircle size={16} />
                  Consultar
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
