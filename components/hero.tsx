'use client'

import { motion } from 'motion/react'
import { CtaButton } from './cta-button'
import {
  TaxiSticker,
  AppleSticker,
  SubwaySticker,
  BoltSticker,
  StarSticker,
} from './stickers'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pt-32">
      {/* faint skyline grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* floating stickers */}
      <TaxiSticker className="absolute right-6 top-24 z-20 md:right-24 md:top-28" rotate={9} />
      <SubwaySticker className="absolute left-4 top-40 z-20 md:left-20 md:top-52" rotate={-10} />
      <BoltSticker className="absolute right-10 top-1/2 z-20 hidden md:block" rotate={14} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="rounded-full border-2 border-foreground bg-lime px-4 py-1.5 font-heading text-xs uppercase tracking-wide text-lime-foreground">
            English · с нуля
          </span>
          <span className="font-hand text-2xl text-taxi">прямиком из Нью-Йорка вайб</span>
        </motion.div>

        <h1 className="font-heading text-[2.6rem] uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
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
            className="block text-neon"
          >
            сплошная каша?
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
            <span className="relative inline-block text-taxi">
              С нуля.
              <StarSticker className="absolute -right-12 -top-6 hidden md:inline-flex" rotate={-16} />
            </span>
          </motion.span>
        </h1>

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
            <p className="flex items-start gap-2 font-hand text-xl text-foreground/80">
              <AppleSticker rotate={-6} />
              Бесплатно и ни к чему не обязывает. Найдём твой главный затык.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
