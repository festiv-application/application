"use client";
import Nav from "../../components/Nav";
import { useState } from "react";
import { useLang } from "../../lib/LanguageContext";

const t = {
  nl: {
    title: "Zo werkt het",
    intro: "Festiv werkt in drie simpele stappen. Van aanmelden tot ontmoeten.",
    steps: [
      { number: "01", title: "Kies je evenementen", body: "Voeg de festivals en feesten toe waar jij naartoe gaat. Festiv gebruikt die informatie om je te laten zien wie er op dezelfde dag naar hetzelfde evenement gaat." },
      { number: "02", title: "Swipe je matches", body: "Bekijk profielen van mensen die ook gaan. Like degenen die je interessant vindt. Als zij jou ook liken, is het een match — en kun je chatten." },
      { number: "03", title: "Ontmoet elkaar", body: "Spreek iets af voor het festival, of improviseer ter plekke. Festiv helpt je de brug te slaan tussen online contact en een echte ontmoeting." },
    ],
    cta: "Klinkt goed?",
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
    title: "How it works",
    intro: "Festiv works in three simple steps. From signing up to meeting up.",
    steps: [
      { number: "01", title: "Choose your events", body: "Add the festivals and parties you're going to. Festiv uses that information to show you who else is going to the same event on the same day." },
      { number: "02", title: "Swipe your matches", body: "Browse profiles of people who are also going. Like the ones you find interesting. If they like you back, it's a match — and you can start chatting." },
      { number: "03", title: "Meet each other", body: "Make plans before the festival, or improvise on the spot. Festiv helps you bridge the gap between online contact and a real-life meeting." },
    ],
    cta: "Sounds good?",
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

export default function ZoWerktHet() {
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
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px 100px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, letterSpacing: "-1px", color: "#2A1758", marginBottom: "24px", lineHeight: 1.1 }}>
            {txt.title}
          </h1>
          <p style={{ fontSize: "18px", color: "#2A1758", opacity: 0.6, fontFamily: "'Inter', sans-serif", marginBottom: "72px", lineHeight: 1.6 }}>
            {txt.intro}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {txt.steps.map(step => (
              <div key={step.number} style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "48px", fontWeight: 700, color: "#2A1758", opacity: 0.15, lineHeight: 1, flexShrink: 0, width: "64px" }}>
                  {step.number}
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 700, color: "#2A1758", marginBottom: "12px", letterSpacing: "-0.5px" }}>
                    {step.title}
                  </h2>
                  <p style={{ fontSize: "17px", color: "#2A1758", opacity: 0.65, lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "80px", textAlign: "center" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#2A1758", marginBottom: "28px" }}>
              {txt.cta}
            </p>
            <button type="button" onClick={() => setModalOpen(true)} style={{ display: "inline-block", background: "#2A1758", color: "#FFFFFF", padding: "16px 32px", borderRadius: "100px", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
              {txt.btn}
            </button>
          </div>
        </div>
      </main>

      {modalOpen && (
        <div onClick={() => setModalOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(248,245,240,0.55)", backdropFilter: "blur(12px)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#2A1758", borderRadius: "28px", padding: "48px 40px", width: "100%", maxWidth: "480px", position: "relative" }}>
            <button onClick={() => setModalOpen(false)} style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: "22px", cursor: "pointer", lineHeight: 1 }}>✕</button>
            {!submitted ? (
              <>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "32px" }}>{txt.modalSub}</p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <input type="email" required placeholder={txt.placeholder} value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", padding: "18px 20px", borderRadius: "14px", border: "2px solid rgba(248,245,240,0.25)", background: "rgba(248,245,240,0.08)", fontSize: "16px", color: "#FFFFFF", outline: "none", fontFamily: "'Inter', sans-serif" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "#FAFAF8")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(248,245,240,0.25)")} />
                  <button type="submit" style={{ background: "#FFD166", color: "#2A1758", padding: "18px", borderRadius: "14px", fontSize: "16px", fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>{txt.modalBtn}</button>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", textAlign: "center" }}>{txt.noSpam}</p>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#FFD166", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", color: "#2A1758", fontWeight: 700 }}>✓</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, marginBottom: "12px", color: "#FFFFFF" }}>{txt.successTitle}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{txt.successSub}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
