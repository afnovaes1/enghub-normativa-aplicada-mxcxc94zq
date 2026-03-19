import { AlertTriangle, ChevronRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problemas } from '@/lib/data'

export default function Problemas() {
  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <header className="pt-2">
        <h1 className="text-3xl font-bold text-enghub-beige flex items-center gap-3 tracking-tight">
          <div className="bg-enghub-navy-dark p-2 rounded-xl">
            <AlertTriangle className="w-8 h-8 text-enghub-orange" />
          </div>
          Erros que custam caro
        </h1>
        <p className="text-enghub-skyblue font-medium mt-3 leading-relaxed max-w-2xl">
          Identifique falhas críticas de execução e interpretação de projetos, com foco direto no
          que mais gera custo e retrabalho na obra.
        </p>
      </header>

      <div className="mt-8 mb-4 inline-flex items-center px-3 py-2 bg-enghub-navy-dark border border-enghub-teal/30 text-enghub-teal text-xs uppercase tracking-widest font-bold rounded-lg gap-2 shadow-sm">
        <BookOpen className="w-4 h-4" />
        <span>Fundações</span>
        <span className="w-1.5 h-1.5 rounded-full bg-enghub-teal"></span>
        <span>Módulo Especial NBR 6122</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {problemas.map((p) => {
          const match = p.title.match(/ERRO QUE CUSTA CARO (\d+):\s*(.+)/)
          const titleNum = match ? match[1] : ''
          const titleText = match ? match[2] : p.title

          return (
            <Link
              key={p.id}
              to={`/problemas/${p.id}`}
              className="group relative bg-enghub-beige p-6 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-enghub-orange/10 p-3 rounded-xl shrink-0 text-2xl flex items-center justify-center">
                    🚨
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-enghub-navy leading-tight mb-2">
                      {titleNum && <span className="text-enghub-orange mr-1">#{titleNum}</span>}
                      {titleText}
                    </h3>
                    <p className="text-sm text-enghub-navy/70 font-medium leading-relaxed line-clamp-2">
                      {p.contexto}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-enghub-navy/10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-enghub-navy-dark text-enghub-skyblue text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
                    {p.normaCode.split(' ')[0]} {p.normaCode.split(' ')[1]}
                  </div>
                  <div className="text-enghub-orange text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                    Acessar detalhes <ChevronRight className="w-4 h-4 text-enghub-orange ml-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
