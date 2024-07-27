'use client'

import Image from 'next/image'

import unbLogo from '@/public/unbLogo.png'

import { AnimatedDiv } from '../animated-div'
import { ThemeToggle } from '../theme-toggle'
import { TextGenerateEffect } from '../ui/text-generate-effect'

export function ContentTitleComponent() {
  return (
    <>
      <div className="hidden self-end md:block">
        <ThemeToggle />
      </div>
      <div className="flex w-auto select-none flex-col items-center gap-4 px-4 pt-8 md:flex-row md:justify-between md:pl-10 md:pr-10 md:pt-2">
        <div className="flex flex-col items-center justify-center gap-2 tracking-tight text-foreground">
          <AnimatedDiv className="h-auto w-auto shadow-lg md:hidden">
            <Image
              src={unbLogo}
              alt="Bandeira Universidade de Brasília (UNB)"
              width={80}
              height={40}
            />
          </AnimatedDiv>
          <TextGenerateEffect words="Mapa Conceitual" />
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
