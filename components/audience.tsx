'use client'

import { Check, X } from 'lucide-react'
import { Reveal } from './reveal'

const forYou = [
  'совсем с нуля и английский пока сплошная каша',
  'знаешь чуть-чуть, но речь и тексты всё равно непонятны',
  'хочешь начать понимать фильмы, ютуб и живую речь',
  'мечтаешь путешествовать или уехать, а язык тормозит',
  'устал стыдиться своего уровня и хочешь по-доброму',
  'уже бросал и хочешь наконец по понятному маршруту',
]

const notForYou = [
  'ждёшь «заговоришь за неделю»',
  'ищешь строгого препода с красной ручкой',
  'готовишься к экзамену на C1',
]

export function Audience() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-12 font-heading text-4xl uppercase leading-none tracking-tight md:text-6xl">
            Тебе со мной <span className="text-lime">по пути</span>, если ты…
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
          <Reveal from="left">
            <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2">
              {forYou.map((t, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-2xl border-2 border-foreground bg-card p-5 shadow-[4px_4px_0_0_var(--foreground)]"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime text-lime-foreground">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="font-medium leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal from="right" delay={0.1} rotate={1.5}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border-2 border-foreground bg-card p-6 text-card-foreground shadow-[5px_5px_0_0_var(--foreground)]">
              <h3 className="font-heading text-2xl uppercase tracking-tight">
                Не по пути, если…
              </h3>
              <ul className="grid gap-3">
                {notForYou.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-current">
                      <X className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="font-medium leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto font-hand text-2xl">это не мой профиль, и это ок.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
