import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { IMG } from '../images'

const POSTS = [
  [IMG.blog1, 'Studio', 'Créer des intérieurs intemporels qui ne se démodent jamais.'],
  [IMG.blog2, 'Home Decor', "Comment le design d'intérieur moderne concilie forme et fonction"],
  [IMG.blog3, 'Modern Design', 'Transformer des espaces du quotidien en lieux porteurs de sens'],
  [IMG.blog4, 'Studio Vibes', 'Le pouvoir des matériaux et des textures dans une maison'],
]

export default function Blog() {
  return (
    <section id="blog" className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHead
          dark
          eyebrow="Notre blog"
          heading="EXPLOREZ LES IDÉES ET LES TENDANCES QUI INSPIRENT NOS COLLECTIONS"
          width="lg:max-w-[848px]"
        />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {POSTS.map(([img, cat, title], i) => (
            <Reveal
              key={title}
              delay={i * 0.08}
              className={`group flex cursor-pointer flex-col gap-5 ${i % 2 === 1 ? 'lg:mt-[140px]' : ''}`}
            >
              <div className="h-[270px] w-full overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 font-sans text-[13px]">
                <span className="text-cream">{cat}</span>
                <span className="text-muted">|</span>
                <span className="text-muted2">Oct 3, 2025</span>
              </div>
              <h3 className="font-sans text-[20px] font-medium leading-snug text-cream transition-colors group-hover:text-accent">
                {title}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
