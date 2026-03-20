import { useRef, useState, useEffect } from "react";

export const HERO_IMAGE = "https://cdn.poehali.dev/projects/a9e4e0f0-9701-46eb-8686-81fb82fdd4c5/files/ec510aae-a229-43c8-86b3-bd83df9889bc.jpg";

export const NAV_LINKS = [
  { label: "О клубе", href: "#about" },
  { label: "Тренировки", href: "#training" },
  { label: "Тренеры", href: "#trainers" },
  { label: "Цены", href: "#pricing" },
  { label: "Продукция", href: "#products" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export const TRAININGS = [
  { icon: "Flame", title: "Силовые тренировки", desc: "Индивидуальные программы для набора мышечной массы и повышения силовых показателей", tag: "Сила" },
  { icon: "Wind", title: "Кардио & HIIT", desc: "Высокоинтенсивные интервальные тренировки для сжигания жира и выносливости", tag: "Кардио" },
  { icon: "Activity", title: "Функциональный фитнес", desc: "Комплексные упражнения для улучшения координации, гибкости и общей физической формы", tag: "Функционал" },
  { icon: "Dumbbell", title: "Кроссфит", desc: "Интенсивные комплексные тренировки для развития силы, скорости и общей физической подготовки", tag: "Кроссфит" },
  { icon: "Zap", title: "Единоборства", desc: "Бокс, ММА и боевые искусства под руководством чемпионов и мастеров спорта", tag: "Бой" },
  { icon: "Heart", title: "Реабилитация", desc: "Специализированные программы восстановления после травм с физиотерапевтами", tag: "Здоровье" },
];

export const TRAINERS = [
  { name: "Александр Волков", role: "Мастер силовых тренировок", exp: "12 лет опыта", awards: "Чемпион России 2019", initials: "АВ" },
  { name: "Елена Соколова", role: "Эксперт по йоге и реабилитации", exp: "9 лет опыта", awards: "Сертификат RYT-500", initials: "ЕС" },
  { name: "Михаил Дорошенко", role: "Тренер по HIIT и кардио", exp: "7 лет опыта", awards: "NASM Certified CPT", initials: "МД" },
  { name: "Анастасия Климова", role: "Специалист по единоборствам", exp: "11 лет опыта", awards: "КМС по боксу", initials: "АК" },
];

export const FITNESS_PLANS = [
  { type: "Групповые занятия", sub: "2 человека", price: "14 000", period: "мес", highlight: false },
  { type: "Групповые занятия", sub: "3 человека", price: "18 000", period: "мес", highlight: false },
  { type: "Индивидуальные тренировки", sub: "1 человек", price: "8 000", period: "мес", highlight: true },
];

export const REVIEWS = [
  { name: "Дмитрий Р.", role: "Предприниматель", rating: 5, text: "SISNEM — это не просто фитнес-клуб, это образ жизни. За 8 месяцев я не только привёл себя в форму, но и нашёл команду единомышленников. Уровень сервиса соответствует самым высоким стандартам.", avatar: "ДР" },
  { name: "Мария К.", role: "Топ-менеджер", rating: 5, text: "Наконец-то клуб, где каждая деталь продумана. Тренеры — настоящие профессионалы, оборудование всегда в идеальном состоянии. Мои результаты превзошли все ожидания.", avatar: "МК" },
  { name: "Андрей Т.", role: "Архитектор", rating: 5, text: "Приходил скептически настроенным — уходил убеждённым фанатом. Персональная программа от Александра изменила моё тело и самоощущение за 3 месяца. Рекомендую без оговорок.", avatar: "АТ" },
  { name: "Светлана М.", role: "Врач", rating: 5, text: "Как врач особенно ценю подход к здоровью. Реабилитационная программа помогла восстановиться после травмы быстрее, чем ожидалось. Профессионализм на каждом уровне.", avatar: "СМ" },
  { name: "Виктор Н.", role: "Финансист", rating: 5, text: "Elite-членство полностью оправдывает себя. Персональный менеджер, VIP-раздевалка, гибкий график — это всё, что нужно занятому человеку для поддержания формы.", avatar: "ВН" },
  { name: "Ольга Б.", role: "Дизайнер", rating: 5, text: "Атмосфера SISNEM вдохновляет. Красивый интерьер, приятная музыка, мотивированные люди вокруг. Каждая тренировка — это ритуал заботы о себе.", avatar: "ОБ" },
];

export function useScrollReveal() {
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

export function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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