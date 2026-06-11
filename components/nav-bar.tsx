'use client'

import { motion } from 'motion/react'
import { CtaButton } from './cta-button'

export function NavBar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-6 md:pt-4"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border-2 border-foreground bg-background/80 px-4 py-2.5 backdrop-blur-md md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-foreground bg-taxi font-heading text-lg text-taxi-foreground">
            EN
          </span>
          <span className="whitespace-nowrap font-marker text-lg tracking-tight md:text-xl">
            понятный английский
          </span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Обо мне
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Вопросы
          </a>
        </div>
        <CtaButton color="neon" className="!px-4 !py-2 !text-sm !shadow-[3px_3px_0_0_var(--foreground)] hover:!shadow-[4px_4px_0_0_var(--foreground)]">
          Записаться
        </CtaButton>
      </nav>
    </motion.header>
  )
}
