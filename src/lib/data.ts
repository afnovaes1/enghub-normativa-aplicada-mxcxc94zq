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
    insights: NormaBlock
    perito: NormaBlock
    aprofundamentos: NormaBlock
  }
}

const placeholderContent = '[Conteúdo estrutural — aguardando inserção manual]'

const baseBlocks = {
  ondeEntra: { title: 'Onde entra na obra', content: placeholderContent },
  controle: { title: 'O que realmente controla', content: placeholderContent },
  erros: { title: 'Onde todo mundo erra', content: placeholderContent },
  consequencias: { title: 'O que acontece quando erra', content: placeholderContent },
  praticas: { title: 'Como fazer certo na prática', content: placeholderContent },
  insights: { title: 'Insights rápidos de decisão', content: placeholderContent },
  perito: { title: 'Visão de perito', content: placeholderContent },
  aprofundamentos: { title: 'Aprofundamentos', content: placeholderContent },
}

export const normas: Norma[] = [
  {
    id: '6122',
    code: 'NBR 6122',
    title: 'Projeto e Execução de Fundações',
    category: 'Geotecnia',
    blocks: { ...baseBlocks },
  },
  {
    id: '15575',
    code: 'NBR 15575',
    title: 'Edificações Habitacionais - Desempenho',
    category: 'Geral',
    blocks: { ...baseBlocks },
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
