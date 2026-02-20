"use client";

import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import Link from "next/link";

const agents = [
  {
    icon: "💼",
    title: "Agent DAF",
    slug: "daf",
    description: "Clôtures, reportings, analyses financières, projection financière. Connecté à votre ERP et vos outils de reporting.",
    tags: ["SAP", "Sage", "Cegid", "Pennylane","..."],
    color: "#4F6EF7",
  },
  {
    icon: "👥",
    title: "Agent RH",
    slug: "rh",
    description: "Onboarding, FAQ employés, Plan de formation, Evaluation, Projection salariale. Connecté à votre SIRH et ATS.",
    tags: ["Silae", "Payfit", "Lucca", "Workday","..."],
    color: "#8B5CF6",
  },
  {
    icon: "🏪",
    title: "Agent Commercial",
    slug: "commercial",
    description: "Préparation RDV, suivi pipeline, réponses clients. Connecté à votre CRM.",
    tags: ["Salesforce", "HubSpot", "Pipedrive","..."],
    color: "#0891b2",
  },
  {
    icon: "⚙️",
    title: "Agent Ops",
    slug: "ops",
    description: "Reporting opérationnel, ticketing, planification. Connecté à votre ERP et outils métier.",
    tags: ["SAP", "Jira", "ServiceNow","..."],
    color: "#059669",
  },
  {
    icon: "⚖️",
    title: "Agent Juridique",
    slug: "juridique",
    description: "Analyse contractuelle, veille, rédaction. Connecté à votre GED.",
    tags: ["SharePoint", "Notion", "DocuSign","..."],
    color: "#d97706",
  },
  {
    icon: "📊",
    title: "Agent CODIR",
    slug: "codir",
    description: "Vision 360° consolidée, alertes stratégiques. Connecté à toutes vos sources de données.",
    tags: ["Multi-sources", "Temps réel"],
    color: "#dc2626",
  },
];

export function AgentsGrid() {
  return (
    <Section id="agents" className="bg-[#F8F8FC]">
      <Container>
        <FadeIn className="text-center mb-14">
          <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-3">
            La plateforme
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0F18] mb-4 leading-tight">
            Un agent IA pour chaque fonction
            <br />
            de l'entreprise
          </h2>
          <p className="text-[#71718A] text-lg max-w-xl mx-auto">
            Des agents prêts à l'emploi, connectés à vos outils, ajustés à vos spécificités.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent) => (
            <StaggerItem key={agent.slug}>
              <Link href={`/agents#${agent.slug}`} className="block h-full">
                <div className="bg-white rounded-2xl border border-[#E4E4EF] p-6 h-full group card-hover flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                        style={{ background: `${agent.color}12` }}
                      >
                        {agent.icon}
                      </div>
                      <h3 className="text-[#0F0F18] font-semibold">{agent.title}</h3>
                    </div>
                    <svg
                      className="w-4 h-4 text-[#71718A] group-hover:text-[#4F6EF7] transition-all opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>

                  <p className="text-[#71718A] text-sm leading-relaxed flex-1">{agent.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {agent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md border"
                        style={{ color: agent.color, borderColor: `${agent.color}30`, background: `${agent.color}08` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="text-center mt-10">
          <Button href="/agents" variant="outline" size="md">
            Explorer tous les agents
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}
