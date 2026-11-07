---
layout: section
eyebrow: Zelf doen
---

# Je eigen project op GitHub

<!--
0:05, 20 minuten voor het hele deel.

Dit deel is nog niet getest op een Windows-pc (project-template#8). Reken op verrassingen. Het plan voor als de installatie misloopt, staat bij de slide "Ontbreekt er iets?".

Codex: de stappen lopen gelijk, en de prompts blijven bruikbaar. De verschillen staan in docs/CODEX.md van de template.
-->

---
layout: handson
---

# Maak je eigen project

1. Open de template: [github.com/arcadiascholen/project-template](https://github.com/arcadiascholen/project-template)
2. Klik op **Use this template**, en dan op **Create a new repository**
3. Geef je project een naam en kies **Public**
4. Bevestig, en kopieer de URL van je nieuwe project uit de adresbalk

<PromptBlock label="Vast?">Ik wil op GitHub een eigen project maken met de template arcadiascholen/project-template. Waar moet ik klikken?</PromptBlock>

<Callout title="Waarom Public?">Dat leggen we straks uit. Zet er alvast geen namen of punten van leerlingen in.</Callout>

<!--
4 minuten.

Doe het voor op het scherm, en toon vooral waar de URL staat. Die hebben ze zo meteen nodig.

Wie vast zit en Claude Code nog niet open heeft, plakt de prompt in het gewone chatvenster van Claude of ChatGPT.

Geen GitHub-account? Dat moest vooraf, maar het kan nu nog op github.com.
-->

---
layout: handson
---

# Haal je project naar je laptop

Klonen betekent: een kopie van je project op je laptop zetten. Open de desktop-app en start een nieuwe chat, nog zonder project. Plak je eigen URL in de prompt.

<PromptBlock>Maak een dev-map in mijn persoonlijke map. Kloon daar dit project naar mijn laptop: [plak hier de URL]</PromptBlock>

<Callout variant="warning" title="Lukt dat niet?">Dat is normaal. Op de meeste laptops staat de nodige software nog niet. Ga door naar de volgende stap.</Callout>

<!--
2 minuten.

Je opent hier nog geen project: dat komt pas als het project op je laptop staat, op de slide "Start je AI".

De dev-map zorgt ervoor dat iedereen zijn project op dezelfde plek terugvindt. Op Windows is dat bijvoorbeeld C:\Users\naam\dev.

Hier gaat het bij veel mensen voor het eerst mis. Dat is de bedoeling: zo zien ze meteen hoe je samen met je AI een probleem oplost.

Wie al Git heeft en bij wie het klonen lukt, slaat de volgende stap over en helpt een buur.
-->

---
layout: handson
---

# Ontbreekt er iets?

- **Git** bewaart de versies van je code
- **gh** is de tool waarmee je AI op GitHub werkt
- **winget** installeert programma's op Windows

<PromptBlock>Installeer wat er ontbreekt, op Windows via winget. Kloon daarna mijn project.</PromptBlock>

<Callout title="Vraagt Windows of de installatie mag doorgaan?">Dat is normaal. Kies Ja.</Callout>

<!--
6 minuten.

Werk verder in dezelfde chat: je AI kent de URL en de dev-map nog.

De AI vraagt onderweg toestemming. Zeg dat ze mogen akkoord gaan. De uitleg komt later.

Plan als de installatie misloopt. Dit is nog niet getest op Windows (project-template#8):

- winget wordt niet gevonden: vraag de AI om Git en gh op een andere manier te installeren. Lukt dat niet, download ze dan zelf via git-scm.com en cli.github.com.
- Geen adminrechten of de school blokkeert het: werk mee met een buur. Het project op GitHub staat er al, dus niets is verloren. Laat de installatie later thuis of via de ICT-dienst doen.
- De installatie lukte, maar de AI vindt git of gh niet: sluit de desktop-app, open ze opnieuw en start een nieuwe chat.
- Trage wifi: laat niet iedereen tegelijk wachten. Wie klaar is, gaat alvast verder en helpt een buur.

Volgens de documentatie werkt Claude Code op Windows ook zonder Git, via PowerShell. Dat is nog na te kijken in project-template#8.

Tijdslimiet: om 0:25 ga je verder met de uitleg, ook als niet iedereen klaar is. Help wie vast zit tijdens de uitleg en het theorieblok, zodat die mee is bij /setup om 0:55.
-->

---
layout: handson
---

# Meld je aan bij GitHub

Zonder aanmelding kan je AI geen code op GitHub zetten. Dat doe je zelf: open een terminal in de zijbalk van de desktop-app, en typ daar:

<PromptBlock label="Typ dit in de terminal">gh auth login</PromptBlock>

- Kies **GitHub**, **HTTPS** en aanmelden via de **browser**
- Neem de code over in je browser en bevestig

<PromptBlock label="Vast?">Help me aanmelden bij GitHub met gh. Wat moet ik kiezen?</PromptBlock>

<!--
3 minuten.

Aanmelden moet je zelf doen, want het vraagt om je keuzes en om je browser. Daarom typ je het in de terminal, en niet in de chat.

Vraagt gh of het Git met je GitHub-gegevens mag aanmelden? Kies Yes.

Vindt de terminal gh niet? Sluit de terminal en open een nieuwe: dan kent die de nieuwe installatie. Lukt het niet in de desktop-app, open dan een gewone terminal (PowerShell op Windows) en typ daar gh auth login. In Codex doe je het ook zo.

Lukt het echt niet: sla het nu over. /setup kijkt de aanmelding straks opnieuw na.
-->

---
layout: handson
---

# Start je AI

Je project staat nu op je laptop. Open het in de desktop-app:

1. Open een **nieuwe chat**
2. Kies voor een **nieuw project**
3. Voeg de map van je project toe, in je dev-map

Daarna vraag je:

<PromptBlock>In welke map werk je nu? Kijk ook na of git en gh werken en of ik aangemeld ben bij GitHub. Antwoord kort.</PromptBlock>

<!--
5 minuten.

Doe het één keer voor op het scherm. Je AI moet in de map van het project werken: daar staan de skills van straks. Vanaf nu start je elke chat in dit project.

De prompt is een controle: krijg je een antwoord, dan werkt alles. Krijg je een fout over aanmelden bij Claude, meld je dan eerst aan bij Claude. Antwoordt de AI dat iets niet werkt? Laat hem het oplossen. Komt dat niet snel in orde, zie het plan bij "Ontbreekt er iets?".

Waarom je AI later soms om toestemming vraagt, komt bij de skills.
-->
