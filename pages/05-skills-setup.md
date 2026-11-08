---
layout: section
eyebrow: Zelf doen
---

# Skills en /setup

<!--
0:50, 25 minuten voor het hele deel. Op deze slide: 0 minuten, ga meteen door.

Codex: de stappen lopen gelijk. Zie docs/CODEX.md in de template.
-->

---

# Wat is een skill?

Een vaste werkwijze voor je AI. In Claude Code start je ze met een schuine streep en haar naam. In Codex typ je een dollarteken: `$setup` in plaats van `/setup`.

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

Op de volgende slides staat altijd /setup, /bootstrap-github enzovoort. Wie Codex gebruikt, typt telkens $ in de plaats van /.
-->

---

# Je AI vraagt soms toestemming

Dat is normaal, en geen fout. Je AI kan niet zomaar om het even welk programma uitvoeren: soms moet jij eerst akkoord gaan.

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

Die lijst geldt zodra je AI in de map van je project werkt. Dat is zo sinds de slide "Start je AI".

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
- Weet je het niet? Dan doet je AI een voorstel.
- Er komt nog geen code: dat gebeurt later, via issues

<!--
18 minuten: 2 om te starten, daarna 16 om te werken. Laat deze slide staan terwijl iedereen werkt, en loop rond.

Herhaal het theorieblok niet. De keuzes ken je eruit. /setup vraagt eerst wat je wil maken en wat de eerste versie moet kunnen. Daarna komen opslag, platform en framework, met dezelfde woorden als in het theorieblok.

Doe het voor op het scherm: typ /setup en toon de eerste vraag. Laat daarna iedereen zelf starten.

Wat er zeker altijd moet blijven werken, vraagt /setup niet. Je AI schrijft het zelf in PROJECT_OVERVIEW.md, en je ziet het in de samenvatting. De testen hoef je niet zelf te schrijven. Over de vormgeving vraagt het ook niets: het vermeldt alleen dat je project een design system bevat, en dat je AI later een ander kan ontwerpen. Daar gaat de laatste slide van dit deel over.

Wordt /setup niet gevonden? Dan werkt je AI waarschijnlijk niet in de map van je project. Ga terug naar de slide "Start je AI".

Geen werkend project door een probleem met de installatie? Werk mee met een buur, zoals afgesproken bij "Ontbreekt er iets?".

In de test duurde /setup ongeveer 3 minuten, op een snelle machine en met een snelle testpersoon. De skill rekent op ongeveer een kwartier. Er is dus marge, maar reken niet op 3 minuten.

Waar je op let bij het rondlopen:

- Geen idee? Je AI vertrekt van een concrete situatie: wat kost nu veel tijd, of wat begrijpen leerlingen moeilijk?
- Te grote plannen? Vraag wat de eerste versie zeker moet kunnen, en spreek af wat er nog niet in komt. De rest komt onder "Nog niet".
- Leerlinggegevens? /setup vraagt er niet naar, dus herinner eraan: zeg het zelf tegen je AI. Ook als voorbeeld horen ze niet in een publieke repo.
- Toestemmingsvraag? Dat is normaal. De uitleg staat op de slide over toestemmingsvragen.
- Ontbreekt er een tool? Je AI stelt voor om die te installeren. Ga akkoord.

Moet de terminal na een installatie opnieuw starten? Je AI legt uit hoe. Typ daarna opnieuw /setup. Het gesprek kan dan opnieuw beginnen, maar je antwoorden heb je nu klaar.

Nog niet aangemeld bij GitHub? /setup kijkt dat na, en vraagt je om een terminal te openen in de zijbalk en daar gh auth login te typen, zoals op de slide "Meld je aan bij GitHub".

Tijdslimiet: om 1:11 ga je verder. Wie dan nog bezig is, gebruikt de prompt "Achterop?" en werkt verder tijdens de volgende slides.
-->

---
layout: handson
---

# Je hebt nu `PROJECT_OVERVIEW.md`

Dit is je ontwerpdocument. Een voorbeeld uit de demo-app:

| | |
|---|---|
| **Eerste versie** | Sinusgolven bekijken en beluisteren, vermenigvuldigen, optellen en een volumeverloop geven |
| **Nog niet** | Andere golfvormen, downloaden, projecten bewaren |
| **Frameworks** | Flutter: later kan er ook een installeerbare app van komen |
| **Opslag** | Niets bewaren: na opnieuw laden begin je opnieuw |
| **Testen** | Grafiek en geluid komen uit dezelfde berekende golf |

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

Open het volledige voorbeeld: github.com/yvanvds/calculate-waveforms/blob/main/PROJECT_OVERVIEW.md. De tekst op de slide is ingekort. Toon vooral "Nog niet" en "Testen", want daar denk je zonder /setup niet aan. Vermeld ook dat elke keuze een reden heeft: zo weet een latere AI-sessie waarom het zo gekozen is.

Laat iedereen de eigen samenvatting nalezen.

Je AI zet het document meteen op GitHub, en noemt daarna de volgende stappen: /bootstrap-github, een prompt om CLAUDE.md bij te werken, en /create-issues. Dat zijn ook onze volgende stappen. Wacht daar dus nog even mee, zodat je ze samen kan doen.

Later aanpassen kan altijd: vraag het gewoon aan je AI.

Achterop? Geen overzicht om 1:14? Laat je AI verder werken, en doe de volgende stappen mee zodra het document er is.
-->

---

# Liever een andere stijl?

Je project bevat een design system: vaste kleuren, lettertypes en onderdelen. Je AI gebruikt het vanzelf voor je app.

Je AI kan ook een nieuw ontwerpen dat het huidige vervangt. Dat doen we vandaag niet: dit is iets voor thuis.

<PromptBlock label="Thuis, eerst dit">/create-issues Ontwerp een nieuw design system in deze stijl: [omschrijf de stijl]. Vervang het huidige in design-system/ en pas de app aan.</PromptBlock>

<PromptBlock label="Daarna, met de nummers die je AI noemt">/work-issues [de nummers]</PromptBlock>

<!--
1 minuut. Niet uitvoeren: dit is thuiswerk, want de workshop duurt al lang genoeg. Vermeld het, en ga meteen door.

Waarom het erin zit: /setup heeft het net vermeld, en sommigen zullen vragen of hun app er dan zo moet uitzien. Dat hoeft niet.

/create-issues en /work-issues doen we straks samen. Thuis ken je ze dus al.

Getest op een kopie van een eerdere testapp, met dezelfde opdracht maar zonder /create-issues: je AI verving de kleuren en lettertypes in design-system/ en paste de app aan. De app bouwt en de gewone tests slagen. Het Arcadia-logo bleef staan. De volledige weg met /create-issues en /work-issues is met deze prompt niet getest.
-->
