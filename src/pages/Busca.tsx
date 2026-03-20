import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search, History, TrendingUp, BookOpen, AlertTriangle, Link2, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'
import { normas, problemas } from '@/lib/data'
import { diagnosticos } from '@/lib/diagnostico'

export default function Busca() {
  const [query, setQuery] = useState('')

  const trendings = [
    'recalque',
    'fissura',
    'SPT não converge',
    'trinca',
    'sobrecarga',
    'curto-circuito',
  ]
  const history = ['NBR 5410', 'NBR 6120', 'NBR 6122', 'NBR 6118']

  const allAprofundamentos = normas.flatMap((n) =>
    (n.blocks.aprofundamentos?.links || []).map((l) => ({
      ...l,
      normaId: n.id,
      normaCode: n.code,
      type: 'aprofundamento' as const,
    })),
  )

  const searchResults =
    query.length > 2
      ? [
          ...normas
            .filter(
              (n) =>
                n.title.toLowerCase().includes(query.toLowerCase()) ||
                n.code.toLowerCase().includes(query.toLowerCase()),
            )
            .map((n) => ({
              id: n.id,
              title: n.title,
              code: n.code,
              type: 'norma' as const,
              path: `/normas/${n.id}`,
            })),
          ...problemas
            .filter(
              (p) =>
                p.title.toLowerCase().includes(query.toLowerCase()) ||
                p.contexto.toLowerCase().includes(query.toLowerCase()),
            )
            .map((p) => ({
              id: p.id,
              title: p.title,
              code: p.normaCode,
              type: 'problema' as const,
              path: `/problemas/${p.id}`,
            })),
          ...allAprofundamentos
            .filter((a) => a.title.toLowerCase().includes(query.toLowerCase()))
            .map((a) => ({
              id: a.id,
              title: a.title,
              code: a.normaCode,
              type: 'aprofundamento' as const,
              path: `/normas/${a.normaId}/aprofundamentos/${a.id}`,
            })),
          ...diagnosticos
            .filter(
              (d) =>
                d.title.toLowerCase().includes(query.toLowerCase()) ||
                d.oQueEstaAcontecendo.join(' ').toLowerCase().includes(query.toLowerCase()),
            )
            .map((d) => ({
              id: d.id,
              title: d.title,
              code: 'Caso Clínico',
              type: 'diagnóstico' as const,
              path: `/diagnostico/${d.id}`,
            })),
        ]
      : []

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="sticky top-0 bg-enghub-navy pt-2 pb-4 z-10 -mx-4 px-4 md:-mx-0 md:px-0">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-enghub-orange w-6 h-6" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-16 bg-enghub-navy-dark border border-transparent focus-visible:ring-enghub-teal shadow-sm rounded-2xl pl-14 pr-4 text-lg text-enghub-beige font-semibold placeholder:text-enghub-skyblue/50 transition-shadow"
            placeholder="Qual é a sua dúvida técnica?"
          />
        </div>
      </div>

      {!query && (
        <div className="space-y-10 pt-4">
          <section>
            <h3 className="text-xs font-bold text-enghub-skyblue flex items-center gap-2 mb-4 uppercase tracking-widest">
              <TrendingUp className="w-4 h-4 text-enghub-orange" /> Tópicos em Alta
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {trendings.map((t) => (
                <button
                  key={t}
                  onClick={() => setQuery(t)}
                  className="px-4 py-2.5 bg-enghub-navy-dark border border-transparent text-enghub-skyblue rounded-xl text-sm font-bold hover:bg-enghub-navy/50 transition-all"
                >
                  {t}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold text-enghub-skyblue flex items-center gap-2 mb-4 uppercase tracking-widest">
              <History className="w-4 h-4 text-enghub-orange" /> Buscas Recentes
            </h3>
            <div className="space-y-2 bg-enghub-navy-dark rounded-2xl p-2 shadow-sm">
              {history.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 text-enghub-skyblue px-4 py-3 cursor-pointer hover:bg-enghub-navy rounded-xl font-semibold transition-colors"
                  onClick={() => setQuery(h)}
                >
                  <History className="w-4 h-4 text-enghub-orange opacity-60" /> {h}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {query && searchResults.length > 0 && (
        <div className="space-y-4 pt-2 animate-fade-in-up">
          <h3 className="text-xs font-bold text-enghub-skyblue mb-4 uppercase tracking-widest">
            Resultados Encontrados ({searchResults.length})
          </h3>
          {searchResults.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              to={item.path}
              className="block bg-enghub-beige p-5 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl shrink-0 mt-1 ${
                    item.type === 'problema'
                      ? 'bg-enghub-orange/10'
                      : item.type === 'aprofundamento'
                        ? 'bg-enghub-teal/10'
                        : item.type === 'diagnóstico'
                          ? 'bg-enghub-teal/10'
                          : 'bg-enghub-navy/10'
                  }`}
                >
                  {item.type === 'problema' && (
                    <AlertTriangle className="w-6 h-6 text-enghub-orange" />
                  )}
                  {item.type === 'aprofundamento' && <Link2 className="w-6 h-6 text-enghub-teal" />}
                  {item.type === 'norma' && <BookOpen className="w-6 h-6 text-enghub-navy" />}
                  {item.type === 'diagnóstico' && <Activity className="w-6 h-6 text-enghub-teal" />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-enghub-navy/5 text-enghub-navy/60">
                      {item.type}
                    </span>
                    <span className="font-bold text-xs text-enghub-navy/70">{item.code}</span>
                  </div>
                  <h4 className="font-bold text-lg text-enghub-navy leading-tight">{item.title}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {query && query.length > 2 && searchResults.length === 0 && (
        <div className="text-center py-16 text-enghub-skyblue animate-fade-in">
          <Search className="w-16 h-16 mx-auto text-enghub-orange/80 mb-4" />
          <p className="font-bold text-xl text-enghub-beige mb-1">Nenhum resultado</p>
        </div>
      )}
    </div>
  )
}
