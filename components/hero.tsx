'use client'

import { motion } from 'motion/react'
import { CtaButton } from './cta-button'
import { Skyline } from './skyline'
import {
  TaxiSticker,
  SubwaySticker,
  NYSticker,
  FlagSticker,
  LibertySticker,
  HeartNYSticker,
  StarSticker,
} from './stickers'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-0 pt-28 md:px-10 md:pt-32">
      {/* floating stickers — repositioned to avoid mobile overlap */}
      <TaxiSticker className="absolute right-4 top-20 z-20 md:right-24 md:top-28" rotate={9} />
      <NYSticker className="absolute left-4 top-20 z-20 md:left-16 md:top-24" rotate={-12} />
      <FlagSticker className="absolute right-4 top-[4.5rem] z-20 hidden sm:block md:right-20 md:top-20" rotate={7} />
      <HeartNYSticker className="absolute left-4 bottom-44 z-20 hidden md:inline-flex" rotate={-8} />
      <StarSticker className="absolute right-16 top-1/2 z-20 hidden md:inline-flex" rotate={14} />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* small badge row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="rounded-full border-2 border-foreground bg-lime px-4 py-1.5 font-heading text-xs uppercase tracking-wide text-lime-foreground">
            English · с нуля
          </span>
          <span className="font-hand text-2xl text-taxi">вайб большого города</span>
        </motion.div>

        {/* main headline */}
        <h1 className="font-heading text-[2.4rem] uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="block"
          >
            Английский —
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="block"
          >
            <span className="text-neon">сплошная</span>{' '}
            <span
              className="marker-hl text-foreground"
              style={{ '--mark': 'var(--taxi)' } as React.CSSProperties}
            >
              каша?
            </span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 block text-stroke"
          >
            Научу понимать
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="block"
          >
            и говорить.{' '}
            <span className="relative inline-block text-taxi">С нуля.</span>
          </motion.span>
        </h1>

        {/* sub copy + CTA */}
        <div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Даже если сейчас английский для тебя — просто набор непонятных звуков
            и букв. Уберём барьер, научимся узнавать слова в речи и тексте и
            сделаем первые живые шаги.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-start gap-4"
          >
            <CtaButton color="neon">Бесплатный первый урок</CtaButton>
            <p className="font-hand text-xl text-foreground/80">
              Бесплатно и ни к чему не обязывает.
            </p>
          </motion.div>
        </div>
      </div>

      {/* NYC skyline rising from the bottom of hero */}
      <div className="relative mt-12 h-28 sm:h-36 md:h-44">
        <Skyline
          className="absolute bottom-0 left-0 w-full"
          color="var(--foreground)"
          opacity={0.12}
        />
        <Skyline
          className="absolute bottom-0 left-0 w-full"
          color="var(--neon)"
          opacity={0.06}
          flip
        />
      </div>
    </section>
  )
}
