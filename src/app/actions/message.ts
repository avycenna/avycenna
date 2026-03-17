"use server";

import { sendEmail } from "@/lib/email";
import { FormData } from "../new/form";
import { escape } from "he";

export async function sendNotification(data: FormData) {
  const to = process.env.CONTACT_MESSAGE_RECEPTION!.split(",")
  const safeName = escape(data.name)
  const safeEmail = escape(data.email)
  const safeMessage = escape(data.message)

  return await sendEmail({
    to: to,
    subject: `New message`,
    emailHtml: `<p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p><p>${safeMessage.replace(/\n/g, "<br />")}</p>`,
    emailText: `From: ${safeName} <${safeEmail}>\n\n${safeMessage}`,
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
