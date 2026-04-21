import { useState } from 'react';
import { Calculator, MessageCircle, ChevronDown } from 'lucide-react';

const WHATSAPP_NUMBER = '5491112345678';

const floorTypes = [
  { label: 'Piso bajo (planta baja)', factor: 1.0 },
  { label: 'Piso intermedio', factor: 1.0 },
  { label: 'Último piso (mucho calor)', factor: 1.2 },
];

const orientations = [
  { label: 'Norte / Noreste', factor: 1.15 },
  { label: 'Este / Sur', factor: 1.0 },
  { label: 'Oeste (sol tarde)', factor: 1.2 },
];

function btuFromMeters(m2, floorFactor, orientFactor) {
  const base = m2 * 600;
  return Math.round((base * floorFactor * orientFactor) / 100) * 100;
}

function recommendedSplit(btu) {
  if (btu <= 9000)  return '2.900 fg / 9.000 BTU';
  if (btu <= 12000) return '3.500 fg / 12.000 BTU';
  if (btu <= 18000) return '5.000 fg / 18.000 BTU';
  if (btu <= 24000) return '7.000 fg / 24.000 BTU';
  return '9.000+ fg / 36.000 BTU';
}

export default function BTUCalculator() {
  const [m2, setM2] = useState('');
  const [floor, setFloor] = useState(0);
  const [orient, setOrient] = useState(0);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const val = parseFloat(m2);
    if (!val || val <= 0) return;
    const btu = btuFromMeters(val, floorTypes[floor].factor, orientations[orient].factor);
    setResult({ btu, split: recommendedSplit(btu) });
  };

  const whatsappMsg = result
    ? encodeURIComponent(
        `Hola, usé la calculadora y necesito un equipo de ${result.split} para ${m2} m². ¿Me pueden dar un presupuesto?`
      )
    : encodeURIComponent('Hola, necesito asesoramiento para elegir un aire acondicionado');

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Herramienta gratuita
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculadora de BTU
          </h2>
          <p className="mt-3 text-slate-500 max-w-md mx-auto">
            Descubrí qué potencia necesita tu ambiente en segundos.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {/* m2 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Superficie (m²)
              </label>
              <input
                type="number"
                min="1"
                max="200"
                placeholder="Ej: 20"
                value={m2}
                onChange={(e) => setM2(e.target.value)}
                className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              />
            </div>

            {/* Floor */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Tipo de piso
              </label>
              <div className="relative">
                <select
                  value={floor}
                  onChange={(e) => setFloor(Number(e.target.value))}
                  className="w-full appearance-none border border-slate-200 bg-white rounded-xl px-4 py-3 text-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition pr-9 cursor-pointer"
                >
                  {floorTypes.map((f, i) => (
                    <option key={i} value={i}>{f.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Orientation */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Orientación
              </label>
              <div className="relative">
                <select
                  value={orient}
                  onChange={(e) => setOrient(Number(e.target.value))}
                  className="w-full appearance-none border border-slate-200 bg-white rounded-xl px-4 py-3 text-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition pr-9 cursor-pointer"
                >
                  {orientations.map((o, i) => (
                    <option key={i} value={i}>{o.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            <Calculator size={18} />
            Calcular potencia necesaria
          </button>

          {/* Result */}
          {result && (
            <div className="mt-6 bg-white border border-blue-100 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 animate-fade-in-up">
              <div className="flex-1">
                <div className="text-xs text-slate-400 font-medium mb-1">Potencia recomendada</div>
                <div className="text-2xl font-extrabold text-blue-600">{result.btu.toLocaleString()} BTU</div>
                <div className="text-sm text-slate-600 mt-1">Equipo sugerido: <span className="font-semibold">{result.split}</span></div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25d366] hover:bg-[#20c05c] text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all shrink-0"
              >
                <MessageCircle size={16} />
                Pedir presupuesto
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
