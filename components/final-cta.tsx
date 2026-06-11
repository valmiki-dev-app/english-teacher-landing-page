'use client'

import { CtaButton } from './cta-button'
import { Reveal } from './reveal'
import { Skyline } from './skyline'
import { LibertySticker, BoltSticker, FlagSticker } from './stickers'

export function FinalCta() {
  return (
    <section
      id="zapis"
      className="relative overflow-hidden bg-neon px-5 py-24 text-neon-foreground md:px-10 md:py-32"
    >
      {/* skyline silhouette at bottom */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0">
        <Skyline className="w-full" color="var(--neon-foreground)" opacity={0.08} liberty />
      </div>

      <div className="absolute left-6 top-10 z-10 hidden md:block md:left-24"><LibertySticker rotate={-8} /></div>
      <div className="absolute right-8 top-16 z-10 hidden md:block md:right-28"><BoltSticker rotate={12} /></div>
      <div className="absolute bottom-20 right-6 z-10 hidden md:block"><FlagSticker rotate={-6} /></div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-hand text-3xl md:text-4xl">ну что, погнали?</p>
          <h2 className="mt-3 font-heading text-5xl uppercase leading-[0.9] tracking-tight md:text-8xl">
            Готов наконец{' '}
            <span
              className="marker-hl"
              style={{ '--mark': 'var(--taxi)' } as React.CSSProperties}
            >
              сдвинуться?
            </span>
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
