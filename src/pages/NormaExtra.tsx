import { useParams, useNavigate } from 'react-router-dom'
import { normas } from '@/lib/data'
import { ArrowLeft, Clock, Info } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { useEffect, useState } from 'react'

export default function NormaExtra() {
  const { id } = useParams()
  const nav = useNavigate()
  const norma = normas.find((n) => n.id === id)
  const [readProgress, setReadProgress] = useState(0)

  useEffect(() => {
    const el = document.getElementById('main-scroll-area')
    if (!el) return
    const handleScroll = () => {
      const scrolled = el.scrollTop
      const max = el.scrollHeight - el.clientHeight
      setReadProgress((scrolled / max) * 100 || 0)
    }
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  if (!norma)
    return <div className="p-8 text-center text-slate-500 font-medium">Conteúdo não encontrado</div>

  return (
    <div className="max-w-3xl mx-auto bg-white min-h-[85vh] rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 animate-fade-in relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 z-10 bg-slate-100">
        <Progress
          value={readProgress}
          className="h-full rounded-none bg-transparent [&>div]:bg-enghub-orange transition-all duration-100"
        />
      </div>

      <button
        onClick={() => nav(-1)}
        className="flex items-center gap-2 text-enghub-teal font-semibold mb-8 hover:bg-enghub-teal/10 px-3 py-1.5 rounded-lg transition-colors -ml-3 mt-2"
      >
        <ArrowLeft className="w-4 h-4" /> Retornar para {norma.code}
      </button>

      <h1 className="text-3xl md:text-4xl font-bold text-enghub-navy mb-5 leading-tight tracking-tight">
        {norma.extra.title}
      </h1>

      <div className="flex items-center gap-2 text-enghub-teal text-sm font-bold mb-10 pb-6 border-b border-slate-100 uppercase tracking-wider">
        <Clock className="w-4 h-4" />
        <span>{norma.extra.readTime} de leitura focada</span>
      </div>

      <div className="space-y-6 text-slate-700 leading-relaxed text-[17px] font-medium">
        {norma.extra.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}

        <div className="my-10 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <div className="bg-enghub-navy px-5 py-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-enghub-orange" />
            <h3 className="font-bold text-white">Guia de Decisão Prática</h3>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100/50 text-slate-500 uppercase tracking-wider text-xs font-bold border-b border-slate-200">
                <tr>
                  <th className="px-5 py-4">Situação Identificada</th>
                  <th className="px-5 py-4">Ação Recomendada em Campo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white text-enghub-navy font-semibold">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4">Dúvida no cruzamento de dados</td>
                  <td className="px-5 py-4 text-enghub-teal">
                    Pausar execução e solicitar projetista
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4">Condição diversa da sondagem/projeto</td>
                  <td className="px-5 py-4 text-enghub-orange">
                    Registro fotográfico imediato + RDO
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
