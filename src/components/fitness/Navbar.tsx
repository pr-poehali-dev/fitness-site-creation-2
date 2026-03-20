import Icon from "@/components/ui/icon";
import { NAV_LINKS } from "./data";

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (href: string) => void;
}

export default function Navbar({ scrolled, menuOpen, setMenuOpen, scrollTo }: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-obsidian/95 backdrop-blur-md border-b border-white/5" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <div className="font-cormorant text-2xl font-bold tracking-widest">
          <span className="text-white">SISNEM</span>
          <span className="text-gold ml-2 text-sm font-montserrat font-light tracking-[0.3em] uppercase">FITNESS</span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-gold transition-colors duration-300 font-light"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("#contacts")}
          className="hidden lg:block border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300 font-medium"
        >
          Вступить
        </button>

        <button className="lg:hidden text-white/70 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-obsidian/98 backdrop-blur-xl border-t border-white/5 px-6 py-8 space-y-6">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-sm tracking-[0.2em] uppercase text-white/60 hover:text-gold transition-colors font-light py-1"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contacts")}
            className="block w-full border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase px-6 py-4 hover:bg-gold hover:text-obsidian transition-all duration-300 font-medium mt-4"
          >
            Вступить в клуб
          </button>
        </div>
      )}
    </nav>
  );
}