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

# Start je AI

Open Claude Code in de map waarin je wil werken. Het vraagt eerst of je die map vertrouwt.

<div class="vraag">
  <div class="vraag__kader">
    <p class="vraag__titel">Standaardkeuze: No, exit</p>
    <p class="vraag__keuze vraag__keuze--actief">❯ No, exit</p>
    <p class="vraag__keuze">&nbsp;&nbsp;Yes, I trust this folder</p>
  </div>
  <div class="vraag__kader vraag__kader--juist">
    <p class="vraag__titel">Pijltje omlaag, dan Enter</p>
    <p class="vraag__keuze">&nbsp;&nbsp;No, exit</p>
    <p class="vraag__keuze vraag__keuze--actief">❯ Yes, I trust this folder</p>
  </div>
</div>

Daarna vraag je:

<PromptBlock>In welke map werk je nu? Antwoord in één zin.</PromptBlock>

<style>
.vraag {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin: 0 0 16px;
}
.vraag__kader {
  background: var(--surface);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-md);
  padding: 10px 16px;
  font-family: var(--font-mono);
  font-size: 21px;
}
.vraag__kader--juist {
  border: 3px solid var(--brand-text);
  padding: 8px 14px;
}
.slidev-layout .vraag__titel {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 700;
  color: var(--forest);
  margin: 0 0 6px;
}
.slidev-layout .vraag__keuze {
  margin: 0;
  white-space: nowrap;
}
.vraag__keuze--actief {
  font-weight: 700;
  color: var(--forest);
}
</style>

<!--
3 minuten.

Terminal: ga naar de map en typ claude. Toon dit één keer op het scherm.

Dit is de grootste valkuil bij de start: de standaardkeuze is No, exit. Wie meteen op Enter drukt, is Claude Code weer kwijt. Geen ramp: start het opnieuw, pijltje omlaag, Enter.

De keuzes op de slide zijn letterlijk overgenomen uit Claude Code 2.1.319 (op Linux, nog niet nagekeken op Windows). Op het scherm staat er ook nog uitleg boven. Dit is geen schermafbeelding. Waarom je AI later soms om toestemming vraagt, komt bij de skills.

De prompt is een controle: krijg je een antwoord, dan werkt alles. Krijg je een fout over aanmelden, meld je dan eerst aan bij Claude.
-->

---
layout: handson
---

# Haal je project naar je laptop

Klonen betekent: een kopie van je project op je laptop zetten. Plak je eigen URL in de prompt.

<PromptBlock>Kloon dit project naar mijn laptop: [plak hier de URL]</PromptBlock>

<Callout variant="warning" title="Lukt dat niet?">Dat is normaal. Op de meeste laptops staat de nodige software nog niet. Ga door naar de volgende stap.</Callout>

<!--
2 minuten.

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

<PromptBlock>Installeer wat er ontbreekt, op Windows via winget, en help me aanmelden bij GitHub.</PromptBlock>

<Callout title="Vraagt Windows of de installatie mag doorgaan?">Dat is normaal. Kies Ja.</Callout>

<!--
6 minuten.

De AI vraagt onderweg toestemming. Zeg dat ze mogen akkoord gaan. De uitleg komt later.

Plan als de installatie misloopt. Dit is nog niet getest op Windows (project-template#8):

- winget wordt niet gevonden: vraag de AI om Git en gh op een andere manier te installeren. Lukt dat niet, download ze dan zelf via git-scm.com en cli.github.com.
- Geen adminrechten of de school blokkeert het: werk mee met een buur. Het project op GitHub staat er al, dus niets is verloren. Laat de installatie later thuis of via de ICT-dienst doen.
- De installatie lukte, maar de AI vindt git of gh niet: sluit de terminal, open een nieuwe en start Claude Code opnieuw.
- Trage wifi: laat niet iedereen tegelijk wachten. Wie klaar is, gaat alvast verder en helpt een buur.

Volgens de documentatie werkt Claude Code op Windows ook zonder Git, via PowerShell. Dat is nog na te kijken in project-template#8.

Tijdslimiet: om 0:25 ga je verder met de uitleg, ook als niet iedereen klaar is. Help wie vast zit tijdens de uitleg en het theorieblok, zodat die mee is bij /setup om 0:55.
-->

---
layout: handson
---

# Meld je aan bij GitHub

Zonder aanmelding kan je AI geen code op GitHub zetten. Typ dit zelf in je AI:

<PromptBlock label="Typ dit">! gh auth login</PromptBlock>

- Kies **GitHub**, **HTTPS** en aanmelden via de **browser**
- Neem de code over in je browser en bevestig

<PromptBlock label="Vast?">Help me aanmelden bij GitHub met gh. Wat moet ik kiezen?</PromptBlock>

<!--
3 minuten.

Het uitroepteken betekent: voer dit commando zelf uit in plaats van het aan de AI te vragen. Aanmelden moet je zelf doen, want het vraagt om je keuzes en om je browser.

Vraagt gh of het Git met je GitHub-gegevens mag aanmelden? Kies Yes.

Lukt het niet in Claude Code: open een aparte terminal en typ daar gh auth login. In Codex doe je het ook zo.

Lukt het echt niet: sla het nu over. /setup kijkt de aanmelding straks opnieuw na.
-->

---
layout: handson
---

# Open je project

Vraag waar je project staat. Sluit Claude Code en open het opnieuw in die map.

<PromptBlock label="Nog in je huidige map">Waar staat mijn project, en hoe open ik Claude Code in die map?</PromptBlock>

<PromptBlock label="In de map van je project">Kijk na of git en gh werken en of ik aangemeld ben bij GitHub. Antwoord kort.</PromptBlock>

<Callout title="Krijg je de vraag om te vertrouwen opnieuw?">Kies weer Yes, I trust this folder. Anders gelden de instellingen van de template niet.</Callout>

<!--
2 minuten.

Claude Code moet in de map van het project werken: daar staan de skills van straks.

In de projectmap kan de vertrouwensvraag terugkomen, nu met een waarschuwing over de commando's die de template vooraf toelaat. Dat is de lijst uit de template. Kies weer Yes. Verder uitleg komt bij de skills.

Antwoordt de AI dat iets niet werkt? Laat hem het oplossen. Komt dat niet snel in orde, zie het plan bij "Ontbreekt er iets?".
-->
