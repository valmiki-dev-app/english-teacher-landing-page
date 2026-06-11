'use client'

import { Reveal } from './reveal'
import { Skyline } from './skyline'
import { LibertySticker, SubwaySticker } from './stickers'

export function WhySection() {
  return (
    <section className="relative overflow-hidden border-y-2 border-foreground px-5 py-20 md:px-10 md:py-28">
      {/* skyline silhouette as atmosphere */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 opacity-[0.06]">
        <Skyline className="absolute bottom-0 w-full" color="var(--lime)" opacity={1} liberty />
      </div>

      {/* stickers — desktop only */}
      <div className="absolute right-20 top-12 z-10 hidden md:block"><LibertySticker rotate={6} /></div>
      <div className="absolute left-20 bottom-8 z-10 hidden md:block"><SubwaySticker rotate={-8} /></div>

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
        <Reveal from="left">
          <h2 className="font-heading text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
            Дело не в твоих{' '}
            <span
              className="marker-hl"
              style={{ '--mark': 'var(--taxi)' } as React.CSSProperties}
            >
              способностях
            </span>
          </h2>
        </Reveal>
        <Reveal from="right" delay={0.1}>
          <div className="space-y-5 text-lg leading-relaxed md:text-xl">
            <p className="text-muted-foreground">
              Нас годами учили грамматике и тестам, а не тому, чтобы реально
              понимать язык и им пользоваться. Готовили сдать контрольную, а не
              разобрать живую речь. Вот английский и остался чужим набором
              правил, который не складывается ни в смысл, ни в слова.
            </p>
            <p className="font-hand text-2xl text-foreground md:text-3xl">
              И когда начинаешь не зубрить, а сразу понимать и говорить вживую —
              язык наконец перестаёт быть шифром.{' '}
              <span className="text-neon">Обычно это происходит куда быстрее, чем ты ждёшь.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
