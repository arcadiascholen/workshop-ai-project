---
layout: section
eyebrow: Zelf doen
---

# Skills en /setup

<!--
0:55, 20 minuten voor het hele deel. Op deze slide: 0 minuten, ga meteen door.

De slides in dit bestand tellen op tot 19 minuten. De laatste minuut is voor de slide over het design system (#6). Zolang die er niet staat, is dat extra marge bij /setup.

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

# Je AI vraagt soms toestemming

Dat is normaal, en geen fout. Je AI kan niet zomaar om het even welk programma uitvoeren: soms moet jij eerst akkoord geven.

- **Gewone stappen** mogen zonder vragen, zo valt `/work-issues` niet stil
- **Gevaarlijke dingen** zijn geblokkeerd, zoals je repo verwijderen
- **Al de rest** vraagt je AI eerst aan jou. Kijk dus af en toe of je AI op je wacht.

<Callout title="Krijg je een vraag met Yes en No?">Lees wat er staat. Twijfel je? Kies No en vraag wat het doet en waarom.</Callout>

<!--
1 minuut. Zeg dit voor iedereen aan /setup begint, dan schrikt niemand van de eerste vraag.

De boodschap is geruststellend: een toestemmingsvraag is een veiligheidsmaatregel en geen fout. Er is niets misgelopen.

Wat de template precies toelaat, staat in .claude/settings.json en in de README:

- Mag zonder vragen: bestanden in je project aanpassen, de gewone Git- en GitHub-commando's, en de commando's om je app te installeren, te bouwen en te testen.
- Mag nooit: de geschiedenis op GitHub overschrijven, niet-opgeslagen werk weggooien of je repo verwijderen.
- Al de rest: je AI vraagt het eerst. Een tool op je laptop installeren, zoals met winget, hoort daarbij.

Dit is de lijst waarvoor Claude Code waarschuwde bij de vertrouwensvraag, op de slide "Open je project". Die vraag zelf herhaal je niet.

Zeg dus niet: druk altijd op Yes. Kies je No, dan gebeurt het niet. Je AI wacht dan op wat je zegt, en je kan gewoon vragen wat het commando doet. Dat hebben we nagekeken in Claude Code 2.1.319. Daar staan ook opties als "don't ask again" en "switch to auto mode" tussen. Die heb je vandaag niet nodig.

Af en toe kijken of je AI wacht, komt terug op de slide "Je AI werkt verder, jij luistert".

Codex: dit werkt anders, met een automatische beoordelaar. Zie "Hoe de toestemmingen werken" in docs/CODEX.md van de template.
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

Tijdslimiet: om 1:11 ga je verder. Wie dan nog bezig is, gebruikt de prompt "Achterop?" en werkt verder tijdens de volgende slides.
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

Achterop? Geen overzicht om 1:14? Laat je AI verder werken, en doe de volgende stappen mee zodra het document er is.
-->
