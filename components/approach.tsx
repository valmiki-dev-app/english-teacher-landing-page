'use client'

import { Brain, MessageCircle, Puzzle, Heart } from 'lucide-react'
import { Reveal } from './reveal'
import { Skyline } from './skyline'
import { SubwaySticker, BoltSticker } from './stickers'

const steps = [
  {
    icon: Brain,
    title: 'Учимся понимать с нуля',
    text: 'Узнавать слова в тексте и на слух, чтобы каша начала превращаться в смысл.',
    color: 'bg-sky text-sky-foreground',
  },
  {
    icon: MessageCircle,
    title: 'Говорим с первого урока',
    text: 'Простыми фразами, без зубрёжки бесконечных правил.',
    color: 'bg-taxi text-taxi-foreground',
  },
  {
    icon: Puzzle,
    title: 'Грамматика по ходу',
    text: 'Ровно столько, чтобы тебя понимали. Не больше.',
    color: 'bg-pink text-pink-foreground',
  },
  {
    icon: Heart,
    title: 'Без оценок и стыда',
    text: 'Ошибаться можно и нужно — на них всё и держится.',
    color: 'bg-lime text-lime-foreground',
  },
]

export function Approach() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
      {/* NYC atmosphere */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 opacity-[0.05]">
        <Skyline className="absolute bottom-0 w-full" color="var(--neon)" opacity={1} />
      </div>
      <div className="absolute right-6 top-16 z-10 hidden md:block"><SubwaySticker rotate={8} /></div>
      <div className="absolute left-8 bottom-20 z-10 hidden md:block"><BoltSticker rotate={-10} /></div>


      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 font-hand text-3xl text-taxi">как мы это сделаем</p>
          <h2 className="mb-12 font-heading text-5xl uppercase leading-none tracking-tight md:text-7xl">
            Как мы это{' '}
            <span
              className="marker-hl text-neon"
              style={{ '--mark': 'var(--neon)' } as React.CSSProperties}
            >
              исправим
            </span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={i} delay={i * 0.08} rotate={i % 2 ? 1 : -1}>
                <div
                  className={`flex h-full flex-col gap-4 rounded-3xl p-7 shadow-[6px_6px_0_0_var(--foreground)] md:p-9 ${s.color}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border-2 border-current">
                      <Icon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <span className="font-heading text-5xl opacity-30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl uppercase leading-tight tracking-tight md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="text-lg font-medium leading-snug">{s.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-3xl text-balance text-center text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Моя цель — не сделать из тебя отличника, а чтобы английский перестал
            быть стеной и ты{' '}
            <span className="font-heading uppercase text-foreground">
              начал понимать и говорить.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
