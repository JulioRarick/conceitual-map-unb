import { ArrowUp } from 'lucide-react'
import ScrollToTop from 'react-scroll-up'

export function ScrollToTopButton() {
  return (
    <ScrollToTop showUnder={160}>
      <div className="fixed bottom-8 right-6 z-50 flex cursor-pointer items-center justify-center rounded-md bg-cyan-500 p-2 shadow-md dark:bg-cyan-950 lg:hidden">
        <ArrowUp className="h-6 w-6 text-white dark:text-neutral-300" />
      </div>
    </ScrollToTop>
  )
}
