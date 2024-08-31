'use client'

import { AnimatedDiv } from '@/components/animated-div'
import { LogoLink } from '@/components/logo-link'
import { RedirectButton } from '@/components/redirect-button'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { HoverEffect } from '@/components/ui/card-hover-grid'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

import { abortionItems } from './data-abortion'

export default function Abortion() {
  return (
    <div className="flex flex-col lg:overflow-x-hidden lg:pr-4">
      <LogoLink />
      <div className="flex w-full flex-col pb-4 lg:flex-row lg:justify-between">
        <div className="pl-10">
          <TextGenerateEffect words="Aborto" />
        </div>
        <AnimatedDiv className="hidden lg:flex lg:flex-row lg:gap-2">
          <RedirectButton
            redirectTo="/political-control"
            textPage="Controle Político"
          />
          <RedirectButton redirectTo="/necropolitic" textPage="Necropolítica" />
        </AnimatedDiv>
      </div>
      <AnimatedDiv className="flex h-full w-full items-center justify-center p-2 lg:p-8">
        <HoverEffect items={abortionItems} />
      </AnimatedDiv>
      <AnimatedDiv className="flex flex-col gap-4 pb-24 lg:hidden">
        <RedirectButton
          redirectTo="/political-control"
          textPage="Controle Político"
        />
        <RedirectButton redirectTo="/necropolitic" textPage="Necropolítica" />
      </AnimatedDiv>
      <ScrollToTopButton />
    </div>
  )
}
