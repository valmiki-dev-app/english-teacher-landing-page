'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

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
      className={`pointer-events-auto inline-flex select-none items-center justify-center ${className ?? ''}`}
    >
      {children}
    </motion.div>
  )
}

/** NYC yellow taxi cab */
export function TaxiSticker({ className = '', rotate = -8 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="flex items-center gap-2 rounded-md border-2 border-foreground bg-taxi px-3 py-1.5 shadow-[3px_3px_0_0_var(--foreground)]">
        <svg width="28" height="18" viewBox="0 0 30 20" className="text-taxi-foreground">
          <path d="M2 13 L5 7 H10 L12 4 H18 L20 7 H25 L28 13 V16 H26 a2.5 2.5 0 0 1-5 0 H9 a2.5 2.5 0 0 1-5 0 H2 Z" fill="currentColor" strokeWidth="1" strokeLinejoin="round" />
          <rect x="11" y="7" width="8" height="3" fill="var(--taxi)" />
        </svg>
        <span className="font-heading text-xs uppercase tracking-tight text-taxi-foreground">taxi</span>
      </span>
    </StickerBase>
  )
}

/** NYC Subway circle token — like the real ones */
export function SubwaySticker({ className = '', rotate = -4 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground bg-lime font-heading text-xl text-lime-foreground shadow-[3px_3px_0_0_var(--foreground)]">A</span>
    </StickerBase>
  )
}

/** Lightning bolt */
export function BoltSticker({ className = '', rotate = 10 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="drop-shadow-[3px_3px_0_var(--foreground)]">
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" className="fill-taxi stroke-foreground" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    </StickerBase>
  )
}

/** Star */
export function StarSticker({ className = '', rotate = -12 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <svg width="44" height="44" viewBox="0 0 24 24" className="drop-shadow-[3px_3px_0_var(--foreground)]">
        <path d="M12 2l2.6 6.3L21 9l-5 4.3L17.5 21 12 17l-5.5 4L8 13.3 3 9l6.4-.7L12 2z" className="fill-sky stroke-foreground" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    </StickerBase>
  )
}

/** NY graffiti tag */
export function NYSticker({ className = '', rotate = -6 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="flex items-center justify-center rounded-lg border-2 border-foreground bg-neon px-3 py-1.5 shadow-[3px_3px_0_0_var(--foreground)]">
        <span className="font-heading text-2xl font-black uppercase italic tracking-tighter text-neon-foreground">NY</span>
      </span>
    </StickerBase>
  )
}

/** Statue of Liberty */
export function LibertySticker({ className = '', rotate = 4 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="flex h-16 w-12 items-center justify-center rounded-md border-2 border-foreground bg-lime shadow-[3px_3px_0_0_var(--foreground)]">
        <svg width="28" height="54" viewBox="0 0 28 54" fill="none">
          <path d="M19 8 L21 2 L23 4 L22 8" fill="var(--lime-foreground)" />
          <path d="M21 2 Q23 0 24 2.5 Q22 4.5 21 3Z" fill="var(--taxi)" />
          <path d="M10 16 L11 12 L13 15 L14 11 L15 15 L17 12 L18 16 Z" fill="var(--lime-foreground)" />
          <ellipse cx="14" cy="19" rx="5" ry="4" fill="var(--lime-foreground)" />
          <path d="M9 23 L7 42 H21 L19 23 Z" fill="var(--lime-foreground)" />
          <rect x="3" y="24" width="7" height="9" rx="1" fill="var(--lime-foreground)" />
          <rect x="6" y="42" width="16" height="4" rx="1" fill="var(--lime-foreground)" />
          <rect x="4" y="46" width="20" height="4" rx="1" fill="var(--lime-foreground)" />
          <line x1="11" y1="24" x2="10" y2="42" stroke="var(--lime)" strokeWidth="1" />
          <line x1="14" y1="23" x2="14" y2="42" stroke="var(--lime)" strokeWidth="1" />
          <line x1="17" y1="24" x2="18" y2="42" stroke="var(--lime)" strokeWidth="1" />
        </svg>
      </span>
    </StickerBase>
  )
}

/** American flag */
export function FlagSticker({ className = '', rotate = 6 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="overflow-hidden rounded-md border-2 border-foreground shadow-[3px_3px_0_0_var(--foreground)]" style={{ width: 52, height: 34 }}>
        <svg width="52" height="34" viewBox="0 0 52 34">
          {Array.from({ length: 13 }).map((_, i) => (
            <rect key={i} x="0" y={i * (34 / 13)} width="52" height={34 / 13 + 0.5} fill={i % 2 === 0 ? '#B22234' : '#FFFFFF'} />
          ))}
          <rect x="0" y="0" width="22" height="18" fill="#3C3B6E" />
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

/** "I ♥ NY" */
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

/** NYC pretzel — street food */
export function PretzelSticker({ className = '', rotate = 12 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-taxi shadow-[3px_3px_0_0_var(--foreground)]">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          {/* pretzel shape */}
          <path d="M14 4 C10 4 7 7 7 10 C7 12 8.5 13.5 10 13 L14 10 L18 13 C19.5 13.5 21 12 21 10 C21 7 18 4 14 4Z" fill="var(--taxi-foreground)" />
          <path d="M7 10 C5 11 4 13 4 15 C4 18 6 20 9 20 C11 20 13 18.5 14 17" stroke="var(--taxi-foreground)" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M21 10 C23 11 24 13 24 15 C24 18 22 20 19 20 C17 20 15 18.5 14 17" stroke="var(--taxi-foreground)" strokeWidth="3" fill="none" strokeLinecap="round"/>
          {/* salt dots */}
          <circle cx="10" cy="8" r="1" fill="white" opacity="0.8" />
          <circle cx="14" cy="6" r="1" fill="white" opacity="0.8" />
          <circle cx="18" cy="8" r="1" fill="white" opacity="0.8" />
        </svg>
      </span>
    </StickerBase>
  )
}

/** Brooklyn badge */
export function BrooklynSticker({ className = '', rotate = -10 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="flex items-center justify-center rounded-full border-2 border-foreground bg-sky px-4 py-2 shadow-[3px_3px_0_0_var(--foreground)]">
        <span className="font-heading text-sm font-black uppercase tracking-tight text-sky-foreground">BK</span>
      </span>
    </StickerBase>
  )
}

/** Coffee cup — NYC deli classic */
export function CoffeeSticker({ className = '', rotate = 8 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="flex h-12 w-11 items-center justify-center rounded-md border-2 border-foreground bg-card shadow-[3px_3px_0_0_var(--foreground)]">
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none">
          {/* steam */}
          <path d="M8 4 Q9 2 8 0" stroke="var(--muted-foreground)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M13 4 Q14 2 13 0" stroke="var(--muted-foreground)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* cup body */}
          <path d="M3 7 L5 26 H21 L23 7 Z" fill="var(--secondary)" stroke="var(--foreground)" strokeWidth="1.5" />
          {/* blue stripe — Greek deli pattern */}
          <path d="M3 11 L23 11" stroke="var(--sky-c)" strokeWidth="2.5" />
          <path d="M3 14 L23 14" stroke="var(--sky-c)" strokeWidth="2.5" />
          {/* lid */}
          <rect x="2" y="5" width="22" height="3" rx="1.5" fill="var(--foreground)" />
          {/* handle suggestion */}
          <path d="M22 14 Q27 14 27 19 Q27 24 22 24" stroke="var(--foreground)" strokeWidth="1.5" fill="none" />
        </svg>
      </span>
    </StickerBase>
  )
}

/** Empire State Building silhouette badge */
export function EmpireSticker({ className = '', rotate = -6 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="flex h-16 w-10 items-center justify-center rounded-md border-2 border-foreground bg-pink shadow-[3px_3px_0_0_var(--foreground)]">
        <svg width="22" height="52" viewBox="0 0 22 52" fill="none">
          <rect x="0" y="44" width="22" height="8" fill="var(--pink-foreground)" />
          <rect x="2" y="36" width="18" height="8" fill="var(--pink-foreground)" />
          <rect x="4" y="28" width="14" height="8" fill="var(--pink-foreground)" />
          <rect x="6" y="20" width="10" height="8" fill="var(--pink-foreground)" />
          <rect x="8" y="12" width="6" height="8" fill="var(--pink-foreground)" />
          <rect x="9" y="4" width="4" height="8" fill="var(--pink-foreground)" />
          <rect x="10" y="0" width="2" height="6" fill="var(--taxi)" />
        </svg>
      </span>
    </StickerBase>
  )
}

/** Star-spangled "STAR" award ribbon */
export function AwardSticker({ className = '', rotate = 6 }) {
  return (
    <StickerBase rotate={rotate} className={className}>
      <span className="relative flex h-14 w-14 items-center justify-center">
        {/* outer burst */}
        <svg width="56" height="56" viewBox="0 0 56 56" className="absolute inset-0">
          <path
            d="M28 2 L32 18 L46 8 L38 22 L54 24 L40 32 L50 46 L34 42 L28 56 L22 42 L6 46 L16 32 L2 24 L18 22 L10 8 L24 18Z"
            fill="var(--taxi)"
            stroke="var(--foreground)"
            strokeWidth="1.5"
          />
        </svg>
        <span className="relative z-10 font-heading text-[10px] font-black uppercase leading-none tracking-tight text-taxi-foreground">FREE</span>
      </span>
    </StickerBase>
  )
}

/** colored push-pin */
export function Pin({
  color = 'neon',
  className = '',
}: {
  color?: 'neon' | 'taxi' | 'pink' | 'sky' | 'lime'
  className?: string
}) {
  const bg = { neon: 'bg-neon', taxi: 'bg-taxi', pink: 'bg-pink', sky: 'bg-sky', lime: 'bg-lime' }[color]
  return (
    <span aria-hidden className={`block h-5 w-5 rounded-full border-2 border-foreground/70 ${bg} shadow-[2px_3px_4px_rgba(0,0,0,0.5)] ${className}`}>
      <span className="block h-1.5 w-1.5 translate-x-1 translate-y-1 rounded-full bg-background/40" />
    </span>
  )
}
