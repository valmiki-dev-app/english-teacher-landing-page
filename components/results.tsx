'use client'

import { Reveal } from './reveal'
import { StarSticker, NYSticker, BrooklynSticker, CoffeeSticker } from './stickers'
import { Skyline } from './skyline'

const results = [
  'начинаешь понимать слова в речи и тексте, а не слышать кашу',
  'говоришь простыми фразами и не зависаешь от страха',
  'ловишь базовые диалоги и смысл живой речи',
  'чувствуешь, что язык наконец твой, а не стена между тобой и миром',
]

const colors = ['text-neon', 'text-taxi', 'text-pink', 'text-lime']
const marks: (string | null)[] = ['var(--neon)', 'var(--taxi)', null, null]

export function Results() {
  return (
    <section className="relative overflow-hidden border-y-2 border-foreground bg-card px-5 py-20 md:px-10 md:py-28">
      {/* skyline pair — mirrored */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 opacity-[0.06]">
        <Skyline className="absolute bottom-0 w-full" color="var(--foreground)" opacity={1} flip />
      </div>

      <div className="absolute left-24 top-12 z-10 hidden md:block"><StarSticker rotate={-14} /></div>
      <div className="absolute right-24 top-12 z-10 hidden md:block"><NYSticker rotate={10} /></div>
      <div className="absolute left-6 bottom-14 z-10 hidden md:block"><BrooklynSticker rotate={-6} /></div>
      <div className="absolute right-6 bottom-14 z-10 hidden md:block"><CoffeeSticker rotate={9} /></div>

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-2 font-hand text-3xl text-taxi">точка Б</p>
          <h2 className="mb-4 font-heading text-5xl uppercase leading-none tracking-tight md:text-7xl">
            К чему{' '}
            <span
              className="marker-hl"
              style={{ '--mark': 'var(--lime-c)' } as React.CSSProperties}
            >
              придём
            </span>
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
                  {marks[i] ? (
                    <span
                      className="marker-hl"
                      style={{ '--mark': marks[i]! } as React.CSSProperties}
                    >
                      {r}
                    </span>
                  ) : r}
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
