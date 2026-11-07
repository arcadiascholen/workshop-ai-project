---
layout: section
eyebrow: Afronden
---

# Resultaat, publiceren en afsluiting

<!--
1:45, 15 minuten voor het hele deel. Op deze slide: 0 minuten, ga meteen door.

De slides van dit deel tellen op tot 15 minuten.

Verwacht dat de AI bij een deel van de groep nog bezig is. Een reeks van vier issues duurde in de test 17 minuten op een snelle machine, en de meesten startten nog geen twintig minuten geleden. Een eerste reeks van twee issues is korter, maar die tijd is nog niet gemeten. Wacht daar niet op: dit deel werkt ook zonder eigen resultaat, want je toont alles op de demo-app.

Bij wie de AI nog werkt:

- Laten lopen. Niet onderbreken, en geen nieuwe opdracht tussendoor geven.
- Af en toe kijken of de AI op een antwoord wacht.
- Meekijken op het scherm. De volgende reeks starten ze wanneer hun AI klaar is, ook als dat na de workshop is.
- Staat de AI stil bij de pull request? Gebruik de prompt van de slide "Komt je PR niet vooruit?".

Codex: gebruik $create-issues en $work-issues, met dezelfde tekst erachter.
-->

---
layout: handson
---

# Bekijk je resultaat

Is je AI klaar? Dan vertelt die wat er af is, en wat je nu kan doen.

<PromptBlock label="Klaar?">Wat is de link van mijn site? Heb ik geen site, start mijn app dan voor mij op.</PromptBlock>

- Start de volgende reeks in een nieuwe chat: `/work-issues 3 4 5`
- Wil je iets anders of beters? Begin met `/create-issues`

<Callout variant="ai" title="Nog bezig?">Dat is normaal. Laat je AI werken, kijk af en toe of die op je wacht, en kijk hier mee.</Callout>

<!--
3 minuten. Vraag wie al iets kan openen, en laat iemand kort tonen wat die kreeg.

Is nog niemand klaar? Dan is dat geen probleem. Zeg dat het op een gewone laptop langer duurt dan in de test, en ga door naar de demo-app op de volgende slide.

Bij wie de AI nog werkt, verandert er niets: laten lopen en meekijken. Help hen nu niet om iets te versnellen. Loop wel even langs wie al lang niet meer gekeken heeft: vaak wacht de AI op een antwoord.

De prompt op de slide is niet letterlijk getest. Het verslag van /work-issues zegt wel altijd wat je nu kan zien of doen, en daar begin je mee.

De nummers 3 4 5 zijn een voorbeeld: gebruik wat je AI noemde. Ideeën voor een volgende reeks staan vaak al onder "Nog niet" in PROJECT_OVERVIEW.md. In de demo-app is dat bijvoorbeeld golven downloaden. Wie nu al klaar is, kan zo een nieuw issue maken met /create-issues.

Om 1:48 ga je verder.
-->

---
layout: handson
---

# Je website op GitHub Pages

Bij een website zet issue 2 je site online, gratis op GitHub Pages. [Zo ziet de demo-app eruit.](https://yvanvds.github.io/calculate-waveforms/)

<PromptBlock label="Zat dat niet in je issues?">/create-issues Publiceer mijn website op GitHub Pages, met een workflow die de site bouwt en publiceert bij elke push naar main.</PromptBlock>

<Callout variant="warning" title="Iedereen kan die site bekijken">Zet er geen namen, punten of andere gegevens van leerlingen op.</Callout>

<!--
2 minuten.

Open de demo-app op het scherm: yvanvds.github.io/calculate-waveforms. Voeg een tweede golf toe, tel de twee op en speel het resultaat af. Dit is echt gepubliceerd, en zo kan je de link delen met je leerlingen.

Ook in de demo-app was publiceren issue 2, en na de eerste reeks stond de startpagina online.

Lukt het niet vanzelf? Dan zegt je AI wat je zelf moet doen, bijvoorbeeld iets aanklikken bij Settings en dan Pages. Op een gratis account moet de repo publiek zijn: dat staat op de slide "Publiek of privaat?".

De waarschuwing over leerlinggegevens herhaal je kort. De uitleg staat op de slide "Code mag openbaar, gegevens niet".

Om 1:50 ga je verder.
-->

---

# Elke merge gaat vanzelf online

Een workflow op `main` bouwt je site opnieuw, en zet die online.

- **Wat:** na elke merge publiceert GitHub de nieuwe versie
- **Waarom:** je site is altijd gelijk aan je echte app, zonder handwerk
- **Veilig:** je AI voegt code pas samen na geslaagde controles. Mislukt het publiceren, dan blijft de vorige versie online.

<Callout title="Deze slides werken ook zo">Elke wijziging die wij samenvoegen, staat even later online.</Callout>

<!--
2 minuten.

Dit is de tweede soort CI. De eerste kennen jullie al: de controle draait op een pull request, vóór de merge, en voert de testen uit. De publicatie draait op main, na de merge. Eerst controleren, dan samenvoegen, dan publiceren.

Waarom dit essentieel is voor een website: zonder workflow moet iemand er na elke wijziging aan denken om opnieuw te publiceren. Dan loopt je site achter op je app, en weet je niet meer welke versie je leerlingen zien.

Een workflow is een bestand in .github/workflows. Je moet het niet zelf schrijven of lezen: je AI maakt het in issue 2.

Een lokale app werkt anders: die publiceer je met een release, zoals op de volgende slide.

Om 1:52 ga je verder.
-->

---

# Een Windows-app? Vraag om een release

Een release is een versie op GitHub die anderen kunnen downloaden.

<PromptBlock label="Windows-app">Maak een release van mijn Windows-app op GitHub, zodat anderen ze kunnen downloaden.</PromptBlock>

<Callout variant="warning" title="Dit is nog niet uitgeprobeerd">Verloopt het anders? Blijf praten met je AI, en vraag wat je moet doen.</Callout>

<!--
1 minuut. Kort houden: de meesten maken vandaag een website.

Deze weg is niet getest in deze workshop, en de prompt dus ook niet. Beloof niet hoe het zal lopen of hoe lang het duurt. Zeg dat er duidelijk bij.

De waarschuwing van Windows bij onbekende software kwam al aan bod bij de platformen. Niet opnieuw uitleggen.

Ook een release in een publieke repo kan iedereen downloaden. Leerlinggegevens horen er dus ook hier niet in.

Om 1:53 ga je verder.
-->

---

# Wat kan er misgaan?

Er gaat regelmatig iets mis. Dat is geen probleem: praat verder met je AI.

- **Een toestemmingsvraag met een technische waarschuwing:** dat betekent niet dat er iets stuk is
- **GitHub meldt `Node.js 20 is deprecated`:** niet dringend, de site stond gewoon online

<PromptBlock label="Begrijp je een melding niet?">Wat betekent deze melding? Moet ik iets doen? [plak de melding]</PromptBlock>

<Callout variant="warning" title="npm meldt 8 vulnerabilities, waarvan 1 critical?">Je app of laptop is daarmee niet gehackt. Vraag het je AI, en zeg erbij: pas nog niets aan. Voer <code>npm audit fix --force</code> niet zomaar uit: dat kan je project stukmaken.</Callout>

<!--
3 minuten, waarvan ongeveer 2,5 om te vertellen. De laatste halve minuut is speling.

De boodschap: technische taal wil niet zeggen dat je iets fout deed. Laat je AI uitleggen wat er aan de hand is.

Eerste voorbeeld: de testpersoon kreeg onder andere "Quoted text in this command can't be checked before it runs", toen de AI verschillende stappen in één lang commando stak. Claude Code kon dat niet nakijken, en de AI wachtte op een antwoord. De skills zijn daarna aangepast, dus je zal dit minder vaak zien, maar het kan nog. Wat je dan doet, staat op de slide "Je AI vraagt soms toestemming": lees wat er staat, en kies bij twijfel No en vraag wat het doet.

Tweede voorbeeld: de melding staat bij de publicatie van de demo-app, op het tabblad Actions van de repo. Ze betekent dat een onderdeel van die publicatie verouderd raakt. De publicatie na PR 7 slaagde gewoon, met die melding erbij. Je hoeft dus niet alles op te lossen wat GitHub meldt. Vraag je AI of het dringend is.

Het kader, hooguit een halve minuut. Na npm install kan je een melding krijgen zoals "8 vulnerabilities (3 low, 4 high, 1 critical)", bijvoorbeeld bij een Slidev- of Astro-project. Vulnerabilities zijn kwetsbaarheden: zwakke plekken in code. Vooral "critical" schrikt af. Niet schrikken, wel vragen. Vaak zit het probleem in een onderdeel dat een framework meebrengt, en speelt het alleen in bepaalde situaties.

Wie zo'n melding krijgt, kan dit aan de AI vragen: "npm meldt kwetsbaarheden. Leg uit wat dit betekent voor mijn project, en stel voor wat we moeten doen. Pas nog niets aan." Wil je het laten oplossen, dan maak je er een issue van met /create-issues.

Voorbeeld: deze slides zelf. npm audit meldt bij Slidev 53.1.0 die 8 kwetsbaarheden (nagekeken op 7 november 2026). Ze komen van dompurify, via de code-editor monaco-editor, en van image-size, via de PowerPoint-export pptxgenjs. npm audit fix --force zou Slidev terugzetten naar 53.0.0, en andere versies van je frameworks kunnen je project stukmaken.

Gaat het om leerlinggegevens of een site met login? Dan vraagt zo'n melding meer aandacht. Geen volledige uitleg over beveiliging hier.

Eerlijk vermelden: een gefaalde controle is in de test niet voorgekomen. De Windows-test moet nog gebeuren, dus daar kunnen nog andere voorbeelden uit komen.

Om 1:56 ga je verder.
-->

---

# Begrijp je een voorstel niet helemaal?

Vaak wordt pas duidelijk wat je AI bedoelt als je het resultaat ziet.

| Je AI vraagt of stelt voor | Wat doe je? |
|---|---|
| Een voorstel voor je app, zoals een opbouw of een knop | **Ga akkoord** en bekijk het resultaat. Niet wat je wou? Maak een issue om het aan te passen. |
| Iets dat je niet kan terugdraaien, of dat gegevens deelt | **Vraag eerst** wat het doet. |
| Een toestemmingsvraag met Yes en No | Lees wat er staat. Twijfel je? **Kies No** en vraag wat het doet. |

<style>
table {
  margin-bottom: 20px;
}
</style>

<!--
2 minuten.

Zeg dit: blijf niet hangen op elk voorstel. Je hoeft niet alles vooraf te begrijpen. Het werk zit in een branch en kan achteraf nog veranderen. Dat maakt akkoord gaan bij een voorstel voor je app veilig.

Dat geldt niet voor alles. Iets publiceren met gegevens erin of gegevens naar een andere dienst sturen, draai je niet zomaar terug. Vraag dan eerst wat het doet en wie het kan zien.

Dit klopt met de slide "Je AI vraagt soms toestemming". Die uitleg herhaal je niet. Zeg dus niet: ga altijd akkoord.

Om 1:58 ga je verder.
-->

---

# Dit neem je mee naar huis

- **Je eigen project** op GitHub
- **Een ontwerpdocument:** `PROJECT_OVERVIEW.md`
- **Een eerste lijst taken:** je issues

Zo werk je thuis verder: `/create-issues`, en daarna `/work-issues`.

<Callout title="Een nieuwe functie?">Praat er eerst over met <code>/discuss</code>. Je AI denkt mee, maar maakt nog geen issues of code.</Callout>

<Callout variant="ai" title="Je AI is nog bezig?">Laat je laptop open tot die klaar is, ook na de workshop.</Callout>

<!--
2 minuten. Sluit af met wat ze nu hebben, zoals de omschrijving van de workshop beloofde. Thuis open je je AI in de map van je project, zoals vandaag.

Is er nog een AI aan het werk? Dan gaat die alleen door als de laptop open blijft en niet in slaapstand gaat. Het werk staat pas op GitHub na de push op het einde van de reeks. Moet iemand toch weg en stopt de AI? Open je project thuis met je AI, en vraag wat er al klaar is en of die de rest kan afwerken. Dat is niet getest. De issues staan wel veilig op GitHub.

Niet iedereen heeft alle drie de punten. Geen issues? /create-issues kan ook thuis. Geen overzicht? Start thuis /setup.

/discuss kwam kort aan bod bij de skills. Je AI leest je project en zoekt op het internet, maar past niets aan. Ben je uitgepraat, dan maak je er issues van met /create-issues, en daarna /work-issues. In Codex typ je $discuss.

Bedank iedereen. Einde om 2:00.
-->
