import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container, Section } from "@/components/ui/container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sécurité & RGPD — Nextstrato AI",
  description:
    "Nextstrato AI est conçu pour répondre aux exigences de sécurité des ETI & PME : hébergement européen, propriété des données, authentification forte, audit complet.",
};

const principles = [
  {
    id: "propriete",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: "#4F6EF7",
    title: "Propriété intégrale de vos données",
    tagline: "Vos données vous appartiennent. Point.",
    description:
      "Nextstrato AI ne revendique aucun droit sur vos données métier. Elles ne sont jamais utilisées pour entraîner des modèles tiers, ne sont jamais partagées, et vous pouvez en demander la suppression complète à tout moment.",
    points: [
      "Aucune utilisation de vos données à des fins d'entraînement IA",
      "Export complet de vos données sur simple demande",
      "Suppression garantie sous 30 jours à la résiliation",
      "Contrat de traitement des données (DPA) inclus",
    ],
  },
  {
    id: "authentification",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    color: "#8B5CF6",
    title: "Authentification forte & SSO",
    tagline: "Accès sécurisé à chaque connexion.",
    description:
      "L'accès à la plateforme est protégé par une authentification multi-facteurs (MFA) obligatoire. L'intégration SSO permet de connecter Nextstrato AI à votre annuaire d'entreprise existant — sans gestion de mots de passe supplémentaire.",
    points: [
      "MFA obligatoire pour tous les comptes",
      "SSO via SAML 2.0 / OpenID Connect (Azure AD, Okta, Google Workspace)",
      "Sessions à durée limitée avec expiration automatique",
      "Politique de mots de passe configurables par l'administrateur",
    ],
  },
  {
    id: "hebergement",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z" />
      </svg>
    ),
    color: "#0891b2",
    title: "Hébergement 100 % européen",
    tagline: "Vos données restent en Europe. Toujours.",
    description:
      "L'ensemble de l'infrastructure Nextstrato AI est hébergée sur des datacenters certifiés ISO 27001 situés en France et en Union européenne. Aucun transfert de données vers des pays tiers. Conformité RGPD native.",
    points: [
      "Datacenters en France (Paris) et UE",
      "Certifications ISO 27001 et SOC 2 Type II",
      "Aucun transfert hors UE — pas de Cloud Act américain",
      "Conformité RGPD, DORA et NIS2 intégrée",
    ],
  },
  {
    id: "audit",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    color: "#059669",
    title: "Audit & traçabilité complète",
    tagline: "Chaque action est enregistrée et consultable.",
    description:
      "Nextstrato AI journalise l'intégralité des actions effectuées sur la plateforme : connexions, requêtes aux agents, accès aux données, modifications de configuration. Les logs sont immuables, horodatés et exportables.",
    points: [
      "Journal d'audit exhaustif et immuable",
      "Horodatage certifié de chaque événement",
      "Rétention des logs configurable (1 an par défaut, 7 ans sur option)",
      "Export des logs en temps réel vers votre SIEM (Splunk, Elastic, etc.)",
    ],
  },
  {
    id: "permissions",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: "#d97706",
    title: "Contrôle granulaire des permissions",
    tagline: "Chaque collaborateur accède uniquement à ce dont il a besoin.",
    description:
      "Le modèle RBAC (Role-Based Access Control) de Nextstrato AI vous permet de définir précisément qui peut accéder à quels agents, quelles données et quelles fonctionnalités — au niveau de l'équipe, du département ou de l'utilisateur individuel.",
    points: [
      "Rôles prédéfinis (Admin, Manager, Utilisateur, Lecture seule)",
      "Permissions par agent, par source de données, par action",
      "Groupes d'utilisateurs synchronisés avec votre annuaire (AD/LDAP)",
      "Révocation d'accès instantanée en cas de départ ou de changement de rôle",
    ],
  },
];

const certifications = [
  { label: "ISO 27001", desc: "Sécurité de l'information" },
  { label: "SOC 2 Type II", desc: "Contrôles de sécurité" },
  { label: "RGPD", desc: "Conformité européenne" },
  { label: "HDS", desc: "Hébergement de données" },
];

export default function SecuritePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">
        {/* Hero */}
        <Section className="pb-16 border-b border-[#E4E4EF]">
          <Container>
            <div className="max-w-3xl">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#EEF1FE] border border-[#D5DCFC] rounded-full text-[#4F6EF7] text-xs font-semibold mb-6">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  Sécurité & RGPD
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#0F0F18] mb-5 leading-tight">
                  Conçu pour les exigences
                  <br />
                  des entreprises françaises.
                </h1>
                <p className="text-[#71718A] text-lg leading-relaxed mb-10 max-w-2xl">
                  Déployer l'IA en entreprise implique des responsabilités. Nextstrato AI est
                  construit sur des fondations de sécurité solides pour que vous puissiez
                  avancer en confiance — avec vos équipes, votre DSI et votre DPO.
                </p>

                {/* Certifications */}
                <div className="flex flex-wrap gap-3">
                  {certifications.map((c) => (
                    <div key={c.label} className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-[#E4E4EF] rounded-xl shadow-sm shadow-black/[0.02]">
                      <svg className="w-4 h-4 text-[#4F6EF7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
                      </svg>
                      <div>
                        <span className="text-[#0F0F18] text-sm font-semibold">{c.label}</span>
                        <span className="text-[#71718A] text-xs ml-1.5">{c.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Principles */}
        <Section className="bg-[#F8F8FC]">
          <Container>
            <StaggerContainer className="space-y-5">
              {principles.map((p) => (
                <StaggerItem key={p.id}>
                  <div
                    id={p.id}
                    className="bg-white rounded-2xl border border-[#E4E4EF] p-8 hover:border-[rgba(79,110,247,0.25)] hover:shadow-md hover:shadow-black/[0.04] transition-all scroll-mt-28"
                  >
                    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
                      {/* Left */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: `${p.color}12`, color: p.color }}
                          >
                            {p.icon}
                          </div>
                          <div>
                            <h2 className="text-[#0F0F18] font-bold text-xl leading-tight">{p.title}</h2>
                            <p className="text-sm font-medium mt-0.5" style={{ color: p.color }}>
                              {p.tagline}
                            </p>
                          </div>
                        </div>
                        <p className="text-[#71718A] text-sm leading-relaxed">{p.description}</p>
                      </div>

                      {/* Right — checklist */}
                      <div
                        className="rounded-xl p-5"
                        style={{ background: `${p.color}06`, border: `1px solid ${p.color}18` }}
                      >
                        <ul className="space-y-3">
                          {p.points.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                              <div
                                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                style={{ background: `${p.color}15` }}
                              >
                                <svg
                                  className="w-3 h-3"
                                  style={{ color: p.color }}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2.5}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-[#0F0F18] text-sm leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </Section>

        {/* Shared responsibility */}
        <Section className="bg-white border-t border-[#E4E4EF]">
          <Container>
            <FadeIn className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-4">
                  Modèle de responsabilité partagée
                </p>
                <h2 className="text-3xl font-bold text-[#0F0F18] mb-5 leading-tight">
                  Vous gardez le contrôle.
                  <br />
                  Nous gérons l'infrastructure.
                </h2>
                <p className="text-[#71718A] leading-relaxed mb-6">
                  Nextstrato AI opère selon un modèle de responsabilité partagée clair :
                  nous sécurisons l'infrastructure, les accès et les données au repos.
                  Vous définissez les politiques d'usage, les permissions et la gouvernance interne.
                </p>
                <p className="text-[#71718A] leading-relaxed">
                  Notre équipe sécurité est disponible pour accompagner votre DSI dans
                  la phase d'intégration — revue d'architecture, questionnaires de sécurité,
                  analyse de risques.
                </p>
              </div>

              {/* Responsibility table */}
              <div className="bg-[#F8F8FC] rounded-2xl border border-[#E4E4EF] overflow-hidden">
                <div className="grid grid-cols-3 bg-white border-b border-[#E4E4EF] px-5 py-3">
                  <span className="text-[#71718A] text-xs font-semibold uppercase tracking-wider">Domaine</span>
                  <span className="text-[#0F0F18] text-xs font-semibold uppercase tracking-wider text-center">Nextstrato</span>
                  <span className="text-[#0F0F18] text-xs font-semibold uppercase tracking-wider text-center">Client</span>
                </div>
                {[
                  { domain: "Infrastructure cloud", nextstrato: true, client: false },
                  { domain: "Chiffrement des données", nextstrato: true, client: false },
                  { domain: "Certifications sécurité", nextstrato: true, client: false },
                  { domain: "Gestion des utilisateurs", nextstrato: true, client: true },
                  { domain: "Politiques d'accès", nextstrato: false, client: true },
                  { domain: "Gouvernance des données", nextstrato: false, client: true },
                  { domain: "Formation des équipes", nextstrato: true, client: true },
                ].map((row, i) => (
                  <div
                    key={row.domain}
                    className={`grid grid-cols-3 px-5 py-3 items-center ${i % 2 === 0 ? "bg-white" : "bg-[#F8F8FC]"}`}
                  >
                    <span className="text-[#0F0F18] text-sm">{row.domain}</span>
                    <div className="flex justify-center">
                      {row.nextstrato ? (
                        <svg className="w-4 h-4 text-[#4F6EF7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="w-4 h-4 flex items-center justify-center">
                          <span className="w-3 h-px bg-[#E4E4EF] block" />
                        </span>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {row.client ? (
                        <svg className="w-4 h-4 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="w-4 h-4 flex items-center justify-center">
                          <span className="w-3 h-px bg-[#E4E4EF] block" />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* CTA DSI */}
        <Section className="bg-[#F8F8FC] border-t border-[#E4E4EF]">
          <Container>
            <FadeIn className="bg-white rounded-3xl border border-[#E4E4EF] p-10 md:p-14 text-center max-w-2xl mx-auto shadow-sm relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F6EF7] to-[#8B5CF6] rounded-t-3xl" />
              <div className="w-12 h-12 rounded-2xl bg-[#EEF1FE] border border-[#D5DCFC] flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-[#4F6EF7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#0F0F18] mb-3">
                Questions sécurité pour votre DSI ?
              </h2>
              <p className="text-[#71718A] text-sm leading-relaxed mb-8 max-w-md mx-auto">
                Notre équipe technique répond à vos questionnaires de sécurité, organise des revues
                d'architecture et accompagne votre DSI dans la phase d'intégration.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Contacter l'équipe technique
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </FadeIn>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
