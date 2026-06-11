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
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
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
      initial={{ opacity: 0, rotate: rotate * 1.5, ...offset[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
