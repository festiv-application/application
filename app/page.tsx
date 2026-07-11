"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "./lib/LanguageContext";

// ─── Kleuren (logo palette) ──────────────────────────────────────────────────
const C = {
  dark: "#1a0a1e",                      // terracotta — hero, dark secties, footer
  cream: "#f3e7cd",                     // warm creme — lichte secties
  text: "#1f1a12",                      // donker ink op creme
  textLight: "#f3e7cd",                 // tekst op donker
  textMuted: "rgba(243,231,205,0.65)",
  textMutedDark: "rgba(31,26,18,0.55)",
  accent: "#1a0a1e",
  accentAlt: "#f3e7cd",
};

// ─── Logo component ──────────────────────────────────────────────────────────
function FestivAppIcon({ size = 40 }: { size?: number }) {
  const ticket = size * 0.625;
  const hole = size * 0.12;
  const heart = size * 0.175;
  return (
    <div style={{
      width: size, height: size, borderRadius: size * 0.24,
      background: "#1a0a1e", boxShadow: `0 ${size*0.06}px ${size*0.15}px rgba(196,98,46,.35)`,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: size * 0.075,
      flexShrink: 0,
    }}>
      <div style={{
        position: "relative", width: ticket, height: ticket * 0.62,
        background: "#f3e7cd", borderRadius: size * 0.08,
        transform: "rotate(-8deg)", boxShadow: `0 ${size*0.04}px ${size*0.09}px rgba(0,0,0,.25)`,
      }}>
        <div style={{ position: "absolute", top: "50%", left: 0, transform: "translate(-50%,-50%)", width: hole, height: hole, borderRadius: "50%", background: "#1a0a1e" }} />
        <div style={{ position: "absolute", top: "50%", right: 0, transform: "translate(50%,-50%)", width: hole, height: hole, borderRadius: "50%", background: "#1a0a1e" }} />
        <svg viewBox="0 0 24 24" width={heart} height={heart} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(-14deg)" }}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#1a0a1e" />
        </svg>
      </div>
      <span style={{ fontFamily: "'Gabarito',sans-serif", fontWeight: 800, fontSize: size * 0.145, letterSpacing: "-0.5px", color: "#f3e7cd", lineHeight: 1 }}>Festiv</span>
    </div>
  );
}

// ─── Intro ───────────────────────────────────────────────────────────────────
const INTRO_FLAG = "festivIntroPlayed";

const INTRO_DOTS = [
  { top: "12%", left: "8%",  size: 5,  delay: 0.1, dur: 2.8, color: "magenta" },
  { top: "25%", left: "18%", size: 3,  delay: 0.4, dur: 3.1, color: "yellow" },
  { top: "8%",  left: "35%", size: 4,  delay: 0.2, dur: 2.5, color: "magenta" },
  { top: "18%", left: "55%", size: 6,  delay: 0.6, dur: 3.4, color: "yellow" },
  { top: "5%",  left: "72%", size: 3,  delay: 0.3, dur: 2.9, color: "magenta" },
  { top: "30%", left: "82%", size: 5,  delay: 0.7, dur: 2.6, color: "yellow" },
  { top: "45%", left: "6%",  size: 4,  delay: 0.5, dur: 3.2, color: "yellow" },
  { top: "60%", left: "22%", size: 3,  delay: 0.2, dur: 2.7, color: "magenta" },
  { top: "72%", left: "12%", size: 6,  delay: 0.8, dur: 3.0, color: "yellow" },
  { top: "55%", left: "45%", size: 4,  delay: 0.3, dur: 2.8, color: "magenta" },
  { top: "80%", left: "58%", size: 3,  delay: 0.6, dur: 3.3, color: "yellow" },
  { top: "65%", left: "75%", size: 5,  delay: 0.4, dur: 2.5, color: "magenta" },
  { top: "85%", left: "88%", size: 4,  delay: 0.1, dur: 3.1, color: "yellow" },
  { top: "40%", left: "92%", size: 3,  delay: 0.9, dur: 2.9, color: "magenta" },
  { top: "90%", left: "35%", size: 5,  delay: 0.5, dur: 2.6, color: "yellow" },
];

// ─── Profiel-kaartje mockup ──────────────────────────────────────────────────
function ProfileCard({ name, age, festivals, color, photo, photoPosition = "center top" }: { name: string; age: number; festivals: string[]; color: string; photo?: string; photoPosition?: string }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 20,
      padding: "20px 20px 16px",
      boxShadow: "0 8px 32px rgba(42,23,88,0.12)",
      width: 220,
    }}>
      <div style={{
        width: "100%", height: 160, borderRadius: 12, background: color, marginBottom: 0,
        overflow: "hidden", position: "relative",
      }}>
        {photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: photoPosition }} />
        )}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "24px 12px 8px",
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.55))",
        }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>{name}, {age}</div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
        {festivals.map(f => (
          <span key={f} style={{ fontSize: 11, fontWeight: 600, color: C.dark, background: C.cream, borderRadius: 20, padding: "3px 10px" }}>{f}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Translations ─────────────────────────────────────────────────────────────
const translations = {
  nl: {
    download: "Download de app",
    navLinks: [
      { label: "Zo werkt het", href: "#hoe" },
      { label: "Festivals", href: "#festivals" },
      { label: "Vragen", href: "#vragen" },
    ],
    heroTitle: "Making great days even greater.",
    heroSub: "Match vooraf met mensen die ook naar hetzelfde festival gaan. Geen eindeloos swipen — gewoon echte ontmoetingen.",
    howTitle: "Zo werkt Festiv...",
    howSub: "Ga je naar een festival? Festiv laat je zien wie er ook heen gaat. Like, match, en spreek af bij de hoofdpoort.",
    step1Title: "Voeg je festivals toe",
    step1Sub: "Selecteer welke festivals en events je dit jaar bezoekt. Festiv laat je zien wie er ook heen gaat.",
    step2Title: "Swipe & match",
    step2Sub: "Bekijk profielen van mensen die ook gaan. Like wie je interessant vindt — match als het wederzijds is.",
    step3Title: "Ontmoet elkaar",
    step3Sub: "Chat kort, spreek af bij een podium of de ingang. Geen weken chatten — gewoon een mooie dag samen.",
    featuresTitle: "Festiv voor iedereen",
    features: [
      { icon: "", text: "Voor festivals én kleinere events" },
      { icon: "", text: "Romantisch, vrienden of gezelschap" },
      { icon: "", text: "Geverifieerde profielen" },
      { icon: "", text: "Matcht op basis van je agenda" },
      { icon: "", text: "Gratis te gebruiken" },
    ],
    statsItems: [
      { num: "500+", label: "aanmeldingen" },
      { num: "50+", label: "festivals in de app" },
      { num: "2026", label: "live" },
    ],
    ctaTitle: "Wees er als eerste bij.",
    ctaSub: "Meld je aan voor de wachtlijst en hoor als eerste wanneer Festiv live gaat.",
    placeholder: "jouw@email.nl",
    signupBtn: "Aanmelden voor de wachtlijst",
    noSpam: "Geen spam. Geen zorgen.",
    successTitle: "Je staat op de lijst!",
    successSub: "We laten je als eerste weten wanneer Festiv live gaat.",
    faqTitle: "Veelgestelde vragen",
    faqItems: [
      { q: "Wat is Festiv?", a: "Festiv is een app waarmee je mensen kunt ontmoeten die naar hetzelfde festival of evenement gaan als jij. Je matcht van tevoren en spreekt af ter plekke." },
      { q: "Voor wie is Festiv bedoeld?", a: "Voor iedereen die naar festivals en evenementen gaat — of je nu iemand romantisch zoekt, vrienden wil maken, of gewoon gezelschap wil bij een podium." },
      { q: "Is Festiv gratis?", a: "Ja, Festiv is gratis te gebruiken. Mogelijk komen er later premiumfuncties bij, maar de basis blijft gratis." },
      { q: "Wanneer is Festiv beschikbaar?", a: "We zijn hard aan het bouwen. Meld je aan voor de wachtlijst en je bent als eerste op de hoogte." },
      { q: "Mijn festival staat er niet bij, wat nu?", a: "Geen probleem — in de app kun je je festival als suggestie insturen. Wij bekijken 'm en zetten 'm erbij." },
    ],
    footerLinks: [
      { label: "Over ons", href: "/over-ons" },
      { label: "Contact", href: "/contact" },
      { label: "Privacybeleid", href: "/privacy" },
      { label: "Algemene voorwaarden", href: "/terms" },
    ],
    footerCopy: "© 2026 Festiv. Making great days even greater.",
  },
  en: {
    download: "Download the app",
    navLinks: [
      { label: "How it works", href: "#hoe" },
      { label: "Festivals", href: "#festivals" },
      { label: "FAQ", href: "#vragen" },
    ],
    heroTitle: "Making great days even greater.",
    heroSub: "Match in advance with people going to the same festival. No endless swiping — just real connections.",
    howTitle: "How Festiv works...",
    howSub: "Going to a festival? Festiv shows you who else is going. Like, match, and meet up at the main gate.",
    step1Title: "Add your festivals",
    step1Sub: "Select which festivals and events you're attending this year. Festiv shows you who else is going.",
    step2Title: "Swipe & match",
    step2Sub: "Browse profiles of people who are also going. Like who you find interesting — match if it's mutual.",
    step3Title: "Meet each other",
    step3Sub: "Chat briefly, meet at a stage or the entrance. No weeks of chatting — just a great day together.",
    featuresTitle: "Festiv for everyone",
    features: [
      { icon: "", text: "For festivals and smaller events" },
      { icon: "", text: "Romantic, friends or company" },
      { icon: "", text: "Verified profiles" },
      { icon: "", text: "Matches based on your agenda" },
      { icon: "", text: "Free to use" },
    ],
    statsItems: [
      { num: "500+", label: "sign-ups" },
      { num: "50+", label: "festivals in the app" },
      { num: "2026", label: "going live" },
    ],
    ctaTitle: "Be the first.",
    ctaSub: "Sign up for the waitlist and be the first to know when Festiv goes live.",
    placeholder: "your@email.com",
    signupBtn: "Join the waitlist",
    noSpam: "No spam. No worries.",
    successTitle: "You're on the list!",
    successSub: "We'll let you know first when Festiv goes live.",
    faqTitle: "Frequently asked questions",
    faqItems: [
      { q: "What is Festiv?", a: "Festiv is an app that lets you meet people going to the same festival or event as you. You match in advance and meet up on the day." },
      { q: "Who is Festiv for?", a: "For anyone who goes to festivals and events — whether you're looking for something romantic, new friends, or just good company at a stage." },
      { q: "Is Festiv free?", a: "Yes, Festiv is free to use. We may add premium features later, but the basics stay free." },
      { q: "When will Festiv be available?", a: "We're building hard. Sign up for the waitlist and you'll be the first to know." },
      { q: "My festival isn't listed, what now?", a: "No problem — in the app you can submit your festival as a suggestion. We review it and add it." },
    ],
    footerLinks: [
      { label: "About us", href: "/over-ons" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms & conditions", href: "/terms" },
    ],
    footerCopy: "© 2026 Festiv. Making great days even greater.",
  },
};

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const { lang, toggle: setLang } = useLang();
  const txt = translations[lang as keyof typeof translations] ?? translations.nl;

  // Intro — start altijd als "done" (server-safe), client corrigeert in useEffect
  const [introWipe, setIntroWipe] = useState(false);
  const [introDone, setIntroDone] = useState(true);
  const [showTitle, setShowTitle] = useState(false);

  // Waitlist form
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) history.replaceState(null, "", window.location.pathname);
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const isReload = nav?.type === "reload";
    const shouldPlay = isReload || !sessionStorage.getItem(INTRO_FLAG);
    if (!shouldPlay) return;
    setIntroDone(false);
    const t1 = setTimeout(() => setShowTitle(true), 100);
    const t2 = setTimeout(() => setIntroWipe(true), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Er ging iets mis."); }
      else { setSuccess(true); }
    } catch {
      setError("Er ging iets mis, probeer het opnieuw.");
    }
    setLoading(false);
  }

  return (
    <>
      {/* ── Intro ── */}
      {!introDone && (
        <div style={{ position: "fixed", inset: 0, zIndex: 500, pointerEvents: introWipe ? "none" : "auto" }}>
          <div style={{
            position: "absolute", inset: 0, background: C.dark,
            transform: introWipe ? "translateY(-100%)" : "translateY(0)",
            transition: "transform 0.65s cubic-bezier(0.76,0,0.24,1)",
          }}
          onTransitionEnd={() => { if (introWipe) { setIntroDone(true); sessionStorage.setItem(INTRO_FLAG, "1"); } }}>
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
              {INTRO_DOTS.map((s, i) => (
                <span key={i} style={{
                  position: "absolute", top: s.top, left: s.left,
                  width: s.size, height: s.size, borderRadius: "50%",
                  background: s.color === "magenta" ? C.accent : C.accentAlt,
                  animation: `${s.color === "magenta" ? "dot-breathe-magenta" : "dot-breathe-yellow"} ${s.dur}s ease-in-out ${s.delay}s infinite`,
                }} />
              ))}
            </div>
          </div>
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: introWipe ? 0 : (showTitle ? 1 : 0),
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, opacity: 0, animation: "wave-appear 0.8s ease 0.3s forwards" }}>
              <FestivAppIcon size={120} />
            </div>
          </div>
        </div>
      )}

      {/* ── Nav ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: 60, padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(26,10,30,0.97)", backdropFilter: "blur(16px)",
        opacity: introDone ? 1 : 0, transition: "opacity 0.6s ease",
        pointerEvents: introDone ? "auto" : "none",
      }}>
        <Link href="/" style={{ textDecoration: "none" }} onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <FestivAppIcon size={36} />
            <span style={{ fontFamily: "'Gabarito', sans-serif", fontWeight: 800, fontSize: 20, color: "#f3e7cd", lineHeight: 1, letterSpacing: "-0.5px" }}>Festiv</span>
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {txt.navLinks.map(l => (
            <a key={l.label} href={l.href} style={{ color: "rgba(252,244,236,0.7)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FCF4EC")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(252,244,236,0.7)")}>
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setLang()}
            style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(252,244,236,0.55)", fontSize: 13, fontWeight: 500, padding: 0 }}>
            {lang === "nl" ? "EN" : "NL"}
          </button>
          <a href="#aanmelden" style={{
            background: C.cream, color: C.dark,
            padding: "9px 22px", borderRadius: 100,
            fontSize: 13, fontWeight: 700, textDecoration: "none",
            display: "inline-block",
          }}>
            {txt.download}
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{
        background: C.dark, minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "120px 80px 80px",
        opacity: introDone ? 1 : 0, transition: "opacity 0.6s ease 0.1s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif", fontWeight: 800,
              fontSize: "clamp(44px, 5vw, 72px)", color: C.textLight,
              lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 28,
            }}>
              {txt.heroTitle}
            </h1>
            <p style={{ fontSize: 18, color: C.textMuted, lineHeight: 1.7, maxWidth: 480, marginBottom: 48 }}>
              {txt.heroSub}
            </p>
            <a href="#aanmelden" style={{
              display: "inline-block",
              background: C.cream, color: C.dark,
              padding: "16px 40px", borderRadius: 100,
              fontSize: 16, fontWeight: 700, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(243,231,205,0.2)",
            }}>
              {txt.download}
            </a>
          </div>

          {/* Profiel-kaartjes stapel */}
          <div style={{ position: "relative", height: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", top: 20, left: 40, transform: "rotate(-4deg)", opacity: 0.7 }}>
              <ProfileCard name="Tim" age={25} festivals={["Pinkpop", "Awakenings", "Verknipt"]} color="#FBC02D" photo="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=440&q=80" photoPosition="center 20%" />
            </div>
            <div style={{ position: "absolute", top: 60, right: 20, transform: "rotate(3deg)", opacity: 0.85 }}>
              <ProfileCard name="Sanne" age={26} festivals={["Dekmantel", "DGTL"]} color="#2160D8" photo="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=440&q=80" photoPosition="center 30%" />
            </div>
            <div style={{ position: "relative", zIndex: 2 }}>
              <ProfileCard name="Lisa" age={24} festivals={["Lowlands", "Pinkpop"]} color="#E84C92" photo="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=440&q=80" photoPosition="center 50%" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Hoe werkt het intro ── */}
      <section id="hoe" style={{ background: C.cream, padding: "100px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(36px, 4vw, 56px)", color: C.text, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {txt.howTitle}
          </h2>
          <p style={{ fontSize: 18, color: C.textMutedDark, lineHeight: 1.75, paddingTop: 8 }}>
            {txt.howSub}
          </p>
        </div>
      </section>

      {/* ── Stap 1: festivals toevoegen ── */}
      <section style={{ background: C.dark, padding: "100px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Stap 1</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(32px, 3.5vw, 52px)", color: C.textLight, lineHeight: 1.1, marginBottom: 24 }}>
              {txt.step1Title}
            </h2>
            <p style={{ fontSize: 18, color: C.textMuted, lineHeight: 1.75 }}>
              {txt.step1Sub}
            </p>
          </div>
          {/* Festival-lijst mockup */}
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 24, padding: 28 }}>
            {["Pinkpop", "Lowlands", "Awakenings", "Dekmantel", "DGTL", "Verknipt"].map((f, i) => (
              <div key={f} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "14px 0",
                borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}>
                <span style={{ color: C.textLight, fontSize: 16, fontWeight: 500 }}>{f}</span>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: i < 3 ? C.accent : "rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, color: "#fff",
                }}>
                  {i < 3 ? "✓" : "+"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stap 2: swipe & match ── */}
      <section style={{ background: C.cream, padding: "100px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Match-kaartje mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 260 }}>
              <ProfileCard name="Emma" age={25} festivals={["Lowlands", "Pinkpop", "DGTL"]} color="#E84C92" photo="https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=440&q=80" />
              <div style={{
                position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)",
                display: "flex", gap: 16,
              }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>✕</div>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: C.accent, boxShadow: "0 4px 16px rgba(232,76,146,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>♥</div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Stap 2</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(32px, 3.5vw, 52px)", color: C.text, lineHeight: 1.1, marginBottom: 24 }}>
              {txt.step2Title}
            </h2>
            <p style={{ fontSize: 18, color: C.textMutedDark, lineHeight: 1.75 }}>
              {txt.step2Sub}
            </p>
          </div>
        </div>
      </section>

      {/* ── Stap 3: ontmoet elkaar ── */}
      <section style={{ background: C.dark, padding: "100px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Stap 3</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(32px, 3.5vw, 52px)", color: C.textLight, lineHeight: 1.1, marginBottom: 24 }}>
              {txt.step3Title}
            </h2>
            <p style={{ fontSize: 18, color: C.textMuted, lineHeight: 1.75 }}>
              {txt.step3Sub}
            </p>
          </div>
          {/* Chat mockup */}
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 24, padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { me: false, text: "Hey! Ik ga ook naar Pinkpop zaterdag 🎉" },
              { me: true,  text: "Echt?! Ik ook, bij welk podium begin je?" },
              { me: false, text: "Mainstage om 14u, daarna Greenhouse" },
              { me: true,  text: "Perfect, zien we elkaar bij de ingang? 🙌" },
            ].map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.me ? "flex-end" : "flex-start" }}>
                <div style={{
                  background: m.me ? C.accent : "rgba(255,255,255,0.12)",
                  color: "#fff", borderRadius: m.me ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  padding: "10px 16px", fontSize: 14, maxWidth: "75%", lineHeight: 1.5,
                }}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ background: C.cream, padding: "100px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(36px, 4vw, 56px)", color: C.text, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {txt.featuresTitle}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 28, paddingTop: 8 }}>
            {txt.features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.dark, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="#f3e7cd" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <p style={{ fontSize: 17, color: C.textMutedDark, lineHeight: 1.6, paddingTop: 10 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ background: C.dark, padding: "80px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap: 40 }}>
          {txt.statsItems.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(40px, 5vw, 64px)", color: C.textLight, lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 15, color: C.textMuted, marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA / Aanmelden ── */}
      <section id="aanmelden" style={{ background: C.cream, padding: "120px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(36px, 4vw, 60px)", color: C.text, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 20 }}>
              {txt.ctaTitle}
            </h2>
            <p style={{ fontSize: 18, color: C.textMutedDark, lineHeight: 1.7 }}>
              {txt.ctaSub}
            </p>
          </div>
          <div>
            {success ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 28, color: C.text, marginBottom: 8 }}>{txt.successTitle}</h3>
                <p style={{ color: C.textMutedDark }}>{txt.successSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input
                  type="email" required
                  placeholder={txt.placeholder}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    background: "#fff", border: "1.5px solid rgba(42,23,88,0.15)",
                    borderRadius: 16, padding: "18px 20px",
                    fontSize: 16, color: C.text, outline: "none",
                    fontFamily: "inherit",
                  }}
                />
                {error && <p style={{ color: C.accent, fontSize: 14 }}>{error}</p>}
                <button type="submit" disabled={loading} style={{
                  background: C.dark, color: C.textLight,
                  border: "none", borderRadius: 16, padding: "18px 20px",
                  fontSize: 16, fontWeight: 700, cursor: loading ? "wait" : "pointer",
                  opacity: loading ? 0.6 : 1, fontFamily: "inherit",
                }}>
                  {loading ? "…" : txt.signupBtn}
                </button>
                <p style={{ fontSize: 13, color: C.textMutedDark, textAlign: "center" }}>{txt.noSpam}</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="vragen" style={{ background: C.dark, padding: "100px 80px" }} onClick={() => setOpenFaq(null)}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(36px, 4vw, 56px)", color: C.textLight, marginBottom: 60, letterSpacing: "-0.02em" }}>
            {txt.faqTitle}
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {txt.faqItems.map((item, i) => (
              <div key={i}
                onClick={e => { e.stopPropagation(); setOpenFaq(openFaq === i ? null : i); }}
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", padding: "28px 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: C.textLight, lineHeight: 1.3 }}>{item.q}</span>
                  <span style={{ color: C.accent, fontSize: 22, flexShrink: 0, transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                </div>
                {openFaq === i && item.a && (
                  <p style={{ color: C.textMuted, fontSize: 16, lineHeight: 1.75, marginTop: 16, maxWidth: 700 }}>{item.a}</p>
                )}
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: C.dark, borderTop: "1px solid rgba(255,255,255,0.08)", padding: "48px 80px 56px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <FestivAppIcon size={32} />
              <span style={{ fontFamily: "'Gabarito', sans-serif", fontWeight: 800, fontSize: 18, color: "#f3e7cd", letterSpacing: "-0.5px" }}>Festiv</span>
            </span>
            <p style={{ fontSize: 13, color: C.textMuted, maxWidth: 280, lineHeight: 1.6 }}>{txt.footerCopy}</p>
          </div>
          <div style={{ display: "flex", gap: 48 }}>
            {txt.footerLinks.map(l => (
              <Link key={l.label} href={l.href} style={{ color: C.textMuted, textDecoration: "none", fontSize: 14, fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FCF4EC")}
                onMouseLeave={e => (e.currentTarget.style.color = C.textMuted)}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
