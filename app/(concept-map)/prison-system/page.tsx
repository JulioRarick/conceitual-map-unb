'use client'

import Link from 'next/link'

import { DownloadFilePdfButton } from '@/components/download-file-pdf-button'
import { LogoLink } from '@/components/logo-link'
import { PageCardCarousel } from '@/components/page-card-carousel'
import { RedirectButton } from '@/components/redirect-button'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { data } from '@/data'
import { useLanguage } from '@/hooks/use-language'
import { usePageName } from '@/hooks/use-page-name'

export default function PrisonSystem() {
  const { language } = useLanguage()
  const { pageName } = usePageName()

  const prisonSystemData = data[language].prisonSystem

  return (
    <>
      <LogoLink />
      <div className="flex h-full w-full flex-col px-4 lg:mt-10 lg:items-center lg:justify-center">
        <TextGenerateEffect words={pageName.prisonSystem} />
        <PageCardCarousel dataContent={prisonSystemData} />
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <Link
            href="https://www.gov.br/senappen/pt-br/acesso-a-informacao/acoes-e-programas-para-presos-e-egressos"
            target="_blank"
            rel="noreferrer"
            className="text-center text-cyan-700 hover:underline dark:text-cyan-300"
          >
            Ações e Programas para Presos e Egressos do Sistema Prisional{' '}
            {language === 'english' && ' Prison assistance program - Brazil'}
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=uiYtMlcaUc4"
            target="_blank"
            rel="noreferrer"
            className="text-center text-cyan-700 hover:underline dark:text-cyan-300"
          >
            Encarceramento em massa - A tragédia prisional brasileira
            {language === 'portuguese' ? ' (documentário)' : ' (documentary)'}
          </Link>
          <div className="px-6 pb-8">
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
