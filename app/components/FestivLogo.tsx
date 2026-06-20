"use client";

interface FestivLogoProps {
  height?: number;
  variant?: "light" | "dark" | "cobalt";
}

export default function FestivLogo({ height = 36, variant = "light" }: FestivLogoProps) {
  const waveColor = variant === "dark" ? "#7AA6FF" : variant === "cobalt" ? "#FCF8F0" : "#2160D8";
  const magenta = variant === "cobalt" ? "#FBC02D" : "#E84C92";
  const yellow = variant === "cobalt" ? "#E84C92" : "#FBC02D";
  const textColor = variant === "light" ? "#1A1A1A" : "#FCF8F0";
  const symbolSize = height;
  const gap = Math.round(height * 0.30);

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap, lineHeight: 1 }}>
      {/* Symbool */}
      <svg
        width={symbolSize}
        height={symbolSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <path
          d="M7 41 C18 23 27 49 36 32 C42 21 50 25 57 17 C58 20 57 24 53 29 C45 40 36 49 30 41 C24 33 19 39 13 48 C10 47 8 44 7 41 Z"
          fill={waveColor}
        />
        <circle cx="19" cy="21" r="4.6" fill={magenta} />
        <circle cx="49" cy="44" r="4.6" fill={yellow} />
      </svg>

      {/* Wordmark */}
      <span style={{
        fontFamily: "'DM Serif Display', serif",
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: height * 0.78,
        color: textColor,
        lineHeight: 1,
        letterSpacing: "-0.01em",
      }}>
        festiv
      </span>
    </span>
  );
}
