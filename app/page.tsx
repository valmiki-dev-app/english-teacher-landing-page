import { NavBar } from '@/components/nav-bar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Pain } from '@/components/pain'
import { WhySection } from '@/components/why-section'
import { Approach } from '@/components/approach'
import { FreeLesson } from '@/components/free-lesson'
import { About } from '@/components/about'
import { Audience } from '@/components/audience'
import { Results } from '@/components/results'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main id="top" className="grain relative overflow-x-hidden">
      <NavBar />
      <Hero />

      <div className="border-y-2 border-foreground bg-taxi py-3 text-taxi-foreground">
        <Marquee
          items={[
            'понимать',
            'говорить',
            'с нуля',
            'без зубрёжки',
            'без стыда',
            'первый урок бесплатно',
          ]}
        />
      </div>

      <Pain />
      <WhySection />
      <Approach />
      <FreeLesson />

      <div className="border-y-2 border-foreground bg-pink py-3 text-pink-foreground">
        <Marquee
          reverse
          items={[
            'new york state of mind',
            'каша → смысл',
            'поток звуков → слова',
            'стена → дверь',
          ]}
        />
      </div>

      <section id="about">
        <About />
      </section>
      <Audience />
      <Results />
      <section id="faq">
        <Faq />
      </section>
      <FinalCta />
      <Footer />
    </main>
  )
}
