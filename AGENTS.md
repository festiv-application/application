<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Juridische pagina's (`app/privacy`, `app/terms`) — GEVOELIG: met voorzichtigheid

De privacyverklaring en gebruiksvoorwaarden zijn **juridische documenten**, geen gewone webteksten. Ze zijn óók de bron van waarheid waar de mobiele app (repo `festiv-app`) naartoe linkt. Behandel ze met extra zorg:

- **Nooit zomaar herschrijven of "opfrissen".** Wijzig alleen als het echt nodig is.
- **Wél verplicht bijwerken** wanneer een nieuwe/gewijzigde feature verandert *welke* data we verzamelen of *hoe* we die gebruiken (bijv. telefoonverificatie, pushnotificaties, betalingen). Dat niet doen is een AVG-overtreding.
- **Voorstellen, niet stilletjes doorvoeren.** Draag een concrete wijziging aan en laat een mens (Gijs/Mark) die goedkeuren vóór publicatie. Vóór de echte launch: door iemand met juridische kennis laten nakijken.
- **Alleen claimen wat écht gebouwd is.** Zet nooit een feature (zoals telefoonverificatie) in de tekst voordat die live is — over-claimen is een App Store- én AVG-risico. Verwijder claims van features die je weghaalt.
- **Houd de tracker in sync:** `festiv-app/docs/JURIDISCHE-CLAIMS.md` houdt claim ↔ status bij; werk die in dezelfde wijziging bij.
- De rechtsvorm is **Festiv VoF** (geen B.V.).
