import { Fragment } from 'react'
import Reveal from '../components/Reveal'

const STATS = [
  ['250+', 'Projets completés'],
  ['12+', "Années d'experience"],
  ['98%', 'Satisfaction client'],
]

export default function Intro() {
  return (
    <section className="bg-black py-20 lg:py-[150px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-[30px] lg:px-12">
        <Reveal>
          <h2 className="max-w-[870px] text-center font-sans text-[26px] font-light leading-[1.2] text-cream lg:text-[44px]">
            Spazio est un studio d'architecture et de design d'intérieur proposant une gamme complète
            de services, qui crée des espaces chaleureux, intemporels et sophistiqués.
          </h2>
        </Reveal>

        {/* Mobile: space-between full width (M2). Desktop: centered cluster with gaps. */}
        <Reveal
          delay={0.1}
          className="mt-11 flex w-full items-center justify-between lg:mt-16 lg:w-auto lg:justify-center lg:gap-11"
        >
          {STATS.map(([n, l], i) => (
            <Fragment key={l}>
              {i > 0 && <span className="h-14 w-px shrink-0 bg-linedark lg:h-16" />}
              <div className="flex w-24 shrink-0 flex-col items-center gap-1.5 lg:w-[180px] lg:gap-2">
                <span className="font-serif text-[40px] font-medium text-cream lg:text-[58px]">{n}</span>
                <span className="w-full text-center font-sans text-[12px] leading-[1.35] text-muted2 lg:max-w-[150px] lg:text-[15px]">
                  {l}
                </span>
              </div>
            </Fragment>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
