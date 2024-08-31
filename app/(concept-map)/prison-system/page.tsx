'use client'

import Link from 'next/link'

import { AnimatedDiv } from '@/components/animated-div'
import { DownloadFilePdfButton } from '@/components/download-file-pdf-button'
import { LogoLink } from '@/components/logo-link'
import { RedirectButton } from '@/components/redirect-button'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

import { prisonSystemData } from './data-prision-system'

export default function PrisonSystem() {
  return (
    <>
      <LogoLink />
      <div className="flex h-full w-full flex-col px-4 lg:mt-10 lg:items-center lg:justify-center">
        <TextGenerateEffect words="Sistema Prisional" />
        <AnimatedDiv className="flex items-center justify-center">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="m-8 flex h-72 w-72">
              {prisonSystemData.map((card) => {
                return (
                  <CarouselItem key={card.id}>
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-stone-200 p-8 shadow-md dark:bg-stone-800">
                      <h1 className="text-center text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                        {card.title}
                      </h1>
                      <p className="text-justify text-stone-700 dark:text-stone-100">
                        {card.description}
                      </p>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </AnimatedDiv>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <Link
            href="https://www.gov.br/senappen/pt-br/acesso-a-informacao/acoes-e-programas-para-presos-e-egressos"
            target="_blank"
            rel="noreferrer"
            className="text-center text-cyan-700 hover:underline dark:text-cyan-300"
          >
            Ações e Programas para Presos e Egressos do Sistema Prisional
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=uiYtMlcaUc4"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-700 hover:underline dark:text-cyan-300"
          >
            Encarceramento em massa - A tragédia prisional brasileira
            (documentário)
          </Link>
          <div className="px-6 pb-8">
            <RedirectButton
              redirectTo="/political-control"
              textPage="Controle Político"
            />
            <RedirectButton
              redirectTo="/necropolitic"
              textPage="Necropolítica"
            />
            <RedirectButton
              redirectTo="/human-rights"
              textPage="Direitos Humanos"
            />
            <DownloadFilePdfButton
              fileName="prisonTextDocument.pdf"
              downloadUrl="/files/prisonTextDocument.pdf"
            />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  )
}
