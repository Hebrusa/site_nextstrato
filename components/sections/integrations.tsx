"use client";

import { Container, Section } from "@/components/ui/container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

/* ─── SVG Logos ──────────────────────────────────────────────────────── */

function LogoSAP() {
  return (
    <svg viewBox="0 0 24 24" fill="#0FAAFF" className="w-5 h-5">
      <path d="M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.758 1.32c-.625-.298-1.252-.44-1.847-.44-.672 0-1.03.234-1.03.6 0 .44.49.585 1.1.756l.45.126c1.2.33 2.01.867 2.01 2.01 0 1.37-1.09 2.106-2.61 2.106-1.025 0-2.063-.302-2.847-.81l.77-1.34c.628.407 1.334.64 2.02.64.71 0 1.13-.245 1.13-.667 0-.416-.447-.568-1.09-.752l-.47-.137C1.53 11.995.71 11.44.71 10.245c0-1.26 1.02-1.973 2.554-1.973zm5.4.08h1.806l2.49 6.384h-1.81l-.43-1.19H8.583l-.43 1.19H6.39zm.9 1.79l-.71 1.99h1.42zm5.185-1.79h2.544c1.557 0 2.47.73 2.47 1.98 0 1.337-.97 2.06-2.57 2.06h-.69v2.344h-1.754zm1.754 1.35v1.37h.63c.6 0 .908-.25.908-.69 0-.43-.307-.68-.908-.68z" />
    </svg>
  );
}

function LogoSage() {
  return (
    <svg viewBox="0 0 24 24" fill="#00D639" className="w-5 h-5">
      <path d="M2.702 5.316C1.167 5.316 0 6.48 0 7.972c0 1.635 1.167 2.267 2.46 2.655 1.224.387 1.79.548 1.79 1.124 0 .468-.387.8-.936.8-.778 0-1.635-.428-2.25-.97L0 12.748c.68.63 1.732 1.07 2.944 1.07 1.79 0 2.88-.986 2.88-2.427 0-1.57-.986-2.233-2.443-2.67-1.135-.355-1.78-.548-1.78-1.06 0-.42.355-.71.888-.71.645 0 1.376.29 1.925.742l.968-1.135c-.58-.58-1.538-.984-2.68-.984v.001zM8.39 8.39h-1.67v5.36h1.67V8.39zm3.44 0h-1.67v5.36h1.67V8.39zm-1.83-1.68c.6 0 1.085-.484 1.085-1.085S10.6 4.54 10 4.54s-1.085.484-1.085 1.085.485 1.085 1.085 1.085zm7.25 1.68H15.6l-2.185 5.36h1.696l.42-1.135h2.25l.42 1.135h1.713l-2.185-5.36h.001zm-.9 1.325l.742 1.99h-1.47l.728-1.99zm6.65-1.325h-1.67v5.36h1.67V8.39zm-1.83-1.68c.6 0 1.085-.484 1.085-1.085s-.485-1.085-1.085-1.085-1.085.484-1.085 1.085.485 1.085 1.085 1.085z" />
    </svg>
  );
}

function LogoSalesforce() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M10.005 3.32a4.55 4.55 0 0 1 3.248 1.364A4.69 4.69 0 0 1 16.76 3.8a4.724 4.724 0 0 1 4.592 3.606 3.917 3.917 0 0 1 2.368 3.6 3.907 3.907 0 0 1-1.848 3.32 3.684 3.684 0 0 1 .16 1.08 3.72 3.72 0 0 1-3.72 3.72 3.68 3.68 0 0 1-1.1-.168 3.12 3.12 0 0 1-2.9 1.96 3.09 3.09 0 0 1-2.208-.92 4.14 4.14 0 0 1-2.384.752 4.16 4.16 0 0 1-3.784-2.432 3.32 3.32 0 0 1-.52.04A3.36 3.36 0 0 1 2.16 14.96a3.327 3.327 0 0 1 .632-1.96 3.08 3.08 0 0 1-.56-1.8 3.12 3.12 0 0 1 2.16-2.96 4.36 4.36 0 0 1-.08-.84 4.36 4.36 0 0 1 4.36-4.36 4.33 4.33 0 0 1 1.333.28z" fill="#00A1E0"/>
    </svg>
  );
}

function LogoHubSpot() {
  return (
    <svg viewBox="0 0 24 24" fill="#FF7A59" className="w-5 h-5">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.194v.067a2.198 2.198 0 001.267 1.978V7.93a6.232 6.232 0 00-2.932 1.345L5.98 3.53a2.44 2.44 0 10-1.157 1.515l7.22 5.67a6.26 6.26 0 00-.791 3.054 6.26 6.26 0 00.822 3.095l-2.017 2.016a1.94 1.94 0 00-.56-.087 1.975 1.975 0 101.975 1.975 1.94 1.94 0 00-.087-.56l1.99-1.99a6.283 6.283 0 004.404 1.812c3.465 0 6.278-2.813 6.278-6.278a6.284 6.284 0 00-3.893-5.822zm-1.056 9.545a3.113 3.113 0 01-3.109-3.11 3.113 3.113 0 013.11-3.108 3.113 3.113 0 013.109 3.109 3.113 3.113 0 01-3.11 3.109z" />
    </svg>
  );
}

function LogoPipedrive() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <circle cx="12" cy="9" r="5" fill="#017737"/>
      <rect x="10.5" y="14" width="3" height="7" rx="1.5" fill="#017737"/>
      <circle cx="12" cy="9" r="2.5" fill="white"/>
    </svg>
  );
}

function LogoLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LogoJira() {
  return (
    <svg viewBox="0 0 24 24" fill="#0052CC" className="w-5 h-5">
      <path d="M11.571 11.513H0a5.218 5.218 0 005.232 5.215h2.13v2.057A5.215 5.215 0 0012.575 24V12.518a1.005 1.005 0 00-1.004-1.005zm5.723-5.756H5.757a5.215 5.215 0 005.215 5.214h2.129v2.058a5.218 5.218 0 005.215 5.214V6.762a1.005 1.005 0 00-1.022-1.005zM23.013 0H11.455a5.215 5.215 0 005.215 5.215h2.129v2.057A5.215 5.215 0 0024 12.483V1.005A1.001 1.001 0 0023.013 0z" />
    </svg>
  );
}

function LogoServiceNow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <circle cx="12" cy="12" r="11" fill="#62D84E"/>
      <path d="M7 12.5l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LogoMonday() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <ellipse cx="5.5" cy="15" rx="3.5" ry="4" fill="#FF3750"/>
      <ellipse cx="12" cy="15" rx="3.5" ry="4" fill="#FFCB00"/>
      <ellipse cx="18.5" cy="15" rx="3.5" ry="4" fill="#00CA72"/>
    </svg>
  );
}

function LogoAsana() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <circle cx="12" cy="6.5" r="4" fill="#F06A6A"/>
      <circle cx="5.5" cy="16" r="4" fill="#F06A6A"/>
      <circle cx="18.5" cy="16" r="4" fill="#F06A6A"/>
    </svg>
  );
}

function LogoTeams() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <rect x="1" y="7" width="15" height="13" rx="2" fill="#6264A7"/>
      <rect x="13" y="4" width="10" height="10" rx="2" fill="#6264A7"/>
      <circle cx="18" cy="4" r="3" fill="#6264A7"/>
      <text x="5" y="17" fontSize="7" fill="white" fontWeight="bold" fontFamily="sans-serif">T</text>
      <text x="15" y="12" fontSize="5" fill="white" fontWeight="bold" fontFamily="sans-serif">T</text>
    </svg>
  );
}

function LogoSharePoint() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <circle cx="9" cy="9" r="8" fill="#038387"/>
      <circle cx="9" cy="9" r="5" fill="#1EAFB5"/>
      <circle cx="9" cy="9" r="2.5" fill="white"/>
      <rect x="13" y="11" width="10" height="12" rx="2" fill="#038387" opacity="0.85"/>
    </svg>
  );
}

function LogoPowerBI() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <rect x="1" y="13" width="5" height="10" rx="1" fill="#F2C811"/>
      <rect x="8" y="8" width="5" height="15" rx="1" fill="#F2C811" opacity="0.8"/>
      <rect x="15" y="3" width="5" height="20" rx="1" fill="#F2C811" opacity="0.6"/>
    </svg>
  );
}

function LogoDocuSign() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <rect x="3" y="2" width="15" height="19" rx="2" fill="#FFBE14"/>
      <rect x="3" y="2" width="15" height="19" rx="2" fill="#FFD166"/>
      <path d="M6 7h9M6 10h9M6 13h6" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 17l2 2 4-4" stroke="#2C7A2C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LogoNotion() {
  return (
    <svg viewBox="0 0 24 24" fill="#000000" className="w-5 h-5">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
    </svg>
  );
}

function LogoGoogleDrive() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M12 2L2 19h7l3-5.5L15 19h7L12 2z" fill="#4285F4"/>
      <path d="M2 19l5-8.5 5 8.5H2z" fill="#0F9D58"/>
      <path d="M17 19l-5-8.5 5-8.5 5 8.5-5 8.5z" fill="#FBBC04"/>
    </svg>
  );
}

function LogoSlack() {
  return (
    <svg viewBox="0 0 24 24" fill="#4A154B" className="w-5 h-5">
      <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.165 0a2.528 2.528 0 012.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.165 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.313A2.527 2.527 0 0124 15.165a2.528 2.528 0 01-2.522 2.523h-6.313z" />
    </svg>
  );
}

function LogoGoogle() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
    </svg>
  );
}

function LogoMicrosoft() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path d="M11.4 24H0V12.6h11.4V24z" fill="#F25022"/>
      <path d="M24 24H12.6V12.6H24V24z" fill="#00A4EF"/>
      <path d="M11.4 11.4H0V0h11.4v11.4z" fill="#7FBA00"/>
      <path d="M24 11.4H12.6V0H24v11.4z" fill="#FFB900"/>
    </svg>
  );
}

/** Monogram pour les marques sans logo SVG connu */
function Monogram({ label, color, bg }: { label: string; color: string; bg: string }) {
  return (
    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0" style={{ background: bg, color }}>
      {label}
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────── */

const categories = [
  {
    label: "ERP & Finance",
    color: "#4F6EF7",
    tools: [
      { name: "SAP",        logo: <LogoSAP /> },
      { name: "Sage",       logo: <LogoSage /> },
      { name: "Cegid",      logo: <Monogram label="CG" color="#E31E24" bg="#FDE8E8" /> },
      { name: "Pennylane",  logo: <Monogram label="PL" color="#1C1C3C" bg="#E8E8F0" /> },
      { name: "Power BI",   logo: <LogoPowerBI /> },
      { name: "...",        logo: <Monogram label="..." color="#4F6EF7" bg="#EEF1FE" /> },
    ],
  },
  {
    label: "RH & SIRH",
    color: "#8B5CF6",
    tools: [
      { name: "Silae",      logo: <Monogram label="SL" color="#003082" bg="#E0E8FF" /> },
      { name: "Payfit",     logo: <Monogram label="PF" color="#1565C0" bg="#E3EEFF" /> },
      { name: "Lucca",      logo: <Monogram label="LC" color="#F25A26" bg="#FEE9E0" /> },
      { name: "BambooHR",   logo: <Monogram label="BR" color="#73AC39" bg="#EAF5DC" /> },
      { name: "Workday",    logo: <Monogram label="WD" color="#F3421C" bg="#FEE8E3" /> },
      { name: "...",        logo: <Monogram label="..." color="#8B5CF6" bg="#F3EEFE" /> },
    ],
  },
  {
    label: "CRM & Sales",
    color: "#0891b2",
    tools: [
      { name: "Salesforce", logo: <LogoSalesforce /> },
      { name: "HubSpot",    logo: <LogoHubSpot /> },
      { name: "Pipedrive",  logo: <LogoPipedrive /> },
      { name: "LinkedIn",   logo: <LogoLinkedIn /> },
      { name: "...",        logo: <Monogram label="..." color="#0891b2" bg="#E0F4F8" /> },
    ],
  },
  {
    label: "Collaboration",
    color: "#059669",
    tools: [
      { name: "Google W.",      logo: <LogoGoogle /> },
      { name: "Microsoft 365",  logo: <LogoMicrosoft /> },
      { name: "Slack",          logo: <LogoSlack /> },
      { name: "Teams",          logo: <LogoTeams /> },
      { name: "...",            logo: <Monogram label="..." color="#059669" bg="#E0F5EE" /> },
    ],
  },
  {
    label: "Ops & Projet",
    color: "#d97706",
    tools: [
      { name: "Jira",        logo: <LogoJira /> },
      { name: "ServiceNow",  logo: <LogoServiceNow /> },
      { name: "Monday",      logo: <LogoMonday /> },
      { name: "Asana",       logo: <LogoAsana /> },
      { name: "...",         logo: <Monogram label="..." color="#d97706" bg="#FEF3E0" /> },
    ],
  },
  {
    label: "GED & Docs",
    color: "#dc2626",
    tools: [
      { name: "SharePoint",    logo: <LogoSharePoint /> },
      { name: "Notion",        logo: <LogoNotion /> },
      { name: "DocuSign",      logo: <LogoDocuSign /> },
      { name: "Google Drive",  logo: <LogoGoogleDrive /> },
      { name: "...",           logo: <Monogram label="..." color="#dc2626" bg="#FEE8E8" /> },
    ],
  },
];

/* ─── Tool chip ──────────────────────────────────────────────────────── */
function ToolChip({ name, logo }: { name: string; logo: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 bg-white border border-[#E4E4EF] rounded-xl px-3 py-2.5 hover:border-[#4F6EF7] hover:shadow-sm transition-all cursor-default group">
      <div className="w-6 h-6 flex items-center justify-center shrink-0">{logo}</div>
      <span className="text-[#0F0F18] text-sm font-medium whitespace-nowrap group-hover:text-[#4F6EF7] transition-colors">
        {name}
      </span>
    </div>
  );
}

/* ─── Marquee row ────────────────────────────────────────────────────── */
function MarqueeRow({ tools, reverse = false }: { tools: typeof categories[0]["tools"]; reverse?: boolean }) {
  const doubled = [...tools, ...tools, ...tools, ...tools];
  return (
    <div className="overflow-hidden py-1.5">
      <motion.div
        className="flex gap-3 shrink-0 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((t, i) => (
          <ToolChip key={i} name={t.name} logo={t.logo} />
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────────────────── */
export function Integrations() {
  return (
    <Section id="integrations" className="bg-white border-t border-[#E4E4EF]">
      <Container>
        <FadeIn className="text-center mb-14">
          <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-3">
            Intégrations
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0F18] mb-4 leading-tight">
            Connecté à vos outils du quotidien
          </h2>
          <p className="text-[#71718A] text-lg max-w-xl mx-auto">
            Nextstrato AI ne remplace pas vos systèmes. Il les fait parler ensemble — et les rend intelligents.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {categories.map((cat) => (
            <StaggerItem key={cat.label}>
              <div className="bg-[#F8F8FC] rounded-2xl border border-[#E4E4EF] p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-4 rounded-full" style={{ background: cat.color }} />
                  <span className="text-[#0F0F18] text-sm font-semibold">{cat.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool) => (
                    <ToolChip key={tool.name} name={tool.name} logo={tool.logo} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

    </Section>
  );
}
