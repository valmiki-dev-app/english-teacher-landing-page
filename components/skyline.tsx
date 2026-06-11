'use client'

import { motion } from 'motion/react'

/**
 * Decorative city skyline silhouette. Recognizable big-city profile
 * (spired art-deco tower, antenna tower, water tanks, bridge cables)
 * without naming any place. Reveals by rising up + drawing in on scroll.
 * Purely decorative -> aria-hidden.
 */

type SkylineProps = {
  className?: string
  /** color of the silhouette fill, any css color/var */
  color?: string
  flip?: boolean
  /** opacity of the whole skyline */
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
      viewBox="0 0 1200 240"
      preserveAspectRatio="none"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined, display: 'block' }}
      fill={color}
    >
      {/* base ground line buildings, left to right */}
      <path d="M0 240 V150 H40 V120 H70 V150 H110 V100 H150 V150 H180 V240 Z" />
      {/* water-tank topped block */}
      <g>
        <rect x="180" y="130" width="90" height="110" />
        <rect x="205" y="104" width="40" height="30" />
        <path d="M205 104 L225 88 L245 104 Z" />
        <rect x="223" y="74" width="4" height="16" />
      </g>
      {/* mid rises */}
      <rect x="270" y="90" width="70" height="150" />
      <rect x="340" y="120" width="50" height="120" />
      {/* art-deco spired tower (hero of the skyline) */}
      <g>
        <rect x="395" y="70" width="80" height="170" />
        <path d="M395 70 L435 18 L475 70 Z" />
        <path d="M430 18 L435 -2 L440 18 Z" />
        <rect x="433" y="-14" width="4" height="14" />
      </g>
      <rect x="475" y="110" width="55" height="130" />
      <rect x="530" y="140" width="40" height="100" />
      {/* tall flat-top tower with antenna */}
      <g>
        <rect x="580" y="40" width="95" height="200" />
        <rect x="615" y="22" width="25" height="18" />
        <rect x="625" y="-6" width="4" height="28" />
      </g>
      <rect x="675" y="120" width="45" height="120" />
      {/* stepped setback skyscraper */}
      <g>
        <rect x="730" y="150" width="80" height="90" />
        <rect x="745" y="110" width="50" height="40" />
        <rect x="757" y="78" width="26" height="32" />
        <path d="M757 78 L770 56 L783 78 Z" />
      </g>
      <rect x="810" y="130" width="55" height="110" />
      <rect x="865" y="100" width="65" height="140" />
      {/* twin-ish slim towers */}
      <rect x="935" y="60" width="40" height="180" />
      <rect x="980" y="60" width="40" height="180" />
      <rect x="1020" y="150" width="45" height="90" />
      {/* domed building */}
      <g>
        <rect x="1065" y="120" width="70" height="120" />
        <path d="M1065 120 Q1100 80 1135 120 Z" />
        <rect x="1098" y="64" width="4" height="20" />
      </g>
      <rect x="1135" y="160" width="65" height="80" />
    </motion.svg>
  )
}
