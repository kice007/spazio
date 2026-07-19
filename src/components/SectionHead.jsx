import Reveal from './Reveal'

// Eyebrow (mono, left) + big serif heading (right) — the recurring section header.
export default function SectionHead({ eyebrow, heading, dark = false, width = 'lg:max-w-[860px]' }) {
  return (
    <Reveal className="flex flex-col gap-5 lg:flex-row lg:gap-10">
      <p className={`font-mono text-[15px] lg:w-[260px] lg:shrink-0 ${dark ? 'text-muted2' : 'text-muted'}`}>
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-[28px] font-medium uppercase leading-[1.15] lg:text-[40px] ${width} ${
          dark ? 'text-cream' : 'text-ink'
        }`}
      >
        {heading}
      </h2>
    </Reveal>
  )
}
