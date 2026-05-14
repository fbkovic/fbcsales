# FBC Sales Next.js Backend

Dieses Projekt ist eine Next.js-Anwendung mit API-Endpunkten und Basic-Auth-Schutz.

## Setup

1. `npm install`
2. `cp .env.local.example .env.local`
3. `npm run dev`

## Vercel Deployment

- Vercel kann das Projekt direkt deployen.
- Setze die Umgebungsvariablen `BASIC_AUTH_USER` und `BASIC_AUTH_PASS` in den Vercel-Projekt-Einstellungen.
- Optional: Verwende Vercel Access Controls oder ein privates Git-Repository für zusätzlichen Schutz.

## Sicherer Zugriff

Die Datei `middleware.ts` schützt alle Seiten und API-Routen mit Basic Auth.

### Beispiel

Rufe `GET /api/hello` auf, nachdem du dich mit Benutzername und Passwort authentifiziert hast.
