import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../components/Reveal'
import { CornerDownRight } from '../components/Icons'
import { IMG } from '../images'

export default function Cta() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative h-[720px] w-full overflow-hidden bg-black lg:h-[820px]">
      <motion.div style={{ y: bgY }} className="absolute inset-[-9%] will-change-transform">
        <img src={IMG.cta} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-[#3a1c1f]/30" />

      <div className="relative flex h-full items-center justify-center px-6">
        <Reveal className="w-full max-w-[700px]">
          <div className="flex flex-col items-center gap-6 bg-[#262222]/85 px-8 py-14 text-center backdrop-blur-md lg:px-16">
            <h2 className="max-w-[590px] font-serif text-[32px] font-medium uppercase leading-[1.1] text-cream lg:text-[48px]">
              Donnons vie à votre intérieur avec caractère
            </h2>
            <p className="max-w-[560px] font-sans text-[16px] leading-relaxed text-cream/80">
              Chez Alma, nous réunissons les plus belles pièces pour composer des intérieurs qui
              racontent des histoires et éveillent les émotions.
            </p>
            <a
              href="#footer"
              className="mt-2 flex items-center gap-2.5 bg-white px-6 py-3.5 font-mono text-[13px] tracking-[0.15em] text-ink hover:bg-cream"
            >
              <CornerDownRight size={16} /> VISITEZ LA BOUTIQUE
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
