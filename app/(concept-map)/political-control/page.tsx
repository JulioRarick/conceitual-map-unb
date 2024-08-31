'use client'

import { AnimatedDiv } from '@/components/animated-div'
import { LogoLink } from '@/components/logo-link'
import { RedirectButton } from '@/components/redirect-button'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { HoverEffect } from '@/components/ui/card-hover-grid'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

import { politicalControlItems } from './data-political-control'

export default function PoliticalControl() {
  return (
    <div className="flex flex-col lg:overflow-x-hidden lg:pr-4">
      <div className="flex flex-col">
        <LogoLink />
      </div>
      <div className="flex w-full flex-col lg:flex-row lg:justify-between">
        <div className="pl-10">
          <TextGenerateEffect words="Controle Politico" />
        </div>
        <AnimatedDiv className="hidden lg:flex lg:flex-row lg:gap-2">
          <RedirectButton redirectTo="/abortion" textPage="Aborto" />
          <RedirectButton redirectTo="/necropolitic" textPage="Necropolítica" />
        </AnimatedDiv>
      </div>
      <AnimatedDiv className="flex h-full w-full items-center justify-center lg:p-8">
        <HoverEffect items={politicalControlItems} />
      </AnimatedDiv>
      <AnimatedDiv className="flex flex-col gap-4 pb-24 lg:hidden">
        <RedirectButton redirectTo="/abortion" textPage="Aborto" />
        <RedirectButton redirectTo="/necropolitic" textPage="Necropolítica" />
      </AnimatedDiv>
      <ScrollToTopButton />
    </div>
  )
}
