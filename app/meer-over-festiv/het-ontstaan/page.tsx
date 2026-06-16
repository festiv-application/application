"use client";
import Nav from "../../components/Nav";
import { useState } from "react";
import { useLang } from "../../lib/LanguageContext";

const t = {
  nl: {
    back: "← Terug",
    title: "Het ontstaan van Festiv",
    sub: "HET VERHAAL",
    body: [
      "Het idee voor Festiv ontstond op een warme avond op een festival in Nederland. We stonden met een groep vrienden bij een podium, en iemand vroeg: 'zou het niet geweldig zijn als je van tevoren wist wie er ook naartoe ging — en daar al een beetje contact mee had?'",
      "We keken om ons heen. Duizenden mensen, elk met hun eigen verhaal, elk met hun eigen reden om hier te zijn. En ergens daartussen — iemand die perfect bij je past. Maar hoe vind je die persoon in een zee van mensen?",
      "Dat is waar Festiv voor is gebouwd. Niet om de magie van een festival te vervangen, maar om haar te versterken. Je gaat al naar een geweldige dag — wij zorgen dat je er misschien iemand bijzonders ontmoet.",
      "We zijn een klein team, we bouwen hard, en we geloven oprecht dat de beste ontmoetingen die zijn waarbij je al iets deelt. Een liefde voor dezelfde muziek. Dezelfde sfeer. Hetzelfde festival.",
    ],
    cta: "Om mooie dagen nóg mooier te maken.",
    btn: "Meld je aan voor de wachtlijst",
    modalTitle: "Enthousiast?",
    modalSub: "Laat je e-mailadres achter en wij laten je als eerste weten wanneer Festiv live gaat.",
    placeholder: "jouw@email.nl",
    modalBtn: "Aanmelden",
    noSpam: "Geen spam. Dat nooit.",
    successTitle: "Je staat op de lijst!",
    successSub: "We laten je als eerste weten wanneer Festiv live gaat.",
  },
  en: {
    back: "← Back",
    title: "The story behind Festiv",
    sub: "THE STORY",
    body: [
      "The idea for Festiv was born on a warm evening at a festival in the Netherlands. We were standing with a group of friends near a stage, and someone asked: 'wouldn't it be amazing if you could know beforehand who else was going — and already have some contact with them?'",
      "We looked around. Thousands of people, each with their own story, each with their own reason for being there. And somewhere among them — someone who's a perfect match for you. But how do you find that person in a sea of people?",
      "That's what Festiv was built for. Not to replace the magic of a festival, but to amplify it. You're already going to an amazing day — we just make sure you might meet someone special there.",
      "We're a small team, building hard, and we genuinely believe the best meetings are the ones where you already share something. A love for the same music. The same vibe. The same festival.",
    ],
    cta: "To make great days even greater.",
    btn: "Sign up for the waitlist",
    modalTitle: "Excited?",
    modalSub: "Leave your email address and we'll let you know first when Festiv goes live.",
    placeholder: "your@email.com",
    modalBtn: "Sign up",
    noSpam: "No spam. Never.",
    successTitle: "You're on the list!",
    successSub: "We'll let you know first when Festiv goes live.",
  },
};

export default function MeerOverFestiv() {
  const { lang } = useLang();
  const txt = t[lang];
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
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#2A1758", letterSpacing: "-1px", marginBottom: "16px", lineHeight: 1.05 }}>
            {txt.title}
          </h1>
          <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", color: "#2A1758", opacity: 0.4, marginBottom: "48px" }}>
            {txt.sub}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {txt.body.map((tekst, i) => (
              <p key={i} style={{ fontSize: "18px", lineHeight: 1.8, color: "#2A1758", opacity: i === 0 ? 1 : 0.72, fontWeight: i === 0 ? 500 : 400 }}>
                {tekst}
              </p>
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
              boxShadow: "0 32px 80px rgba(42,23,88,0.3)",
            }}
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: "22px", cursor: "pointer", lineHeight: 1 }}
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
