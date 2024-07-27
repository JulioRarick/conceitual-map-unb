'use client'

import Image from 'next/image'

import { AnimatedDiv } from '@/components/animated-div'
import { CardEducationConcepts } from '@/components/cards/card-education-concepts'
import { DialogCard } from '@/components/dialog-card'
import { LogoLink } from '@/components/logo-link'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import marilenaImage from '@/public/marilenaImage.jpeg'
import pauloFreireImage from '@/public/pauloFreireImage.jpg'

import { cardEducationData } from './card-education-data'

const pauloFreireData = {
  title: 'Paulo Freire',
  description:
    'Paulo Freire (1921-1997) foi um renomado educador e filósofo brasileiro, amplamente reconhecido por suas contribuições à teoria da educação. Ele é mais conhecido por seu trabalho seminal, "Pedagogia do Oprimido", publicado em 1968. Freire propôs uma abordagem de ensino revolucionária que enfatiza a conscientização crítica e a educação como um ato de liberdade. Sua metodologia, conhecida como "pedagogia crítica", incentiva os educandos a questionar e desafiar as opressões sociais e políticas em suas vidas, promovendo assim uma educação libertadora. Freire trabalhou extensivamente em programas de alfabetização de adultos no Brasil e em outros países da América Latina e África, influenciando educadores em todo o mundo com suas ideias sobre a educação como uma prática de liberdade e transformação social.',
  buttonTitle: 'Ver biografia',
}
const marilenaData = {
  title: 'Marilena Chaui',
  description:
    'Marilena Chaui (1941-) é uma influente filósofa e professora brasileira, conhecida por suas contribuições no campo da filosofia política e social. Formada em Filosofia pela Universidade de São Paulo (USP), onde também obteve seu doutorado, Chaui tornou-se uma das mais importantes intelectuais brasileiras contemporâneas.Seu trabalho aborda temas como a ideologia, a democracia, a cultura e a educação, com uma forte influência do pensamento de Baruch Spinoza e da Escola de Frankfurt. Uma de suas obras mais conhecidas é "Convite à Filosofia", que se tornou um livro amplamente utilizado em cursos de introdução à filosofia no Brasil. Chaui também é reconhecida por sua atuação política e social, sendo uma defensora ativa da democracia e dos direitos humanos. Ao longo de sua carreira, ela participou de debates públicos e movimentos sociais, contribuindo para a reflexão crítica sobre a sociedade brasileira e seus desafios.',
  buttonTitle: 'Ver biografia',
}

export default function Education() {
  return (
    <>
      <LogoLink />
      <div className="mt-3 flex w-full select-none flex-col items-center justify-center gap-4 lg:mt-0 lg:items-start lg:justify-start">
        <TextGenerateEffect words="Educação" />
        <AnimatedDiv className="mb-10 flex max-w-6xl flex-col self-center">
          <h2 className="hidden self-center pb-4 text-lg font-semibold text-cyan-600 lg:block lg:pb-2">
            Passe o mouse para mais informações
          </h2>
          <h2 className="block self-center pb-4 text-lg font-semibold text-cyan-600 lg:hidden">
            Clique para mais informações
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
            <div className="flex h-full w-full items-center justify-center">
              <Carousel className="flex">
                <CarouselContent className="mx-4 h-60 w-60 gap-2">
                  <CarouselItem className="flex h-full w-full flex-col items-center justify-center rounded-md bg-stone-100 dark:bg-stone-950">
                    <Image
                      alt="Paulo Freire"
                      src={pauloFreireImage}
                      width={160}
                      height={100}
                      className="rounded-md shadow-md"
                    />
                    <p className="p-1 font-semibold text-foreground">
                      Paulo Freire
                    </p>
                    <DialogCard
                      title={pauloFreireData.title}
                      description={pauloFreireData.description}
                      buttonTitle={pauloFreireData.buttonTitle}
                    />
                  </CarouselItem>
                  <CarouselItem className="flex h-full w-full flex-col items-center justify-center rounded-md bg-stone-100 dark:bg-stone-950">
                    <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-md shadow-md">
                      <Image
                        alt="Marilena Chaui"
                        src={marilenaImage}
                        width={180}
                        height={100}
                      />
                    </div>
                    <p className="p-1 font-semibold text-foreground">
                      Marilena Chaui
                    </p>
                    <DialogCard
                      title={marilenaData.title}
                      description={marilenaData.description}
                      buttonTitle={marilenaData.buttonTitle}
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </AnimatedDiv>
      </div>
      <ScrollToTopButton />
    </>
  )
}
