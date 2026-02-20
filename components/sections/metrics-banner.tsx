"use client";

import { motion } from "framer-motion";

const metrics = [
  { company: "ETI industrielle", agent: "Agent DAF", stat: "3h au lieu de 2 jours", context: "pour la clôture mensuelle" },
  { company: "PME de services", agent: "Agent RH", stat: "80% de réduction", context: "des sollicitations RH répétitives" },
  { company: "Groupe retail", agent: "Agent Commercial", stat: "Préparation RDV 10×", context: "plus rapide" },
  { company: "ETI logistique", agent: "Agent Ops", stat: "60% de reporting", context: "automatisé" },
  { company: "Cabinet conseil", agent: "Agent Juridique", stat: "Analyse contractuelle 5×", context: "plus rapide" },
  { company: "Groupe multi-sites", agent: "Agent CODIR", stat: "Vision 360°", context: "en temps réel sur toutes les filiales" },
];

export function MetricsBanner() {
  return (
    <section className="py-14 border-y border-[#E4E4EF] overflow-hidden bg-[#F8F8FC]">
      <div className="flex">
        <motion.div
          className="flex gap-5 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...metrics, ...metrics].map((m, i) => (
            <div key={i} className="shrink-0 w-[270px] bg-white rounded-2xl border border-[#E4E4EF] p-5 shadow-sm shadow-black/[0.03]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-semibold text-[#8B5CF6] bg-[#F3EEFE] px-2 py-0.5 rounded-full">
                  {m.agent}
                </span>
                <span className="text-[10px] text-[#71718A]">{m.company}</span>
              </div>
              <p className="text-[#0F0F18] font-bold text-lg leading-tight">{m.stat}</p>
              <p className="text-[#71718A] text-xs mt-1">{m.context}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
