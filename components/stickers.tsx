'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

/**
 * Decorative street-art style stickers. Each is a small inline SVG badge
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
      <span className="flex items-center gap-2 rounded-md border-2 border-foreground bg-taxi px-3 py-1.5 shadow-[3px_3px_0_0_var(--foreground)]">
        <svg width="30" height="20" viewBox="0 0 30 20" className="text-taxi-foreground">
          <path
            d="M2 13 L5 7 H10 L12 4 H18 L20 7 H25 L28 13 V16 H26 a2.5 2.5 0 0 1-5 0 H9 a2.5 2.5 0 0 1-5 0 H2 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <rect x="11" y="7" width="8" height="3" fill="var(--taxi)" />
        </svg>
        <span className="font-heading text-xs uppercase tracking-tight text-taxi-foreground">
          taxi
        </span>
      </span>
    </StickerBase>
  )
}

export function AppleSticker({ className = '', rotate = 7 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-foreground bg-pink shadow-[3px_3px_0_0_var(--foreground)]">
        <svg width="26" height="26" viewBox="0 0 24 24" className="text-pink-foreground">
          <path
            d="M12 7c0-2 1.4-3.6 3.4-3.8C15.2 5.1 13.8 6.6 12 7Z"
            fill="currentColor"
          />
          <path
            d="M16.3 7.3c-1.2 0-2 .7-3 .7s-1.9-.7-3.2-.7C7.6 7.3 6 9.2 6 12c0 3 2.2 6.7 4.1 6.7 1 0 1.3-.6 2.4-.6s1.4.6 2.4.6c1.9 0 3.9-3.6 3.9-6.6 0-2.4-1.4-3.6-2.5-4.4Z"
            fill="currentColor"
          />
        </svg>
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

/** NY graffiti tag sticker */
export function NYSticker({ className = '', rotate = -6 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="flex items-center justify-center rounded-lg border-2 border-foreground bg-neon px-3 py-1.5 shadow-[3px_3px_0_0_var(--foreground)]">
        <span className="font-heading text-2xl font-black uppercase tracking-tighter text-neon-foreground" style={{ fontStyle: 'italic' }}>
          NY
        </span>
      </span>
    </StickerBase>
  )
}

/** Statue of Liberty silhouette sticker */
export function LibertySticker({ className = '', rotate = 4 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="flex h-14 w-11 items-center justify-center rounded-md border-2 border-foreground bg-lime shadow-[3px_3px_0_0_var(--foreground)]">
        <svg width="28" height="48" viewBox="0 0 28 48" fill="none">
          {/* torch arm */}
          <path d="M19 6 L21 0 L23 2 L22 6" fill="var(--lime-foreground)" />
          {/* flame */}
          <path d="M21 0 Q23 -2 24 1 Q22 3 21 2Z" fill="var(--taxi)" />
          {/* crown */}
          <path d="M10 14 L11 10 L13 13 L14 9 L15 13 L17 10 L18 14 Z" fill="var(--lime-foreground)" />
          {/* head */}
          <ellipse cx="14" cy="17" rx="5" ry="4" fill="var(--lime-foreground)" />
          {/* robe body */}
          <path d="M9 21 L7 38 H21 L19 21 Z" fill="var(--lime-foreground)" />
          {/* tablet */}
          <rect x="3" y="22" width="7" height="9" rx="1" fill="var(--lime-foreground)" />
          {/* base */}
          <rect x="6" y="38" width="16" height="4" rx="1" fill="var(--lime-foreground)" />
          <rect x="4" y="42" width="20" height="3" rx="1" fill="var(--lime-foreground)" />
          {/* robe folds */}
          <line x1="11" y1="22" x2="10" y2="38" stroke="var(--lime)" strokeWidth="1" />
          <line x1="14" y1="21" x2="14" y2="38" stroke="var(--lime)" strokeWidth="1" />
          <line x1="17" y1="22" x2="18" y2="38" stroke="var(--lime)" strokeWidth="1" />
        </svg>
      </span>
    </StickerBase>
  )
}

/** American flag sticker */
export function FlagSticker({ className = '', rotate = 6 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="overflow-hidden rounded-md border-2 border-foreground shadow-[3px_3px_0_0_var(--foreground)]" style={{ width: 52, height: 34 }}>
        <svg width="52" height="34" viewBox="0 0 52 34">
          {/* stripes */}
          {Array.from({ length: 13 }).map((_, i) => (
            <rect
              key={i}
              x="0"
              y={i * (34 / 13)}
              width="52"
              height={34 / 13 + 0.5}
              fill={i % 2 === 0 ? '#B22234' : '#FFFFFF'}
            />
          ))}
          {/* blue canton */}
          <rect x="0" y="0" width="22" height="18" fill="#3C3B6E" />
          {/* stars (simplified dots) */}
          {[
            [2,2],[6,2],[10,2],[14,2],[18,2],
            [4,5],[8,5],[12,5],[16,5],[20,5],
            [2,8],[6,8],[10,8],[14,8],[18,8],
            [4,11],[8,11],[12,11],[16,11],[20,11],
            [2,14],[6,14],[10,14],[14,14],[18,14],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="1" fill="white" />
          ))}
        </svg>
      </span>
    </StickerBase>
  )
}

/** "I ♥ NY" style heart sticker */
export function HeartNYSticker({ className = '', rotate = -8 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="flex items-center gap-1 rounded-md border-2 border-foreground bg-foreground px-2.5 py-1.5 shadow-[3px_3px_0_0_var(--neon)]">
        <span className="font-heading text-sm font-black uppercase text-background">I</span>
        <svg width="14" height="13" viewBox="0 0 14 13" fill="var(--neon)">
          <path d="M7 12 C7 12 1 8 1 4 C1 2 2.5 1 4 1 C5.5 1 7 2.5 7 2.5 C7 2.5 8.5 1 10 1 C11.5 1 13 2 13 4 C13 8 7 12 7 12Z"/>
        </svg>
        <span className="font-heading text-sm font-black uppercase text-background">NY</span>
      </span>
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
