---
layout: section
eyebrow: Zelf doen
---

# Issues maken en laten uitwerken

<!--
1:20, 10 minuten voor het hele deel. Op deze slide: 0 minuten, ga meteen door.

De slides van dit deel tellen op tot 10 minuten.

Codex: gebruik $create-issues en $work-issues, met dezelfde tekst erachter.
-->

---
layout: handson
---

# Maak je issues

Een issue is een goed omschreven taak. Je AI schrijft ze voor jou.

<PromptBlock>/create-issues Kijk in PROJECT_OVERVIEW.md. Maak issues aan om de eerste versie van deze app te realiseren.</PromptBlock>

- Reken op 3 tot 8 issues, in de volgorde waarin ze gemaakt moeten worden
- Op het einde toont je AI een lijst met nummers en titels

<Callout variant="warning" title="Achterop?">Werk eerst PROJECT_OVERVIEW.md af. Je issues mogen ook tijdens de uitleg ontstaan.</Callout>

<!--
4 minuten.

In de test duurde dit ongeveer 2 minuten, met een snelle testpersoon. Je AI baseert zich op PROJECT_OVERVIEW.md, en wijzigt hier nog geen code.

Je AI vermeldt ook welke keuzes die zelf gemaakt heeft, en geeft de volgende stap met de echte nummers. Heb je /bootstrap-github overgeslagen, dan doet /create-issues dat eerst zelf.

Vraagt je AI iets terug? Dat gebeurt alleen als die zonder antwoord geen goed issue kan schrijven. "Ik weet het niet, kies jij maar" mag ook hier.
-->

---
layout: handson
---

# Zo zien issues eruit

Dit maakte `/create-issues` voor de oefenapp. Lees ook één eigen issue.

| Nr | Titel | Label |
|---|---|---|
| [1](https://github.com/yvanvds/workshop-test-breuken/issues/1) | Basis van de website klaarzetten | chore |
| [2](https://github.com/yvanvds/workshop-test-breuken/issues/2) | Breuken vereenvoudigen oefenen | feature |
| [3](https://github.com/yvanvds/workshop-test-breuken/issues/3) | Breuken optellen oefenen | feature |
| [4](https://github.com/yvanvds/workshop-test-breuken/issues/4) | Website publiceren op GitHub Pages | chore |

<style>
table {
  margin-bottom: 20px;
}
</style>

<Callout variant="ai" title="Wanneer is issue 2 klaar? Onder andere:">Bij 4/8 telt 1/2 als juist. 2/4 telt als fout, want dat is nog niet volledig vereenvoudigd.</Callout>

<!--
2 minuten.

Open issue 2 op GitHub, en toon de kopjes Waarom is dit nodig?, Gewenst resultaat en Wanneer is dit klaar? Die komen uit de sjablonen van /bootstrap-github. Daarvoor was alleen de prompt van de vorige slide nodig, samen met PROJECT_OVERVIEW.md.

Het eerste issue zet altijd de basis: het framework, de eerste test en CI. De eerste drie issues leveren samen al iets op dat je kan openen en bekijken. Publiceren komt als apart issue op het einde.

Je eigen issues bekijken: vraag het je AI, of open het tabblad Issues van je project op GitHub. Klopt er iets niet? Zeg het je AI.

Achterop? Sla het lezen over en ga meteen naar de volgende stap.
-->

---
layout: handson
---

# Laat je AI eraan werken

Gebruik de nummers die je AI net teruggaf. `1 2 3` is maar een voorbeeld.

<PromptBlock label="Met jouw nummers">/work-issues 1 2 3</PromptBlock>

<PromptBlock label="Of laat je AI kiezen">/work-issues Kies de issues waar je nu mee verder kan.</PromptBlock>

<Callout variant="ai" title="Zo zie je dat het gestart is">Je AI zegt: Ik werk aan #1, #2 en #3, en voeg ze daarna samen in één pull request.</Callout>

<!--
2 minuten.

Beide vormen zijn getest. Met nummers kies jij wat er gebeurt. De tweede vorm kijkt welke issues nu kunnen, rekening houdend met wat ervan afhangt. Die neemt er nooit meer dan 10 in één keer.

Twijfel je? Neem de eerste drie nummers. Die leveren samen al iets op dat je kan bekijken.

Blijft er iets anders open staan, dan stopt /work-issues en vraagt wat er moet gebeuren. Een nieuwe CLAUDE.md of PROJECT_OVERVIEW.md is geen probleem: die slaat het zelf op.

Achterop? Start dit zodra je issues er zijn, ook tijdens het theorieblok. Lukt het vandaag niet meer, dan kan het later: je project en je issues staan op GitHub.
-->

---

# Je AI werkt verder, jij luistert

- Je hoeft niet mee te kijken: je AI werkt de issues een voor een af
- Laat je laptop open, en het venster staan
- **Kijk af en toe of je AI op je wacht**

<Callout variant="ai" title="Wacht je AI op jou?">Lees de vraag en antwoord kort. Begrijp je ze niet, vraag dan wat het betekent. Daarna werkt je AI verder.</Callout>

<Callout title="Nog niet zover?">Geen probleem. Werk rustig verder terwijl wij verdergaan. Op het einde bekijken we samen wat er klaar is.</Callout>

<!--
2 minuten.

Zeg dit duidelijk: we gaan nu door met de theorie, terwijl de AI werkt. Niemand moet wachten tot het klaar is.

/work-issues is gemaakt om zonder tussenkomst te lopen, maar soms vraagt het toch iets. Als niemand kijkt, blijft het daar stilstaan. Vandaar: af en toe even kijken.

In de test duurde /work-issues 1 2 3 4 zo'n 17 minuten, op een snelle machine. Dat is ongeveer de lengte van het volgende theorieblok, dus het zal bij veel deelnemers nog bezig zijn als dat afloopt. Zet je laptop aan het stopcontact, en laat hem niet in slaapstand gaan: dan stopt je AI.

Om 1:30 begin je aan het theorieblok, ook als nog niet iedereen gestart is. Help wie vast zit tijdens de uitleg.
-->
