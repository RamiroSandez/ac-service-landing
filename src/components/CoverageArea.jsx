import { MapPin, CheckCircle2 } from 'lucide-react';

const zones = [
  'Málaga capital (todos los barrios)',
  'Torremolinos · Benalmádena',
  'Marbella · Estepona',
  'Fuengirola · Mijas',
  'Nerja · Torre del Mar',
  'Antequera · Vélez-Málaga',
  'Ronda · Coin',
  'Consultar otras zonas',
];

export default function CoverageArea() {
  return (
    <section id="cobertura" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Text side */}
          <div>
            <span className="inline-block text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
              Zona de cobertura
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              Atendemos en Málaga<br />y toda la provincia
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-7">
              Contamos con técnicos distribuidos por toda la provincia de Málaga.
              Coordinamos tu visita el mismo día o en el turno que más te convenga.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {zones.map((z) => (
                <div key={z} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                  {z}
                </div>
              ))}
            </div>
          </div>

          {/* Visual map card */}
          <div className="relative">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl md:rounded-3xl p-7 md:p-8 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin size={26} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">Málaga, España</h3>
              <p className="text-slate-400 text-sm max-w-xs">
                Capital y provincia de Málaga
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Málaga capital', 'Costa del Sol', 'Axarquía', 'Serranía'].map((tag) => (
                  <span key={tag} className="bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              {/* Animated ping dot */}
              <div className="absolute top-6 right-8 flex h-4 w-4">
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
