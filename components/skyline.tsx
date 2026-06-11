'use client'

import { motion } from 'motion/react'

/**
 * Iconic big-city skyline silhouette (art-deco tower, twin towers profile,
 * needle antenna, suspension cables, water tanks). Reveals by rising up on scroll.
 * Purely decorative -> aria-hidden.
 */

type SkylineProps = {
  className?: string
  color?: string
  flip?: boolean
  opacity?: number
}

export function Skyline({
  className = '',
  color = 'var(--foreground)',
  flip = false,
  opacity = 1,
}: SkylineProps) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 1200 260"
      preserveAspectRatio="none"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined, display: 'block' }}
      fill={color}
    >
      {/* far-left low blocks */}
      <rect x="0" y="200" width="35" height="60" />
      <rect x="35" y="175" width="25" height="85" />
      <rect x="60" y="195" width="40" height="65" />

      {/* water-tank block */}
      <rect x="100" y="150" width="80" height="110" />
      <rect x="120" y="124" width="40" height="28" />
      {/* water tank cylinder */}
      <ellipse cx="140" cy="124" rx="20" ry="7" />
      <rect x="120" y="112" width="40" height="15" />
      <rect x="137" y="96" width="6" height="18" />

      {/* mid-rise block */}
      <rect x="180" y="110" width="65" height="150" />
      <rect x="195" y="98" width="35" height="14" />

      {/* stepped setback skyscraper */}
      <rect x="245" y="160" width="75" height="100" />
      <rect x="258" y="128" width="50" height="32" />
      <rect x="270" y="100" width="26" height="30" />
      <path d="M270 100 L283 76 L296 100Z" />
      <rect x="281" y="62" width="4" height="16" />

      {/* wide slab tower */}
      <rect x="320" y="130" width="55" height="130" />

      {/* art-deco crown tower — hero of the left side */}
      <rect x="378" y="55" width="78" height="205" />
      <path d="M378 55 L417 8 L456 55Z" />
      <rect x="413" y="-4" width="8" height="14" />
      {/* art-deco wings */}
      <path d="M378 100 L362 80 L378 85Z" />
      <path d="M456 100 L472 80 L456 85Z" />

      {/* short neighbour */}
      <rect x="456" y="120" width="50" height="140" />

      {/* slim glass tower */}
      <rect x="506" y="70" width="45" height="190" />
      <rect x="521" y="54" width="15" height="18" />

      {/* pair of identical towers (Twin reference) */}
      <rect x="555" y="40" width="52" height="220" />
      <rect x="555" y="28" width="52" height="14" />
      <rect x="575" y="14" width="12" height="16" />
      <rect x="613" y="40" width="52" height="220" />
      <rect x="613" y="28" width="52" height="14" />
      <rect x="633" y="14" width="12" height="16" />

      {/* gap + short buildings */}
      <rect x="665" y="150" width="40" height="110" />
      <rect x="705" y="130" width="55" height="130" />

      {/* needle antenna skyscraper */}
      <rect x="760" y="30" width="88" height="230" />
      <rect x="791" y="16" width="26" height="16" />
      <rect x="802" y="-10" width="4" height="28" />

      {/* low block with dome */}
      <rect x="848" y="140" width="70" height="120" />
      <path d="M848 140 Q883 100 918 140Z" />
      <rect x="881" y="88" width="4" height="14" />

      {/* right side mid-rises */}
      <rect x="918" y="160" width="48" height="100" />
      <rect x="966" y="110" width="60" height="150" />
      <rect x="978" y="96" width="35" height="16" />

      {/* stepped tower right */}
      <rect x="1026" y="145" width="70" height="115" />
      <rect x="1038" y="115" width="46" height="30" />
      <rect x="1050" y="88" width="22" height="28" />
      <path d="M1050 88 L1061 68 L1072 88Z" />

      {/* far-right finisher blocks */}
      <rect x="1096" y="155" width="52" height="105" />
      <rect x="1148" y="175" width="52" height="85" />
    </motion.svg>
  )
}
