import { data } from '@/data'

import { useLanguage } from './use-language'

export const usePageName = () => {
  const { language } = useLanguage()
  const pageName = data[language].pagesNames
  return { pageName }
}
