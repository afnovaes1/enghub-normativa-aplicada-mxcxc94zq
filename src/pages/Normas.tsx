import { BookOpen, Search, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { normas } from '@/lib/data'
import { useState } from 'react'
import { Input } from '@/components/ui/input'

export default function Normas() {
  const [filter, setFilter] = useState('')

  const filtered = normas.filter(
    (n) =>
      n.code.toLowerCase().includes(filter.toLowerCase()) ||
      n.title.toLowerCase().includes(filter.toLowerCase()) ||
      n.category.toLowerCase().includes(filter.toLowerCase()),
  )

  return (
    <div className="space-y-6 animate-fade-in pb-4">
      <header className="pt-2">
        <h1 className="text-3xl font-bold text-enghub-navy tracking-tight flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-enghub-teal" />
          Biblioteca
        </h1>
        <p className="text-slate-600 font-medium mt-2">
          Tradução prática das NBRs para decisões rápidas.
        </p>
      </header>

      <div className="relative sticky top-0 z-10 py-2 bg-enghub-beige -mx-4 px-4 md:mx-0 md:px-0">
        <Search className="absolute left-8 md:left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <Input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full h-14 bg-white border-none shadow-sm rounded-2xl pl-12 pr-4 text-enghub-navy placeholder:text-slate-400 font-medium"
          placeholder="Buscar por número, título ou categoria..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {filtered.map((n) => (
          <Link
            key={n.id}
            to={`/normas/${n.id}`}
            className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-enghub-teal/40 hover:shadow-lg transition-all active:scale-[0.98] group flex flex-col justify-between min-h-[180px]"
          >
            <div>
              <div className="inline-flex items-center px-2.5 py-1 bg-enghub-teal/10 text-enghub-teal text-[11px] uppercase tracking-wider font-bold rounded-md mb-3">
                {n.category}
              </div>
              <h2 className="text-xl font-bold text-enghub-navy mb-1.5">{n.code}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 font-medium">{n.title}</p>
            </div>
            <div className="flex items-center text-enghub-orange text-sm font-bold mt-auto pt-4 border-t border-slate-50 group-hover:translate-x-1 transition-transform">
              Ver aplicação prática <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-slate-500">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="font-semibold text-lg text-enghub-navy">Nenhuma norma encontrada</p>
            <p className="text-sm">Tente ajustar seus termos de busca.</p>
          </div>
        )}
      </div>
    </div>
  )
}
