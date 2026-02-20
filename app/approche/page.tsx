import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre approche — Nextstrato AI",
  description: "Une méthode éprouvée en 5 étapes pour déployer vos agents IA du diagnostic à la mesure d'impact.",
};

const steps = [
  {
    number: "01",
    title: "Diagnostic 360°",
    duration: "2 à 4 semaines",
    color: "#4F6EF7",
    id: "diagnostic",
    description: "Nous cartographions l'ensemble de vos fonctions : Finance, RH, Commerce, Opérations, Juridique... Pour chaque processus, nous évaluons le volume de tâches répétitives, la qualité des données disponibles, les irritants des équipes et le potentiel de gain de productivité.",
    deliverables: ["Score d'opportunité par fonction","Rapport de synthèse exécutif","Processus prioritaires"],
  },
  {
    number: "02",
    title: "Priorisation",
    duration: "1 semaine",
    color: "#8B5CF6",
    id: "priorisation",
    description: "Sur la base du diagnostic, nous construisons avec vous une roadmap priorisée. Chaque agent est évalué selon deux axes : l'impact métier attendu et la faisabilité technique. Vous choisissez par où commencer.",
    deliverables: ["Matrice impact × faisabilité", "Roadmap agents 3/6/12 mois", "Budget prévisionnel"],
  },
  {
    number: "03",
    title: "Déploiement des agents",
    duration: "3 à 6 semaines par agent",
    color: "#0891b2",
    id: "deploiement",
    description: "Nous déployons des agents prêts à l'emploi, enrichis par vos données et vos processus spécifiques. Chaque agent est connecté à vos systèmes cœurs via des intégrations natives ou API.",
    deliverables: ["Agents déployés et testés", "Connecteurs SI configurés", "Documentation technique"],
  },
  {
    number: "04",
    title: "Accompagnement au changement",
    duration: "4 à 8 semaines",
    color: "#059669",
    id: "accompagnement",
    description: "Un agent IA n'a de valeur que s'il est utilisé. Nous formons les équipes, communiquons en interne et accompagnons les managers dans l'intégration des agents dans les routines de travail.",
    deliverables: ["Sessions de formation par équipe", "Kit de communication interne", "Guide utilisateur"],
  },
  {
    number: "05",
    title: "Mesure d'adoption et d'impact",
    duration: "Ongoing",
    color: "#d97706",
    id: "mesure",
    description: "Nous mesurons l'utilisation réelle des agents et leur impact sur vos KPIs métier. Chaque mois, nous ajustons les agents selon les retours terrain et les nouvelles priorités.",
    deliverables: ["Dashboard d'adoption", "Rapport ROI mensuel", "Plan d'évolution des agents"],
  },
];

export default function ApprochePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        {/* Header */}
        <Section className="pb-0 border-b border-[#E4E4EF]">
          <Container>
            <FadeIn className="max-w-3xl">
              <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-4">
                Notre méthode
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F0F18] mb-5 leading-tight">
                Une méthode éprouvée.
                <br />
                Des résultats mesurables.
              </h1>
              <p className="text-[#71718A] text-lg leading-relaxed max-w-2xl">
                Nous avons conçu une approche de bout-en-bout pour que chaque projet d'IA soit un succès — pas un POC qui n'aboutit pas.
              </p>
            </FadeIn>
          </Container>
        </Section>

        {/* Timeline */}
        <Section className="bg-[#F8F8FC]">
          <Container>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <FadeIn key={step.id} delay={i * 0.08} id={step.id}>
                  <div className="bg-white rounded-2xl border border-[#E4E4EF] p-8 hover:border-[rgba(79,110,247,0.3)] hover:shadow-md hover:shadow-black/[0.04] transition-all">
                    <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-10 items-start">
                      {/* Step number */}
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0"
                        style={{ background: `${step.color}12`, color: step.color }}
                      >
                        {step.number}
                      </div>

                      {/* Left content */}
                      <div>
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <h2 className="text-[#0F0F18] font-bold text-xl">{step.title}</h2>
                          <span
                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{ color: step.color, background: `${step.color}12` }}
                          >
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-[#71718A] text-sm leading-relaxed">{step.description}</p>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <p className="text-[#0F0F18] text-xs font-semibold uppercase tracking-wider mb-3">
                          Livrables
                        </p>
                        <ul className="space-y-2">
                          {step.deliverables.map((d) => (
                            <li key={d} className="flex items-center gap-2.5 text-sm text-[#71718A]">
                              <svg
                                className="w-4 h-4 shrink-0"
                                style={{ color: step.color }}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section className="bg-white border-t border-[#E4E4EF] pt-16 pb-20">
          <Container>
            <FadeIn className="bg-white rounded-3xl border border-[#E4E4EF] p-10 text-center max-w-2xl mx-auto shadow-sm relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F6EF7] to-[#8B5CF6] rounded-t-3xl" />
              <h2 className="text-2xl font-bold text-[#0F0F18] mb-3">Prêt à démarrer ?</h2>
              <p className="text-[#71718A] mb-8 text-sm leading-relaxed">
                Commencez par un diagnostic gratuit de 2h pour identifier vos 3 premières zones d'automatisation.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Réserver mon diagnostic gratuit
              </Button>
            </FadeIn>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
