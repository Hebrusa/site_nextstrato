import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agents IA métier — Nextstrato AI",
  description: "6 agents IA prêts à l'emploi pour Finance, RH, Commercial, Opérations, Juridique et Direction.",
};

const agents = [
  {
    id: "daf",
    icon: "💼",
    title: "Agent DAF",
    tagline: "Clôturez plus vite. Pilotez en temps réel.",
    color: "#4F6EF7",
    description: "L'Agent DAF automatise vos tâches financières récurrentes : préparation des clôtures, consolidation des reportings, analyse des écarts, réponses aux questions de gestion. Connecté à votre ERP et vos outils de reporting, il travaille avec vos données réelles.",
    useCases: [
      "Préparation automatique des reportings mensuels",
      "Analyse des écarts budgétaires avec explications",
      "Réponses instantanées aux questions de gestion des managers",
      "Consolidation multi-entités automatisée",
    ],
    systems: ["SAP", "Sage", "Cegid", "Pennylane", "Excel/Google Sheets", "Power BI","..."],
    gain: "2 à 3 jours/mois récupérés pour l'équipe Finance",
    detailPage: "/agents/daf",
  },
  {
    id: "rh",
    icon: "👥",
    title: "Agent RH",
    tagline: "Libérez vos RH des tâches à faible valeur.",
    color: "#8B5CF6",
    description: "L'Agent RH répond aux questions récurrentes des collaborateurs, automatise l'onboarding, facilite le suivi des entretiens et centralise la documentation RH. Vos équipes RH se concentrent sur ce qui compte vraiment : l'humain.",
    useCases: [
      "FAQ collaborateurs (congés, mutuelle, processus internes)",
      "Onboarding automatisé des nouveaux arrivants",
      "Synthèse et suivi des entretiens annuels",
      "Mise à jour automatique des dossiers dans le SIRH",
    ],
    systems: ["Silae", "Payfit", "Lucca", "BambooHR", "Workday", "Teams/Slack","..."],
    gain: "70-80% des sollicitations RH répétitives traitées automatiquement",
  },
  {
    id: "commercial",
    icon: "🏪",
    title: "Agent Commercial",
    tagline: "Préparez chaque rendez-vous comme votre meilleur commercial.",
    color: "#0891b2",
    description: "L'Agent Commercial prépare vos RDV clients, rédige vos emails de suivi, met à jour votre CRM et analyse votre pipeline. Il donne à chaque commercial l'insight dont il a besoin, au bon moment.",
    useCases: [
      "Brief client complet avant chaque RDV (historique, actualités, opportunités)",
      "Rédaction automatique des comptes-rendus et follow-ups",
      "Mise à jour CRM à partir des notes vocales ou emails",
      "Alertes sur les opportunités à risque",
    ],
    systems: ["Salesforce", "HubSpot", "Pipedrive", "Gmail", "Outlook", "LinkedIn","..."],
    gain: "Préparation commerciale 10× plus rapide",
  },
  {
    id: "ops",
    icon: "⚙️",
    title: "Agent Ops",
    tagline: "Vos opérations sous contrôle, en temps réel.",
    color: "#059669",
    description: "L'Agent Ops centralise vos données opérationnelles, automatise vos reportings de performance et alerte en temps réel sur les anomalies. De la production au service client, il donne à vos équipes ops une visibilité immédiate.",
    useCases: [
      "Reporting opérationnel quotidien automatisé",
      "Alertes en temps réel sur les KPIs critiques",
      "Gestion et routage automatique des tickets",
      "Synthèse des plannings et gestion des capacités",
    ],
    systems: ["SAP", "Jira", "ServiceNow", "Monday", "Asana", "ERP métier","..."],
    gain: "60% du reporting opérationnel automatisé",
  },
  {
    id: "juridique",
    icon: "⚖️",
    title: "Agent Juridique",
    tagline: "Analysez plus. Rédigez moins.",
    color: "#d97706",
    description: "L'Agent Juridique analyse vos contrats, identifie les clauses sensibles, rédige des premiers jets et centralise votre base documentaire. Il accélère le travail de votre équipe juridique sans sacrifier la rigueur.",
    useCases: [
      "Analyse et résumé de contrats en quelques secondes",
      "Identification des clauses à risque avec recommandations",
      "Rédaction de premiers jets de contrats standards",
      "Veille juridique et réglementaire automatisée",
    ],
    systems: ["SharePoint", "Notion", "DocuSign", "Google Drive", "GED interne","..."],
    gain: "Analyse contractuelle 5× plus rapide",
  },
  {
    id: "codir",
    icon: "📊",
    title: "Agent CODIR",
    tagline: "Décidez sur des faits, pas sur des intuitions.",
    color: "#dc2626",
    description: "L'Agent CODIR consolide les données de toutes vos fonctions pour offrir à la direction une vision 360° en temps réel. Il prépare vos CODIR, synthétise les alertes critiques et répond aux questions stratégiques instantanément.",
    useCases: [
      "Dashboard CODIR consolidé en temps réel",
      "Alertes automatiques sur les indicateurs critiques",
      "Préparation automatisée des présentations CODIR",
      "Réponses instantanées aux questions ad-hoc de direction",
    ],
    systems: ["Toutes vos sources de données métier"],
    gain: "Vision 360° disponible en permanence, CODIR préparé en 30 min",
  },
];

export default function AgentsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        {/* Header */}
        <Section className="pb-12 border-b border-[#E4E4EF]">
          <Container>
            <FadeIn className="text-center max-w-3xl mx-auto">
              <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-4">
                La plateforme
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F0F18] mb-5 leading-tight">
                Des agents métier prêts à l'emploi
              </h1>
              <p className="text-[#71718A] text-lg leading-relaxed">
                Chaque agent embarque les meilleures pratiques sectorielles, se connecte
                à vos outils et s'adapte à vos spécificités en quelques jours.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-8 max-w-2xl mx-auto">
              <div className="bg-[#EEF1FE] rounded-2xl border border-[#D5DCFC] p-5 text-center">
                <p className="text-[#4F6EF7] font-semibold text-sm mb-1">Prêt-à-porter retouchable</p>
                <p className="text-[#71718A] text-sm leading-relaxed">
                  Nos agents ne partent pas d'une feuille blanche. Ils embarquent des années de pratiques métier
                  — et s'ajustent à votre réalité sans les délais d'un développement sur-mesure.
                </p>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Agents detail */}
        <Section className="bg-[#F8F8FC]">
          <Container>
            <div className="space-y-5">
              {agents.map((agent, i) => (
                <FadeIn key={agent.id} delay={i * 0.05} id={agent.id}>
                  <div className="bg-white rounded-2xl border border-[#E4E4EF] p-8 hover:border-[rgba(79,110,247,0.25)] hover:shadow-md hover:shadow-black/[0.04] transition-all">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl"
                            style={{ background: `${agent.color}10` }}
                          >
                            {agent.icon}
                          </div>
                          <div>
                            <h2 className="text-[#0F0F18] font-bold text-xl">{agent.title}</h2>
                            <p className="text-sm font-medium" style={{ color: agent.color }}>{agent.tagline}</p>
                          </div>
                        </div>
                        <p className="text-[#71718A] text-sm leading-relaxed mb-5">{agent.description}</p>
                        <div
                          className="rounded-xl px-4 py-3 text-sm font-medium"
                          style={{ background: `${agent.color}08`, color: agent.color, border: `1px solid ${agent.color}20` }}
                        >
                          ✓ {agent.gain}
                        </div>
                        {"detailPage" in agent && (
                          <Link
                            href={(agent as { detailPage: string }).detailPage}
                            className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold transition-colors"
                            style={{ color: agent.color }}
                          >
                            Voir le cas d'usage détaillé
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        )}
                      </div>

                      {/* Right */}
                      <div className="space-y-5">
                        <div>
                          <p className="text-[#0F0F18] text-xs font-semibold uppercase tracking-wider mb-3">Cas d'usage</p>
                          <ul className="space-y-2">
                            {agent.useCases.map((uc) => (
                              <li key={uc} className="flex items-start gap-2.5 text-sm text-[#71718A]">
                                <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: agent.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                {uc}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[#0F0F18] text-xs font-semibold uppercase tracking-wider mb-3">Systèmes connectés</p>
                          <div className="flex flex-wrap gap-2">
                            {agent.systems.map((sys) => (
                              <span
                                key={sys}
                                className="text-xs px-2.5 py-1 rounded-lg border font-medium"
                                style={{ color: agent.color, borderColor: `${agent.color}25`, background: `${agent.color}06` }}
                              >
                                {sys}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section className="bg-white border-t border-[#E4E4EF]">
          <Container>
            <FadeIn className="bg-white rounded-3xl border border-[#E4E4EF] p-10 text-center max-w-2xl mx-auto shadow-sm relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F6EF7] to-[#8B5CF6] rounded-t-3xl" />
              <h2 className="text-2xl font-bold text-[#0F0F18] mb-3">Quel agent pour votre priorité ?</h2>
              <p className="text-[#71718A] mb-8 text-sm leading-relaxed">
                En 2h de diagnostic, on identifie ensemble votre premier agent à déployer et l'impact attendu.
              </p>
              <Button href="/contact" variant="primary" size="lg">Réserver mon diagnostic gratuit</Button>
            </FadeIn>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
