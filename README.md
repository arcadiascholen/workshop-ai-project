# Bouwen met AI: je eerste echte project goed starten

Slides voor de workshop van 120 minuten voor leerkrachten, gemaakt met [Slidev](https://sli.dev). Deelnemers werken tijdens de workshop met [project-template](https://github.com/arcadiascholen/project-template).

De slides staan online op <https://arcadiascholen.github.io/workshop-ai-project/>. Elke push naar `main` publiceert de site opnieuw.

## De slides starten

Je hebt Node.js nodig.

```bash
npm install
npm run dev
```

De slides openen in je browser. De presentatorweergave met notities en tijdsplan vind je op `/presenter`.

Met `npm run build` maak je een statische versie in `dist/`.

## Structuur

| Pad | Inhoud |
|---|---|
| `slides.md` | Instellingen, titelslide en tijdsplan. |
| `pages/` | Eén bestand per deel van de workshop. |
| `layouts/` | Layouts voor de titel (`cover`), secties (`section`), inhoud (`default`) en opdrachten (`handson`). |
| `components/` | `PromptBlock` voor prompts om over te nemen, `Callout` voor tips en waarschuwingen. |
| `style.css` | De stijl van de slides, op basis van de tokens en met grotere tekst voor de beamer. |
| `design-system/` | Kopie van het visuele deel van het design system. |

Het donkere thema zet je aan met `colorSchema: dark` bovenaan `slides.md`.
