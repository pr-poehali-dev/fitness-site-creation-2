import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/a9e4e0f0-9701-46eb-8686-81fb82fdd4c5/files/ec510aae-a229-43c8-86b3-bd83df9889bc.jpg";

const NAV_LINKS = [
  { label: "О клубе", href: "#about" },
  { label: "Тренировки", href: "#training" },
  { label: "Тренеры", href: "#trainers" },
  { label: "Цены", href: "#pricing" },
  { label: "Продукция", href: "#products" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const TRAININGS = [
  { icon: "Flame", title: "Силовые тренировки", desc: "Индивидуальные программы для набора мышечной массы и повышения силовых показателей", tag: "Сила" },
  { icon: "Wind", title: "Кардио & HIIT", desc: "Высокоинтенсивные интервальные тренировки для сжигания жира и выносливости", tag: "Кардио" },
  { icon: "Activity", title: "Функциональный фитнес", desc: "Комплексные упражнения для улучшения координации, гибкости и общей физической формы", tag: "Функционал" },
  { icon: "Dumbbell", title: "Кроссфит", desc: "Интенсивные комплексные тренировки для развития силы, скорости и общей физической подготовки", tag: "Кроссфит" },
  { icon: "Zap", title: "Единоборства", desc: "Бокс, ММА и боевые искусства под руководством чемпионов и мастеров спорта", tag: "Бой" },
  { icon: "Heart", title: "Реабилитация", desc: "Специализированные программы восстановления после травм с физиотерапевтами", tag: "Здоровье" },
];

const TRAINERS = [
  { name: "Александр Волков", role: "Мастер силовых тренировок", exp: "12 лет опыта", awards: "Чемпион России 2019", initials: "АВ" },
  { name: "Елена Соколова", role: "Эксперт по йоге и реабилитации", exp: "9 лет опыта", awards: "Сертификат RYT-500", initials: "ЕС" },
  { name: "Михаил Дорошенко", role: "Тренер по HIIT и кардио", exp: "7 лет опыта", awards: "NASM Certified CPT", initials: "МД" },
  { name: "Анастасия Климова", role: "Специалист по единоборствам", exp: "11 лет опыта", awards: "КМС по боксу", initials: "АК" },
];

const FITNESS_PLANS = [
  { name: "1 месяц", price1: "2 500", price2: "5 000", highlight: false },
  { name: "3 месяца", price1: "4 500", price2: "9 000", highlight: true },
  { name: "6 месяцев", price1: "6 000", price2: "12 000", highlight: false },
];

const REVIEWS = [
  { name: "Дмитрий Р.", role: "Предприниматель", rating: 5, text: "SISNEM — это не просто фитнес-клуб, это образ жизни. За 8 месяцев я не только привёл себя в форму, но и нашёл команду единомышленников. Уровень сервиса соответствует самым высоким стандартам.", avatar: "ДР" },
  { name: "Мария К.", role: "Топ-менеджер", rating: 5, text: "Наконец-то клуб, где каждая деталь продумана. Тренеры — настоящие профессионалы, оборудование всегда в идеальном состоянии. Мои результаты превзошли все ожидания.", avatar: "МК" },
  { name: "Андрей Т.", role: "Архитектор", rating: 5, text: "Приходил скептически настроенным — уходил убеждённым фанатом. Персональная программа от Александра изменила моё тело и самоощущение за 3 месяца. Рекомендую без оговорок.", avatar: "АТ" },
  { name: "Светлана М.", role: "Врач", rating: 5, text: "Как врач особенно ценю подход к здоровью. Реабилитационная программа помогла восстановиться после травмы быстрее, чем ожидалось. Профессионализм на каждом уровне.", avatar: "СМ" },
  { name: "Виктор Н.", role: "Финансист", rating: 5, text: "Elite-членство полностью оправдывает себя. Персональный менеджер, VIP-раздевалка, гибкий график — это всё, что нужно занятому человеку для поддержания формы.", avatar: "ВН" },
  { name: "Ольга Б.", role: "Дизайнер", rating: 5, text: "Атмосфера SISNEM вдохновляет. Красивый интерьер, приятная музыка, мотивированные люди вокруг. Каждая тренировка — это ритуал заботы о себе.", avatar: "ОБ" },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveReview(p => (p + 1) % REVIEWS.length), 4500);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-obsidian text-white font-montserrat overflow-x-hidden">

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

      {/* PRICING */}
      <section id="pricing" className="py-32 px-6 lg:px-12 bg-obsidian-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-gold/70 text-xs tracking-[0.4em] uppercase font-light">Членство</span>
                <div className="w-8 h-px bg-gold/60" />
              </div>
              <h2 className="font-cormorant text-5xl lg:text-6xl font-light">
                Инвестиция в <em className="text-gold">себя</em>
              </h2>
            </div>
          </RevealSection>

          {/* FITNESS */}
          <RevealSection delay={100}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-gold/40" />
              <span className="text-gold/60 text-xs tracking-[0.4em] uppercase font-light">Фитнес</span>
            </div>
          </RevealSection>

          <div className="mb-6">
            <div className="grid grid-cols-4 gap-px bg-white/5 border border-white/5 mb-px">
              <div className="bg-obsidian-light px-6 py-4 text-[10px] tracking-widest uppercase text-white/30 font-light">Период</div>
              <div className="bg-obsidian-light px-6 py-4 text-[10px] tracking-widest uppercase text-white/30 font-light text-center">1 человек</div>
              <div className="bg-obsidian-light px-6 py-4 text-[10px] tracking-widest uppercase text-white/30 font-light text-center">2 человека</div>
              <div className="bg-obsidian-light px-6 py-4" />
            </div>
            {FITNESS_PLANS.map((plan, i) => (
              <RevealSection key={plan.name} delay={i * 80}>
                <div className={`grid grid-cols-4 gap-px mb-px ${plan.highlight ? "bg-gold/10" : "bg-white/2"}`}>
                  <div className={`px-6 py-5 flex items-center border-l ${plan.highlight ? "border-gold/30 bg-obsidian" : "border-white/5 bg-obsidian/60"}`}>
                    <span className={`text-sm font-light ${plan.highlight ? "text-gold" : "text-white/60"}`}>{plan.name}</span>
                    {plan.highlight && <span className="ml-3 text-[9px] tracking-widest uppercase bg-gold text-obsidian px-2 py-0.5 font-semibold">Выгодно</span>}
                  </div>
                  <div className={`px-6 py-5 text-center border-l border-white/5 ${plan.highlight ? "bg-obsidian" : "bg-obsidian/60"}`}>
                    <span className="font-cormorant text-2xl font-light text-white">{plan.price1}</span>
                    <span className="text-white/30 text-xs ml-1">₽</span>
                  </div>
                  <div className={`px-6 py-5 text-center border-l border-white/5 ${plan.highlight ? "bg-obsidian" : "bg-obsidian/60"}`}>
                    <span className="font-cormorant text-2xl font-light text-white">{plan.price2}</span>
                    <span className="text-white/30 text-xs ml-1">₽</span>
                  </div>
                  <div className={`px-6 py-5 border-l border-r ${plan.highlight ? "border-gold/30 bg-obsidian" : "border-white/5 bg-obsidian/60"}`}>
                    <button className={`w-full text-[10px] tracking-[0.2em] uppercase py-2 font-medium transition-all duration-300 ${plan.highlight ? "bg-gold text-obsidian hover:bg-gold-light" : "border border-white/10 text-white/40 hover:border-gold/30 hover:text-white/70"}`}>
                      Выбрать
                    </button>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* ЕДИНОБОРСТВА */}
          <RevealSection delay={100}>
            <div className="flex items-center gap-4 mt-16 mb-8">
              <div className="w-8 h-px bg-gold/40" />
              <span className="text-gold/60 text-xs tracking-[0.4em] uppercase font-light">Единоборства</span>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            <RevealSection delay={100}>
              <div className="relative p-10 border border-gold/20 bg-obsidian/40">
                <div className="text-xs tracking-[0.3em] uppercase mb-4 font-light text-gold/70">Пробный период</div>
                <div className="font-cormorant text-5xl font-light text-gold mb-2">Бесплатно</div>
                <p className="text-white/40 text-xs font-light mb-8">3 первых занятия — без оплаты. Попробуй, прежде чем решить.</p>
                <button className="w-full border border-gold/40 text-gold text-[10px] tracking-[0.2em] uppercase py-4 font-medium hover:bg-gold hover:text-obsidian transition-all duration-300">
                  Записаться
                </button>
              </div>
            </RevealSection>
            <RevealSection delay={200}>
              <div className="relative p-10 border border-white/5 bg-obsidian/40">
                <div className="text-xs tracking-[0.3em] uppercase mb-4 font-light text-white/30">Разовое занятие</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="font-cormorant text-5xl font-light text-white">1 000</span>
                  <span className="text-white/30 text-sm mb-2 font-light">₽/занятие</span>
                </div>
                <p className="text-white/40 text-xs font-light mb-8">Одно занятие без обязательств — приходи когда удобно.</p>
                <button className="w-full border border-white/10 text-white/40 text-[10px] tracking-[0.2em] uppercase py-4 font-medium hover:border-gold/30 hover:text-white/70 transition-all duration-300">
                  Записаться
                </button>
              </div>
            </RevealSection>
          </div>

          {/* СКИДКИ */}
          <RevealSection delay={200}>
            <div className="mt-10 max-w-2xl border border-gold/20 bg-obsidian/40 p-8 flex items-start gap-6">
              <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                <Icon name="Heart" size={18} className="text-gold" />
              </div>
              <div>
                <div className="text-gold text-xs tracking-[0.3em] uppercase font-light mb-2">Социальная скидка — 10%</div>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  Для детей и людей с ограниченными возможностями здоровья — скидка 10% на любую услугу клуба. Уточняйте при записи.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-32 px-6 lg:px-12 bg-obsidian-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-gold/70 text-xs tracking-[0.4em] uppercase font-light">Продукция</span>
                <div className="w-8 h-px bg-gold/60" />
              </div>
              <h2 className="font-cormorant text-5xl lg:text-6xl font-light">
                Спортивное <em className="text-gold">питание</em>
              </h2>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "Zap", name: "Протеин", desc: "Высококачественный белок для восстановления мышц и роста. Различные вкусы и составы." },
              { icon: "Flame", name: "Креатин", desc: "Повышает силу и выносливость, ускоряет восстановление между тренировками." },
              { icon: "Leaf", name: "БАДы", desc: "Витаминно-минеральные комплексы и добавки для здоровья и энергии." },
            ].map((product, i) => (
              <RevealSection key={product.name} delay={i * 100}>
                <div className="group p-8 border border-white/5 hover:border-gold/20 transition-all duration-500 bg-obsidian/40 hover:bg-obsidian/80 cursor-default">
                  <div className="w-12 h-12 border border-gold/20 flex items-center justify-center mb-6 group-hover:border-gold/50 transition-colors">
                    <Icon name={product.icon as any} size={20} className="text-gold/70 group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-cormorant text-2xl font-light mb-3 group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-white/40 text-xs leading-relaxed font-light mb-6">{product.desc}</p>
                  <div className="text-gold/50 text-xs tracking-widest uppercase font-light">Цена по запросу</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />
        <div className="max-w-7xl mx-auto relative">
          <RevealSection>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-gold/70 text-xs tracking-[0.4em] uppercase font-light">Отзывы</span>
                <div className="w-8 h-px bg-gold/60" />
              </div>
              <h2 className="font-cormorant text-5xl lg:text-6xl font-light">
                Говорят наши <em className="text-gold">члены клуба</em>
              </h2>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <p className="text-center text-white/40 text-sm font-light max-w-xl mx-auto">
              Мы только открылись и уже собираем первые отзывы. Станьте одним из первых — запишитесь на пробное занятие.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-32 px-6 lg:px-12 bg-obsidian-light relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <RevealSection>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-gold/70 text-xs tracking-[0.4em] uppercase font-light">Контакты</span>
              </div>
              <h2 className="font-cormorant text-5xl lg:text-6xl font-light mb-8">
                Начните
                <br />
                <em className="text-gold">сегодня</em>
              </h2>
              <p className="text-white/40 text-sm font-light leading-relaxed mb-12">
                Оставьте заявку, и наш менеджер свяжется с вами в течение часа, чтобы подобрать оптимальную программу и ответить на все вопросы.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "MapPin", label: "Адрес", value: "г. Балобаново, ул. Энергетиков 3" },
                  { icon: "Phone", label: "Телефон", value: "+7 (___) ___-__-__" },
                  { icon: "Mail", label: "Email", value: "hello@sistemfit.ru" },
                  { icon: "Clock", label: "Режим работы", value: "Круглосуточно, 7 дней в неделю" },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={item.icon as any} size={14} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-white/30 text-[10px] tracking-widest uppercase mb-1 font-light">{item.label}</div>
                      <div className="text-white/70 text-sm font-light">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="bg-obsidian border border-white/5 p-10">
                <h3 className="font-cormorant text-2xl font-light mb-8 text-white">Записаться на пробное занятие</h3>
                <div className="space-y-5">
                  <div>
                    <label className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-light block mb-2">Имя</label>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full bg-obsidian-mid border border-white/10 px-4 py-4 text-sm text-white/70 placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors font-light"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-light block mb-2">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-obsidian-mid border border-white/10 px-4 py-4 text-sm text-white/70 placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors font-light"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-light block mb-2">Цель</label>
                    <select className="w-full bg-obsidian-mid border border-white/10 px-4 py-4 text-sm text-white/40 focus:outline-none focus:border-gold/40 transition-colors font-light appearance-none">
                      <option value="">Выберите цель тренировок</option>
                      <option>Снижение веса</option>
                      <option>Набор мышечной массы</option>
                      <option>Повышение выносливости</option>
                      <option>Общее оздоровление</option>
                      <option>Реабилитация</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-light block mb-2">Комментарий</label>
                    <textarea
                      rows={3}
                      placeholder="Любые пожелания или вопросы..."
                      className="w-full bg-obsidian-mid border border-white/10 px-4 py-4 text-sm text-white/70 placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors font-light resize-none"
                    />
                  </div>
                  <button className="w-full bg-gold text-obsidian text-xs tracking-[0.3em] uppercase py-5 font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] mt-2">
                    Отправить заявку
                  </button>
                  <p className="text-white/20 text-xs text-center font-light">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-cormorant text-xl font-light tracking-widest">
            <span className="text-white">SISNEM</span>
            <span className="text-gold ml-2 text-sm font-montserrat font-light tracking-[0.3em] uppercase">FITNESS</span>
          </div>
          <div className="text-white/20 text-xs font-light tracking-wider">
            © 2025 SISTEM FITNESS. Все права защищены.
          </div>
          <div className="flex gap-6">
            {[
              { label: "Instagram", href: "https://instagram.com" },
              { label: "Telegram", href: "https://t.me" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-gold text-xs tracking-widest uppercase font-light transition-colors">{s.label}</a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.12); }
        }
        select option {
          background: #1E1E1E;
          color: rgba(255,255,255,0.7);
        }
      `}</style>
    </div>
  );
}