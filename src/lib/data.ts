export type NormaBlock = {
  title: string
  header?: string
  content?: string
  bullets?: string[]
  takeaway?: string
  insights?: { name: string; description: string }[]
  links?: string[]
}

export type Norma = {
  id: string
  code: string
  title: string
  category: string
  blocks: {
    ondeEntra: NormaBlock
    controle: NormaBlock
    erros: NormaBlock
    consequencias: NormaBlock
    praticas: NormaBlock
    insights: NormaBlock
    perito: NormaBlock
    aprofundamentos: NormaBlock
  }
}

const p = '[Conteúdo estrutural — aguardando inserção manual]'
const baseBlocks = {
  ondeEntra: { title: 'Onde entra na obra', content: p },
  controle: { title: 'O que realmente controla', content: p },
  erros: { title: 'Onde todo mundo erra', content: p },
  consequencias: { title: 'O que acontece quando erra', content: p },
  praticas: { title: 'Como fazer certo na prática', content: p },
  insights: { title: 'Insights rápidos de decisão', content: p },
  perito: { title: 'Visão de perito', content: p },
  aprofundamentos: { title: 'Aprofundamentos', content: p },
}

const nbr6122Blocks = {
  ondeEntra: {
    title: 'Onde entra na obra',
    header: 'Fundação não começa na execução. Começa na decisão.',
    bullets: [
      'definição do tipo de fundação',
      'leitura e interpretação do solo',
      'escolha entre sapata, estaca ou radier',
      'início da transferência de carga para o terreno',
    ],
    takeaway: 'o erro aqui não aparece na obra — aparece depois',
  },
  controle: {
    title: 'O que realmente controla',
    header: 'Essa norma não trata de fundação. Trata de comportamento.',
    bullets: [
      'como o solo reage à carga',
      'como a carga é distribuída',
      'como evitar deformações incompatíveis',
      'como garantir estabilidade ao longo do tempo',
    ],
    takeaway: 'fundação não é resistência — é comportamento ao longo do tempo',
  },
  erros: {
    title: 'Onde todo mundo erra',
    bullets: [
      'Confiar cegamente na sondagem (ler número sem interpretar contexto)',
      'Escolher fundação por custo (solução mais barata no papel, mais cara na prática)',
      'Ignorar variação do solo (tratar terreno como uniforme)',
      'Desconsiderar nível d’água (muda completamente o comportamento do solo)',
      'Separar solo e estrutura (projeto que não conversa gera surpresa)',
    ],
    takeaway: 'fundação não falha na execução — falha na decisão',
  },
  consequencias: {
    title: 'O que acontece quando erra',
    bullets: [
      'recalque diferencial',
      'fissuração progressiva',
      'desalinhamento de elementos',
      'necessidade de reforço de fundação',
      'perda de valor do imóvel',
      'disputa técnica',
    ],
    takeaway: 'o problema não aparece na entrega — aparece com o uso',
  },
  praticas: {
    title: 'Como fazer certo na prática',
    bullets: [
      'interpretar sondagem com criticidade',
      'alinhar cotas entre furos',
      'avaliar cenário desfavorável (não médio)',
      'compatibilizar fundação com comportamento da estrutura',
      'garantir controle de execução',
      'registrar decisões e condições reais',
    ],
  },
  insights: {
    title: 'Insights rápidos de decisão',
    insights: [
      {
        name: 'Sapata',
        description:
          'funciona bem em solos com boa capacidade superficial mas: pode atender no cálculo e falhar no comportamento, solo saturado muda completamente o cenário',
      },
      {
        name: 'Radier',
        description:
          'distribui carga, reduz tensões pontuais mas: não é solução universal para obra “leve”, solo compressível continua sendo problema',
      },
      {
        name: 'Estaca',
        description:
          'leva carga para camadas mais resistentes mas: aumento de diâmetro aumenta carga… e peso próprio, execução mal controlada anula projeto',
      },
    ],
    takeaway: 'tipo de fundação não resolve problema — escolha correta resolve',
  },
  perito: {
    title: 'Visão de perito',
    bullets: [
      'erro raramente está só na execução',
      'normalmente nasce na decisão inicial',
      'projeto ignora sinais do solo',
      'execução apenas materializa o erro',
      'ausência de registro técnico enfraquece defesa',
      'decisão não documentada vira interpretação',
    ],
    takeaway: 'sem registro, você não prova — você argumenta',
  },
  aprofundamentos: {
    title: 'Aprofundamentos',
    links: [
      'Como interpretar um SPT na prática',
      'SPT não converge: o que isso indica',
      'Como escolher entre estaca, sapata ou radier',
      'Capacidade de carga: o que realmente importa',
      'Recalque: o problema que aparece depois',
      'Como o nível d’água muda tudo',
      'Fundações na divisa',
      'O que precisa ser registrado na obra',
    ],
  },
}

const nbr15575Blocks = {
  ondeEntra: {
    title: 'Onde entra na obra',
    content: 'Essa norma entra quando o usuário começa a usar a edificação.',
    bullets: [
      'projeto arquitetônico e sistemas construtivos',
      'escolha de materiais e soluções',
      'execução e detalhamento',
      'entrega do empreendimento',
    ],
    takeaway: 'essa norma não aparece na obra — aparece na reclamação',
  },
  controle: {
    title: 'O que realmente controla',
    content: 'Não controla execução. Controla desempenho.',
    bullets: [
      'conforto térmico',
      'conforto acústico',
      'estanqueidade',
      'durabilidade',
      'vida útil',
    ],
    takeaway: 'não basta funcionar — tem que performar ao longo do tempo',
  },
  erros: {
    title: 'Onde todo mundo erra',
    bullets: [
      'Achar que desempenho é opcional (trata como “melhoria”, não como exigência)',
      'Ignorar requisitos mínimos (principalmente acústico e térmico)',
      'Não validar sistema construtivo (confia no fornecedor sem comprovação)',
      'Detalhar mal interfaces (encontro de sistemas é onde falha)',
      'Não considerar uso real (projeto pensado no papel, não no usuário)',
    ],
    takeaway: 'o problema não está no sistema — está na expectativa não atendida',
  },
  consequencias: {
    title: 'O que acontece quando erra',
    bullets: [
      'reclamações do cliente',
      'retrabalho pós-entrega',
      'perda de credibilidade',
      'ações judiciais',
      'custo elevado de correção',
    ],
    takeaway: 'desempenho ruim vira problema jurídico',
  },
  praticas: {
    title: 'Como fazer certo na prática',
    bullets: [
      'definir nível de desempenho desde o projeto',
      'validar soluções com dados (não só catálogo)',
      'detalhar bem interfaces entre sistemas',
      'considerar uso real da edificação',
      'registrar critérios adotados',
    ],
  },
  insights: {
    title: 'Insights rápidos de decisão',
    insights: [
      {
        name: 'Acústica',
        description:
          'não depende só da laje mas: transmissão lateral costuma ser ignorada; piso resolve impacto, mas não tudo',
      },
      {
        name: 'Térmico',
        description:
          'não é só material mas: orientação solar muda tudo; ventilação natural mal resolvida compromete desempenho',
      },
      {
        name: 'Estanqueidade',
        description:
          'não é só impermeabilização mas: falha em detalhe construtivo é o principal problema; interface mal resolvida gera infiltração',
      },
      {
        name: 'Durabilidade',
        description:
          'não é só material “bom” mas: depende de exposição, uso e manutenção; projeto que ignora isso transfere problema para o usuário',
      },
    ],
    takeaway: 'desempenho não está no material — está no sistema como um todo',
  },
  perito: {
    title: 'Visão de perito',
    content:
      'maioria dos problemas não é falha estrutural; é falha de desempenho. expectativa do usuário não atendida vira conflito, mesmo que a obra “esteja de pé”. ausência de definição de desempenho enfraquece defesa. sem critério claro, tudo vira discussão subjetiva.',
    takeaway: 'sem critério definido, qualquer problema vira culpa sua',
  },
  aprofundamentos: {
    title: 'Aprofundamentos',
    links: [
      'Desempenho acústico: onde mais se erra',
      'Transmissão lateral de ruído',
      'Conforto térmico na prática',
      'Estanqueidade: onde a água entra',
      'Vida útil de projeto: o que realmente significa',
      'Interfaces construtivas: onde mora o problema',
      'O que o cliente pode cobrar (e cobra)',
      'Como documentar desempenho',
    ],
  },
}

export const normas: Norma[] = [
  {
    id: '6122',
    code: 'NBR 6122',
    title: 'Projeto e Execução de Fundações',
    category: 'Geotecnia',
    blocks: nbr6122Blocks,
  },
  {
    id: '15575',
    code: 'NBR 15575',
    title: 'Edificações Habitacionais - Desempenho',
    category: 'Geral',
    blocks: nbr15575Blocks,
  },
  {
    id: '6118',
    code: 'NBR 6118',
    title: 'Projeto de Estruturas de Concreto',
    category: 'Estrutural',
    blocks: { ...baseBlocks },
  },
  {
    id: '6120',
    code: 'NBR 6120',
    title: 'Ações para o cálculo de estruturas de edificações',
    category: 'Estrutural',
    blocks: { ...baseBlocks },
  },
  {
    id: '5410',
    code: 'NBR 5410',
    title: 'Instalações Elétricas de Baixa Tensão',
    category: 'Instalações',
    blocks: { ...baseBlocks },
  },
  {
    id: '5626',
    code: 'NBR 5626',
    title: 'Sistemas Prediais de Água Fria e Quente',
    category: 'Instalações',
    blocks: { ...baseBlocks },
  },
]

export const problemas = [
  {
    id: '1',
    title: 'Recalque',
    description: '[Descrição do problema — aguardando inserção manual]',
    normaId: '6122',
    normaCode: 'NBR 6122',
  },
  {
    id: '2',
    title: 'Fissura',
    description: '[Descrição do problema — aguardando inserção manual]',
    normaId: '6118',
    normaCode: 'NBR 6118',
  },
  {
    id: '3',
    title: 'Erro de Fundação',
    description: '[Descrição do problema — aguardando inserção manual]',
    normaId: '6122',
    normaCode: 'NBR 6122',
  },
  {
    id: '4',
    title: 'SPT não converge',
    description: '[Descrição do problema — aguardando inserção manual]',
    normaId: '6122',
    normaCode: 'NBR 6122',
  },
]
