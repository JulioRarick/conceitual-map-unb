'use client'

import Link from 'next/link'

import { AnimatedDiv } from '@/components/animated-div'
import { LogoLink } from '@/components/logo-link'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { HoverEffect } from '@/components/ui/card-hover-grid'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const abortionItems = [
  {
    id: '1',
    title: 'Argumentos a favor da legalização',
    description: {
      topic1: 'Autonomia corporal.',
      topic2: 'Saúde pública.',
      topic3: 'Igualdade de gênero.',
      topic4: 'Redução de desigualdades sociais.',
    },
  },
  {
    id: '2',
    title: 'Argumentos contra o aborto',
    description: {
      topic1: 'Perspectiva moral/religiosa.',
      topic2: 'Direito à vida do feto.',
    },
  },
  {
    id: '3',
    title: 'Gestação e Maternidade',
    description: {
      topic1: 'Análise das políticas e práticas de saúde pública.',
      topic2: 'Desigualdades sociais, de gênero e raciais.',
      topic3: 'Violência obstétrica e direitos das gestantes.',
    },
  },
  {
    id: '4',
    title: 'Necropolítica e Aborto',
    description: {
      topic1: 'Impacto das políticas restritivas e permissivas.',
      topic2: 'Direitos humanos e saúde reprodutiva.',
      topic3: 'Autonomia sobre os corpos das mulheres.',
      topic4: 'Procedimentos clandestinos e inseguros.',
    },
  },
  {
    id: '5',
    title: 'Desigualdades Sociais, de Gênero e Raciais',
    description: {
      topic1:
        'Impacto desproporcional sobre mulheres de minorias e de baixa renda devido à falta de acesso a serviços de saúde reprodutiva.',
      topic2:
        'Racismo estrutural e discriminação de gênero exacerbam as desigualdades na saúde reprodutiva.',
    },
  },
  {
    id: '6',
    title: 'Casos e Exemplos',
    description: {
      topic1: 'Documentário "À margem do corpo" (Diniz, 2006).',
      topic2: 'Comparação com o caso de Klara Castanho.',
    },
  },
]

export default function Abortion() {
  return (
    <div className="flex flex-col lg:overflow-x-hidden lg:pr-4">
      <LogoLink />
      <div className="flex w-full flex-col pb-4 lg:flex-row lg:justify-between">
        <div className="pl-10">
          <TextGenerateEffect words="Aborto" />
        </div>
        <AnimatedDiv className="hidden lg:flex lg:flex-row lg:gap-2">
          <Link
            href="/political-control"
            className="mt-4 flex cursor-pointer select-none items-center rounded-md bg-stone-300/60 p-2 font-semibold text-foreground hover:bg-stone-400/60 dark:bg-stone-800 dark:hover:bg-stone-700"
          >
            Ver mais sobre Controle Político
          </Link>
          <Link
            href="/necropolitic"
            className="mt-4 flex cursor-pointer select-none items-center rounded-md bg-stone-300/60 p-2 font-semibold text-foreground hover:bg-stone-400/60 dark:bg-stone-800 dark:hover:bg-stone-700"
          >
            Ver mais sobre Necropolítica
          </Link>
        </AnimatedDiv>
      </div>
      <AnimatedDiv className="flex h-full w-full items-center justify-center p-2 lg:p-8">
        <HoverEffect items={abortionItems} />
      </AnimatedDiv>
      <AnimatedDiv className="flex flex-col gap-4 pb-24 lg:hidden">
        <Link
          href="/political-control"
          className="flex cursor-pointer select-none items-center justify-center rounded-md bg-stone-300/60 p-2 font-semibold text-foreground hover:bg-stone-400/60 dark:bg-stone-800 dark:hover:bg-stone-700"
        >
          Ver mais sobre Controle Político
        </Link>
        <Link
          href="/necropolitic"
          className="flex cursor-pointer select-none items-center justify-center rounded-md bg-stone-300/60 p-2 font-semibold text-foreground hover:bg-stone-400/60 dark:bg-stone-800 dark:hover:bg-stone-700"
        >
          Ver mais sobre Necropolítica
        </Link>
      </AnimatedDiv>
      <ScrollToTopButton />
    </div>
  )
}
