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

Je issues staan op GitHub. Ga ze zelf bekijken.

1. Open je eigen repository op GitHub, en klik op het tabblad **Issues**
2. Elk issue heeft een duidelijk label, zoals feature of chore. Dat komt van `/bootstrap-github`
3. Open één issue en lees het helemaal: de inhoud is gedetailleerd
4. Kies bovenaan tussen **Open** en **Closed**: zo zie je ook de issues die al klaar zijn

<Callout variant="ai" title="Wat staat er in een issue?">Drie kopjes: Waarom is dit nodig?, Gewenst resultaat en Wanneer is dit klaar?</Callout>

<!--
2 minuten.

Toon het eerst zelf, bijvoorbeeld bij de demo-app: github.com/yvanvds/calculate-waveforms/issues. Open daar issue 4 (Golven gedurende twee seconden beluisteren), en toon de kopjes Waarom is dit nodig?, Gewenst resultaat en Wanneer is dit klaar? Die komen uit de sjablonen van /bootstrap-github. Daarvoor was alleen de prompt van de vorige slide nodig, samen met PROJECT_OVERVIEW.md. Onder Wanneer is issue 4 klaar? staat onder andere: het geluid start alleen als je op afspelen drukt, en stopt vanzelf na twee seconden.

Gesloten issues zijn er nu nog niet, of alleen als je AI al iets afgewerkt heeft. Straks, na /work-issues, staan ze onder Closed. Ze verdwijnen dus niet.

De demo-app is met de Codex-versie van de skills gemaakt, dus met $create-issues. De werkwijze is dezelfde als /create-issues.

Het eerste issue zet altijd de basis: het framework, de eerste test en CI. Bij een website is het tweede issue publiceren. Samen leveren ze een eenvoudige pagina op die online staat. Zo staat het ook in de demo-app.

Klopt er iets niet in een issue? Zeg het je AI.

Achterop? Sla het lezen over en ga meteen naar de volgende stap.
-->

---
layout: handson
---

# Laat je AI eraan werken

Begin met alleen je eerste twee issues. Zo zie je snel een resultaat. Bij een website staat je site daarna online.

<PromptBlock label="Met jouw nummers">/work-issues 1 2</PromptBlock>

<Callout variant="ai" title="Zo zie je dat het gestart is">Je AI zegt dat die aan #1 en #2 werkt, en ze daarna samenvoegt in één pull request.</Callout>

<!--
2 minuten.

Gebruik de nummers die je AI net teruggaf: 1 en 2 zijn een voorbeeld. Twee issues nu, en de rest in een volgende reeks: zo zien jullie sneller iets, en is er minder wachttijd tijdens de uitleg.

Voor later kan ook een korte opdracht: /work-issues Kies de issues waar je nu mee verder kan. Die vorm is getest en neemt er nooit meer dan 10 in één keer.

Blijft er iets anders open staan, dan stopt /work-issues en vraagt wat er moet gebeuren. Een nieuwe CLAUDE.md of PROJECT_OVERVIEW.md is geen probleem: die slaat het zelf op.

Achterop? Start dit zodra je issues er zijn, ook tijdens het theorieblok. Lukt het vandaag niet meer, dan kan het later: je project en je issues staan op GitHub.
-->

---

# Je AI werkt verder, jij luistert

- Je hoeft niet mee te kijken: je AI werkt de issues een voor een af
- Laat je laptop open, en het venster staan
- **Kijk af en toe of je AI op je wacht**

<Callout variant="ai" title="Wacht je AI op jou?">Lees de vraag en antwoord kort. Begrijp je ze niet, vraag dan wat het betekent. Daarna werkt je AI verder.</Callout>

<Callout title="Klaar met deze reeks?">Open de link van je site, en start de volgende reeks: <code>/work-issues 3 4 5</code>. Luister daarna gewoon verder.</Callout>

<!--
2 minuten.

Zeg dit duidelijk: we gaan nu door met de theorie, terwijl de AI werkt. Niemand moet wachten tot het klaar is.

/work-issues is gemaakt om zonder tussenkomst te lopen, maar soms vraagt het toch iets. Als niemand kijkt, blijft het daar stilstaan. Vandaar: af en toe even kijken.

Nog niet zover? Geen probleem: werk rustig verder terwijl wij verdergaan. Op het einde bekijken we samen wat er klaar is. De nummers 3 4 5 zijn een voorbeeld: gebruik wat je AI noemde.

In de test duurde een reeks van vier issues zo'n 17 minuten op een snelle machine. Een reeks van twee is korter, maar die tijd is nog niet gemeten. Reken erop dat een deel van de groep nog bezig is als het theorieblok afloopt. Zet je laptop aan het stopcontact, en laat hem niet in slaapstand gaan: dan stopt je AI.

Om 1:30 begin je aan het theorieblok, ook als nog niet iedereen gestart is. Help wie vast zit tijdens de uitleg.
-->
