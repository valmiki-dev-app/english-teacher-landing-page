'use client'

import { Reveal } from './reveal'
import { StarSticker } from './stickers'

const results = [
  'начинаешь понимать слова в речи и тексте, а не слышать кашу',
  'говоришь простыми фразами и не зависаешь от страха',
  'ловишь базовые диалоги и смысл живой речи',
  'чувствуешь, что язык наконец твой, а не стена между тобой и миром',
]

const colors = ['text-neon', 'text-taxi', 'text-pink', 'text-lime']

export function Results() {
  return (
    <section className="relative overflow-hidden border-y-2 border-foreground bg-card px-5 py-20 md:px-10 md:py-28">
      <StarSticker className="absolute left-8 top-12 md:left-24" rotate={-14} />
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-2 font-hand text-3xl text-taxi">точка Б</p>
          <h2 className="mb-4 font-heading text-5xl uppercase leading-none tracking-tight md:text-7xl">
            К чему придём
          </h2>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Не к идеальному английскому за месяц. А к первым живым шагам, после
            которых всё меняется:
          </p>
        </Reveal>

        <div className="space-y-2">
          {results.map((r, i) => (
            <Reveal key={i} from="left" delay={i * 0.08}>
              <div className="group flex items-baseline gap-5 border-b-2 border-border py-5">
                <span className={`font-heading text-3xl md:text-5xl ${colors[i]}`}>
                  →
                </span>
                <p className="text-pretty text-xl font-medium leading-snug transition-transform group-hover:translate-x-2 md:text-3xl">
                  {r}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-balance text-center font-hand text-2xl text-foreground md:text-3xl">
            Английский перестаёт пугать — а ты начинаешь чувствовать себя частью
            большого мира.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
