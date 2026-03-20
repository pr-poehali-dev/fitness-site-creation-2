import Icon from "@/components/ui/icon";
import { RevealSection, TRAININGS } from "./shared";

export default function AboutTrainingTrainers() {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="py-32 px-6 lg:px-12 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <RevealSection>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-gold/70 text-xs tracking-[0.4em] uppercase font-light">О клубе</span>
              </div>
              <h2 className="font-cormorant text-5xl lg:text-6xl font-light leading-tight mb-8">
                Философия
                <br />
                <em className="text-gold">превосходства</em>
              </h2>
              <p className="text-white/50 leading-relaxed text-sm mb-6 font-light">
                SISTEM FITNESS — это не просто спортивный зал. Это пространство, где высокие стандарты встречаются с индивидуальным подходом. Мы создаём среду, в которой каждый участник раскрывает свой максимальный потенциал.
              </p>
              <p className="text-white/40 leading-relaxed text-sm mb-10 font-light">
                Наша философия основана на трёх принципах: научный подход к тренировкам, персональное внимание к каждому члену клуба и атмосфера, вдохновляющая на результат.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "Shield", label: "Сертифицированные тренеры" },
                  { icon: "Award", label: "Премиум оборудование" },
                  { icon: "Clock", label: "Работаем 24/7" },
                  { icon: "Users", label: "Сообщество лидеров" },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 text-white/50">
                    <div className="w-8 h-8 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={14} className="text-gold" />
                    </div>
                    <span className="text-xs font-light tracking-wide">{item.label}</span>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="relative">
                <div className="aspect-[3/4] bg-obsidian-mid overflow-hidden relative">
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 50%, #141414 100%)" }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                    <div className="text-gold font-cormorant text-8xl font-light opacity-20">S</div>
                    <div className="mt-8 space-y-4 w-full">
                      {["Современное оборудование", "Профессиональные тренеры", "Индивидуальный подход", "Комфортная атмосфера", "Гибкий график работы"].map((item, i) => (
                        <div key={item} className="flex items-center gap-4 group cursor-default">
                          <div className="text-gold/40 font-cormorant text-lg">{String(i + 1).padStart(2, "0")}</div>
                          <div className="flex-1 h-px bg-white/10 group-hover:bg-gold/30 transition-colors" />
                          <div className="text-white/40 text-xs tracking-wider group-hover:text-white/70 transition-colors font-light">{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/20" />
                <div className="absolute -top-4 -left-4 w-20 h-20 border border-gold/10" />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="py-32 px-6 lg:px-12 bg-obsidian-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,168,76,0.3) 80px, rgba(201,168,76,0.3) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,168,76,0.3) 80px, rgba(201,168,76,0.3) 81px)" }} />
        <div className="max-w-7xl mx-auto relative">
          <RevealSection>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-gold/70 text-xs tracking-[0.4em] uppercase font-light">Программы</span>
                <div className="w-8 h-px bg-gold/60" />
              </div>
              <h2 className="font-cormorant text-5xl lg:text-6xl font-light">
                Тренировки под <em className="text-gold">ваш ритм</em>
              </h2>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRAININGS.map((t, i) => (
              <RevealSection key={t.title} delay={i * 80}>
                <div className="group p-8 border border-white/5 hover:border-gold/20 transition-all duration-500 bg-obsidian/40 hover:bg-obsidian/80 cursor-default relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                        <Icon name={t.icon as any} size={20} className="text-gold/70 group-hover:text-gold transition-colors" />
                      </div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gold/40 border border-gold/10 px-3 py-1 font-light">{t.tag}</span>
                    </div>
                    <h3 className="font-cormorant text-2xl font-light mb-3 group-hover:text-gold transition-colors duration-300">{t.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed font-light">{t.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      <section id="trainers" className="py-32 px-6 lg:px-12 relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-gold/70 text-xs tracking-[0.4em] uppercase font-light">Команда</span>
                <div className="w-8 h-px bg-gold/60" />
              </div>
              <h2 className="font-cormorant text-5xl lg:text-6xl font-light">
                Ваши <em className="text-gold">наставники</em>
              </h2>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="flex justify-center">
              <div className="group cursor-default text-center max-w-xs">
                <div className="w-32 h-32 rounded-full bg-obsidian-soft border border-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:border-gold/50 transition-all duration-500">
                  <span className="font-cormorant text-3xl text-gold/70 group-hover:text-gold transition-colors">ОР</span>
                </div>
                <h3 className="font-cormorant text-2xl font-light mb-1 group-hover:text-gold transition-colors">Оганесян Размик Артемович</h3>
                <p className="text-white/40 text-xs font-light tracking-widest uppercase">Тренер-наставник</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
