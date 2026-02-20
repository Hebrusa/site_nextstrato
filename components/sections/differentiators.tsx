"use client";

import { Container, Section } from "@/components/ui/container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const items = [
  {
    icon: "🎯",
    title: "Prêt-à-porter retouchable",
    description: "Nos agents embarquent des années de meilleures pratiques métier. Ils s'adaptent à vos processus en quelques jours — pas en plusieurs mois.",
  },
  {
    icon: "🔗",
    title: "Connecté à vos SI cœurs",
    description: "L'Agent DAF connaît votre ERP. L'Agent RH parle à votre SIRH. Pas des connexions génériques — des intégrations profondes sur votre écosystème.",
  },
  {
    icon: "📐",
    title: "Bout-en-bout assumé",
    description: "Diagnostic, déploiement, adoption, mesure. Nous restons présents jusqu'à ce que vos équipes soient autonomes et vos KPIs au vert.",
  },
  {
    icon: "🌐",
    title: "Vous gardez le contrôle. Ou on s'en charge",
    description: "Vos agents IA peuvent être gérés directement par vos équipes, ou opérés intégralement par NextStrato. Même résultat, deux façons de travailler.",
  },
];

export function Differentiators() {
  return (
    <Section className="bg-white border-t border-[#E4E4EF]">
      <Container>
        <FadeIn className="text-center mb-14">
          <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-3">
            Pourquoi Nextstrato
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0F18] leading-tight">
            Ce qui nous distingue
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="bg-white rounded-2xl border border-[#E4E4EF] p-7 h-full card-hover group">
                <div className="text-3xl mb-5">{item.icon}</div>
                <h3 className="text-[#0F0F18] font-semibold text-lg mb-3 group-hover:text-[#4F6EF7] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#71718A] text-sm leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
