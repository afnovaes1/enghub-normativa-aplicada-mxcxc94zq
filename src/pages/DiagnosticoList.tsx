import { Activity, ChevronRight, FileSearch } from 'lucide-react'
import { Link } from 'react-router-dom'
import { diagnosticos } from '@/lib/diagnostico'

export default function DiagnosticoList() {
  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <header className="pt-2">
        <h1 className="text-3xl font-bold text-enghub-beige flex items-center gap-3 tracking-tight">
          <div className="bg-enghub-navy-dark p-2 rounded-xl border border-enghub-orange/20 shadow-sm">
            <Activity className="w-8 h-8 text-enghub-orange" />
          </div>
          Diagnóstico Técnico
        </h1>
        <p className="text-enghub-skyblue font-medium mt-3 leading-relaxed max-w-2xl">
          Acesse estudos de caso reais de engenharia e estratégias de diagnóstico clínico para
          patologias, focando em interpretação estrutural e geotécnica.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 mt-8">
        {diagnosticos.map((d) => (
          <Link
            key={d.id}
            to={`/diagnostico/${d.id}`}
            className="group relative bg-enghub-beige p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] border-l-4 border-l-transparent hover:border-l-enghub-orange"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-enghub-orange/10 p-3 rounded-xl shrink-0">
                  <FileSearch className="w-6 h-6 text-enghub-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-enghub-navy leading-tight mb-1">
                    {d.title}
                  </h3>
                  <p className="text-sm text-enghub-navy/70 font-medium">
                    Estudo de caso estruturado
                  </p>
                </div>
              </div>
              <div className="flex items-center text-enghub-orange text-sm font-bold md:pl-4 md:border-l border-enghub-navy/10 pt-4 md:pt-0 border-t md:border-t-0 mt-2 md:mt-0 group-hover:translate-x-1 transition-transform shrink-0">
                Acessar diagnóstico <ChevronRight className="w-4 h-4 text-enghub-orange ml-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
