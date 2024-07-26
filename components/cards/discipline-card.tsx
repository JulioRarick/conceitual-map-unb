import { motion } from 'framer-motion'

import { Button } from '../ui/button'

export function DisciplineCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="ml-10 hidden flex-col gap-2 rounded-md bg-stone-200/50 shadow-md dark:bg-stone-900/50 lg:flex lg:p-10"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-start text-3xl font-bold tracking-tight">
          Disciplina
        </h2>
        <Button asChild variant="link" className="text-muted-foreground">
          <a href="">Veja mais informações</a>
        </Button>
      </div>
      <span className="text-center text-xl font-bold tracking-tight">
        Ementa
      </span>
      <p className="text-justify">
        “Estudo de normas e princípios fundamentais do Direito Público e do
        Direito Privado, com especial enfoque dogmático-panorâmico dos diversos
        ramos do direito positivo brasileiro. O problema da interpretação: norma
        e ordenamento jurídico. Fontes do direito. O Estado e o Direito
        Constitucional: direitos e garantias fundamentais. Organização do Estado
        e dos poderes.”
      </p>
      <span className="text-center text-xl font-bold tracking-tight">
        Justificativa
      </span>
      <p className="text-justify">
        A disciplina visa a oferecer noções gerais a respeito do Direito
        brasileiro, de maneira a formar cidadãos críticos e comprometidos com o
        Estado Democrático de Direito.
      </p>
      <span className="text-center text-xl font-bold tracking-tight">
        Objetivo
      </span>
      <p className="text-justify">
        Conhecer instituições de Direito Público e Privado brasileiro, numa
        perspectiva panorâmica, interdisciplinar e crítica.
      </p>
    </motion.div>
  )
}
