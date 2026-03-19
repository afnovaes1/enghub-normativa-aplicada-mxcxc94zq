import { Search, BookOpen, AlertTriangle, Lightbulb } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="pt-2">
        <h1 className="text-2xl font-bold text-enghub-beige tracking-tight">Painel de Decisão</h1>
      </header>

      <div className="relative cursor-pointer group" onClick={() => nav('/busca')}>
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-enghub-orange w-5 h-5 transition-colors" />
        <div className="w-full h-14 bg-enghub-navy-dark shadow-sm rounded-2xl flex items-center pl-12 pr-4 text-enghub-skyblue transition-all font-medium text-sm">
          Buscar NBRs, erros ou soluções...
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/normas"
          className="md:col-span-2 bg-enghub-beige p-6 rounded-2xl shadow-sm hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-all active:scale-[0.98] duration-200"
        >
          <div className="bg-enghub-orange/10 p-4 rounded-xl shrink-0">
            <BookOpen className="w-8 h-8 text-enghub-orange" />
          </div>
          <div className="flex-1">
            <div className="font-bold text-enghub-navy text-2xl">Acervo Normativo</div>
            <div className="text-sm text-enghub-navy/70 font-medium mt-1">
              [Acesso ao acervo normativo estruturado]
            </div>
          </div>
        </Link>

        <Link
          to="/problemas"
          className="bg-enghub-beige p-5 rounded-2xl shadow-sm hover:shadow-md flex items-center gap-4 transition-all active:scale-[0.98] duration-200"
        >
          <div className="bg-enghub-orange/10 p-3.5 rounded-xl">
            <AlertTriangle className="w-6 h-6 text-enghub-orange" />
          </div>
          <div>
            <div className="font-bold text-enghub-navy text-lg">Erros que custam caro</div>
          </div>
        </Link>

        <Link
          to="/busca"
          className="bg-enghub-beige p-5 rounded-2xl shadow-sm hover:shadow-md flex items-center gap-4 transition-all active:scale-[0.98] duration-200"
        >
          <div className="bg-enghub-orange/10 p-3.5 rounded-xl">
            <Search className="w-6 h-6 text-enghub-orange" />
          </div>
          <div>
            <div className="font-bold text-enghub-navy text-lg">Busca Global</div>
          </div>
        </Link>
      </div>

      <section className="pt-2">
        <h2 className="text-lg font-bold text-enghub-beige mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-enghub-orange" />
          Destaques
        </h2>
        <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar snap-x">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="shrink-0 w-72 bg-enghub-beige p-5 rounded-2xl shadow-sm snap-center flex flex-col justify-between border-l-4 border-l-enghub-navy-dark"
            >
              <div>
                <div className="text-[10px] font-bold text-enghub-navy/60 mb-2 tracking-widest uppercase bg-enghub-navy/5 inline-block px-2 py-1 rounded">
                  [Categoria — aguardando]
                </div>
                <h3 className="font-bold text-enghub-navy text-base leading-tight mb-2">
                  [Título do destaque — será definido]
                </h3>
                <p className="text-sm text-enghub-navy/70 line-clamp-2 leading-relaxed">
                  [Conteúdo técnico — aguardando inserção]
                </p>
              </div>
              <div className="text-enghub-orange text-xs font-bold mt-4">Acessar &rarr;</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
