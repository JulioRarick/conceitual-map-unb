'use client'

import { DisciplineCard } from '@/components/cards/discipline-card'
import { ContentTitleComponent } from '@/components/home-components/content-title-component'
import { PrimaryConcepts } from '@/components/home-components/primary-concepts'
import { SocialMediaComponent } from '@/components/home-components/social-media-component'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'

export default function Home() {
  return (
    <>
      <ContentTitleComponent />
      <div className="m-8 flex select-none flex-col items-center lg:grid lg:grid-cols-2 lg:items-start">
        <PrimaryConcepts />
        <div className="flex flex-col">
          <DisciplineCard />
          <SocialMediaComponent />
        </div>
      </div>
      <ScrollToTopButton />
    </>
  )
}
