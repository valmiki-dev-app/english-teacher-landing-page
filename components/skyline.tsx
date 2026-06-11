'use client'

import { motion } from 'motion/react'

type SkylineProps = {
  className?: string
  color?: string
  flip?: boolean
  opacity?: number
  /** show Statue of Liberty silhouette on the left */
  liberty?: boolean
}

export function Skyline({
  className = '',
  color = 'var(--foreground)',
  flip = false,
  opacity = 1,
  liberty = false,
}: SkylineProps) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 1440 300"
      preserveAspectRatio="none"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined, display: 'block' }}
      fill={color}
    >
      {/* ── Statue of Liberty (far left, water level) ── */}
      {liberty && (
        <g transform="translate(20, 160)">
          {/* pedestal base */}
          <rect x="0" y="90" width="54" height="50" />
          <rect x="6" y="80" width="42" height="12" />
          {/* star-fort base */}
          <rect x="10" y="64" width="34" height="18" />
          {/* robe */}
          <path d="M14 64 L10 32 L27 10 L44 32 L40 64Z" />
          {/* tablet arm left */}
          <rect x="3" y="32" width="12" height="6" transform="rotate(-20,9,35)" />
          {/* torch arm right */}
          <path d="M40 28 L46 10 L50 12 L48 28Z" />
          {/* flame */}
          <path d="M46 10 Q50 4 53 9 Q50 14 46 12Z" />
          {/* head */}
          <ellipse cx="27" cy="10" rx="8" ry="7" />
          {/* crown spikes */}
          <path d="M19 6 L17 -2 L21 4 M27 4 L27 -4 L27 4 M35 6 L37 -2 L33 4" strokeWidth="0" />
          <path d="M19 6 L17 -4 L21 3 L27 3 L27 -5 L27 3 L33 3 L37 -4 L35 6" />
        </g>
      )}

      {/* ── Far-left low blocks ── */}
      <rect x={liberty ? 90 : 0} y="240" width="40" height="60" />
      <rect x={liberty ? 130 : 40} y="210" width="28" height="90" />
      <rect x={liberty ? 158 : 68} y="228" width="44" height="72" />

      {/* water-tank block */}
      <rect x="215" y="175" width="85" height="125" />
      <rect x="233" y="148" width="48" height="28" />
      <ellipse cx="257" cy="148" rx="24" ry="8" />
      <rect x="233" y="133" width="48" height="17" />
      <rect x="254" y="114" width="7" height="21" />

      {/* mid-rise */}
      <rect x="302" y="128" width="68" height="172" />
      <rect x="318" y="114" width="36" height="16" />

      {/* stepped setback skyscraper */}
      <rect x="370" y="182" width="80" height="118" />
      <rect x="384" y="148" width="52" height="34" />
      <rect x="398" y="116" width="24" height="34" />
      <path d="M398 116 L410 90 L422 116Z" />
      <rect x="408" y="74" width="4" height="18" />

      {/* wide slab */}
      <rect x="452" y="152" width="58" height="148" />

      {/* art-deco crown tower */}
      <rect x="512" y="62" width="82" height="238" />
      <path d="M512 62 L553 12 L594 62Z" />
      <rect x="549" y="-2" width="8" height="16" />
      <path d="M512 112 L494 90 L512 96Z" />
      <path d="M594 112 L612 90 L594 96Z" />

      {/* short neighbour */}
      <rect x="594" y="138" width="52" height="162" />

      {/* slim glass tower */}
      <rect x="648" y="80" width="48" height="220" />
      <rect x="664" y="62" width="16" height="20" />

      {/* twin towers reference */}
      <rect x="700" y="42" width="56" height="258" />
      <rect x="700" y="28" width="56" height="16" />
      <rect x="722" y="12" width="12" height="18" />
      <rect x="762" y="42" width="56" height="258" />
      <rect x="762" y="28" width="56" height="16" />
      <rect x="784" y="12" width="12" height="18" />

      {/* mid fills */}
      <rect x="820" y="172" width="44" height="128" />
      <rect x="864" y="148" width="58" height="152" />

      {/* needle tower */}
      <rect x="924" y="32" width="92" height="268" />
      <rect x="957" y="16" width="27" height="18" />
      <rect x="968" y="-6" width="5" height="24" />

      {/* dome block */}
      <rect x="1018" y="158" width="72" height="142" />
      <path d="M1018 158 Q1054 114 1090 158Z" />
      <rect x="1052" y="100" width="4" height="16" />

      {/* right mid-rises */}
      <rect x="1092" y="180" width="50" height="120" />
      <rect x="1142" y="124" width="64" height="176" />
      <rect x="1155" y="108" width="38" height="18" />

      {/* stepped tower right */}
      <rect x="1208" y="162" width="74" height="138" />
      <rect x="1220" y="130" width="50" height="32" />
      <rect x="1234" y="100" width="24" height="30" />
      <path d="M1234 100 L1246 78 L1258 100Z" />

      {/* far-right finisher */}
      <rect x="1284" y="172" width="56" height="128" />
      <rect x="1340" y="192" width="50" height="108" />
      <rect x="1390" y="210" width="50" height="90" />
    </motion.svg>
  )
}
