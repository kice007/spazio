import { motion, AnimatePresence } from 'framer-motion'
import { X } from './Icons'
import { IMG } from '../images'

const EASE = [0.16, 1, 0.3, 1]
const LINKS = ['ACCEUIL', 'A PROPOS', 'SERVICES', 'PROJETS', 'BLOG', 'BOUTIQUE', 'CONTACT']
const MENU_IMAGES = [IMG.menu1, IMG.menu2, IMG.menu3, IMG.menu4]
const CONTACT = [
  ['Email', ['hello@spazio.ci', 'support@spazio.ci']],
  ['Phone', ['+225 27 22 00 00', '+225 07 00 00 00']],
  ['Location', ['Cocody, Rue des Jardins', 'Abidjan, Côte d’Ivoire']],
  ['Schedule', ['Mon – Fri: 9:00 – 18:00', 'Sat: 10:00 – 15:00', 'Sun: Closed']],
]

export default function MenuOverlay({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_150px] gap-6 px-6 py-8 lg:grid-cols-[1fr_320px_280px] lg:gap-12 lg:px-16 lg:py-14">
            {/* Left: close + nav links */}
            <div>
              <button
                onClick={onClose}
                className="mb-12 flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-[13px] tracking-[0.15em] text-ink hover:border-ink lg:mb-16"
              >
                <X size={14} /> CLOSE
              </button>
              <nav className="flex flex-col gap-1">
                {LINKS.map((l, i) => (
                  <motion.a
                    key={l}
                    href="#top"
                    onClick={onClose}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.55, ease: EASE }}
                    className="font-serif text-[clamp(28px,7.5vw,50px)] font-medium leading-[1.12] text-ink transition-colors hover:text-accent"
                  >
                    {l}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Center: infinite bottom → top image scroll (visible on mobile too) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
              className="relative h-[calc(100svh-5rem)] overflow-hidden lg:h-[calc(100vh-7rem)]"
            >
              <motion.div
                className="flex flex-col"
                animate={{ y: ['0%', '-50%'] }}
                transition={{ duration: 26, ease: 'linear', repeat: Infinity }}
              >
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex flex-col" aria-hidden={copy === 1}>
                    {MENU_IMAGES.map((s, i) => (
                      <div
                        key={i}
                        className="mb-3 h-[130px] w-full shrink-0 overflow-hidden rounded-xl lg:mb-[18px] lg:h-[240px] lg:rounded-none"
                      >
                        <img src={s} alt="" className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
              className="col-span-2 mt-6 flex flex-col gap-7 lg:col-span-1 lg:mt-0"
            >
              <p className="font-serif text-[38px] text-ink">SPAZIO</p>
              {CONTACT.map(([label, vals]) => (
                <div key={label} className="flex gap-5">
                  <span className="w-[68px] shrink-0 pt-0.5 font-mono text-[13px] text-muted">{label}</span>
                  <div className="flex flex-col gap-1">
                    {vals.map((v) => (
                      <span key={v} className="font-sans text-[15px] text-ink">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-4 flex gap-4 font-sans text-[14px] text-ink">
                {['Facebook', 'Linkedin', 'Instagram', 'Twitter'].map((s) => (
                  <a key={s} href="#" className="hover:text-accent">
                    {s}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
