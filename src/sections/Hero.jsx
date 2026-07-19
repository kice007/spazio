import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IMG } from '../images'
import { ArrowDown } from '../components/Icons'

const EASE = [0.16, 1, 0.3, 1]

const BODY =
  'Chez Spazio, nous concevons des intérieurs qui transcendent la simple décoration : des espaces qui racontent des histoires, façonnent des émotions et redéfinissent la manière dont les gens vivent, travaillent et tissent des liens.'

// Mobile: faithful reproduction of the "M1 Hero" mobile frame (390 × 810).
// The content lives in a 390-wide reference block (centered on wider phones), so
// every coordinate below matches the design 1:1.
function MobileHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0px', '-70px'])
  const wmY = useTransform(scrollYProgress, [0, 1], ['0px', '-120px'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-black lg:hidden">
      {/* Full-bleed parallax background + tint (#0C0B0A73 ≈ black/45) */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 will-change-transform">
        <img src={IMG.hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* Wordmark on its own layer (sibling to the bg, no isolating ancestor) so
          mix-blend-color-dodge blends against the background image. */}
      <motion.div style={{ y: wmY, opacity: fade }} className="absolute inset-0">
        <div className="relative mx-auto h-full w-full max-w-[390px]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
            className="absolute left-[44px] top-[150px] font-serif text-[80px] font-medium leading-none tracking-[-1px] text-cream mix-blend-color-dodge"
          >
            SPAZIO
          </motion.h1>
        </div>
      </motion.div>

      {/* 390-wide design canvas (body, inset, scroller) — rises & fades on scroll */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative mx-auto h-full w-full max-w-[390px]"
      >
        {/* Body — x30 y300, width 330, 15px */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
          className="absolute left-[30px] top-[300px] w-[330px] font-sans text-[15px] leading-[1.5] text-cream"
        >
          {BODY}
        </motion.p>

        {/* Inset — centered, y452, 238 × 210 */}
        <div className="absolute left-1/2 top-[452px] -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.55 }}
            className="h-[210px] w-[238px] overflow-hidden"
          >
            <img src={IMG.heroInset} alt="" className="h-full w-full object-cover" />
          </motion.div>
        </div>

        {/* Scroll cue — centered, y700 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[14px] text-cream"
        >
          scroller
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
            <ArrowDown size={16} />
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Desktop: pinned parallax wordmark + falling inset.
function DesktopHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14])
  const wmY = useTransform(scrollYProgress, [0, 1], ['0px', '-150px'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative hidden h-screen min-h-[720px] w-full overflow-hidden bg-black lg:block">
      {/* Parallax background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 will-change-transform">
        <img src={IMG.hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* Giant wordmark */}
      <motion.div style={{ y: wmY, opacity: fade }} className="absolute inset-0 flex items-start justify-center pt-[18vh]">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
          className="font-serif text-[clamp(88px,15vw,210px)] font-medium leading-none tracking-[-0.01em] text-cream mix-blend-color-dodge"
        >
          SPAZIO
        </motion.h1>
      </motion.div>

      {/* Body line */}
      <motion.p
        style={{ opacity: fade }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.5 }}
        className="absolute bottom-28 left-[10%] max-w-[430px] font-sans text-[19px] leading-relaxed text-cream/95"
      >
        {BODY}
      </motion.p>

      {/* Floating inset */}
      <motion.div
        style={{ opacity: fade }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.6 }}
        className="absolute bottom-0 left-1/2 h-[300px] w-[340px] -translate-x-1/2 overflow-hidden"
      >
        <img src={IMG.heroInset} alt="" className="h-full w-full object-cover" />
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-20 right-[25%] flex items-center gap-2 font-mono text-[14px] text-cream"
      >
        scroller
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  )
}

export default function Hero() {
  return (
    <div id="top">
      <MobileHero />
      <DesktopHero />
    </div>
  )
}
