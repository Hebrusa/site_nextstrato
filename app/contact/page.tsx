import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réserver un diagnostic — Nextstrato AI",
  description: "Diagnostic gratuit de 2h. Identifiez vos 3 premières zones à automatiser avec l'IA.",
};

const benefits = [
  "Cartographie rapide de vos processus les plus chronophages",
  "Identification de vos 3 premiers cas d'usage à fort ROI",
  "Estimation du gain potentiel (temps, coût)",
  "Roadmap indicative sur 6 mois",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-[#F8F8FC]">
        <Section>
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <FadeIn>
                <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-4">
                  Diagnostic gratuit
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#0F0F18] mb-5 leading-tight">
                  Démarrons par
                  <br />
                  un diagnostic.
                </h1>
                <p className="text-[#71718A] text-lg leading-relaxed mb-10">
                  2 heures. Gratuit. Sans engagement. On identifie ensemble vos 3 premières
                  zones à automatiser avec l'IA.
                </p>

                <div className="space-y-4 mb-10">
                  <p className="text-[#0F0F18] font-semibold text-sm">Ce que vous obtenez :</p>
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EEF1FE] border border-[#D5DCFC] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#4F6EF7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-[#71718A] text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>

                {/* Social proof */}
                <div className="p-5 bg-white rounded-2xl border border-[#E4E4EF] shadow-sm">
                  <p className="text-[#0F0F18] text-sm font-medium italic mb-3">
                    "On hésitait à se lancer, on pensait que ça prendrait des mois.
                    Le premier agent était opérationnel en 3 semaines."
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4F6EF7] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-xs">D</div>
                    <div>
                      <p className="text-[#0F0F18] text-xs font-semibold">DRH</p>
                      <p className="text-[#71718A] text-xs">Groupe de services · 1 200 collaborateurs</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Right — Form */}
              <FadeIn delay={0.15}>
                <ContactForm />
              </FadeIn>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
