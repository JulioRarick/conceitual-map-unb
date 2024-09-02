import { useLanguage } from '@/hooks/use-language'

import { Button } from './ui/button'

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  return (
    <Button onClick={() => toggleLanguage()} variant="secondary">
      {language === 'portuguese' ? 'English' : 'Português'}
    </Button>
  )
}
