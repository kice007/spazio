import { useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import SectionHead from '../components/SectionHead'
import { IMG } from '../images'

const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

// Warm-interior pool (placeholder imagery — swap for real project photos anytime).
const POOL = [
  IMG.projBig,
  IMG.projThumb1,
  IMG.projThumb2,
  IMG.test,
  IMG.svc1,
  IMG.svc3,
  IMG.svc5,
  IMG.gal5,
  u('1600607687939-ce8a6c25118c'),
  u('1616486338812-3dadae4b4ace'),
  u('1567016432779-094069958ea5'),
  u('1586023492125-27b2c045efd7'),
]
const L = POOL.length

const NAMES = ['SEREN VILLA', 'ATRIUM HOUSE', 'NOYA LOFT', 'MAISON KORO', 'LUMEN PENTHOUSE', 'BAOBAB RETREAT']

const PROJECTS = NAMES.map((name, i) => ({
  name,
  big: POOL[(i * 2) % L],
  thumbs: [1, 3, 5, 7].map((k) => POOL[(i * 2 + k) % L]),
}))
const ALL_THUMBS = PROJECTS.flatMap((p) => p.thumbs)
const N = PROJECTS.length
const pad = (n) => (n < 10 ? `0${n}` : `${n}`)
const EASE = [0.16, 1, 0.3, 1]

export default function Projects() {
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
    setActive(Math.min(N - 1, Math.max(0, Math.floor(v * N))))
  })

  const colY = useTransform(scrollYProgress, [0, 1], [0, -maxY])
  const growScale = useTransform(scrollYProgress, [0, 0.04], [1.06, 1])

  return (
    <section id="projects" className="bg-black">
      {/* Header */}
      <div className="mx-auto max-w-[1440px] px-6 pt-24 lg:px-12 lg:pt-32">
        <SectionHead
          dark
          eyebrow="Nos inspirations"
          heading="NOS MISES EN SCÈNE RÉVÈLENT LA DIVERSITÉ DE NOTRE SÉLECTION"
          width="lg:max-w-[760px]"
        />
      </div>

      {/* Desktop: pinned gallery */}
      <div ref={ref} className="relative mt-14 hidden lg:block" style={{ height: `${N * 100}vh` }}>
        <div className="sticky top-0 flex h-screen items-stretch overflow-hidden">
          {/* Left: pinned image (grows on pin, swaps per project) + counter */}
          <motion.div style={{ scale: growScale }} className="relative h-full w-[52%] overflow-hidden">
            <AnimatePresence>
              <motion.img
                key={active}
                src={PROJECTS[active].big}
                alt={PROJECTS[active].name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <span className="absolute bottom-12 left-12 font-serif text-[46px] text-cream drop-shadow-lg">
              {pad(active + 1)}/{pad(N)}
            </span>
          </motion.div>

          {/* Right: project name + scrolling thumbnails */}
          <div className="flex h-full w-[48%] flex-col px-10 pb-10 pt-24">
            <div className="mb-10 h-[70px] shrink-0 text-center">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={active}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -22 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="font-serif text-[48px] font-medium tracking-wide text-cream"
                >
                  {PROJECTS[active].name}
                </motion.h3>
              </AnimatePresence>
            </div>

            <div ref={viewRef} className="relative flex-1 overflow-hidden">
              <motion.div ref={stripRef} style={{ y: colY }} className="flex flex-col items-center gap-6">
                {ALL_THUMBS.map((t, i) => (
                  <div key={i} className="h-[240px] w-[300px] shrink-0 overflow-hidden">
                    <img src={t} alt="" className="h-full w-full object-cover" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: horizontal snap carousel */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-6 px-6 py-14 lg:hidden">
        {PROJECTS.map((p, i) => (
          <div key={p.name} className="flex w-[82vw] shrink-0 snap-start flex-col gap-4">
            <div className="relative h-[380px] w-full overflow-hidden">
              <img src={p.big} alt={p.name} className="h-full w-full object-cover" />
              <span className="absolute bottom-5 left-5 font-serif text-[34px] text-cream drop-shadow-lg">
                {pad(i + 1)}/{pad(N)}
              </span>
            </div>
            <h3 className="font-serif text-[32px] font-medium text-cream">{p.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
