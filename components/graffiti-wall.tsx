'use client'

import { motion } from 'motion/react'

/**
 * Decorative background marker-scrawl words — look like someone wrote them
 * on the wall. Pure atmosphere, aria-hidden.
 */

type ScrawlWord = {
  text: string
  top: string
  left?: string
  right?: string
  rotate: number
  size: string
  color: string
  opacity: number
}

const words: ScrawlWord[] = [
  { text: 'FREE', top: '8%', left: '2%', rotate: -14, size: 'text-[4rem] sm:text-[6rem]', color: 'text-taxi', opacity: 0.07 },
  { text: 'not your fault', top: '28%', right: '1%', rotate: 8, size: 'text-[2rem] sm:text-[3.5rem]', color: 'text-lime', opacity: 0.06 },
  { text: 'keep going', top: '52%', left: '0%', rotate: -6, size: 'text-[2.5rem] sm:text-[4rem]', color: 'text-pink', opacity: 0.06 },
  { text: 'you got this', top: '74%', right: '0%', rotate: 11, size: 'text-[2rem] sm:text-[3rem]', color: 'text-neon', opacity: 0.05 },
  { text: 'speak up', top: '88%', left: '3%', rotate: -9, size: 'text-[2.5rem] sm:text-[3.5rem]', color: 'text-sky', opacity: 0.06 },
]

export function GraffitiWall() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: w.opacity }}
          transition={{ duration: 1.4, delay: i * 0.3 }}
          className={`absolute font-hand font-bold leading-none select-none whitespace-nowrap ${w.size} ${w.color}`}
          style={{
            top: w.top,
            left: w.left,
            right: w.right,
            transform: `rotate(${w.rotate}deg)`,
          }}
        >
          {w.text}
        </motion.span>
      ))}
    </div>
  )
}
