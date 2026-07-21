import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { ArrowDown, ArrowUp } from '../components/Icons'

const FAQS = [
  [
    'Que propose Alma Concept Store ?',
    "Une sélection de mobilier, décoration, luminaires et objets uniques, ainsi qu'un accompagnement pour composer et harmoniser votre intérieur.",
  ],
  [
    'Comment se passe une visite en boutique ?',
    'Nous vous accueillons en showroom pour découvrir nos collections, échanger sur votre projet et vous conseiller les pièces qui subliment votre espace.',
  ],
  [
    'Proposez-vous la livraison et l’installation ?',
    'Oui, nous livrons et installons vos pièces à Abidjan pour un intérieur prêt à vivre, dans les meilleurs délais.',
  ],
  [
    'Puis-je associer vos pièces à ma décoration existante ?',
    'Absolument. Nous aimons associer nos pièces à votre décoration existante pour créer un ensemble cohérent et intemporel.',
  ],
  [
    'Quelle est votre gamme de prix ?',
    'Nous proposons une gamme mid-to-premium. Chaque pièce est présentée avec un prix clair, sans surprise.',
  ],
]

const EASE = [0.16, 1, 0.3, 1]

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="font-mono text-[14px] text-muted2">FAQ</p>
          <h2 className="font-serif text-[32px] font-medium uppercase tracking-wide text-cream lg:text-[48px]">
            Foire aux questions
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-[1040px]">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <div key={q} className="border-b border-linedark">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-sans text-[18px] font-medium text-cream lg:text-[20px]">{q}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#582a2f] text-cream">
                    {isOpen ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[720px] pb-6 font-sans text-[15px] leading-relaxed text-muted2">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
