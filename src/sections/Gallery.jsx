import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IMG } from '../images'

const u = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

// Desktop scatter (1440-wide canvas).
const ITEMS = [
  { src: IMG.gal1, left: '3%', w: 300, h: 240, top: 0 },
  { src: IMG.gal2, left: '74%', w: 320, h: 260, top: 460 },
  { src: IMG.gal3, left: '19%', w: 270, h: 340, top: 920 },
  { src: IMG.gal4, left: '84%', w: 250, h: 210, top: 1380 },
  { src: IMG.gal5, left: '7%', w: 320, h: 260, top: 1840 },
  { src: IMG.projThumb1, left: '66%', w: 290, h: 370, top: 2300 },
  { src: IMG.svc3, left: '25%', w: 300, h: 250, top: 2760 },
  { src: IMG.test, left: '78%', w: 300, h: 260, top: 3220 },
  { src: u('1616486338812-3dadae4b4ace'), left: '2%', w: 260, h: 320, top: 3680 },
  { src: u('1600607687939-ce8a6c25118c'), left: '70%', w: 300, h: 300, top: 4140 },
  { src: u('1567016432779-094069958ea5'), left: '16%', w: 320, h: 240, top: 4600 },
  { src: u('1586023492125-27b2c045efd7'), left: '82%', w: 280, h: 320, top: 5060 },
  { src: IMG.projThumb2, left: '24%', w: 300, h: 360, top: 5520 },
  { src: IMG.svc5, left: '64%', w: 290, h: 250, top: 5980 },
  { src: IMG.svc1, left: '6%', w: 280, h: 300, top: 6440 },
  { src: IMG.projBig, left: '72%', w: 320, h: 280, top: 6900 },
]
const STRIP_H = Math.max(...ITEMS.map((it) => it.top + it.h)) + 160

// Mobile scatter (≈390-wide canvas): smaller, random-ish left/size, widely spaced tops.
const MITEMS = [
  { src: IMG.gal1, left: '5%', w: 150, h: 155, top: 0 },
  { src: IMG.gal2, left: '52%', w: 170, h: 140, top: 210 },
  { src: IMG.gal3, left: '20%', w: 140, h: 185, top: 420 },
  { src: IMG.gal4, left: '58%', w: 150, h: 130, top: 620 },
  { src: IMG.gal5, left: '8%', w: 160, h: 145, top: 820 },
  { src: IMG.projThumb1, left: '50%', w: 150, h: 195, top: 1020 },
  { src: IMG.svc3, left: '22%', w: 150, h: 135, top: 1240 },
  { src: IMG.test, left: '55%', w: 155, h: 150, top: 1430 },
  { src: u('1616486338812-3dadae4b4ace'), left: '9%', w: 150, h: 175, top: 1630 },
  { src: u('1600607687939-ce8a6c25118c'), left: '54%', w: 160, h: 150, top: 1840 },
]
const MSTRIP_H = Math.max(...MITEMS.map((it) => it.top + it.h)) + 120

export default function Gallery() {
  const ref = useRef(null)
  const mref = useRef(null)
  const [vh, setVh] = useState(900)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const { scrollYProgress: mScroll } = useScroll({ target: mref, offset: ['start start', 'end end'] })

  useLayoutEffect(() => {
    const measure = () => setVh(window.innerHeight)
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const groupY = useTransform(scrollYProgress, [0, 1], [vh, -STRIP_H])
  const titleScale = useTransform(scrollYProgress, [0, 0.55, 1], [1, 0.9, 0.55])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0.92, 0.6])

  const mGroupY = useTransform(mScroll, [0, 1], [vh, -MSTRIP_H])
  const mTitleScale = useTransform(mScroll, [0, 0.6, 1], [1, 0.92, 0.62])
  const mTitleOpacity = useTransform(mScroll, [0, 0.9, 1], [1, 0.9, 0.55])

  return (
    <>
      {/* Desktop: pinned */}
      <section className="hidden bg-white lg:block">
        <div ref={ref} className="relative" style={{ height: '600vh' }}>
          <div className="sticky top-0 h-screen overflow-hidden">
            <div className="absolute inset-0 z-30">
              <div className="relative mx-auto h-full max-w-[1440px]">
                <motion.div style={{ y: groupY }} className="absolute inset-x-0 top-0 will-change-transform">
                  {ITEMS.map((it, i) => (
                    <div key={i} style={{ left: it.left, top: it.top, width: it.w, height: it.h }} className="absolute overflow-hidden">
                      <img src={it.src} alt="" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
              <motion.h2
                style={{ scale: titleScale, opacity: titleOpacity }}
                className="font-serif text-[clamp(90px,15vw,240px)] font-medium tracking-tight text-ink will-change-transform"
              >
                GALERIE
              </motion.h2>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: pinned — full screen, images defile over the title, then unpins */}
      <section className="bg-white lg:hidden">
        <div ref={mref} className="relative" style={{ height: '380vh' }}>
          <div className="sticky top-0 h-[100svh] overflow-hidden">
            {/* Scattered images rising over the title */}
            <div className="absolute inset-0 z-30">
              <div className="relative mx-auto h-full w-full max-w-[440px]">
                <motion.div style={{ y: mGroupY }} className="absolute inset-x-0 top-0 will-change-transform">
                  {MITEMS.map((it, i) => (
                    <div key={i} style={{ left: it.left, top: it.top, width: it.w, height: it.h }} className="absolute overflow-hidden">
                      <img src={it.src} alt="" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
            {/* Title centered, behind the images */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
              <motion.h2
                style={{ scale: mTitleScale, opacity: mTitleOpacity }}
                className="font-serif text-[clamp(56px,17vw,92px)] font-medium tracking-tight text-ink will-change-transform"
              >
                GALERIE
              </motion.h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
