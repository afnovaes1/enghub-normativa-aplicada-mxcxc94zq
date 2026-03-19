import { useParams, useNavigate } from 'react-router-dom'
import { normas } from '@/lib/data'
import {
  ArrowLeft,
  Hammer,
  Target,
  AlertOctagon,
  Zap,
  CheckCircle2,
  Lightbulb,
  Eye,
  BookOpen,
  ChevronRight,
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
    { key: 'insights', icon: Lightbulb },
    { key: 'perito', icon: Eye },
    { key: 'aprofundamentos', icon: BookOpen },
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

      <div className="space-y-4 pt-2 pb-8">
        {blocks.map((b) => {
          const data = norma.blocks[b.key as keyof typeof norma.blocks]
          if (!data) return null

          return (
            <div
              key={b.key}
              className="bg-enghub-navy-dark p-5 md:p-6 rounded-2xl shadow-sm border-l-4 border-l-enghub-orange flex flex-col md:flex-row gap-5"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-enghub-orange/10">
                <b.icon className="w-6 h-6 text-enghub-orange" />
              </div>
              <div className="pt-0.5 w-full">
                <h3 className="font-bold text-enghub-beige text-lg mb-3">{data.title}</h3>

                {data.header && (
                  <h4 className="font-bold text-white text-[15px] mb-3 leading-snug">
                    {data.header}
                  </h4>
                )}

                {data.content && (
                  <p className="text-enghub-skyblue text-[15px] leading-relaxed font-medium mb-3">
                    {data.content}
                  </p>
                )}

                {data.bullets && data.bullets.length > 0 && (
                  <ul className="space-y-2.5 mb-4">
                    {data.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-enghub-skyblue text-[15px] leading-relaxed font-medium"
                      >
                        <span className="text-enghub-orange mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-enghub-orange" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {data.insights && data.insights.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 mt-2">
                    {data.insights.map((insight, i) => (
                      <div
                        key={i}
                        className="bg-enghub-navy p-4 rounded-xl border border-enghub-navy-dark/50 shadow-sm"
                      >
                        <h5 className="font-bold text-enghub-beige text-sm mb-1.5 flex items-center gap-1.5">
                          {insight.name}
                        </h5>
                        <p className="text-enghub-skyblue text-[13px] font-medium leading-relaxed">
                          {insight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {data.links && data.links.length > 0 && (
                  <div className="space-y-2 mb-2 mt-1">
                    {data.links.map((link, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-enghub-navy hover:bg-enghub-navy/80 transition-colors cursor-pointer group shadow-sm"
                      >
                        <span className="text-enghub-beige text-sm font-bold pr-4">{link}</span>
                        <ChevronRight className="w-4 h-4 text-enghub-orange group-hover:translate-x-1 transition-transform shrink-0" />
                      </div>
                    ))}
                  </div>
                )}

                {data.takeaway && (
                  <div className="mt-5 bg-enghub-orange/10 border border-enghub-orange/20 rounded-xl p-4 flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold text-enghub-orange uppercase tracking-widest flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5" />
                      Se você só lembrar de uma coisa
                    </span>
                    <span className="text-enghub-beige font-bold text-[15px] leading-snug">
                      {data.takeaway}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
