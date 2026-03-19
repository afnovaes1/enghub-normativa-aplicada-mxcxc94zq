export type NormaBlock = {
  title: string
  header?: string
  content?: string
  bullets?: string[]
  takeaway?: string
  insights?: { name: string; description: string }[]
  links?: { id: string; title: string }[]
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
      { id: 'spt-pratica', title: 'Interpretação de SPT na prática' },
      { id: 'spt-nao-converge', title: 'SPT não converge: o que isso significa' },
      { id: 'escolha-fundacao', title: 'Escolha entre estaca, sapata ou radier' },
      { id: 'capacidade-carga', title: 'Capacidade de carga: o que realmente importa' },
      { id: 'recalque', title: 'Recalque: leitura técnica real' },
      { id: 'nivel-agua', title: 'Influência da água no comportamento do solo' },
      { id: 'fundacoes-divisa', title: 'Fundações na divisa' },
      { id: 'registro-obra', title: 'O que precisa ser registrado na obra' },
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
      { id: 'acustico-erros', title: 'Desempenho acústico: onde mais se erra' },
      { id: 'transmissao-lateral', title: 'Transmissão lateral de ruído' },
      { id: 'conforto-termico', title: 'Conforto térmico na prática' },
      { id: 'estanqueidade', title: 'Estanqueidade: onde a água entra' },
      { id: 'vida-util', title: 'Vida útil de projeto: o que realmente significa' },
      { id: 'interfaces', title: 'Interfaces construtivas: onde mora o problema' },
      { id: 'cliente-cobra', title: 'Onde o cliente pode cobrar (e cobra)' },
      { id: 'documentar-desempenho', title: 'Como documentar desempenho' },
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
      { id: 'fissuracao', title: 'Fissuração: quando é problema de verdade' },
      { id: 'flecha', title: 'Flecha em vigas e lajes' },
      { id: 'vibracao', title: 'Vibração em estruturas leves' },
      { id: 'interacao-solo', title: 'Interação estrutura x fundação' },
      { id: 'excentricidade', title: 'Excentricidade em pilares' },
      { id: 'detalhamento', title: 'Detalhamento de armadura na prática' },
      { id: 'erro-software', title: 'Onde o software induz erro' },
      { id: 'estados-limites', title: 'Estados limites: o que realmente importa' },
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
      { id: 'carga-uso', title: 'Como definir carga de uso na prática' },
      { id: 'peso-proprio', title: 'Erros comuns em estimativa de peso próprio' },
      { id: 'cargas-concentradas', title: 'Cargas concentradas: onde mora o risco' },
      { id: 'reservatorios', title: 'Reservatórios: impacto estrutural real' },
      { id: 'mudanca-uso', title: 'Mudança de uso: o problema silencioso' },
      { id: 'combinacoes', title: 'Combinações de carga: o que realmente importa' },
      { id: 'alem-tabela', title: 'Quando a tabela não é suficiente' },
      { id: 'documentar-cargas', title: 'Como documentar premissas de carga' },
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
      { id: 'sintoma-causa', title: 'Diferença entre sintoma e causa' },
      { id: 'investigar-patologia', title: 'Como investigar patologia na prática' },
      { id: 'recalque-pericial', title: 'Recalque: leitura pericial' },
      { id: 'infiltracao-rastreio', title: 'Infiltração: como rastrear origem' },
      { id: 'nexo-causal', title: 'Nexo causal: o que realmente significa' },
      { id: 'organizar-evidencias', title: 'Como organizar evidências' },
      { id: 'erros-laudos', title: 'Erros comuns em laudos técnicos' },
      { id: 'sustentar-parecer', title: 'O que sustenta um parecer técnico' },
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
      { id: 'dimensionar-circuitos', title: 'Como dimensionar circuitos na prática' },
      { id: 'erros-disjuntores', title: 'Erros comuns com disjuntores' },
      { id: 'sobrecarga-sinais', title: 'Sobrecarga: sinais e riscos' },
      { id: 'curto-circuito', title: 'Curto-circuito: causas reais' },
      { id: 'aquecimento-condutores', title: 'Aquecimento de condutores' },
      { id: 'separacao-circuitos', title: 'Separação de circuitos' },
      { id: 'crescimento-carga', title: 'Crescimento de carga ao longo do tempo' },
      { id: 'improviso-instalacoes', title: 'Improviso em instalações' },
    ],
  },
}

const nbr5626Blocks = {
  ondeEntra: {
    title: 'Onde entra na obra',
    bullets: [
      'projeto hidráulico',
      'distribuição de água',
      'reservação',
      'pressões no sistema',
      'execução das tubulações',
    ],
    takeaway: 'hidráulica mal resolvida não falha na obra — falha no uso',
  },
  controle: {
    title: 'O que realmente controla',
    bullets: ['pressão', 'vazão', 'estanqueidade', 'funcionamento simultâneo', 'durabilidade'],
    takeaway: 'água não respeita projeto — segue caminho físico',
  },
  erros: {
    title: 'Onde todo mundo erra',
    bullets: [
      'Subdimensionar tubulação',
      'Ignorar perdas de carga',
      'Não considerar uso simultâneo',
      'Execução sem controle',
      'Falta de setorização',
    ],
    takeaway: 'hidráulica não perdoa erro de dimensionamento',
  },
  consequencias: {
    title: 'O que acontece quando erra',
    bullets: [
      'baixa pressão nos pontos',
      'variação de vazão',
      'vazamentos',
      'infiltrações',
      'ruídos na tubulação',
      'desgaste prematuro',
    ],
    takeaway: 'o problema não aparece no teste — aparece no uso real',
  },
  praticas: {
    title: 'Como fazer certo na prática',
    bullets: [
      'dimensionar considerando perdas reais',
      'prever uso simultâneo',
      'garantir pressões adequadas',
      'executar com controle rigoroso',
      'testar sistema antes da entrega',
      'prever manutenção',
    ],
  },
  insights: {
    title: 'Insights rápidos de decisão',
    insights: [
      {
        name: 'Pressão',
        description:
          'não é constante mas varia com altura e uso; pode ser insuficiente ou excessiva',
      },
      {
        name: 'Vazão',
        description:
          'não é só volume mas depende do sistema como um todo; simultaneidade muda completamente o cenário',
      },
      {
        name: 'Tubulação',
        description: 'não é só diâmetro mas percurso influencia; conexões impactam diretamente',
      },
      {
        name: 'Reservação',
        description:
          'não é só capacidade mas influencia pressão e funcionamento; mal dimensionada compromete tudo',
      },
    ],
    takeaway: 'água não “aceita” erro — ela evidencia',
  },
  perito: {
    title: 'Visão de perito',
    bullets: [
      'infiltração raramente é onde aparece',
      'origem costuma estar distante',
      'muitos problemas são de execução mas nascem no dimensionamento',
      'ausência de testes e registros é comum e fragiliza qualquer análise',
      'sistema hidráulico é interdependente',
      'erro local afeta o todo',
    ],
    takeaway: 'água percorre — o problema também',
  },
  aprofundamentos: {
    title: 'Aprofundamentos',
    links: [
      { id: 'perda-carga', title: 'Perda de carga na prática' },
      { id: 'pressao-insuficiente', title: 'Pressão insuficiente: causas reais' },
      { id: 'uso-simultaneo', title: 'Uso simultâneo: como impacta' },
      { id: 'vazamentos-ocultos', title: 'Vazamentos ocultos' },
      { id: 'ruidos-tubulacao', title: 'Ruídos em tubulação' },
      { id: 'impacto-reservatorios', title: 'Reservatórios: impacto no sistema' },
      { id: 'execucao-erros', title: 'Execução hidráulica: onde se erra' },
      { id: 'testar-corretamente', title: 'Como testar corretamente' },
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
    title: 'Instalações Prediais de Água Fria',
    category: 'Instalações',
    blocks: nbr5626Blocks,
  },
]

export type Problema = {
  id: string
  title: string
  contexto: string
  naObra: string
  causa: string
  consequencia: string
  comoLer: string
  oQueFazer: string
  normaId: string
  normaCode: string
  normaDisplay: string
  fechamento: string
  aprofundamentoId?: string
}

export const problemas: Problema[] = [
  {
    id: 'nbr6122-01',
    title: 'ERRO QUE CUSTA CARO 01: Recalque diferencial em sapatas',
    contexto:
      'A fundação está se movimentando de forma desigual. Não é a estrutura que está falhando, é o solo respondendo de forma diferente sob cargas próximas. Sapata não “erra”. Ela responde ao que o solo entrega.',
    naObra:
      'trincas inclinadas em paredes; portas e esquadrias desalinhadas; fissuras que aumentam com o tempo; diferenças de nível entre pontos da edificação.',
    causa:
      'solo heterogêneo não identificado; SPT não interpretado corretamente; sapatas apoiadas em camadas com comportamento diferente; presença de água alterando resistência local; ausência de rigidez suficiente da estrutura.',
    consequencia:
      'fissuração progressiva; perda de funcionalidade da edificação; desvalorização do imóvel; necessidade de reforço de fundação; conflito técnico e jurídico.',
    comoLer:
      'não olhar apenas a trinca; identificar padrão de deformação; correlacionar com posição das sapatas; avaliar histórico (chuva, uso, tempo).',
    oQueFazer:
      'confirmar se o recalque está ativo; mapear deformações; investigar o solo sob cada apoio; avaliar necessidade de reforço de fundação; não tratar apenas o sintoma (trinca).',
    normaId: '6122',
    normaCode: 'NBR 6122',
    normaDisplay: 'NBR 6122 — Fundações',
    fechamento:
      'trinca é aviso. recalque diferencial é a causa. ignorar isso só adia o problema — e encarece.',
    aprofundamentoId: 'recalque',
  },
  {
    id: 'nbr6122-02',
    title: 'ERRO QUE CUSTA CARO 02: SPT não converge e a decisão ignora isso',
    contexto:
      'Os furos de sondagem mostram comportamentos diferentes, mas a decisão de fundação trata o solo como se fosse uniforme. O dado está mostrando incerteza, o projeto está assumindo certeza.',
    naObra:
      'furos próximos com NSPT diferentes; camadas inconsistentes entre pontos; variação de resistência sem padrão claro; sondagem que “não fecha” quando analisada em conjunto.',
    causa:
      'leitura isolada de cada furo; escolha do cenário mais favorável; tentativa de simplificar o comportamento do solo; pressão por solução rápida ou econômica; ausência de análise crítica da sondagem.',
    consequencia:
      'fundações apoiadas em condições diferentes; recalque diferencial; desempenho imprevisível; necessidade de reforço posterior; dificuldade de justify decisão técnica.',
    comoLer:
      'analisar os furos em conjunto, não isoladamente; alinhar cotas, não apenas profundidades; considerar variabilidade lateral do solo; identificar padrões ou ausência deles; assumir cenário crítico quando houver dúvida.',
    oQueFazer:
      'não escolher o furo mais favorável; não fazer média simplificada; considerar ampliar investigação, se necessário; ajustar solução de fundação à variabilidade; adotar abordagem mais conservadora.',
    normaId: '6122',
    normaCode: 'NBR 6122',
    normaDisplay: 'NBR 6122 — Fundações',
    fechamento:
      'quando o SPT não converge, o risco está explícito. Ignorar isso é escolher não ver.',
    aprofundamentoId: 'spt-nao-converge',
  },
  {
    id: 'nbr6122-03',
    title: 'ERRO QUE CUSTA CARO 03: Radier adotado como solução universal',
    contexto:
      'O radier está sendo escolhido não porque é a melhor solução, mas porque “resolve tudo de uma vez”. Só que isso é percepção — não comportamento real.',
    naObra:
      'residências de pequeno e médio porte; terrenos com solo duvidoso; obras sem investigação aprofundada; substituição rápida de sapata por radier; decisões baseadas em custo ou praticidade.',
    causa:
      'ideia de que o radier “distribui tudo”; tentativa de simplificar o projeto; ausência de leitura crítica do solo; pressão por solução rápida; desconhecimento do comportamento do sistema.',
    consequencia:
      'recalques totais elevados; recalques diferenciais mesmo com radier; fissuração generalizada; perda de desempenho da edificação; dificuldade de correção posterior.',
    comoLer:
      'radier não aumenta capacidade do solo; apenas distribui carga; se o solo é ruim -> continua ruim; se é heterogêneo -> continua heterogêneo.',
    oQueFazer:
      'avaliar solo com profundidade, não superficialmente; entender deformabilidade (não só resistência); analisar sensibilidade ao recalque; considerar interação solo–estrutura; usar radier quando fizer sentido técnico, não por padrão.',
    normaId: '6122',
    normaCode: 'NBR 6122',
    normaDisplay: 'NBR 6122 — Fundações',
    fechamento:
      'radier não é solução universal. Quando usado sem critério, ele só distribui o erro.',
    aprofundamentoId: 'escolha-fundacao',
  },
  {
    id: 'nbr6122-04',
    title: 'ERRO QUE CUSTA CARO 04: Capacidade de carga superestimada por correlação simplificada',
    contexto:
      'A capacidade de carga está sendo estimada por correlação direta com NSPT sem considerar o tipo de solo, condição de saturação e mecanismo real de ruptura. O número aparece, mas o comportamento não foi entendido.',
    naObra:
      'dimensionamento rápido de sapatas; estimativa de carga em estacas; uso direto de tabelas “prontas”; decisões baseadas apenas em NSPT médio.',
    causa:
      'uso automático de fórmulas empíricas; falta de distinção entre tipos de solo; ignorar influência da água; não avaliar deformabilidade; ausência de verificação cruzada.',
    consequencia:
      'fundações trabalhando no limite real; recalques acima do previsto; perda de desempenho ao longo do tempo; reforços não planejados; dificuldade de justificar tecnicamente após falha.',
    comoLer:
      'NSPT não é capacidade de carga; é um indicativo — não uma resposta; solos iguais em NSPT podem ter comportamentos diferentes; solos secos e saturados respondem diferente; ruptura e deformação são coisas distintas.',
    oQueFazer:
      'usar correlação como ponto de partida, não como conclusão; identificar tipo de solo corretamente; considerar condição crítica (saturada); avaliar recalque além da ruptura; aplicar mais de um método (ex: Décourt-Quaresma, Aoki-Velloso); fazer “duplo check” antes de fechar a carga.',
    normaId: '6122',
    normaCode: 'NBR 6122',
    normaDisplay: 'NBR 6122 — Fundações',
    fechamento:
      'quando a capacidade vem fácil demais, desconfie. Solo não é simples — o erro costuma ser.',
    aprofundamentoId: 'capacidade-carga',
  },
  {
    id: 'nbr6122-05',
    title: 'ERRO QUE CUSTA CARO 05: Execução de estaca sem controle = capacidade fictícia',
    contexto:
      'A estaca foi dimensionada corretamente, mas a execução não garantiu que ela realmente existe como projetada. O projeto prevê uma capacidade, a obra entrega outra.',
    naObra:
      'estacas escavadas sem controle de verticalidade; variação de diâmetro ao longo do fuste; limpeza inadequada de fundo; concretagem com segregação ou falhas; ausência de registro executivo.',
    causa:
      'confiança excessiva na equipe executora; ausência de fiscalização técnica; tentativa de ganhar produtividade; falta de registro de execução; não verificação de parâmetros críticos.',
    consequencia:
      'capacidade de carga menor que a prevista; aumento de recalques; comportamento imprevisível; falhas localizadas difíceis de diagnosticar; necessidade de reforço posterior.',
    comoLer:
      'estaca não é o que foi projetado, é o que foi executado; pequenas falhas de execução -> grandes impactos; variação de diâmetro -> alteração direta na capacidade; falha de limpeza -> base comprometida.',
    oQueFazer:
      'registrar cada estaca executada; controlar profundidade, diâmetro e verticalidade; garantir limpeza de fundo; acompanhar concretagem; exigir relatório executivo completo; aplicar ensaios de verificação quando necessário.',
    normaId: '6122',
    normaCode: 'NBR 6122',
    normaDisplay: 'NBR 6122 — Fundações',
    fechamento: 'estaca sem controle não é fundação — é aposta.',
    aprofundamentoId: 'escolha-fundacao',
  },
  {
    id: 'nbr6122-06',
    title: 'ERRO QUE CUSTA CARO 06: Falta de investigação adequada = decisão no escuro',
    contexto:
      'A fundação está sendo definida com base em informação insuficiente do solo. Não é que a decisão esteja errada, é que ela foi tomada sem base suficiente.',
    naObra:
      'número reduzido de furos de sondagem; ausência de sondagem em áreas críticas; extrapolação de dados entre pontos distantes; confiança em “experiência de obras próximas”; início de obra antes da investigação completa.',
    causa:
      'tentativa de reduzir custo inicial; pressão por prazo; excesso de confiança na experiência; subestimação da variabilidade do solo; desconhecimento do impacto da investigação.',
    consequencia:
      'escolha inadequada de fundação; recalques não previstos; necessidade de reforço; aumento de custo durante a obra; conflitos técnicos e jurídicos.',
    comoLer:
      'sondagem não é custo, é redução de incerteza; solo não é uniforme; pequenas distâncias podem ter grandes variações; decisão sem dado é suposição.',
    oQueFazer:
      'definir campanha de sondagem adequada ao porte da obra; investigar pontos críticos (cargas, divisas, cortes); não extrapolar dados sem critério; revisar solução após obtenção dos dados; considerar investigação complementar quando necessário.',
    normaId: '6122',
    normaCode: 'NBR 6122',
    normaDisplay: 'NBR 6122 — Fundações',
    fechamento: 'sem investigação, não existe projeto de fundação — existe tentativa com risco.',
    aprofundamentoId: 'spt-pratica',
  },
  {
    id: 'nbr6122-07',
    title: 'ERRO QUE CUSTA CARO 07: Falta de registro técnico = perda de defesa',
    contexto:
      'As decisões foram tomadas e a obra executada, mas não existe registro técnico consistente. O problema não é só técnico, é ausência de evidência.',
    naObra:
      'ausência de relatório de sondagem formal anexado; falta de registro de alterações de projeto; inexistência de diário de obra técnico; execução sem documentação fotográfica adequada; decisões tomadas verbalmente.',
    causa:
      'subestimação da importância do registro; foco apenas na execução; falta de organização técnica; confiança excessiva entre as partes; ausência de cultura de rastreabilidade.',
    consequencia:
      'impossibilidade de comprovar decisões técnicas; perda de defesa em caso de litígio; responsabilização indevida; dificuldade de análise pericial; conflitos prolongados.',
    comoLer:
      'registro técnico não é burocracia, é instrumento de proteção; decisão sem registro -> vulnerável; execução sem evidência -> questionável; ausência de histórico -> interpretação livre de terceiros.',
    oQueFazer:
      'manter registro formal de premissas de projeto; documentar todas as alterações; registrar execução (fotos, relatórios, medições); manter rastreabilidade de decisões; organizar documentação técnica da obra.',
    normaId: '6122',
    normaCode: 'NBR 6122',
    normaDisplay: 'NBR 6122 — Fundações (Complementar: NBR 13752:2024 – Perícias de Engenharia)',
    fechamento: 'quem não registra o que fez, aceita que outros definam o que aconteceu.',
    aprofundamentoId: 'registro-obra',
  },
]

export type Aprofundamento = {
  id: string
  normaId: string
  title: string
  context: string
  naPratica: string
  erroComum: string
  comoInterpretar: string
  oQueFazer: string
  fechamento?: string
}

const aprofundamentosDetalhes: Record<string, Partial<Aprofundamento>> = {
  'spt-pratica': {
    context:
      'SPT não é número. É leitura de comportamento do solo. O erro começa quando o resultado é tratado como valor absoluto, sem contexto de profundidade, material e condição de execução.',
    naPratica:
      'Escolha de tipo de fundação; definição de cota de apoio; estimativa de capacidade de carga; análise de recalque. E principalmente: 👉 quando os furos “parecem bons”, mas a obra começa a responder diferente.',
    erroComum:
      'Ler o NSPT isoladamente; comparar furos apenas por profundidade (ignorando cotas); assumir homogeneidade do solo; ignorar transições de camada; desconsiderar condição de saturação. 👉 resultado: decisão baseada em número, não em perfil.',
    comoInterpretar:
      'Analisar o perfil completo, não só o valor pontual; alinhar cotas entre furos (profundidade ≠ mesma condição geotécnica); identificar coerência entre camadas; observar variações abruptas; considerar o tipo de solo, não só o índice. 👉 SPT precisa “contar uma história” — não pode ser só tabela.',
    oQueFazer:
      'Cruzar informações entre furos; questionar incoerências; considerar cenário mais desfavorável; ajustar decisão ao comportamento esperado do solo; se necessário, complementar investigação. 👉 quando o SPT levanta dúvida, o erro é ignorar — não investigar.',
    fechamento: 'SPT não erra. Quem erra é quem interpreta sem contexto.',
  },
  'spt-nao-converge': {
    context:
      'Quando os furos de sondagem apresentam resultados distintos para uma mesma cota ou condição esperada, não é erro do ensaio. 👉 é o solo mostrando que não é homogêneo. A não convergência é um sinal — não um problema do dado.',
    naPratica:
      'Dois furos próximos com NSPT diferentes; camadas que “desaparecem” ou mudam de comportamento; variação de resistência sem padrão claro; discrepância entre perfil previsto e comportamento real da obra. 👉 geralmente ignorado quando “um dos furos parece bom”.',
    erroComum:
      'Escolher o furo mais favorável; fazer média entre resultados distintos; assumir que um dos furos está “errado”; ignorar variabilidade lateral do solo. 👉 resultado: decisão otimista em solo não confiável.',
    comoInterpretar:
      'Considerar que o solo é heterogêneo; identificar zonas de transição ou descontinuidade; avaliar a pior condição como referência; observar padrão regional (não só local); entender que a não convergência pode indicar risco. 👉 divergência de SPT é informação — não ruído.',
    oQueFazer:
      'Aumentar número de furos, se necessário; adotar solução mais conservadora; evitar decisões baseadas em um único ponto; revisar escolha de fundação; considerar métodos que reduzam sensibilidade à variabilidade. 👉 quando o solo não é confiável, o projeto precisa ser.',
    fechamento:
      'SPT não converge quando o solo não é previsível. Ignorar isso é assumir risco sem perceber.',
  },
  'escolha-fundacao': {
    context:
      'Não existe fundação “melhor”. Existe fundação adequada ao comportamento do solo e da estrutura. 👉 a escolha errada normalmente nasce de simplificação excessiva.',
    naPratica:
      'Fase de projeto de fundação; revisão de solução por custo; adaptação em obra; decisão rápida sem investigação completa. 👉 principalmente quando se tenta padronizar solução para todo o terreno.',
    erroComum:
      'Escolher pela carga apenas; adotar solução “mais econômica” no papel; assumir que solo superficial responde igual em toda a área; usar radier como solução universal para obra leve; adotar estaca sem entender o solo ao longo da profundidade. 👉 resultado: solução aparentemente viável, comportamento problemático.',
    comoInterpretar:
      '👉 Sapata: funciona bem quando solo superficial é competente e homogêneo (atenção: sensível à variação de solo e saturação). 👉 Radier: funciona bem quando distribuição de carga é uniforme e solo tem comportamento previsível (atenção: não elimina recalque, apenas distribui). 👉 Estaca: funciona bem quando solo superficial é fraco e há camada resistente em profundidade (atenção: depende da execução). 👉 escolha não é pelo tipo de obra — é pelo comportamento esperado.',
    oQueFazer:
      'Interpretar o perfil de solo completo; avaliar variabilidade lateral; considerar nível d’água; analisar sensibilidade ao recalque; compatibilizar com rigidez da estrutura; evitar decisões baseadas apenas em custo. 👉 fundação deve responder ao solo — não ao orçamento.',
    fechamento: 'Não é a fundação que resolve o problema — é a escolha correta dela.',
  },
  'capacidade-carga': {
    context:
      'Capacidade de carga não é um número fixo. 👉 é o resultado de uma interação entre solo, fundação e condição de carregamento. O erro começa quando ela é tratada como valor isolado.',
    naPratica:
      'Definição do tipo de fundação; dimensionamento de sapatas e estacas; validação de soluções “econômicas”; análise de segurança. 👉 principalmente quando o valor “fecha no cálculo”, mas o comportamento não acompanha.',
    erroComum:
      'Confiar cegamente em correlação de NSPT; desconsiderar tipo de solo; ignorar influência da água; não avaliar mecanismo de ruptura; tratar capacidade como valor único (e não faixa). 👉 resultado: fundação dimensionada no limite… sem margem real.',
    comoInterpretar:
      'Capacidade de carga ≠ só resistência do solo; depende do tipo de fundação, do mecanismo de ruptura, da condição de saturação e da forma de carregamento. 👉 o mesmo solo responde diferente para soluções diferentes.',
    oQueFazer:
      'Não depender apenas de SPT; avaliar comportamento do solo como sistema; considerar condição mais crítica (geralmente saturada); entender como a carga será transferida; evitar trabalhar próximo do limite sem controle. 👉 capacidade de carga não é “quanto aguenta” — é como responde.',
    fechamento: 'Não é o número que define a segurança — é a interpretação dele.',
  },
  recalque: {
    context:
      'Recalque não é, por si só, um problema. 👉 é um comportamento natural do solo. O problema começa quando ele é excessivo, diferencial ou não previsto.',
    naPratica:
      'Trincas em alvenaria; portas e janelas desalinhadas; pisos fissurados; estruturas com deformações visíveis. 👉 muitas vezes tratado como “problema estrutural”, quando é de fundação.',
    erroComum:
      'Avaliar recalque apenas visualmente; ignorar a evolução no tempo; tratar sintoma e não causa; assumir que “parou” sem monitoramento; desconsiderar interação solo–estrutura. 👉 resultado: intervenção errada ou tardia.',
    comoInterpretar:
      'Recalque absoluto → nem sempre crítico; recalque diferencial → quase sempre crítico; velocidade do recalque → define urgência; padrão de deformação → indica causa. 👉 solo sempre cede. A questão é como e quanto.',
    oQueFazer:
      'Identificar padrão das fissuras; correlacionar com posição das fundações; avaliar histórico da edificação; considerar influência de água (principal fator oculto); quando necessário, instrumentar ou simular. 👉 sem entender o mecanismo, qualquer solução é tentativa.',
    fechamento: 'Recalque não se corrige — se compreende. Só depois se intervém.',
  },
  'nivel-agua': {
    context:
      'A água não é um fator secundário. 👉 ela é um agente ativo de transformação do solo. Ela altera: resistência, deformabilidade, volume e estabilidade.',
    naPratica:
      'Solos que “amolecem” após chuva; surgimento de recalques após períodos úmidos; instabilidade de taludes; perda de capacidade de carga; aumento de deformações ao longo do tempo. 👉 muitas vezes ignorado porque o solo parecia “bom” na execução.',
    erroComum:
      'Analisar solo seco e ignorar condição saturada; desconsiderar variação do nível d’água; não prever drenagem; assumir comportamento constante ao longo do tempo. 👉 resultado: projeto válido… até a primeira chuva crítica.',
    comoInterpretar:
      'Aumento de umidade → redução de resistência; saturação → aumento de poropressão; perda de sucção em solos finos → perda significativa de capacidade. 👉 solos não saturados são enganosamente resistentes.',
    oQueFazer:
      'Sempre considerar cenário saturado (condição crítica); avaliar drenagem natural e artificial; identificar caminhos de fluxo de água; prever sistemas de alívio de pressão (drenos, geossintéticos, etc.); correlacionar com histórico climático da região. 👉 água não cria problema — ela revela fragilidades.',
    fechamento:
      'O solo que funciona seco pode falhar molhado. Projetar ignorando isso é projetar incompleto.',
  },
  'fundacoes-divisa': {
    context:
      'Fundação na divisa não é só questão técnica. 👉 é técnica + interferência + responsabilidade. Você não está lidando apenas com seu solo — está influenciando o do vizinho.',
    naPratica:
      'Obras em áreas urbanas densas; fundações próximas a muros ou limites de terreno; escavações junto à divisa; execução de estacas próximas a edificações existentes. 👉 principalmente em terrenos estreitos ou já ocupados lateralmente.',
    erroComum:
      'Ignorar influência no solo vizinho; não considerar fundação existente ao lado; executar escavação sem contenção adequada; assumir que “cada lote é independente”; ausência de vistoria prévia no imóvel vizinho. 👉 resultado: dano no vizinho… e responsabilidade direta.',
    comoInterpretar:
      'Solo não respeita limite de propriedade; tensões se propagam lateralmente; escavações alteram equilíbrio do terreno; fundações próximas interagem entre si. 👉 o que você faz no seu lote pode afetar o outro.',
    oQueFazer:
      'Realizar vistoria cautelar antes de iniciar; avaliar fundações vizinhas; prever contenção, se necessário; controlar escavação e execução; registrar condições antes, durante e depois. 👉 obra na divisa exige controle maior, não menor.',
    fechamento: 'Na divisa, o erro não fica só na sua obra — ele atravessa o muro.',
  },
  'registro-obra': {
    context:
      'Obra sem registro é obra sem memória. 👉 e, na prática, também é obra sem defesa. O problema não é só fazer errado. É não conseguir provar o que foi feito.',
    naPratica:
      'Divergência entre projeto e execução; surgimento de patologia; questionamento de responsabilidade; necessidade de perícia. 👉 principalmente quando “ninguém lembra exatamente o que aconteceu”.',
    erroComum:
      'Não registrar etapas críticas; confiar apenas em comunicação verbal; não documentar alterações em obra; ausência de controle de execução; registros incompletos ou genéricos. 👉 resultado: discussão baseada em versão, não em fato.',
    comoInterpretar:
      'Registro técnico não é burocracia; é parte do controle da obra; decisão sem registro = decisão frágil; execução sem evidência = execução questionável. 👉 o que não está documentado, não existe tecnicamente.',
    oQueFazer:
      'Registrar sondagens utilizadas; documentar escolha da fundação; registrar alterações de projeto; acompanhar e registrar execução; manter evidências (fotos, relatórios, medições); organizar histórico técnico da obra. 👉 registro não é excesso — é proteção.',
    fechamento: 'Quem não registra o que fez, aceita que outros definam o que aconteceu.',
  },
}

export const getAprofundamento = (normaId: string, id: string): Aprofundamento | undefined => {
  const norma = normas.find((n) => n.id === normaId)
  if (!norma) return undefined
  const link = norma.blocks.aprofundamentos?.links?.find((l) => l.id === id)
  if (!link) return undefined

  const detalhe = aprofundamentosDetalhes[id] || {}

  return {
    id: link.id,
    normaId: norma.id,
    title: link.title,
    context:
      detalhe.context ||
      '[Contexto — aguardando inserção manual] Explicação breve do conceito técnico abordado e sua importância estrutural ou executiva.',
    naPratica:
      detalhe.naPratica ||
      '[Onde isso aparece na prática — aguardando inserção manual] Exemplos de situações diárias de obra ou projetos onde este aspecto é decisivo.',
    erroComum:
      detalhe.erroComum ||
      '[Erro comum relacionado — aguardando inserção manual] O que a maioria dos profissionais costuma fazer errado ou negligenciar neste cenário.',
    comoInterpretar:
      detalhe.comoInterpretar ||
      '[Como interpretar corretamente — aguardando inserção manual] A visão analítica correta sob a ótica da engenharia e da norma.',
    oQueFazer:
      detalhe.oQueFazer ||
      '[O que fazer na prática — aguardando inserção manual] Ação objetiva e recomendada para evitar patologias e assegurar conformidade.',
    fechamento: detalhe.fechamento,
  }
}

export type Diagnostico = {
  id: string
  title: string
  oQueEstaAcontecendo: string
  oQueObservarEmCampo: string
  leituraTecnica: string
  hipotesesProvaveis: string
  comoConfirmar: string
  estrategiasTecnicas: string
  erroComum: string
  quandoSeTornaCritico: string
  sinteseTecnica: string
  baseTecnica: string
}

export const diagnosticos: Diagnostico[] = [
  {
    id: 'recalque-trinca-inclinada',
    title: 'Recalque com trinca inclinada em alvenaria',
    oQueEstaAcontecendo: '[Inserir descrição técnica do que está ocorrendo aqui]',
    oQueObservarEmCampo: '[Inserir os sinais e evidências visuais a serem buscados na obra]',
    leituraTecnica: '[Inserir a interpretação do comportamento estrutural/geotécnico]',
    hipotesesProvaveis: '[Inserir as principais causas que podem estar gerando o problema]',
    comoConfirmar: '[Inserir ensaios, medições ou análises para confirmar a causa]',
    estrategiasTecnicas: '[Inserir as abordagens possíveis para solução ou mitigação]',
    erroComum: '[Inserir o que profissionais geralmente erram ao lidar com isso]',
    quandoSeTornaCritico: '[Inserir os sinais de que a situação exige ação imediata]',
    sinteseTecnica: '[Inserir um resumo executivo para rápida tomada de decisão]',
    baseTecnica: '[Inserir normas, referências e literatura técnica aplicável]',
  },
]
