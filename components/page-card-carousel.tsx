import { PageCardCarouselProps } from '@/@types/components-types'
import { cn } from '@/lib/utils'

import { AnimatedDiv } from './animated-div'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

export function PageCardCarousel({
  dataContent,
  className,
  styleTitle,
  styleParagraph,
}: PageCardCarouselProps) {
  return (
    <AnimatedDiv className="flex items-center justify-center">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="m-8 flex h-72 w-72">
          {dataContent.map((card) => {
            return (
              <CarouselItem key={card.id}>
                <div
                  className={cn(
                    'flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-stone-200 p-8 shadow-md dark:bg-stone-800',
                    className,
                  )}
                >
                  <h1
                    className={cn(
                      'text-center text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50',
                      styleTitle,
                    )}
                  >
                    {card.title}
                  </h1>
                  <p
                    className={cn(
                      'text-justify text-stone-700 dark:text-stone-100',
                      styleParagraph,
                    )}
                  >
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
  )
}
