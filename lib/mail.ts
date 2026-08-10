import nodemailer from "nodemailer";

interface SendMailOptions {
  from?: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
}

let transporterInstance: nodemailer.Transporter | null = null;

/**
 * Gets or creates the Nodemailer transporter configured for Zoho SMTP.
 */
export function getMailTransporter(): nodemailer.Transporter | null {
  if (transporterInstance) {
    return transporterInstance;
  }

  const user = process.env.ZOHO_USER || process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.ZOHO_PASSWORD || process.env.ZOHO_APP_PASSWORD || process.env.SMTP_PASSWORD;
  const host = process.env.ZOHO_HOST || process.env.SMTP_HOST || "smtppro.zoho.com";
  const port = parseInt(process.env.ZOHO_PORT || process.env.SMTP_PORT || "465", 10);
  const secure = port === 465;

  if (!user || !pass) {
    console.warn(
      "[Zoho Mail Notice] ZOHO_USER and ZOHO_PASSWORD environment variables are not set. SMTP mail dispatch will be simulated in server logs."
    );
    return null;
  }

  transporterInstance = nodemailer.createTransport({
    host,
    port,
    secure, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false, // Prevents certificate mismatches on custom domains
    },
  });

  return transporterInstance;
}

/**
 * Send an email via Zoho SMTP using Nodemailer.
 */
export async function sendEmail(options: SendMailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const transporter = getMailTransporter();
  const defaultFrom = process.env.EMAIL_FROM || process.env.ZOHO_USER || "sales@australianpropmoney.com.au";
  const from = options.from || `Australian Prop Money <${defaultFrom}>`;

  if (!transporter) {
    console.log(`[Simulated Email Dispatch - Zoho SMTP]
To: ${Array.isArray(options.to) ? options.to.join(", ") : options.to}
From: ${from}
Subject: ${options.subject}`);
    return { success: true, messageId: "simulated-local-id" };
  }

  try {
    const info = await transporter.sendMail({
      from,
      to: Array.isArray(options.to) ? options.to.join(", ") : options.to,
      replyTo: options.replyTo,
      subject: options.subject,
      html: options.html,
    });

    console.log(`[Zoho SMTP] Email successfully sent to ${options.to}. MessageId: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error("[Zoho SMTP Error] Failed to send email:", error.message || error);
    return { success: false, error: error.message || "Failed to dispatch email via Zoho SMTP" };
  }
}
