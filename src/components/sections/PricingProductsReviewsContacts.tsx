import Icon from "@/components/ui/icon";
import { RevealSection, FITNESS_PLANS } from "./shared";

export default function PricingProductsReviewsContacts() {
  return (
    <>
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
              { icon: "Battery", name: "Предтренировочные комплексы", desc: "Заряд энергии и концентрации перед тренировкой для максимальной отдачи." },
              { icon: "Droplets", name: "BCAA и аминокислоты", desc: "Защищают мышцы от разрушения, ускоряют восстановление и снижают усталость." },
              { icon: "Apple", name: "Витамины и омега-3", desc: "Поддержка иммунитета, суставов и общего тонуса организма каждый день." },
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
    </>
  );
}
