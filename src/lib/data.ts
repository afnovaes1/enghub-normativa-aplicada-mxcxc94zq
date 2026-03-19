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
      'Onde o cliente pode cobrar (e cobra)',
      'Como documentar desempenho',
    ],
  },
}

const nbr6118Blocks = {
  ondeEntra: {
    title: 'Onde entra na obra',
    content: 'Essa norma entra na concepção da estrutura.',
    bullets: [
      'definição do sistema estrutural',
      'dimensionamento de elementos',
      'detalhamento de armaduras',
      'execução e controle',
    ],
    takeaway: 'estrutura não começa no cálculo — começa na concepção',
  },
  controle: {
    title: 'O que realmente controla',
    content: 'Não controla só resistência. Controla comportamento.',
    bullets: [
      'segurança estrutural',
      'deformações',
      'fissuração',
      'durabilidade',
      'estabilidade global',
    ],
    takeaway: 'estrutura que “passa no cálculo” pode falhar no uso',
  },
  erros: {
    title: 'Onde todo mundo erra',
    bullets: [
      'Confiar demais no software (resultado sem crítica vira erro automatizado)',
      'Ignorar estados limites de serviço (estrutura segura, mas desconfortável)',
      'Subestimar fissuração (trinca não é só estética)',
      'Detalhamento mal resolvido (projeto bom, execução comprometida)',
      'Não considerar interação com fundação (estrutura isolada não existe)',
    ],
    takeaway: 'o erro não está no cálculo — está na interpretação',
  },
  consequencias: {
    title: 'O que acontece quando erra',
    bullets: [
      'fissuras excessivas',
      'deformações visíveis',
      'vibração indesejada',
      'infiltrações associadas',
      'patologias progressivas',
      'perda de desempenho estrutural',
    ],
    takeaway: 'estrutura não colapsa primeiro — ela avisa',
  },
  praticas: {
    title: 'Como fazer certo na prática',
    bullets: [
      'pensar o sistema estrutural antes de calcular',
      'validar resultados com senso crítico',
      'considerar estados limites de serviço',
      'detalhar para execução real (não ideal)',
      'compatibilizar com fundações e arquitetura',
      'prever comportamento ao longo do tempo',
    ],
  },
  insights: {
    title: 'Insights rápidos de decisão',
    insights: [
      {
        name: 'Viga',
        description:
          'não é só resistência mas: deformação excessiva gera problema funcional; flecha mal controlada aparece no uso',
      },
      {
        name: 'Laje',
        description:
          'não é só espessura mas: vibração e conforto importam; interação com paredes altera comportamento',
      },
      {
        name: 'Pilar',
        description:
          'não é só compressão mas: excentricidade muda tudo; flambagem não perdoa erro de concepção',
      },
      {
        name: 'Armadura',
        description:
          'não é só quantidade mas: posicionamento e ancoragem são críticos; detalhamento ruim compromete tudo',
      },
    ],
    takeaway: 'estrutura não falha por falta de aço — falha por erro de conceito',
  },
  perito: {
    title: 'Visão de perito',
    content:
      'maioria das falhas não é colapso; é desempenho inadequado; fissura, deformação e vibração são sinais; ignorados no projeto, cobrados depois; detalhamento deficiente é recorrente principalmente em interfaces; ausência de memória de cálculo enfraquece defesa; decisão sem registro vira vulnerabilidade.',
    takeaway: 'quem não registra decisão, perde discussão técnica',
  },
  aprofundamentos: {
    title: 'Aprofundamentos',
    links: [
      'Fissuração: quando é problema de verdade',
      'Flecha em vigas e lajes',
      'Vibração em estruturas leves',
      'Interação estrutura x fundação',
      'Excentricidade em pilares',
      'Detalhamento de armadura na prática',
      'Onde o software induz erro',
      'Estados limites: o que realmente importa',
    ],
  },
}

const nbr6120Blocks = {
  ondeEntra: {
    title: 'Onde entra na obra',
    content: 'Essa norma entra antes de qualquer dimensionamento.',
    bullets: [
      'definição das cargas atuantes',
      'entendimento do uso da edificação',
      'base para o cálculo estrutural',
      'premissas iniciais do projeto',
    ],
    takeaway: 'se a carga está errada, todo o resto nasce errado',
  },
  controle: {
    title: 'O que realmente controla',
    content: 'Não controla estrutura. Controla o que chega nela.',
    bullets: [
      'cargas permanentes',
      'cargas variáveis',
      'sobrecargas de uso',
      'ações acidentais',
      'combinações de carregamento',
    ],
    takeaway: 'não existe cálculo certo com carga errada',
  },
  erros: {
    title: 'Onde todo mundo erra',
    bullets: [
      'Subestimar carga de uso (considera cenário ideal, não real)',
      'Ignorar mudanças futuras (uso da edificação muda com o tempo)',
      'Simplificar demais cargas permanentes (peso próprio mal estimado)',
      'Não considerar combinações críticas (usa combinação “padrão” sem avaliar pior caso)',
      'Desconsiderar cargas não previstas (equipamentos, reservatórios, sobrecargas localizadas)',
    ],
    takeaway: 'carga não é número — é cenário de uso',
  },
  consequencias: {
    title: 'O que acontece quando erra',
    bullets: [
      'deformações excessivas',
      'fissuração fora do esperado',
      'sobrecarga estrutural',
      'reforços corretivos',
      'redução de vida útil',
      'risco estrutural progressivo',
    ],
    takeaway: 'a estrutura responde exatamente ao que você mandou para ela',
  },
  praticas: {
    title: 'Como fazer certo na prática',
    bullets: [
      'entender o uso real da edificação',
      'considerar cenários desfavoráveis',
      'avaliar possibilidade de mudança de uso',
      'estimar corretamente cargas permanentes',
      'verificar combinações críticas',
      'validar premissas antes de calcular',
    ],
  },
  insights: {
    title: 'Insights rápidos de decisão',
    insights: [
      {
        name: 'Carga de uso',
        description:
          'não é só tabela mas: depende do comportamento do usuário; pode ser superada facilmente em uso real',
      },
      {
        name: 'Peso próprio',
        description:
          'parece trivial mas: aumento de seção impacta diretamente; materiais adicionais são frequentemente ignorados',
      },
      {
        name: 'Reservatórios e equipamentos',
        description: 'não são detalhe mas: concentram carga; geram esforços localizados críticos',
      },
      {
        name: 'Mudança de uso',
        description:
          'quase sempre ignorada mas: transforma estrutura segura em problema; ocorre com frequência maior do que se considera',
      },
    ],
    takeaway: 'estrutura não é dimensionada para hoje — é para o que pode acontecer',
  },
  perito: {
    title: 'Visão de perito',
    bullets: [
      'erro raramente está no cálculo estrutural',
      'está na premissa de carga adotada',
      'muitos projetos assumem uso ideal',
      'a realidade entrega uso extremo',
      'ausência de definição clara de cargas fragiliza defesa',
      'sem premissa registrada, tudo vira questionável',
    ],
    takeaway: 'quem não define carga clearly, assume risco oculto',
  },
  aprofundamentos: {
    title: 'Aprofundamentos',
    links: [
      'Como definir carga de uso na prática',
      'Erros comuns em estimativa de peso próprio',
      'Cargas concentradas: onde mora o risco',
      'Reservatórios: impacto estrutural real',
      'Mudança de uso: o problema silencioso',
      'Combinações de carga: o que realmente importa',
      'Quando a tabela não é suficiente',
      'Como documentar premissas de carga',
    ],
  },
}

const nbr13752Blocks = {
  ondeEntra: {
    title: 'Onde entra na obra',
    bullets: [
      'na identificação de dúvidas, danos ou patologias',
      'em divergências técnicas e conflitos construtivos',
      'na disputa judicial, extrajudicial ou arbitral',
      'na necessidade de esclarecimento técnico estruturado',
    ],
    takeaway: 'a perícia começa quando a confiança termina',
  },
  controle: {
    title: 'O que realmente controla',
    bullets: [
      'a análise técnica focada na materialidade dos fatos',
      'a correta identificação das causas (nexo causal)',
      'a produção e registro de evidências irrefutáveis',
      'a formatação técnica do laudo ou parecer',
    ],
    takeaway: 'controla a materialidade do fato, não a intenção',
  },
  erros: {
    title: 'Onde todo mundo erra',
    bullets: [
      'Confundir sintoma com causa (tratar a trinca sem entender o recalque)',
      'Realizar análise superficial (apenas inspeção visual sem ensaios comprobatórios)',
      'Falta de imparcialidade (produzir laudo enviesado para o cliente)',
      'Falta de embasamento técnico e normativo na conclusão',
      'Não registrar o estado inicial ou as condições de contorno adequadamente',
    ],
    takeaway: 'o laudo não pode ser uma opinião, tem que ser uma constatação técnica',
  },
  consequencias: {
    title: 'O que acontece quando erra',
    bullets: [
      'diagnóstico incorreto da patologia e agravamento do dano',
      'prescrição de solução ineficaz com retrabalho e custo extra',
      'problemas jurídicos decorrentes de laudos contestados',
      'responsabilização civil do perito e perda de credibilidade',
    ],
    takeaway: 'um laudo ruim destrói a defesa de um bom projeto',
  },
  praticas: {
    title: 'Como fazer certo na prática',
    bullets: [
      'investigar a fundo a origem antes de concluir',
      'manter a imparcialidade (os fatos são os protagonistas)',
      'registrar fotograficamente e documentalmente de forma metódica',
      'estabelecer o nexo causal com clareza e lógica',
      'usar linguagem técnica objetiva e fundamentada',
    ],
    takeaway: 'siga o método, registre a evidência e seja objetivo',
  },
  insights: {
    title: 'Insights rápidos de decisão',
    insights: [
      {
        name: 'Trinca',
        description:
          'O que parece: apenas um problema estético na superfície. Realidade técnica: é o sintoma de uma movimentação; a geometria da trinca revela exatamente a direção do esforço.',
      },
      {
        name: 'Recalque',
        description:
          'O que parece: falha isolada de um pilar ou fundação. Realidade técnica: mudança de comportamento do solo que afeta a estrutura globalmente; o mapeamento é essencial.',
      },
      {
        name: 'Infiltração',
        description:
          'O que parece: falha evidente no ponto onde a mancha aparece. Realidade técnica: a água percorre caminhos complexos; a origem quase nunca está no mesmo ponto da goteira.',
      },
      {
        name: 'Responsabilidade técnica',
        description:
          'O que parece: culpa imediata do construtor ou projetista. Realidade técnica: exige comprovação do nexo causal; a omissão de manutenção pelo usuário frequentemente isenta terceiros.',
      },
    ],
    takeaway: 'todo sintoma tem uma causa, a perícia mapeia o caminho entre eles',
  },
  perito: {
    title: 'Visão de perito',
    content:
      'conflitos nascem quando a expectativa não encontra a realidade técnica. a perícia não busca culpados por instinto, mas estabelece uma linha cronológica e técnica irrefutável. a metodologia é a proteção contra a subjetividade de quem quer ter razão a qualquer custo.',
    takeaway: 'perícia é método, não achismo',
  },
  aprofundamentos: {
    title: 'Aprofundamentos',
    links: [
      'Diferença entre sintoma e causa',
      'Como investigar patologia na prática',
      'Recalque: leitura pericial',
      'Infiltração: como rastrear origem',
      'Nexo causal: o que realmente significa',
      'Como organizar evidências',
      'Erros comuns em laudos técnicos',
      'O que sustenta um parecer técnico',
    ],
  },
}

const nbr5410Blocks = {
  ondeEntra: {
    title: 'Onde entra na obra',
    bullets: [
      'projeto elétrico',
      'dimensionamento de circuitos',
      'distribuição de cargas',
      'execução das instalações',
    ],
    takeaway: 'eletricidade mal resolvida não avisa — ela acontece',
  },
  controle: {
    title: 'O que realmente controla',
    bullets: [
      'proteção contra choques',
      'proteção contra sobrecarga',
      'proteção contra curto-circuito',
      'confiabilidade do sistema',
      'segurança do usuário',
    ],
    takeaway: 'instalação elétrica não é conforto — é segurança',
  },
  erros: {
    title: 'Onde todo mundo erra',
    bullets: [
      'Subdimensionar circuitos (economia que vira risco)',
      'Misturar cargas sem critério (circuito sobrecarregado sem perceber)',
      'Ignorar proteção adequada (disjuntor errado não protege)',
      'Execução sem padrão (emenda, improviso e adaptação)',
      'Não prever uso real (instalação pensada para um cenário que não existe)',
    ],
    takeaway: 'energia não perdoa erro — ela expõe',
  },
  consequencias: {
    title: 'O que acontece quando erra',
    bullets: [
      'aquecimento de condutores',
      'desarme frequente',
      'curto-circuito',
      'risco de incêndio',
      'choque elétrico',
      'perda de equipamentos',
    ],
    takeaway: 'erro elétrico não é gradual — é abrupto',
  },
  praticas: {
    title: 'Como fazer certo na prática',
    bullets: [
      'dimensionar com margem de segurança',
      'separar circuitos corretamente',
      'prever crescimento de carga',
      'utilizar proteção adequada',
      'executar com padrão e controle',
      'validar instalação antes de uso',
    ],
  },
  insights: {
    title: 'Insights rápidos de decisão',
    insights: [
      {
        name: 'Circuitos',
        description:
          'não são só divisão funcional mas: evitam sobrecarga, facilitam controle e segurança.',
      },
      {
        name: 'Disjuntores',
        description:
          'não são só chave mas: precisam estar compatíveis com o circuito, proteção errada é falsa segurança.',
      },
      {
        name: 'Condutores',
        description:
          'não são só fio mas: seção inadequada gera aquecimento, instalação influencia desempenho.',
      },
      {
        name: 'Uso real',
        description:
          'quase sempre subestimado mas: equipamentos aumentam, carga cresce com o tempo.',
      },
    ],
    takeaway: 'instalação elétrica deve prever o uso — não o projeto',
  },
  perito: {
    title: 'Visão de perito',
    bullets: [
      'Padrões de falha nascem na adaptação frente ao projeto original',
      'Sobrecarga progressiva pelo uso desordenado',
      'Impacto severo da ausência de projetos elétricos formais',
      'Riscos invisíveis gerados por improvisos de campo',
    ],
    takeaway: 'instalação elétrica não falha sozinha — ela é forçada ao erro',
  },
  aprofundamentos: {
    title: 'Aprofundamentos',
    links: [
      'Como dimensionar circuitos na prática',
      'Erros comuns com disjuntores',
      'Sobrecarga: sinais e riscos',
      'Curto-circuito: causas reais',
      'Aquecimento de condutores',
      'Separação de circuitos',
      'Crescimento de carga ao longo do tempo',
      'Improviso em instalações',
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
    blocks: nbr6118Blocks,
  },
  {
    id: '6120',
    code: 'NBR 6120',
    title: 'Ações para o cálculo de estruturas de edificações',
    category: 'Estrutural',
    blocks: nbr6120Blocks,
  },
  {
    id: '13752',
    code: 'NBR 13752',
    title: 'Perícias de Engenharia na Construção Civil',
    category: 'Perícia',
    blocks: nbr13752Blocks,
  },
  {
    id: '5410',
    code: 'NBR 5410',
    title: 'Instalações Elétricas de Baixa Tensão',
    category: 'Instalações',
    blocks: nbr5410Blocks,
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
