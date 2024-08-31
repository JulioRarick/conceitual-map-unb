'use client'

import { LogoLink } from '@/components/logo-link'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { StudentsDocuments } from '@/components/students-documents'

export default function ProjectsStudents() {
  return (
    <>
      <LogoLink />
      <div className="flex h-full w-full items-center justify-center">
        <StudentsDocuments />
      </div>
      <ScrollToTopButton />
    </>
  )
}
