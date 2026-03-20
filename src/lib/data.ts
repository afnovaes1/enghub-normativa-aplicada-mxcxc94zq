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

const nbr6120Blocks = {
  ondeEntra: {
    title: 'Onde entra na obra',
    content:
      'Essa norma entra antes de qualquer desenho ou dimensionamento. É a base invisível de todas as premissas estruturais.',
    bullets: [
      'definição do uso futuro dos ambientes',
      'levantamento do peso próprio de todos os acabamentos e fechamentos',
      'consideração de cargas acidentais e móveis',
      'documentação do que a estrutura "foi avisada" que suportaria',
    ],
    takeaway: 'se a carga está errada, não importa quão perfeito seja o cálculo: o prédio falhará.',
  },
  controle: {
    title: 'O que realmente controla',
    content: 'Não controla espessura ou resistência. Controla o cenário de uso.',
    bullets: [
      'Cargas permanentes (peso dos materiais, vedações, revestimentos pesados).',
      'Cargas variáveis/acidentais (pessoas, móveis, pequenas divisórias móveis).',
      'Cargas excepcionais (reservatórios, equipamentos pesados).',
      'A distribuição teórica das cargas ao longo do tempo.',
    ],
    takeaway: 'carga invisível deforma; carga ignorada colapsa.',
  },
  erros: {
    title: 'Onde todo mundo erra',
    bullets: [
      'Adotar cargas variáveis mínimas para escritórios e permitir instalação de arquivos deslizantes super pesados.',
      'Substituir forro leve e piso laminado por gesso denso e porcelanato de grande formato sem avisar o calculista.',
      'Construir platibandas e marquises exuberantes na obra que não constavam no primeiro projeto arquitetônico enviado ao estrutural.',
      'Assumir que carga variável atua igualmente distribuída quando ela muitas vezes atua concentrada num pequeno trecho da laje.',
      'Esquecer de somar o peso da água nas tubulações penduradas e nos mega reservatórios de cobertura.',
    ],
    takeaway:
      'O erro da NBR 6120 não aparece na concretagem, aparece 5 anos depois quando a esquadria trava e a parede amassa.',
  },
  consequencias: {
    title: 'O que acontece quando erra',
    bullets: [
      'Flechas (embarrigamentos) crônicas e irreversíveis nas lajes.',
      'Esmagamento severo de paredes de alvenaria por deflexão da estrutura superior.',
      'Surgimento de fissuras cortantes ativas (sinal de limite de ruptura) próximas aos pilares e vigas.',
      'Desconforto vibratório (laje que "pula" ao caminhar).',
      'Inviabilização de reformas futuras ou necessidade de reforços estruturais caríssimos.',
    ],
    takeaway:
      'Estrutura não mente. Se ela deformou sem erro de Fck, é porque a carga superou a premissa.',
  },
  praticas: {
    title: 'Como fazer certo na prática',
    bullets: [
      'Registrar formalmente as premissas de carga nos projetos As-Built e no Manual do Proprietário.',
      'Criar "Placas de Carga Máxima" em ambientes críticos (ex: áreas técnicas, garagens suspensas, bibliotecas).',
      'Cruzar a arquitetura de interiores executiva com o memorial estrutural antes de aprovar a compra de acabamentos pesados.',
      'Não aprovar "puxadinhos" ou acréscimos na cobertura sem recálculo completo da prumada.',
    ],
  },
  insights: {
    title: 'Insights rápidos de decisão',
    insights: [
      {
        name: 'Mudança de Piso',
        description:
          'Trocar um piso vinílico por granito com argamassa espessa pode adicionar mais de 100kg/m² de carga permanente morta que consumirá toda a margem de segurança da laje.',
      },
      {
        name: 'Arquivos e Estoques',
        description:
          'O uso de arquivos deslizantes altera a carga de 250kg/m² (escritório padrão) para facilmente 800 a 1000kg/m², esgotando a capacidade da laje e causando fissuração imediata no pavimento de baixo.',
      },
      {
        name: 'Água é pesada',
        description:
          'Uma piscina de plástico montada no terraço ou um ofurô não previsto pode ultrapassar a carga acidental projetada com folga. 1m³ de água pesa 1 tonelada exata.',
      },
    ],
    takeaway:
      'A estrutura é passiva e obediente; se você colocar o peso, ela fará a força para segurar, nem que para isso precise se deformar até romper.',
  },
  perito: {
    title: 'Visão de perito',
    content:
      'Em disputas sobre danos estruturais, a primeira defesa técnica é o memorial de cargas. Se o usuário alterou o uso do imóvel, adicionou paredes pesadas onde não existiam, ou lotou o espaço com itens não previstos, a responsabilidade civil pelo dano é exclusivamente dele. Sem registro claro de quais foram as cargas da NBR 6120 no Manual de Entrega, o construtor paga a conta de uma reforma que ele nem fez.',
    takeaway:
      'Se a carga projetada não está registrada e clara, qualquer peso adicionado será considerado "uso normal" pelo juiz.',
  },
  aprofundamentos: {
    title: 'Aprofundamentos',
    links: [
      { id: 'carga-cenario-uso', title: 'Carga não é número — é cenário de uso' },
      { id: 'subestimacao-carga', title: 'Subestimação de carga: o erro que não aparece' },
      { id: 'cargas-adicionais', title: 'Cargas adicionais: o que entra depois e ninguém revisa' },
      { id: 'distribuicao-carga', title: 'Distribuição de carga: onde a conta está errada' },
      { id: 'mudanca-uso-6120', title: 'Mudança de uso: quando a estrutura fica incompatível' },
      { id: 'premissas-projeto', title: 'Premissas de projeto: o que ninguém revisita' },
    ],
  },
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
    takeaway: 'estrutura não começa no cálculo — começa na concepção e no controle de execução',
  },
  controle: {
    title: 'O que realmente controla',
    content: 'Não controla só resistência última. Controla comportamento e durabilidade.',
    bullets: [
      'segurança estrutural',
      'deformações excessivas (flechas)',
      'fissuração (limites de abertura)',
      'durabilidade (cobrimento, tipo de cimento)',
      'estabilidade global',
    ],
    takeaway: 'estrutura que “passa no cálculo” pode falhar vergonhosamente no uso diário',
  },
  erros: {
    title: 'Onde todo mundo erra',
    bullets: [
      'Economizar nos espaçadores de armadura (condenando a durabilidade)',
      'Ignorar estados limites de serviço (estrutura segura, mas super flexível e desconfortável)',
      'Adicionar água no caminhão betoneira para "facilitar" (matando a resistência)',
      'Detalhamento mal resolvido na obra (armadura amontoada que impede concretagem)',
      'Retirar o escoramento antes do tempo seguro de cura',
    ],
    takeaway:
      'o erro mais grave não está na fórmula — está no manuseio do material e do aço na forma',
  },
  consequencias: {
    title: 'O que acontece quando erra',
    bullets: [
      'fissuras excessivas e progressivas',
      'deformações visíveis esmagando alvenarias',
      'vibração indesejada em lajes esbeltas',
      'corrosão acelerada da armadura (ferrugem visível)',
      'patologias difíceis de corrigir e de alto custo',
    ],
    takeaway: 'estrutura de concreto não colapsa de surpresa — ela avisa primeiro',
  },
  praticas: {
    title: 'Como fazer certo na prática',
    bullets: [
      'garantir cobrimento e amarração impecável',
      'controlar rigorosamente o slump test e proibir adição de água',
      'considerar estados limites de serviço e detalhar contra-flecha',
      'detalhar encontros (nós) para execução real (com espaço para o vibrador)',
      'fazer cura úmida contínua nas primeiras horas e dias',
    ],
  },
  insights: {
    title: 'Insights rápidos de decisão',
    insights: [
      {
        name: 'Cobrimento',
        description:
          'não é frescura de norma mas: é a única fronteira que protege o aço de enferrujar e destruir a peça',
      },
      {
        name: 'Água',
        description:
          'não serve para "amolecer" mas: cada litro a mais no balão destrói a resistência e aumenta fissuras de retração',
      },
      {
        name: 'Trinca',
        description:
          'não é apenas estética mas: a geometria dela (45°, vertical, mapa) conta exatamente por que a estrutura falhou',
      },
      {
        name: 'Escoramento',
        description:
          'não é só suporte mas: tirá-lo antes do tempo causa flechas imediatas e irreversíveis (fluência prematura)',
      },
    ],
    takeaway: 'estrutura de concreto não falha por erro de software — falha por erro de canteiro',
  },
  perito: {
    title: 'Visão de perito',
    content:
      'a maioria absoluta das falhas estruturais em disputas não envolve risco de desabamento, mas sim deformações inadmissíveis (portas travando, paredes esmagadas) ou degradação rápida (armadura exposta). ausência de diários de concretagem, controle tecnológico (FVS) e ensaios enfraquece totalmente a defesa da construtora.',
    takeaway: 'quem não rastreia seu concreto, aceita que terceiros decidam por que ele falhou',
  },
  aprofundamentos: {
    title: 'Aprofundamentos',
    links: [
      { id: 'armadura-pratica', title: 'Armadura: o que muda da prancha para a obra' },
      {
        id: 'cobrimento-invisivel',
        title: 'Cobrimento: o erro invisível que vira problema depois',
      },
      { id: 'fissuracao-aviso', title: 'Fissuração: quando não é estética — é aviso' },
      { id: 'concreto-diferente', title: 'Concreto: o material que nunca é o mesmo do projeto' },
      { id: 'detalhamento-falha', title: 'Detalhamento: onde a estrutura começa a falhar' },
      {
        id: 'execucao-sem-controle',
        title: 'Execução sem controle: quando ninguém sabe o que foi feito',
      },
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
    takeaway: 'siga o método, registre a evidência e seja objective',
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
      {
        id: 'eletrica-interferencia',
        title: 'Elétrica não é só instalação — é interferência na obra',
      },
      { id: 'rasgos-passagens', title: 'Rasgos e passagens: onde começa o problema estrutural' },
      {
        id: 'falta-compatibilizacao',
        title: 'Falta de compatibilização: o erro que vira retrabalho',
      },
      {
        id: 'execucao-improvisada-5410',
        title: 'Execução improvisada: quando o projeto não chega na obra',
      },
      { id: 'aquecimento-sobrecarga', title: 'Aquecimento e sobrecarga: o risco invisível' },
      { id: 'manutencao-ignorada', title: 'Manutenção ignorada: o problema que aparece depois' },
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
    id: '6120',
    code: 'NBR 6120',
    title: 'Ações para o cálculo de estruturas de edificações',
    category: 'Estrutural',
    blocks: nbr6120Blocks,
  },
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
  // ----------------------------------------------------
  // Problemas NBR 6120
  // ----------------------------------------------------
  {
    id: 'nbr6120-01',
    title: 'ERRO QUE CUSTA CARO 01: Subestimação de carga',
    contexto:
      'Um erro silencioso e clássico: a estrutura é calculada para um cenário otimista ou mínimo de norma, mas o uso real é completamente diferente. Ambientes recebem sobrecargas muito maiores do que as consideradas inicialmente, ou sofrem mudança de uso ao longo do tempo.',
    naObra:
      'Surgimento de flechas visíveis em lajes, paredes divisórias trincando por esmagamento sob a laje fletida, e portas que começam a travar sem motivo aparente.',
    causa:
      'Adoção cega de valores mínimos de norma sem questionar a arquitetura ou o cliente sobre a operação real. Arquivos deslizantes ou estoques tratados como "escritório padrão".',
    consequencia:
      'Sobrecarga constante e não documentada. A estrutura entra em fadiga, exigindo reforços estruturais caríssimos ou inviabilizando o uso do ambiente.',
    comoLer:
      'Se a laje não tem problemas de execução, mas deforma continuamente, a matemática estrutural foi traída pela premissa de carga subestimada.',
    oQueFazer:
      'Realizar auditoria de uso real imediatamente. Interditar ou remanejar cargas concentradas se necessário. Todo projeto deve ter as premissas de carga formalmente validadas com o cliente.',
    normaId: '6120',
    normaCode: 'NBR 6120',
    normaDisplay: 'NBR 6120 — Ações em Estruturas',
    fechamento:
      'Subestimar carga no projeto não economiza aço. Apenas transfere a conta multiplicada para a vida útil do edifício.',
    aprofundamentoId: 'subestimacao-carga',
  },
  {
    id: 'nbr6120-02',
    title: 'ERRO QUE CUSTA CARO 02: Carga não considerada',
    contexto:
      'Elementos pesados que são incorporados ao projeto tardiamente ou durante a vida útil sem recálculo: equipamentos de grande porte, novos reservatórios, painéis solares pesados, fechamentos de fachada ou sistemas adicionais que não constavam na premissa.',
    naObra:
      'Balanços e marquises fissurando severamente na face superior (tração). Lajes de cobertura defletindo após instalação de novas centrais de ar ou placas.',
    causa:
      'Falta de comunicação entre as disciplinas e o cliente. Obras de "melhoria" ou acabamento tratadas de forma leiga como tendo "peso zero".',
    consequencia:
      'Elementos esbeltos podem entrar em colapso parcial ou total sob o novo peso permanente, esgotando completamente a margem de segurança.',
    comoLer:
      'Qualquer quilo não previsto que entra no prédio consome a segurança da peça. Se o projeto não previu, a estrutura sofrerá.',
    oQueFazer:
      'Exigir laudo de validação estrutural e recálculo para qualquer adição de elementos pesados ou mudança de sistemas que alterem a carga permanente morta.',
    normaId: '6120',
    normaCode: 'NBR 6120',
    normaDisplay: 'NBR 6120 — Ações em Estruturas',
    fechamento:
      'O peso não liga se o prédio já tem Habite-se. Adicionou carga invisível, a estrutura sofrerá de forma bem visível.',
    aprofundamentoId: 'cargas-adicionais',
  },
  {
    id: 'nbr6120-03',
    title: 'ERRO QUE CUSTA CARO 03: Distribuição de carga mal entendida',
    contexto:
      'Tratar forças pontuais violentas como se fossem suaves cargas uniformemente distribuídas. O cálculo assume distribuição ideal, mas a carga real é concentrada em pontos críticos ignorados, como apoios de máquinas.',
    naObra:
      'Riscos de punção (cisalhamento) pontual na laje, fissuras concêntricas ao redor de pés de equipamentos pesados, afundamentos localizados.',
    causa:
      'Omitir o estudo de cargas pontuais e linhas de tensão, transformando todos os pesos num valor "por metro quadrado" para facilitar a modelagem estrutural.',
    consequencia:
      'Dano estrutural focalizado e agudo. Risco iminente de equipamentos perfurarem a laje (colapso progressivo por punção).',
    comoLer:
      'A carga total do ambiente pode ser baixa, mas se concentrada numa "agulha" de quatro pés de apoio, ela se torna uma força de ruptura catastrófica.',
    oQueFazer:
      'Mapear apoios de equipamentos pesados e criar bases inerciais, estrados ou engrossamentos de laje (capitéis/vigas) exatamente sob esses pontos.',
    normaId: '6120',
    normaCode: 'NBR 6120',
    normaDisplay: 'NBR 6120 — Ações em Estruturas',
    fechamento:
      'Três toneladas espalhadas na laje é premissa de norma. Três toneladas em quatro pontas de ferro é uma arma perfurante.',
    aprofundamentoId: 'distribuicao-carga',
  },
  {
    id: 'nbr6120-04',
    title: 'ERRO QUE CUSTA CARO 04: Interação com outras disciplinas',
    contexto:
      'Falta de compatibilização conceitual: a arquitetura define um uso, mas a estrutura assume outro genérico. Além disso, instalações prediais (MEP) adicionam peso imprevisto com redes penduradas ou cheias de água.',
    naObra:
      'Tirantes de redes hidrossanitárias deformando lajes nervuradas muito finas; tubulações rompendo cobrimentos; vigas furadas irregularmente para passagem de dutos.',
    causa:
      'Compatibilização focada apenas em "desenho 3D" (para os tubos não baterem nas vigas), ignorando a compatibilização física de peso e suporte de carga.',
    consequencia:
      'Lajes puxadas para baixo pelas tubulações. Vigas fragilizadas perdendo inércia. Conflito permanente entre o que a estrutura aguenta e o que a instalação pesa.',
    comoLer:
      'Água pesa 1 tonelada por metro cúbico. Uma central de incêndio não é apenas "tubo", é uma âncora pesadíssima pendurada na estrutura.',
    oQueFazer:
      'Entregar o mapa de cargas pontuais de suportes de instalações ao engenheiro calculista para validação antes de emitir a prancha estrutural final.',
    normaId: '6120',
    normaCode: 'NBR 6120',
    normaDisplay: 'NBR 6120 — Ações em Estruturas',
    fechamento:
      'Cano cheio de água também pesa. Quando a compatibilização ignora a gravidade, a física cobra a conta em deformações.',
    aprofundamentoId: 'cargas-adicionais',
  },
  {
    id: 'nbr6120-05',
    title: 'ERRO QUE CUSTA CARO 05: Carga variável vs. fixa',
    contexto:
      'Erros conceituais profundos que distorcem o cálculo estrutural ao tratar cargas variáveis (que podem mudar de posição ou ausentar-se) como cargas fixas permanentes, ou vice-versa, subestimando as piores combinações (envoltórias).',
    naObra:
      'Fissuração em vigas contínuas nos apoios intermediários devido à falta de verificação de alternância de cargas; lajes vibrando excessivamente.',
    causa:
      'Modelagem simplificada no software, assumindo que a carga variável atua em 100% dos vãos simultaneamente o tempo todo, mascarando momentos fletores negativos críticos.',
    consequencia:
      'A estrutura pode falhar não por excesso de peso total, mas porque um vão carregado e outro vazio geram esforços de torção e flexão não cobertos pela armadura detalhada.',
    comoLer:
      'Carga variável (pessoas, móveis) se move. A estrutura precisa estar pronta para o cenário onde uma sala está lotada e a vizinha está completamente vazia.',
    oQueFazer:
      'Garantir que o cálculo estrutural contemple corretamente as envoltórias e a alternância de sobrecargas variáveis conforme manda a norma.',
    normaId: '6120',
    normaCode: 'NBR 6120',
    normaDisplay: 'NBR 6120 — Ações em Estruturas',
    fechamento:
      'Carga variável não é peso estático. É dinâmica e alternância. O pior esforço muitas vezes surge quando metade da carga não está lá.',
    aprofundamentoId: 'mudanca-uso-6120',
  },
  {
    id: 'nbr6120-06',
    title: 'ERRO QUE CUSTA CARO 06: Falta de revisão',
    contexto:
      'Mudanças drásticas no projeto arquitetônico, troca de materiais ou elevação de sobrecargas durante o ciclo longo da construção que simplesmente não são refletidas na revisão do cálculo estrutural.',
    naObra:
      'Paredes pesadas construídas onde havia apenas laje livre; troca de forro leve por enchimentos densos de argamassa; esquadrias duplas gigantescas substituindo as originais leves.',
    causa:
      'O cálculo estrutural é tratado como documento "fechado e morto" no primeiro dia de obra. Setor de compras e arquitetura alteram premissas sem avisar a engenharia estrutural.',
    consequencia:
      'Edificação inaugurada já com sua capacidade de carga esgotada pelas próprias "melhorias" não calculadas de obra, garantindo fissuração crônica e irreversível.',
    comoLer:
      'A estrutura foi moldada para o Projeto Rev. 00, mas a arquitetura executou a Rev. 05. A diferença entre elas é o peso que vai esmagar a laje.',
    oQueFazer:
      'Impor rotinas de "Auditoria de Cargas" (Checkpoints) a cada grande alteração de arquitetura ou troca de especificação de materiais de acabamento pesado.',
    normaId: '6120',
    normaCode: 'NBR 6120',
    normaDisplay: 'NBR 6120 — Ações em Estruturas',
    fechamento:
      'Se o canteiro e as compras rodam num mundo livre ignorando a folha de cargas do projetista, a obra finalizada já nasce doente.',
    aprofundamentoId: 'premissas-projeto',
  },

  // ----------------------------------------------------
  // Problemas NBR 6122
  // ----------------------------------------------------
  {
    id: 'nbr6122-01',
    title: 'ERRO QUE CUSTA CARO 07: Recalque diferencial em sapatas',
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
    title: 'ERRO QUE CUSTA CARO 08: SPT não converge e a decisão ignora isso',
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
    title: 'ERRO QUE CUSTA CARO 09: Radier adotado como solução universal',
    contexto:
      'O radier está sendo escolhido não porque é a melhor solução, mas porque “resolve tudo de uma vez”. Só que isso é percepção — não comportamento real.',
    naObra:
      'residências de pequeno e médio porte; terrenos com solo duvidoso; obras sem investigação aprofundada; substituição rápida de sapata por radier; decisões baseadas em custo ou praticidade.',
    causa:
      'ideia de que o radier “distribui tudo”; tentativa de simplificar o projeto; ausência de leitura crítica do solo; pressão por solução rápida; desconhecimento do comportamento do sistema.',
    consequencia:
      'recalques totais elevados; recalques diferenciais mesmo com radier; fissuração generalizada; perda de desempenho da edificação; dificuldade de correção posterior.',
    comoLer:
      'radier não aumenta capacidade do solo; apenas distribui carga; se o solo é ruim → continua ruim; se é heterogêneo → continua heterogêneo.',
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
    title: 'ERRO QUE CUSTA CARO 10: Capacidade de carga superestimada',
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
      'usar correlação como ponto de partida, não como conclusão; identificar tipo de solo corretamente; considerar condição crítica (saturada); avaliar recalque além da ruptura; aplicar mais de um método (ex: Décourt-Quaresma, Aoki-Velloso); fazer dupla checagem antes de fechar a carga.',
    normaId: '6122',
    normaCode: 'NBR 6122',
    normaDisplay: 'NBR 6122 — Fundações',
    fechamento:
      'quando a capacidade vem fácil demais, desconfie. Solo não é simples — o erro costuma ser.',
    aprofundamentoId: 'capacidade-carga',
  },
  {
    id: 'nbr6122-05',
    title: 'ERRO QUE CUSTA CARO 11: Execução de estaca sem controle',
    contexto:
      'A estaca foi dimensionada corretamente, mas a execução não garantiu que ela realmente existe como projetada. O projeto prevê uma capacidade, a obra entrega outra.',
    naObra:
      'estacas escavadas sem controle de verticalidade; variação de diâmetro ao longo do fuste; limpeza adequada de fundo; concretagem com segregação ou falhas; ausência de registro executivo.',
    causa:
      'confiança excessiva na equipe executora; ausência de fiscalização técnica; tentativa de ganhar produtividade; falta de registro de execução; não verificação de parâmetros críticos.',
    consequencia:
      'capacidade de carga menor que a prevista; aumento de recalques; comportamento imprevisível; falhas localizadas difíceis de diagnosticar; necessidade de reforço posterior.',
    comoLer:
      'estaca não é o que foi projetado, é o que foi executado; pequenas falhas de execução → grandes impactos; variação de diâmetro → alteração direta na capacidade; falha de limpeza → base comprometida.',
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
    title: 'ERRO QUE CUSTA CARO 12: Falta de investigação adequada',
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

  // ----------------------------------------------------
  // Problemas NBR 15575
  // ----------------------------------------------------
  {
    id: 'nbr15575-01',
    title: 'ERRO QUE CUSTA CARO 13: Tratar desempenho como opcional',
    contexto:
      'Ignorar os requisitos de desempenho acústico, térmico e lumínico durante a fase de concepção e projeto, tratando-os como "melhorias de luxo" e não como requisitos e obrigações inegociáveis.',
    naObra:
      'Empreendimentos entregues que sofrem de fortíssimo desconforto térmico no verão, ruídos de impacto de passos transferidos pelos pisos, e reclamações diárias de insolação não mitigada nas janelas.',
    causa:
      'Falsa crença de que garantir desempenho "custa caro na obra", total desconhecimento ou negligência perante a NBR 15575 (Norma de Desempenho).',
    consequencia:
      'Retrabalhos muitas vezes impossíveis ou com custo estratosférico pós-obra concluída (ex: refazer contra-pisos inteiros), depreciação acelerada da marca e judicialização da entrega.',
    comoLer:
      'O desempenho habitacional não brota de um projeto padrão. Se o projeto de arquitetura e complementares não previu a mitigação, a obra jamais terá como criá-la acidentalmente.',
    oQueFazer:
      'Incluir obrigatoriamente diretrizes rigorosas de desempenho (acústico, térmico, lumínico e durabilidade) logo na fase de concepção arquitetônica.',
    normaId: '15575',
    normaCode: 'NBR 15575',
    normaDisplay: 'NBR 15575 — Desempenho Habitacional',
    fechamento: 'Desempenho não se improvisa na obra. Ou nasce no papel, ou morre no orçamento.',
    aprofundamentoId: 'conforto-termico',
  },
  {
    id: 'nbr15575-02',
    title: 'ERRO QUE CUSTA CARO 14: Confiar em materiais, esquecer o sistema',
    contexto:
      'A falha clássica na interface. O desempenho geral da vedação (acústico, água) depende crucialmente de como o sistema é instalado, e não apenas de ser um material de alto padrão com selo no catálogo.',
    naObra:
      'Esquadrias vendidas como "super acústicas" instaladas com frestas e espuma inadequada; mantas asfálticas de altíssima qualidade mal soldadas nos ralos ou viradas soltas nas quinas.',
    causa:
      'Achar que o material faz o trabalho sozinho. Falta de compatibilização e detalhamento de interfaces. Confiança cega em catálogos em detrimento do acompanhamento sistemático de campo.',
    consequencia:
      'Infiltrações difusas generalizadas, ruído aéreo invadindo por frestas de portas, perda total e irreversível do alto investimento feito no "material premium".',
    comoLer:
      'O material isolante de excelência perde 90% do seu efeito global quando o simples encontro entre ele e a estrutura circundante é falho. Desempenho só existe se a barreira for contínua.',
    oQueFazer:
      'Garantir detalhamento exaustivo das interfaces nos projetos executivos. Focar a supervisão de obra pesadamente no acompanhamento das junções, arremates e selagens.',
    normaId: '15575',
    normaCode: 'NBR 15575',
    normaDisplay: 'NBR 15575 — Desempenho Habitacional',
    fechamento:
      'A corrente sempre quebra no elo mais fraco. Na obra, esse elo fraco sempre é a interface de materiais.',
    aprofundamentoId: 'interfaces',
  },
  {
    id: 'nbr15575-03',
    title: 'ERRO QUE CUSTA CARO 15: Ignorar a percepção do usuário',
    contexto:
      'Construir focado apenas na estabilidade estática. Se o usuário sente profundo desconforto e as funções básicas de habitação estão prejudicadas, o problema técnico (e jurídico) existe sim.',
    naObra:
      'Edificações entregues novinhas, sem trincas, vícios estéticos ou deformações visíveis, mas com dezenas de reclamações de calor insuportável ou barulho do salto da vizinha enlouquecendo o morador de baixo.',
    causa:
      'Avaliar o edifício apenas e unicamente pelo prisma de segurança estrutural de colapso, esquecendo a "habitabilidade" e a função primária do imóvel.',
    consequencia:
      'Danos letais à imagem da construtora. Multas, processos coletivos por vícios construtivos focados na perda de habitabilidade ou na redução de conforto mínimo normativo.',
    comoLer:
      'A percepção sensorial do usuário (ouvir, sentir calor/frio, ver água onde não deveria) é o verdadeiro termômetro do sucesso de desempenho em serviço de um empreendimento.',
    oQueFazer:
      'Entender que o ciclo da engenharia não termina com a entrega das chaves. Projetar focando no uso real e no conforto sensorial que deverá ser sustentado por décadas.',
    normaId: '15575',
    normaCode: 'NBR 15575',
    normaDisplay: 'NBR 15575 — Desempenho Habitacional',
    fechamento:
      'Obra perfeitamente estruturada, porém inabitável na prática, não é obra entregue. É conflito adiado.',
    aprofundamentoId: 'cliente-cobra',
  },
  {
    id: 'nbr15575-04',
    title: 'ERRO QUE CUSTA CARO 16: Não documentar critérios nem VUP',
    contexto:
      'Entregar o empreendimento sem defining e registrar formalmente (em Manuais) a Vida Útil de Projeto (VUP), condições de manutenção ou classes de isolamento, tirando toda chance de defesa no futuro.',
    naObra:
      'O dono relata que a fachada está manchada após 3 anos ou que o ruído do elevador incomoda, e a construtora não tem documentação formal para basear sua defesa ou indicar se era necessária manutenção.',
    causa:
      'Negligência documental. Tratar manuais do proprietário como folhetos comerciais genéricos, sem o lastro técnico e a especificação exigida pelas normas vigentes.',
    consequencia:
      'Todas as reclamações de clientes, mesmo aquelas advindas da total falta de manutenção, convertem-se em "verdades jurídicas" inquestionáveis contra a construtora.',
    comoLer:
      'Sem um critério técnico formal e pactuado no ato de entrega, qualquer opinião subjetiva ou desleixo do morador vira um "vício ou defeito de obra".',
    oQueFazer:
      'Estabelecer níveis de desempenho mínimos em projeto (classe M, I, S), calcular VUPs, e registrar absolutamente tudo, de forma explícita e vinculante, no Manual de Uso e Operação do Edifício.',
    normaId: '15575',
    normaCode: 'NBR 15575',
    normaDisplay: 'NBR 15575 — Desempenho Habitacional',
    fechamento:
      'Quem não define as métricas de sucesso em projeto, acaba sendo avaliado pelas métricas de insatisfação do cliente.',
    aprofundamentoId: 'vida-util',
  },
  {
    id: 'nbr15575-05',
    title: 'ERRO QUE CUSTA CARO 17: Ausência de provas de execução',
    contexto:
      'Falta de rastreabilidade construtiva e de ensaios in loco das fases da obra que determinam o desempenho e que ficam ocultas debaixo de argamassas e forros (como mantas acústicas e mantas de laje).',
    naObra:
      'Mantas acústicas concretadas sob milhares de metros de contrapiso sem diário fotográfico, áreas molhadas revestidas sem assinatura de liberação com teste de água retida de 72h.',
    causa:
      'Foco exclusivo na velocidade e estética, considerando checklists de fiscalização técnica e testes de estanqueidade perdas de produtividade ou mera burocracia.',
    consequencia:
      'Dificuldade extrema em responder a litígios e perícias de vizinhança. Em caso de patologias, necessidade de demolições enormes só para tentar descobrir se a camada de isolamento está ali.',
    comoLer:
      'Na visão pericial ou judicial da Norma de Desempenho, aquilo que não pode ser fisicamente provado com fotos e laudos na obra tecnicamente nunca existiu.',
    oQueFazer:
      'Implementar processos draconianos de rastreabilidade para camadas ocultas. Tornar obrigatórios os ensaios técnicos antes da cobertura de qualquer elemento crítico (FVS).',
    normaId: '15575',
    normaCode: 'NBR 15575',
    normaDisplay: 'NBR 15575 — Desempenho Habitacional',
    fechamento:
      'A obra mais bem feita do mundo é perfeitamente inútil perante um tribunal sem os registros probatórios dessa excelência.',
    aprofundamentoId: 'documentar-desempenho',
  },

  // ----------------------------------------------------
  // Problemas NBR 6118
  // ----------------------------------------------------
  {
    id: 'nbr6118-01',
    title: 'ERRO QUE CUSTA CARO 18: Detalhamento mal resolvido',
    contexto:
      'O projeto no papel é uma coisa, a montagem na fôrma é outra. Os erros começam no campo com armadura mal posicionada, flagrante falta de continuidade nas emendas e ancoragem inadequada nos apoios.',
    naObra:
      'Transpasses de armadura executados todos na mesma seção no meio de vigas; encontros de pilares e vigas abarrotados de aço impedindo a passagem da brita; ganchos dobrados errados ou suprimidos.',
    causa:
      'Projetos focados apenas no cálculo e não na executabilidade; armador dobrando ferro sem seguir a prancha para "facilitar"; falta de defasagem de emendas por praticidade na armação.',
    consequencia:
      'Deslizamento da armadura dentro do concreto sob carga (falha de aderência); rompimento frágil e abrupto de nós de pórtico; concentração de tensões que o detalhamento original dissiparia.',
    comoLer:
      'A estabilidade estrutural não depende apenas da massa de aço. O aço precisa estar perfeitamente ancorado em locais onde o concreto consiga abraçá-lo. Barra não ancorada é apenas ferro pesado sem função.',
    oQueFazer:
      'Garantir a defasagem rigorosa das emendas de barras (máximo de 50% numa mesma seção tracionada); não transpassar em regiões de momento fletor crítico; prever janelas de concretagem nos nós.',
    normaId: '6118',
    normaCode: 'NBR 6118',
    normaDisplay: 'NBR 6118 — Estruturas de Concreto',
    fechamento:
      'Estruturas colapsam mais por detalhamento ruim de nó e ancoragem do que por pura falta de aço no meio do vão.',
    aprofundamentoId: 'detalhamento-falha',
  },
  {
    id: 'nbr6118-02',
    title: 'ERRO QUE CUSTA CARO 19: Execução fora do projeto',
    contexto:
      'Decisões de campo que alteram a geometria e a proteção da peça armada. Isso se manifesta em cobrimento não respeitado, espaçamento alterado em obra e excesso de improviso em armadura.',
    naObra:
      'Armadura nitidamente encostada na fôrma após a desforma; uso de pedaços de madeira ou pedras no lugar de espaçadores plásticos; armaduras negativas pisoteadas que perdem sua altura útil original na laje.',
    causa:
      'Economia cega na compra de espaçadores; falta de passarelas elevadas para trânsito da equipe durante a concretagem; ausência de amarração rígida que impede a movimentação do aço ao receber o fluxo de concreto.',
    consequencia:
      'Exposição imediata da armadura principal à corrosão (ferrugem precoce); desplacamento expansivo do concreto; redução da altura útil da peça, reduzindo drasticamente o momento fletor resistente.',
    comoLer:
      'O cobrimento é a única e solitária fronteira passiva que protege o aço de agentes agressivos. Se o aço deforma e muda de cota, a peça perde a capacidade de suportar a carga que a originou.',
    oQueFazer:
      'Exigir e fiscalizar o uso sistemático de espaçadores na densidade correta. Interditar trânsito sobre armaduras esbeltas e travar estribos firmemente para garantir o projeto estrutural íntegro.',
    normaId: '6118',
    normaCode: 'NBR 6118',
    normaDisplay: 'NBR 6118 — Estruturas de Concreto',
    fechamento:
      'Aço deslocado é aço que não trabalha. Cobrimento negligenciado é vida útil interrompida na fonte.',
    aprofundamentoId: 'cobrimento-invisivel',
  },
  {
    id: 'nbr6118-03',
    title: 'ERRO QUE CUSTA CARO 20: Fissuração descontrolada',
    contexto:
      'O concreto trinca por natureza, mas a obra trata a movimentação como imprevisto. O erro sistêmico ocorre quando há retração ignorada, falta de controle de deformação geométrica e ausência de juntas de indução.',
    naObra:
      'Superfícies de lajes com fissuras mapeadas em teia de aranha surgindo horas após o acabamento; trincas atravessando muros longos ou pisos industriais sem cortes de alívio; esmagamento em bases de apoio.',
    causa:
      'Ausência de planejamento de cura úmida (concreto evaporando água rapidamente sob sol intenso); concretagem de panos extensos de uma só vez; subestimar a variação volumétrica térmica do material jovem.',
    consequencia:
      'Queda imediata de resistência superficial; alta permeabilidade criando avenidas para cloretos e carbonatação; patologias crônicas de umidade e fissuração progressiva irreparável esteticamente.',
    comoLer:
      'A retração é um fenômeno físico inescapável da secagem do cimento. O controle não é para evitar a deformação, mas sim para absorvê-la onde o projetista quer, e não onde a física decide sozinha.',
    oQueFazer:
      'Iniciar a aspersão ou aplicação de película de cura imediatamente após a exsudação; planejar o corte de juntas de retração na idade certa do concreto (corte verde) para induzir a fissura de forma linear.',
    normaId: '6118',
    normaCode: 'NBR 6118',
    normaDisplay: 'NBR 6118 — Estruturas de Concreto',
    fechamento:
      'A obra festeja o fim da concretagem, mas a verdade é que o trabalho mais crítico (a cura e o controle) apenas começou.',
    aprofundamentoId: 'fissuracao-aviso',
  },
  {
    id: 'nbr6118-04',
    title: 'ERRO QUE CUSTA CARO 21: Concreto diferente do laboratório',
    contexto:
      'O caminhão entrega o material ensaiado, mas o canteiro o destrói. O concreto na prática sofre danos irreversíveis com traço alterado (adição de água), lançamento incorreto (alturas excessivas) e adensamento mal feito.',
    naObra:
      'Mangueira sendo inserida dentro do balão rotativo para "amolecer" a mistura dura; lançamento em pilares de 4 metros sem funil causando separação da brita; gigantescas bicheiras (ninhos de pedra) no pé das fôrmas.',
    causa:
      'Equipes despreparadas com vibradores inadequados ou insuficientes; espera excessiva do caminhão-betoneira no sol causando perda de slump natural; total falta de consciência sobre o que governa a resistência.',
    consequencia:
      'A relação água/cimento é severamente violada, criando um concreto super poroso de fck muito menor que o projeto; a armadura fica exposta pelo péssimo adensamento; perda global da segurança monolítica.',
    comoLer:
      'Cada litro extra de água dissolve a resistência mecânica de cálculo. Bicheira não é um defeito de "massa de acabamento", é a ausência crítica do material estrutural onde ele deveria absorver toda a compressão.',
    oQueFazer:
      'Rejeitar caminhões fora do slump; proibir qualquer adição de água não homologada (usar aditivo superplastificante); imergir e sacar o mangote de vibração verticalmente de forma lenta em todas as camadas.',
    normaId: '6118',
    normaCode: 'NBR 6118',
    normaDisplay: 'NBR 6118 — Estruturas de Concreto',
    fechamento:
      'Concreto resistente no catálogo vira argamassa fraca se batido com excesso de água. A resistência real nasce no controle de campo.',
    aprofundamentoId: 'concreto-diferente',
  },
  {
    id: 'nbr6118-05',
    title: 'ERRO QUE CUSTA CARO 22: Controle que não existe',
    contexto:
      'A execução ocorre às cegas, sem lastro técnico. A gestão falha devido à ausência de inspeção real, contínua falta de registro das etapas críticas e o uso irresponsável da aceitação visual como critério de liberação.',
    naObra:
      'Peças estruturais falhas recebendo "nata de cimento" rápida após a desforma para esconder nichos da fiscalização; ausência de rastreabilidade do concreto; nenhuma moldagem paralela de corpos de prova (CPs) e ensaios ausentes.',
    causa:
      'Mentalidade de produção acelerada que vê documentação técnica como atraso; fiscais de obra que não adentram as fôrmas antes do lançamento; falta da cultura obrigatória de as-built de estrutura.',
    consequencia:
      'Uma estrutura totalmente invisível perante auditorias e litígios judiciais. Em caso de sinistros, patologias graves ou perícia futura, a construtora é indefensável por não conseguir provar materialmente o que foi embutido ali.',
    comoLer:
      'Concreto armado é o material supremo do "vício oculto" porque ele sela seus defeitos logo nas primeiras horas. O que os olhos veem depois que a fôrma é removida não indica absolutamente nada sobre a alma armada da peça.',
    oQueFazer:
      'Implementar o uso militar de Fichas de Verificação de Serviço (FVS); exigir o mapeamento fotográfico ostensivo do pré-concretagem; moldar sistematicamente corpos de prova atrelando aos romaneios de entrega de cada caminhão.',
    normaId: '6118',
    normaCode: 'NBR 6118',
    normaDisplay: 'NBR 6118 — Estruturas de Concreto',
    fechamento:
      'Engenharia não se faz de lembrança visual e boca a boca. Sem registro robusto, a qualidade estrutural da obra jamais existiu.',
    aprofundamentoId: 'execucao-sem-controle',
  },

  // ----------------------------------------------------
  // Problemas NBR 5410
  // ----------------------------------------------------
  {
    id: 'nbr5410-01',
    title: 'ERRO QUE CUSTA CARO 23: Rasgos e passagens destrutivas',
    contexto:
      'Interferência estrutural direta onde a execução da rede elétrica desrespeita a integridade do civil. Em vez de prever shafts ou passagens na concretagem, a equipe elétrica mutila as peças após a desforma para passar a infraestrutura.',
    naObra:
      'Vigas estruturais perfuradas irregularmente fora do eixo neutro, pilares escarificados (rasgados) para embutir prumadas de eletrodutos, e lajes cortadas indiscriminadamente gerando trincas e perda de seção.',
    causa:
      'Falta de planejamento prévio (furos e esperas na fôrma), ausência de shafts em projeto, e a cultura de que a instalação pode "abrir caminho à força" na obra bruta.',
    consequencia:
      'Risco estrutural grave com perda imediata de seção resistente e cobrimento. Custo elevadíssimo com laudos de recuperação e grauteamento, gerando paralisação de frentes de serviço.',
    comoLer:
      'A elétrica precisa cruzar a estrutura sem agredi-la. Qualquer corte em peça estrutural após a cura que não foi validado pelo calculista é um ato de vandalismo técnico contra a segurança.',
    oQueFazer:
      'Mapear rigorosamente todas as prumadas e furos em projeto. Deixar bainhas de PVC ou isopor (esperas) na fôrma antes de concretar. Proibir absolutamente o uso de martelete em pilares e vigas sem RFI aprovada.',
    normaId: '5410',
    normaCode: 'NBR 5410',
    normaDisplay: 'NBR 5410 — Instalações Elétricas',
    fechamento:
      'A infraestrutura elétrica não pode ter o direito de matar a estrutura que a sustenta.',
    aprofundamentoId: 'rasgos-passagens',
  },
  {
    id: 'nbr5410-02',
    title: 'ERRO QUE CUSTA CARO 24: Compatibilização inexistente',
    contexto:
      'A elétrica não existe em um vácuo no canteiro; o choque com a hidráulica, com o layout arquitetônico e com as estruturas gera adaptações improvisadas e perigosas durante a montagem das frentes.',
    naObra:
      'Eletrodutos passando por dentro ou cruzando sem folga tubos de esgoto, caixas elétricas montadas onde a arquitetura previu esquadrias ou pilares, e sobreposição física de bandejamentos em pé-direito reduzido.',
    causa:
      'Projetos desenvolvidos em escritórios diferentes sem sobreposição BIM. Elétrica chegando na obra após a consolidação do civil sem o caminho livre para passar.',
    consequencia:
      'Atrasos monstruosos (retrabalho constante para desviar instalações), conflito normativo perigoso (água e energia se cruzando no mesmo nicho) e pé-direitos arquitetônicos rebaixados abruptamente.',
    comoLer:
      'Uma tubulação de energia que encosta num cano de água não é apenas um problema de "falta de espaço", é a materialização de um curto-circuito em potencial aguardando um simples vazamento.',
    oQueFazer:
      'Aplicar clash detection na fase de projetos. Definir corredores e esteiras exclusivas para cada disciplina. A regra de ouro é: energia sempre deve caminhar acima da prumada hidráulica em shafts horizontais.',
    normaId: '5410',
    normaCode: 'NBR 5410',
    normaDisplay: 'NBR 5410 — Instalações Elétricas',
    fechamento:
      'Quando o projeto não cruza as linhas na tela, o eletricista e o encanador terão que cruzar os tubos à força na laje.',
    aprofundamentoId: 'falta-compatibilizacao',
  },
  {
    id: 'nbr5410-03',
    title: 'ERRO QUE CUSTA CARO 25: Execução puramente improvisada',
    contexto:
      'Quando o projeto elétrico não chega na ponta ou é impossível de executar, a equipe de campo cria seus próprios caminhos não previstos, desalinhando caixas e forçando passagem de conduítes.',
    naObra:
      'Caixas 4x2 visivelmente fora de esquadro, eletrodutos esmagados dentro da laje por excesso de pisoteio, caixas entupidas com nata de concreto por falta de vedação, e conduítes rasgados onde os cabos depois irão "enganchar".',
    causa:
      'Ausência de fiscalização técnica da prumada antes do fechamento das alvenarias, amarração deficiente das mangueiras na malha de aço da laje, e furos mal dimensionados na caixaria.',
    consequencia:
      'Impossibilidade futura de enfiar os fios (o guia trava no tubo amassado), obrigando a quebra da laje concretada ou alvenaria já rebocada. Perda massiva de produtividade e custo de retrabalho com acabamentos.',
    comoLer:
      'Tubulação não é fio. Se a tubulação estiver estragada na fase civil, a fase de acabamento simplesmente não acontece. O conduíte tem que estar íntegro e perfeitamente amarrado.',
    oQueFazer:
      'Vedar todas as caixas com papel ou fita antes da concretagem. Exigir amarração dupla dos eletrodutos na laje (no ferro negativo e positivo). Realizar o teste com a "sonda guia" antes de rebocar as paredes.',
    normaId: '5410',
    normaCode: 'NBR 5410',
    normaDisplay: 'NBR 5410 — Instalações Elétricas',
    fechamento:
      'O conduíte amassado na hora de concretar é o revestimento quebrado na hora de entregar.',
    aprofundamentoId: 'execucao-improvisada-5410',
  },
  {
    id: 'nbr5410-04',
    title: 'ERRO QUE CUSTA CARO 26: Sobrecarga e aquecimento oculto',
    contexto:
      'A inobservância da correta dissipação térmica das fiações (fator de agrupamento) ou o uso de seções menores que o demandado gera uma resistência invisível que derrete isolamentos silenciosamente dentro da obra civil.',
    naObra:
      'Cabos derretendo a isolação dentro de eletrodutos superlotados, quadros de distribuição quentes ao toque, disjuntores desarmando sem motivo aparente ou sinais de chamuscado em tomadas revestidas.',
    causa:
      'Subdimensionamento de condutores por economia. Ignorar a ventilação do condutor ao empilhar dezenas de fios na mesma prumada apertada. Erro no aperto das conexões dos quadros (mau contato que gera aquecimento).',
    consequencia:
      'Risco extremo e iminente de incêndio e colapso total do sistema. Além do perigo à vida, há a queima frequente de equipamentos caros e o acionamento judicial do construtor por insegurança operacional.',
    comoLer:
      'A energia elétrica gera calor por efeito Joule. Se esse calor não puder escapar porque o tubo está entupido de fios, ele vai derreter o plástico e fechar arco com o vizinho.',
    oQueFazer:
      'Respeitar religiosamente o fator de agrupamento da NBR 5410 (nunca entupir conduítes além de 40% da área útil). Usar termografia no comissionamento de quadros para identificar pontos quentes por conexões frouxas.',
    normaId: '5410',
    normaCode: 'NBR 5410',
    normaDisplay: 'NBR 5410 — Instalações Elétricas',
    fechamento:
      'O fogo na instalação não começa com uma faísca externa, mas com o calor acumulado por meses dentro de um tubo subdimensionado.',
    aprofundamentoId: 'aquecimento-sobrecarga',
  },
  {
    id: 'nbr5410-05',
    title: 'ERRO QUE CUSTA CARO 27: Sistemas embutidos sem acesso',
    contexto:
      'Instalações vitais são sepultadas dentro de alvenarias e gessos sem prever nenhuma rota de resgate. A manutenção, que é certa que ocorrerá, vira uma operação de demolição civil.',
    naObra:
      'Caixas de passagem e inspeção sendo emparedadas pelo reboco ou azulejo (ficando cegas), forros de gesso monolíticos escondendo centrais de emendas, ou shafts permanentemente lacrados com drywall sem alçapão.',
    causa:
      'Predomínio da estética sobre a funcionalidade na fase de acabamentos. A arquitetura decide esconder o "feio" das caixas sem desenhar os acessos técnicos.',
    consequencia:
      'Quando o primeiro problema de cabo partido, curto ou expansão de circuito ocorrer, o condomínio precisará quebrar acabamentos caros (mármores, pintura, gesso), gerando sujeira, ódio e custo excessivo.',
    comoLer:
      'Uma instalação elétrica sem caixa de passagem acessível é um sistema de uso único. Na engenharia de manutenção, o que você não consegue ver e tocar, você não consegue consertar.',
    oQueFazer:
      'Marcar rigidamente no projeto arquitetônico os tampos de shafts, caixas de piso e alçapões no gesso sob nós vitais da fiação. As caixas de passagem não podem jamais ser revestidas definitivamente.',
    normaId: '5410',
    normaCode: 'NBR 5410',
    normaDisplay: 'NBR 5410 — Instalações Elétricas',
    fechamento:
      'Esconder o ponto de manutenção por estética não torna a obra mais bonita, apenas garante que sua parede será destruída no primeiro reparo.',
    aprofundamentoId: 'manutencao-ignorada',
  },
  {
    id: 'nbr5410-06',
    title: 'ERRO QUE CUSTA CARO 28: O projeto "resolvido em obra"',
    contexto:
      'A falta de coordenação entre o projeto executivo real e a prática. O projeto não detalha ou está completamente defasado em relação à alvenaria levantada, forçando o eletricista a virar o projetista autônomo da edificação.',
    naObra:
      'A documentação (As-Built) final não representa em nada o caminho real dos cabos. O eletricista adotou atalhos, mudou a bitola de condutores com o que tinha no almoxarifado e alterou a configuração do quadro central.',
    causa:
      'Entregar projetos executivos básicos (linhas genéricas) em vez de detalhamento real, ou desconsiderar as mudanças de layout civil que ocorreram ao longo dos meses sem avisar a projetista de elétrica.',
    consequencia:
      'Uma edificação orfã. Nenhum técnico futuro saberá por onde passa a prumada, qual disjuntor atende qual circuito e qual o limite de carga real, transformando qualquer reforma futura num risco mortal.',
    comoLer:
      'Se o As-Built elétrico é apenas uma cópia xerox do projeto básico original, o prédio foi entregue com um "mapa do tesouro" falso. A obra elétrica não rastreável é uma bomba relógio civil.',
    oQueFazer:
      'Exigir que a equipe de elétrica valide a fiação puxada versus a prancha antes do fechamento dos quadros. O As-Built deve ser dinâmico. Marcar os conduítes em laje com tinta colorida antes da concretagem e fotografar exaustivamente.',
    normaId: '5410',
    normaCode: 'NBR 5410',
    normaDisplay: 'NBR 5410 — Instalações Elétricas',
    fechamento:
      'Deixar o mestre de obras decidir a rota elétrica por conveniência na laje é jogar o projeto da norma no lixo e assinar o desconhecido.',
    aprofundamentoId: 'falta-compatibilizacao', // Mapping to the relevant deep dive
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
  // Aprofundamentos NBR 6120
  'carga-cenario-uso': {
    context:
      'Carga não é um número aleatório selecionado numa tabela; ela é a tradução física do cenário de uso arquitetônico que a estrutura precisará tolerar ininterruptamente por décadas.',
    naPratica:
      'Dimensionar toda a área de escritórios com carga genérica de 2.0 kN/m² e esquecer que os lojistas instalariam um "data center" ou uma sala cofre concentrando 10.0 kN/m² na mesma laje esbelta.',
    erroComum:
      'Omitir uma reunião obrigatória de "kick-off de cargas" onde a Arquitetura define formalmente para a Estrutura o que de fato será instalado nos ambientes, baseando-se apenas em suposições genéricas de norma.',
    comoInterpretar:
      'O valor de norma é o limite inferior mínimo de sobrevivência. A verdadeira engenharia mapeia o que o cliente realmente tenciona usar (equipamentos, caixas, veículos pesados).',
    oQueFazer:
      'Estabelecer um Memorial Descritivo de Premissas de Carga exaustivo, colher a assinatura do cliente/incorporador e fixá-lo como o anexo principal indissociável do projeto estrutural.',
    fechamento:
      'Se você não sabe para que o ambiente serve, você está chutando o peso, e o concreto não tolera matemática baseada em fé.',
  },
  'subestimacao-carga': {
    context:
      'O erro mais invisível e traiçoeiro da engenharia. Trata-se do descompasso entre a premissa otimista do projetista (que tenta "deixar o aço mais barato") e a realidade punitiva da gravidade.',
    naPratica:
      'Lajes de garagens dimensionadas apenas para "carros de passeio" sem restrições de pé-direito, permitindo a entrada contínua de caminhões de mudança ou SUVs blindadas pesadíssimas sobre lajes nervuradas.',
    erroComum:
      'Adotar cargas mínimas extremas no cálculo e simultaneamente ignorar majoradores de impacto (vibração), acreditando que "os coeficientes de segurança da norma cobrem qualquer exagero". (Eles não cobrem).',
    comoInterpretar:
      'Quando uma laje apresenta flecha crônica e ininterrupta, mas o ensaio esclerométrico atesta a qualidade do concreto, a laje não faliu: ela simplesmente está carregando o que não foi dimensionada para carregar.',
    oQueFazer:
      'Adotar premissas realistas, sempre puxadas para o cenário de longo prazo. Em áreas suscetíveis à troca de ocupação (térreo comercial), utilizar lajes mais parrudas com reservas técnicas intencionais.',
    fechamento:
      'Um carregamento subestimado não derruba o prédio de imediato, mas transforma a sua vida útil num inferno de trincas irreparáveis e ações judiciais.',
  },
  'cargas-adicionais': {
    context:
      'A estrutura nasce compatível com a teoria, mas vai sendo assassinada lentamente na prática construtiva pelas alterações feitas durante a execução sem aviso à projetista estrutural.',
    naPratica:
      'Decidir na obra rebaixar todo o piso com um "enchimento de argamassa e entulho" de 10cm, adicionando 200kg por metro quadrado permanente sobre uma laje que só previa cerâmica colada.',
    erroComum:
      'Achar que porque o concreto "parece duro e grosso", ele aguenta "qualquer coisinha a mais". Nenhuma carga "a mais" é pequena quando multiplicada pela área total de uma edificação.',
    comoInterpretar:
      "Qualquer camada não prevista no memorial (forros pesados de acartonado, espelhos d'água paisagísticos, terra para jardins suspensos) age como um veneno corrosivo contra a capacidade portante restante da peça.",
    oQueFazer:
      'Qualquer mudança arquitetônica ou de revestimento pós-projeto aprovado deve obrigatoriamente gerar uma Requisição de Informação (RFI) para o escritório de cálculo validar a capacidade remanescente.',
    fechamento:
      'Estrutura não tem "um pouco de sobra" para quem adiciona caminhões de enchimento invisíveis. Cada quilo posto no campo, deve ter sido pesada no computador.',
  },
  'distribuicao-carga': {
    context:
      'Tratar forças violentas como se fossem suaves nuvens matemáticas. Um peso total aceitável no ambiente, quando aplicado concentrado na ponta de agulha de quatro sapatas metálicas, perfura a laje em vez de flexioná-la.',
    naPratica:
      'Instalação de centrais de ar condicionado (chillers) enormes ou cofres de banco apoiados diretamente sobre a capa da laje, sem vigas de transição ou coxins emborrachados para dissipar o golpe.',
    erroComum:
      'Omitir o estudo de cargas pontuais ou linhas de tensão. Transformar todos os pesos em cargas "uniformemente distribuídas" no software de cálculo para tentar ganhar velocidade na modelagem.',
    comoInterpretar:
      'Distribuição é diluição. Sem diluição por vigas secundárias ou engrossamentos na capa de concreto estrutural, a carga exceptional cria cisalhamento extremo (punção), rompendo a peça brutalmente por rasgamento.',
    oQueFazer:
      'Mapear no projeto de arquitetura todos os pesados itens técnicos. O projeto estrutural deve prover maciços, lajes com espessura duplicada local ou pórticos rígidos sob estes apoios de alta compressão.',
    fechamento:
      'A laje pode suportar 10 elefantes caminhando espalhados, mas pode colapsar com apenas um caminhando sobre uma única pata metálica.',
  },
  'mudanca-uso-6120': {
    context:
      'A NBR 6120 vincula estritamente a "classe de peso" de um prédio à sua utilidade declarada. Mudar o negócio que opera dentro do prédio, destrói essa premissa instantaneamente.',
    naPratica:
      'Alugar uma laje de andar corrido residencial (prevista para 1.5 a 2.0 kN/m²) e transformá-la numa grande academia de ginástica lotada de equipamentos e impactos dinâmicos (que demandaria de 3.0 a 5.0 kN/m²).',
    erroComum:
      'Síndicos ou administradoras autorizarem "Retrofits" visuais profundos ou mudanças radicais de zoneamento comercial sem exigirem dos locatários a emissão de um Laudo Estrutural (ART) que confirme a viabilidade.',
    comoInterpretar:
      'Estruturas velhas e já construídas não se adaptam sozinhas a novos propósitos industriais. O risco de fadiga das peças pela introdução não monitorada de vibrações contínuas e pesos excedentes é gigantesco.',
    oQueFazer:
      'Exigir que todo projeto de "change of use" (reforma para novo fim) contenha a recertificação analítica de vigas e lajes, acompanhada da instalação de reforços sistêmicos com fibras de carbono ou chapas soldadas quando a norma não for mais atendida.',
    fechamento:
      'Comprar uma casa para montar uma estamparia é assinar um contrato cego de colapso estrutural, se a laje jamais for testada para o que ela vai enfrentar.',
  },
  'premissas-projeto': {
    context:
      'Uma vez fechadas e arquivadas as pastas de cálculos na época da fundação, o documento vira tabu e nunca mais é visitado durante os três ou mais anos de construção do edifício.',
    naPratica:
      'O estande de vendas "deu uma ideia" e alterou a fachada inteira no meio da obra. O setor de suprimentos comprou uma caixilharia importada e dupla com o triplo do peso original por "oportunidade" de mercado. A estrutura seguiu com o cálculo velho.',
    erroComum:
      'Tratar o projeto estrutural apenas como os "desenhos de montagem de forma e corte de ferro". Esquecer que atrelado a ele há um documento matemático imutável que foi balizado pelos produtos originais da arquitetura daquele ano.',
    comoInterpretar:
      'Nenhum projeto estrutural é um monolito blindado contra mudanças comerciais. Cada grande alteração em catálogos, sistemas hidrossanitários e vedações reflete imediatamente na prancha de fôrmas, devendo retroalimentar o calculista.',
    oQueFazer:
      'Impor auditorias de premissas a cada nova revisão arquitetônica (checkpoint). Uma rotina clara onde o time de obra e projeto declaram: "Isso mudou de peso. Sr. Calculista, autoriza essa nova parede flutuante ou precisa de viga nova?"',
    fechamento:
      'Se o canteiro e as compras rodam num mundo livre ignorando a folha de cargas do projetista, a edificação finalizada já nasce doente e condenada.',
  },

  // Outros aprofundamentos... (keeping existing ones below and adding NBR 5410 ones)
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
      'Definição do tipo de fundação; dimensionamento de sapatas e estacas; validação de solutions “econômicas”; análise de segurança. 👉 principalmente quando o valor “fecha no cálculo”, mas o comportamento não acompanha.',
    erroComum:
      'Confiar cegamente em correlação de NSPT; desconsiderar tipo de solo; ignorar influência da água; não avaliar mecanismo de ruptura; tratar capacidade como valor único (e não faixa). 👉 resultado: fundação dimensionada no limite… sem margem real.',
    comoInterpretar:
      'Capacidade de carga ≠ só resistência do solo; depende do tipo de fundação, do mecanismo de ruptura, da condição de saturação e da forma de carregamento. 👉 o mesmo solo responde diferente para soluções diferentes.',
    oQueFazer:
      'Não depender apenas de SPT; avaliar comportamento do solo como sistema; considerar condição mais crítica (geralmente saturada); entender como a carga will be transferida; evitar trabalhar próximo do limite sem controle. 👉 capacidade de carga não é “quanto aguenta” — é como responde.',
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
  'acustico-erros': {
    context:
      'O desempenho acústico é resultado do comportamento coletivo da edificação, não de elementos isolados. O erro estrutural começa ao ignorar a transmissão de vibrações.',
    naPratica:
      'Ruído de impacto de passos, conversas audíveis entre unidades, descarga hidráulica em shafts, ruídos de fachadas transferidos para dentro (ex: trânsito).',
    erroComum:
      'Avaliar elementos de forma isolada, confiar apenas em catálogos de materiais sem considerar a execução, ignorar interfaces rígidas.',
    comoInterpretar:
      'O som se propaga por vibração; se existe uma conexão rígida, existe transmissão de ruído. Uma parede grossa com piso sem junta flutuante transmitirá ruído.',
    oQueFazer:
      'Avaliar o sistema como um todo, tratar as interfaces, evitar continuidade rígida entre elementos (dessolidarização), detalhar e controlar a execução das vedações acústicas.',
    fechamento:
      'O material isola, mas a interface transmite. O cuidado sempre está no encontro entre as partes.',
  },
  'transmissao-lateral': {
    context:
      'O som não caminha apenas em linha reta. Ele percorre rotas laterais (flanking) através das estruturas adjacentes (lajes, pilares, fachadas) ao invés da transmissão direta.',
    naPratica:
      'Ruído audível entre unidades vizinhas mesmo com paredes "adequadas". O som da televisão do vizinho que viaja por lajes contínuas ou pilares compartilhados.',
    erroComum:
      'Achar que engrossar a parede divisória resolve tudo, ignorando as conexões rígidas da parede com o piso, pilares e teto.',
    comoInterpretar:
      'O som segue o caminho mais fácil, não apenas o mais curto. Se a via primária está bloqueada, ele desvia pela via secundária não tratada.',
    oQueFazer:
      'Prever juntas de dessolidarização, usar pisos flutuantes, tratar encontros entre alvenaria e estrutura, garantir desconexão física onde o som não deve passar.',
    fechamento: 'Se a estrutura inteira vibra junto, o som viaja junto. Desconectar é a chave.',
  },
  'conforto-termico': {
    context:
      'O conforto térmico é o resultado da interação complexa entre orientação solar, escolha de materiais da envoltória, e eficiência da ventilação do projeto.',
    naPratica:
      'Calor excessivo durante o dia em fachadas poentes, acúmulo de calor à noite (efeito de paredes radiantes), total dependência de sistemas de ar-condicionado.',
    erroComum:
      'Ignorar a carta bioclimática da região, escolher esquadrias genéricas e envidraçamentos enormes sem proteção solar, não prever ventilação cruzada.',
    comoInterpretar:
      'A edificação deve responder de forma inteligente ao clima local, não resistir ativamente a ele com alto custo energético. O foco é o controle das trocas térmicas.',
    oQueFazer:
      'Estudar sombreamentos passivos (brises), dimensionar a inércia térmica correta das vedações, garantir aberturas que permitam ventilação natural cruzada efetiva.',
    fechamento:
      'A climatização mecânica (ar-condicionado) deve ser o complemento para o conforto térmico, e não a única solução possível de um projeto mal orientado.',
  },
  estanqueidade: {
    context:
      'A água possui um comportamento sistêmico e fluido; ela percorre caminhos e descontinuidades, muitas vezes aparecendo muito longe do seu ponto de origem inicial.',
    naPratica:
      'Infiltrações misteriosas em paredes internas, vazamentos em marcos de esquadrias durante chuvas de vento, umidade ascendente em rodapés do térreo, falhas em coberturas e calhas.',
    erroComum:
      'Tratar a impermeabilização apenas como a manta no chão, ignorando as subidas (rodapés), ralos, caimentos insuficientes e, principalmente, as junções piso-parede.',
    comoInterpretar:
      'O sistema de estanqueidade quase nunca falha no meio do elemento. Ele falha nos pontos de fragilidade geométrica e nas descontinuidades construtivas.',
    oQueFazer:
      'Focar incansavelmente na continuidade da barreira estanque. Detalhar exaustivamente os arremates de ralos, caixilhos, pingadeiras, e tubulações passantes (shafts).',
    fechamento:
      'A água não tem pressa. Ela explora a falha geométrica ou a descontinuidade que o projetista esqueceu de detalhar.',
  },
  'vida-util': {
    context:
      'A Vida Útil de Projeto (VUP) não é uma garantia de eternidade dos componentes, mas um compromisso técnico de durabilidade condicionado ao uso e à manutenção adequados.',
    naPratica:
      'Fachadas que se degradam precocemente, sistemas hidráulicos falhando antes do tempo, surgimento de corrosão em armaduras ou esquadrias que perdem função.',
    erroComum:
      'Acreditar (ou deixar o cliente acreditar) que a VUP é de responsabilidade exclusiva do construtor, ignorando que a manutenção predial constante é obrigatória para atingi-la.',
    comoInterpretar:
      'O desempenho prolongado no tempo depende de um tripé inseparável: projeto adequado para o clima + execution controlada + manutenção efetiva pelo usuário final.',
    oQueFazer:
      'Documentar todos os critérios de durabilidade assumidos, entregar manuais de uso e manutenção hiper claros ao cliente e registrar cronogramas de manutenções recomendadas.',
    fechamento:
      'Construção não é um bem isento de manutenção. Atingir a VUP é sempre uma via de mão dupla entre construtor e usuário.',
  },
  interfaces: {
    context:
      'A vasta maioria das falhas de desempenho construtivo se dá nas transições (junções) entre subsistemas diferentes, e raramente no meio da vida de um elemento puro.',
    naPratica:
      'Infiltração grave no encontro exato de lajes de cobertura com platibandas, trincas recorrentes na interface de structures (pilares) com a alvenaria, falhas acústicas no vão de portas.',
    erroComum:
      'Detalhar maravilhosamente bem o sistema principal (a parede, a laje) e deixar a interface ou conexão à mercê do pedreiro para "resolver na obra do jeito dele".',
    comoInterpretar:
      'Diferentes materiais possuem comportamentos, rigidezes e coeficientes de dilatação variados. Isso cria tensões concentradas e descontinuidades críticas nos encontros.',
    oQueFazer:
      'Desenhar, calcular e especificar juntas de movimentação, selantes apropriados (poliuretanos, silicones), transições de sistemas de impermeabilização e ancoragens flexíveis.',
    fechamento:
      'A obra raramente falha no meio do painel perfeito — ela inevitavelmente falha na junta.',
  },
  'cliente-cobra': {
    context:
      'A entrada em vigor da Norma de Desempenho mudou o foco técnico e jurídico da engenharia. A avaliação não é mais apenas "a obra ficou de pé", mas se ela atende às expectativas funcionais.',
    naPratica:
      'Processos judiciais, laudos cautelares e disputas sobre calor extremo dentro das casas, vazamentos difíceis de arrumar e reclamações constantes sobre ouvir os passos do vizinho de cima.',
    erroComum:
      'O engenheiro achar que se não há "risco estrutural de colapso", então "não há problema real" a ser resolvido. Desconsiderando a função de habitabilidade do edifício.',
    comoInterpretar:
      'O usuário vai julgar a qualidade final do edifício pelo desempenho que foi entregue. O desconforto sonoro, térmico e hídrico do cliente é classificado como uma não conformidade técnica grave.',
    oQueFazer:
      'Mapear e estabelecer requisitos mínimos de desempenho desde a concepção (reunião inicial/kick-off). Alinhar firmemente as expectativas e focar não no material, mas no comportamento sistêmico do imóvel.',
    fechamento:
      'No fim do dia, o cliente não quer comprar material de construção. Ele compra o direito a silêncio, conforto e paz.',
  },
  'documentar-desempenho': {
    context:
      'O desempenho prometido precisa obrigatoriamente ser comprovado por meio de evidências concretas. Em litígios ou perícias, sem documentação a alegação da construtora vira apenas uma opinião.',
    naPratica:
      'Exigência legal de testes acústicos pós-obra, vistorias de vizinhança, clientes contratando laudos periciais e juízes cobrando cadernos de rastreabilidade de produtos e ensaios.',
    erroComum:
      'Realizar o trabalho perfeito no canteiro, mas não guardar um único registro fotográfico organizado da camada acústica antes da concretagem, nem possuir certificados de laboratório.',
    comoInterpretar:
      'Se houver um conflito sobre performance, o que vale para a norma de desempenho e para a justiça é o as-built, o ensaio de laboratório, o checklist fotográfico e o manual assinado.',
    oQueFazer:
      'Registrar incansavelmente etapas de execução críticas que ficarão ocultas (isolamentos, mantas sob contrapiso, tubulações de parede). Manter FVS (Ficha de Verificação de Serviço), laudos de ensaios e arquivos de obra impecáveis.',
    fechamento:
      'Desempenho executado de forma brilhante, mas que não foi registrado com rigor, é legalmente inexistente perante a norma.',
  },
  'armadura-pratica': {
    context:
      'A armadura foi calculada para resistir à tração em uma posição milimétrica exata. Na prancha, ela é perfeita. Na obra, ela é pisoteada, amassada e deslocada durante a concretagem e trânsito da equipe.',
    naPratica:
      'Armaduras negativas de lajes rebaixadas pela passagem de operários; estribos frouxos que se movem com o fluxo do concreto; esperas de pilares completamente fora de prumo dobradas à força.',
    erroComum:
      'Achar que "só um pouquinho fora" não faz diferença. Um rebaixamento de 2cm na armadura negativa de uma laje esbelta pode reduzir a resistência final à flexão em mais de 30%.',
    comoInterpretar:
      'A armadura só trabalha onde o projetista desenhou que ela estaria. Se a cota útil (altura efetiva) for alterada para baixo, o momento fletor resistente despenca exponencialmente.',
    oQueFazer:
      'Uso obrigatório de "caranguejos" bem amarrados para garantir a cota da armadura negativa. Instalação de passarelas elevadas sobre a laje durante a concretagem para evitar pisoteio contínuo. Rigorosa conferência.',
    fechamento:
      'Aço deslocado é aço que não trabalha. O concreto não perdoa a falta de amarração e espaçamento.',
  },
  'cobrimento-invisivel': {
    context:
      'O cobrimento é a única e solitária fronteira que protege o aço dos agentes agressivos do ambiente (como CO2 e íons cloreto). Sem ele, a vida útil do projeto simplesmente não existe.',
    naPratica:
      'Marcas nítidas de ferrugem aparecendo na base de vigas alguns meses após a entrega; armadura claramente encostada na fôrma de madeira; uso improvisado de lascas de tijolo no lugar de espaçadores plásticos.',
    erroComum:
      'Tratar o espaçador como "gasto desnecessário" ou confiar cegamente que a brita e o vibrador vão entrar sob a barra "na hora de lançar" afastando o aço.',
    comoInterpretar:
      'O cobrimento não garante a resistência mecânica de amanhã, mas garante que o prédio não comece a se auto-destruir depois de amanhã. Falha no cobrimento é patologia garantida, apenas aguardando o tempo.',
    oQueFazer:
      'Exigir e fiscalizar o uso sistemático de espaçadores plásticos ou de concreto adequados ao peso da armadura. Manter a densidade recomendada. Nunca fechar a fôrma se o aço encostar nela.',
    fechamento:
      'Economizar no espaçador é o caminho mais curto e certo para gastar milhões com recuperação estrutural em fachadas.',
  },
  'fissuracao-aviso': {
    context:
      'O concreto trinca, isso é fato consumado na engenharia, dada sua baixíssima resistência natural à tração. O foco não é "evitar que trinque", mas controlar essa fissuração e saber interpretar seus sinais.',
    naPratica:
      'Fissuras em formato de mapa na superfície de lajes no dia seguinte da concretagem; trincas a 45 graus partindo severamente de apoios de vigas; fissuras muito largas e espaçadas no meio do vão.',
    erroComum:
      'Assumir precipitadamente que absolutamente toda trinca é "normal de retração" e mandar passar argamassa ou massa corrida em cima, sem investigar se o padrão indica cisalhamento, flexão excessiva ou falta de cura.',
    comoInterpretar:
      'Fissuras mapeadas precoces apontam retração plástica (falta de cura). Fissuras perpendiculares no meio da viga indicam flexão simples. Fissuras a 45 graus nos pilares apontam esforço cortante perigoso.',
    oQueFazer:
      'Fazer o mapeamento imediato da fissura, medir sua abertura máxima, observar sua evolução no tempo (selo de gesso/fissurômetro) e correlacionar sua posição exata com o diagrama de esforços do projeto.',
    fechamento:
      'Fissura estrutural não se tapa, se investiga. A estrutura está falando e desenhando o problema na parede.',
  },
  'concreto-diferente': {
    context:
      'O projeto especifica um concreto teórico e ideal (com fck e relação água/cimento cravados). O concreto que entra na fôrma foi amassado, misturado, agitado sob o sol, viajou no trânsito e muitas vezes é adulterado no canteiro.',
    naPratica:
      'Caminhões betoneira aguardando horas a fio sob sol intenso; concreto que perde totalmente o abatimento e fica duro; a fatídica e constante exigência do vibradorista por "mais uma aguinha" no caminhão para facilitar o espalhamento.',
    erroComum:
      'Tolerar ou fechar os olhos para a adição de água não autorizada e não prevista pelo laboratório. Cada balde extra jogado ali dissolve a resistência de cálculo e abre espaço para vazios internos.',
    comoInterpretar:
      'A relação água/cimento é o coração do concreto. Água extra significa menor fck (menos resistência), mais poros capilares, maior vulnerabilidade ao CO2 e taxas de retração que não estavam na conta.',
    oQueFazer:
      'Proibir estritamente a adição de água na obra sem assinatura de responsabilidade técnica e controle (usar sempre aditivos superplastificantes se precisar de fluidez). Realizar o ensaio de slump em todos os caminhões e rejeitar as falhas.',
    fechamento:
      'Concreto fck 30 não se "amolece" com água, se plastifica. Água a mais na mangueira é resistência a menos na obra.',
  },
  'detalhamento-falha': {
    context:
      'A estabilidade estrutural não depende apenas da massa de aço. O aço precisa estar perfeitamente ancorado em locais onde o concreto ao redor consiga abraçá-lo e suportar os esforços locais de transferência de tensão.',
    naPratica:
      'Emendas de muitas vigas pesadas executadas todas na exata mesma seção (sem nenhuma defasagem); ausência de ganchos de ancoragem nos apoios cruciais; concentração gigantesca de aço num nó que não deixa a brita passar e enche de ar.',
    erroComum:
      'Executar emendas por transpasse exatamente no meio do vão das vigas (o local de maior momento e tração extrema); cortar ou ignorar ganchos obrigatórios porque eles "dão muito trabalho de enfiar na fôrma".',
    comoInterpretar:
      'Uma barra não amarrada ou não ancorada é apenas um pedaço de metal caro dentro do concreto; se a força chegar ali e a ancoragem deslizar, a peça entra em colapso como se nem houvesse aço dimensionado.',
    oQueFazer:
      'Seguir fielmente a regra de defasagem das emendas (jamais mais de 50% numa mesma seção tracionada); não transpassar na tração alta; desenhar e montar o nó de pórtico garantindo que há "janelas" por onde o concreto flua.',
    fechamento:
      'Odelapso e as tragédias estruturais nascem muito mais em nós mal detalhados do que em pilares que "faltou aço".',
  },
  'execucao-sem-controle': {
    context:
      'A grande armadilha do concreto é que ele é um material contínuo que esconde imediatamente seus vícios. Sem rastreabilidade rigorosa na hora de encher a fôrma, ninguém sabe o que tem dentro do pilar no dia seguinte.',
    naPratica:
      'Ninhos de pedra graves (bicheiras) cobertos correndo com nata de cimento assim que a fôrma sai, para que a fiscalização não veja; concretagem de pilares de 4m de altura jogando o concreto de cima sem usar tromba.',
    erroComum:
      'Aceitar o resultado apenas porque "ficou lisinho por fora", desconsiderando a segregação profunda da brita ou não fazer a moldagem rotineira dos corpos de prova de compressão (CPs) no lançamento.',
    comoInterpretar:
      'Sem os relatórios diários de obras robustos, fichas FVS e os ensaios laboratoriais dos 28 dias em mãos, o concreto estrutural é uma grande incógnita que não passará pelo crivo de nenhuma perícia.',
    oQueFazer:
      'Garantir a vibração sistemática camada por camada (jamais vibrar tocando no aço); usar funis em quedas livres elevadas; moldar corpos de prova sistematicamente para segurança jurídica.',
    fechamento:
      'Vício escondido em massa forte ou argamassa fina hoje vira laudo cautelar desastroso amanhã. Controle se documenta.',
  },

  // Aprofundamentos NBR 5410
  'eletrica-interferencia': {
    context:
      'O foco da norma 5410 na visão da construção civil não é debater seções de cabos elétricos, mas mapear o impacto físico brutal que uma infraestrutura negligenciada causa na alvenaria, na estrutura e no layout.',
    naPratica:
      'Lajes de piso perdendo recobrimento por cruzamento de múltiplos eletrodutos não previstos; tetos de gesso sendo rebaixados à força perdendo o pé-direito projetado; e alvenarias desestabilizadas por sucessivos cortes horizontais.',
    erroComum:
      'Tratar o projeto elétrico como "passar fio depois que estiver tudo pronto", esquecendo que o tubo tem volume físico e que esse volume compete por espaço milimétrico com vigas, pilares e forros.',
    comoInterpretar:
      'As instalações são "corpos estranhos" que ocupam espaço dentro da estrutura. Se a arquitetura e a engenharia não desenharem o caminho desses tubos antes da obra, a marreta do pedreiro o fará durante a execução.',
    oQueFazer:
      'Exigir que todas as prumadas elétricas e bandejamentos verticais/horizontais sejam lançados e resolvidos em plataforma BIM ou 3D na fase executiva, garantindo os recuos e shafts definidos.',
    fechamento:
      'A energia elétrica pode ser invisível, mas o duto que a transporta é duro, ocupa espaço e destrói acabamentos mal planejados.',
  },
  'rasgos-passagens': {
    context:
      'O conflito mortal entre a disciplina de instalações e a NBR 6118 (concreto armado). Quando o furo ou a espera não foi locado na fôrma de madeira, a alternativa de campo frequentemente rompe com a segurança global.',
    naPratica:
      'Vigas de transição altamente carregadas sendo furadas fora do seu eixo neutro; pilares escarificados 4 ou 5 centímetros apenas para embutir prumadas grossas de força, expondo os estribos ao ar livre.',
    erroComum:
      'O eletricista acreditar que "cortar um pouquinho" do concreto com a maquita ou martelete não faz mal, ou que a massa forte de fechamento do buraco devolverá a resistência que o concreto armado possuía originalmente.',
    comoInterpretar:
      'Na engenharia estrutural não existe "furo inofensivo" se ele não estiver na planta aprovada de formas. Uma seção removida significa uma quebra do monolitismo da peça; se cortou o estribo, a capacidade cortante da viga foi mutilada.',
    oQueFazer:
      'Estabelecer um protocolo intransigente: furo em concreto só é feito mediante RFI assinada pelo engenheiro calculista validando o ponto exato da serra copo. O ideal é deixar isopor ou bainhas embutidas antes da concretagem.',
    fechamento:
      'Estrutura pronta não é parede de bloco. Rasgar pilar para passar conduíte não é instalação — é sabotagem mecânica.',
  },
  'falta-compatibilizacao': {
    context:
      'A desintegração temporal dos projetos faz com que as diferentes especialidades nunca dialoguem no computador, colidindo frontalmente durante a montagem física no teto da obra.',
    naPratica:
      'Calhas elétricas (eletrocalhas) trombando ou sobrepostas a tubos sanitários com caimento. Caixas de distribuição locadas exatamente no encontro de shafts de água. Caixas de parede (4x2) desenhadas atrás de pilares estruturais.',
    erroComum:
      'Achar que o mestre de obras ou o encarregado da elétrica tem a obrigação de "desviar por baixo" no momento em que as interferências aparecerem no forro.',
    comoInterpretar:
      'O "desvio" de campo sempre cobra um preço: ou o teto falso será rebaixado, ou o tubo de água perderá caimento adequado (causando entupimentos), ou a tubulação elétrica ficará prensada/esmagada na laje.',
    oQueFazer:
      'Estabelecer matriz de prioridades (Ex: 1º Esgoto por gravidade, 2º Água limpa, 3º Dutos de ar e energia). Adotar reuniões semanais de compatibilização onde nenhuma prancha isolada pode ir para a obra com incompatibilidade de 3D pendente.',
    fechamento:
      'O que o papel aceita por falta de compatibilização, a física do canteiro barra causando custo, quebração e atritos.',
  },
  'execucao-improvisada-5410': {
    context:
      'Quando a prancha elétrica se resume a um diagrama unifilar e marcações de luz, a execução dos tubos e caixas fica refém da capacidade de adivinhação geométrica do peão.',
    naPratica:
      'Interruptores e tomadas que nunca ficam no prumo ou na mesma cota nas salas; conduítes que foram atados na ferragem de forma tão esticada que "estrangularam" e bloquearam a passagem da sonda guia; caixas preenchidas com nata endurecida.',
    erroComum:
      'Desprezar a proteção das bocas dos tubos e caixas antes da concretagem e reboco, acreditando que "dá para limpar depois rasgando o papel".',
    comoInterpretar:
      'Se não há rota clara predefinida, o conduíte toma o caminho mais caótico. Se ele for pisoteado, dobrado a 90 graus secos sem curvas suaves, ele inutiliza aquele circuito inteiro, obrigando quebra de acabamentos recém feitos.',
    oQueFazer:
      'Amarrar firmemente todos os eletrodutos corrugados tanto na malha inferior quanto na malha superior da laje. Vedar compulsivamente as caixas octogonais. Realizar ensaio do "passa-fio" em 100% dos tubos imediatamente após desforma e antes do reboco.',
    fechamento:
      'Se a sonda guia não passar no tubo vazio, de nada adiantou colocar as caixas bonitas na parede.',
  },
  'aquecimento-sobrecarga': {
    context:
      'Instalações elétricas mal planejadas sofrem do fenômeno letal e furtivo do aquecimento. A sobrecarga (ou conexões frouxas) ataca a capa isolante muito antes de os fios ou disjuntores aparentarem qualquer dano visível no ambiente civil.',
    naPratica:
      'Painéis do drywall amarelados/chamuscados próximos a tomadas, emendas improvisadas pingando fita isolante derretida, ou a queda misteriosa de energia (disjuntor caindo) quando o uso do ambiente apenas chega ao previsto em norma.',
    erroComum:
      'Concentrar absurdamente múltiplos circuitos pesados passando pelo exato mesmo conduíte fino apenas para "economizar tubo longo", superando amplamente os fatores de agrupamento.',
    comoInterpretar:
      'O plástico do cabo tem limites térmicos. Se dezenas de fios compartilham um tubo fechado e mal ventilado, eles trocam calor entre si, o limite isolante cai e a corrente necessária para gerar derretimento despenca perigosamente.',
    oQueFazer:
      'Dimensionar cabos aplicando restritamente os fatores de agrupamento da 5410. Garantir o aperto (torqueamento) correto e certificado nas conexões do QDC. Nunca permitir que emendas ocorram dentro de tubulações (sempre em caixas de passagem).',
    fechamento:
      'Fogo em edificações quase sempre começa como um calor invisível numa tubulação espremida. A prevenção mora no tamanho certo do tubo.',
  },
  'manutencao-ignorada': {
    context:
      'Toda e qualquer instalação predial precisará de manutenção, substituição ou acréscimos num horizonte de 5 a 15 anos. Entregar a edificação sem acessibilidade à rede é entregar uma sentença futura de demolição cega.',
    naPratica:
      'Caixas de passagem e derivação instaladas nas paredes e depois cobertas integralmente por rodapés, massa corrida espessa, painéis de madeira colados ou lajotas cerâmicas do banheiro (enterrando a caixa viva).',
    erroComum:
      'A estética do projeto de interiores sobrepor a exigência mecânica normativa, gerando a ordem direta do cliente de "esconde essa caixa feia aí debaixo do azulejo".',
    comoInterpretar:
      'Uma fiação escondida sem inspeção torna qualquer curto-circuito em um pesadelo investigativo. Se os cabos romperem, a única forma de passar o guia e refazer as pontas é estourar a marretadas o acabamento fino entregue pela construtora.',
    oQueFazer:
      'Nenhuma conexão elétrica ou caixa de passagem deve ser obstruída. Utilizar tampas discretas (tipo piso-sobre-piso ou com rebaixos para massa) ou criar alçapões com dobradiças adequados. O manual de as-built deve apontar a posição real milimétrica de todas as caixas.',
    fechamento:
      'O "feio" que você escondeu sem tampa de acesso, fará uma cratera no seu acabamento nobilíssimo quando for a hora de arrumar um fio torrado.',
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
