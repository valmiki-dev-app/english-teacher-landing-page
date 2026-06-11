'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Reveal } from './reveal'
import { Pin } from './stickers'
import { NYSticker, HeartNYSticker, FlagSticker } from './stickers'
import { Skyline } from './skyline'

const photos = [
  { src: '/india-1.png', caption: 'Первый раз в Индии', pin: 'neon', rotate: -5, top: 'mt-2' },
  { src: '/india-2.png', caption: 'Комьюнити, где всё началось', pin: 'taxi', rotate: 4, top: 'mt-10' },
  { src: '/india-3.png', caption: 'Язык вживую, каждый день', pin: 'lime', rotate: -3, top: 'mt-0' },
] as const

export function About() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
      {/* skyline peek */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 opacity-[0.05]">
        <Skyline className="absolute bottom-0 w-full" color="var(--pink)" opacity={1} />
      </div>

      {/* NYC stickers scattered */}
      <NYSticker className="absolute right-6 top-16 z-10 hidden md:inline-flex" rotate={12} />
      <HeartNYSticker className="absolute left-6 top-20 z-10 hidden md:inline-flex" rotate={-10} />
      <FlagSticker className="absolute right-8 bottom-24 z-10 hidden md:inline-flex" rotate={8} />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          {/* "обо мне" — hand-scrawled heading feel */}
          <p className="mb-2 font-hand text-3xl text-taxi">немного про меня</p>
          <h2 className="mb-12 font-heading text-5xl uppercase leading-none tracking-tight md:text-7xl">
            Кто будет
            <br />
            тебя{' '}
            <span
              className="marker-hl text-pink"
              style={{ '--mark': 'var(--pink-c)' } as React.CSSProperties}
            >
              учить
            </span>
          </h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          {/* story text */}
          <Reveal from="left">
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>
                Я пять лет учил английский в школе плюс дважды в неделю занимался
                с репетитором. И всё это время — одно и то же: учебник,
                грамматика, зубрёжка. Ни говорения, ни аудирования, ни нормального
                чтения. Просто правила, правила, правила.
              </p>
              <p>
                А потом я подростком уехал в Индию. И когда приехал в первый раз —{' '}
                <span className="font-heading uppercase text-foreground">
                  не понимал вообще ничего.
                </span>{' '}
                Из любого диалога выхватывал пару отдельных слов, и всё. Семь лет
                за плечами — а на деле ноль.
              </p>
              <p>
                В Индии я прожил около двух лет, несколькими заездами. Попал в
                комьюнити ребят из Европы и Америки, где английский был живым — на
                нём просто общались каждый день. И вот там язык наконец начал
                складываться: я стал понимать речь и сам заговорил.
              </p>
              <p
                className="relative font-hand text-2xl leading-snug text-foreground md:text-3xl"
              >
                <span
                  className="marker-hl"
                  style={{ '--mark': 'var(--lime-c)' } as React.CSSProperties}
                >
                  Настоящий английский рождается не в учебнике,
                </span>{' '}
                а в разговорах.
                Поэтому я учу так, как сам жалею, что меня не учили.
              </p>
            </div>
          </Reveal>

          {/* India photo board on a string */}
          <div className="relative">
            <p className="mb-6 text-center font-hand text-2xl text-muted-foreground">
              мои фотки из Индии ↓
            </p>
            {/* the string */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-[5.5rem] h-[3px] -rotate-1 rounded-full bg-foreground/70"
            />
            <div className="relative flex flex-wrap items-start justify-center gap-x-3 gap-y-10">
              {photos.map((p, i) => (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: -30, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 9,
                    delay: i * 0.12,
                  }}
                  whileHover={{ rotate: 0, y: -6, scale: 1.03, zIndex: 30 }}
                  className={`relative ${p.top} w-[44%] max-w-[200px] rounded-sm border border-foreground/20 bg-card p-2 pb-8 shadow-[4px_8px_18px_rgba(0,0,0,0.55)] sm:w-[180px]`}
                >
                  <Pin
                    color={p.pin}
                    className="absolute -top-3 left-1/2 z-20 -translate-x-1/2"
                  />
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={p.src || '/placeholder.svg'}
                      alt={p.caption}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  <figcaption className="absolute bottom-2 left-0 right-0 px-2 text-center font-hand text-base leading-tight text-card-foreground">
                    {p.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
            <p className="mt-10 text-center font-hand text-xl text-muted-foreground">
              (свои настоящие фото вставлю сюда чуть позже)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
