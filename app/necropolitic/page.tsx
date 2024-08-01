'use client'

import { AccordionNecropolitics } from '@/components/accordionNecropolitcs'
import { AnimatedDiv } from '@/components/animated-div'
import { DialogCard } from '@/components/dialog-card'
import { LogoLink } from '@/components/logo-link'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import achilleImage from '@/public/achilleImage.jpg'
import focaultImage from '@/public/focaultImage.jpeg'

export default function Necropolitic() {
  return (
    <div className="mb-10 flex select-none flex-col lg:mb-0 lg:pr-4">
      <LogoLink />
      <div className="flex w-full flex-col px-4 lg:mt-10 lg:items-center">
        <TextGenerateEffect words="Necropolítica" />
        <div className="flex h-full flex-col items-center justify-center px-4 lg:grid lg:min-h-full lg:max-w-full lg:grid-cols-2 lg:overflow-auto lg:overflow-x-hidden lg:px-10">
          <AnimatedDiv className="mt-6 lg:mt-10">
            <AccordionNecropolitics />
          </AnimatedDiv>
          <AnimatedDiv className="mt-8 flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:p-8">
            <DirectionAwareHover
              imageUrl={achilleImage}
              className="h-52 w-52"
              imageClassName="dark:opacity-60"
            >
              <>
                <p className="rounded-md bg-cyan-900 p-1 text-lg text-white">
                  Achille Mbembe
                </p>
                <DialogCard
                  buttonTitle="Ver biografia"
                  variant="default"
                  description="Achille Mbembe é um historiador e teórico político camaronês, nascido em 1957. Ele é conhecido por suas contribuições aos estudos pós-coloniais e à teoria crítica. Seus trabalhos exploram temas como colonialismo, globalização, biopolítica e necropolítica. Entre suas obras mais influentes estão (Necropolítica e Crítica da Razão Negra). Atualmente, Mbembe é professor na Universidade de Witwatersrand, na África do Sul."
                  title="Achille Mbembe"
                />
              </>
            </DirectionAwareHover>
            <DirectionAwareHover
              imageUrl={focaultImage}
              className="h-52 w-52"
              imageClassName="dark:opacity-60"
            >
              <>
                <p className="rounded-md bg-cyan-900 p-1 text-lg text-white">
                  Michael Foucault
                </p>
                <DialogCard
                  variant="default"
                  buttonTitle="Ver biografia"
                  description="Michel Foucault foi um filósofo e historiador francês, nascido em 1926 e falecido em 1984. Ele é conhecido por suas análises sobre o poder, a sociedade e a subjetividade. Seus trabalhos abordam temas como a disciplina, a biopolítica e a história da sexualidade. Entre suas obras mais influentes estão Vigiar e Punir e A História da Sexualidade. Foucault é considerado um dos principais teóricos do século XX, tendo influenciado diversos campos das ciências humanas e sociais."
                  title="Michael Foucault"
                />
              </>
            </DirectionAwareHover>
          </AnimatedDiv>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  )
}
