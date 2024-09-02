'use client'

import { AnimatedDiv } from '@/components/animated-div'
import { LogoLink } from '@/components/logo-link'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { data } from '@/data'
import { useLanguage } from '@/hooks/use-language'
import { usePageName } from '@/hooks/use-page-name'

import { CardEducationConcepts } from './ui/card-education-concepts'
import { CarouselAuthors } from './ui/carousel-authors'

export default function Education() {
  const { language } = useLanguage()
  const { pageName } = usePageName()

  const cardEducationData = data[language].education

  return (
    <>
      <LogoLink />
      <div className="mt-3 flex w-full select-none flex-col items-center justify-center gap-4 lg:mt-0 lg:items-start lg:justify-start lg:overflow-x-hidden">
        <TextGenerateEffect words={pageName.education} />
        <AnimatedDiv className="mb-10 flex max-w-6xl flex-col self-center">
          <h2 className="hidden self-center pb-4 text-lg font-semibold text-cyan-600 lg:block lg:pb-2">
            {language === 'portuguese'
              ? 'Passe o mouse para mais informações'
              : 'Hover for more information'}
          </h2>
          <h2 className="block self-center pb-4 text-lg font-semibold text-cyan-600 lg:hidden">
            {language === 'portuguese'
              ? 'Clique para mais informações'
              : 'Click for more information'}
          </h2>
          <div className="flex w-full flex-col items-center justify-center gap-8 bg-transparent lg:grid lg:grid-cols-4 lg:grid-rows-2">
            {cardEducationData.map((card) => {
              return (
                <div className="h-full w-full" key={card.id}>
                  <CardEducationConcepts title={card.title} icon={card.icon}>
                    {card.children}
                  </CardEducationConcepts>
                </div>
              )
            })}
            <CarouselAuthors />
          </div>
        </AnimatedDiv>
      </div>
      <ScrollToTopButton />
    </>
  )
}
