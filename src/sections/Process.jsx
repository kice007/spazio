import { motion } from 'framer-motion'
import SectionHead from '../components/SectionHead'

const STEPS = [
  ['01', 'Découverte & consultation', 'Nous découvrons votre espace, vos besoins et votre vision grâce à une consultation ciblée.'],
  ['02', 'Concept & visualisation', "Nous explorons les mises en page, l'ambiance et le style pour définir l'orientation globale."],
  ['03', 'Conception & développement', 'Nous peaufinons les détails, les matériaux et les finitions pour élaborer un plan de conception complet.'],
  ['04', 'Exécution & livraison', "Nous coordonnons la réalisation afin que l'espace final soit fidèle à l'intention de conception."],
]

const EASE = [0.16, 1, 0.3, 1]

export default function Process() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHead
          dark
          eyebrow="Notre processus"
          heading="NOTRE PROCESSUS, A LA FOIS STRUCTURE ET FLEXIBLE, GARANTIT LA REUSSITE DE CHAQUE PROJET"
          width="lg:max-w-[894px]"
        />

        {/* Desktop: 4-column card */}
        <div className="mt-16 hidden rounded-sm bg-[#151310] p-14 lg:grid lg:grid-cols-4 lg:gap-11">
          {STEPS.map(([n, t, d], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="flex flex-col gap-5"
            >
              <span className="font-mono text-[28px] text-cream">{n}</span>
              <h3 className="font-sans text-[22px] font-medium leading-tight text-cream">{t}</h3>
              <p className="font-sans text-[14px] leading-relaxed text-muted2">{d}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: cards that stack over one another on scroll */}
        <div className="mt-12 lg:hidden">
          {STEPS.map(([n, t, d], i) => (
            <div key={n} style={{ zIndex: i }} className="sticky top-[88px] pb-6">
              <div className="flex min-h-[300px] flex-col gap-5 rounded-xl bg-[#151310] p-8 shadow-[0_-12px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
                <span className="font-mono text-[30px] text-cream">{n}</span>
                <h3 className="font-sans text-[24px] font-medium leading-tight text-cream">{t}</h3>
                <p className="font-sans text-[15px] leading-relaxed text-muted2">{d}</p>
              </div>
            </div>
          ))}
          {/* Spacer so the last card holds on screen at the end of the scroll */}
          <div className="h-[25vh]" />
        </div>
      </div>
    </section>
  )
}
