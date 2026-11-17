import { Resend } from "resend";
import { template } from "../templates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function enviarPostulacion() {
  const { data, error } = await resend.emails.send({
    from: "AquaChile <onboarding@resend.dev>",
    to: ["alexis.mansilla04@gmail.com"],
    subject: "Confirmación de postulación - AquaChile",
    html: template,
  });

  if (error) {
    console.error({ error });
    return { error };
  }

  console.log({ data });
  return { data };
}
