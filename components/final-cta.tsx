'use client'

import { CtaButton } from './cta-button'
import { Reveal } from './reveal'
import { AppleSticker, BoltSticker, StarSticker } from './stickers'

export function FinalCta() {
  return (
    <section
      id="zapis"
      className="relative overflow-hidden bg-neon px-5 py-24 text-neon-foreground md:px-10 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(var(--neon-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--neon-foreground) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <AppleSticker className="absolute left-8 top-12 md:left-28" rotate={-10} />
      <BoltSticker className="absolute right-10 top-20 md:right-32" rotate={12} />
      <StarSticker className="absolute bottom-16 left-1/4 hidden md:inline-flex" rotate={-18} />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-hand text-3xl md:text-4xl">ну что, погнали?</p>
          <h2 className="mt-3 font-heading text-5xl uppercase leading-[0.9] tracking-tight md:text-8xl">
            Готов наконец
            <br />
            сдвинуться?
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed md:text-xl">
            Первый урок бесплатный и ни к чему не обязывает. По-худшему —
            потратишь сорок минут и поймёшь, что всё решаемо. По-лучшему —
            начнёшь наконец понимать английский и говорить.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CtaButton color="taxi">Записаться на бесплатный урок</CtaButton>
            <p className="font-hand text-2xl">
              Жми и напиши пару слов о себе. Дальше разберёмся.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
