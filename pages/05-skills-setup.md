---
layout: section
eyebrow: Zelf doen
---

# Skills en /setup

<!--
0:55, 20 minuten voor het hele deel. Op deze slide: 0 minuten, ga meteen door.

De slides in dit bestand tellen op tot 18 minuten. De andere 2 minuten zijn voor de slides over toestemmingsvragen (#16) en het design system (#6). Zolang die er niet staan, is dat extra marge bij /setup.

Codex: je start een skill met $ in plaats van /, dus $setup. De stappen lopen gelijk. Zie docs/CODEX.md in de template.
-->

---

# Wat is een skill?

Een vaste werkwijze voor je AI. Je start ze met een schuine streep en haar naam.

| Skill | Wat doet ze? |
|---|---|
| `/setup` | Maakt duidelijk wat je project wordt |
| `/bootstrap-github` | Zet GitHub klaar voor je issues |
| `/create-issues` | Maakt van een paar zinnen goede issues |
| `/work-issues` | Werkt die issues af, tot ze in je app zitten |

<style>
table {
  margin-bottom: 20px;
}
</style>

<Callout variant="ai" title="Geen magie">Een skill is een tekstbestand met instructies voor je AI. Je kreeg ze mee met de template.</Callout>

<!--
2 minuten.

Kort houden. Het enige wat ze moeten onthouden: je typt /naam, en je AI volgt een werkwijze die iemand vooraf heeft uitgedacht. Dat werkt beter dan elke keer zelf te bedenken wat je moet vragen.

De skills staan in de map .claude/skills van je project. Er zijn er nog meer: /work-issue en /cleanup roept /work-issues zelf op, en met /discuss overleg je met je AI zonder dat die iets aanpast.

/init, dat we straks gebruiken, is geen skill van de template. Dat zit standaard in Claude Code.
-->

---
layout: handson
---

# Start /setup

Eerst maak je samen met je AI duidelijk wat je project wordt.

<PromptBlock>/setup</PromptBlock>

- Je AI stelt één vraag tegelijk, hooguit een tiental
- De keuzes ken je uit de keuzehulp: opslag, platform en framework
- Bij technische keuzes doet je AI een voorstel. Jij zegt ja, of dat het anders moet.
- Er komt nog geen code: dat gebeurt later, via issues

<!--
2 minuten.

Herhaal de keuzehulp niet: die staat op de laatste slide van het theorieblok. Daar staan dezelfde woorden als in /setup.

Doe het voor op het scherm: typ /setup en toon de eerste vraag. Laat daarna iedereen zelf starten.

/setup vraagt ook wat er zeker altijd moet blijven werken. De testen hoef je niet zelf te schrijven. Over de vormgeving vraagt het niets: het vermeldt alleen dat je project een design system bevat.

Wordt /setup niet gevonden? Dan staat Claude Code waarschijnlijk niet in de map van je project. Ga terug naar de slide "Open je project".

Geen werkend project door een probleem met de installatie? Werk mee met een buur, zoals afgesproken bij "Ontbreekt er iets?".
-->

---
layout: handson
---

# Tijdens het gesprek

- **"Ik weet het niet"** is een goed antwoord: je AI doet dan een voorstel
- Hou de eerste versie klein: wat is het kleinste dat al nuttig is?
- Spreek ook af wat er **nog niet** in komt
- Ontbreekt er een tool? Je AI stelt voor om die te installeren. Ga akkoord.

<PromptBlock label="Achterop?">Ik heb weinig tijd. Kies voor de rest zelf de eenvoudigste optie, en schrijf PROJECT_OVERVIEW.md. Vermeld wat je koos.</PromptBlock>

<!--
11 minuten. Laat deze slide staan terwijl iedereen werkt, en loop rond.

In de test duurde /setup ongeveer 3 minuten, op een snelle machine en met een snelle testpersoon. De skill rekent op ongeveer een kwartier. Er is dus marge, maar reken niet op 3 minuten.

Waar je op let bij het rondlopen:

- Geen idee? Je AI vertrekt van een concrete situatie: wat kost nu veel tijd, of wat begrijpen leerlingen moeilijk?
- Te grote plannen? Vraag wat de eerste versie zeker moet kunnen. De rest komt onder "Nog niet".
- Leerlinggegevens? /setup vraagt ernaar. Ook als voorbeeld horen ze niet in een publieke repo.
- Toestemmingsvraag? Dat is normaal. De uitleg staat op de slide over toestemmingsvragen.

Moet de terminal na een installatie opnieuw starten? Je AI legt uit hoe. Typ daarna opnieuw /setup. Het gesprek kan dan opnieuw beginnen, maar je antwoorden heb je nu klaar.

Nog niet aangemeld bij GitHub? /setup kijkt dat na, en vraagt je om in de prompt ! gh auth login te typen.

Tijdslimiet: om 1:10 ga je verder. Wie dan nog bezig is, gebruikt de prompt "Achterop?" en werkt verder tijdens de volgende slides.
-->

---
layout: handson
---

# Je hebt nu `PROJECT_OVERVIEW.md`

Dit is je ontwerpdocument. Een voorbeeld uit de oefenapp:

| | |
|---|---|
| **Eerste versie** | Vereenvoudigen of optellen, en meteen zien of het antwoord juist is |
| **Nog niet** | Aanmelden, punten bijhouden, moeilijkheidsgraden |
| **Frameworks** | Astro: past bij een statische website, gratis op GitHub Pages |
| **Opslag** | Niets bewaren: voor losse oefeningen is dat niet nodig |
| **Testen** | De app mag nooit een fout antwoord als juist tonen |

<style>
table {
  margin-bottom: 20px;
}
thead {
  display: none;
}
td:first-child {
  white-space: nowrap;
}
</style>

<Callout title="Klopt er iets niet?">Je AI vraagt of de samenvatting klopt. Zeg gewoon wat er anders moet.</Callout>

<!--
3 minuten.

Je AI gebruikt dit document bij alles wat volgt.

Open het volledige voorbeeld: github.com/yvanvds/workshop-test-breuken/blob/main/PROJECT_OVERVIEW.md. De tekst op de slide is ingekort. Toon vooral "Nog niet" en "Testen", want daar denk je zonder /setup niet aan. Vermeld ook dat elke keuze een reden heeft: zo weet een latere AI-sessie waarom het zo gekozen is.

Laat iedereen de eigen samenvatting nalezen.

Je AI zet het document meteen op GitHub, en noemt daarna de volgende stappen: /bootstrap-github, /init en /create-issues. Dat zijn ook onze volgende stappen. Wacht daar dus nog even mee, zodat je ze samen kan doen.

Later aanpassen kan altijd: vraag het gewoon aan je AI.

Achterop? Geen overzicht om 1:13? Laat je AI verder werken, en doe de volgende stappen mee zodra het document er is.
-->
