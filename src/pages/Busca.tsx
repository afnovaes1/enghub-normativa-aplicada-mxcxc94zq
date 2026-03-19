import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search, History, TrendingUp, BookOpen, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { normas } from '@/lib/data'

export default function Busca() {
  const [query, setQuery] = useState('')

  const trendings = ['recalque', 'fissura', 'SPT', 'corrosão']
  const history = ['NBR 6122', 'cobertura de armadura']

  const results =
    query.length > 2
      ? normas.filter(
          (n) =>
            n.title.toLowerCase().includes(query.toLowerCase()) ||
            n.code.toLowerCase().includes(query.toLowerCase()) ||
            n.blocks.erros.content.toLowerCase().includes(query.toLowerCase()) ||
            n.blocks.praticas.content.toLowerCase().includes(query.toLowerCase()),
        )
      : []

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="sticky top-0 bg-enghub-beige pt-2 pb-4 z-10 -mx-4 px-4 md:-mx-0 md:px-0">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-enghub-teal w-6 h-6" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-16 bg-white border-none shadow-md rounded-2xl pl-14 pr-4 text-lg text-enghub-navy font-semibold placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-enghub-teal transition-shadow"
            placeholder="Qual é a sua dúvida técnica?"
          />
        </div>
      </div>

      {!query && (
        <div className="space-y-10 pt-4">
          <section>
            <h3 className="text-xs font-bold text-slate-400 flex items-center gap-2 mb-4 uppercase tracking-widest">
              <TrendingUp className="w-4 h-4" /> Tópicos em Alta
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {trendings.map((t) => (
                <button
                  key={t}
                  onClick={() => setQuery(t)}
                  className="px-4 py-2.5 bg-white border border-slate-200 text-enghub-navy rounded-xl text-sm font-bold hover:border-enghub-teal hover:text-enghub-teal hover:shadow-sm transition-all"
                >
                  {t}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold text-slate-400 flex items-center gap-2 mb-4 uppercase tracking-widest">
              <History className="w-4 h-4" /> Buscas Recentes
            </h3>
            <div className="space-y-2 bg-white rounded-2xl border border-slate-100 p-2 shadow-sm">
              {history.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 text-slate-600 px-4 py-3 cursor-pointer hover:bg-slate-50 rounded-xl hover:text-enghub-navy font-semibold transition-colors"
                  onClick={() => setQuery(h)}
                >
                  <History className="w-4 h-4 text-slate-300" /> {h}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {query && results.length > 0 && (
        <div className="space-y-4 pt-2 animate-fade-in-up">
          <h3 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">
            Resultados Encontrados
          </h3>
          {results.map((n) => (
            <Link
              key={n.id}
              to={`/normas/${n.id}`}
              className="block bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-enghub-teal/40 transition-all active:scale-[0.98]"
            >
              <div className="flex items-start gap-4">
                <div className="bg-enghub-teal/10 p-3 rounded-xl shrink-0 mt-1">
                  <BookOpen className="w-6 h-6 text-enghub-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-enghub-navy">{n.code}</h4>
                  <p className="text-sm font-medium text-slate-500 mb-3">{n.title}</p>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[13px] text-slate-600 font-medium flex gap-2 items-start">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-enghub-orange" />
                    <span className="line-clamp-2 leading-relaxed">
                      Trecho da norma: "...{n.blocks.erros.content}..."
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {query && query.length > 2 && results.length === 0 && (
        <div className="text-center py-16 text-slate-500 animate-fade-in">
          <Search className="w-16 h-16 mx-auto text-slate-200 mb-4" />
          <p className="font-bold text-xl text-enghub-navy mb-1">Nenhum resultado</p>
          <p className="text-sm font-medium">
            Tente usar palavras-chave mais genéricas (ex: "fissura").
          </p>
        </div>
      )}
    </div>
  )
}
