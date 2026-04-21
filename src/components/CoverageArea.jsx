import { MapPin, CheckCircle2 } from 'lucide-react';

const zones = [
  'CABA (todas las comunas)',
  'San Isidro · Vicente López',
  'Tigre · San Fernando',
  'Quilmes · Avellaneda',
  'Lomas de Zamora · Lanús',
  'La Matanza · Morón',
  'Tres de Febrero · Hurlingham',
  'Consultar otras zonas',
];

export default function CoverageArea() {
  return (
    <section id="cobertura" className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <div>
            <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Zona de cobertura
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Atendemos en CABA<br />y alrededores
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Contamos con técnicos distribuidos en toda la ciudad y el conurbano bonaerense.
              Coordinamos tu visita en el día o el turno que más te convenga.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {zones.map((z) => (
                <div key={z} className="flex items-center gap-2.5 text-slate-300 text-sm">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                  {z}
                </div>
              ))}
            </div>
          </div>

          {/* Visual map placeholder */}
          <div className="relative">
            <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-64 gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin size={28} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">Buenos Aires</h3>
              <p className="text-slate-400 text-sm max-w-xs">
                Ciudad Autónoma y Gran Buenos Aires
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {['CABA', 'Zona Norte', 'Zona Sur', 'Zona Oeste'].map((tag) => (
                  <span key={tag} className="bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              {/* Animated ping dot */}
              <div className="absolute top-8 right-10 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
