'use client'

import Image from 'next/image'

import { AnimatedDiv } from '@/components/animated-div'
import { LanguageToggle } from '@/components/language-toggle'
import { ThemeToggle } from '@/components/theme-toggle'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import unbLogo from '@/public/unbLogo.png'

export function ContentTitleComponent() {
  return (
    <>
      <div className="hidden self-end lg:block">
        <div className="mr-10">
          <LanguageToggle />
        </div>
        <ThemeToggle />
      </div>
      <div className="flex w-auto select-none flex-col items-center gap-4 px-4 pt-8 lg:flex-row lg:justify-between lg:pl-10 lg:pr-10 lg:pt-2">
        <div className="flex flex-col items-center justify-center gap-2 tracking-tight text-foreground">
          <AnimatedDiv className="h-auto w-auto shadow-lg md:hidden">
            <Image
              src={unbLogo}
              alt="Bandeira Universidade de Brasília (UNB)"
              width={80}
              height={40}
            />
          </AnimatedDiv>
          <TextGenerateEffect words="ConceptMap" />
          <AnimatedDiv className="text-center">
            <p className="text-lg font-bold text-cyan-600 md:text-2xl">
              Instituições de Direito Público e Privado
            </p>
            <p className="mt-1 text-start text-sm md:text-base">
              Docente: Rafael da Escóssia Lima
            </p>
            <p className="mt-1 text-start text-sm md:text-base">
              Discente: Júlio Rarick Lopes
            </p>
          </AnimatedDiv>
        </div>
        <AnimatedDiv className="hidden h-auto w-auto shadow-lg md:block">
          <Image
            src={unbLogo}
            alt="Bandeira Universidade de Brasília (UNB)"
            width={200}
            height={110}
          />
        </AnimatedDiv>
      </div>
    </>
  )
}
