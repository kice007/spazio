import { useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import Reveal from '../components/Reveal'
import { Star } from '../components/Icons'
import { IMG } from '../images'

const EASE = [0.16, 1, 0.3, 1]
const pad = (n) => (n < 10 ? `0${n}` : `${n}`)

const TESTIMONIALS = [
  {
    brand: 'MERIDIA',
    quote: 'Leur souci du détail est remarquable.',
    body: 'Alma a transformé notre maison en un espace chaleureux et intemporel qui nous ressemble. Chaque pièce a été choisie avec soin et le résultat dépasse nos attentes. Je recommande vivement.',
    author: 'Awa Bamba',
    role: 'Propriétaire · Cocody, Abidjan',
    img: IMG.test,
  },
  {
    brand: 'ATELIER NORD',
    quote: 'Une équipe à l’écoute et inspirée.',
    body: 'Nous cherchions à repenser entièrement notre restaurant sans en trahir l’âme. Alma a su marier caractère et fonctionnalité avec une élégance rare. Nos clients ressentent la différence dès qu’ils franchissent la porte.',
    author: 'Koffi N’Guessan',
    role: 'Restaurateur · Plateau, Abidjan',
    img: IMG.projBig,
  },
  {
    brand: 'VILLA ODAYA',
    quote: 'Un résultat au-delà de nos attentes.',
    body: 'De la conception au moindre choix de matière, tout a été mené avec rigueur et sensibilité. L’équipe a compris notre vision mieux que nous-mêmes et l’a portée à un niveau que nous n’imaginions pas.',
    author: 'Fatou Diallo',
    role: 'Architecte · Marcory, Abidjan',
    img: IMG.svc3,
  },
]
const N = TESTIMONIALS.length

function Card({ t }) {
  return (
    <div className="flex shrink-0 flex-col justify-center gap-7 lg:h-[70vh]">
      <p className="font-sans text-[20px] font-bold tracking-wide text-muted2">{t.brand}</p>
      <p className="font-sans text-[30px] font-medium leading-[1.15] text-ink lg:text-[40px]">{t.quote}</p>
      <p className="max-w-[520px] font-sans text-[16px] leading-relaxed text-muted">{t.body}</p>
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-sans text-[17px] font-semibold text-ink">{t.author}</span>
          <span className="font-sans text-[14px] text-muted">{t.role}</span>
        </div>
        <div className="flex gap-1.5 text-ink">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const stripRef = useRef(null)
  const viewRef = useRef(null)
  const [active, setActive] = useState(0)
  const [maxY, setMaxY] = useState(0)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  useLayoutEffect(() => {
    const measure = () => {
      if (stripRef.current && viewRef.current) {
        setMaxY(Math.max(0, stripRef.current.scrollHeight - viewRef.current.clientHeight))
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(N - 1, Math.max(0, Math.round(v * (N - 1)))))
  })

  const colY = useTransform(scrollYProgress, [0, 1], [0, -maxY])
  const growScale = useTransform(scrollYProgress, [0, 0.04], [1.06, 1])

  return (
    <section className="bg-white">
      {/* Header */}
      <div className="mx-auto max-w-[1440px] px-6 pt-24 lg:px-12 lg:pt-32">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <p className="font-mono text-[15px] text-muted">Témoignages</p>
          <h2 className="max-w-[900px] font-serif text-[30px] font-medium uppercase leading-[1.15] text-ink lg:text-[44px]">
            Ce que disent celles et ceux qui ont sublimé leur intérieur avec Alma
          </h2>
        </Reveal>
      </div>

      {/* Desktop: pinned scroll */}
      <div ref={ref} className="relative mt-14 hidden lg:block" style={{ height: `${N * 100}vh` }}>
        <div className="sticky top-0 flex h-screen items-stretch overflow-hidden">
          {/* Left: pinned image (swaps per testimonial) + counter */}
          <motion.div style={{ scale: growScale }} className="relative h-full w-[52%] overflow-hidden">
            <AnimatePresence>
              <motion.img
                key={active}
                src={TESTIMONIALS[active].img}
                alt={TESTIMONIALS[active].brand}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <span className="absolute right-10 top-10 font-serif text-[46px] text-cream drop-shadow-lg">
              {pad(active + 1)}/{pad(N)}
            </span>
          </motion.div>

          {/* Right: scrolling testimonials */}
          <div className="flex h-full w-[48%] flex-col justify-center px-12 lg:px-16">
            <div ref={viewRef} className="relative h-[70vh] overflow-hidden">
              <motion.div ref={stripRef} style={{ y: colY }} className="flex flex-col">
                {TESTIMONIALS.map((t) => (
                  <Card key={t.brand} t={t} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal snap carousel */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-6 px-6 py-14 lg:hidden">
        {TESTIMONIALS.map((t, i) => (
          <div key={t.brand} className="flex w-[85vw] shrink-0 snap-start flex-col gap-6">
            <div className="relative h-[340px] w-full overflow-hidden">
              <img src={t.img} alt={t.brand} className="h-full w-full object-cover" />
              <span className="absolute right-6 top-6 font-serif text-[34px] text-cream drop-shadow-lg">
                {pad(i + 1)}/{pad(N)}
              </span>
            </div>
            <Card t={t} />
          </div>
        ))}
      </div>
    </section>
  )
}
