"use client";
import Link from "next/link";

const C = {
  dark: "#1a0a1e",
  cream: "#f3e7cd",
  text: "#1f1a12",
  textMuted: "rgba(31,26,18,0.6)",
  accent: "#1a0a1e",
};

const sections = [
  { id: "over-ons", title: "1. Over ons" },
  { id: "gegevens", title: "2. Gegevens die we verzamelen" },
  { id: "grondslagen", title: "3. Rechtmatige grondslagen" },
  { id: "gebruik", title: "4. Hoe we uw gegevens gebruiken" },
  { id: "verzameling", title: "5. Hoe gegevens worden verzameld" },
  { id: "derden", title: "6. Delen met derden" },
  { id: "beveiliging", title: "7. Gegevensbeveiliging" },
  { id: "bewaring", title: "8. Bewaartermijnen" },
  { id: "rechten", title: "9. Uw rechten (EU/AVG)" },
  { id: "wijzigingen", title: "10. Wijzigingen" },
  { id: "cookies", title: "11. Cookiebeleid" },
];

export default function PrivacyPage() {
  return (
    <div style={{ background: C.cream, minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Nav */}
      <nav style={{ background: C.dark, padding: "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "'Gabarito', sans-serif", fontWeight: 800, fontSize: 20, color: C.cream }}>Festiv</span>
        </Link>
        <Link href="/" style={{ color: C.cream, fontSize: 14, textDecoration: "none", opacity: 0.7 }}>← Terug naar home</Link>
      </nav>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 40px 120px" }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: C.accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Juridisch</p>
          <h1 style={{ fontFamily: "'Gabarito', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 56px)", color: C.dark, lineHeight: 1.1, marginBottom: 20 }}>
            Privacyverklaring
          </h1>
          <p style={{ fontSize: 16, color: C.textMuted, lineHeight: 1.7, maxWidth: 640 }}>
            We hebben deze verklaring duidelijk en beknopt gehouden, zodat u snel kunt vinden wat u nodig hebt. Uw vertrouwen is essentieel voor ons — geen verwarrende taal of verborgen kleine lettertjes.
          </p>
          <p style={{ fontSize: 13, color: C.textMuted, marginTop: 16 }}>Laatst bijgewerkt: juni 2026</p>
        </div>

        {/* TOC */}
        <div style={{ background: "#fff", borderRadius: 16, padding: "32px 36px", marginBottom: 64, border: "1px solid rgba(31,26,18,0.08)" }}>
          <p style={{ fontFamily: "'Gabarito', sans-serif", fontWeight: 700, fontSize: 16, color: C.dark, marginBottom: 20 }}>Inhoudsopgave</p>
          <ol style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {sections.map(s => (
              <li key={s.id}>
                <a href={`#${s.id}`} style={{ color: C.accent, textDecoration: "none", fontSize: 15, fontWeight: 500, opacity: 0.85 }}>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>

          <Section id="over-ons" title="1. Over ons">
            <p>De Festiv-app wordt aangeboden door <strong>Festiv B.V.</strong>, gevestigd in Nederland. Festiv is een festival-datingplatform waarmee gebruikers mensen kunnen ontmoeten die naar dezelfde festivals en evenementen gaan.</p>
            <p>We passen de AVG (GDPR) toe als standaard voor alle gebruikers, ongeacht waar u zich bevindt.</p>
            <Table rows={[
              ["Algemene privacyvragen", "privacy@festiv.app"],
              ["Verzoeken (inzage, verwijdering, etc.)", "privacy@festiv.app"],
            ]} />
          </Section>

          <Section id="gegevens" title="2. Gegevens die we verzamelen">
            <p>We verzamelen de volgende categorieën persoonsgegevens:</p>
            <Table
              headers={["Categorie", "Voorbeelden"]}
              rows={[
                ["Contactgegevens", "Naam, e-mailadres, telefoonnummer"],
                ["Profielgegevens", "Geboortedatum, geslacht, profielfoto, bio"],
                ["Festivalvoorkeuren", "Festivals die u bezoekt of wil bezoeken"],
                ["Activiteit & gedrag", "Swipes, likes, matches, chatgeschiedenis"],
                ["Locatiegegevens", "Stad, algemene locatie voor festivalmatching"],
                ["Technische gegevens", "IP-adres, apparaattype, besturingssysteem"],
                ["Communicatiegegevens", "Berichten tussen gematchte gebruikers"],
              ]}
            />
            <p style={{ marginTop: 16 }}>
              <strong>Minderjarigen:</strong> Festiv is uitsluitend bestemd voor personen van 18 jaar of ouder. We verzamelen niet bewust gegevens van minderjarigen.
            </p>
          </Section>

          <Section id="grondslagen" title="3. Rechtmatige grondslagen">
            <p>We verwerken uw gegevens op basis van de volgende rechtsgronden:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong>Toestemming</strong> — u heeft uitdrukkelijk toestemming gegeven voor een specifiek doel.</li>
              <li><strong>Contractuele verplichtingen</strong> — de verwerking is noodzakelijk om onze dienst aan u te leveren.</li>
              <li><strong>Gerechtvaardigde belangen</strong> — we hebben een gerechtvaardigd belang, afgewogen tegen uw rechten.</li>
              <li><strong>Wettelijke verplichtingen</strong> — we zijn wettelijk verplicht bepaalde gegevens te bewaren.</li>
            </ul>
          </Section>

          <Section id="gebruik" title="4. Hoe we uw gegevens gebruiken">
            <Table
              headers={["Doel", "Rechtsgrond"]}
              rows={[
                ["Account aanmaken en beheren", "Contractuele verplichtingen"],
                ["Profielen matchen op basis van festivalagenda", "Contractuele verplichtingen"],
                ["Communicatie tussen matches mogelijk maken", "Contractuele verplichtingen"],
                ["Verificatie van profielfoto's", "Toestemming"],
                ["Versturen van app-notificaties en e-mails", "Toestemming"],
                ["Fraudepreventie en veiligheid", "Gerechtvaardigde belangen"],
                ["Verbetering van matchmaking en app-functionaliteit", "Gerechtvaardigde belangen"],
                ["Voldoen aan wettelijke verplichtingen", "Wettelijke verplichtingen"],
              ]}
            />
          </Section>

          <Section id="verzameling" title="5. Hoe gegevens worden verzameld">
            <p>We verzamelen gegevens via:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <li><strong>Directe interactie</strong> — wanneer u een account aanmaakt, uw profiel invult of contact met ons opneemt.</li>
              <li><strong>Gebruik van de app</strong> — automatisch via swipes, matches en chatgedrag.</li>
              <li><strong>Technische gegevens</strong> — via uw apparaat en browser bij gebruik van de app of website.</li>
            </ul>
          </Section>

          <Section id="derden" title="6. Delen met derden">
            <p>We verkopen uw gegevens nooit aan derden. We delen alleen gegevens wanneer dit noodzakelijk is voor onze dienstverlening of wettelijk verplicht is. Met alle verwerkers sluiten we een verwerkersovereenkomst.</p>
            <Table
              headers={["Dienst", "Doel", "Locatie"]}
              rows={[
                ["Supabase", "Database en authenticatie", "EER"],
                ["Resend", "Transactionele e-mails", "VS"],
                ["Vercel", "Hosting van de website", "VS / EER"],
                ["Apple App Store / Google Play", "App-distributie", "Wereldwijd"],
              ]}
            />
          </Section>

          <Section id="beveiliging" title="7. Gegevensbeveiliging">
            <p>We nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies, misbruik of ongeoorloofde toegang. Gevoelige gegevens worden versleuteld opgeslagen en verstuurd.</p>
            <p>Als u vermoedt dat uw account is gecompromitteerd, neem dan direct contact op via <strong>privacy@festiv.app</strong>.</p>
          </Section>

          <Section id="bewaring" title="8. Bewaartermijnen">
            <Table
              headers={["Categorie", "Bewaartermijn"]}
              rows={[
                ["App-gebruikersgegevens", "Tot account verwijdering, daarna max. 30 dagen"],
                ["Chatberichten", "Tot account verwijdering"],
                ["Betalingsgegevens", "7 jaar (wettelijke boekhoudplicht)"],
                ["Geblokkeerde accounts (geanonimiseerd)", "Onbepaald, ter voorkoming van misbruik"],
                ["Sollicitanten", "Max. 4 weken na procedure, of 1 jaar met toestemming"],
              ]}
            />
          </Section>

          <Section id="rechten" title="9. Uw rechten (EU/AVG)">
            <p>Op grond van de AVG heeft u de volgende rechten:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              <li><strong>Inzage</strong> — een kopie opvragen van de gegevens die we over u bewaren.</li>
              <li><strong>Correctie</strong> — onjuiste gegevens laten aanpassen.</li>
              <li><strong>Verwijdering</strong> — uw gegevens laten verwijderen ("recht om vergeten te worden").</li>
              <li><strong>Bezwaar</strong> — bezwaar maken tegen verwerking op basis van gerechtvaardigd belang.</li>
              <li><strong>Beperking</strong> — verzoeken de verwerking tijdelijk te beperken.</li>
              <li><strong>Gegevensoverdracht</strong> — uw gegevens ontvangen in een machineleesbaar formaat.</li>
              <li><strong>Toestemming intrekken</strong> — op elk moment, zonder dat dit gevolgen heeft voor eerdere verwerking.</li>
              <li><strong>Klacht indienen</strong> — bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).</li>
            </ul>
            <p style={{ marginTop: 16 }}>Stuur uw verzoek naar <strong>privacy@festiv.app</strong>. We reageren binnen één maand.</p>
          </Section>

          <Section id="wijzigingen" title="10. Wijzigingen">
            <p>We kunnen deze verklaring van tijd tot tijd aanpassen. Bij substantiële wijzigingen informeren we u via e-mail of een melding in de app. De meest recente versie staat altijd op <strong>festiv.app/privacy</strong>.</p>
          </Section>

          <Section id="cookies" title="11. Cookiebeleid">
            <p>Onze website gebruikt cookies om de dienst goed te laten functioneren en om inzicht te krijgen in het gebruik van onze site.</p>
            <Table
              headers={["Type", "Doel"]}
              rows={[
                ["Noodzakelijke cookies", "Essentieel voor de werking van de website (login, sessie)"],
                ["Functionele cookies", "Onthouden van voorkeuren zoals taal"],
                ["Analytische cookies", "Inzicht in bezoekersgedrag (geanonimiseerd)"],
              ]}
            />
            <p style={{ marginTop: 16 }}>U kunt cookies beheren via uw browserinstellingen. Houd er rekening mee dat het uitschakelen van bepaalde cookies de functionaliteit van de site kan beperken.</p>
          </Section>

        </div>

        {/* Footer note */}
        <div style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid rgba(31,26,18,0.12)", display: "flex", gap: 32 }}>
          <Link href="/terms" style={{ color: C.accent, fontSize: 14, fontWeight: 600 }}>Algemene voorwaarden →</Link>
          <Link href="/" style={{ color: C.textMuted, fontSize: 14 }}>Terug naar home</Link>
        </div>
      </div>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ scrollMarginTop: 40 }}>
      <h2 style={{ fontFamily: "'Gabarito', sans-serif", fontWeight: 700, fontSize: 24, color: C.dark, marginBottom: 20, paddingBottom: 12, borderBottom: "2px solid rgba(31,26,18,0.1)" }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 16, color: C.text, lineHeight: 1.75 }}>
        {children}
      </div>
    </section>
  );
}

function Table({ headers, rows }: { headers?: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: "auto", marginTop: 8 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        {headers && (
          <thead>
            <tr>
              {headers.map(h => (
                <th key={h} style={{ textAlign: "left", padding: "10px 16px", background: C.dark, color: C.cream, fontWeight: 600, fontFamily: "'Gabarito', sans-serif" }}>{h}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "rgba(243,231,205,0.4)" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "10px 16px", color: C.text, borderBottom: "1px solid rgba(31,26,18,0.07)", verticalAlign: "top" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
