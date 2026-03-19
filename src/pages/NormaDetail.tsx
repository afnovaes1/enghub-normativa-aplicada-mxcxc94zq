import { useParams, Link, useNavigate } from 'react-router-dom'
import { normas } from '@/lib/data'
import {
  ArrowLeft,
  Hammer,
  Target,
  AlertOctagon,
  Zap,
  CheckCircle2,
  Eye,
  ChevronRight,
  BookOpen,
} from 'lucide-react'

export default function NormaDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const norma = normas.find((n) => n.id === id)

  if (!norma)
    return (
      <div className="p-8 text-center text-enghub-skyblue font-medium">Norma não encontrada</div>
    )

  const blocks = [
    { key: 'ondeEntra', icon: Hammer },
    { key: 'controle', icon: Target },
    { key: 'erros', icon: AlertOctagon },
    { key: 'consequencias', icon: Zap },
    { key: 'praticas', icon: CheckCircle2 },
    { key: 'perito', icon: Eye },
  ]

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
          {norma.category}
        </div>
        <h1 className="text-3xl font-bold text-enghub-beige tracking-tight">{norma.code}</h1>
        <p className="text-enghub-skyblue font-medium text-lg mt-1.5">{norma.title}</p>
      </div>

      <div className="space-y-4 pt-2">
        {blocks.map((b) => {
          const data = norma.blocks[b.key as keyof typeof norma.blocks]
          return (
            <div
              key={b.key}
              className="bg-enghub-beige p-5 rounded-2xl shadow-sm border-l-4 border-l-enghub-navy-dark flex gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-enghub-orange/10">
                <b.icon className="w-6 h-6 text-enghub-orange" />
              </div>
              <div className="pt-0.5">
                <h3 className="font-bold text-enghub-navy text-[15px] mb-1.5">{data.title}</h3>
                <p className="text-enghub-navy/70 text-[15px] leading-relaxed font-medium">
                  {data.content}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <Link
        to={`/normas/${id}/extra`}
        className="mt-8 bg-enghub-navy-dark hover:bg-enghub-navy-dark/80 text-enghub-beige shadow-sm rounded-2xl p-5 flex items-center justify-between transition-transform active:scale-[0.98] w-full border border-transparent"
      >
        <div className="flex items-center gap-4">
          <div className="bg-enghub-navy p-3 rounded-xl shadow-inner">
            <BookOpen className="w-6 h-6 text-enghub-orange" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-lg">Aprofundamento Técnico</span>
          </div>
        </div>
        <ChevronRight className="w-6 h-6 text-enghub-orange" />
      </Link>
    </div>
  )
}
