"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const steps = [
  {
    icon: "🔍",
    title: "Diagnostic 360°",
    description: "Cartographie complète de vos fonctions et identification des zones à fort potentiel.",
  },
  {
    icon: "🤖",
    title: "Agents métier",
    description: "Déploiement d'agents connectés à vos systèmes cœurs, prêts en quelques jours.",
  },
  {
    icon: "📈",
    title: "Mesure & adoption",
    description: "KPIs d'impact, conduite du changement et itérations continues.",
  },
];

export function ApprochePreview() {
  return (
    <Section id="approche" className="bg-white">
      <Container>
        <FadeIn className="text-center mb-14">
          <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-3">
            Notre approche
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0F18] mb-4 leading-tight">
            Pas un outil de plus.
            <br />
            Une transformation structurée.
          </h2>
          <p className="text-[#71718A] text-lg max-w-xl mx-auto">
            Nous intervenons à vos cotés de bout-en-bout : du diagnostic initial à la mesure d'impact,
            en passant par le déploiement des agents et leurs adoption.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <Card hover className="h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{step.icon}</span>
                    <span className="text-[#71718A] text-xs font-mono font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-[#0F0F18] font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-[#71718A] text-sm leading-relaxed">{step.description}</p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="text-center">
          <Button href="/approche" variant="outline" size="md">
            Voir la méthode complète
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
