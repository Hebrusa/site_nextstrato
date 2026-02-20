"use client";

import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function CtaFinal() {
  return (
    <Section className="bg-[#F8F8FC] border-t border-[#E4E4EF]">
      <Container size="md">
        <FadeIn className="text-center">
          <div className="bg-white rounded-3xl border border-[#E4E4EF] p-10 md:p-16 shadow-sm shadow-black/[0.03] relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F6EF7] to-[#8B5CF6] rounded-t-3xl" />

            <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-5">
              Commençons ensemble
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0F18] mb-4 leading-tight">
              Prêt à augmenter vos équipes ?
            </h2>
            <p className="text-[#71718A] text-lg mb-10 max-w-xl mx-auto">
              Commencez par un diagnostic gratuit de 2h. On identifie ensemble vos 3 premières
              zones à automatiser.
            </p>

            <Button href="/contact" variant="primary" size="lg">
              Réserver mon diagnostic gratuit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-[#71718A] text-sm">
              {["Diagnostic offert", "Sans engagement", "Réponse sous 48h"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#4F6EF7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
