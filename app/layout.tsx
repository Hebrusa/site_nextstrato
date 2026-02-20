import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nextstrato AI — Plateforme d'agents IA pour ETI & PME",
  description:
    "Une plateforme d'agents IA prêts à l'emploi, calibrés sur vos processus métier et connectés à vos systèmes cœurs — déployée avec vous, du diagnostic à l'adoption.",
  keywords: "agents IA, ETI, PME, automatisation, transformation digitale, intelligence artificielle",
  authors: [{ name: "NextStrato" }],
  openGraph: {
    title: "Nextstrato AI — Plateforme d'agents IA pour ETI & PME",
    description:
      "Vos équipes augmentées. Vos systèmes connectés. Vos résultats mesurés.",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased bg-white text-[#0F0F18]`}>
        {children}
      </body>
    </html>
  );
}
