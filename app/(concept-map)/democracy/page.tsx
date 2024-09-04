'use client'

import Link from 'next/link'

import { LogoLink } from '@/components/logo-link'
import { PageCardCarousel } from '@/components/page-card-carousel'
import { RedirectButton } from '@/components/redirect-button'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { data } from '@/data'
import { useLanguage } from '@/hooks/use-language'
import { usePageName } from '@/hooks/use-page-name'

export default function Democracy() {
  const { language } = useLanguage()
  const { pageName } = usePageName()

  const democracyData = data[language].democracy

  return (
    <>
      <LogoLink />
      <div className="flex h-full w-full flex-col px-4 lg:mt-14 lg:items-center lg:justify-center">
        <TextGenerateEffect words={pageName.democracy} />
        <PageCardCarousel
          dataContent={democracyData}
          styleParagraph="text-sm"
        />
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <Link
            href="https://www.youtube.com/watch?v=k1MIsK5D0LQ"
            target="_blank"
            className="text-center text-cyan-700 hover:underline dark:text-cyan-300"
          >
            {language === 'portuguese'
              ? 'Breve história da democracia | MARILENA CHAUI'
              : 'Summarizing the history of democracy | MARILENA CHAUI'}
          </Link>
          <Link
            href="https://noticias.unb.br/artigos-main/6670-o-que-fazer-para-garantir-a-democracia"
            target="_blank"
            className="text-center text-cyan-700 hover:underline dark:text-cyan-300"
          >
            O que fazer para garantir a democracia - Luis Felipe Miguel
            {language === 'english' && ' (scientific paper)'}
          </Link>
          <div className="gap-3 px-6 pb-8 lg:flex lg:flex-row">
            <RedirectButton
              redirectTo="/political-control"
              textPage={pageName.politicalControl}
            />
            <RedirectButton
              redirectTo="/necropolitic"
              textPage={pageName.necropolitic}
            />
            <RedirectButton
              redirectTo="/human-rights"
              textPage={pageName.humanRights}
            />
            <RedirectButton
              redirectTo="/projects-students"
              textPage={pageName.projectsStudents}
            />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  )
}
