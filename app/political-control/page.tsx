'use client'

import Link from 'next/link'

import { AnimatedDiv } from '@/components/animated-div'
import { LogoLink } from '@/components/logo-link'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { HoverEffect } from '@/components/ui/card-hover-grid'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const politicalControlItems = [
  {
    id: '1',
    title: 'Soberania e Globalização',
    description: {
      topic1: 'Desafios à soberania nacional.',
      topic2: 'Interdependência global',
      topic3: 'Implicações Éticas e Práticas.',
      topic4: 'Legitimação e eficácia da soberania na era digital.',
    },
  },
  {
    id: '2',
    title: 'Transparência vs. Segurança',
    description: {
      topic1: 'Defesa da transparência.',
      topic2: 'Ameaça à segurança naciona.',
    },
  },

  {
    id: '3',
    title: 'Limites Sexuais do Estado-Nação',
    description: {
      topic1: 'Julian Assange e WikiLeaks.',
      topic2: 'Divulgação de informações diplomáticas.',
      topic3: 'Controvérsia e segurança nacional.',
      topic4: 'Metáforas e Conflitos.',
    },
  },
  {
    id: '4',
    title: '',
    description: { topic1: 'Soberania.', topic2: 'Biopoder' },
  },
  {
    id: '5',
    title: 'Necropoder',
    description: {
      topic1: 'Imposição da morte.',
      topic2: 'Controle de movimentos, segregação, militarização.',
      topic3: 'Ferramentas de controle militar e emergência.',
      topic4:
        'Reconfiguração das relações entre resistência, sacrifício e terror.',
    },
  },
  {
    id: '6',
    title: '',
    description: {
      topic1: 'Implementação de políticas públicas.',
      topic2: 'Desigualdades sociais, de gênero e raciais.',
    },
  },
]

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
          <Link
            href="/abortion"
            className="mt-4 flex cursor-pointer select-none items-center rounded-md bg-stone-300/60 p-2 font-semibold text-foreground hover:bg-stone-400/60 dark:bg-stone-800 dark:hover:bg-stone-700"
          >
            Ver mais sobre Aborto
          </Link>
          <Link
            href="/necropolitic"
            className="mt-4 flex cursor-pointer select-none items-center rounded-md bg-stone-300/60 p-2 font-semibold text-foreground hover:bg-stone-400/60 dark:bg-stone-800 dark:hover:bg-stone-700"
          >
            Ver mais sobre Necropolítica
          </Link>
        </AnimatedDiv>
      </div>
      <AnimatedDiv className="flex h-full w-full items-center justify-center lg:p-8">
        <HoverEffect items={politicalControlItems} />
      </AnimatedDiv>
      <AnimatedDiv className="flex flex-col gap-4 pb-24 lg:hidden">
        <Link
          href="/abortion"
          className="flex cursor-pointer select-none items-center justify-center rounded-md bg-stone-300/60 p-2 font-semibold text-foreground hover:bg-stone-400/60 dark:bg-stone-800 dark:hover:bg-stone-700"
        >
          Ver mais sobre Aborto
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
