/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode, useState } from 'react'

import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect'

export interface CardEducationConceptsProps {
  id?: string
  title: string
  icon: ReactNode
  children?: ReactNode
}

export function CardEducationConcepts({
  title,
  icon,
  children,
}: CardEducationConceptsProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative h-full w-full rounded-md border border-black/[0.2] dark:border-white/[0.2]"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              opacities={[0.1, 0.2, 0.3, 0.4, 0.5]}
              containerClassName="bg-cyan-900"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute z-10 flex h-full w-full items-center justify-center">
        <div className="z-20 mx-auto flex text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
      </div>
      <div className="relative z-10 p-4 opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100">
        <p className="p-4 text-xl font-bold">{title}</p>
        <>{children}</>
      </div>
    </div>
  )
}
