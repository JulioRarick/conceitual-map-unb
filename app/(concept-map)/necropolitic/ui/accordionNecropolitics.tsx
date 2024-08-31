import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export function AccordionNecropolitics() {
  return (
    <Accordion type="single" collapsible className="lg:w-auto">
      <AccordionItem value="necropoliticConcept">
        <AccordionTrigger className="text-xl text-cyan-700 dark:text-cyan-500">
          Necropolítica
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-lg">
          <p>
            • Conceito de Achille Mbembe (filósofo, historiador, cientista
            político).
          </p>
          <p>• Exercido por Estados e outras entidades.</p>
          <p>• Poder de decidir quem vive e quem morre</p>
          <p>• Biopoder (Foucault)</p>
          <p>• Soberania.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="bio-power">
        <AccordionTrigger className="text-xl text-cyan-700 dark:text-cyan-500">
          Biopoder e Relação de Inimizade
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-lg">
          <p>• Controle da vida e distribuição da morte.</p>
          <p>• Foucault: guerra como meio de alcançar soberania.</p>
          <p>• Racismo como tecnologia para exercer biopoder.</p>
          <p>• Exemplos: estado nazista, ocupação colonial.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="machine-war">
        <AccordionTrigger className="text-xl text-cyan-700 dark:text-cyan-500">
          Máquinas de Guerra e Heteronomia
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-lg">
          <p>• Dispersão do monopólio do direito de matar.</p>
          <p>• Novas formas de guerra: milícias, violência comercializada.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="abortion">
        <AccordionTrigger className="text-xl text-cyan-700 dark:text-cyan-500">
          Necropolítica e Aborto
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-lg">
          <p>• Impacto das políticas restritivas e permissivas.</p>
          <p>• Direitos humanos e saúde reprodutiva.</p>
          <p>• Autonomia sobre os corpos das mulheres.</p>
          <p>• Procedimentos clandestinos e inseguros.</p>
          <Button variant="secondary" className="m-2 lg:ml-16 lg:mr-16" asChild>
            <Link href="/abortion">Ver mais sobre Aborto</Link>
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="necro-power">
        <AccordionTrigger className="text-xl text-cyan-700 dark:text-cyan-500">
          Necropolítica e Necropoder
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-lg">
          <p>
            • Formas contemporâneas de subordinação da vida ao poder da morte.
          </p>
          <p>• Criação de &quot;mundos de morte&quot;.</p>
          <p>• Controle de movimentos, segregação, militarização.</p>
          <p>
            • Reconfiguração das relações entre resistência, sacrifício e
            terror.
          </p>
          <Button variant="secondary" className="m-2 lg:ml-16 lg:mr-16" asChild>
            <Link href="/political-control">
              Ver mais sobre Controle Político
            </Link>
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
