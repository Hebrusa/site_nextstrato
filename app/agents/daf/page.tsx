import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent DAF — Clôturez plus vite. Analysez mieux. — Nextstrato AI",
  description:
    "L'Agent DAF automatise la préparation des reportings mensuels, la consolidation multi-entités et l'analyse des écarts. Récupérez 2 à 3 jours par mois pour votre équipe Finance.",
};

const COLOR = "#4F6EF7";

const benefits = [
  {
    icon: "⏱️",
    title: "Gain de temps",
    description: "2 à 3 jours récupérés par mois pour l'équipe Finance.",
  },
  {
    icon: "📊",
    title: "Analyse enrichie",
    description:
      "Détection automatique des variations anormales, dérives de marge, surcoûts par centre de profit et tensions de trésorerie.",
  },
  {
    icon: "📉",
    title: "Réduction du risque d'erreur",
    description: "Suppression des manipulations manuelles multiples.",
  },
  {
    icon: "🧠",
    title: "Pilotage plus stratégique",
    description:
      "Le DAF se concentre sur les arbitrages, l'anticipation et la communication au CODIR.",
  },
];

const dashboardBlocks = [
  {
    number: "1",
    title: "Performance financière",
    items: [
      "Chiffre d'affaires (réel vs budget vs N-1)",
      "Marge brute",
      "EBITDA",
      "Résultat net",
    ],
  },
  {
    number: "2",
    title: "Cash & trésorerie",
    items: [
      "Position de trésorerie",
      "Prévision à 3 mois",
      "BFR",
      "DSO / DPO",
    ],
  },
  {
    number: "3",
    title: "Analyse des écarts",
    items: [
      "Top 5 variations significatives",
      "Alertes automatiques",
      "Commentaires générés prêts à intégrer au reporting",
    ],
  },
  {
    number: "4",
    title: "Vue multi-entités",
    items: [
      "Performance par filiale",
      "Comparatif BU",
      "Consolidation automatique groupe",
    ],
  },
];

function CheckIcon({ size = 5 }: { size?: number }) {
  return (
    <svg
      className={`w-${size} h-${size} shrink-0`}
      style={{ color: COLOR }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowIcon({ size = 5 }: { size?: number }) {
  return (
    <svg
      className={`w-${size} h-${size} shrink-0`}
      style={{ color: COLOR }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function ArcadeEmbed() {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "calc(47.447916666666664% + 41px)",
        height: "0",
        width: "100%",
      }}
    >
      <iframe
        src="https://demo.arcade.software/nl9NtGP3sZzrZWHiq3y5?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
        title="Générer un dashboard financier consolidé à partir de vos fichiers"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          colorScheme: "light",
        }}
      />
    </div>
  );
}

export default function AgentDAFPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">

        {/* ── Hero ── */}
        <Section className="pb-14 border-b border-[#E4E4EF]">
          <Container>
            <FadeIn>
              <a
                href="/agents"
                className="inline-flex items-center gap-1.5 text-[#71718A] text-sm hover:text-[#4F6EF7] transition-colors mb-8"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Tous les agents
              </a>
              <div className="flex items-center gap-5 mb-8">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shrink-0"
                  style={{ background: `${COLOR}12` }}
                >
                  💼
                </div>
                <div>
                  <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-1.5">
                    Cas d'usage
                  </p>
                  <h1 className="text-4xl lg:text-5xl font-bold text-[#0F0F18] leading-tight">
                    Agent DAF
                  </h1>
                </div>
              </div>
              <p className="text-2xl lg:text-3xl font-semibold text-[#0F0F18] mb-5 leading-snug max-w-3xl">
                Clôturez plus vite. Analysez mieux. Décidez plus tôt.
              </p>
              <p className="text-[#71718A] text-lg leading-relaxed max-w-2xl">
                L'Agent DAF automatise l'intégralité du cycle mensuel : de
                l'extraction des données à la mise à disposition d'un dashboard
                temps réel, en passant par la consolidation multi-entités et
                l'analyse des écarts.
              </p>
            </FadeIn>
          </Container>
        </Section>

        {/* ── Irritant ── */}
        <Section className="bg-[#F8F8FC]">
          <Container>
            <FadeIn>
              <div className="bg-white rounded-2xl border border-[#E4E4EF] p-8">
                <h2 className="text-2xl font-bold text-[#0F0F18] mb-5">
                  🎯 L'irritant que vivent tous les DAF
                </h2>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Extraction manuelle depuis SAP, Sage ou Pennylane",
                    "Retraitement sous Excel + consolidation multi-entités",
                    "Analyse des écarts & rédaction des commentaires COMEX",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-[#71718A]">
                      <ArrowIcon size={5} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl bg-[#FFF7ED] border border-[#FED7AA] px-5 py-4 text-base font-medium text-[#92400E]">
                  👉 2 à 5 jours par mois passés à produire le reporting — pas à l'analyser.
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* ── Cas d'usage principal ── */}
        <Section className="bg-white border-t border-[#E4E4EF]">
          <Container>
            <FadeIn>
              <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-3">
                🚀 Cas d'usage principal
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0F0F18] mb-3 max-w-2xl">
                Préparation automatique des reportings mensuels & analyse des écarts
              </h2>
              <p className="text-[#71718A] text-base leading-relaxed mb-8 max-w-xl">
                L'Agent DAF automatise l'intégralité du cycle mensuel :
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Extraction des données réelles",
                  "Consolidation automatique",
                  "Calcul des écarts vs budget / N-1",
                  "Génération des commentaires explicatifs",
                  "Mise à disposition d'un dashboard temps réel",
                ].map((uc) => (
                  <div
                    key={uc}
                    className="flex items-start gap-3 rounded-xl border border-[#E4E4EF] p-5 text-base text-[#71718A] hover:border-[rgba(79,110,247,0.3)] transition-colors"
                  >
                    <CheckIcon size={5} />
                    {uc}
                  </div>
                ))}
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* ── Bénéfices ── */}
        <Section className="bg-[#F8F8FC] border-t border-[#E4E4EF]">
          <Container>
            <FadeIn>
              <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-2">
                ✅ Bénéfices attendus
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0F0F18] mb-10">
                Ce que vous gagnez concrètement
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((b, i) => (
                <FadeIn key={b.title} delay={i * 0.07}>
                  <div className="bg-white rounded-2xl border border-[#E4E4EF] p-7 h-full hover:border-[rgba(79,110,247,0.25)] hover:shadow-sm transition-all">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                      style={{ background: `${COLOR}10` }}
                    >
                      {b.icon}
                    </div>
                    <p className="font-bold text-[#0F0F18] text-base mb-2">
                      {b.title}
                    </p>
                    <p className="text-[#71718A] text-base leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>

        {/* ── Comment ça fonctionne ── */}
        <Section className="bg-white border-t border-[#E4E4EF]">
          <Container>
            <FadeIn>
              <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-2">
                ⚙️ Comment ça fonctionne ?
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0F0F18] mb-10">
                4 étapes, de la donnée brute à l'analyse prête à présenter
              </h2>
            </FadeIn>
            <div className="space-y-6">

              {/* Étape 1 */}
              <FadeIn delay={0.05}>
                <div className="bg-white rounded-2xl border border-[#E4E4EF] p-8 lg:p-10 hover:border-[rgba(79,110,247,0.25)] hover:shadow-md hover:shadow-black/[0.04] transition-all">
                  <div className="flex items-start gap-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base shrink-0"
                      style={{ background: `${COLOR}12`, color: COLOR }}
                    >
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0F0F18] text-xl mb-4">
                        Connexion au SI Finance
                      </h3>
                      <p className="text-[#71718A] text-base leading-relaxed mb-6">
                        Deux modes possibles selon votre contexte :
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-[#E4E4EF] p-5 bg-[#F8F8FC]">
                          <p className="text-[#0F0F18] font-semibold text-base mb-3">
                            Mode connecté{" "}
                            <span
                              className="text-xs px-2 py-0.5 rounded-full ml-1 font-medium"
                              style={{ background: `${COLOR}12`, color: COLOR }}
                            >
                              Recommandé
                            </span>
                          </p>
                          <ul className="space-y-2 text-sm text-[#71718A]">
                            {[
                              "SAP",
                              "Sage",
                              "Pennylane",
                              "Fichiers Excel / Google Sheets",
                              "Outils BI existants",
                              "..."
                            ].map((s) => (
                              <li key={s} className="flex items-center gap-2">
                                <span style={{ color: COLOR }}>›</span> {s}
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm text-[#71718A] mt-4 pt-3 border-t border-[#E4E4EF]">
                            Synchronisation automatique quotidienne ou mensuelle.
                          </p>
                        </div>
                        <div className="rounded-xl border border-[#E4E4EF] p-5 bg-[#F8F8FC]">
                          <p className="text-[#0F0F18] font-semibold text-base mb-3">
                            Mode export{" "}
                            <span className="text-sm text-[#71718A] font-normal">
                              (déploiement rapide)
                            </span>
                          </p>
                          <ul className="space-y-2.5 text-sm text-[#71718A]">
                            <li className="flex items-start gap-2">
                              <span style={{ color: COLOR }}>›</span> Export CSV ou Excel depuis votre SI Finance
                            </li>
                            <li className="flex items-start gap-2">
                              <span style={{ color: COLOR }}>›</span> Dépôt sécurisé
                            </li>
                            <li className="flex items-start gap-2">
                              <span style={{ color: COLOR }}>›</span> Traitement automatisé en quelques minutes
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-base text-[#71718A] mt-5 font-medium">
                        👉 Aucun changement d'outil requis.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Étape 2 */}
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl border border-[#E4E4EF] p-8 lg:p-10 hover:border-[rgba(79,110,247,0.25)] hover:shadow-md hover:shadow-black/[0.04] transition-all">
                  <div className="flex items-start gap-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base shrink-0"
                      style={{ background: `${COLOR}12`, color: COLOR }}
                    >
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0F0F18] text-xl mb-4">
                        Consolidation automatique
                      </h3>
                      <p className="text-[#71718A] text-base leading-relaxed mb-5">
                        L'Agent DAF travaille sans manipulation humaine :
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {[
                          "Agrège multi-entités",
                          "Harmonise les plans comptables",
                          "Reconstruit le P&L consolidé",
                          "Calcule cash-flow & BFR",
                          "Met à jour les KPIs clés",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 rounded-xl border border-[#E4E4EF] p-4 text-base text-[#71718A] bg-[#F8F8FC]"
                          >
                            <CheckIcon size={5} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Étape 3 */}
              <FadeIn delay={0.15}>
                <div className="bg-white rounded-2xl border border-[#E4E4EF] p-8 lg:p-10 hover:border-[rgba(79,110,247,0.25)] hover:shadow-md hover:shadow-black/[0.04] transition-all">
                  <div className="flex items-start gap-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base shrink-0"
                      style={{ background: `${COLOR}12`, color: COLOR }}
                    >
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0F0F18] text-xl mb-4">
                        Analyse des écarts intelligente
                      </h3>
                      <p className="text-[#71718A] text-base leading-relaxed mb-5">
                        Pour chaque ligne significative :
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                        {[
                          "Écart vs Budget",
                          "Écart vs N-1",
                          "Écart en % et en valeur",
                          "Identification automatique des causes probables",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 rounded-xl border border-[#E4E4EF] p-4 text-base text-[#71718A] bg-[#F8F8FC]"
                          >
                            <ArrowIcon size={5} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div
                        className="rounded-xl p-5 border text-base italic text-[#71718A] leading-relaxed"
                        style={{
                          background: `${COLOR}06`,
                          borderColor: `${COLOR}20`,
                        }}
                      >
                        <span className="font-semibold not-italic text-[#0F0F18] block mb-2 text-xs uppercase tracking-wide">
                          Exemple généré automatiquement
                        </span>
                        «La marge brute diminue de 4,2% vs budget, principalement liée à une
                        hausse des coûts matières sur la BU Industrie (+8%).»
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Étape 4 */}
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl border border-[#E4E4EF] p-8 lg:p-10 hover:border-[rgba(79,110,247,0.25)] hover:shadow-md hover:shadow-black/[0.04] transition-all">
                  <div className="flex items-start gap-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base shrink-0"
                      style={{ background: `${COLOR}12`, color: COLOR }}
                    >
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0F0F18] text-xl mb-4">
                        Interroge les données pour approfondir l'analyse
                      </h3>
                      <p className="text-[#71718A] text-base leading-relaxed mb-5">
                        En langage naturel, posez vos questions directement à l'agent. Il génère instantanément un commentaire exécutif prêt pour le CODIR :
                      </p>
                      <div
                        className="rounded-xl p-5 border text-sm text-[#71718A] leading-relaxed"
                        style={{
                          background: `${COLOR}06`,
                          borderColor: `${COLOR}20`,
                        }}
                      >
                        <span className="font-semibold not-italic text-[#0F0F18] block mb-3 text-xs uppercase tracking-wide">
                          💬 Commentaire exécutif — Style COMEX
                        </span>
                        <p className="italic">
                          Performance exceptionnelle du Groupe avec un CA YTD de €71,8M (+33% vs budget) porté par l'accélération des activités SaaS et Services. La marge brute consolidée atteint 76,7% contre 40,4% budgété, témoignant de l'efficacité de notre stratégie de montée en gamme. L'EBITDA de €58,3M confirme notre capacité de génération de cash opérationnel. Attention néanmoins à la dégradation de la trésorerie (€1,4M vs €4,2M en début d'année) et aux tensions clients avec €1,16M d'impayés. L'entité ES01 présente des pertes structurelles nécessitant un plan d'action immédiat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* ── Démo Arcade ── */}
        <Section className="bg-white border-t border-[#E4E4EF]">
          <Container>
            <FadeIn>
              <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-2">
                🎬 Démo interactive
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0F0F18] mb-3">
                Voyez l'Agent DAF en action
              </h2>
              <p className="text-[#71718A] text-base leading-relaxed mb-8 max-w-xl">
                Générez un dashboard financier consolidé à partir de vos fichiers — en quelques minutes.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-[#E4E4EF] overflow-hidden shadow-sm">
                <ArcadeEmbed />
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* ── CTA ── */}
        <Section className="bg-[#F8F8FC] border-t border-[#E4E4EF]">
          <Container>
            <FadeIn className="bg-white rounded-3xl border border-[#E4E4EF] p-12 text-center max-w-2xl mx-auto shadow-sm relative overflow-hidden">
              <div
                className="absolute inset-x-0 top-0 h-1 rounded-t-3xl"
                style={{
                  background: `linear-gradient(to right, ${COLOR}, #8B5CF6)`,
                }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                style={{ background: `${COLOR}12` }}
              >
                💼
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0F0F18] mb-4">
                Prêt à récupérer 2 à 3 jours par mois ?
              </h2>
              <p className="text-[#71718A] mb-8 text-base leading-relaxed">
                En 2h de diagnostic, on identifie ensemble comment déployer
                l'Agent DAF sur votre environnement et l'impact attendu.
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
