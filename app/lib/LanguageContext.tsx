"use client";
import { createContext, useContext, useState, useEffect } from "react";

type Lang = "nl" | "en";

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "nl",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("nl");

  useEffect(() => {
    const stored = localStorage.getItem("festiv-lang") as Lang | null;
    if (stored === "nl" || stored === "en") setLang(stored);
  }, []);

  const toggle = () => {
    setLang(l => {
      const next = l === "nl" ? "en" : "nl";
      localStorage.setItem("festiv-lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
