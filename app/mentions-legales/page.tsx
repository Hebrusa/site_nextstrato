import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container, Section } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Nextstrato",
  description: "Mentions légales du site www.nextstrato.fr édité par la société NEXTSTRATO.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white">

        {/* Header */}
        <Section className="pb-10 border-b border-[#E4E4EF]">
          <Container>
            <FadeIn className="max-w-3xl">
              <p className="text-[#4F6EF7] text-sm font-semibold uppercase tracking-widest mb-4">
                Informations légales
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#4F6EF7] mb-5 leading-tight">
                Mentions légales
              </h1>
              <p className="text-[#71718A] text-base leading-relaxed">
                Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance
                dans l'économie numérique (LCEN), les présentes mentions légales sont portées à la
                connaissance des utilisateurs et visiteurs du site <strong className="text-[#0F0F18]">www.nextstrato.fr</strong>.
              </p>
            </FadeIn>
          </Container>
        </Section>

        {/* Content */}
        <Section className="bg-white">
          <Container>
            <div className="max-w-3xl space-y-12">

              {/* 1 – Éditeur */}
              <FadeIn>
                <Block title="1. Éditeur du site">
                  <Field label="Dénomination sociale" value="NEXTSTRATO" />
                  <Field label="Forme juridique" value="Société par Actions Simplifiée (SAS)" />
                  <Field label="SIREN" value="993 839 232" />
                  <Field label="SIRET (siège)" value="993 839 232 00010" />
                  <Field label="RCS" value="RCS Nanterre 993 839 232" />
                  <Field label="Code APE / NAF" value="62.02A — Conseil en systèmes et logiciels informatiques" />
                  <Field label="Capital social" value="5 000 €"/>
                  <Field
                    label="N° TVA intracommunautaire"
                    value="FR93993839232"
                                      />
                  <Field
                    label="Siège social"
                    value="42 Rue Kléber, 92300 Levallois-Perret, France"
                  />
                  <Field label="Date de création" value="12 novembre 2025" />
                  <Field
                    label="Contact"
                    value="contact@nextstrato.fr"
                    href="mailto:contact@nextstrato.fr"
                  />
                </Block>
              </FadeIn>

              {/* 2 – Directeur de publication */}
              <FadeIn delay={0.05}>
                <Block title="2. Directeur de la publication">
                  <p className="text-[#71718A] text-sm leading-relaxed">
                    Le directeur de la publication est{" "}
                    <strong className="text-[#0F0F18]">Lionel Meyronin</strong>, en sa qualité
                    de Président de la société NEXTSTRATO SAS.
                  </p>
                </Block>
              </FadeIn>

              {/* 3 – Hébergement */}
              <FadeIn delay={0.1}>
                <Block title="3. Hébergement">
                  <p className="text-[#71718A] text-sm leading-relaxed mb-4">
                    Le site www.nextstrato.fr est hébergé par :
                  </p>
                  <Field label="Société" value="Vercel Inc." />
                  <Field label="Adresse" value="440 N Barranca Ave #4133, Covina, CA 91723, États-Unis" />
                  <Field
                    label="Site web"
                    value="vercel.com"
                    href="https://vercel.com"
                  />
                  <p className="text-[#71718A] text-xs leading-relaxed mt-3">
                    Les données des utilisateurs européens sont traitées conformément au RGPD.
                    Les serveurs de rendu edge sont localisés dans des datacenters européens
                    (Frankfurt, Amsterdam) lorsque possible.
                  </p>
                </Block>
              </FadeIn>

              {/* 4 – Propriété intellectuelle */}
              <FadeIn delay={0.15}>
                <Block title="4. Propriété intellectuelle">
                  <p className="text-[#71718A] text-sm leading-relaxed mb-3">
                    L'ensemble des éléments constituant le site www.nextstrato.fr (textes,
                    graphismes, logiciels, photographies, images, sons, plans, noms, logos,
                    marques, créations et œuvres protégeables diverses) sont la propriété
                    exclusive de la société NEXTSTRATO ou font l'objet d'une autorisation
                    d'utilisation.
                  </p>
                  <p className="text-[#71718A] text-sm leading-relaxed">
                    Toute reproduction, représentation, modification, publication, adaptation ou
                    exploitation de tout ou partie des éléments du site, quel que soit le moyen
                    ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de
                    NEXTSTRATO. Toute exploitation non autorisée du site ou de son contenu sera
                    considérée comme constitutive d'une contrefaçon et poursuivie conformément
                    aux dispositions des articles L.335-2 et suivants du Code de la Propriété
                    Intellectuelle.
                  </p>
                </Block>
              </FadeIn>

              {/* 5 – Données personnelles */}
              <FadeIn delay={0.2}>
                <Block title="5. Données personnelles et RGPD">
                  <p className="text-[#71718A] text-sm leading-relaxed mb-3">
                    Conformément au Règlement Général sur la Protection des Données (RGPD —
                    Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier
                    1978 modifiée, NEXTSTRATO s'engage à protéger la vie privée des utilisateurs
                    du site.
                  </p>
                  <ul className="space-y-2 text-[#71718A] text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4F6EF7] mt-0.5">•</span>
                      <span>
                        <strong className="text-[#0F0F18]">Responsable de traitement :</strong>{" "}
                        NEXTSTRATO SAS — 42 Rue Kléber, 92300 Levallois-Perret
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4F6EF7] mt-0.5">•</span>
                      <span>
                        <strong className="text-[#0F0F18]">Données collectées :</strong> nom,
                        prénom, adresse email, société, fonction, contenu des messages soumis via
                        le formulaire de contact.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4F6EF7] mt-0.5">•</span>
                      <span>
                        <strong className="text-[#0F0F18]">Finalités :</strong> traitement des
                        demandes de contact, envoi d'informations commerciales avec consentement,
                        amélioration du service.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4F6EF7] mt-0.5">•</span>
                      <span>
                        <strong className="text-[#0F0F18]">Durée de conservation :</strong> 3
                        ans à compter du dernier contact.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4F6EF7] mt-0.5">•</span>
                      <span>
                        <strong className="text-[#0F0F18]">Droits :</strong> accès,
                        rectification, effacement, limitation, portabilité, opposition — à
                        exercer par email à{" "}
                        <a
                          href="mailto:privacy@nextstrato.fr"
                          className="text-[#4F6EF7] hover:underline"
                        >
                          privacy@nextstrato.fr
                        </a>
                        .
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4F6EF7] mt-0.5">•</span>
                      <span>
                        <strong className="text-[#0F0F18]">Réclamation :</strong> vous pouvez
                        introduire une réclamation auprès de la{" "}
                        <a
                          href="https://www.cnil.fr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4F6EF7] hover:underline"
                        >
                          CNIL
                        </a>{" "}
                        (Commission Nationale de l'Informatique et des Libertés).
                      </span>
                    </li>
                  </ul>
                </Block>
              </FadeIn>

              {/* 6 – Cookies */}
              <FadeIn delay={0.25}>
                <Block title="6. Cookies">
                  <p className="text-[#71718A] text-sm leading-relaxed mb-3">
                    Le site www.nextstrato.fr peut utiliser des cookies techniques strictement
                    nécessaires au bon fonctionnement du site. Aucun cookie publicitaire ou de
                    suivi tiers n'est déposé sans votre consentement préalable.
                  </p>
                  <p className="text-[#71718A] text-sm leading-relaxed">
                    Conformément à l'article 82 de la loi Informatique et Libertés et aux
                    recommandations de la CNIL, vous pouvez à tout moment configurer votre
                    navigateur pour refuser les cookies ou être averti de leur dépôt.
                  </p>
                </Block>
              </FadeIn>

              {/* 7 – Liens */}
              <FadeIn delay={0.3}>
                <Block title="7. Liens hypertextes">
                  <p className="text-[#71718A] text-sm leading-relaxed mb-3">
                    Le site www.nextstrato.fr peut contenir des liens vers des sites tiers.
                    NEXTSTRATO n'exerce aucun contrôle sur le contenu de ces sites et décline
                    toute responsabilité quant aux informations qui y sont publiées.
                  </p>
                  <p className="text-[#71718A] text-sm leading-relaxed">
                    La création de liens vers www.nextstrato.fr est autorisée sans accord
                    préalable, sous réserve de ne pas nuire à l'image de NEXTSTRATO et de ne pas
                    reproduire le contenu du site dans un cadre (frame).
                  </p>
                </Block>
              </FadeIn>

              {/* 8 – Limitation de responsabilité */}
              <FadeIn delay={0.35}>
                <Block title="8. Limitation de responsabilité">
                  <p className="text-[#71718A] text-sm leading-relaxed mb-3">
                    NEXTSTRATO s'efforce d'assurer l'exactitude et la mise à jour des
                    informations diffusées sur le site. Toutefois, NEXTSTRATO ne peut garantir
                    l'exactitude, la précision ou l'exhaustivité des informations mises à
                    disposition sur ce site.
                  </p>
                  <p className="text-[#71718A] text-sm leading-relaxed">
                    NEXTSTRATO décline toute responsabilité pour toute imprécision, inexactitude
                    ou omission portant sur des informations disponibles sur le site, ainsi que
                    pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant
                    entraîné une modification des informations publiées.
                  </p>
                </Block>
              </FadeIn>

              {/* 9 – Droit applicable */}
              <FadeIn delay={0.4}>
                <Block title="9. Droit applicable et juridiction compétente">
                  <p className="text-[#71718A] text-sm leading-relaxed">
                    Les présentes mentions légales sont soumises au droit français. En cas de
                    litige et après échec de toute tentative de résolution amiable, les
                    tribunaux compétents du ressort de Nanterre seront seuls compétents.
                  </p>
                </Block>
              </FadeIn>

              {/* Last updated */}
              <FadeIn delay={0.45}>
                <p className="text-[#71718A] text-xs border-t border-[#E4E4EF] pt-6">
                  Dernière mise à jour : février 2026
                </p>
              </FadeIn>

            </div>
          </Container>
        </Section>

      </main>
      <Footer />
    </>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────── */

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#0F0F18] mb-5 pb-3 border-b border-[#E4E4EF]">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Field({
  label,
  value,
  href,
  placeholder,
}: {
  label: string;
  value: string;
  href?: string;
  placeholder?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-sm">
      <span className="text-[#71718A] min-w-[220px] shrink-0">{label} :</span>
      {href ? (
        <a href={href} className="text-[#4F6EF7] hover:underline font-medium">
          {value}
        </a>
      ) : (
        <span
          className={
            placeholder
              ? "text-[#d97706] font-medium italic"
              : "text-[#0F0F18] font-medium"
          }
        >
          {value}
        </span>
      )}
    </div>
  );
}
