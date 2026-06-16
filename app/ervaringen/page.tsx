"use client";
import Nav from "../components/Nav";
import { useState } from "react";
import { useLang } from "../lib/LanguageContext";

const ervaringen = {
  nl: [
    { naam: "Lisa, 26", festival: "Dekmantel", tekst: "Ik had nooit gedacht dat ik mijn vriend via een app zou ontmoeten, laat staan op een festival. Maar hier zijn we dan. We stonden allebei bij hetzelfde podium en hadden al een week gechat via Festiv.", foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&q=80" },
    { naam: "Joris, 29", festival: "DGTL", tekst: "Super relaxed. Je matcht met mensen die er ook heen gaan, je spreekt iets af bij de ingang, en voor je het weet heb je een groep nieuwe vrienden. Deed me denken aan hoe spontaan festivals vroeger voelden.", foto: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=120&q=80" },
    { naam: "Noa, 23", festival: "Awakenings", tekst: "Festiv is het enige dat echt aanvoelt als voor festivalgangers gemaakt. Geen onzin, gewoon: wie gaat er ook naartoe, en wil je afspreken?", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80" },
    { naam: "Tom, 31", festival: "Lowlands", tekst: "Ik ben een beetje introvert, maar via Festiv had ik al contact voor het festival begon. Dat scheelt zoveel drempel. We spraken af bij een foodkraam en de rest was geweldig.", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80" },
  ],
  en: [
    { naam: "Lisa, 26", festival: "Dekmantel", tekst: "I never thought I'd meet my boyfriend through an app, let alone at a festival. But here we are. We were both standing at the same stage and had already been chatting for a week on Festiv.", foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&q=80" },
    { naam: "Joris, 29", festival: "DGTL", tekst: "Super relaxed. You match with people who are also going, meet up at the entrance, and before you know it you have a whole group of new friends. Reminded me of how spontaneous festivals used to feel.", foto: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=120&q=80" },
    { naam: "Noa, 23", festival: "Awakenings", tekst: "Festiv is the only thing that actually feels made for festival-goers. No fuss, just: who else is going, and do you want to meet up?", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80" },
    { naam: "Tom, 31", festival: "Lowlands", tekst: "I'm a bit introverted, but through Festiv I already had contact before the festival started. That makes such a difference. We met up at a food stall and the rest was amazing.", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80" },
  ],
};

const t = {
  nl: { back: "← Terug", title: "Ervaringen", sub: "WAT ANDEREN ZEGGEN", intro: "Festiv is nog in opbouw, maar dit zijn de verhalen die ons elke dag motiveren om door te gaan.", cta: "Om mooie dagen nóg mooier te maken.", btn: "Meld je aan voor de wachtlijst", modalTitle: "Enthousiast?", modalSub: "Laat je e-mailadres achter en wij laten je als eerste weten wanneer Festiv live gaat.", placeholder: "jouw@email.nl", modalBtn: "Aanmelden", noSpam: "Geen spam. Dat nooit.", successTitle: "Je staat op de lijst!", successSub: "We laten je als eerste weten wanneer Festiv live gaat." },
  en: { back: "← Back", title: "Experiences", sub: "WHAT OTHERS SAY", intro: "Festiv is still being built, but these are the stories that motivate us every day to keep going.", cta: "To make great days even greater.", btn: "Sign up for the waitlist", modalTitle: "Excited?", modalSub: "Leave your email address and we'll let you know first when Festiv goes live.", placeholder: "your@email.com", modalBtn: "Sign up", noSpam: "No spam. Never.", successTitle: "You're on the list!", successSub: "We'll let you know first when Festiv goes live." },
};

export default function Ervaringen() {
  const { lang } = useLang();
  const txt = t[lang];
  const items = ervaringen[lang];
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#2A1758", opacity: 0.7, marginBottom: "64px" }}>
            {txt.intro}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {items.map((e, i) => (
              <div key={i} style={{
                background: i % 2 === 0 ? "#2A1758" : "#FFFFFF",
                borderRadius: "24px",
                padding: "40px",
                border: "none",
              }}>
                <p style={{
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: i % 2 === 0 ? "rgba(255,255,255,0.85)" : "#2A1758",
                  marginBottom: "24px",
                  fontStyle: "italic",
                }}>
                  "{e.tekst}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <img src={e.foto} alt={e.naam} style={{
                    width: "44px", height: "44px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                    border: i % 2 === 0 ? "2px solid rgba(255,255,255,0.2)" : "2px solid rgba(42,23,88,0.15)",
                  }} />
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "15px", color: i % 2 === 0 ? "#FFD166" : "#2A1758", marginBottom: "2px" }}>
                      {e.naam}
                    </p>
                    <p style={{ fontSize: "13px", color: i % 2 === 0 ? "rgba(255,255,255,0.4)" : "rgba(42,23,88,0.45)", fontWeight: 600 }}>
                      {e.festival}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "64px", textAlign: "center" }}>
            <p style={{ fontSize: "18px", color: "#2A1758", opacity: 0.7, marginBottom: "10px" }}>
              {txt.cta}
            </p>
            <button type="button" onClick={() => setModalOpen(true)} style={{
              display: "inline-block",
              background: "#2A1758",
              color: "#FFFFFF",
              padding: "16px 32px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 700,
              fontFamily: "'Inter', sans-serif",
            }}>
              {txt.btn}
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(248,245,240,0.55)",
            backdropFilter: "blur(12px)",
            zIndex: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#2A1758",
              borderRadius: "28px",
              padding: "48px 40px",
              width: "100%",
              maxWidth: "480px",
              position: "relative",
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "24px",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.4)",
                fontSize: "22px",
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px", letterSpacing: "-0.5px" }}>
                  {txt.modalTitle}
                </h2>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "32px" }}>
                  {txt.modalSub}
                </p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <input
                    type="email"
                    required
                    placeholder={txt.placeholder}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "18px 20px",
                      borderRadius: "14px",
                      border: "2px solid rgba(248,245,240,0.25)",
                      background: "rgba(248,245,240,0.08)",
                      fontSize: "16px",
                      color: "#FFFFFF",
                      outline: "none",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = "#FAFAF8")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(248,245,240,0.25)")}
                  />
                  <button
                    type="submit"
                    style={{
                      background: "#FFD166",
                      color: "#2A1758",
                      padding: "18px",
                      borderRadius: "14px",
                      fontSize: "15px",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {txt.modalBtn}
                  </button>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>{txt.noSpam}</p>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#FFD166", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", color: "#2A1758", fontWeight: 700 }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>
                  {txt.successTitle}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  {txt.successSub}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
