import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/use-language'
import { usePageName } from '@/hooks/use-page-name'

export function AccordionNecropolitics() {
  const { language } = useLanguage()
  const { pageName } = usePageName()

  return (
    <Accordion type="single" collapsible className="lg:w-auto">
      <AccordionItem value="necropoliticConcept">
        <AccordionTrigger className="text-xl text-cyan-700 dark:text-cyan-500">
          {pageName.necropolitic}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-lg">
          {language === 'portuguese' ? (
            <>
              <p>
                • Conceito de Achille Mbembe (filósofo, historiador, cientista
                político).
              </p>
              <p>• Exercido por Estados e outras entidades.</p>
              <p>• Poder de decidir quem vive e quem morre</p>
              <p>• Biopoder (Foucault)</p>
              <p>• Soberania.</p>
            </>
          ) : (
            <>
              <p>
                • Concept by Achille Mbembe (philosopher, historian, political
                scientist).
              </p>
              <p>• Exercised by States and other entities.</p>
              <p>• Power to decide who lives and who dies.</p>
              <p>• Biopower (Foucault).</p>
              <p>• Sovereignty.</p>
            </>
          )}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="bio-power">
        <AccordionTrigger className="text-xl text-cyan-700 dark:text-cyan-500">
          {language === 'portuguese'
            ? 'Biopoder e Relação de Inimizade'
            : 'Biopower and Enmity Relationship'}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-lg">
          {language === 'portuguese' ? (
            <>
              <p>• Controle da vida e distribuição da morte.</p>
              <p>• Foucault: guerra como meio de alcançar soberania.</p>
              <p>• Racismo como tecnologia para exercer biopoder.</p>
              <p>• Exemplos: estado nazista, ocupação colonial.</p>
            </>
          ) : (
            <>
              <p>• Control of life and distribution of death.</p>
              <p>• Foucault: war as a means to achieve sovereignty.</p>
              <p>• Racism as a technology to exercise biopower.</p>
              <p>• Examples: Nazi state, colonial occupation.</p>
            </>
          )}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="machine-war">
        <AccordionTrigger className="text-xl text-cyan-700 dark:text-cyan-500">
          {language === 'portuguese'
            ? 'Máquinas de Guerra e Heteronomia'
            : 'War Machines and Heteronomy'}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-lg">
          {language === 'portuguese' ? (
            <>
              <p>• Dispersão do monopólio do direito de matar.</p>
              <p>
                • Novas formas de guerra: milícias, violência comercializada.
              </p>
            </>
          ) : (
            <>
              <p>• Dispersion of the monopoly on the right to kill.</p>
              <p>• New forms of war: militias, commercialized violence.</p>
            </>
          )}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="abortion">
        <AccordionTrigger className="text-xl text-cyan-700 dark:text-cyan-500">
          {language === 'portuguese'
            ? 'Necropolítica e Aborto'
            : 'Necropolitic and Abortion'}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-lg">
          {language === 'portuguese' ? (
            <>
              <p>• Impacto das políticas restritivas e permissivas.</p>
              <p>• Direitos humanos e saúde reprodutiva.</p>
              <p>• Autonomia sobre os corpos das mulheres.</p>
              <p>• Procedimentos clandestinos e inseguros.</p>
            </>
          ) : (
            <>
              <p>• Impact of restrictive and permissive policies.</p>
              <p>• Human rights and reproductive health.</p>
              <p>• Autonomy over women&apos;s bodies.</p>
              <p>• Clandestine and unsafe procedures.</p>
            </>
          )}
          <Button variant="secondary" className="m-2 lg:ml-16 lg:mr-16" asChild>
            <Link href="/abortion">
              {language === 'portuguese'
                ? 'Ver mais sobre Aborto'
                : 'More for Abortion'}
            </Link>
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="necro-power">
        <AccordionTrigger className="text-xl text-cyan-700 dark:text-cyan-500">
          {language === 'portuguese'
            ? 'Necropolítica e Necropoder'
            : 'Necropolitic and Necropower'}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-lg">
          {language === 'portuguese' ? (
            <>
              <p>
                • Formas contemporâneas de subordinação da vida ao poder da
                morte.
              </p>
              <p>• Criação de &quot;mundos de morte&quot;.</p>
              <p>• Controle de movimentos, segregação, militarização.</p>
              <p>
                • Reconfiguração das relações entre resistência, sacrifício e
                terror.
              </p>
            </>
          ) : (
            <>
              <p>
                • Contemporary forms of subordination of life to the power of
                death.
              </p>
              <p>• Creation of &quot;death worlds&quot;.</p>
              <p>• Control of movements, segregation, militarization.</p>
              <p>
                • Reconfiguration of the relationships between resistance,
                sacrifice, and terror.
              </p>
            </>
          )}
          <Button variant="secondary" className="m-2 lg:ml-16 lg:mr-16" asChild>
            <Link href="/political-control">
              {language === 'portuguese'
                ? 'Ver mais sobre Controle Político'
                : 'More for Political Control'}
            </Link>
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
