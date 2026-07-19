import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

// Fade + rise as the element scrolls into view.
export default function Reveal({ children, className, delay = 0, y = 30, once = true, as }) {
  const Tag = as ? motion[as] : motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}
