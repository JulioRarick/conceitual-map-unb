'use client'

import { LogoLink } from '@/components/logo-link'
import { PageCardCarousel } from '@/components/page-card-carousel'
import { RedirectButton } from '@/components/redirect-button'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { data } from '@/data'
import { useLanguage } from '@/hooks/use-language'
import { usePageName } from '@/hooks/use-page-name'

export default function HumanRights() {
  const { pageName } = usePageName()
  const { language } = useLanguage()

  const humanRightsData = data[language].humanRights
  const relationsHumanRightsWithOthers = data[language].relationsHumanRights

  return (
    <>
      <LogoLink />
      <TextGenerateEffect words={pageName.humanRights} />
      <div className="mb-12 flex h-full w-full flex-col items-center justify-center overflow-auto px-4 lg:mt-10 lg:grid lg:grid-cols-[min-content_1fr]">
        <div className="flex h-full w-full flex-col items-start">
          <h1 className="p-4 text-2xl font-bold tracking-tighter">
            {language === 'portuguese' ? 'Conceitos' : 'Concepts'}
          </h1>
          <PageCardCarousel dataContent={humanRightsData} />
        </div>
        <div className="flex w-full flex-col items-center gap-2 lg:pl-8">
          <h1 className="text-2xl font-bold tracking-tighter text-cyan-600">
            {language === 'portuguese'
              ? 'Relações entre conceitos'
              : 'Connection with others concepts'}
          </h1>
          <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:grid-rows-4">
            {relationsHumanRightsWithOthers.map((aspect) => {
              return (
                <div
                  key={aspect.id}
                  className="h-full w-full px-8 text-justify"
                >
                  <h1 className="p-2 text-center text-lg font-bold tracking-tighter">
                    {aspect.title}
                  </h1>
                  <p className="text-sm text-stone-800 dark:text-stone-100">
                    {aspect.description}
                  </p>
                </div>
              )
            })}
            <div className="px-6 pb-8">
              <RedirectButton redirectTo="/" textPage="Home" />
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  )
}
