import Link from 'next/link'

import { cn } from '@/lib/utils'
interface RedirectButtonProps {
  redirectTo: string
  textPage: string
  className?: string
}

export function RedirectButton({
  redirectTo,
  textPage,
  className,
}: RedirectButtonProps) {
  return (
    <Link
      href={redirectTo}
      className={cn(
        className,
        'mt-4 flex cursor-pointer select-none items-center justify-center rounded-md bg-stone-300/60 p-2 font-semibold text-foreground hover:bg-stone-400/60 dark:bg-stone-800 dark:hover:bg-stone-700',
      )}
    >
      Ver mais sobre {textPage}
    </Link>
  )
}
