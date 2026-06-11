'use client'

import { Reveal } from './reveal'
import { BoltSticker } from './stickers'

export function WhySection() {
  return (
    <section className="relative overflow-hidden border-y-2 border-foreground bg-sky px-5 py-20 text-sky-foreground md:px-10 md:py-28">
      <BoltSticker className="absolute right-8 top-10 md:right-24" rotate={-12} />
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
        <Reveal from="left">
          <h2 className="font-heading text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
            Дело не в твоих
            <span className="mt-2 block rounded-xl bg-sky-foreground px-3 py-1 text-sky">
              способностях
            </span>
          </h2>
        </Reveal>
        <Reveal from="right" delay={0.1}>
          <div className="space-y-5 text-lg leading-relaxed md:text-xl">
            <p>
              Нас годами учили грамматике и тестам, а не тому, чтобы реально
              понимать язык и им пользоваться. Готовили сдать контрольную, а не
              разобрать живую речь. Вот английский и остался чужим набором
              правил, который не складывается ни в смысл, ни в слова.
            </p>
            <p className="font-hand text-2xl md:text-3xl">
              И когда начинаешь не зубрить, а сразу понимать и говорить вживую —
              язык наконец перестаёт быть шифром. Обычно это происходит куда
              быстрее, чем ты ждёшь.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
