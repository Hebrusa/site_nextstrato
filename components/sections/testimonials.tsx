"use client";

import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Du jour au lendemain, notre DAF a récupéré deux jours par semaine. L'agent gère seul 70% du reporting récurrent.",
    author: "Directeur Général",
    company: "ETI industrielle",
    size: "850 salariés",
  },
  {
    quote: "On hésitait à se lancer, on pensait que ça prendrait des mois. Le premier agent était opérationnel en 3 semaines.",
    author: "DRH",
    company: "Groupe de services",
    size: "1 200 collaborateurs",
  },
  {
    quote: "Nextstrato ne nous a pas juste vendu un outil. Ils ont compris nos processus et livré quelque chose qui marche vraiment.",
    author: "DSI",
    company: "PME logistique",
    size: "320 salariés",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="bg-[#F8F8FC] border-t border-[#E4E4EF]">
      <Container size="md">
        <FadeIn className="text-center mb-14">
          <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0F18] leading-tight">
            Ce que disent nos clients
          </h2>
        </FadeIn>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl border border-[#E4E4EF] p-8 md:p-12 text-center shadow-sm shadow-black/[0.03]"
            >
              <div className="text-5xl text-[#4F6EF7] opacity-20 font-serif leading-none mb-4">"</div>
              <p className="text-[#0F0F18] text-xl md:text-2xl font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
                {testimonials[current].quote}
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4F6EF7] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[current].author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-[#0F0F18] font-semibold text-sm">{testimonials[current].author}</div>
                  <div className="text-[#71718A] text-xs">{testimonials[current].company} · {testimonials[current].size}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#4F6EF7] w-6" : "bg-[#E4E4EF] w-1.5 hover:bg-[#C5C5D5]"}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
