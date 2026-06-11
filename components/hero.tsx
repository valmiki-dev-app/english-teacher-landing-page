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
  CoffeeSticker,
} from './stickers'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-0 pt-28 md:px-10 md:pt-32">
      {/* stickers — desktop only, wrapper prevents Framer Motion display override */}
      <div className="absolute right-24 top-32 z-10 hidden md:block"><TaxiSticker rotate={9} /></div>
      <div className="absolute left-16 top-28 z-10 hidden md:block"><NYSticker rotate={-12} /></div>
      <div className="absolute right-24 top-24 z-10 hidden md:block"><FlagSticker rotate={7} /></div>
      <div className="absolute left-8 bottom-52 z-10 hidden md:block"><HeartNYSticker rotate={-8} /></div>
      <div className="absolute right-10 bottom-40 z-10 hidden md:block"><CoffeeSticker rotate={14} /></div>

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

      {/* NYC skyline with Liberty rising from the bottom of hero */}
      <div className="relative mt-12 h-28 sm:h-36 md:h-44">
        <Skyline
          className="absolute bottom-0 left-0 w-full"
          color="var(--foreground)"
          opacity={0.13}
          liberty
        />
        <Skyline
          className="absolute bottom-0 left-0 w-full"
          color="var(--taxi)"
          opacity={0.05}
          flip
        />
      </div>
    </section>
  )
}
