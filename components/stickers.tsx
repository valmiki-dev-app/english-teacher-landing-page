'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

/**
 * Decorative NYC street-art style stickers. Each is a small inline SVG badge
 * that wobbles gently on hover. Purely decorative -> aria-hidden.
 */

type StickerProps = {
  className?: string
  rotate?: number
  children: ReactNode
}

export function StickerBase({ className, rotate = -6, children }: StickerProps) {
  return (
    <motion.div
      aria-hidden
      initial={{ scale: 0, rotate: rotate - 20 }}
      whileInView={{ scale: 1, rotate }}
      viewport={{ once: true }}
      whileHover={{ rotate: rotate + 6, scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 260, damping: 14 }}
      className={`pointer-events-auto inline-flex select-none items-center justify-center ${
        className ?? ''
      }`}
      style={{ rotate: `${rotate}deg` }}
    >
      {children}
    </motion.div>
  )
}

export function TaxiSticker({ className = '', rotate = -8 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="rounded-md border-2 border-foreground bg-taxi px-3 py-1 font-heading text-sm uppercase tracking-tight text-taxi-foreground shadow-[3px_3px_0_0_var(--foreground)]">
        NYC Taxi
      </span>
    </StickerBase>
  )
}

export function AppleSticker({ className = '', rotate = 7 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="rounded-full border-2 border-foreground bg-pink px-3 py-1 font-heading text-sm uppercase tracking-tight text-pink-foreground shadow-[3px_3px_0_0_var(--foreground)]">
        Big Apple
      </span>
    </StickerBase>
  )
}

export function SubwaySticker({ className = '', rotate = -4 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground bg-lime font-heading text-xl text-lime-foreground shadow-[3px_3px_0_0_var(--foreground)]">
        A
      </span>
    </StickerBase>
  )
}

export function BoltSticker({ className = '', rotate = 10 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        className="drop-shadow-[3px_3px_0_var(--foreground)]"
      >
        <path
          d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
          className="fill-taxi stroke-foreground"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </StickerBase>
  )
}

export function StarSticker({ className = '', rotate = -12 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <svg
        width="46"
        height="46"
        viewBox="0 0 24 24"
        className="drop-shadow-[3px_3px_0_var(--foreground)]"
      >
        <path
          d="M12 2l2.6 6.3L21 9l-5 4.3L17.5 21 12 17l-5.5 4L8 13.3 3 9l6.4-.7L12 2z"
          className="fill-sky stroke-foreground"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </StickerBase>
  )
}

/** colored push-pin used to "pin" polaroids to the board */
export function Pin({
  color = 'neon',
  className = '',
}: {
  color?: 'neon' | 'taxi' | 'pink' | 'sky' | 'lime'
  className?: string
}) {
  const bg = {
    neon: 'bg-neon',
    taxi: 'bg-taxi',
    pink: 'bg-pink',
    sky: 'bg-sky',
    lime: 'bg-lime',
  }[color]
  return (
    <span
      aria-hidden
      className={`block h-5 w-5 rounded-full border-2 border-foreground/70 ${bg} shadow-[2px_3px_4px_rgba(0,0,0,0.5)] ${className}`}
    >
      <span className="block h-1.5 w-1.5 translate-x-1 translate-y-1 rounded-full bg-background/40" />
    </span>
  )
}
