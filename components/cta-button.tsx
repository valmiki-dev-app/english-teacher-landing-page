'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type CtaButtonProps = {
  children: ReactNode
  href?: string
  color?: 'neon' | 'taxi' | 'pink' | 'sky' | 'lime'
  className?: string
}

const colorMap = {
  neon: 'bg-neon text-neon-foreground',
  taxi: 'bg-taxi text-taxi-foreground',
  pink: 'bg-pink text-pink-foreground',
  sky: 'bg-sky text-sky-foreground',
  lime: 'bg-lime text-lime-foreground',
}

export function CtaButton({
  children,
  href = '#zapis',
  color = 'neon',
  className = '',
}: CtaButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, rotate: -1 }}
      whileTap={{ y: 1, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      className={`group inline-flex items-center gap-3 rounded-full border-2 border-foreground px-5 py-3 font-heading text-sm uppercase tracking-tight shadow-[5px_5px_0_0_var(--foreground)] transition-shadow hover:shadow-[7px_7px_0_0_var(--foreground)] sm:px-7 sm:py-4 sm:text-base md:text-lg ${colorMap[color]} ${className}`}
    >
      {children}
      <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-current transition-transform group-hover:translate-x-1 group-hover:rotate-45">
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </span>
    </motion.a>
  )
}
