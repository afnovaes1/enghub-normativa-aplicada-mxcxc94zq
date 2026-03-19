import { useParams, useNavigate } from 'react-router-dom'
import { diagnosticos } from '@/lib/data'
import { ArrowLeft, Activity, Info } from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export default function DiagnosticoDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const diagnostico = diagnosticos.find((d) => d.id === id)

  if (!diagnostico) {
    return (
      <div className="p-8 text-center text-enghub-skyblue font-medium">Caso não encontrado</div>
    )
  }

  const sections = [
    { key: 'oQueEstaAcontecendo', label: '2. O que está acontecendo' },
    { key: 'oQueObservarEmCampo', label: '3. O que observar em campo' },
    { key: 'hipotesesProvaveis', label: '4. Hipóteses prováveis' },
    { key: 'leituraTecnica', label: '5. Leitura técnica do problema' },
    { key: 'comoConfirmar', label: '6. Como confirmar' },
    { key: 'estrategiasTecnicas', label: '7. Possíveis caminhos técnicos' },
    { key: 'oQueNaoFazer', label: '8. O que NÃO fazer' },
    { key: 'erroComum', label: '9. Erro comum nesse caso' },
    { key: 'quandoSeTornaCritico', label: '10. Quando isso se torna crítico' },
    { key: 'sinteseTecnica', label: '11. Síntese técnica' },
    { key: 'baseTecnica', label: '12. Base técnica relacionada' },
  ]

  return (
    <div className="space-y-6 animate-slide-up pb-8">
      <button
        onClick={() => nav(-1)}
        className="flex items-center gap-2 text-enghub-skyblue font-semibold mb-2 hover:bg-enghub-navy-dark px-3 py-1.5 rounded-lg transition-colors -ml-3"
      >
        <ArrowLeft className="w-4 h-4 text-enghub-teal" /> Voltar
      </button>

      <div className="pb-4 border-b border-enghub-navy-dark">
        <div className="inline-flex items-center px-2.5 py-1 bg-enghub-navy-dark text-enghub-teal text-xs uppercase tracking-wider font-bold rounded-md mb-3 gap-1.5 shadow-sm">
          <Activity className="w-3.5 h-3.5" /> Estudo de Caso
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-enghub-beige tracking-tight leading-tight flex flex-col gap-1">
          <span className="text-xs text-enghub-skyblue/70 font-bold uppercase tracking-widest">
            1. Nome do caso
          </span>
          {diagnostico.title}
        </h1>
      </div>

      <div className="bg-enghub-beige rounded-2xl p-2 md:p-4 shadow-sm mt-6">
        <Accordion type="single" collapsible className="w-full space-y-2">
          {sections.map((sec) => (
            <AccordionItem
              key={sec.key}
              value={sec.key}
              className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-enghub-orange/40 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-enghub-orange/80 transition-colors py-4 text-left leading-snug">
                {sec.label}
              </AccordionTrigger>
              <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1">
                {diagnostico[sec.key as keyof typeof diagnostico]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-8 bg-enghub-navy-dark border-l-4 border-l-enghub-teal p-5 md:p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-start gap-4">
        <div className="shrink-0 text-enghub-teal">
          <Info className="w-6 h-6" />
        </div>
        <div className="pt-0.5">
          <h3 className="text-enghub-beige font-bold text-sm mb-2 uppercase tracking-wider">
            13. Nota de Responsabilidade Técnica
          </h3>
          <p className="text-enghub-skyblue text-sm leading-relaxed font-medium">
            As estratégias apresentadas possuem caráter técnico-informativo e não substituem a
            análise específica de engenharia, que deve considerar as condições particulares de cada
            obra, solo, carregamento e execução.
          </p>
        </div>
      </div>
    </div>
  )
}
