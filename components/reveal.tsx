'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** direction the element slides in from */
  from?: 'up' | 'down' | 'left' | 'right'
  rotate?: number
}

const offset = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
}

export function Reveal({
  children,
  className,
  delay = 0,
  from = 'up',
  rotate = 0,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.01, rotate: rotate * 1.2, ...offset[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
