"use client";
import Nav from "../../components/Nav";
import { useLang } from "../../lib/LanguageContext";

const t = {
  nl: {
    back: "← Over ons",
    title: "Werken bij Festiv",
    sub: "KOM HET TEAM VERSTERKEN",
    intro: "We zijn een klein team en willen dat zo houden — maar we groeien. Als jij gepassioneerd bent over mensen verbinden en mooie producten bouwen, horen we graag van je.",
    bullets: ["Je denkt in gebruikers, niet in features", "Je houdt van mensen met elkaar verbinden", "Je wilt iets bouwen dat er écht toe doet"],
    ctaTitle: "Stuur ons een bericht",
    ctaBody: "Er zijn op dit moment geen open vacatures, maar we zijn altijd benieuwd. Vertel ons wie je bent en wat je wil bijdragen.",
    ctaBtn: "Neem contact op",
  },
  en: {
    back: "← About us",
    title: "Work at Festiv",
    sub: "JOIN THE TEAM",
    intro: "We're a small team and want to keep it that way — but we're growing. If you're passionate about connecting people and building great products, we'd love to hear from you.",
    bullets: ["You think in users, not in features", "You love connecting people with each other", "You want to build something that truly matters"],
    ctaTitle: "Send us a message",
    ctaBody: "There are no open vacancies at the moment, but we're always curious. Tell us who you are and what you'd like to contribute.",
    ctaBtn: "Get in touch",
  },
};

export default function WerkenBij() {
  const { lang } = useLang();
  const txt = t[lang];
  return (
    <>
      <Nav />
      <main style={{ background: "#FAFAF8", minHeight: "100vh", paddingTop: "64px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 700, color: "#2A1758", letterSpacing: "-2px", marginBottom: "16px", lineHeight: 1.05 }}>
            {txt.title}
          </h1>
          <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", color: "#2A1758", opacity: 0.4, marginBottom: "48px" }}>
            {txt.sub}
          </p>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#2A1758", opacity: 0.8, marginBottom: "32px" }}>
            {txt.intro}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "64px" }}>
            {txt.bullets.map((punt, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2A1758", marginTop: "8px", flexShrink: 0 }} />
                <p style={{ fontSize: "17px", color: "#2A1758", opacity: 0.75 }}>{punt}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#2A1758", borderRadius: "24px", padding: "48px 40px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>
              {txt.ctaTitle}
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", marginBottom: "28px", lineHeight: 1.6 }}>
              {txt.ctaBody}
            </p>
            <a href="mailto:info@festiv.nl" style={{
              display: "inline-block",
              background: "#FFD166",
              color: "#2A1758",
              padding: "14px 28px",
              borderRadius: "100px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 700,
            }}>
              {txt.ctaBtn}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
