export default function OpeningAnnouncement() {
  return (
    <div className="relative w-full bg-obsidian border-b border-gold/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-px bg-gold/50 hidden sm:block" />
          <span className="text-gold/70 text-[9px] tracking-[0.4em] uppercase font-light">
            13 июня 2026
          </span>
          <div className="w-4 h-px bg-gold/50 hidden sm:block" />
        </div>
        <p className="text-white/80 text-[11px] sm:text-xs tracking-[0.15em] font-light uppercase">
          Торжественное открытие клуба —{" "}
          <span className="text-gold font-normal">приглашаем на презентацию и фуршет</span>
        </p>
        <div className="w-px h-4 bg-gold/20 hidden sm:block" />
        <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-light">
          Вход свободный
        </span>
      </div>
    </div>
  );
}
