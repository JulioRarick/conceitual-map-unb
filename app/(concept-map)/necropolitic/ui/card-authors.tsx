'use client'

import { AnimatedDiv } from '@/components/animated-div'
import { DialogCard } from '@/components/dialog-card'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { data } from '@/data'
import { useLanguage } from '@/hooks/use-language'
import achilleImage from '@/public/achilleImage.jpg'
import focaultImage from '@/public/focaultImage.jpeg'

export function CardAuthors() {
  const { language } = useLanguage()

  const achileMbembeData = data[language].achileMbembe
  const foucaultData = data[language].foucault
  return (
    <AnimatedDiv className="mt-8 flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:p-8">
      <DirectionAwareHover
        imageUrl={achilleImage}
        className="h-52 w-52"
        imageClassName="dark:opacity-60"
      >
        <>
          <p className="rounded-md bg-cyan-900 p-1 text-lg text-white">
            {achileMbembeData.name}
          </p>
          <DialogCard
            buttonTitle={achileMbembeData.buttonTitle}
            variant="default"
            description={achileMbembeData.description}
            title={achileMbembeData.name}
          />
        </>
      </DirectionAwareHover>
      <DirectionAwareHover
        imageUrl={focaultImage}
        className="h-52 w-52"
        imageClassName="dark:opacity-60"
      >
        <>
          <p className="rounded-md bg-cyan-900 p-1 text-lg text-white">
            {foucaultData.name}
          </p>
          <DialogCard
            variant="default"
            buttonTitle={foucaultData.buttonTitle}
            description={foucaultData.description}
            title={foucaultData.name}
          />
        </>
      </DirectionAwareHover>
    </AnimatedDiv>
  )
}
