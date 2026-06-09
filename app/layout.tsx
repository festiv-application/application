import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Festiv — Vind jouw match",
  description: "Dating app voor festival lovers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
