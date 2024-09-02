'use client'

import { createContext, ReactNode, useState } from 'react'

type LanguageType = 'portuguese' | 'english'

interface LanguageContextType {
  language: LanguageType
  toggleLanguage: () => void
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageContext = createContext({} as LanguageContextType)

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<LanguageType>('portuguese')

  function toggleLanguage() {
    setLanguage((stateLanguage) =>
      stateLanguage === 'portuguese' ? 'english' : 'portuguese',
    )
  }

  return (
    <LanguageContext.Provider value={{ toggleLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  )
}
