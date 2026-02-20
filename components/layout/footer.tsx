import { Container } from "@/components/ui/container";
import Link from "next/link";

const footerLinks = {
  platform: {
    title: "Plateforme",
    links: [
      { label: "Agents métier", href: "/agents" },
      { label: "Intégrations", href: "/#integrations" },
      { label: "Sécurité & RGPD", href: "/securite" },
        ],
  },
  approche: {
    title: "Approche",
    links: [
      { label: "Diagnostic 360°", href: "/approche#diagnostic" },
      { label: "Déploiement", href: "/approche#deploiement" },
      { label: "Accompagnement", href: "/approche#accompagnement" },
      { label: "Mesure d'impact", href: "/approche#mesure" },
    ],
  },
  company: {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Réserver un diagnostic", href: "/contact" },
      { label: "Mentions légales", href: "/mentions-legales" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t border-[#E4E4EF] py-16 bg-[#F8F8FC]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F6EF7] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-sm">
                N
              </div>
              <span className="font-semibold text-[#0F0F18] text-[15px] tracking-tight">
                nextstrato <span className="gradient-text">ai</span>
              </span>
            </Link>
            <p className="text-[#71718A] text-sm leading-relaxed">
              La plateforme d'agents IA pour les ETI & PME françaises.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-white border border-[#E4E4EF] flex items-center justify-center text-[#71718A] hover:text-[#4F6EF7] hover:border-[#4F6EF7] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.title}>
              <h4 className="text-[#0F0F18] font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[#71718A] text-sm hover:text-[#4F6EF7] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#E4E4EF] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-[#71718A] text-sm">© 2026 NextStrato. Tous droits réservés.</p>
            <Link href="/mentions-legales" className="text-[#71718A] text-sm hover:text-[#4F6EF7] transition-colors">
              Mentions légales
            </Link>
          </div>
          <div className="flex items-center gap-2 text-[#71718A] text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            Tous les systèmes opérationnels
          </div>
        </div>
      </Container>
    </footer>
  );
}
