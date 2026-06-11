'use client'

import { Reveal } from './reveal'

const pains = [
  {
    text: 'Смотришь на английский текст — а это будто набор рандомных слов, смысл которых не уловить',
    color: 'bg-neon text-neon-foreground',
    rotate: -2,
    span: 'md:col-span-7',
  },
  {
    text: 'Слушаешь речь — сплошной поток звуков, даже слова друг от друга не отделить',
    color: 'bg-card text-card-foreground border-2 border-foreground',
    rotate: 2,
    span: 'md:col-span-5',
  },
  {
    text: 'Сто раз садился учить — а через неделю в голове ноль',
    color: 'bg-taxi text-taxi-foreground',
    rotate: 1.5,
    span: 'md:col-span-5',
  },
  {
    text: 'Знаешь некоторые слова, но связать их в фразу нереально',
    color: 'bg-sky text-sky-foreground',
    rotate: -2,
    span: 'md:col-span-7',
  },
  {
    text: 'После школы такое чувство, будто этих лет вообще не было',
    color: 'bg-pink text-pink-foreground',
    rotate: -1.5,
    span: 'md:col-span-6',
  },
  {
    text: 'Где-то внутри уже решил, что английский просто не твоё',
    color: 'bg-lime text-lime-foreground',
    rotate: 2,
    span: 'md:col-span-6',
  },
]

export function Pain() {
  return (
    <section className="relative px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end gap-4">
            <h2 className="font-heading text-5xl uppercase leading-none tracking-tight md:text-7xl">
              Узнаёшь
              <br />
              <span className="text-stroke-neon">себя?</span>
            </h2>
            <span className="mb-2 font-hand text-3xl text-taxi">честно, без осуждения →</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {pains.map((p, i) => (
            <Reveal
              key={i}
              from="up"
              delay={i * 0.04}
              rotate={0}
              className={p.span}
            >
              <div
                className={`flex h-full items-start gap-4 rounded-2xl p-5 shadow-[5px_5px_0_0_var(--foreground)] md:p-7 ${p.color}`}
              >
                <span className="font-heading text-3xl leading-none opacity-60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-pretty text-lg font-medium leading-snug md:text-xl">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-balance text-center text-xl text-muted-foreground md:text-2xl">
            Если кивнул хоть пару раз —{' '}
            <span className="font-heading uppercase text-foreground">ты по адресу.</span>{' '}
            Таких, как ты, половина из тех, кто «учил английский в школе».
          </p>
        </Reveal>
      </div>
    </section>
  )
}
