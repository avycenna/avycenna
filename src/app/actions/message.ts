"use server";

import { sendEmail } from "@/lib/email";
import { FormData } from "../new/form";

export async function sendNotification(data: FormData) {
  const to = process.env.CONTACT_MESSAGE_RECEPTION!.split(",")
  return await sendEmail({
    to: to,
    subject: `New message`,
    emailHtml: `<p><strong>From:</strong> ${data.name} &lt;${data.email}&gt;</p><p>${data.message.replace(/\n/g, "<br />")}</p>`,
    emailText: `From: ${data.name} <${data.email}>\n\n${data.message}`,
  })
}

export async function sendReceipt(data: FormData) {
  return await sendEmail({
    to: data.email,
    subject: "Hi there",
    emailHtml: "Thank you!",
    emailText: "Thank you!",
  })
}
