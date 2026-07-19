import { Menu, ShoppingCart } from './Icons'

// Centered nav cluster (MENU · logo · cart), matching the .pen hero nav.
// MENU + cart use mix-blend-difference so the white stays legible over both dark
// & light sections; the chrome logo image sits un-blended.
export default function Nav({ onOpenMenu }) {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4 lg:justify-center lg:gap-11 lg:px-0">
        <button
          type="button"
          onClick={onOpenMenu}
          className="pointer-events-auto flex items-center gap-2 font-mono text-[13px] tracking-[0.12em] text-white mix-blend-difference hover:opacity-70"
        >
          <Menu size={17} />
          MENU
        </button>

        <a href="#top" className="pointer-events-auto block">
          <img src="/nav-logo.png" alt="SPAZIO" className="h-12 w-auto object-contain" />
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
