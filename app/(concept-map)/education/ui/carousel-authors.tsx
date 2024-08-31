import Image from 'next/image'

import { DialogCard } from '@/components/dialog-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import marilenaImage from '@/public/marilenaImage.jpeg'
import pauloFreireImage from '@/public/pauloFreireImage.jpg'

import { marilenaData, pauloFreireData } from '../card-education-data'

export function CarouselAuthors() {
  return (
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
            <p className="p-1 font-semibold text-foreground">Paulo Freire</p>
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
            <p className="p-1 font-semibold text-foreground">Marilena Chaui</p>
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
  )
}
