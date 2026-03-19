import { useParams, useNavigate, Link } from 'react-router-dom'
import { problemas, normas } from '@/lib/data'
import { ArrowLeft, AlertTriangle, Info, Zap, BookOpen, ChevronRight } from 'lucide-react'

export default function ProblemaDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const problema = problemas.find((p) => p.id === id)

  if (!problema) {
    return (
      <div className="p-8 text-center text-enghub-skyblue font-medium">Erro não encontrado</div>
    )
  }

  const norma = normas.find((n) => n.id === problema.normaId)

  return (
    <div className="space-y-6 animate-slide-up">
      <button
        onClick={() => nav(-1)}
        className="flex items-center gap-2 text-enghub-skyblue font-semibold mb-2 hover:bg-enghub-navy-dark px-3 py-1.5 rounded-lg transition-colors -ml-3"
      >
        <ArrowLeft className="w-4 h-4 text-enghub-orange" /> Voltar
      </button>

      <div className="pb-4 border-b border-enghub-navy-dark">
        <div className="inline-flex items-center px-2.5 py-1 bg-enghub-orange/20 text-enghub-orange text-xs uppercase tracking-wider font-bold rounded-md mb-3 gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5" /> Erro Crítico
        </div>
        <h1 className="text-3xl font-bold text-enghub-beige tracking-tight leading-tight">
          {problema.title}
        </h1>
      </div>

      <div className="space-y-4 pt-2 pb-8">
        <Section icon={Info} title="Descrição direta" content={problema.description} />
        <Section icon={AlertTriangle} title="Causa provável" content={problema.causa} />
        <Section icon={Zap} title="Consequência" content={problema.consequencia} />

        <div className="bg-enghub-navy-dark p-5 md:p-6 rounded-2xl shadow-sm border-l-4 border-l-enghub-teal flex flex-col md:flex-row gap-5 mt-6">
          <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-enghub-teal/10">
            <BookOpen className="w-6 h-6 text-enghub-teal" />
          </div>
          <div className="pt-1 w-full">
            <h3 className="font-bold text-enghub-beige text-lg mb-4">Referências Técnicas</h3>
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
                    {norma?.code} - {norma?.title}
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
      </div>
    </div>
  )
}

function Section({ icon: Icon, title, content }: { icon: any; title: string; content: string }) {
  return (
    <div className="bg-enghub-navy-dark p-5 md:p-6 rounded-2xl shadow-sm border-l-4 border-l-enghub-orange flex flex-col md:flex-row gap-5">
      <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-enghub-orange/10">
        <Icon className="w-6 h-6 text-enghub-orange" />
      </div>
      <div className="pt-1">
        <h3 className="font-bold text-enghub-beige text-lg mb-2">{title}</h3>
        <p className="text-enghub-skyblue text-[15px] leading-relaxed font-medium">{content}</p>
      </div>
    </div>
  )
}
