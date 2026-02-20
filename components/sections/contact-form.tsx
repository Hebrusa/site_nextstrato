"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const sizeOptions = [
  { value: "50-200", label: "50 – 200 salariés" },
  { value: "200-500", label: "200 – 500 salariés" },
  { value: "500-2000", label: "500 – 2 000 salariés" },
  { value: "+2000", label: "+ 2 000 salariés" },
];

const functionOptions = [
  { value: "daf", label: "DAF" },
  { value: "drh", label: "DRH" },
  { value: "dg", label: "DG / CEO" },
  { value: "dsi", label: "DSI" },
  { value: "commerce", label: "Commerce" },
  { value: "ops", label: "Opérations" },
  { value: "autre", label: "Autre" },
];

const inputClass =
  "w-full bg-white border border-[#E4E4EF] rounded-xl px-4 py-3 text-[#0F0F18] text-sm placeholder:text-[#C5C5D5] focus:outline-none focus:border-[#4F6EF7] focus:ring-2 focus:ring-[#4F6EF7]/10 transition-all";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      prenom: (form.elements.namedItem("prenom") as HTMLInputElement).value,
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      entreprise: (form.elements.namedItem("entreprise") as HTMLInputElement).value,
      taille: (form.elements.namedItem("taille") as HTMLSelectElement).value,
      fonction: (form.elements.namedItem("fonction") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erreur serveur");

      setSubmitted(true);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer ou nous contacter directement.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-[#E4E4EF] p-10 text-center shadow-sm">
        <div className="w-14 h-14 rounded-full bg-[#EEF1FE] border border-[#D5DCFC] flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-[#4F6EF7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-[#0F0F18] font-bold text-xl mb-2">Demande envoyée !</h3>
        <p className="text-[#71718A] text-sm leading-relaxed">
          Nous vous recontactons sous 48h pour planifier votre diagnostic.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#E4E4EF] p-8 shadow-sm space-y-5">
      <h2 className="text-[#0F0F18] font-bold text-xl mb-1">Réserver mon diagnostic gratuit</h2>
      <p className="text-[#71718A] text-sm mb-4">Gratuit · Sans engagement · Réponse sous 48h</p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[#0F0F18] text-xs font-semibold mb-1.5">Prénom *</label>
          <input required name="prenom" type="text" placeholder="Jean" className={inputClass} />
        </div>
        <div>
          <label className="block text-[#0F0F18] text-xs font-semibold mb-1.5">Nom *</label>
          <input required name="nom" type="text" placeholder="Dupont" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-[#0F0F18] text-xs font-semibold mb-1.5">Email professionnel *</label>
        <input required name="email" type="email" placeholder="jean.dupont@entreprise.fr" className={inputClass} />
      </div>

      <div>
        <label className="block text-[#0F0F18] text-xs font-semibold mb-1.5">Entreprise *</label>
        <input required name="entreprise" type="text" placeholder="Nom de votre entreprise" className={inputClass} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[#0F0F18] text-xs font-semibold mb-1.5">Taille *</label>
          <select required name="taille" className={inputClass + " appearance-none cursor-pointer"}>
            <option value="">Sélectionner</option>
            {sizeOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[#0F0F18] text-xs font-semibold mb-1.5">Fonction *</label>
          <select required name="fonction" className={inputClass + " appearance-none cursor-pointer"}>
            <option value="">Sélectionner</option>
            {functionOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[#0F0F18] text-xs font-semibold mb-1.5">Message (optionnel)</label>
        <textarea
          name="message"
          rows={3}
          placeholder="Dites-nous en plus sur votre contexte, vos enjeux..."
          className={inputClass + " resize-none"}
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full justify-center">
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            Réserver mon diagnostic gratuit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </Button>
    </form>
  );
}
