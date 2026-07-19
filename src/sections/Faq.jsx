import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { ArrowDown, ArrowUp } from '../components/Icons'

const FAQS = [
  [
    'Quels services Spazio propose-t-il ?',
    "Nous proposons des solutions complètes d'architecture et de design d'intérieur, incluant l'aménagement de l'espace, l'élaboration du concept, la sélection des matériaux, la gestion de projet et l'installation.",
  ],
  [
    'Comment fonctionne le processus de conception ?',
    "Notre processus, structuré mais flexible, va de la découverte et la consultation à la conception et au développement, jusqu'à l'exécution et la livraison finale.",
  ],
  [
    'Combien de temps dure un projet type ?',
    "Les délais dépendent de l'ampleur du projet — la plupart des projets résidentiels s'étendent de quelques semaines à plusieurs mois, définis ensemble lors de la consultation.",
  ],
  [
    'Pouvez-vous travailler avec mes meubles ou ma décoration existants ?',
    'Absolument. Nous aimons associer vos pièces existantes à de nouveaux éléments pour créer un ensemble cohérent et intemporel.',
  ],
  [
    'Quelle est votre structure tarifaire ?',
    'Nos tarifs sont adaptés à chaque projet. Après une première consultation, nous fournissons une proposition claire et détaillée, sans surprises.',
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
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#26221d] text-cream">
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
