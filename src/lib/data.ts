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

const placeholderContent = '[Conteúdo técnico — aguardando inserção]'
const placeholderTitle = '[Título da seção]'
const placeholderSummary = '[Resumo do problema — será definido]'

export const normas: Norma[] = [
  {
    id: '6122',
    code: 'NBR 6122',
    title: 'Projeto e Execução de Fundações',
    category: 'Geotecnia',
    blocks: {
      ondeEntra: { title: 'Onde entra na obra', content: placeholderContent },
      controle: { title: 'O que realmente controla', content: placeholderContent },
      erros: { title: 'Onde todo mundo erra', content: placeholderContent },
      consequencias: { title: 'O que acontece quando erra', content: placeholderContent },
      praticas: { title: 'Como fazer certo na prática', content: placeholderContent },
      perito: { title: 'Visão de perito', content: placeholderContent },
    },
    extra: {
      title: placeholderTitle,
      readTime: '2 min',
      content: [placeholderSummary, placeholderContent],
    },
  },
  {
    id: '6118',
    code: 'NBR 6118',
    title: 'Projeto de Estruturas de Concreto',
    category: 'Estrutural',
    blocks: {
      ondeEntra: { title: 'Onde entra na obra', content: placeholderContent },
      controle: { title: 'O que realmente controla', content: placeholderContent },
      erros: { title: 'Onde todo mundo erra', content: placeholderContent },
      consequencias: { title: 'O que acontece quando erra', content: placeholderContent },
      praticas: { title: 'Como fazer certo na prática', content: placeholderContent },
      perito: { title: 'Visão de perito', content: placeholderContent },
    },
    extra: {
      title: placeholderTitle,
      readTime: '1 min',
      content: [placeholderSummary, placeholderContent],
    },
  },
  {
    id: '15575',
    code: 'NBR 15575',
    title: 'Edificações Habitacionais - Desempenho',
    category: 'Geral',
    blocks: {
      ondeEntra: { title: 'Onde entra na obra', content: placeholderContent },
      controle: { title: 'O que realmente controla', content: placeholderContent },
      erros: { title: 'Onde todo mundo erra', content: placeholderContent },
      consequencias: { title: 'O que acontece quando erra', content: placeholderContent },
      praticas: { title: 'Como fazer certo na prática', content: placeholderContent },
      perito: { title: 'Visão de perito', content: placeholderContent },
    },
    extra: {
      title: placeholderTitle,
      readTime: '2 min',
      content: [placeholderSummary, placeholderContent],
    },
  },
  {
    id: '5410',
    code: 'NBR 5410',
    title: 'Instalações Elétricas de Baixa Tensão',
    category: 'Instalações',
    blocks: {
      ondeEntra: { title: 'Onde entra na obra', content: placeholderContent },
      controle: { title: 'O que realmente controla', content: placeholderContent },
      erros: { title: 'Onde todo mundo erra', content: placeholderContent },
      consequencias: { title: 'O que acontece quando erra', content: placeholderContent },
      praticas: { title: 'Como fazer certo na prática', content: placeholderContent },
      perito: { title: 'Visão de perito', content: placeholderContent },
    },
    extra: {
      title: placeholderTitle,
      readTime: '1 min',
      content: [placeholderSummary, placeholderContent],
    },
  },
  {
    id: '5626',
    code: 'NBR 5626',
    title: 'Sistemas Prediais de Água Fria e Quente',
    category: 'Instalações',
    blocks: {
      ondeEntra: { title: 'Onde entra na obra', content: placeholderContent },
      controle: { title: 'O que realmente controla', content: placeholderContent },
      erros: { title: 'Onde todo mundo erra', content: placeholderContent },
      consequencias: { title: 'O que acontece quando erra', content: placeholderContent },
      praticas: { title: 'Como fazer certo na prática', content: placeholderContent },
      perito: { title: 'Visão de perito', content: placeholderContent },
    },
    extra: {
      title: placeholderTitle,
      readTime: '1 min',
      content: [placeholderSummary, placeholderContent],
    },
  },
]

export const problemas = [
  {
    id: '1',
    title: 'Recalque',
    description: placeholderSummary,
    normaId: '6122',
    normaCode: 'NBR 6122',
  },
  {
    id: '2',
    title: 'Fissura',
    description: placeholderSummary,
    normaId: '6118',
    normaCode: 'NBR 6118',
  },
  {
    id: '3',
    title: 'Erro de Fundação',
    description: placeholderSummary,
    normaId: '6122',
    normaCode: 'NBR 6122',
  },
  {
    id: '4',
    title: 'SPT não converge',
    description: placeholderSummary,
    normaId: '6122',
    normaCode: 'NBR 6122',
  },
]
