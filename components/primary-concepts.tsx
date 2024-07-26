import { motion } from 'framer-motion'

import { CardPrimaryConcept } from './cards/card-primary-concept'

export function PrimaryConcepts() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex h-full w-full flex-col rounded-md bg-stone-200/50 p-4 shadow-md dark:bg-stone-900/50 lg:p-10"
    >
      <h1 className="w-full justify-self-center text-center text-2xl font-bold tracking-tight text-foreground lg:pb-4 lg:text-3xl">
        Conceitos gerais
      </h1>
      <div className="flex h-full w-full flex-col gap-4 pt-4 lg:grid lg:grid-cols-2 lg:grid-rows-2">
        <CardPrimaryConcept
          title="Educação"
          description="A educação é sempre uma certa teoria do conhecimento
              posta em prática [...]"
          goingTo="/education"
          linkLabel="Explorar Educação"
          author="Paulo Freire"
        />
        <CardPrimaryConcept
          title="Necropolítica"
          description="Necropolítica é a capacidade de estabelecer parâmetros em que a submissão da vida pela morte está legitimada."
          goingTo="/education"
          linkLabel="Entender Necropolítica"
          author="Achille Mbembe"
        />
        <CardPrimaryConcept
          title="Aborto"
          description="Políticas de aborto, questões de gênero e justiça social."
          goingTo="/education"
          linkLabel="Debater Aborto"
        />
        <CardPrimaryConcept
          title="Controle Político"
          description="Administração de poder governamental para manter ordem e governança social."
          goingTo="/education"
          linkLabel="Analisar"
          author="Chat GPT kkkkk"
        />
      </div>
    </motion.div>
  )
}
