'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { Reveal } from './reveal'

const faq = [
  {
    q: 'Я вообще ноль, ничего не понимаю. Не стыдно будет?',
    a: 'Нет. Почти все приходят именно так — с нуля или с кашей после школы. Начнём с самого начала, без подколов.',
  },
  {
    q: 'Уже бросал. Вдруг снова?',
    a: 'Бросают, когда нет системы. Тут с первого урока есть маршрут, по которому виден прогресс — а когда видишь движение, бросать не тянет.',
  },
  {
    q: 'Боюсь говорить с ошибками.',
    a: 'Проходит быстрее, чем кажется. Оценок нет, ошибаться можно сколько угодно. Через пару уроков сам удивишься, что рот открывается.',
  },
  {
    q: 'На слух вообще не понимаю, сплошной поток звуков.',
    a: 'Это и есть один из главных навыков, за который берёмся прицельно. Поток звуков начинает распадаться на слова постепенно — и это один из самых кайфовых моментов.',
  },
  {
    q: 'Времени мало.',
    a: 'Идём без воды, лишнего не грузим. Подстроимся под твой график.',
  },
  {
    q: 'Дорого?',
    a: 'Первый урок бесплатный. Цену обсудим потом, без давления.',
  },
  {
    q: 'Может, сначала сам базу подтяну?',
    a: 'На этом и застревают на годы. Базу как раз и собираем вместе с первых уроков, а не ждём непонятно чего.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-2 font-hand text-3xl text-taxi">снимаем страхи</p>
          <h2 className="mb-12 font-heading text-5xl uppercase leading-none tracking-tight md:text-7xl">
            Частые <span className="text-sky">вопросы</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border-2 border-foreground transition-colors ${
                    isOpen ? 'bg-taxi text-taxi-foreground' : 'bg-card'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-lg uppercase leading-tight tracking-tight md:text-xl">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-current"
                    >
                      <Plus className="h-5 w-5" strokeWidth={2.5} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p className="px-5 pb-6 text-lg leading-relaxed md:px-6">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
