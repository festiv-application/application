"use client";
import Nav from "../components/Nav";
import { useLang } from "../lib/LanguageContext";

const t = {
  nl: { back: "← Terug", title: "Over ons", sub: "WIE WE ZIJN", p1: "Wij zijn een klein team van designers, dromers en liefhebbers. We delen één ding: de overtuiging dat de beste ontmoetingen die zijn waarbij je al iets deelt.", p2: "Festiv is ons antwoord op een simpele vraag — waarom is het zo moeilijk om nieuwe mensen te ontmoeten op een plek waar iedereen voor hetzelfde is gekomen?", cards: [{ title: "Ons team", desc: "Leer de mensen kennen achter Festiv.", href: "/over-ons/ons-team" }, { title: "Werken bij", desc: "Ben jij de volgende die aansluit?", href: "/over-ons/werken-bij" }], view: "Bekijk →" },
  en: { back: "← Back", title: "About us", sub: "WHO WE ARE", p1: "We're a small team of designers, dreamers and enthusiasts. We share one thing: the conviction that the best meetings are the ones where you already have something in common.", p2: "Festiv is our answer to a simple question — why is it so hard to meet new people in a place where everyone came for the same reason?", cards: [{ title: "Our team", desc: "Meet the people behind Festiv.", href: "/over-ons/ons-team" }, { title: "Work at Festiv", desc: "Are you the next to join?", href: "/over-ons/werken-bij" }], view: "View →" },
};

export default function OverOns() {
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
            {txt.p1}
          </p>
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#2A1758", opacity: 0.7, marginBottom: "64px" }}>
            {txt.p2}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {txt.cards.map(item => (
              <a key={item.href} href={item.href} style={{
                background: "#2A1758",
                borderRadius: "20px",
                padding: "32px",
                textDecoration: "none",
                display: "block",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 20px rgba(42,23,88,0.15)",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 36px rgba(42,23,88,0.25)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(42,23,88,0.15)";
                }}>
<h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>
                  {item.title}
                </h2>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", marginBottom: "20px" }}>
                  {item.desc}
                </p>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#FFD166", letterSpacing: "0.5px" }}>
                  {txt.view}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
