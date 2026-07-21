import { Menu, ShoppingCart } from './Icons'

// Hero nav — matches the .pen: MENU · STORE · CONTACT · cart on desktop,
// MENU · cart on mobile (no logo). MENU + cart + links use mix-blend-difference
// so the white stays legible over both dark & light sections.
export default function Nav({ onOpenMenu }) {
  const item =
    'pointer-events-auto font-mono text-[13px] tracking-[0.12em] text-white mix-blend-difference hover:opacity-70'

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex items-center justify-between px-6 py-6 lg:w-[480px] lg:px-0 lg:py-11">
        <button type="button" onClick={onOpenMenu} className={`flex items-center gap-2 ${item}`}>
          <Menu size={17} />
          MENU
        </button>

        <a href="#services" className={`hidden lg:block ${item}`}>
          STORE
        </a>
        <a href="#footer" className={`hidden lg:block ${item}`}>
          CONTACT
        </a>

        <button
          type="button"
          className="pointer-events-auto relative text-white mix-blend-difference hover:opacity-70"
          aria-label="Panier"
        >
          <ShoppingCart size={18} />
          <span className="absolute -right-2 -top-1.5 flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-white px-[3px] text-[8px] font-bold text-black">
            1
          </span>
        </button>
      </div>
    </header>
  )
}
