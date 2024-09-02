'use client'

import { AnimatedDiv } from '@/components/animated-div'
import { LogoLink } from '@/components/logo-link'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { usePageName } from '@/hooks/use-page-name'

import { AccordionNecropolitics } from './ui/accordionNecropolitics'
import { CardAuthors } from './ui/card-authors'

export default function Necropolitic() {
  const { pageName } = usePageName()
  return (
    <div className="mb-10 flex select-none flex-col lg:mb-0 lg:pr-4">
      <LogoLink />
      <div className="flex w-full flex-col px-4 lg:mt-10 lg:items-center">
        <TextGenerateEffect words={pageName.necropolitic} />
        <div className="flex h-full flex-col items-center justify-center px-4 lg:grid lg:min-h-full lg:max-w-full lg:grid-cols-2 lg:overflow-auto lg:overflow-x-hidden lg:px-10">
          <AnimatedDiv className="mt-6 lg:mt-10">
            <AccordionNecropolitics />
          </AnimatedDiv>
          <CardAuthors />
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  )
}
