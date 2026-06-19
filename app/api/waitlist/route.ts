import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const confirmationEmail = (email: string) => `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welkom bij Festiv</title>
</head>
<body style="margin:0;padding:0;background:#F5F3EF;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F3EF;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <span style="font-family:Georgia,serif;font-size:42px;font-weight:800;color:#2A1758;letter-spacing:-1px;">
                Festiv
              </span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#2A1758;border-radius:24px;padding:48px 48px 40px;">

              <!-- Ster -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:28px;">
                    <div style="width:60px;height:60px;background:#FFD166;border-radius:50%;text-align:center;line-height:60px;font-size:26px;">
                      ★
                    </div>
                  </td>
                </tr>

                <!-- Titel -->
                <tr>
                  <td align="center" style="padding-bottom:20px;">
                    <h1 style="margin:0;font-family:Georgia,serif;font-size:32px;font-weight:700;color:#FFFFFF;letter-spacing:-0.5px;line-height:1.2;">
                      Je staat op de lijst!
                    </h1>
                  </td>
                </tr>

                <!-- Body tekst -->
                <tr>
                  <td style="padding-bottom:32px;">
                    <p style="margin:0 0 16px;font-size:17px;color:rgba(255,255,255,0.85);line-height:1.7;text-align:center;">
                      Bedankt voor je aanmelding. We zijn hard aan het bouwen en houden je als eerste op de hoogte wanneer Festiv live gaat.
                    </p>
                    <p style="margin:0;font-size:17px;color:rgba(255,255,255,0.85);line-height:1.7;text-align:center;">
                      We kijken er naar uit om van jouw mooie dag een nóg mooiere dag te maken.
                    </p>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding-bottom:28px;">
                    <div style="height:1px;background:rgba(255,255,255,0.15);"></div>
                  </td>
                </tr>

                <!-- Ondertekening -->
                <tr>
                  <td align="center">
                    <p style="margin:0 0 4px;font-size:15px;color:rgba(255,255,255,0.6);line-height:1.6;">
                      Met liefde,
                    </p>
                    <p style="margin:0;font-size:17px;font-weight:700;color:#FFD166;letter-spacing:-0.3px;">
                      Mark &amp; Gijs
                    </p>
                    <p style="margin:4px 0 0;font-size:14px;color:rgba(255,255,255,0.4);">
                      Het Festiv team
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:28px;">
              <p style="margin:0;font-size:13px;color:rgba(42,23,88,0.4);line-height:1.6;">
                Je ontvangt deze mail omdat je je hebt aangemeld via festiv.app<br/>
                © 2026 Festiv — Om mooie dagen nóg mooier te maken.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Ongeldig e-mailadres" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error } = await supabase
    .from("waitlist")
    .insert({ email, created_at: new Date().toISOString() });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Dit e-mailadres is al bij ons bekend, maar we waarderen je enthousiasme! :)" },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: "Er ging iets mis, probeer het opnieuw." }, { status: 500 });
  }

  await resend.emails.send({
    from: "Festiv <onboarding@resend.dev>",
    to: email,
    subject: "Je staat op de lijst! ★",
    html: confirmationEmail(email),
  });

  return NextResponse.json({ success: true });
}
