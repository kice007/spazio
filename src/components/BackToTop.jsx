import { useState } from 'react'
import { motion, AnimatePresence, animate, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUp } from './Icons'

const EASE = [0.16, 1, 0.3, 1]

// Appears once the page is scrolled past the navbar / hero, then glides the whole
// window back to the top with a soft cinematic easing.
export default function BackToTop() {
  const [show, setShow] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => {
    setShow(v > (typeof window !== 'undefined' ? window.innerHeight * 0.7 : 500))
  })

  const toTop = () => {
    animate(window.scrollY, 0, {
      duration: 1.2,
      ease: EASE,
      onUpdate: (val) => window.scrollTo(0, val),
    })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Retour en haut"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.5, ease: EASE }}
          whileHover={{ y: -4 }}
          className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-cream shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-colors hover:bg-black lg:bottom-8 lg:right-8 lg:h-16 lg:w-16"
        >
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowUp size={22} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
