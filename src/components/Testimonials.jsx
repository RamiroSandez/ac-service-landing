import { Star, Quote } from 'lucide-react';

const stats = [
  { value: '+12', label: 'Años de experiencia' },
  { value: '+500', label: 'Instalaciones' },
  { value: '4.9★', label: 'Calificación' },
  { value: '100%', label: 'Con garantía' },
];

const brands = ['Daikin', 'Mitsubishi', 'Fujitsu', 'LG', 'Samsung', 'Carrier'];

const testimonials = [
  {
    name: 'Ana M.',
    location: 'Centro, Málaga',
    text: 'Excelente servicio. Vinieron al día siguiente, instalaron el equipo en pocas horas y dejaron todo impecable. Muy recomendable.',
    stars: 5,
    initial: 'A',
    color: 'bg-blue-500',
  },
  {
    name: 'Carlos R.',
    location: 'Teatinos, Málaga',
    text: 'Llamé por una reparación urgente y me atendieron el mismo día. Diagnóstico preciso y precio justo. Ya los tengo agendados para el mantenimiento.',
    stars: 5,
    initial: 'C',
    color: 'bg-teal-500',
  },
  {
    name: 'Laura G.',
    location: 'Marbella, Málaga',
    text: 'Muy profesionales. Explicaron todo el proceso, me asesoraron sobre el equipo correcto para mi salón. Trabajo de primera calidad.',
    stars: 5,
    initial: 'L',
    color: 'bg-purple-500',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center bg-white rounded-2xl py-5 px-2 shadow-sm border border-slate-100">
              <div className="text-2xl md:text-3xl font-extrabold text-blue-600">{value}</div>
              <div className="text-xs md:text-sm text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
            Opiniones
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {testimonials.map(({ name, location, text, stars, initial, color }) => (
            <div key={name} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col gap-3">
              <Quote size={18} className="text-blue-200" />
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{text}</p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-50">
                <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {initial}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-slate-800 text-sm truncate">{name}</div>
                  <div className="text-xs text-slate-400 truncate">{location}</div>
                </div>
                <div className="ml-auto shrink-0">
                  <Stars count={stars} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="text-center">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-4">
            Trabajamos con las principales marcas
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {brands.map((b) => (
              <span
                key={b}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-white border border-slate-200 rounded-xl text-slate-500 text-xs md:text-sm font-medium shadow-sm"
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
