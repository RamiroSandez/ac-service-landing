import { Star, Quote } from 'lucide-react';

const stats = [
  { value: '+12', label: 'Años de experiencia' },
  { value: '+500', label: 'Instalaciones realizadas' },
  { value: '4.9★', label: 'Calificación promedio' },
  { value: '100%', label: 'Garantía en trabajos' },
];

const brands = ['Samsung', 'LG', 'Carrier', 'Midea', 'Gree', 'Inverter Pro'];

const testimonials = [
  {
    name: 'Martina G.',
    location: 'Palermo, CABA',
    text: 'Excelente servicio. Vinieron al día siguiente, instalaron el equipo en pocas horas y dejaron todo impecable. Muy recomendable.',
    stars: 5,
    initial: 'M',
    color: 'bg-blue-500',
  },
  {
    name: 'Carlos R.',
    location: 'San Isidro, GBA',
    text: 'Llamé por una reparación urgente y me atendieron el mismo día. Diagnóstico preciso y precio justo. Ya los tengo agendados para el mantenimiento.',
    stars: 5,
    initial: 'C',
    color: 'bg-teal-500',
  },
  {
    name: 'Florencia M.',
    location: 'Villa Urquiza, CABA',
    text: 'Muy profesionales. Explicaron todo el proceso, me asesoraron sobre el equipo correcto para el tamaño de mi living. Trabajo de primera.',
    stars: 5,
    initial: 'F',
    color: 'bg-purple-500',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-600">{value}</div>
              <div className="text-sm text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Opiniones
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map(({ name, location, text, stars, initial, color }) => (
            <div key={name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
              <Quote size={20} className="text-blue-200" />
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{text}</p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {initial}
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{name}</div>
                  <div className="text-xs text-slate-400">{location}</div>
                </div>
                <div className="ml-auto">
                  <Stars count={stars} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="text-center">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-5">
            Trabajamos con las principales marcas
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((b) => (
              <span
                key={b}
                className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-500 text-sm font-medium shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
