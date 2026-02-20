import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { prenom, nom, email, entreprise, taille, fonction, message } = body;

  try {
    await resend.emails.send({
      from: "Nextstrato Contact <onboarding@resend.dev>",
      to: "meyroninlionel@gmail.com",
      replyTo: email,
      subject: `Nouvelle demande de diagnostic — ${prenom} ${nom} (${entreprise})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8f8fc; border-radius: 12px;">
          <h2 style="color: #0F0F18; margin-bottom: 24px;">Nouvelle demande de diagnostic gratuit</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #71718A; font-size: 14px; width: 140px;">Prénom</td>
              <td style="padding: 10px 0; color: #0F0F18; font-size: 14px; font-weight: 600;">${prenom}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #71718A; font-size: 14px;">Nom</td>
              <td style="padding: 10px 0; color: #0F0F18; font-size: 14px; font-weight: 600;">${nom}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #71718A; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; color: #4F6EF7; font-size: 14px; font-weight: 600;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #71718A; font-size: 14px;">Entreprise</td>
              <td style="padding: 10px 0; color: #0F0F18; font-size: 14px; font-weight: 600;">${entreprise}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #71718A; font-size: 14px;">Taille</td>
              <td style="padding: 10px 0; color: #0F0F18; font-size: 14px; font-weight: 600;">${taille}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #71718A; font-size: 14px;">Fonction</td>
              <td style="padding: 10px 0; color: #0F0F18; font-size: 14px; font-weight: 600;">${fonction}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px 0; color: #71718A; font-size: 14px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #0F0F18; font-size: 14px;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
            ` : ""}
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #EEF1FE; border-radius: 8px; border-left: 4px solid #4F6EF7;">
            <p style="margin: 0; color: #4F6EF7; font-size: 13px; font-weight: 600;">
              Répondre directement à cet email pour contacter ${prenom} ${nom}.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json({ success: false, error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
