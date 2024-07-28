import { AnimatePresence, motion } from 'framer-motion'
import { Dot } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: string
    title: string
    description?: {
      topic1?: string
      topic2?: string
      topic3?: string
      topic4?: string
    }
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        'grid grid-cols-1 pb-16 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.id}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-2xl bg-cyan-600 shadow-md dark:bg-cyan-600/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription className="space-y-2 text-lg font-semibold">
              <p className="flex items-center gap-1">
                <Dot className="h-10 w-10 text-cyan-500" />
                {item.description?.topic1}
              </p>
              <p className="flex items-center gap-1">
                <Dot className="h-10 w-10 text-cyan-500" />
                {item.description?.topic2}
              </p>
              <p className="flex items-center gap-1">
                {item.description?.topic3 && (
                  <Dot className="h-10 w-10 text-cyan-500" />
                )}
                {item.description?.topic3}
              </p>
              <p className="flex items-center gap-1">
                {item.description?.topic4 && (
                  <Dot className="h-10 w-10 text-cyan-500" />
                )}
                {item.description?.topic4}
              </p>
            </CardDescription>
          </Card>
        </div>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full overflow-hidden rounded-xl border border-transparent bg-stone-200 p-2 shadow-md group-hover:border-stone-300 dark:border-white/[0.2] dark:bg-stone-950',
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  )
}
export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4
      className={cn(
        'mt-4 font-bold tracking-tight text-cyan-700 dark:text-cyan-300',
        className,
      )}
    >
      {children}
    </h4>
  )
}
export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mt-8 text-sm leading-relaxed tracking-wide text-foreground',
        className,
      )}
    >
      {children}
    </div>
  )
}
