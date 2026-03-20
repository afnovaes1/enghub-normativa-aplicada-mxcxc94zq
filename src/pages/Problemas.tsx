import { useState } from 'react'
import { AlertTriangle, ChevronRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { problemas } from '@/lib/data'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', title: 'Todos', subtitle: 'Os Módulos' },
  { id: '6120', title: 'Cargas', subtitle: 'Módulo NBR 6120' },
  { id: '6122', title: 'Fundações', subtitle: 'Módulo NBR 6122' },
  { id: '6118', title: 'Estruturas', subtitle: 'Módulo NBR 6118' },
  { id: '15575', title: 'Desempenho', subtitle: 'Módulo NBR 15575' },
]

export default function Problemas() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredProblemas =
    activeCategory === 'all' ? problemas : problemas.filter((p) => p.normaId === activeCategory)

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <header className="pt-2">
        <h1 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-enghub-beige">
          <div className="rounded-xl bg-enghub-navy-dark p-2">
            <AlertTriangle className="h-8 w-8 text-enghub-orange" />
          </div>
          Erros que custam caro
        </h1>
        <p className="mt-3 max-w-2xl leading-relaxed font-medium text-enghub-skyblue">
          Identifique falhas críticas de execução e interpretação de projetos, com foco direto no
          que mais gera custo e retrabalho na obra.
        </p>
      </header>

      <div className="mb-4 mt-8 flex flex-wrap gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg border bg-enghub-navy-dark px-3 py-2 text-xs font-bold tracking-widest uppercase shadow-sm outline-none transition-all',
                isActive
                  ? 'border-enghub-orange/50 text-enghub-orange ring-1 ring-enghub-orange/20'
                  : 'border-enghub-skyblue/20 text-enghub-skyblue hover:border-enghub-orange/30 hover:text-enghub-orange',
              )}
            >
              <BookOpen className="h-4 w-4" />
              <span>{cat.title}</span>
              {cat.subtitle && (
                <>
                  <span
                    className={cn(
                      'h-1.5 w-1.5 rounded-full',
                      isActive ? 'bg-enghub-orange' : 'bg-enghub-skyblue/50',
                    )}
                  ></span>
                  <span>{cat.subtitle}</span>
                </>
              )}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {filteredProblemas.map((p) => {
          const match = p.title.match(/ERRO QUE CUSTA CARO \d+:\s*(.+)/)
          const titleText = match ? match[1] : p.title
          const numMatch = p.title.match(/ERRO QUE CUSTA CARO (\d+):/)
          const titleNum = numMatch ? numMatch[1] : ''

          return (
            <Link
              key={p.id}
              to={`/problemas/${p.id}`}
              className="group relative rounded-2xl bg-enghub-beige p-6 shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex shrink-0 items-center justify-center rounded-xl bg-enghub-orange/10 p-3 text-2xl">
                    🚨
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg leading-tight font-bold text-enghub-navy">
                      {titleNum && <span className="mr-1 text-enghub-orange">#{titleNum}</span>}
                      {titleText}
                    </h3>
                    <p className="line-clamp-2 leading-relaxed font-medium text-sm text-enghub-navy/70">
                      {p.contexto}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-enghub-navy/10 pt-4">
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-enghub-navy-dark px-3 py-1.5 text-[11px] font-bold tracking-wider text-enghub-skyblue uppercase shadow-sm">
                    {p.normaCode}
                  </div>
                  <div className="flex items-center text-sm font-bold text-enghub-orange transition-transform group-hover:translate-x-1">
                    Acessar detalhes <ChevronRight className="ml-0.5 h-4 w-4 text-enghub-orange" />
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
        {filteredProblemas.length === 0 && (
          <div className="col-span-full py-12 text-center text-enghub-skyblue">
            <AlertTriangle className="mx-auto mb-3 h-12 w-12 text-enghub-orange/80" />
            <p className="text-lg font-semibold text-enghub-beige">
              Nenhum erro catalogado para este filtro.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
