import { ArrowRightIcon } from 'lucide-react'

import { useLanguage } from '@/hooks/use-language'
import { studentsDocumentsData } from '@/data/data-students-documents'

import { AnimatedDiv } from './animated-div'

export function StudentsDocuments() {
  const { language } = useLanguage()

  return (
    <AnimatedDiv className="mt-4 flex flex-col gap-2 rounded-md bg-stone-200/50 px-6 py-8 shadow-md dark:bg-stone-900/50 lg:ml-10 lg:px-16 lg:py-10">
      <h1 className="text-center text-2xl font-bold tracking-tighter text-stone-900 dark:text-stone-50 lg:text-start lg:text-3xl">
        {language === 'portuguese'
          ? 'Trabalhos Realizados'
          : 'Work Accomplished by Students'}
      </h1>
      <p className="px-4 text-justify text-base text-stone-700 dark:text-stone-50 lg:px-0 lg:text-lg">
        {language === 'portuguese'
          ? 'A seguir estão alguns dos trabalhos realizados, pelos discentes da disciplina, durante o 1º Semestre de 2024.'
          : 'Below are some of the works done by the students of the discipline during the 1st Semester of 2024.'}
      </p>
      <p className="py-2 text-end text-sm text-stone-500 dark:text-stone-300">
        {language === 'portuguese'
          ? 'Clique para baixar o arquivo em PDF.'
          : 'Click to download the PDF file.'}
      </p>
      <div className="flex flex-col gap-2">
        {studentsDocumentsData.map((item) => {
          return (
            <div key={item.id}>
              <a
                href={item.title}
                download={item.documentUrl}
                className="group/item flex w-fit items-center gap-2 text-start leading-10 text-stone-900 underline underline-offset-4 transition hover:text-cyan-700 dark:text-stone-300 dark:hover:text-cyan-400 lg:ml-10"
              >
                <ArrowRightIcon className="invisible hidden h-6 w-6 transform ease-in-out group-hover/item:visible lg:block" />
                {item.title}
              </a>
              <div className="my-4 h-px w-full bg-stone-300 dark:bg-stone-800 lg:hidden" />
            </div>
          )
        })}
      </div>
    </AnimatedDiv>
  )
}
