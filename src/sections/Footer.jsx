import Marquee from '../components/Marquee'

const COLS = [
  ['Liens', ['Acceuil', 'A propos', 'Nous contacter', 'Boutique']],
  ['Others', ['Blog', 'Blog details', 'Privacy policy', 'Terms & conditions']],
  ['Social', ['Facebook', 'Linkedin', 'Instagram', 'Twitter']],
]

const SOCIAL = ['Facebook', 'Linkedin', 'Instagram', 'Twitter']

export default function Footer() {
  return (
    <footer id="footer" className="overflow-hidden bg-white pt-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="lg:w-[380px]">
            <p className="font-serif text-[40px] font-medium text-ink">SPAZIO</p>
            <p className="mt-6 max-w-[352px] font-sans text-[15px] leading-relaxed text-muted">
              Spazio est un studio d'architecture et de design d'intérieur offrant une gamme complète
              de services, spécialisé dans la création d'espaces résidentiels et commerciaux
              chaleureux et intemporels.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:flex lg:gap-16">
            {COLS.map(([h, links]) => (
              <div key={h} className="flex flex-col gap-4">
                <p className="font-sans text-[17px] font-semibold text-ink">{h}</p>
                <div className="flex flex-col gap-3">
                  {links.map((l) => (
                    <a key={l} href="#" className="font-sans text-[15px] text-muted hover:text-ink">
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 pb-10 lg:flex-row lg:items-center">
          <p className="font-sans text-[15px] text-muted">©2026 Spazio — All rights reserved.</p>
          <div className="flex gap-4 font-sans text-[14px] text-ink">
            {SOCIAL.map((s) => (
              <a key={s} href="#" className="hover:text-accent">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite marquee wordmark */}
      <Marquee duration={45} className="select-none border-t border-line py-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-8 font-serif text-[120px] font-medium leading-none text-ink lg:text-[200px]">
              SPAZIO
            </span>
            <span className="font-serif text-[70px] leading-none text-ink lg:text-[110px]">✦</span>
          </span>
        ))}
      </Marquee>
    </footer>
  )
}
