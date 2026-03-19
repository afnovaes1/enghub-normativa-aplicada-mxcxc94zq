import { AlertTriangle, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problemas } from '@/lib/data'

export default function Problemas() {
  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <header className="pt-2">
        <h1 className="text-3xl font-bold text-enghub-navy flex items-center gap-3 tracking-tight">
          <div className="bg-red-50 p-2 rounded-xl border border-red-100">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          Modo Alertas
        </h1>
        <p className="text-slate-600 font-medium mt-3">
          Diagnóstico rápido para patologias e erros críticos em campo, com links diretos para a
          norma aplicável.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
        {problemas.map((p) => (
          <Link
            key={p.id}
            to={`/normas/${p.normaId}`}
            className="group relative bg-white p-6 rounded-2xl border border-slate-200 overflow-hidden hover:border-red-200 hover:shadow-[0_8px_30px_rgb(239,68,68,0.12)] transition-all active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-100/50 p-3 rounded-xl shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-enghub-navy leading-tight mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-enghub-navy text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm group-hover:bg-enghub-teal transition-colors">
                  {p.normaCode}
                </div>
                <div className="text-enghub-teal text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                  Ver Solução <ChevronRight className="w-4 h-4 ml-0.5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
