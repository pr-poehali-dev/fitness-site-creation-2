import Icon from "@/components/ui/icon";
import { NAV_LINKS, HERO_IMAGE } from "./shared";

interface HeroNavProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  scrollTo: (href: string) => void;
}

export default function HeroNav({ scrolled, menuOpen, setMenuOpen, scrollTo }: HeroNavProps) {
  return (
    <>
      {/* NAV */}
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

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="APEX FITNESS"
            className="w-full h-full object-cover"
            style={{ animation: "subtle-zoom 20s ease-in-out infinite alternate" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/30" />
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8" style={{ animation: "fade-up 0.8s ease 0.2s both" }}>
              <div className="w-12 h-px bg-gold/60" />
              <span className="text-gold/80 text-xs tracking-[0.4em] uppercase font-light">Премиум Фитнес Клуб</span>
            </div>

            <h1
              className="font-cormorant font-light leading-none mb-8"
              style={{ fontSize: "clamp(4rem, 10vw, 8rem)", animation: "fade-up 0.9s ease 0.4s both" }}
            >
              Превзойди
              <br />
              <em className="text-gold not-italic">вершину</em>
              <br />
              себя
            </h1>

            <p
              className="text-white/50 text-sm tracking-widest uppercase font-light max-w-md mb-12 leading-loose"
              style={{ animation: "fade-up 0.9s ease 0.6s both" }}
            >
              Фитнес-клуб для тех, кто ценит результат, комфорт и безупречный сервис
            </p>

            <div className="flex flex-col sm:flex-row gap-4" style={{ animation: "fade-up 0.9s ease 0.8s both" }}>
              <button
                onClick={() => scrollTo("#pricing")}
                className="bg-gold text-obsidian text-xs tracking-[0.3em] uppercase px-10 py-5 font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
              >
                Выбрать план
              </button>
              <button
                onClick={() => scrollTo("#about")}
                className="border border-white/20 text-white/70 text-xs tracking-[0.3em] uppercase px-10 py-5 font-light hover:border-gold/40 hover:text-white transition-all duration-300"
              >
                О клубе
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent" />
          <Icon name="ChevronDown" size={16} className="text-gold/40" />
        </div>
      </section>
    </>
  );
}
