'use client'

import { Check } from 'lucide-react'
import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

const points = [
  'Познакомимся и немного поболтаем, без напряга',
  'Посмотрим твой реальный уровень — без тестов на сто вопросов',
  'Найдём главный затык, который тормозит сильнее всего',
  'Наметим понятный маршрут: с чего начать',
]

export function FreeLesson() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-neon bg-card p-7 text-card-foreground shadow-[8px_8px_0_0_var(--neon)] md:p-12">
            <span className="absolute -right-4 -top-4 select-none font-heading text-[7rem] leading-none text-foreground/5 md:text-[10rem]">
              FREE
            </span>

            <p className="font-hand text-3xl text-taxi">это не экзамен →</p>
            <h2 className="mt-2 font-heading text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
              Что будет на
              <br />
              бесплатном уроке
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed md:text-xl">
              Это не экзамен и не впаривание. Разговор минут на сорок, после
              которого ты увидишь, что всё реально сдвигается.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((p, i) => (
                <Reveal key={i} delay={i * 0.07} from="up">
                  <li className="flex items-start gap-3 rounded-xl border-2 border-border bg-secondary p-4">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-current">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="font-medium leading-snug">{p}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-9 flex flex-col items-start gap-4">
              <CtaButton color="taxi">Записаться на урок</CtaButton>
              <p className="font-hand text-2xl">
                Бесплатно, без обязательств. Не подойдём друг другу — честно скажу.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
