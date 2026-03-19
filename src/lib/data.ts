export type NormaBlock = {
  title: string
  content: string
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
    perito: NormaBlock
  }
  extra: {
    title: string
    readTime: string
    content: string[]
  }
}

export const normas: Norma[] = [
  {
    id: '6122',
    code: 'NBR 6122',
    title: 'Projeto e Execução de Fundações',
    category: 'Geotecnia',
    blocks: {
      ondeEntra: {
        title: 'Onde entra na obra',
        content: 'Fase inicial, na definição do tipo de fundação (estacas, sapatas, radier).',
      },
      controle: {
        title: 'O que realmente controla',
        content: 'Capacidade de carga do solo, recalques admissíveis e integridade dos elementos.',
      },
      erros: {
        title: 'Onde todo mundo erra',
        content:
          'Interpretação excessivamente otimista ou desatualizada do laudo de sondagem (SPT).',
      },
      consequencias: {
        title: 'O que acontece quando erra',
        content:
          'Recalques diferenciais, fissuras diagonais nas alvenarias e, em casos extremos, colapso estrutural.',
      },
      praticas: {
        title: 'Como fazer certo na prática',
        content:
          'Sempre compatibilizar as cargas atuantes informadas pelo calculista com o laudo de SPT atualizado do terreno exato.',
      },
      perito: {
        title: 'Visão de perito',
        content:
          'Cerca de 90% dos processos judiciais estruturais graves nascem de falhas investigativas no subsolo.',
      },
    },
    extra: {
      title: 'Como interpretar um SPT na prática',
      readTime: '2 min',
      content: [
        'A sondagem SPT (Standard Penetration Test) é o ensaio mais comum no Brasil. Não basta olhar apenas os números (N), é preciso cruzar com o tipo de solo.',
        'Sempre verifique o Nspt nas camadas de apoio previstas. Para estacas, a resistência lateral e de ponta são cruciais.',
        "Atenção máxima à cota do nível d'água (NA). Solos argilosos saturados podem apresentar problemas de adensamento.",
        'Camadas moles intermediárias, mesmo com camadas resistentes acima, podem causar problemas severos de atrito negativo nas estacas.',
      ],
    },
  },
  {
    id: '6118',
    code: 'NBR 6118',
    title: 'Projeto de Estruturas de Concreto',
    category: 'Estrutural',
    blocks: {
      ondeEntra: {
        title: 'Onde entra na obra',
        content: 'Armação, concretagem, escoramento e desforma de pilares, vigas e lajes.',
      },
      controle: {
        title: 'O que realmente controla',
        content: 'Cobrimento da armadura, resistência do concreto (fck) e bitolas.',
      },
      erros: {
        title: 'Onde todo mundo erra',
        content: 'Negligenciar o cobrimento mínimo das armaduras usando espaçadores improvisados.',
      },
      consequencias: {
        title: 'O que acontece quando erra',
        content: 'Corrosão precoce, desplacamento do concreto e perda de seção resistente.',
      },
      praticas: {
        title: 'Como fazer certo na prática',
        content:
          'Use espaçadores plásticos adequados à classe de agressividade ambiental (CAA) da região.',
      },
      perito: {
        title: 'Visão de perito',
        content:
          'Corrosão de armadura por baixo cobrimento é a patologia número um em perícias de edifícios novos.',
      },
    },
    extra: {
      title: 'Atenção ao Cobrimento e Fissuração',
      readTime: '1 min',
      content: [
        'O cobrimento não é capricho, é proteção química. Concreto protege o aço devido à sua alta alcalinidade.',
        'Garantir o Fck correto na usina não adianta se a cura na obra for mal feita, causando fissuração por retração.',
      ],
    },
  },
  {
    id: '15575',
    code: 'NBR 15575',
    title: 'Edificações Habitacionais - Desempenho',
    category: 'Geral',
    blocks: {
      ondeEntra: {
        title: 'Onde entra na obra',
        content: 'Escolha de materiais, espessura de lajes e paredes, sistemas de fachada.',
      },
      controle: {
        title: 'O que realmente controla',
        content: 'Acústica, térmica, durabilidade e estanqueidade aos olhos do usuário.',
      },
      erros: {
        title: 'Onde todo mundo erra',
        content: 'Achar que seguir normas antigas garante o desempenho atual exigido.',
      },
      consequencias: {
        title: 'O que acontece quando erra',
        content: 'Processos judiciais por ruído entre apartamentos e calor excessivo.',
      },
      praticas: {
        title: 'Como fazer certo na prática',
        content:
          'Use contrapiso acústico (manta) entre andares e verifique o índice de redução sonora.',
      },
      perito: {
        title: 'Visão de perito',
        content:
          'Os juízes agora usam a NBR 15575 para defender os direitos do consumidor (morador).',
      },
    },
    extra: {
      title: 'Isolamento Acústico ao Ruído de Impacto',
      readTime: '2 min',
      content: [
        'Ruído de impacto (salto alto, queda de objetos) não se resolve aumentando espessura da laje.',
        'A solução mais eficaz é a desconexão estrutural, usando sistemas de piso flutuante (manta acústica sob o contrapiso).',
      ],
    },
  },
  {
    id: '5410',
    code: 'NBR 5410',
    title: 'Instalações Elétricas de Baixa Tensão',
    category: 'Instalações',
    blocks: {
      ondeEntra: {
        title: 'Onde entra na obra',
        content: 'Quadros elétricos, fiação, aterramento e dispositivos de proteção.',
      },
      controle: {
        title: 'O que realmente controla',
        content: 'Prevenção de choques, curtos-circuitos e sobrecargas.',
      },
      erros: {
        title: 'Onde todo mundo erra',
        content:
          'Misturar circuitos de iluminação com tomadas de uso específico no mesmo disjuntor.',
      },
      consequencias: {
        title: 'O que acontece quando erra',
        content: 'Desarme constante, derretimento de cabos e risco elevado de incêndio.',
      },
      praticas: {
        title: 'Como fazer certo na prática',
        content:
          'Instalação obrigatória de DR (Dispositivo Diferencial Residual) em áreas molhadas.',
      },
      perito: {
        title: 'Visão de perito',
        content:
          'Incêndios estruturais em residências quase sempre apontam para dimensionamento subestimado de cabos.',
      },
    },
    extra: {
      title: 'Importância do Dispositivo DR',
      readTime: '1 min',
      content: [
        'O DR salva vidas detectando fugas de corrente minúsculas (30mA).',
        'Sua instalação não é opcional em banheiros, cozinhas e áreas externas. Nunca ligue o neutro ao terra após o DR.',
      ],
    },
  },
  {
    id: '5626',
    code: 'NBR 5626',
    title: 'Sistemas Prediais de Água Fria e Quente',
    category: 'Instalações',
    blocks: {
      ondeEntra: {
        title: 'Onde entra na obra',
        content: 'Tubulações, reservatórios e pressões em chuveiros/torneiras.',
      },
      controle: {
        title: 'O que realmente controla',
        content: 'Velocidade da água, pressões máximas/mínimas e potabilidade.',
      },
      erros: {
        title: 'Onde todo mundo erra',
        content: 'Falta de ventilação nas colunas e ignorar a pressão máxima nos andares baixos.',
      },
      consequencias: {
        title: 'O que acontece quando erra',
        content: 'Golpe de aríete rompendo canos e ruído nas tubulações.',
      },
      praticas: {
        title: 'Como fazer certo na prática',
        content:
          'Instalar VRPs (Válvulas Redutoras de Pressão) a cada 4 ou 5 pavimentos em prédios altos.',
      },
      perito: {
        title: 'Visão de perito',
        content:
          'Vazamentos invisíveis geram o maior volume de conflitos entre vizinhos em condomínios verticais.',
      },
    },
    extra: {
      title: 'Golpe de Aríete: O Assassino Silencioso',
      readTime: '1 min',
      content: [
        'O fechamento brusco de uma válvula gera uma onda de sobrepressão terrível.',
        'Se a tubulação não estiver fixada adequadamente, as juntas cedem e causam inundações catastróficas.',
      ],
    },
  },
]

export const problemas = [
  {
    id: '1',
    title: 'Recalque Diferencial',
    description:
      'Movimentação desigual da fundação causando trincas diagonais nas alvenarias e deformação de caixilhos.',
    normaId: '6122',
    normaCode: 'NBR 6122',
  },
  {
    id: '2',
    title: 'Fissuração Precoce',
    description:
      'Aberturas no concreto recém-lançado devido à retração hidráulica ou cura inadequada.',
    normaId: '6118',
    normaCode: 'NBR 6118',
  },
  {
    id: '3',
    title: 'Corrosão de Armaduras',
    description:
      'Manchas ferruginosas e desplacamento do concreto, sinalizando exposição do aço ao ambiente.',
    normaId: '6118',
    normaCode: 'NBR 6118',
  },
  {
    id: '4',
    title: 'Falha de Desempenho Acústico',
    description:
      'Ruído de impacto entre pavimentos acima do limite normativo incomodando vizinhos.',
    normaId: '15575',
    normaCode: 'NBR 15575',
  },
  {
    id: '5',
    title: 'Desarme de Disjuntor no Banho',
    description:
      'Sobrecarga no circuito devido a incompatibilidade entre o cabo instalado e a potência do chuveiro.',
    normaId: '5410',
    normaCode: 'NBR 5410',
  },
  {
    id: '6',
    title: 'Rompimento por Golpe de Aríete',
    description: 'Ruptura de conexões hidráulicas devido a sobrepressões não tratadas no sistema.',
    normaId: '5626',
    normaCode: 'NBR 5626',
  },
]
