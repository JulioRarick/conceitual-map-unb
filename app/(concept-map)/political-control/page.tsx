'use client'

import { AnimatedDiv } from '@/components/animated-div'
import { LogoLink } from '@/components/logo-link'
import { RedirectButton } from '@/components/redirect-button'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { HoverEffect } from '@/components/ui/card-hover-grid'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { data } from '@/data'
import { useLanguage } from '@/hooks/use-language'
import { usePageName } from '@/hooks/use-page-name'

export default function PoliticalControl() {
  const { language } = useLanguage()
  const { pageName } = usePageName()

  const politicalControlItems = data[language].politicalControl

  return (
    <div className="flex flex-col lg:overflow-x-hidden lg:pr-4">
      <div className="flex flex-col">
        <LogoLink />
      </div>
      <div className="flex w-full flex-col lg:flex-row lg:justify-between">
        <div className="pl-10">
          <TextGenerateEffect words={pageName.politicalControl} />
        </div>
        <AnimatedDiv className="hidden lg:flex lg:flex-row lg:gap-2">
          <RedirectButton redirectTo="/abortion" textPage={pageName.abortion} />
          <RedirectButton
            redirectTo="/necropolitic"
            textPage={pageName.necropolitic}
          />
        </AnimatedDiv>
      </div>
      <AnimatedDiv className="flex h-full w-full items-center justify-center lg:p-8">
        <HoverEffect items={politicalControlItems} />
      </AnimatedDiv>
      <AnimatedDiv className="flex flex-col gap-4 pb-24 lg:hidden">
        <RedirectButton redirectTo="/abortion" textPage={pageName.abortion} />
        <RedirectButton
          redirectTo="/necropolitic"
          textPage={pageName.necropolitic}
        />
      </AnimatedDiv>
      <ScrollToTopButton />
    </div>
  )
}
