import { Search, BookOpen, AlertTriangle, Lightbulb } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="pt-2">
        <h1 className="text-2xl font-bold text-enghub-beige tracking-tight">Olá, Engenheiro</h1>
        <p className="text-enghub-skyblue font-medium mt-1">O que vamos resolver hoje?</p>
      </header>

      <div className="relative cursor-pointer group" onClick={() => nav('/busca')}>
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-enghub-teal w-5 h-5 group-hover:text-enghub-orange transition-colors" />
        <div className="w-full h-14 bg-enghub-navy border border-enghub-teal/30 hover:border-enghub-teal rounded-2xl flex items-center pl-12 pr-4 text-enghub-skyblue shadow-sm transition-all font-medium text-sm">
          Buscar NBRs, patologias ou soluções...
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/problemas"
          className="md:col-span-2 bg-enghub-beige p-6 rounded-2xl shadow-lg border-2 border-enghub-orange/50 flex items-center gap-5 hover:border-enghub-orange hover:shadow-[0_0_30px_rgba(230,126,34,0.3)] transition-all active:scale-[0.98] duration-200"
        >
          <div className="bg-enghub-orange/20 p-4 rounded-xl text-enghub-orange animate-pulse">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <div className="font-bold text-enghub-navy text-2xl">Problemas / Alertas</div>
            <div className="text-sm text-enghub-navy/60 font-medium mt-1">
              [Descrição técnica — pendente]
            </div>
          </div>
        </Link>

        <Link
          to="/normas"
          className="bg-enghub-beige p-5 rounded-2xl shadow-sm border border-transparent hover:border-enghub-teal/30 flex items-center gap-4 transition-all active:scale-[0.98] duration-200"
        >
          <div className="bg-enghub-navy/10 p-3.5 rounded-xl text-enghub-navy">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-enghub-navy text-lg">Normas</div>
            <div className="text-xs text-enghub-navy/60 font-medium mt-0.5">
              [Descrição técnica — pendente]
            </div>
          </div>
        </Link>

        <Link
          to="/busca"
          className="bg-enghub-beige p-5 rounded-2xl shadow-sm border border-transparent hover:border-enghub-teal/30 flex items-center gap-4 transition-all active:scale-[0.98] duration-200"
        >
          <div className="bg-enghub-navy/10 p-3.5 rounded-xl text-enghub-navy">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-enghub-navy text-lg">Busca Global</div>
            <div className="text-xs text-enghub-navy/60 font-medium mt-0.5">
              [Descrição técnica — pendente]
            </div>
          </div>
        </Link>
      </div>

      <section className="pt-2">
        <h2 className="text-lg font-bold text-enghub-beige mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-enghub-orange" />
          Destaques Críticos
        </h2>
        <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar snap-x">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="shrink-0 w-72 bg-enghub-beige p-5 rounded-2xl shadow-sm snap-center flex flex-col justify-between border-l-4 border-l-enghub-orange"
            >
              <div>
                <div className="text-[10px] font-bold text-enghub-navy/60 mb-2 tracking-widest uppercase bg-enghub-navy/5 inline-block px-2 py-1 rounded">
                  [Título da seção]
                </div>
                <h3 className="font-bold text-enghub-navy text-base leading-tight mb-2">
                  [Resumo do conteúdo — será definido]
                </h3>
                <p className="text-sm text-enghub-navy/70 line-clamp-2 leading-relaxed">
                  [Descrição técnica — pendente]
                </p>
              </div>
              <div className="text-enghub-teal text-xs font-bold mt-4">
                [Descrição técnica — pendente] &rarr;
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
