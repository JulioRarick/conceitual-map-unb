import { BrainCircuit } from 'lucide-react'
import Link from 'next/link'

import { AnimatedDiv } from './animated-div'
import { ThemeToggle } from './theme-toggle'

export function LogoLink() {
  return (
    <>
      <div className="hidden self-end lg:block">
        <ThemeToggle />
      </div>
      <AnimatedDiv className="ml-10 mt-4 flex select-none items-center justify-start lg:ml-0 lg:mt-0 lg:w-full lg:justify-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="hidden flex-shrink-0 items-center justify-center rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-cyan-600 dark:bg-cyan-500 lg:flex lg:h-10 lg:w-10">
            <BrainCircuit className="h-5 w-5 text-white lg:h-8 lg:w-8" />
          </div>
          <span className="text-xl font-bold tracking-tight text-stone-950 dark:text-stone-50 lg:text-3xl">
            ConceptMap
          </span>
        </Link>
      </AnimatedDiv>
    </>
  )
}
