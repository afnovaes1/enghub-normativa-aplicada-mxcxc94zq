import { useParams, useNavigate } from 'react-router-dom'
import { diagnosticos } from '@/lib/diagnostico'
import { ArrowLeft, Activity, Info, AlertTriangle, XCircle, CheckCircle2 } from 'lucide-react'
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

  return (
    <div className="space-y-6 animate-slide-up pb-10">
      <button
        onClick={() => nav(-1)}
        className="flex items-center gap-2 text-enghub-skyblue font-semibold mb-2 hover:bg-enghub-navy-dark px-3 py-1.5 rounded-lg transition-colors -ml-3"
      >
        <ArrowLeft className="w-4 h-4 text-enghub-orange" /> Voltar
      </button>

      <div className="pb-4 border-b border-enghub-navy-dark">
        <div className="inline-flex items-center px-2.5 py-1 bg-enghub-navy-dark text-enghub-orange text-xs uppercase tracking-wider font-bold rounded-md mb-3 gap-1.5 shadow-sm border border-enghub-orange/20">
          <Activity className="w-3.5 h-3.5" /> Diagnóstico Técnico
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-enghub-beige tracking-tight leading-tight flex flex-col gap-1">
          {diagnostico.title}
        </h1>
      </div>

      <div className="bg-enghub-beige rounded-2xl p-2 md:p-4 shadow-sm mt-6">
        <Accordion type="multiple" defaultValue={['item-2']} className="w-full space-y-3">
          {/* Block 1 */}
          <AccordionItem
            value="item-1"
            className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-enghub-orange overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-enghub-orange transition-colors py-4 text-left leading-snug">
              1. Nome do caso
            </AccordionTrigger>
            <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1">
              {diagnostico.title}
            </AccordionContent>
          </AccordionItem>

          {/* Block 2 */}
          <AccordionItem
            value="item-2"
            className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-enghub-orange overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-enghub-orange transition-colors py-4 text-left leading-snug">
              2. O que está acontecendo
            </AccordionTrigger>
            <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1 space-y-3">
              {diagnostico.oQueEstaAcontecendo.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* Block 3 */}
          <AccordionItem
            value="item-3"
            className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-enghub-orange overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-enghub-orange transition-colors py-4 text-left leading-snug">
              3. O que observar em campo
            </AccordionTrigger>
            <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1">
              <ul className="list-disc pl-5 space-y-2 mb-4">
                {diagnostico.oQueObservarEmCampo.pontos.map((p, i) => {
                  const [strong, ...rest] = p.split(': ')
                  return (
                    <li key={i}>
                      <strong className="text-enghub-navy">{strong}:</strong> {rest.join(': ')}
                    </li>
                  )
                })}
              </ul>
              <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-red-900">Erro Clássico em Campo:</strong>{' '}
                  {diagnostico.oQueObservarEmCampo.erroClassico}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Block 4 */}
          <AccordionItem
            value="item-4"
            className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-enghub-orange overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-enghub-orange transition-colors py-4 text-left leading-snug">
              4. Hipóteses prováveis
            </AccordionTrigger>
            <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1">
              <ul className="list-disc pl-5 space-y-2">
                {diagnostico.hipotesesProvaveis.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Block 5 */}
          <AccordionItem
            value="item-5"
            className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-enghub-orange overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-enghub-orange transition-colors py-4 text-left leading-snug">
              5. Leitura técnica do problema
            </AccordionTrigger>
            <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1 space-y-4">
              <div>
                <h4 className="font-bold text-enghub-navy mb-1">Leitura direta do fenômeno:</h4>
                <p>{diagnostico.leituraTecnica.leituraDireta}</p>
              </div>
              <div>
                <h4 className="font-bold text-enghub-navy mb-1">
                  Interpretação técnica essencial:
                </h4>
                <p>{diagnostico.leituraTecnica.interpretacaoEssencial}</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Block 6 */}
          <AccordionItem
            value="item-6"
            className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-enghub-orange overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-enghub-orange transition-colors py-4 text-left leading-snug">
              6. Como confirmar
            </AccordionTrigger>
            <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1">
              <ul className="space-y-3">
                {diagnostico.comoConfirmar.map((p, i) => {
                  const [strong, ...rest] = p.split(': ')
                  return (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-enghub-teal shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-enghub-navy">{strong}:</strong> {rest.join(': ')}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Block 7 */}
          <AccordionItem
            value="item-7"
            className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-enghub-orange overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-enghub-orange transition-colors py-4 text-left leading-snug">
              7. Possíveis caminhos técnicos
            </AccordionTrigger>
            <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1">
              <ul className="list-decimal pl-5 space-y-2">
                {diagnostico.caminhosTecnicos.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Block 8 */}
          <AccordionItem
            value="item-8"
            className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-red-500 overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-red-600 transition-colors py-4 text-left leading-snug">
              8. O que NÃO fazer
            </AccordionTrigger>
            <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1">
              <ul className="space-y-3">
                {diagnostico.oQueNaoFazer.map((p, i) => {
                  const [strong, ...rest] = p.split(': ')
                  return (
                    <li key={i} className="flex gap-2">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-enghub-navy">{strong}:</strong> {rest.join(': ')}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Block 9 */}
          <AccordionItem
            value="item-9"
            className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-enghub-orange overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-enghub-orange transition-colors py-4 text-left leading-snug">
              9. Erro comum nesse caso
            </AccordionTrigger>
            <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1">
              {diagnostico.erroComum}
            </AccordionContent>
          </AccordionItem>

          {/* Block 10 */}
          <AccordionItem
            value="item-10"
            className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-enghub-orange overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-enghub-orange transition-colors py-4 text-left leading-snug">
              10. Quando isso se torna crítico
            </AccordionTrigger>
            <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1 space-y-4">
              <ul className="list-disc pl-5 space-y-1">
                {diagnostico.quandoSeTornaCritico.triggers.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <div className="overflow-x-auto rounded-lg border border-enghub-navy/10 mt-4">
                <table className="w-full text-sm text-left">
                  <thead className="bg-enghub-navy/5">
                    <tr>
                      <th className="px-4 py-3 font-bold text-enghub-navy border-b border-enghub-navy/10">
                        Estado da Trinca
                      </th>
                      <th className="px-4 py-3 font-bold text-enghub-navy border-b border-enghub-navy/10">
                        Ação Recomendada
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {diagnostico.quandoSeTornaCritico.decisao.map((d, i) => (
                      <tr key={i} className="border-b border-enghub-navy/5 last:border-0 bg-white">
                        <td className="px-4 py-3 font-semibold text-enghub-navy/90">{d.estado}</td>
                        <td className="px-4 py-3 text-enghub-navy/80">{d.acao}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Block 11 */}
          <AccordionItem
            value="item-11"
            className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-enghub-orange overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-enghub-orange transition-colors py-4 text-left leading-snug">
              11. Síntese técnica
            </AccordionTrigger>
            <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1">
              <div className="bg-enghub-orange/10 p-4 rounded-lg text-enghub-navy font-semibold italic border-l-4 border-l-enghub-orange">
                "{diagnostico.sinteseTecnica}"
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Block 12 */}
          <AccordionItem
            value="item-12"
            className="border-b-0 border border-enghub-navy/5 bg-white/60 rounded-xl px-4 border-l-[3px] border-l-enghub-orange overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-enghub-navy font-bold text-[15px] md:text-base hover:no-underline hover:text-enghub-orange transition-colors py-4 text-left leading-snug">
              12. Base técnica relacionada
            </AccordionTrigger>
            <AccordionContent className="text-enghub-navy/80 text-[14px] md:text-[15px] leading-relaxed font-medium pb-5 pt-1">
              <ul className="list-disc pl-5 space-y-1">
                {diagnostico.baseTecnica.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Global Footer (Block 13) Fixed at the bottom */}
      <div className="sticky bottom-4 z-40 mt-8">
        <div className="bg-enghub-navy-dark border-l-4 border-l-enghub-orange p-4 rounded-xl shadow-2xl flex items-start gap-4 mx-1">
          <div className="shrink-0 text-enghub-orange">
            <Info className="w-6 h-6" />
          </div>
          <div className="pt-0.5 flex-1 w-full">
            <Accordion type="single" collapsible defaultValue="item-13" className="w-full">
              <AccordionItem value="item-13" className="border-none">
                <AccordionTrigger className="text-enghub-beige font-bold text-sm uppercase tracking-wider py-0 hover:no-underline hover:text-white pb-1">
                  13. Nota de Responsabilidade Técnica
                </AccordionTrigger>
                <AccordionContent className="text-enghub-skyblue text-sm leading-relaxed font-medium mt-1 pb-0">
                  As estratégias apresentadas possuem caráter técnico-informativo e não substituem a
                  análise específica de engenharia, que deve considerar as condições particulares de
                  cada obra, solo, carregamento e execução.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
