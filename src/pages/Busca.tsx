import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search, History, TrendingUp, BookOpen, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { normas } from '@/lib/data'

export default function Busca() {
  const [query, setQuery] = useState('')

  const trendings = ['recalque', 'fissura', 'SPT', 'trinca']
  const history = ['NBR 6122', 'NBR 6118']

  const results =
    query.length > 2
      ? normas.filter(
          (n) =>
            n.title.toLowerCase().includes(query.toLowerCase()) ||
            n.code.toLowerCase().includes(query.toLowerCase()) ||
            n.category.toLowerCase().includes(query.toLowerCase()),
        )
      : []

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="sticky top-0 bg-enghub-navy pt-2 pb-4 z-10 -mx-4 px-4 md:-mx-0 md:px-0">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-enghub-teal w-6 h-6" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-16 bg-enghub-navy border border-enghub-teal/30 focus-visible:ring-enghub-teal shadow-md rounded-2xl pl-14 pr-4 text-lg text-enghub-beige font-semibold placeholder:text-enghub-skyblue/50 transition-shadow"
            placeholder="Qual é a sua dúvida técnica?"
          />
        </div>
      </div>

      {!query && (
        <div className="space-y-10 pt-4">
          <section>
            <h3 className="text-xs font-bold text-enghub-skyblue flex items-center gap-2 mb-4 uppercase tracking-widest">
              <TrendingUp className="w-4 h-4" /> Tópicos em Alta
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {trendings.map((t) => (
                <button
                  key={t}
                  onClick={() => setQuery(t)}
                  className="px-4 py-2.5 bg-enghub-beige border border-transparent text-enghub-navy rounded-xl text-sm font-bold hover:border-enghub-orange hover:text-enghub-orange transition-all"
                >
                  {t}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold text-enghub-skyblue flex items-center gap-2 mb-4 uppercase tracking-widest">
              <History className="w-4 h-4" /> Buscas Recentes
            </h3>
            <div className="space-y-2 bg-enghub-beige rounded-2xl p-2 shadow-sm">
              {history.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 text-enghub-navy/70 px-4 py-3 cursor-pointer hover:bg-enghub-navy/5 rounded-xl hover:text-enghub-navy font-semibold transition-colors"
                  onClick={() => setQuery(h)}
                >
                  <History className="w-4 h-4 text-enghub-navy/40" /> {h}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {query && results.length > 0 && (
        <div className="space-y-4 pt-2 animate-fade-in-up">
          <h3 className="text-xs font-bold text-enghub-skyblue mb-4 uppercase tracking-widest">
            Resultados Encontrados
          </h3>
          {results.map((n) => (
            <Link
              key={n.id}
              to={`/normas/${n.id}`}
              className="block bg-enghub-beige p-5 rounded-2xl shadow-sm border border-transparent hover:border-enghub-teal/50 transition-all active:scale-[0.98]"
            >
              <div className="flex items-start gap-4">
                <div className="bg-enghub-navy/10 p-3 rounded-xl shrink-0 mt-1">
                  <BookOpen className="w-6 h-6 text-enghub-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-enghub-navy">{n.code}</h4>
                  <p className="text-sm font-medium text-enghub-navy/70 mb-3">{n.title}</p>
                  <div className="bg-enghub-navy/5 p-3 rounded-xl text-[13px] text-enghub-navy/80 font-medium flex gap-2 items-start">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-enghub-orange" />
                    <span className="line-clamp-2 leading-relaxed">
                      [Resumo do conteúdo — será definido]
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {query && query.length > 2 && results.length === 0 && (
        <div className="text-center py-16 text-enghub-skyblue animate-fade-in">
          <Search className="w-16 h-16 mx-auto text-enghub-skyblue/30 mb-4" />
          <p className="font-bold text-xl text-enghub-beige mb-1">Nenhum resultado</p>
          <p className="text-sm font-medium text-enghub-skyblue/80">
            Tente usar palavras-chave mais genéricas.
          </p>
        </div>
      )}
    </div>
  )
}
