import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container, Section } from "@/components/ui/container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Nextstrato AI",
  description:
    "Nextstrato AI est fondé par d'anciens consultants en transformation digitale convaincus qu'une IA bien déployée change vraiment le quotidien des équipes.",
};

/* ─── Team data ──────────────────────────────────────────────────────── */
const team = [
  {
    name: "Lionel MEYRONIN",
    role: "Co-fondateur & CEO",
    photo: "/team/Lionel.jpg",
    bio: "20 ans en transformation digitale chez de grands cabinets de conseil. A accompagné + de 40 projets de digitalisation pour des ETI et groupes industriels avant de fonder Nextstrato.",
    linkedin: "https://www.linkedin.com/in/lionel-meyronin-a01a351/",
    initials: "PN",
    color: "#4F6EF7",
  },
    {
    name: "Prénom Nom",
    role: "Co-fondateur",
    photo: "/team/placeholder.jpg",
    bio: "xxx",
    linkedin: "https://linkedin.com/in/",
    initials: "PN",
    color: "#0891b2",
  },
  
];

const values = [
  {
    icon: "🎯",
    title: "Pragmatisme avant tout",
    description:
      "Pas de POC qui ne débouche sur rien. Pas de slides sans livrables. On démarre par un diagnostic honnête et on ne déploie que ce qui crée vraiment de la valeur mesurable.",
  },
  {
    icon: "🤝",
    title: "Partenaire, pas prestataire",
    description:
      "On reste présents du diagnostic à l'adoption. On forme vos équipes, on mesure l'impact, on itère. Le succès de vos agents, c'est notre succès.",
  },
  {
    icon: "🔍",
    title: "Transparence totale",
    description:
      "Nos méthodes, nos limites, nos résultats — tout est documenté et partagé. Vous savez exactement ce que font vos agents, pourquoi, et comment les améliorer.",
  },
  {
    icon: "FR",
    title: "Ancrage français & européen",
    description:
      "Fondé en France, hébergé en Europe, conçu pour les ETI et PME françaises. On connaît vos contraintes réglementaires, vos outils et votre culture d'entreprise.",
  },
];

const milestones = [
  { year: "2025", label: "Fondation", desc: "Nextstrato naît de la conviction que l'IA doit être accessible et pragmatique pour les entreprises du mid-market." },
  { year: "2026", label: "Premiers agents", desc: "Déploiement des premiers agents DAF et RH chez 3 ETI pilotes. 100% d'adoption à 3 mois." },
  
];

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">

        {/* ── Hero ── */}
        <Section className="pb-0 border-b border-[#E4E4EF]">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-4">
                  Notre histoire
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#0F0F18] mb-6 leading-tight">
                  Construire l'IA qui
                  <br />
                  <span className="gradient-text">change vraiment</span>
                  <br />
                  le quotidien des équipes.
                </h1>
                <p className="text-[#71718A] text-lg leading-relaxed mb-6">
                  Nextstrato AI est né d'une frustration partagée par ses fondateurs après des années
                  de conseil en transformation digitale : trop de projets IA bien intentionnés qui
                  n'aboutissaient pas, faute de pragmatisme et d'ancrage dans les réalités métier.
                </p>
                <p className="text-[#71718A] text-lg leading-relaxed">
                  On a fondé Nextstrato avec une conviction simple — <strong className="text-[#0F0F18]">l'IA n'a de valeur
                  que si elle est utilisée</strong>. Pas un outil de plus à installer
                  mais une transformation structurée, mesurable et accompagnée de bout en bout.
                </p>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "30+", label: "entreprises accompagnées", color: "#4F6EF7" },
                    { value: "5 000h", label: "économisées / mois", color: "#8B5CF6" },
                    { value: "6", label: "agents métier déployés", color: "#0891b2" },
                    { value: "< 4 sem.", label: "délai moyen de déploiement", color: "#059669" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-[#F8F8FC] rounded-2xl border border-[#E4E4EF] p-6"
                    >
                      <div className="text-3xl font-bold mb-1" style={{ color: s.color }}>
                        {s.value}
                      </div>
                      <div className="text-[#71718A] text-sm leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* ── Valeurs ── */}
        <Section className="bg-[#F8F8FC] border-b border-[#E4E4EF]">
          <Container>
            <FadeIn className="text-center mb-14">
              <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-3">
                Ce qui nous guide
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0F18] leading-tight">
                Nos valeurs
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="bg-white rounded-2xl border border-[#E4E4EF] p-6 h-full card-hover group">
                    <div className="text-3xl mb-4">{v.icon}</div>
                    <h3 className="text-[#0F0F18] font-semibold text-base mb-2 group-hover:text-[#4F6EF7] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-[#71718A] text-sm leading-relaxed">{v.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </Section>

        {/* ── Timeline ── */}
        <Section className="bg-white border-b border-[#E4E4EF]">
          <Container>
            <FadeIn className="text-center mb-14">
              <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-3">
                Notre parcours
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0F18] leading-tight">
                De l'idée à la plateforme
              </h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {milestones.map((m, i) => (
                <StaggerItem key={m.year}>
                  <div className="relative">
                    {/* Connector line */}
                    {i < milestones.length - 1 && (
                      <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-[#E4E4EF] z-0 -translate-y-px" style={{ width: "calc(100% - 3rem)" }} />
                    )}
                    <div className="bg-[#F8F8FC] rounded-2xl border border-[#E4E4EF] p-6 relative z-10">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#4F6EF7] to-[#8B5CF6] text-white font-bold text-sm mb-4">
                        {m.year}
                      </div>
                      <h3 className="text-[#0F0F18] font-semibold mb-2">{m.label}</h3>
                      <p className="text-[#71718A] text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </Section>

        {/* ── Équipe ── */}
        <Section className="bg-[#F8F8FC]">
          <Container>
            <FadeIn className="text-center mb-14">
              <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-3">
                L'équipe
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0F18] mb-4 leading-tight">
                Des consultants devenus bâtisseurs
              </h2>
              <p className="text-[#71718A] text-lg max-w-xl mx-auto">
                Une équipe qui connaît vos métiers de l'intérieur. Anciens consultants, directeurs opérationnels et experts sectoriels — nous construisons avec vous les cas d'usage IA qui ont du sens dans votre contexte.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((member) => (
                <StaggerItem key={member.name}>
                  <TeamCard member={member} />
                </StaggerItem>
              ))}
            </StaggerContainer>

          
          </Container>
        </Section>

        {/* ── CTA ── */}
        <Section className="bg-white border-t border-[#E4E4EF]">
          <Container>
            <FadeIn className="bg-white rounded-3xl border border-[#E4E4EF] p-10 md:p-14 text-center max-w-2xl mx-auto shadow-sm relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F6EF7] to-[#8B5CF6] rounded-t-3xl" />
              <h2 className="text-2xl font-bold text-[#0F0F18] mb-3">
                Travaillons ensemble.
              </h2>
              <p className="text-[#71718A] text-sm leading-relaxed mb-8 max-w-md mx-auto">
                Commencez par un diagnostic gratuit de 2h. On évalue ensemble le potentiel IA
                de votre organisation — sans engagement.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Réserver un diagnostic gratuit
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

/* ─── Team card component ────────────────────────────────────────────── */
function TeamCard({ member }: { member: typeof team[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E4E4EF] overflow-hidden card-hover group flex flex-col">
      {/* Photo */}
      <div className="relative aspect-square bg-[#F8F8FC] overflow-hidden">
        <PhotoOrPlaceholder member={member} />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[#0F0F18] font-semibold text-base mb-0.5">{member.name}</h3>
        <p className="text-sm font-medium mb-3" style={{ color: member.color }}>
          {member.role}
        </p>
        <p className="text-[#71718A] text-xs leading-relaxed flex-1">{member.bio}</p>

        {/* LinkedIn */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#0A66C2] hover:text-[#4F6EF7] transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Voir le profil LinkedIn
        </a>
      </div>
    </div>
  );
}

/* ─── Photo ou placeholder initiales ────────────────────────────────── */
function PhotoOrPlaceholder({ member }: { member: typeof team[0] }) {
  // Tente d'afficher la vraie photo — sinon fallback initiales
  // Pour activer : remplacez "/team/placeholder.jpg" par le vrai chemin dans le tableau team[]
  const hasRealPhoto = !member.photo.includes("placeholder");

  if (hasRealPhoto) {
    return (
      <Image
        src={member.photo}
        alt={member.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl"
        style={{ background: `linear-gradient(135deg, ${member.color}, #8B5CF6)` }}
      >
        {member.initials}
      </div>
    </div>
  );
}
