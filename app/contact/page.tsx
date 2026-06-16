"use client";
import Nav from "../components/Nav";
import { useLang } from "../lib/LanguageContext";

const t = {
  nl: { back: "← Terug", title: "Contact", sub: "NEEM CONTACT OP", intro: "Heb je een vraag, idee, of wil je samenwerken? We lezen alles en proberen binnen twee werkdagen te reageren.", callLabel: "BEL ONS", callHours: "We zijn bereikbaar op werkdagen tussen 09:00 en 18:00.", emails: [{ label: "Algemeen", email: "info@festiv.nl", desc: "Vragen over de app of Festiv in het algemeen." }, { label: "Pers & media", email: "pers@festiv.nl", desc: "Interviews, samenwerkingen of mediaverzoeken." }], followLabel: "VOLG ONS" },
  en: { back: "← Back", title: "Contact", sub: "GET IN TOUCH", intro: "Have a question, idea, or want to collaborate? We read everything and try to respond within two working days.", callLabel: "CALL US", callHours: "We're reachable on working days between 09:00 and 18:00.", emails: [{ label: "General", email: "info@festiv.nl", desc: "Questions about the app or Festiv in general." }, { label: "Press & media", email: "pers@festiv.nl", desc: "Interviews, collaborations or media requests." }], followLabel: "FOLLOW US" },
};

export default function Contact() {
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

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#2A1758", opacity: 0.75, marginBottom: "64px" }}>
            {txt.intro}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {txt.emails.map((item, i) => (
              <div key={i} style={{
                background: "#2A1758",
                borderRadius: "20px",
                padding: "32px",
              }}>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#FFD166", marginBottom: "8px" }}>
                  {item.label.toUpperCase()}
                </p>
                <a href={`mailto:${item.email}`} style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                }}>
                  {item.email}
                </a>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
            {/* Telefoon */}
            <div style={{ background: "#2A1758", borderRadius: "20px", padding: "32px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: "#FFD166", marginBottom: "8px" }}>{txt.callLabel}</p>
              <a href="tel:+31623706995" style={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", textDecoration: "none", display: "block", marginBottom: "8px" }}>
                +31 6 23 70 69 95
              </a>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}>{txt.callHours}</p>
            </div>
          </div>
          {/* Socials */}
          <div style={{ marginTop: "48px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", color: "#2A1758", opacity: 0.4, marginBottom: "20px" }}>{txt.followLabel}</p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a href="https://instagram.com/festivapp" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: "10px",
                background: "#2A1758", borderRadius: "14px", padding: "14px 20px",
                color: "#FFFFFF", textDecoration: "none", fontSize: "14px", fontWeight: 600,
                transition: "opacity 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                Instagram
              </a>
              <a href="https://tiktok.com/@festivapp" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: "10px",
                background: "#2A1758", borderRadius: "14px", padding: "14px 20px",
                color: "#FFFFFF", textDecoration: "none", fontSize: "14px", fontWeight: 600,
                transition: "opacity 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
