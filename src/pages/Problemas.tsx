import { AlertTriangle, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problemas } from '@/lib/data'

export default function Problemas() {
  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <header className="pt-2">
        <h1 className="text-3xl font-bold text-enghub-beige flex items-center gap-3 tracking-tight">
          <div className="bg-enghub-orange/20 p-2 rounded-xl">
            <AlertTriangle className="w-8 h-8 text-enghub-orange" />
          </div>
          Modo Alertas
        </h1>
        <p className="text-enghub-skyblue font-medium mt-3">[Descrição técnica — pendente]</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
        {problemas.map((p) => (
          <Link
            key={p.id}
            to={`/normas/${p.normaId}`}
            className="group relative bg-enghub-beige p-6 rounded-2xl border-l-4 border-enghub-orange overflow-hidden hover:shadow-[0_8px_30px_rgba(230,126,34,0.15)] transition-all active:scale-[0.98]"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-enghub-orange/10 p-3 rounded-xl shrink-0">
                  <AlertTriangle className="w-6 h-6 text-enghub-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-enghub-navy leading-tight mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-enghub-navy/70 font-medium leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-enghub-navy/10 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-enghub-navy text-enghub-beige text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm group-hover:bg-enghub-teal transition-colors">
                  {p.normaCode}
                </div>
                <div className="text-enghub-orange text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
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
