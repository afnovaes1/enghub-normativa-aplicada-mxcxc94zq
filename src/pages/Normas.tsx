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
        <h1 className="text-3xl font-bold text-enghub-beige tracking-tight flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-enghub-orange" />
          Biblioteca de Normas
        </h1>
      </header>

      <div className="relative sticky top-0 z-10 py-2 bg-enghub-navy -mx-4 px-4 md:mx-0 md:px-0">
        <Search className="absolute left-8 md:left-4 top-1/2 -translate-y-1/2 text-enghub-orange w-5 h-5" />
        <Input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full h-14 bg-enghub-navy-dark border-transparent focus-visible:ring-enghub-teal shadow-sm rounded-2xl pl-12 pr-4 text-enghub-beige placeholder:text-enghub-skyblue font-medium"
          placeholder="Buscar norma..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {filtered.map((n) => (
          <Link
            key={n.id}
            to={`/normas/${n.id}`}
            className="bg-enghub-beige p-6 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] group flex flex-col justify-between min-h-[140px]"
          >
            <div>
              <div className="inline-flex items-center px-2.5 py-1 bg-enghub-navy/5 text-enghub-navy text-[11px] uppercase tracking-wider font-bold rounded-md mb-3">
                {n.category}
              </div>
              <h2 className="text-xl font-bold text-enghub-navy mb-1">
                {n.code} - {n.title}
              </h2>
            </div>
            <div className="flex items-center justify-end text-enghub-orange text-sm font-bold mt-6 pt-4 border-t border-enghub-navy/10 group-hover:translate-x-1 transition-transform">
              Acessar Detalhes <ChevronRight className="w-4 h-4 text-enghub-orange ml-1" />
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-enghub-skyblue">
            <BookOpen className="w-12 h-12 text-enghub-orange/80 mx-auto mb-3" />
            <p className="font-semibold text-lg text-enghub-beige">Nenhuma norma encontrada</p>
          </div>
        )}
      </div>
    </div>
  )
}
