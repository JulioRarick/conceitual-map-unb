import { motion } from 'framer-motion'

import { AnimatedDivProps } from '@/@types/components-types'

export function AnimatedDiv({
  children,
  className,
  ...props
}: AnimatedDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
