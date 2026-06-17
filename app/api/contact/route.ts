import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are all required." },
        { status: 400 },
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // Dev fallback — just log when no key is configured
      console.log("📬 Contact form submission:", { name, email, message });
      return NextResponse.json({ success: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        // Resend requires a verified "from" domain.
        // Until your domain is verified, use Resend's sandbox address:
        //   from: "onboarding@resend.dev"
        // After verification, change to e.g.: "portfolio@yourdomain.com"
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["salehinmahi2004@gmail.com"],
        reply_to: email,
        subject: `New portfolio inquiry from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a;">
            <h2 style="border-bottom:2px solid #CBA869;padding-bottom:12px;color:#8A6E3B;">
              New message via portfolio
            </h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;font-weight:600;width:100px;">Name</td>
                <td style="padding:10px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:600;">Email</td>
                <td style="padding:10px 0;">
                  <a href="mailto:${email}" style="color:#CBA869;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-weight:600;vertical-align:top;">Message</td>
                <td style="padding:10px 0;white-space:pre-wrap;">${message}</td>
              </tr>
            </table>
            <p style="margin-top:24px;font-size:12px;color:#999;">
              Sent from mushfikusmahi.dev contact form
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
