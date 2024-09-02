import Link from 'next/link'

import { AnimatedDiv } from '@/components/animated-div'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/use-language'

const syllabusPortuguese =
  "'Estudo de normas e princípios fundamentais do Direito Público e do Direito Privado, com especial enfoque dogmático-panorâmico dos diversos ramos do direito positivo brasileiro. O problema da interpretação: norma e ordenamento jurídico. Fontes do direito. O Estado e o Direito Constitucional: direitos e garantias fundamentais. Organização do Estado e dos poderes.'"
const syllabusEnglish =
  "'Study of fundamental norms and principles of Public Law and Private Law, with a particular dogmatic-panoramic focus on various branches of Brazilian positive law. The problem of interpretation: norm and legal system. Sources of law. The State and Constitutional Law: fundamental rights and guarantees. Organization of the State and powers.'"

export function DisciplineCard() {
  const { language } = useLanguage()

  return (
    <AnimatedDiv className="ml-10 hidden flex-col gap-2 rounded-md bg-stone-200/50 shadow-md dark:bg-stone-900/50 lg:flex lg:p-10">
      <div className="flex items-center justify-between">
        <h2 className="text-start text-3xl font-bold tracking-tight">
          {language === 'portuguese' ? 'Disciplina' : 'Discipline'}
        </h2>
        <Button asChild variant="link" className="text-muted-foreground">
          <Link target="_blank" href="https://www.direito.unb.br/">
            {language === 'portuguese'
              ? 'Veja mais informações'
              : 'See more information'}
          </Link>
        </Button>
      </div>
      <span className="text-center text-xl font-bold tracking-tight">
        {language === 'portuguese' ? 'Ementa' : 'Syllabus'}
      </span>
      <p className="text-justify">
        {language === 'portuguese' ? syllabusPortuguese : syllabusEnglish}
      </p>
      <span className="text-center text-xl font-bold tracking-tight">
        Justificativa
      </span>
      <p className="text-justify">
        {language === 'portuguese'
          ? 'A disciplina visa a oferecer noções gerais a respeito do Direito brasileiro, de maneira a formar cidadãos críticos e comprometidos com o Estado Democrático de Direito.'
          : 'The course aims to provide general notions about Brazilian Law, in order to form critical citizens committed to the Democratic Rule of Law.'}
      </p>
      <span className="text-center text-xl font-bold tracking-tight">
        {language === 'portuguese' ? 'Objetivo' : 'Objective'}
      </span>
      <p className="text-justify">
        {language === 'portuguese'
          ? 'Conhecer instituições de Direito Público e Privado brasileiro, numa perspectiva panorâmica, interdisciplinar e crítica.'
          : 'To understand Brazilian Public and Private Law institutions from a panoramic, interdisciplinary, and critical perspective.'}
      </p>
    </AnimatedDiv>
  )
}
