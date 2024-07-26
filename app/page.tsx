'use client'

import { DisciplineCard } from '@/components/cards/discipline-card'
import { ContentTitleComponent } from '@/components/content-title-component'
import { PrimaryConcepts } from '@/components/primary-concepts'

export default function Home() {
  return (
    <>
      <ContentTitleComponent />
      <div className="m-8 flex select-none items-center lg:grid lg:grid-cols-2 lg:items-start">
        <PrimaryConcepts />
        <div className="flex">
          <DisciplineCard />
        </div>
      </div>
    </>
  )
}
