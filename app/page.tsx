"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { useLang } from "./lib/LanguageContext";

const translations = {
  nl: {
    moreFestiv: "Over Festiv",
    experiences: "Ervaringen",
    aboutUs: "Over ons",
    ourTeam: "Ons team",
    workAt: "Werken bij",
    contact: "Contact",
    download: "Download de app",
    signup: "Aanmelden",
    subtitle: "Om mooie dagen nóg mooier te maken",
    tagline1: "De dating app",
    tagline2: "om mooie dagen nóg mooier te maken.",
    scroll: "SCROLL",
    line1: "Ga je naar een festival of event?",
    line2: "Match vooraf of ter plekke met mensen die ook gaan.",
    line3: "En maak een mooie dag nóg mooier.",
    howTitle: "Zo werkt het",
    steps: [
      { title: "Kies je evenementen", desc: "Voeg de feesten en festivals toe waar jij naartoe gaat." },
      { title: "Swipe je matches", desc: "Zie wie ook gaan en like mensen die jij interessant vindt." },
      { title: "Ontmoet elkaar", desc: "Match, chat en spreek spontaan af bij een stage of meet up." },
    ],
    counterSub: "Mensen gingen je al voor",
    counterDesc: "Wees er snel bij — de eerste gebruikers krijgen een",
    counterHighlight: "half jaar gratis premium",
    signupTitle: "Enthousiast?",
    signupSub: "Laat je e-mailadres achter en wij laten je als eerste weten wanneer Festiv live gaat.",
    placeholder: "jouw@email.nl",
    signupBtn: "Meld je vast aan terwijl wij hard verder bouwen",
    noSpam: "Geen spam. Geen zorgen.",
    successTitle: "Je staat op de lijst!",
    successSub: "We laten je als eerste weten wanneer Festiv live gaat.",
    faqNav: "Vragen",
    faqTitle: "Veelgestelde vragen",
    faqItems: [
      { q: "Wat is Festiv?", a: "Festiv is een app waarmee je mensen kunt ontmoeten die naar hetzelfde festival of evenement gaan als jij. Je matcht van tevoren, chatmet ze, en spreekt af ter plekke." },
      { q: "Voor wie is Festiv bedoeld?", a: "Voor iedereen die naar festivals en evenementen gaat en openstaat voor nieuwe ontmoetingen — of je nu iemand romantisch zoekt, vrienden wil maken, of gewoon gezelschap wil hebben bij een podium." },
      { q: "Is Festiv gratis?", a: "De basisfunctionaliteit is gratis. De eerste gebruikers die zich aanmelden krijgen een half jaar premium gratis — met toegang tot alle functies zonder beperkingen." },
      { q: "Hoe werkt matchen op Festiv?", a: "Je voegt de evenementen toe waar jij naartoe gaat. Festiv laat je zien wie er ook heen gaan. Je liket mensen die je interessant vindt, en als zij jou ook liken ontstaat er een match. Dan kun je chatten en iets afspreken." },
      { q: "Mijn festival staat er niet bij, wat nu?", a: "Stuur ons een bericht via de contactpagina en we voegen het toe. We bouwen de database continu uit op basis van wat gebruikers aanvragen." },
      { q: "Wanneer is Festiv beschikbaar?", a: "We zijn hard aan het bouwen. Meld je aan voor de wachtlijst en je bent als eerste op de hoogte wanneer de app live gaat." },
      { q: "Mijn vraag staat er niet tussen. Wat nu?", a: null },
    ],
    footerCopy: "© 2026 Festiv. Om mooie dagen nóg mooier te maken.",
    footerLinks: [
      { label: "Over ons", href: "/over-ons" },
      { label: "Ervaringen", href: "/ervaringen" },
      { label: "Meer over Festiv", href: "/meer-over-festiv" },
      { label: "Contact", href: "/contact" },
    ],
  },
  en: {
    moreFestiv: "About Festiv",
    experiences: "Experiences",
    aboutUs: "About us",
    ourTeam: "Our team",
    workAt: "Work at Festiv",
    contact: "Contact",
    download: "Download the app",
    signup: "Sign up",
    subtitle: "To make great days even greater",
    tagline1: "The dating app",
    tagline2: "to make great days even greater.",
    scroll: "SCROLL",
    line1: "Going to a festival or event?",
    line2: "Match beforehand or on the spot with people who are also going.",
    line3: "And make a great day even greater.",
    howTitle: "How it works",
    steps: [
      { title: "Choose your events", desc: "Add the parties and festivals you're going to." },
      { title: "Swipe your matches", desc: "See who else is going and like people you find interesting." },
      { title: "Meet each other", desc: "Match, chat and spontaneously meet up at a stage or meet up." },
    ],
    counterSub: "People already went before you",
    counterDesc: "Be quick — the first users get a",
    counterHighlight: "free six months premium",
    signupTitle: "Excited?",
    signupSub: "Leave your email address and we'll let you know first when Festiv goes live.",
    placeholder: "your@email.com",
    signupBtn: "Sign up while we keep building",
    noSpam: "No spam. No worries.",
    successTitle: "You're on the list!",
    successSub: "We'll let you know first when Festiv goes live.",
    faqNav: "Questions",
    faqTitle: "Frequently asked questions",
    faqItems: [
      { q: "What is Festiv?", a: "Festiv is an app that lets you meet people going to the same festival or event as you. You match in advance, chat with them, and meet up on the day." },
      { q: "Who is Festiv for?", a: "For anyone who goes to festivals and events and is open to new connections — whether you're looking for something romantic, new friends, or just good company at a stage." },
      { q: "Is Festiv free?", a: "The basic functionality is free. The first users to sign up get six months of premium for free — with access to all features without limits." },
      { q: "How does matching work on Festiv?", a: "You add the events you're going to. Festiv shows you who else is going. You like people you find interesting, and if they like you back it's a match. Then you can chat and make plans." },
      { q: "My festival isn't listed, what now?", a: "Send us a message via the contact page and we'll add it. We continuously expand the database based on what users request." },
      { q: "When will Festiv be available?", a: "We're building hard. Sign up for the waitlist and you'll be the first to know when the app goes live." },
      { q: "My question isn't listed. What now?", a: null },
    ],
    footerCopy: "© 2026 Festiv. To make great days even greater.",
    footerLinks: [
      { label: "About us", href: "/over-ons" },
      { label: "Experiences", href: "/ervaringen" },
      { label: "More about Festiv", href: "/meer-over-festiv" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="8" stroke="#2A1758" strokeWidth="1.4"/>
      <ellipse cx="9" cy="9" rx="3.5" ry="8" stroke="#2A1758" strokeWidth="1.4"/>
      <line x1="1" y1="6.5" x2="17" y2="6.5" stroke="#2A1758" strokeWidth="1.4"/>
      <line x1="1" y1="11.5" x2="17" y2="11.5" stroke="#2A1758" strokeWidth="1.4"/>
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L4.5 5L8 1" stroke="#2A1758" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// "Festiv" met gouden ster als punt op de i
function FestivLogo({ size = 36, color = "#2A1758", letterSpacing = "-1px", weight = 800 }: { size?: number | string; color?: string; letterSpacing?: string; weight?: number }) {
  return (
    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: size, fontWeight: weight, color, letterSpacing, lineHeight: 1 }}>
      Fest
      <span style={{ position: "relative", display: "inline-block" }}>
        &#x131;
        {/* Geanimeerde container: ster + komeetstaart */}
        <span style={{
          position: "absolute",
          top: "0.75em",
          left: "55%",
          fontSize: "0.17em",
          lineHeight: 1,
          display: "inline-block",
          willChange: "transform, opacity",
          animation: "shooting-star 1.9s ease-out 0.3s both",
        }}>
          {/* Komeetstaart */}
          <span style={{
            position: "absolute",
            right: "55%",
            top: "50%",
            display: "block",
            height: "0.35em",
            background: "linear-gradient(to right, transparent 0%, rgba(255,209,102,0.25) 40%, rgba(255,209,102,0.75) 100%)",
            transform: "translateY(-50%)",
            borderRadius: "4px",
            filter: "blur(1.5px)",
            pointerEvents: "none",
            animation: "shooting-star-tail 1.9s ease-out 0.3s both",
          }} />
          {/* Ster */}
          <span style={{ color: "#FFD166" }}>★</span>
        </span>
      </span>
      v
    </span>
  );
}

// Vaste posities zodat server/client identiek renderen (geen Math.random tijdens render)
const INTRO_STARS = [
  { top: "12%", left: "8%", size: 3, delay: 0.1, dur: 2.8 },
  { top: "22%", left: "22%", size: 2, delay: 0.8, dur: 3.4 },
  { top: "8%", left: "38%", size: 2, delay: 1.4, dur: 2.6 },
  { top: "18%", left: "62%", size: 3, delay: 0.4, dur: 3.0 },
  { top: "10%", left: "80%", size: 2, delay: 1.1, dur: 2.9 },
  { top: "30%", left: "92%", size: 3, delay: 0.6, dur: 3.2 },
  { top: "42%", left: "14%", size: 2, delay: 1.7, dur: 2.7 },
  { top: "55%", left: "6%", size: 3, delay: 0.2, dur: 3.1 },
  { top: "68%", left: "18%", size: 2, delay: 1.0, dur: 2.5 },
  { top: "78%", left: "32%", size: 3, delay: 0.5, dur: 3.3 },
  { top: "88%", left: "48%", size: 2, delay: 1.3, dur: 2.9 },
  { top: "82%", left: "64%", size: 3, delay: 0.9, dur: 2.8 },
  { top: "70%", left: "82%", size: 2, delay: 1.6, dur: 3.0 },
  { top: "58%", left: "94%", size: 3, delay: 0.3, dur: 2.6 },
  { top: "40%", left: "76%", size: 2, delay: 1.2, dur: 3.4 },
  { top: "48%", left: "44%", size: 2, delay: 0.7, dur: 2.7 },
  { top: "62%", left: "58%", size: 3, delay: 1.5, dur: 3.1 },
  { top: "30%", left: "50%", size: 2, delay: 0.0, dur: 2.9 },
  { top: "92%", left: "10%", size: 2, delay: 1.8, dur: 2.6 },
  { top: "5%", left: "60%", size: 2, delay: 0.45, dur: 3.0 },
];

// We gebruiken sessionStorage (blijft staan bij client-side navigatie, bv. terug naar "/"
// via het Festiv-logo). De reload-check hieronder staat bewust op module-niveau, dus hij
// draait precies ÉÉN keer per echte page load — niet opnieuw bij elke keer dat het
// Home-component zelf (opnieuw) mount door client-side navigatie. Zou hij wél bij elke
// mount opnieuw draaien, dan blijft performance.getEntriesByType("navigation") namelijk
// altijd hetzelfde (eerste) navigatietype van de hele tab teruggeven, ook na talloze
// SPA-navigaties — en zou een sessie die ooit met een refresh begon de intro voor altijd
// blijven herhalen.
const INTRO_FLAG = "festivIntroPlayed";

if (typeof window !== "undefined") {
  const navEntry = performance.getEntriesByType?.("navigation")?.[0] as PerformanceNavigationTiming | undefined;
  if (navEntry?.type === "reload") {
    sessionStorage.removeItem(INTRO_FLAG);
  }
}

function hasIntroPlayedThisSession(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(INTRO_FLAG) === "1";
}

export default function Home() {
  const { lang, toggle } = useLang();
  const txt = translations[lang];
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [overOnsOpen, setOverOnsOpen] = useState(false);
  const [overFestivOpen, setOverFestivOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [innerHeight, setInnerHeight] = useState(800);
  const [visible, setVisible] = useState<Set<string>>(new Set());

  const [introWipe, setIntroWipe] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [heroIn, setHeroIn] = useState(false);
  const [introAlreadyPlayed, setIntroAlreadyPlayed] = useState(false);

  // Pas na hydration checken (window bestaat niet op de server), zodat de eerste render altijd matcht.
  useLayoutEffect(() => {
    if (hasIntroPlayedThisSession()) {
      setIntroAlreadyPlayed(true);
      setIntroDone(true);
      setHeroIn(true);
    }
    // De hoofdpagina heeft geen navigatiebalk met het gele bolletje. Reset de onthouden
    // positie zodat het bolletje, als je via deze pagina weer naar een subpagina gaat,
    // niet meer vanaf de vorige subpagina animeert maar gewoon direct op de juiste plek
    // verschijnt.
    if (typeof window !== "undefined") sessionStorage.removeItem("navDotLeft");
  }, []);
  // Scroll blokkeren zolang de intro speelt, zodat je niet "stiekem" al gescrolld bent
  // zodra de animatie klaar is.
  useEffect(() => {
    if (introDone) return;
    const html = document.documentElement;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    window.scrollTo(0, 0);
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const blockScroll = () => window.scrollTo(0, 0);
    window.addEventListener("scroll", blockScroll);
    return () => {
      html.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      window.removeEventListener("scroll", blockScroll);
    };
  }, [introDone]);

  useEffect(() => {
    if (introDone) {
      const t = setTimeout(() => setHeroIn(true), 100);
      return () => clearTimeout(t);
    }
  }, [introDone]);

  useEffect(() => {
    if (introAlreadyPlayed) return;
    // Ster-animatie (shooting-star) duurt 0.3s delay + 1.9s = 2.2s, daarna pas de wipe.
    // introDone wordt gezet via onTransitionEnd op de wipe-achtergrond, exact synchroon met de animatie.
    const t1 = setTimeout(() => setShowTitle(true), 150);
    const t2 = setTimeout(() => setShowSubtitle(true), 1200);
    const t3 = setTimeout(() => setIntroWipe(true), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [introAlreadyPlayed]);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
    const onResize = () => setInnerHeight(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      if (y > 40) setHasScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-reveal") ?? "";
          setVisible(prev => new Set([...prev, id]));
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);


  // Eerste 100vh blijft de sectie gepind, daarna schuift het paarse tekstblok erover heen
  // Geen losse buffer meer: het paarse blok schuift direct mee tijdens de eerste 100vh scroll.
  const bufferProgress = innerHeight > 0 ? Math.max(0, Math.min(1, scrollY / innerHeight)) : 0;
  useEffect(() => {
    if (bufferProgress >= 0.8) setVisible(prev => prev.has("tekst") ? prev : new Set([...prev, "tekst"]));
  }, [bufferProgress]);


  const slideIn = (id: string, delay = 0) => ({
    opacity: visible.has(id) ? 1 : 0,
    transform: visible.has(id) ? "translateY(0px)" : "translateY(40px)",
    transition: `opacity 0.7s ease ${delay}s, transform 1.1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const navLink = {
    background: "none" as const,
    border: "none",
    cursor: "pointer",
    padding: "8px 12px",
    fontSize: "14px",
    fontWeight: 700,
    color: "#2A1758",
    fontFamily: "'Inter', sans-serif",
    borderRadius: "8px",
    textDecoration: "none",
    display: "inline-block" as const,
    whiteSpace: "nowrap" as const,
  };

  return (
    <main>

      {/* Intro: paars scherm, Festiv vervaagt in, dan wipe omhoog */}
      {!introDone && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 500,
          overflow: "hidden",
          pointerEvents: introWipe ? "none" : "auto",
        }}>
          {/* Paarse achtergrond + sterren — wipet omhoog */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "#2A1758",
            transform: introWipe ? "translateY(-100%)" : "translateY(0)",
            transition: "transform 0.9s cubic-bezier(0.76,0,0.24,1)",
          }}
          onTransitionEnd={() => { if (introWipe) { setIntroDone(true); sessionStorage.setItem(INTRO_FLAG, "1"); } }}>
            {/* Sterren — kleine witte stippen die ademen */}
            <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
              {INTRO_STARS.map((s, i) => (
                <span key={i} style={{
                  position: "absolute",
                  top: s.top,
                  left: s.left,
                  width: s.size,
                  height: s.size,
                  borderRadius: "50%",
                  background: "#FFFFFF",
                  animation: `star-breathe ${s.dur}s ease-in-out ${s.delay}s infinite`,
                }} />
              ))}
            </div>
          </div>

          {/* Tekst — blijft op zijn plek (geen transform) maar dooft tegelijk met de wipe, zodat hij niet los over de echte pagina blijft hangen */}
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            opacity: introWipe ? 0 : 1,
            transition: "opacity 0.9s ease",
          }}>
            <h1 style={{
              fontSize: "clamp(60px, 11vw, 110px)",
              lineHeight: 0.95,
              letterSpacing: "-3px",
              margin: 0,
              opacity: showTitle ? 1 : 0,
              transform: showTitle ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}>
              <FestivLogo size="clamp(60px, 11vw, 110px)" color="#FFFFFF" letterSpacing="-3px" weight={700} />
            </h1>
          </div>
        </div>
      )}

      {/* Nav */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        padding: "0 40px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(250,250,248,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(42,23,88,0.1)",
        opacity: introDone ? 1 : 0,
        transition: "opacity 0.6s ease",
        pointerEvents: introDone ? "auto" : "none",
      }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", paddingBottom: "6px" }}>
          <Link href="/" style={{ textDecoration: "none", marginRight: "16px" }}
            onClick={e => {
              // We zijn al op de homepage: Link navigeert dan niet, dus zelf naar boven scrollen.
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
            <FestivLogo size={36} color="#2A1758" letterSpacing="-0.5px" />
          </Link>

          <div style={{ position: "relative" }}
            onMouseEnter={() => setOverFestivOpen(true)}
            onMouseLeave={() => setOverFestivOpen(false)}>
            <Link href="/meer-over-festiv" style={navLink}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
              onMouseLeave={e => (e.currentTarget.style.background = "none")}>
              {txt.moreFestiv}
            </Link>
            {overFestivOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, paddingTop: "8px", background: "transparent", width: "max-content", zIndex: 300 }}>
                <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 8px 32px rgba(42,23,88,0.15)", padding: "6px" }}>
                  {[
                    { label: lang === "nl" ? "Zo werkt het" : "How it works", href: "/meer-over-festiv/hoe-werkt-het" },
                    { label: lang === "nl" ? "Het ontstaan" : "Our story", href: "/meer-over-festiv/het-ontstaan" },
                  ].map(item => (
                    <Link key={item.label} href={item.href} style={{ display: "block", padding: "9px 14px", fontSize: "14px", fontWeight: 700, color: "#2A1758", textDecoration: "none", borderRadius: "8px", whiteSpace: "nowrap" as const }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(248,245,240,0.35)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "none")}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/ervaringen" style={navLink}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}>
            {txt.experiences}
          </Link>

          <div style={{ position: "relative" }}
            onMouseEnter={() => setOverOnsOpen(true)}
            onMouseLeave={() => setOverOnsOpen(false)}>
            <Link href="/over-ons" style={navLink}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
              onMouseLeave={e => (e.currentTarget.style.background = "none")}>
              {txt.aboutUs}
            </Link>
            {overOnsOpen && (
              <div style={{
                position: "absolute",
                top: "100%", left: 0,
                paddingTop: "8px",
                background: "transparent",
                width: "max-content",
                zIndex: 300,
              }}>
                <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 8px 32px rgba(42,23,88,0.15)", padding: "6px" }}>
                {[{ label: txt.ourTeam, href: "/over-ons/ons-team" }, { label: txt.workAt, href: "/over-ons/werken-bij" }].map(item => (
                  <Link key={item.label} href={item.href} style={{
                    display: "block",
                    padding: "9px 14px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#2A1758",
                    textDecoration: "none",
                    borderRadius: "8px",
                    whiteSpace: "nowrap" as const,
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(248,245,240,0.35)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "none")}>
                    {item.label}
                  </Link>
                ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href={hasScrolled ? "#vragen" : "/vragen"}
            style={navLink}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}
            onClick={e => {
              if (hasScrolled) {
                e.preventDefault();
                const el = document.getElementById("vragen");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}>
            {txt.faqNav}
          </Link>
          <Link href="/contact" style={navLink}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}>
            {txt.contact}
          </Link>
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexShrink: 0 }}>
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", padding: "6px 2px", opacity: langOpen ? 0.7 : 1, transition: "opacity 0.15s" }}>
              <GlobeIcon />
              <ChevronDown />
            </button>
            {langOpen && (
              <div style={{ position: "absolute", top: "100%", right: 0, paddingTop: "6px", zIndex: 300 }}>
                <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 8px 32px rgba(42,23,88,0.15)", padding: "6px", width: "140px" }}>
                  {[{ label: "Nederlands", value: "nl" }, { label: "English", value: "en" }].map(opt => (
                    <button key={opt.value} onClick={() => { if (lang !== opt.value) toggle(); setLangOpen(false); }} style={{
                      display: "block", width: "100%", textAlign: "left", padding: "9px 14px", fontSize: "14px",
                      fontWeight: lang === opt.value ? 700 : 500, color: "#2A1758",
                      background: lang === opt.value ? "rgba(248,245,240,0.35)" : "none",
                      border: "none", borderRadius: "8px", cursor: "pointer", fontFamily: "'Inter', sans-serif",
                    }}
                      onMouseEnter={e => { if (lang !== opt.value) e.currentTarget.style.background = "rgba(248,245,240,0.2)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = lang === opt.value ? "rgba(248,245,240,0.35)" : "none"; }}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="#download" style={{
            background: "#FFD166",
            color: "#2A1758",
            padding: "10px 22px",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            {txt.download}
          </a>
          <a href="#aanmelden" style={{
            background: "#2A1758",
            color: "#FFFFFF",
            padding: "10px 22px",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            {txt.signup}
          </a>
        </div>
      </nav>

      {/* Hero + Telefoon: sticky container. Geen losse buffer meer — het paarse blok schuift al tijdens de eerste 100vh scroll over de hero heen. Hoogte = 100vh (scroll-tied slide) + 100vh (sticky scroll-runway) = 200vh. */}
      <div style={{ height: "200vh", position: "relative" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh", background: "#FAFAF8", overflow: "hidden" }}>

          {/* Vak 1, 2, 3 — verschijnen zodra de intro klaar is, vervagen terwijl het paarse blok erover heen schuift */}
          <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            padding: "100px 40px 40px",
            opacity: 1 - Math.min(1, bufferProgress / 0.6),
            pointerEvents: bufferProgress > 0.05 ? "none" : "auto",
          }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", height: "calc(100vh - 140px)" }}>

              {/* Vak 1: tagline met TM */}
              <div style={{
                position: "absolute",
                top: "300px",
                left: 0,
                maxWidth: "760px",
                opacity: heroIn ? 1 : 0,
                transform: heroIn ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s",
              }}>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 700,
                  color: "#2A1758",
                  lineHeight: 1.2,
                  letterSpacing: "-0.5px",
                }}>
                  {txt.tagline1}
                  <br />
                  {txt.tagline2}
                  <sup style={{
                    fontSize: "0.28em",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    color: "#2A1758",
                    opacity: 0.5,
                    marginLeft: "2px",
                  }}>TM</sup>
                </p>
              </div>

              {/* Vak 2: getekend pijltje — vlak onder/naast de tekst */}
              <div style={{
                position: "absolute",
                top: "400px",
                left: "520px",
                opacity: heroIn ? 1 : 0,
                transition: "opacity 0.4s ease 0.6s",
              }}>
                <svg width="220" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    {/* Lichte turbulentie + verplaatsing op de lijnen, voor een krijt/potlood-achtige, niet-perfecte streek */}
                    <filter id="chalk-arrow" x="-30%" y="-30%" width="160%" height="160%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.06 0.18" numOctaves="2" seed="4" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.6" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                  </defs>
                  <g filter="url(#chalk-arrow)">
                  {/* Lichte tweede lijn iets verschoven, voor een handgetekend effect */}
                  <path
                    d="M6 12 C 50 4, 90 60, 150 56 C 168 54.5, 184 48, 198 40"
                    stroke="#FFD166"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity={0.6}
                    pathLength={1}
                    style={{
                      strokeDasharray: 1,
                      strokeDashoffset: heroIn ? 0 : 1,
                      transition: "stroke-dashoffset 1.1s cubic-bezier(0.65,0,0.35,1) 0.65s",
                    }}
                  />
                  {/* Hoofdlijn — licht golvend, niet perfect recht */}
                  <path
                    d="M8 16 C 52 7, 92 64, 152 60 C 170 58.5, 186 51, 200 43"
                    stroke="#2A1758"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    pathLength={1}
                    style={{
                      strokeDasharray: 1,
                      strokeDashoffset: heroIn ? 0 : 1,
                      transition: "stroke-dashoffset 1.1s cubic-bezier(0.65,0,0.35,1) 0.7s",
                    }}
                  />
                  {/* Duidelijke pijlpunt */}
                  <path
                    d="M200 43 L182 38 M200 43 L191 59"
                    stroke="#2A1758"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    pathLength={1}
                    style={{
                      strokeDasharray: 1,
                      strokeDashoffset: heroIn ? 0 : 1,
                      transition: "stroke-dashoffset 0.35s ease 1.8s",
                    }}
                  />
                  </g>
                </svg>
              </div>

              {/* Vak 3: festivalfoto i.p.v. telefoon-mockup */}
              <div style={{
                position: "absolute",
                top: "50%",
                right: "0px",
                opacity: heroIn ? 1 : 0,
                transform: heroIn ? "translateY(-50%)" : "translateY(-30%)",
                transition: "opacity 0.9s ease 0.3s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s",
              }}>
                <div style={{ width: "340px", height: "460px", borderRadius: "28px", overflow: "hidden", boxShadow: "0 60px 120px rgba(10,21,32,0.35)" }}>
                  <img src="/festival-crowd.png" alt="Festivalpubliek" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>

            </div>
          </div>

          {/* Tekstblok — schuift over de (lege) sectie heen terwijl je verder scrollt */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "#2A1758",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 24px",
            zIndex: 20,
            transform: `translateY(${(1 - bufferProgress) * 100}%)`,
            pointerEvents: bufferProgress >= 1 ? "auto" : "none",
          }}>
            <div style={{ maxWidth: "1200px", textAlign: "center" }}>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(22px, 2.2vw, 34px)",
                fontWeight: 300,
                color: "#FFFFFF",
                lineHeight: 1.7,
              }}>
                {[
                  { text: txt.line1, delay: 0 },
                  { text: txt.line2, delay: 0.45, break: true },
                  { text: txt.line3, delay: 0.9, break: true },
                ].map(({ text, delay, break: lineBreak }, i) => [
                  lineBreak ? <span key={`br-${i}`} style={{ display: "block", height: "2em" }} /> : null,
                  ...text.split(" ").map((word, wi) => (
                    <span key={`${i}-${wi}`} style={{
                      display: "inline-block",
                      opacity: visible.has("tekst") ? 1 : 0,
                      transform: visible.has("tekst") ? "translateY(0px)" : "translateY(16px)",
                      transition: `opacity 0.7s ease ${delay}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
                      marginRight: "0.28em",
                    }}>
                      {word}
                    </span>
                  )),
                ])}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Rest van de pagina */}
      <div style={{ position: "relative", zIndex: 20 }}>

        {/* Zo werkt het + Counter */}
        <section style={{ background: "#FAFAF8", padding: "100px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "480px 1fr 280px", gap: "60px", alignItems: "start" }}>

            {/* Links: titel + blokken */}
            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 700,
                letterSpacing: "-1px",
                marginBottom: "40px",
                color: "#2A1758",
              }}>
                {txt.howTitle}
              </h2>

              <div data-reveal="blokken" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {txt.steps.map((item, i) => (
                  <div key={i} style={{
                    background: "#2A1758",
                    borderRadius: "20px",
                    padding: "28px 28px",
                    textAlign: "left",
                    position: "relative",
                    ...slideIn("blokken", i * 0.55),
                  }}>
                    <div style={{ width: "32px", height: "3px", background: "#FFD166", borderRadius: "2px", marginBottom: "16px" }} />
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px", fontWeight: 700, marginBottom: "8px", color: "#FFFFFF" }}>
                      {item.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6, fontSize: "16px" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rechts: 500+ */}
            <div data-reveal="counter" style={{
              paddingTop: "60px", paddingLeft: "80px",
              opacity: visible.has("counter") ? 1 : 0,
              transform: visible.has("counter") ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.7s ease 0.15s, transform 1.1s cubic-bezier(0.16,1,0.3,1) 0.15s",
            }}>
              <div style={{
                fontSize: "clamp(100px, 12vw, 150px)",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                color: "#2A1758",
                letterSpacing: "-5px",
                lineHeight: 1,
                marginBottom: "16px",
              }}>
                500+
              </div>
              <p style={{ fontSize: "26px", color: "#2A1758", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.5px" }}>
                {txt.counterSub}
              </p>
              <p style={{ fontSize: "16px", color: "#2A1758", lineHeight: 1.6, fontWeight: 700 }}>
                {txt.counterDesc} <span style={{ color: "#FFD166", fontWeight: 800 }}>{txt.counterHighlight}</span>
              </p>
            </div>

            {/* Foto's — dating app profielkaarten */}
            <div style={{
              position: "relative",
              height: "680px",
              marginTop: "20px",
            }}>
              {/* Fabian — voor, iets lager */}
              <div
                data-reveal="foto2"
                style={{
                  position: "absolute",
                  top: "280px",
                  left: "10px",
                  width: "220px",
                  height: "320px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "4px solid #FFFFFF",
                  boxShadow: "0 28px 60px rgba(42,23,88,0.22)",
                  zIndex: 3,
                  transform: visible.has("foto2")
                    ? "rotate(-4deg) translateY(0px)"
                    : "rotate(-4deg) translateY(50px)",
                  opacity: visible.has("foto2") ? 1 : 0,
                  transition: "opacity 0.4s ease 0.15s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s",
                }}
              >
                <img
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_3ExTTLcL3m5TLSO62v2S7UnqJO0/hf_20260612_195953_2b4071f6-0345-4662-977c-c98ce9f9b859_min.webp"
                  alt="Fabian lacht"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  padding: "18px 18px 48px",
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)",
                }}>
                  <p style={{ color: "#FFFFFF", fontSize: "17px", fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.3px" }}>
                    Fabian, 26
                  </p>
                </div>
              </div>

              {/* Donna — achter */}
              <div
                data-reveal="foto"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "240px",
                  height: "340px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "4px solid #FFFFFF",
                  boxShadow: "0 28px 60px rgba(42,23,88,0.22)",
                  zIndex: 2,
                  transform: visible.has("foto")
                    ? "rotate(5deg) translateY(0px)"
                    : "rotate(5deg) translateY(50px)",
                  opacity: visible.has("foto") ? 1 : 0,
                  transition: "opacity 0.4s ease 0s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0s",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
                  alt="Donna lacht"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  padding: "18px 18px 48px",
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)",
                }}>
                  <p style={{ color: "#FFFFFF", fontSize: "17px", fontWeight: 700, fontFamily: "'Poppins', sans-serif", letterSpacing: "-0.3px" }}>
                    Donna, 28
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ + Aanmelden wrapper */}
        <div style={{ position: "relative", background: "#FAFAF8" }}>

        {/* FAQ */}
        <section id="vragen" style={{ background: "transparent", padding: "0 24px 100px", position: "relative", zIndex: 1 }} onClick={() => setOpenFaq(null)}>
          <div style={{ maxWidth: "920px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ background: "#2A1758", borderRadius: "24px", padding: "48px 48px 64px", display: "flex", flexDirection: "column" }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "#FFFFFF",
              marginBottom: "32px",
            }}>
              {txt.faqTitle}
            </h2>
              {txt.faqItems.map((item, i) => (
                <div key={i} style={{ borderTop: i === 0 ? "1.5px solid rgba(255,255,255,0.12)" : undefined }}>
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
                      borderBottom: "1.5px solid rgba(255,255,255,0.12)",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "16px",
                    }}
                  >
                    <span style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "17px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    }}>
                      {item.q}
                    </span>
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      style={{
                        flexShrink: 0,
                        transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                      }}
                    >
                      <path d="M2 5L8 11L14 5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div style={{
                      padding: "20px 0 28px",
                      borderBottom: "1.5px solid rgba(255,255,255,0.12)",
                      marginTop: "-1.5px",
                    }}>
                      {item.a === null ? (
                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(255,255,255,0.9)", fontFamily: "'Inter', sans-serif", textAlign: "left" }}>
                            {lang === "nl" ? "Geen zorgen. Vraag het ons via" : "No worries. Just ask us via"}
                          </p>
                          <Link href="/contact" style={{
                            display: "inline-block",
                            background: "#FFD166",
                            color: "#2A1758",
                            padding: "10px 22px",
                            borderRadius: "100px",
                            fontSize: "14px",
                            fontWeight: 700,
                            textDecoration: "none",
                            fontFamily: "'Inter', sans-serif",
                            flexShrink: 0,
                          }}>
                            Contact
                          </Link>
                        </div>
                      ) : (
                        <p style={{
                          fontSize: "16px",
                          lineHeight: 1.75,
                          color: "rgba(255,255,255,0.9)",
                          fontFamily: "'Inter', sans-serif",
                          maxWidth: "640px",
                          textAlign: "left",
                        }}>
                          {item.a}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aanmelden */}
        <section id="aanmelden" style={{ position: "relative", padding: "240px 24px 120px", textAlign: "center", zIndex: 1, background: "transparent" }}>
          <div style={{ maxWidth: "520px", margin: "0 auto", background: "#2A1758", borderRadius: "24px", padding: "48px 40px", position: "relative", zIndex: 2 }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}>
              {txt.signupTitle}
            </h2>
            <p style={{ fontSize: "17px", color: "#FFFFFF", fontWeight: 300, lineHeight: 1.6, marginBottom: "40px" }}>
              {txt.signupSub}
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={txt.placeholder}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    borderRadius: "16px",
                    border: "2px solid rgba(248,245,240,0.25)",
                    background: "rgba(248,245,240,0.08)",
                    fontSize: "17px",
                    color: "#FFFFFF",
                    outline: "none",
                    transition: "border-color 0.2s",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = "#FAFAF8")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(248,245,240,0.25)")}
                />

                {error && <p style={{ color: "#FFD166", fontSize: "14px", fontWeight: 600 }}>{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading ? "rgba(255,209,102,0.5)" : "#FFD166",
                    color: "#2A1758",
                    padding: "20px",
                    borderRadius: "16px",
                    fontSize: "16px",
                    fontWeight: 700,
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "opacity 0.2s",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = "0.9"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
                >
                  {loading ? "..." : txt.signupBtn}
                </button>

                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
                  {txt.noSpam}
                </p>
              </form>
            ) : (
              <div style={{
                background: "rgba(42,23,88,0.08)",
                border: "1px solid rgba(42,23,88,0.15)",
                borderRadius: "24px",
                padding: "48px 40px",
              }}>
                <div style={{
                  width: "56px", height: "56px",
                  borderRadius: "50%",
                  background: "#FFD166",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  color: "#2A1758",
                  fontWeight: 700,
                }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, marginBottom: "12px", color: "#2A1758" }}>
                  {txt.successTitle}
                </h3>
                <p style={{ color: "rgba(42,23,88,0.6)", lineHeight: 1.6 }}>
                  {txt.successSub}
                </p>
              </div>
            )}
          </div>
        </section>

        </div>{/* end FAQ + Aanmelden wrapper */}

        {/* Footer */}
        <footer style={{ background: "#2A1758", padding: "32px 40px 40px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "40px" }}>

            {/* Links: logo + copyright */}
            <div>
              <div style={{ marginBottom: "12px" }}>
                <FestivLogo size={28} color="#FFFFFF" letterSpacing="-0.5px" weight={800} />
              </div>
              <p style={{ opacity: 0.55, fontSize: "13px", color: "#FFFFFF" }}>
                {txt.footerCopy}
              </p>
            </div>

            {/* Rechts: navigatielinks + socials */}
            <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#FFFFFF", opacity: 0.4, marginBottom: "12px" }}>FESTIV</p>
                {[
                  { label: txt.moreFestiv, href: "/meer-over-festiv" },
                  { label: txt.experiences, href: "/ervaringen" },
                ].map(item => (
                  <a key={item.href} href={item.href} style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#FFFFFF", textDecoration: "none", marginBottom: "8px", opacity: 0.7 }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}>
                    {item.label}
                  </a>
                ))}
              </div>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#FFFFFF", opacity: 0.4, marginBottom: "12px" }}>{lang === "nl" ? "BEDRIJF" : "COMPANY"}</p>
                {[
                  { label: txt.aboutUs, href: "/over-ons" },
                  { label: txt.ourTeam, href: "/over-ons/ons-team" },
                  { label: txt.workAt, href: "/over-ons/werken-bij" },
                  { label: txt.contact, href: "/contact" },
                ].map(item => (
                  <a key={item.href} href={item.href} style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#FFFFFF", textDecoration: "none", marginBottom: "8px", opacity: 0.7 }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}>
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Socials */}
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#FFFFFF", opacity: 0.4, marginBottom: "12px" }}>{lang === "nl" ? "VOLG ONS OP" : "FOLLOW US ON"}</p>
                <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                {[
                  { label: "Instagram", href: "https://instagram.com/festivapp", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
                  { label: "TikTok", href: "https://tiktok.com/@festivapp", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z"/></svg> },
                  { label: "X", href: "https://x.com/festivapp", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                  { label: "LinkedIn", href: "https://linkedin.com/company/festivapp", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
                ].map(item => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", color: "#FFFFFF", textDecoration: "none", opacity: 0.7 }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}>
                    {item.icon}
                  </a>
                ))}
                </div>
              </div>
            </div>

          </div>
        </footer>

      </div>{/* einde rest */}
    </main>
  );
}
