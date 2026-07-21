import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHead from '../components/SectionHead'
import Reveal from '../components/Reveal'
import { ArrowRight } from '../components/Icons'
import { IMG } from '../images'

const SERVICES = [
  { num: 'Collection 01', lines: ['MOBILIER', '& DESIGN'], screenFirst: true, img: IMG.svc1, tl: '25.4%', tt: 68, il: '36.8%', it: 20, iw: '44.6%', ih: 480, bh: 508 },
  { num: 'Collection 02', lines: ['DÉCORATION', 'MURALE'], img: IMG.svc2, tl: '42.9%', tt: 96, il: '53.9%', it: 21, iw: '39.8%', ih: 430, bh: 461 },
  { num: 'Collection 03', lines: ['OBJETS', "D'EXCEPTION"], img: IMG.svc3, tl: '14.9%', tt: 50, il: '22.4%', it: 13, iw: '39.4%', ih: 400, bh: 426 },
  { num: 'Collection 04', lines: ['LUMINAIRES', '& LUMIÈRE'], img: IMG.svc4, tl: '36.5%', tt: 43, il: '46%', it: 24, iw: '33.5%', ih: 340, bh: 396 },
  { num: 'Collection 05', lines: ['ART DE LA TABLE'], img: IMG.svc5, tl: '16.4%', tt: 98, il: '29.7%', it: 0, iw: '33.7%', ih: 420, bh: 447 },
]

function Title({ num, lines, screenFirst }) {
  return (
    <>
      <p className="mb-2 font-mono text-[15px] font-semibold text-ink">{num}</p>
      <div className="font-serif font-medium leading-[0.98] text-ink">
        {lines.map((l, i) => (
          <div key={i} className={i === 0 && screenFirst ? 'mix-blend-screen' : ''}>
            {l}
          </div>
        ))}
      </div>
    </>
  )
}

function ServiceDesktop({ s }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Parallax — image and overlaid text drift at different rates for depth.
  const imgY = useTransform(scrollYProgress, [0, 1], [140, -140])
  const txtY = useTransform(scrollYProgress, [0, 1], [55, -55])
  return (
    <div ref={ref} className="relative w-full" style={{ height: s.bh }}>
      <motion.div
        style={{ y: imgY, left: s.il, top: s.it, width: s.iw, height: s.ih }}
        className="group absolute overflow-hidden will-change-transform"
      >
        <img
          src={s.img}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover reveal button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <a
            href="#services"
            className="flex translate-y-2 items-center gap-2 bg-white px-6 py-3 font-mono text-[12px] tracking-[0.15em] text-ink transition-transform duration-500 group-hover:translate-y-0 hover:bg-cream"
          >
            VOIR LE SERVICE
            <ArrowRight size={14} />
          </a>
        </div>
      </motion.div>
      <motion.div
        style={{ y: txtY, left: s.tl, top: s.tt }}
        className="pointer-events-none absolute text-[clamp(34px,3.6vw,50px)]"
      >
        <Title num={s.num} lines={s.lines} screenFirst={s.screenFirst} />
      </motion.div>
    </div>
  )
}

// Mobile card — hover on pointer devices, tap to reveal on touch devices.
function MobileService({ s }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal className="flex flex-col gap-5 text-[42px]">
      <Title num={s.num} lines={s.lines} />
      <div
        onClick={() => setOpen((v) => !v)}
        className="group relative h-[280px] w-full cursor-pointer overflow-hidden"
      >
        <img
          src={s.img}
          alt=""
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            open ? 'scale-105' : ''
          }`}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/25 transition-opacity duration-500 group-hover:opacity-100 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="#services"
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center gap-2 bg-white px-6 py-3 font-mono text-[12px] tracking-[0.15em] text-ink transition-transform duration-500 group-hover:translate-y-0 hover:bg-cream ${
              open ? 'translate-y-0' : 'translate-y-2'
            }`}
          >
            VOIR LE SERVICE
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function Services() {
  return (
    <section id="services" className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHead
          eyebrow="Nos collections"
          heading="DU MOBILIER AUX OBJETS D'EXCEPTION, NOUS COMPOSONS VOTRE ART DE VIVRE"
        />

        {/* Desktop: staggered parallax */}
        <div className="mt-14 hidden flex-col gap-6 lg:flex">
          {SERVICES.map((s) => (
            <ServiceDesktop key={s.num} s={s} />
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="mt-12 flex flex-col gap-16 lg:hidden">
          {SERVICES.map((s) => (
            <MobileService key={s.num} s={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
