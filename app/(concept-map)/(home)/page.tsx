'use client'

import { RedirectButton } from '@/components/redirect-button'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { StudentsDocuments } from '@/components/students-documents'
import { useLanguage } from '@/hooks/use-language'

import { DisciplineCard } from './ui/cards/discipline-card'
import { ContentTitleComponent } from './ui/content-title-component'
import { PrimaryConcepts } from './ui/primary-concepts'
import { SocialMediaComponent } from './ui/social-media-component'

export default function Home() {
  const { language } = useLanguage()
  return (
    <div className="lg:flex lg:flex-col lg:overflow-x-hidden lg:pr-4">
      <ContentTitleComponent />
      <>
        <div className="m-4 flex select-none flex-col items-center lg:grid lg:grid-cols-2 lg:items-start">
          <PrimaryConcepts />
          <RedirectButton
            redirectTo="/projects-students"
            textPage={
              language === 'portuguese'
                ? 'trabalhos realizados na disciplina'
                : 'work accomplished by students'
            }
            className="text-center lg:hidden"
          />
          <div className="flex flex-col gap-4">
            <DisciplineCard />
            <StudentsDocuments />
            <SocialMediaComponent />
          </div>
        </div>
        <ScrollToTopButton />
      </>
    </div>
  )
}
