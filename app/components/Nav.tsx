"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "../lib/LanguageContext";

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

const t = {
  nl: { moreFestiv: "Over Festiv", howItWorks: "Zo werkt het", origin: "Het ontstaan", experiences: "Ervaringen", aboutUs: "Over ons", ourTeam: "Ons team", workAt: "Werken bij", faq: "Vragen", contact: "Contact", download: "Download de app", signup: "Aanmelden" },
  en: { moreFestiv: "About Festiv", howItWorks: "How does it work?", origin: "Our story", experiences: "Experiences", aboutUs: "About us", ourTeam: "Our team", workAt: "Work at Festiv", faq: "Questions", contact: "Contact", download: "Download the app", signup: "Sign up" },
};

function FestivLogo({ size = 36, color = "#2A1758", letterSpacing = "-0.5px", weight = 800 }: { size?: number | string; color?: string; letterSpacing?: string; weight?: number }) {
  return (
    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: size, fontWeight: weight, color, letterSpacing, lineHeight: 1 }}>
      Fest
      <span style={{ position: "relative", display: "inline-block" }}>
        &#x131;
        <span style={{
          position: "absolute",
          top: "0.75em",
          left: "55%",
          fontSize: "0.17em",
          lineHeight: 1,
          color: "#FFD166",
          transform: "translateX(-50%) rotate(14deg)",
          opacity: 0.9,
        }}>★</span>
      </span>
      v
    </span>
  );
}


export default function Nav() {
  const [overOnsOpen, setOverOnsOpen] = useState(false);
  const [overFestivOpen, setOverFestivOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, toggle } = useLang();
  const txt = t[lang];
  const pathname = usePathname();

  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [dotLeft, setDotLeft] = useState<number | null>(null);
  const [dotVisible, setDotVisible] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const isFirstRender = useRef(true);

  const navItems: Array<{ key: string; href: string }> = [
    { key: "meer-over-festiv", href: "/meer-over-festiv" },
    { key: "ervaringen", href: "/ervaringen" },
    { key: "over-ons", href: "/over-ons" },
    { key: "vragen", href: "/vragen" },
    { key: "contact", href: "/contact" },
  ];

  const activeKey = navItems.find(item => pathname.startsWith(item.href))?.key ?? null;

  useLayoutEffect(() => {
    if (!activeKey || !navRef.current) {
      setDotLeft(null);
      return;
    }
    const el = linkRefs.current[activeKey];
    const nav = navRef.current;
    if (!el) return;
    const elRect = el.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const left = elRect.left - navRect.left + elRect.width / 2;

    if (isFirstRender.current) {
      // Belangrijk: hier ALLEEN lezen, nog niet schrijven naar sessionStorage. Als dit
      // effect dubbel draait (React Strict Mode in dev doet dat bij elke mount), zou een
      // voortijdige write hier de tweede run zijn eigen toekomstige waarde laten terugzien
      // -> start- en eindpositie worden gelijk -> geen zichtbare animatie meer.
      const stored = typeof window !== "undefined" ? sessionStorage.getItem("navDotLeft") : null;
      const startLeft = stored ? parseFloat(stored) : left;
      // Bolletje meteen (zonder transitie) op de startpositie zetten, zichtbaar.
      setTransitioning(false);
      setDotLeft(startLeft);
      setDotVisible(true);

      // Eerst de subpagina volledig laten renderen, dan pas (duidelijk vertraagd en traag)
      // naar de nieuwe knop schuiven — en pas DAN de nieuwe positie opslaan en isFirstRender
      // omzetten. Zo blijft een eventuele dubbele effect-run (React Strict Mode in dev)
      // volledig idempotent: de cleanup hieronder annuleert de eerste timer voordat hij ooit
      // iets geschreven heeft, en de tweede run leest exact dezelfde (nog onaangetaste) oude
      // waarde uit sessionStorage.
      const timer = setTimeout(() => {
        setTransitioning(true);
        setDotLeft(left);
        if (typeof window !== "undefined") sessionStorage.setItem("navDotLeft", String(left));
        isFirstRender.current = false;
      }, 300);

      return () => clearTimeout(timer);
    }

    setTransitioning(true);
    setDotLeft(left);
    setDotVisible(true);
    if (typeof window !== "undefined") sessionStorage.setItem("navDotLeft", String(left));
  }, [activeKey, pathname]);

  const linkStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px 12px",
    fontSize: "14px",
    fontWeight: 700,
    color: "#2A1758",
    fontFamily: "'Inter', sans-serif",
    borderRadius: "8px",
    textDecoration: "none",
    display: "inline-block",
    whiteSpace: "nowrap" as const,
    position: "relative" as const,
  };

  return (
    <nav ref={navRef} style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: "0 40px",
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(250,250,248,0.95)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(42,23,88,0.1)",
    }}>

      {/* Bewegend bolletje */}
      {dotLeft !== null && dotVisible && (
        <span style={{
          position: "absolute",
          bottom: "10px",
          left: dotLeft,
          transform: "translateX(-50%)",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "#FFD166",
          opacity: 1,
          transition: transitioning ? "left 0.8s cubic-bezier(0.65,0,0.35,1)" : "none",
          pointerEvents: "none",
          zIndex: 10,
        }} />
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <Link href="/" style={{ textDecoration: "none", marginRight: "16px" }}>
          <FestivLogo size={36} color="#2A1758" letterSpacing="-0.5px" weight={800} />
        </Link>

        <div style={{ position: "relative" }}
          onMouseEnter={() => setOverFestivOpen(true)}
          onMouseLeave={() => setOverFestivOpen(false)}>
          <Link ref={el => { linkRefs.current["meer-over-festiv"] = el; }} href="/meer-over-festiv" prefetch={false} style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}>
            {txt.moreFestiv}
          </Link>
          {overFestivOpen && (
            <div style={{ position: "absolute", top: "100%", left: 0, paddingTop: "8px", width: "max-content", zIndex: 200 }}>
              <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 8px 32px rgba(42,23,88,0.15)", padding: "6px" }}>
                {[{ label: txt.howItWorks, href: "/meer-over-festiv/hoe-werkt-het" }, { label: txt.origin, href: "/meer-over-festiv/het-ontstaan" }].map(item => (
                  <Link key={item.label} href={item.href} style={{ display: "block", padding: "9px 14px", fontSize: "14px", fontWeight: 600, color: "#2A1758", textDecoration: "none", borderRadius: "8px", whiteSpace: "nowrap" as const }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(250,250,248,0.6)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "none")}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link ref={el => { linkRefs.current["ervaringen"] = el; }} href="/ervaringen" prefetch={false} style={linkStyle}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
          onMouseLeave={e => (e.currentTarget.style.background = "none")}>
          {txt.experiences}
        </Link>

        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setOverOnsOpen(true)}
          onMouseLeave={() => setOverOnsOpen(false)}
        >
          <Link ref={el => { linkRefs.current["over-ons"] = el; }} href="/over-ons" prefetch={false} style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}>
            {txt.aboutUs}
          </Link>
          {overOnsOpen && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: 0,
              paddingTop: "8px",
              width: "max-content",
              zIndex: 200,
            }}>
              <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 8px 32px rgba(42,23,88,0.15)", padding: "6px" }}>
              {[{ label: txt.ourTeam, href: "/over-ons/ons-team" }, { label: txt.workAt, href: "/over-ons/werken-bij" }].map(item => (
                <Link key={item.label} href={item.href} style={{
                  display: "block",
                  padding: "9px 14px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#2A1758",
                  textDecoration: "none",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(250,250,248,0.6)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "none")}>
                  {item.label}
                </Link>
              ))}
              </div>
            </div>
          )}
        </div>

        <Link ref={el => { linkRefs.current["vragen"] = el; }} href={pathname === "/" ? "/#vragen" : "/vragen"} prefetch={false} style={linkStyle}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
          onMouseLeave={e => (e.currentTarget.style.background = "none")}>
          {txt.faq}
        </Link>
        <Link ref={el => { linkRefs.current["contact"] = el; }} href="/contact" prefetch={false} style={linkStyle}
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
          <button style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "6px 2px",
            opacity: langOpen ? 0.7 : 1,
            transition: "opacity 0.15s",
          }}>
            <GlobeIcon />
            <ChevronDown />
          </button>
          {langOpen && (
            <div style={{ position: "absolute", top: "100%", right: 0, paddingTop: "6px", zIndex: 300 }}>
              <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 8px 32px rgba(42,23,88,0.15)", padding: "6px", width: "140px" }}>
                {[{ label: "Nederlands", value: "nl" }, { label: "English", value: "en" }].map(opt => (
                  <button key={opt.value} onClick={() => { if (lang !== opt.value) toggle(); setLangOpen(false); }} style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "9px 14px",
                    fontSize: "14px",
                    fontWeight: lang === opt.value ? 700 : 500,
                    color: "#2A1758",
                    background: lang === opt.value ? "rgba(250,250,248,0.35)" : "none",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                  }}
                    onMouseEnter={e => { if (lang !== opt.value) e.currentTarget.style.background = "rgba(250,250,248,0.2)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = lang === opt.value ? "rgba(250,250,248,0.35)" : "none"; }}>
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
        <Link href="/#aanmelden" style={{
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
        </Link>
      </div>
    </nav>
  );
}
