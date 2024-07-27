import '../styles/globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { SidebarContainer } from '@/components/sidebar-container'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'ConceptMap',
  description: 'Code by Júlio Rarick Lopes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <main className="flex h-auto w-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarContainer>{children}</SidebarContainer>
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
