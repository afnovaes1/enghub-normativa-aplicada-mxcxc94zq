import { Search, BookOpen, AlertTriangle, Lightbulb } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="pt-2">
        <h1 className="text-2xl font-bold text-enghub-navy tracking-tight">Olá, Engenheiro</h1>
        <p className="text-slate-600 font-medium mt-1">O que vamos resolver hoje?</p>
      </header>

      <div className="relative" onClick={() => nav('/busca')}>
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-enghub-teal w-5 h-5" />
        <div className="w-full h-14 bg-white rounded-2xl flex items-center pl-12 pr-4 text-slate-400 shadow-sm border border-slate-100 cursor-text font-medium text-sm">
          Buscar NBRs, patologias ou soluções...
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/normas"
          className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all active:scale-[0.98] duration-200"
        >
          <div className="bg-enghub-teal/10 p-3.5 rounded-xl text-enghub-teal">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-enghub-navy text-lg">Normas</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Biblioteca técnica</div>
          </div>
        </Link>

        <Link
          to="/problemas"
          className="bg-white p-5 rounded-2xl shadow-[0_0_20px_rgba(86,124,141,0.15)] border border-enghub-teal/30 flex items-center gap-4 hover:shadow-[0_0_25px_rgba(86,124,141,0.25)] transition-all active:scale-[0.98] duration-200"
        >
          <div className="bg-red-50 p-3.5 rounded-xl text-red-500 animate-pulse">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-enghub-navy text-lg">Modo Alerta</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Patologias e riscos</div>
          </div>
        </Link>

        <Link
          to="/busca"
          className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-all active:scale-[0.98] duration-200"
        >
          <div className="bg-enghub-skyblue/30 p-3.5 rounded-xl text-enghub-navy">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-enghub-navy text-lg">Busca Global</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Pesquisa rápida</div>
          </div>
        </Link>
      </div>

      <section className="pt-2">
        <h2 className="text-lg font-bold text-enghub-navy mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-enghub-orange" />
          Destaques Críticos
        </h2>
        <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar snap-x">
          <div className="shrink-0 w-72 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 snap-center flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold text-red-500 mb-2 tracking-widest uppercase bg-red-50 inline-block px-2 py-1 rounded">
                Alta Incidência
              </div>
              <h3 className="font-bold text-enghub-navy text-base leading-tight mb-2">
                Recalque Diferencial em Sapatas
              </h3>
              <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                Avaliação incorreta de laudos de SPT pode levar a trincas estruturais graves.
              </p>
            </div>
            <div className="text-enghub-teal text-xs font-bold mt-4">Ver NBR 6122 &rarr;</div>
          </div>

          <div className="shrink-0 w-72 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 snap-center flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold text-orange-500 mb-2 tracking-widest uppercase bg-orange-50 inline-block px-2 py-1 rounded">
                Atenção em Campo
              </div>
              <h3 className="font-bold text-enghub-navy text-base leading-tight mb-2">
                Desempenho Acústico (Ruído)
              </h3>
              <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                Espessura de laje não garante isolamento de impacto. Exige piso flutuante.
              </p>
            </div>
            <div className="text-enghub-teal text-xs font-bold mt-4">Ver NBR 15575 &rarr;</div>
          </div>

          <div className="shrink-0 w-72 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 snap-center flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold text-blue-500 mb-2 tracking-widest uppercase bg-blue-50 inline-block px-2 py-1 rounded">
                Revisão Típica
              </div>
              <h3 className="font-bold text-enghub-navy text-base leading-tight mb-2">
                Golpe de Aríete na Hidráulica
              </h3>
              <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                Fechamento rápido de registros exige válvulas redutoras ou pulmões de ar.
              </p>
            </div>
            <div className="text-enghub-teal text-xs font-bold mt-4">Ver NBR 5626 &rarr;</div>
          </div>
        </div>
      </section>
    </div>
  )
}
