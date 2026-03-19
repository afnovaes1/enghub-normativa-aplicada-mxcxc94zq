import { useParams, useNavigate } from 'react-router-dom'
import { getAprofundamento } from '@/lib/data'
import { ArrowLeft, BookOpen, AlertCircle, CheckCircle2, Eye, Target } from 'lucide-react'

export default function AprofundamentoDetail() {
  const { id, aprofId } = useParams()
  const nav = useNavigate()
  const aprof = getAprofundamento(id!, aprofId!)

  if (!aprof) {
    return (
      <div className="p-8 text-center text-enghub-skyblue font-medium">
        Aprofundamento não encontrado
      </div>
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
        <div className="inline-flex items-center px-2.5 py-1 bg-enghub-navy-dark text-enghub-skyblue text-xs uppercase tracking-wider font-bold rounded-md mb-3">
          Aprofundamento
        </div>
        <h1 className="text-3xl font-bold text-enghub-beige tracking-tight leading-tight">
          {aprof.title}
        </h1>
      </div>

      <div className="space-y-4 pt-2 pb-8">
        <Section icon={BookOpen} title="Contexto" content={aprof.context} />
        <Section icon={Target} title="Onde isso aparece na prática" content={aprof.naPratica} />
        <Section icon={AlertCircle} title="Erro comum relacionado" content={aprof.erroComum} />
        <Section icon={Eye} title="Como interpretar corretamente" content={aprof.comoInterpretar} />
        <Section icon={CheckCircle2} title="O que fazer na prática" content={aprof.oQueFazer} />
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
