"use client";
import Link from "next/link";

const C = {
  dark: "#1a0a1e",
  cream: "#f3e7cd",
  text: "#1f1a12",
  textMuted: "rgba(31,26,18,0.6)",
};

export default function TermsPage() {
  return (
    <div style={{ background: C.cream, minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <nav style={{ background: C.dark, padding: "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Gabarito', sans-serif", fontWeight: 800, fontSize: 20, color: C.cream }}>Festiv</span>
        </Link>
        <Link href="/" style={{ color: C.cream, fontSize: 14, textDecoration: "none", opacity: 0.7 }}>← Terug naar home</Link>
      </nav>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 40px 120px" }}>
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: C.dark, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Juridisch</p>
          <h1 style={{ fontFamily: "'Gabarito', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 56px)", color: C.dark, lineHeight: 1.1, marginBottom: 20 }}>
            Algemene voorwaarden
          </h1>
          <p style={{ fontSize: 16, color: C.textMuted, lineHeight: 1.7, maxWidth: 640 }}>
            Door Festiv te gebruiken, gaat u akkoord met deze voorwaarden. Lees ze zorgvuldig door.
          </p>
          <p style={{ fontSize: 13, color: C.textMuted, marginTop: 16 }}>Laatste update: juli 2026</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 48, fontSize: 16, color: C.text, lineHeight: 1.75 }}>

          <Article title="1. Over Festiv">
            <p>Festiv is een platform waarop gebruikers anderen kunnen ontmoeten die naar dezelfde festivals en evenementen gaan. Festiv VoF is de aanbieder van de app en website.</p>
          </Article>

          <Article title="2. Toegang en leeftijd">
            <p>U moet minimaal 18 jaar oud zijn om Festiv te gebruiken. Door een account aan te maken bevestigt u dat u aan deze voorwaarde voldoet. We behouden ons het recht voor accounts van minderjarigen te verwijderen.</p>
          </Article>

          <Article title="3. Uw account">
            <p>U bent verantwoordelijk voor de beveiliging van uw account en alle activiteiten die via uw account plaatsvinden. Gebruik een sterk wachtwoord en deel uw inloggegevens niet met anderen. Meld verdachte activiteiten direct via <strong>support@festiv.app</strong>.</p>
          </Article>

          <Article title="4. Gedragsregels">
            <p>Festiv is bedoeld om mensen op een respectvolle manier met elkaar te verbinden. Het is niet toegestaan om:</p>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
              <li>Nep- of misleidende profielen aan te maken.</li>
              <li>Andere gebruikers te lastigvallen, bedreigen of discrimineren.</li>
              <li>Ongepaste, aanstootgevende of illegale content te plaatsen.</li>
              <li>De app te gebruiken voor commerciële doeleinden of spam.</li>
              <li>Persoonlijke gegevens van andere gebruikers zonder toestemming te delen.</li>
            </ul>
            <p style={{ marginTop: 12 }}>Schendingen kunnen leiden tot directe verwijdering van uw account.</p>
          </Article>

          <Article title="5. Inhoud en intellectueel eigendom">
            <p>Alle content op Festiv — waaronder logo's, teksten, ontwerpen en functionaliteit — is eigendom van Festiv VoF of haar licentiegevers. U mag deze niet reproduceren of commercieel gebruiken zonder schriftelijke toestemming.</p>
            <p>Door content te uploaden (zoals profielfoto's) geeft u Festiv toestemming deze te gebruiken voor het leveren van de dienst.</p>
          </Article>

          <Article title="6. Aansprakelijkheid">
            <p>Festiv is een platform dat mensen verbindt; wij zijn niet verantwoordelijk voor het gedrag van gebruikers buiten de app. We streven naar een veilige omgeving, maar kunnen de veiligheid van offline ontmoetingen niet garanderen. Gebruik gezond verstand bij het afspreken met matches.</p>
            <p>Festiv is niet aansprakelijk voor indirecte schade, gederfde winst of gevolgschade als gevolg van het gebruik van de app.</p>
          </Article>

          <Article title="7. Beschikbaarheid">
            <p>We streven naar een stabiele dienst, maar kunnen de continue beschikbaarheid van Festiv niet garanderen. We behouden ons het recht voor de app tijdelijk of permanent te wijzigen of te staken, met of zonder kennisgeving.</p>
          </Article>

          <Article title="8. Beëindiging">
            <p>U kunt uw account op elk moment verwijderen via de app-instellingen. Festiv kan uw account beëindigen bij schending van deze voorwaarden. Na beëindiging vervallen uw rechten om de dienst te gebruiken.</p>
          </Article>

          <Article title="9. Toepasselijk recht">
            <p>Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.</p>
          </Article>

          <Article title="10. Wijzigingen">
            <p>We kunnen deze voorwaarden aanpassen. Bij substantiële wijzigingen informeren we u via e-mail of een melding in de app. Door Festiv te blijven gebruiken na de wijziging, accepteert u de nieuwe voorwaarden.</p>
          </Article>

          <Article title="11. Contact">
            <p>Vragen over deze voorwaarden? Neem contact op via <strong>legal@festiv.app</strong>.</p>
          </Article>
        </div>

        <div style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid rgba(31,26,18,0.12)", display: "flex", gap: 32 }}>
          <Link href="/privacy" style={{ color: C.dark, fontSize: 14, fontWeight: 600 }}>Privacyverklaring →</Link>
          <Link href="/" style={{ color: C.textMuted, fontSize: 14 }}>Terug naar home</Link>
        </div>
      </div>
    </div>
  );
}

function Article({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 style={{ fontFamily: "'Gabarito', sans-serif", fontWeight: 700, fontSize: 22, color: C.dark, marginBottom: 16, paddingBottom: 10, borderBottom: "2px solid rgba(31,26,18,0.1)" }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </section>
  );
}
