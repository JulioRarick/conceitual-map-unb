'use client'
import {
  IconBabyCarriage,
  IconBooks,
  IconBuilding,
  IconCopyright,
  IconHome,
  IconScale,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { BrainCircuit } from 'lucide-react'
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'

import { cn } from '@/lib/utils'

import { Sidebar, SidebarBody, SidebarLink } from './ui/sidebar'

interface SidebarContainerProps {
  children: ReactNode
}

export function SidebarContainer({ children }: SidebarContainerProps) {
  const links = [
    {
      label: 'Home',
      href: '/',
      icon: (
        <IconHome className="h-6 w-6 flex-shrink-0 text-stone-700 dark:text-stone-400" />
      ),
    },
    {
      label: 'Educação',
      href: '/education',
      icon: (
        <IconBooks className="h-6 w-6 flex-shrink-0 text-stone-700 dark:text-stone-400" />
      ),
    },
    {
      label: 'Necropolítica',
      href: '/necropolitic',
      icon: (
        <IconBuilding className="h-6 w-6 flex-shrink-0 text-stone-700 dark:text-stone-400" />
      ),
    },
    {
      label: 'Aborto',
      href: '/abortion',
      icon: (
        <IconBabyCarriage className="h-6 w-6 flex-shrink-0 text-stone-700 dark:text-stone-400" />
      ),
    },
    {
      label: 'Controle político',
      href: '/political-control',
      icon: (
        <IconScale className="h-6 w-6 flex-shrink-0 text-stone-700 dark:text-stone-400" />
      ),
    },
  ]
  const [open, setOpen] = useState(false)
  return (
    <div
      className={cn(
        'mx-auto flex w-full flex-1 select-none flex-col overflow-hidden rounded-md bg-stone-200 dark:bg-stone-900 lg:h-screen lg:flex-row',
        // 'h-[60vh]', // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-1 flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: 'Code by Julio Rarick',
                target: '_blank',
                href: 'https://www.juliorarick.tech/',
                icon: <IconCopyright className="h-6 w-6 text-cyan-500" />,
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard>{children}</Dashboard>
    </div>
  )
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm"
    >
      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-cyan-600 dark:bg-cyan-500">
        <BrainCircuit className="h-5 w-5 text-white" />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-lg font-bold tracking-tight text-stone-950 dark:text-stone-50"
      >
        ConceptMap
      </motion.span>
    </Link>
  )
}
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal"
    >
      <div className="h-5 w-6 flex-shrink-0 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm" />
    </Link>
  )
}

// Dummy dashboard component with content
export function Dashboard({ children }: SidebarContainerProps) {
  return (
    <div className="flex flex-1 bg-stone-100 dark:bg-stone-950">
      <div className="flex h-full w-full flex-1 flex-col bg-stone-100 p-2 dark:bg-stone-950 lg:rounded-none lg:border lg:border-l-2 lg:p-10">
        {children}
      </div>
    </div>
  )
}
