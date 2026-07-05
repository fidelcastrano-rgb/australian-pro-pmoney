import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy init helper for Resend to prevent crashes if key is missing
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY environment variable is not defined. Email dispatch skipped.");
    return null;
  }
  return new Resend(apiKey);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, inquiryType, message } = body;

    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required contact form fields (name, email, message)." }, { status: 400 });
    }

    // Prepare dispatch emails
    const resend = getResendClient();
    const emailFrom = process.env.EMAIL_FROM || "onboarding@resend.dev";
    const emailAdmin = process.env.EMAIL_ADMIN || "order@australianpropmoney.com.au";

    let emailSent = false;

    if (resend) {
      try {
        // Send notification email to the admin
        await resend.emails.send({
          from: `Aus Prop Money Contact Form <${emailFrom}>`,
          to: emailAdmin,
          subject: `New Contact Inquiry: ${inquiryType} from ${name}`,
          html: `
            <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);">
              <div style="background-color: #0f172a; padding: 24px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.05em;">AUS PROP MONEY</h1>
                <p style="color: #fbbf24; margin: 4px 0 0 0; font-size: 12px; font-weight: bold; text-transform: uppercase;">New Contact Form Submission</p>
              </div>
              <div style="padding: 24px;">
                <h3 style="font-size: 14px; text-transform: uppercase; color: #334155; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 16px;">Inquiry Details</h3>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
                  <tr>
                    <td style="padding: 6px 0; font-weight: bold; color: #64748b; width: 150px;">Name:</td>
                    <td style="padding: 6px 0; color: #1e293b;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; font-weight: bold; color: #64748b;">Email:</td>
                    <td style="padding: 6px 0; color: #1e293b;"><a href="mailto:${email}">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; font-weight: bold; color: #64748b;">Company/Studio:</td>
                    <td style="padding: 6px 0; color: #1e293b;">${company || "Not Specified"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; font-weight: bold; color: #64748b;">Inquiry Category:</td>
                    <td style="padding: 6px 0; color: #1e293b; font-weight: bold;">${inquiryType}</td>
                  </tr>
                </table>

                <h3 style="font-size: 13px; text-transform: uppercase; color: #334155; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 12px;">Message Details</h3>
                <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; font-size: 13px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</div>

                <div style="margin-top: 24px; border-t: 1px solid #e2e8f0; padding-top: 16px; font-size: 11px; color: #94a3b8; text-align: center;">
                  Received via Australian Prop Money Website Inquiry Form on ${new Date().toLocaleString()}
                </div>
              </div>
            </div>
          `,
        });
        emailSent = true;
        console.log(`Contact form email successfully sent to admin ${emailAdmin}.`);
      } catch (emailError) {
        console.error("Failed to send contact notification email:", emailError);
      }
    }

    return NextResponse.json({ success: true, emailSent });
  } catch (err: any) {
    console.error("Contact Form API Error:", err);
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
