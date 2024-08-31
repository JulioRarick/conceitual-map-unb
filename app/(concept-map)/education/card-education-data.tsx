import { CardEducationConceptsProps } from './ui/card-education-concepts'

export const cardEducationData: CardEducationConceptsProps[] = [
  {
    id: '1',
    title: 'Relação Dialógica',
    icon: (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-center font-bold text-black group-hover/canvas-card:text-white dark:text-white">
          Ensino e Aprendizagem
        </p>
      </div>
    ),
    children: (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="text-center text-white">
          Ensino e aprendizagem como processos interativos e transformadores.
        </p>
        <p className="text-center text-white">
          Educador e aluno aprendem e crescem juntos.
        </p>
      </div>
    ),
  },
  {
    id: '2',
    title: 'Ensino Integrado à Pesquisa',
    icon: (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-center font-bold text-black group-hover/canvas-card:text-white dark:text-white">
          Pesquisa e Conhecimento
        </p>
      </div>
    ),
    children: (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="text-center text-white">
          Estimular a construção de pensamento analítico fundamentado numa
          perspectiva teórica para estimular o espírito crítico e criativo dos
          educandos
        </p>
      </div>
    ),
  },
  {
    id: '3',
    title: 'Respeito aos Saberes dos Educandos',
    icon: (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-center font-bold text-black group-hover/canvas-card:text-white dark:text-white">
          Respeito e Criticidade
        </span>
      </div>
    ),
    children: (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="text-center text-white">
          Promover uma visão crítica e reflexiva sobre o mundo e o conhecimento.
        </p>
      </div>
    ),
  },
  {
    id: '4',
    title: 'Coerência',
    icon: (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-center font-bold text-black group-hover/canvas-card:text-white dark:text-white">
          Ética e Estética
        </span>
      </div>
    ),
    children: (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="text-center text-white">
          Integrar ética na prática educativa.
        </p>
        <p className="text-center text-white">
          Educadores devem ser exemplos de integridade e coerência.
        </p>
      </div>
    ),
  },
  {
    id: '5',
    title: 'Identidade Cultural',
    icon: (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-center font-bold text-black group-hover/canvas-card:text-white dark:text-white">
          Inclusão e Diversidade
        </span>
      </div>
    ),
    children: (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="text-center text-white">
          Aceitar o novo e combater todas as formas de discriminação.
        </p>
        <p className="text-center text-white">
          Reconhecer e valorizar a identidade cultural dos educandos.
        </p>
      </div>
    ),
  },
  {
    id: '6',
    title: 'Reflexão sobre a Prática',
    icon: (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-center font-bold text-black group-hover/canvas-card:text-white dark:text-white">
          Reflexão Crítica
        </span>
      </div>
    ),
    children: (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="text-center text-white">
          Analisar criticamente a própria prática educativa para melhorá-la.
        </p>
        <p className="text-center text-white">
          Desenvolver uma compreensão mais profunda e crítica.
        </p>
      </div>
    ),
  },
  {
    id: '7',
    title: 'Transformação Social',
    icon: (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-center font-bold text-black group-hover/canvas-card:text-white dark:text-white">
          Compromisso Social
        </span>
      </div>
    ),
    children: (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="text-center text-white">
          Capacitar os educandos para compreender e agir sobre a realidade
          social.
        </p>
        <p className="text-center text-white">
          Educação como ferramenta para transformação e justiça social.
        </p>
      </div>
    ),
  },
]
export const pauloFreireData = {
  title: 'Paulo Freire',
  description:
    'Paulo Freire (1921-1997) foi um renomado educador e filósofo brasileiro, amplamente reconhecido por suas contribuições à teoria da educação. Ele é mais conhecido por seu trabalho seminal, "Pedagogia do Oprimido", publicado em 1968. Freire propôs uma abordagem de ensino revolucionária que enfatiza a conscientização crítica e a educação como um ato de liberdade. Sua metodologia, conhecida como "pedagogia crítica", incentiva os educandos a questionar e desafiar as opressões sociais e políticas em suas vidas, promovendo assim uma educação libertadora. Freire trabalhou extensivamente em programas de alfabetização de adultos no Brasil e em outros países da América Latina e África, influenciando educadores em todo o mundo com suas ideias sobre a educação como uma prática de liberdade e transformação social.',
  buttonTitle: 'Ver biografia',
}
export const marilenaData = {
  title: 'Marilena Chaui',
  description:
    'Marilena Chaui (1941-) é uma influente filósofa e professora brasileira, conhecida por suas contribuições no campo da filosofia política e social. Formada em Filosofia pela Universidade de São Paulo (USP), onde também obteve seu doutorado, Chaui tornou-se uma das mais importantes intelectuais brasileiras contemporâneas.Seu trabalho aborda temas como a ideologia, a democracia, a cultura e a educação, com uma forte influência do pensamento de Baruch Spinoza e da Escola de Frankfurt. Uma de suas obras mais conhecidas é "Convite à Filosofia", que se tornou um livro amplamente utilizado em cursos de introdução à filosofia no Brasil. Chaui também é reconhecida por sua atuação política e social, sendo uma defensora ativa da democracia e dos direitos humanos. Ao longo de sua carreira, ela participou de debates públicos e movimentos sociais, contribuindo para a reflexão crítica sobre a sociedade brasileira e seus desafios.',
  buttonTitle: 'Ver biografia',
}
