import { motion } from 'framer-motion'

// Seamless, infinite right-to-left scroll. The content is duplicated and the row
// is translated by exactly one copy width (-50%), looping forever — slow & classy.
export default function Marquee({ children, duration = 42, className = '' }) {
  return (
    <div className={`flex w-full overflow-hidden ${className}`}>
      <motion.div
        className="flex shrink-0 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
