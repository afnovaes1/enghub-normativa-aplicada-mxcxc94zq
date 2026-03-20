import { useParams, useNavigate, Link } from 'react-router-dom'
import { problemas } from '@/lib/data'
import { ArrowLeft, ChevronRight } from 'lucide-react'

export default function ProblemaDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const problema = problemas.find((p) => p.id === id)

  if (!problema) {
    return (
      <div className="p-8 text-center text-enghub-skyblue font-medium">Problema não encontrado</div>
    )
  }

  return (
    <div className="space-y-6 animate-slide-up">
      <button
        onClick={() => nav(-1)}
        className="flex items-center gap-2 text-enghub-skyblue font-semibold mb-2 hover:bg-enghub-navy-dark px-3 py-1.5 rounded-lg transition-colors -ml-3"
      >
        <ArrowLeft className="w-4 h-4 text-enghub-orange" /> Voltar
      </button>

      <div className="pb-4 border-b border-enghub-navy-dark">
        <h1 className="text-2xl md:text-3xl font-bold text-enghub-beige tracking-tight leading-tight flex items-start gap-3">
          <span className="text-2xl md:text-3xl mt-0.5">🚨</span>
          <span>{problema.title}</span>
        </h1>
      </div>

      <div className="space-y-4 pt-2 pb-8">
        <Section emoji="📍" title="O que está acontecendo" content={problema.contexto} />
        <Section emoji="🔎" title="Onde isso aparece na obra" content={problema.naObra} />
        <Section emoji="⚠️" title="Causa provável" content={problema.causa} />
        <Section emoji="💥" title="Consequência" content={problema.consequencia} />
        <Section emoji="🧠" title="Como ler isso corretamente" content={problema.comoLer} />
        <Section emoji="🔧" title="O que fazer" content={problema.oQueFazer} />

        <div className="bg-enghub-navy-dark p-5 md:p-6 rounded-2xl shadow-sm border-l-4 border-l-enghub-teal flex flex-col md:flex-row gap-4 mt-6">
          <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-enghub-teal/10 text-xl">
            🔗
          </div>
          <div className="pt-1 w-full">
            <h3 className="font-bold text-enghub-beige text-[17px] mb-4">Referências Técnicas</h3>
            <div className="space-y-3">
              <Link
                to={`/normas/${problema.normaId}`}
                className="flex items-center justify-between p-4 rounded-xl bg-enghub-navy hover:bg-enghub-navy/80 transition-colors group shadow-sm border border-transparent hover:border-enghub-teal/30"
              >
                <div className="flex flex-col">
                  <span className="text-xs text-enghub-skyblue font-bold uppercase tracking-wider mb-1">
                    Norma Relacionada
                  </span>
                  <span className="text-enghub-beige text-sm font-bold">
                    {problema.normaDisplay}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-enghub-teal group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>

              {problema.aprofundamentoId && (
                <Link
                  to={`/normas/${problema.normaId}/aprofundamentos/${problema.aprofundamentoId}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-enghub-navy hover:bg-enghub-navy/80 transition-colors group shadow-sm border border-transparent hover:border-enghub-orange/30"
                >
                  <div className="flex flex-col">
                    <span className="text-xs text-enghub-skyblue font-bold uppercase tracking-wider mb-1">
                      Aprofundamento Recomendado
                    </span>
                    <span className="text-enghub-beige text-sm font-bold">
                      Ver análise detalhada
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-enghub-orange group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-enghub-orange/10 border border-enghub-orange/20 p-5 md:p-6 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 items-start">
          <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-enghub-orange text-xl">
            🔻
          </div>
          <div className="pt-1">
            <h3 className="font-bold text-enghub-orange text-xs uppercase tracking-widest mb-1.5">
              Fechamento
            </h3>
            <p className="text-enghub-beige font-bold text-[16px] leading-snug">
              {problema.fechamento}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ emoji, title, content }: { emoji: string; title: string; content: string }) {
  return (
    <div className="bg-enghub-navy-dark p-5 md:p-6 rounded-2xl shadow-sm border-l-4 border-l-enghub-orange flex flex-col md:flex-row gap-4">
      <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-enghub-orange/10 text-xl">
        {emoji}
      </div>
      <div className="pt-1">
        <h3 className="font-bold text-enghub-beige text-[17px] mb-2">{title}</h3>
        <p className="text-enghub-skyblue text-[15px] leading-relaxed font-medium">{content}</p>
      </div>
    </div>
  )
}
