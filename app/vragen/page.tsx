"use client";
import Nav from "../components/Nav";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "../lib/LanguageContext";

const t = {
  nl: {
    title: "Veelgestelde vragen",
    items: [
      { q: "Wat is Festiv?", a: "Festiv is een app waarmee je mensen kunt ontmoeten die naar hetzelfde festival of evenement gaan als jij. Je matcht van tevoren, chat met ze, en spreekt af ter plekke." },
      { q: "Voor wie is Festiv bedoeld?", a: "Voor iedereen die naar festivals en evenementen gaat en openstaat voor nieuwe ontmoetingen — of je nu iemand romantisch zoekt, vrienden wil maken, of gewoon gezelschap wil hebben bij een podium." },
      { q: "Is Festiv gratis?", a: "De basisfunctionaliteit is gratis. De eerste gebruikers die zich aanmelden krijgen een half jaar premium gratis — met toegang tot alle functies zonder beperkingen." },
      { q: "Hoe werkt matchen op Festiv?", a: "Je voegt de evenementen toe waar jij naartoe gaat. Festiv laat je zien wie er ook heen gaan. Je liket mensen die je interessant vindt, en als zij jou ook liken ontstaat er een match. Dan kun je chatten en iets afspreken." },
      { q: "Mijn festival staat er niet bij, wat nu?", a: "Stuur ons een bericht via de contactpagina en we voegen het toe. We bouwen de database continu uit op basis van wat gebruikers aanvragen." },
      { q: "Wanneer is Festiv beschikbaar?", a: "We zijn hard aan het bouwen. Meld je aan voor de wachtlijst en je bent als eerste op de hoogte wanneer de app live gaat." },
      { q: "Mijn vraag staat er niet tussen. Wat nu?", a: null },
    ],
  },
  en: {
    title: "Frequently asked questions",
    items: [
      { q: "What is Festiv?", a: "Festiv is an app that lets you meet people going to the same festival or event as you. You match in advance, chat with them, and meet up on the day." },
      { q: "Who is Festiv for?", a: "For anyone who goes to festivals and events and is open to new connections — whether you're looking for something romantic, new friends, or just good company at a stage." },
      { q: "Is Festiv free?", a: "The basic functionality is free. The first users to sign up get six months of premium for free — with access to all features without limits." },
      { q: "How does matching work on Festiv?", a: "You add the events you're going to. Festiv shows you who else is going. You like people you find interesting, and if they like you back it's a match. Then you can chat and make plans." },
      { q: "My festival isn't listed, what now?", a: "Send us a message via the contact page and we'll add it. We continuously expand the database based on what users request." },
      { q: "When will Festiv be available?", a: "We're building hard. Sign up for the waitlist and you'll be the first to know when the app goes live." },
      { q: "My question isn't listed. What now?", a: null },
    ],
  },
};

export default function Vragen() {
  const { lang } = useLang();
  const txt = t[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      <Nav />
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "120px 24px 100px", textAlign: "center" }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 700,
          letterSpacing: "-1px",
          color: "#2A1758",
          marginBottom: "64px",
          lineHeight: 1.1,
        }}>
          {txt.title}
        </h1>

        <div style={{ display: "flex", flexDirection: "column" }} onClick={() => setOpenFaq(null)}>
          {txt.items.map((item, i) => (
            <div key={i} style={{ borderTop: i === 0 ? "1.5px solid rgba(42,23,88,0.15)" : undefined }}>
              <button
                onClick={e => { e.stopPropagation(); setOpenFaq(openFaq === i ? null : i); }}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "22px 0",
                  background: "none",
                  border: "none",
                  borderBottom: "1.5px solid rgba(42,23,88,0.15)",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "16px",
                }}
              >
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "17px", fontWeight: 600, color: "#2A1758" }}>
                  {item.q}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                  style={{ flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}>
                  <path d="M2 5L8 11L14 5" stroke="#2A1758" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openFaq === i && (
                <div style={{ padding: "20px 0 28px", borderBottom: "1.5px solid rgba(42,23,88,0.15)", marginTop: "-1.5px" }}>
                  {item.a === null ? (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                      <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#2A1758", opacity: 0.7, fontFamily: "'Inter', sans-serif" }}>
                        {lang === "nl" ? "Geen zorgen. Vraag het ons via" : "No worries. Just ask us via"}
                      </p>
                      <Link href="/contact" style={{ display: "inline-block", background: "#2A1758", color: "#FFFFFF", padding: "10px 22px", borderRadius: "100px", fontSize: "14px", fontWeight: 700, textDecoration: "none", fontFamily: "'Inter', sans-serif", flexShrink: 0 }}>
                        Contact
                      </Link>
                    </div>
                  ) : (
                    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#2A1758", opacity: 0.7, fontFamily: "'Inter', sans-serif", maxWidth: "640px", textAlign: "left" }}>
                      {item.a}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
