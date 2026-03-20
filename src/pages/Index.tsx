import { useState, useEffect } from "react";
import { REVIEWS } from "@/components/sections/shared";
import HeroNav from "@/components/sections/HeroNav";
import AboutTrainingTrainers from "@/components/sections/AboutTrainingTrainers";
import PricingProductsReviewsContacts from "@/components/sections/PricingProductsReviewsContacts";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, setActiveReview] = useState(0);

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
      <HeroNav
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <AboutTrainingTrainers />
      <PricingProductsReviewsContacts />

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
