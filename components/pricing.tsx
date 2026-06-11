'use client'

import { Reveal } from './reveal'
import { CtaButton } from './cta-button'
import { AwardSticker, EmpireSticker, PretzelSticker } from './stickers'
import { Skyline } from './skyline'

export function Pricing() {
  return (
    <section id="price" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
      {/* subtle skyline */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 opacity-[0.05]">
        <Skyline className="absolute bottom-0 w-full" color="var(--taxi)" opacity={1} />
      </div>

      {/* decorative stickers — desktop only */}
      <div className="absolute left-6 top-10 z-10 hidden md:block"><EmpireSticker rotate={-8} /></div>
      <div className="absolute right-8 top-12 z-10 hidden md:block"><PretzelSticker rotate={14} /></div>

      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-2 font-hand text-3xl text-taxi">без сюрпризов</p>
          <h2 className="mb-12 font-heading text-5xl uppercase leading-none tracking-tight md:text-7xl">
            Стоимость
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Free first lesson */}
          <Reveal delay={0.05} rotate={-1}>
            <div className="relative flex h-full flex-col gap-5 rounded-3xl border-2 border-foreground bg-card p-7 shadow-[6px_6px_0_0_var(--foreground)] md:p-9">
              {/* starburst "FREE" badge */}
              <AwardSticker className="absolute -right-3 -top-4 z-10" rotate={10} />

              <p className="font-hand text-2xl text-taxi">первый урок</p>
              <div>
                <p className="font-heading text-7xl uppercase leading-none tracking-tight md:text-8xl">
                  FREE
                </p>
                <p className="mt-1 font-hand text-xl text-muted-foreground">бесплатно</p>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Знакомимся, смотрим твой уровень и намечаем маршрут. Никакого давления — просто разговор.
              </p>

              <div className="mt-auto">
                <CtaButton color="taxi">Записаться</CtaButton>
              </div>
            </div>
          </Reveal>

          {/* Regular price */}
          <Reveal delay={0.12} rotate={1}>
            <div className="relative flex h-full flex-col gap-5 rounded-3xl border-2 border-foreground bg-card p-7 shadow-[6px_6px_0_0_var(--foreground)] md:p-9">
              <p className="font-hand text-2xl text-taxi">каждый урок</p>

              <div>
                {/* crossed-out old price */}
                <div className="flex items-baseline gap-3">
                  <span
                    className="relative font-heading text-3xl uppercase leading-none text-muted-foreground"
                    aria-label="скоро будет 2500 рублей"
                  >
                    <span
                      className="marker-hl"
                      style={{ '--mark': 'var(--neon)' } as React.CSSProperties}
                    >
                      2 500 ₽
                    </span>
                  </span>
                  <span className="font-hand text-xl text-muted-foreground">скоро</span>
                </div>

                {/* current price */}
                <p className="mt-2 font-heading text-7xl uppercase leading-none tracking-tight text-foreground md:text-8xl">
                  1 000
                  <span className="text-4xl md:text-5xl"> ₽</span>
                </p>
                <p className="mt-1 font-hand text-xl text-lime">сейчас</p>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Цена временная — специально для первых учеников. Когда мест не останется, стоимость вырастет.
              </p>

              <ul className="mt-auto grid gap-2 text-base">
                {[
                  'урок 50–60 минут',
                  'онлайн, гибкий график',
                  'домашка без скуки',
                  'поддержка между уроками',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-medium">
                    <span className="font-heading text-taxi">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-hand text-2xl text-muted-foreground md:text-3xl">
            Первый урок бесплатный — потеряешь только сорок минут.{' '}
            <span className="text-foreground">Или найдёшь кое-что важное.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
