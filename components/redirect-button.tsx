import Link from 'next/link'

import { RedirectButtonProps } from '@/@types/components-types'
import { useLanguage } from '@/hooks/use-language'
import { cn } from '@/lib/utils'

export function RedirectButton({
  redirectTo,
  textPage,
  className,
}: RedirectButtonProps) {
  const { language } = useLanguage()
  return (
    <Link
      href={redirectTo}
      className={cn(
        className,
        'mt-4 flex cursor-pointer select-none items-center justify-center rounded-md bg-stone-300/60 p-2 font-semibold text-foreground hover:bg-stone-400/60 dark:bg-stone-800 dark:hover:bg-stone-700',
      )}
    >
      {language === 'portuguese' ? 'Ir para ' + textPage : 'Go to ' + textPage}
    </Link>
  )
}
