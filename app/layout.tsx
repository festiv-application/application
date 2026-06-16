import type { Metadata } from "next";
import "./globals.css";
import Providers from "./lib/Providers";

export const metadata: Metadata = {
  title: "Festiv — Vind je match op het festival",
  description: "Festiv is de dating app voor festival lovers. Swipe mensen die naar dezelfde evenementen gaan als jij.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
