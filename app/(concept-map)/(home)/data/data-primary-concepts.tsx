interface PrimaryConceptsDataTypes {
  id: number
  title: string
  description: string
  goingTo: string
  linklabel?: string
  author: string
}

export const primaryConceptsData: PrimaryConceptsDataTypes[] = [
  {
    id: 1,
    title: 'Educação',
    description:
      'A educação é sempre uma certa teoria do conhecimento posta em prática [...]',
    goingTo: '/education',
    linklabel: 'Explorar Educação',
    author: 'Paulo Freire',
  },
  {
    id: 2,
    title: 'Democracia',
    description: 'Democracia é o governo do povo, pelo povo, para o povo.',
    goingTo: '/democracy',
    linklabel: 'Entender Democracia',
    author:
      'Seja elegendo representantes, seja votando em questões específicas.',
  },
  {
    id: 3,
    title: 'Direitos Humanos',
    description:
      'Democracia é um sistema de governo em que o poder é exercido pelo povo, direta ou indiretamente, através de um processo de votação.',
    goingTo: '/abortion',
    linklabel: 'Debater Aborto',
    author: 'Declaração Universal dos Direitos Humanos',
  },
  {
    id: 4,
    title: 'Controle Político',
    description:
      'Controle político refere-se ao poder ou capacidade de um grupo ou indivíduo de influenciar, dirigir ou governar as ações, políticas e decisões de um governo, organização ou sociedade.',
    goingTo: '/political-control',
    linklabel: 'Analisar',
    author: 'Leis, regulamentos, instituições...',
  },
  {
    id: 5,
    title: 'Necropolítica',
    description:
      'Necropolítica é a capacidade de estabelecer parâmetros em que a submissão da vida pela morte está legitimada.',
    goingTo: '/necropolitic',
    linklabel: 'Entender Necropolítica',
    author: 'Achille Mbembe',
  },
  {
    id: 6,
    title: 'Aborto',
    description: 'Políticas de aborto, questões de gênero e justiça social.',
    goingTo: '/abortion',
    linklabel: 'Debater Aborto',
    author: '[...]',
  },
  {
    id: 7,
    title: 'Sistema Prisional',
    description:
      'O sistema prisional refere-se ao conjunto de instituições e práticas destinadas ao cumprimento de penas privativas de liberdade, aplicadas a indivíduos que cometeram crimes.',
    goingTo: '/prison-system',
    linklabel: 'Analisar conceitos',
    author: 'Prisões, penitenciárias, e outras formas de detenção.',
  },
  {
    id: 8,
    title: 'Drogas',
    description:
      'Drogas são substâncias químicas que, ao serem introduzidas no organismo, provocam alterações no funcionamento normal do corpo, afetando, entre outros, o sistema nervoso central.',
    goingTo: '/drugs',
    linklabel: 'Veja mais conceitos',
    author: 'Já pode legalizar?',
  },
]
