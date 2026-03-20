export type Diagnostico = {
  id: string
  title: string
  oQueEstaAcontecendo: string[]
  oQueObservarEmCampo: { pontos: string[]; erroClassico: string }
  hipotesesProvaveis: string[]
  leituraTecnica: { leituraDireta: string; interpretacaoEssencial: string }
  comoConfirmar: string[]
  caminhosTecnicos: string[]
  oQueNaoFazer: string[]
  erroComum: string
  quandoSeTornaCritico: { triggers: string[]; decisao: { estado: string; acao: string }[] }
  sinteseTecnica: string
  baseTecnica: string[]
}

export const diagnosticos: Diagnostico[] = [
  {
    id: 'recalque-trinca-inclinada',
    title: 'Recalque com trinca inclinada em alvenaria',
    oQueEstaAcontecendo: [
      'Movimentação diferencial da fundação que reflete na superestrutura.',
      'Surgimento de trincas diagonais (tipicamente entre 30° e 60°) nas alvenarias.',
      'Impacto direto no travamento e alinhamento de esquadrias (portas e janelas que não fecham corretamente).',
      '👉 A trinca é o alívio de tensão do material: a parede tenta acompanhar a deformação do solo e rompe por cisalhamento ou tração diagonal.',
    ],
    oQueObservarEmCampo: {
      pontos: [
        'Geometria: A trinca é inclinada? Qual o ângulo e a espessura? Abertura é maior no topo ou na base?',
        'Localização: Onde a trinca nasce e onde ela morre? Está concentrada próxima a janelas e portas?',
        'Distribuição: É um problema isolado em uma parede ou se repete em várias paredes da mesma prumada?',
        'Esquadrias: Há dificuldade para abrir e fechar portas ou janelas próximas?',
        'Nível do piso: O rodapé apresenta descolamento? Há desnível perceptível ou som oco no piso?',
        'Evolução: A trinca está ativa (crescendo) ou estabilizada?',
        'Entorno: Existem árvores de grande porte, escavações recentes ou vazamentos hidráulicos próximos?',
        'Histórico: Quando começou? Coincide com períodos de chuva intensa ou seca severa?',
      ],
      erroClassico:
        'Achar que a trinca é "só na massa" e fechá-la com argamassa sem investigar a fundação.',
    },
    hipotesesProvaveis: [
      'Heterogeneidade do solo: Camadas com resistências diferentes sob a mesma edificação.',
      'Interpretação do SPT: Erro na leitura das condições do subsolo durante o projeto.',
      'Escolha da fundação: Tipo de fundação inadequado para as cargas ou para a deformabilidade do solo.',
      'Influência da água: Saturação do solo por vazamentos ocultos, alteração do lençol freático ou falha de drenagem.',
      'Deficiência de execução: Estacas com fuste seccionado, base mal limpa ou sapatas em cota errada.',
      'Interferência externa: Obras vizinhas, vibrações severas ou escavações próximas.',
      'Sobrecarga: Acréscimo de carga não previsto no projeto original (ex: nova laje, reservatórios).',
    ],
    leituraTecnica: {
      leituraDireta:
        'A estrutura está redistribuindo esforços porque um dos seus apoios cedeu além do suportável. A alvenaria, sendo o elemento mais rígido e frágil, absorve a tensão e fissura.',
      interpretacaoEssencial:
        'A trinca inclinada aponta para a direção do recalque diferencial. Onde a trinca é mais aberta, é a região de maior movimentação ativa. O problema não está na parede, está no solo sob ela.',
    },
    comoConfirmar: [
      'Inspeção visual detalhada: Mapeamento de todas as fissuras para identificar o vetor de recalque.',
      'Monitoramento de fissuras: Instalação de selos de gesso, fissurômetros ou pinos para medição ao longo do tempo.',
      'Revisão de projeto: Análise das cargas estimadas versus cargas reais atuantes.',
      'Revisão de laudos de SPT: Verificação do perfil geotécnico nas áreas de maior deformação.',
      'Investigação complementar: Execução de novas sondagens (SPT ou mista) para entender o cenário atual do solo.',
      'Verificação de influências externas: Inspeção em instalações hidráulicas em busca de vazamentos (teste de estanqueidade).',
      'Verificação de deformações: Nivelamento topográfico de precisão para constatar desaprumos estruturais.',
    ],
    caminhosTecnicos: [
      'Reforço profundo de fundação: Cravação de estacas mega (prensadas) ou microestacas para transferir a carga para camadas mais profundas e estáveis.',
      'Melhoria do solo: Injeção de resinas expansivas ou calda de cimento para estabilização do maciço sob a fundação.',
      'Redistribuição de esforços: Criação de vigas de transição ou reforço na superestrutura, caso a movimentação do solo seja limitada e estabilizada.',
      'Controle de água/drenagem: Correção de vazamentos e direcionamento de águas pluviais para afastar a saturação do bulbo de tensões.',
      'Monitoramento técnico: Acompanhamento estrutural rigoroso se a estabilização natural do recalque estiver sendo confirmada.',
    ],
    oQueNaoFazer: [
      'Fechar trincas sem tratar a causa: Tratar esteticamente enquanto a fundação continua cedendo.',
      'Assumir que é problema de acabamento: Ignorar o padrão geométrico da fissura.',
      'Agir sem verificar se está ativo: Tentar reforçar a estrutura sem saber se o solo já parou de ceder.',
      'Escolher solução por custo ou visual: Adotar "soluções rápidas" que não tratam a mecânica dos solos.',
      'Agir apenas na estrutura: Fazer costura de trincas sem resolver o apoio da fundação.',
      'Ignorar a influência da água: Deixar de testar a rede hidráulica antes de culpar exclusivamente o solo natural.',
      'Conclusão precipitada de responsabilidade: Apontar culpados antes de comprovar o nexo causal.',
    ],
    erroComum:
      'Tratar um problema global de fundação como se fosse um problema localizado de parede. Fazer "costura" com grampos metálicos na alvenaria sem interromper o recalque do solo. A parede vai trincar novamente, muitas vezes ao lado do reforço.',
    quandoSeTornaCritico: {
      triggers: [
        'Abertura rápida e contínua das trincas.',
        'Ruídos estruturais perceptíveis (estalos).',
        'Travamento repentino de portas e janelas essenciais.',
        'Desaprumo visível de pilares ou inclinação de fachadas.',
        'Ingresso de água por fissuras maiores, comprometendo a durabilidade estrutural.',
        'Danos propagando-se rapidamente para edificações vizinhas.',
      ],
      decisao: [
        {
          estado: 'Estável (sem evolução)',
          acao: 'Monitorar, tratar a estética e revisar drenagem local.',
        },
        {
          estado: 'Evolução lenta e contínua',
          acao: 'Investigar solo, planejar intervenção de reforço no curto/médio prazo.',
        },
        {
          estado: 'Evolução rápida / Danos estruturais',
          acao: 'Ação urgente: Escoramento imediato, interdição (se necessário) e projeto de reforço profundo.',
        },
      ],
    },
    sinteseTecnica:
      'A trinca inclinada é o diagnóstico visual de um sistema que perdeu o equilíbrio. A estrutura tenta buscar um novo estado de repouso enquanto o solo cede. A solução definitiva exige interromper a causa geotécnica ou hidráulica antes de qualquer reparo na superestrutura.',
    baseTecnica: [
      'NBR 6122:2019 - Projeto e Execução de Fundações',
      'NBR 13752:2024 - Perícias de Engenharia na Construção Civil',
      'Critérios de Danos: Limites de recalque de Burland, Skempton & MacDonald',
      'Foundation Analysis and Design (Bowles)',
    ],
  },
]
