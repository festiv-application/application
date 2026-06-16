"use client";
import Nav from "../components/Nav";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "../lib/LanguageContext";

const t = {
  nl: {
    back: "← Terug",
    title: "Over Festiv",
    sub: "OVER FESTIV",
    body: [
      "Festiv is de app die mensen samenbrengt rondom festivals en evenementen. Je matcht van tevoren met mensen die naar hetzelfde event gaan als jij — zodat je al contact hebt vóórdat je er staat.",
      "Festivals zijn het perfecte moment om iemand te ontmoeten. Je deelt al iets: dezelfde muziek, dezelfde sfeer, hetzelfde podium. Festiv maakt gebruik van dat gedeelde moment en helpt je de juiste mensen te vinden — of je nu een nieuwe vriend zoekt, gezelschap bij een act, of iets meer.",
      "De app werkt simpel: voeg de evenementen toe waar jij naartoe gaat, zie wie er ook heen gaan, en like mensen die je interessant vindt. Bij een match kun je chatten en iets afspreken. Geen ingewikkelde algoritmes, geen eindeloos swipen — gewoon mensen ontmoeten rondom dingen die je al leuk vindt.",
      "We geloven dat de beste ontmoetingen beginnen met iets wat je al deelt. Festiv is gebouwd om dat moment te versterken — zodat een mooie dag nóg mooier wordt.",
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
    readMore: "LEES VERDER",
    howItWorks: "Zo werkt het",
  },
  en: {
    back: "← Back",
    title: "What is Festiv?",
    sub: "ABOUT FESTIV",
    body: [
      "Festiv is the app that connects people around festivals and events. You match in advance with people going to the same event as you — so you already have contact before you even get there.",
      "Festivals are the perfect moment to meet someone. You already share something: the same music, the same vibe, the same stage. Festiv takes advantage of that shared moment and helps you find the right people — whether you're looking for a new friend, company at an act, or something more.",
      "The app is simple: add the events you're going to, see who else is going, and like people you find interesting. When you match, you can chat and make plans. No complicated algorithms, no endless swiping — just meeting people around things you already love.",
      "We believe the best connections start with something you already share. Festiv is built to amplify that moment — so a great day becomes even greater.",
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
    readMore: "READ MORE",
    howItWorks: "How it works",
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
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "80px 24px", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, right: "-200px", paddingTop: "80px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#2A1758", opacity: 0.4, margin: 0 }}>
              {txt.readMore}
            </p>
            <Link href="/meer-over-festiv/hoe-werkt-het" style={{ display: "inline-block", background: "#2A1758", color: "#FFFFFF", padding: "12px 20px", borderRadius: "100px", fontSize: "15px", fontWeight: 700, textDecoration: "none", fontFamily: "'Inter', sans-serif", whiteSpace: "nowrap" as const, textAlign: "center" as const, minWidth: "160px" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
              {txt.howItWorks}
            </Link>
            <Link href="/meer-over-festiv/het-ontstaan" style={{ display: "inline-block", background: "#2A1758", color: "#FFFFFF", padding: "12px 20px", borderRadius: "100px", fontSize: "15px", fontWeight: 700, textDecoration: "none", fontFamily: "'Inter', sans-serif", whiteSpace: "nowrap" as const, textAlign: "center" as const, minWidth: "160px" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
              {lang === "nl" ? "Het ontstaan" : "Our story"}
            </Link>
          </div>
          <div style={{ maxWidth: "760px" }}>
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
          </div>
        </div>

        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px 80px", textAlign: "center" }}>
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
