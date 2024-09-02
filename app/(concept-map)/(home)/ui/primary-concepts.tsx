import { AnimatedDiv } from '@/components/animated-div'
import { CardPrimaryConcept } from '@/components/card-primary-concept'
import { data } from '@/data'
import { useLanguage } from '@/hooks/use-language'

export function PrimaryConcepts() {
  const { language } = useLanguage()

  const primaryConceptsData = data[language].primaryConcepts
  return (
    <AnimatedDiv className="flex h-full w-full flex-col rounded-md bg-stone-200/50 p-4 shadow-md dark:bg-stone-900/50 lg:p-10">
      <h1 className="w-full justify-self-center text-center text-2xl font-bold tracking-tight text-foreground lg:pb-4 lg:text-3xl">
        {language === 'portuguese' ? 'Conceitos gerais' : 'Primary Concepts'}
      </h1>
      <div className="flex h-full w-full flex-col gap-4 pt-4 lg:grid lg:grid-cols-2 lg:grid-rows-2">
        {primaryConceptsData.map((card) => {
          return (
            <CardPrimaryConcept
              key={card.id}
              title={card.title}
              description={card.description}
              goingTo={card.goingTo}
              linkLabel={card.linklabel}
              author={card.author}
            />
          )
        })}
      </div>
    </AnimatedDiv>
  )
}
