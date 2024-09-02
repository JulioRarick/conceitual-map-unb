'use client'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrainCircuit } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import React, {
  ComponentProps,
  createContext,
  useContext,
  useState,
} from 'react'

import { cn } from '@/lib/utils'

import { LanguageToggle } from '../language-toggle'
import { ThemeToggle } from '../theme-toggle'

interface Links {
  label: string
  href: string
  target?: string
  icon: React.JSX.Element | React.ReactNode
}

interface SidebarContextProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  animate: boolean
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  animate?: boolean
}) => {
  const [openState, setOpenState] = useState(false)

  const open = openProp !== undefined ? openProp : openState
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  animate?: boolean
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  )
}

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<'div'>)} />
    </>
  )
}

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar()
  return (
    <>
      <motion.div
        className={cn(
          'hidden h-full w-[300px] flex-shrink-0 bg-stone-200 px-4 py-4 dark:bg-stone-900 lg:flex lg:flex-col',
          className,
        )}
        animate={{
          width: animate ? (open ? '300px' : '60px') : '300px',
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  )
}

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) => {
  const { open, setOpen } = useSidebar()
  return (
    <>
      <div
        className={cn(
          'flex h-14 w-full flex-row items-center justify-between bg-stone-200 px-4 py-4 dark:bg-stone-900 lg:hidden',
        )}
        {...props}
      >
        <Link href="/">
          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-cyan-600 dark:bg-cyan-600">
            <BrainCircuit className="h-5 w-5 text-white" />
          </div>
        </Link>
        <div className="z-20 flex w-full justify-end gap-4">
          <LanguageToggle />
          <ThemeToggle />
          <IconMenu2
            className="h-8 w-8 text-foreground"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className={cn(
                'fixed inset-0 z-[100] flex h-full w-full flex-col justify-between bg-background p-10',
                className,
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-foreground"
                onClick={() => setOpen(!open)}
              >
                <IconX />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links
  className?: string
  props?: LinkProps & ComponentProps<'a'>
}) => {
  const { open, animate, setOpen } = useSidebar()
  return (
    <Link
      href={link.href}
      target={link.target}
      className={cn(
        'group/sidebar flex items-center justify-start gap-2 py-2',
        className,
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? 'inline-block' : 'none') : 'inline-block',
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="!mt-0 inline-block whitespace-pre !p-0 text-sm font-semibold text-foreground transition duration-150 group-hover/sidebar:translate-x-1 group-hover/sidebar:text-cyan-600"
      >
        {link.label}
      </motion.span>
    </Link>
  )
}
