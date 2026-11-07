---
layout: section
eyebrow: Theorie
---

# Van issue tot merge

<!--
1:30, 15 minuten voor het hele deel, terwijl de AI van de deelnemers werkt. Op deze slide: 0 minuten, ga meteen door.

De slides van dit deel tellen op tot 15 minuten.

Begin ook als nog niet iedereen gestart is. Help wie vast zit tijdens de uitleg.
-->

---

# We volgen één issue

Issue 3 uit de demo-app: [Sinusgolven toevoegen en interactief visualiseren](https://github.com/yvanvds/calculate-waveforms/issues/3). Je AI doet nu hetzelfde.

<ol class="flow">
  <li>Issue</li>
  <li>Branch</li>
  <li>Commit en push</li>
  <li>Pull request<br>en CI</li>
  <li>Merge</li>
  <li>Cleanup</li>
</ol>

<Callout title="Je moet dit niet onthouden">Je AI doet al deze stappen zelf. Met deze uitleg begrijp je wat die onderweg vertelt.</Callout>

<style>
.flow {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 18px;
  list-style: none;
  margin: 28px 0 36px !important;
  padding: 0 !important;
}
.flow li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 96px;
  margin: 0;
  padding: 8px 4px;
  background: var(--ai-soft);
  border: 2px solid var(--ai);
  border-radius: var(--radius-sm);
  color: var(--ai-text);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
}
.flow li:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -15px;
  margin-top: -7px;
  border-block: 7px solid transparent;
  border-left: 12px solid var(--ai);
}
</style>

<!--
1 minuut.

Zeg: dit is wat er op dit moment op jullie laptop gebeurt. We volgen één issue van de demo-app, van begin tot einde.

Een herinnering: kijk af en toe of je AI op je wacht. Dat staat op de slide "Je AI werkt verder, jij luistert".

Wat GitHub is, weten ze al. Issues hebben ze net zelf gemaakt. Nu tonen we hoe alles samenwerkt, en wat een pull request en CI zijn.
-->

---

# 1. Issue: je AI blijft op koers

Je AI leest in het issue wat het resultaat moet zijn, en wanneer het klaar is.

| Soort issue | Wat staat er zeker in? |
|---|---|
| Nieuwe functie | Waarom het nodig is, het gewenste resultaat, wanneer het klaar is |
| Fout | Wanneer de fout optreedt, wat er had moeten gebeuren, de mogelijke oorzaak |

<style>
table {
  margin-bottom: 20px;
}
td:first-child {
  white-space: nowrap;
}
</style>

<Callout variant="ai" title="Uit issue 3: wanneer is dit klaar? Onder andere:">Toevoegen maakt W2, W3 enzovoort, zonder bestaande golven te overschrijven. Een andere frequentie past de grafiek meteen aan.</Callout>

<!--
2 minuten.

Open issue 3: github.com/yvanvds/calculate-waveforms/issues/3. Toon de kopjes, en vooral de lijst onder "Wanneer is dit klaar?". Die punten kan je AI één voor één controleren, ook met een test.

Waarom houdt dit je AI op koers? Tijdens het werk leest die opnieuw wat het doel is. Wat niet in het issue hoort, wordt een nieuw issue, en komt niet zomaar in het huidige werk terecht.

Die vaste structuur komt van de sjablonen van /bootstrap-github, die je daarnet klaarzette. Schrijven doet /create-issues. Issue 3 vermeldt zelfs wat er bewust nog niet in komt: andere golven dan sinusgolven, opslag en downloaden.
-->

---

# 2. Branch: een veilige vertakking

Je AI werkt in een vertakking van je code. Je echte app blijft ongemoeid.

<svg class="takken" viewBox="0 0 868 120" role="img" aria-label="Een tak splitst af van de hoofdlijn met de echte app, krijgt drie stappen werk van de AI en komt daarna terug in de hoofdlijn.">
  <path class="takken__main" d="M0 28H868" />
  <path class="takken__tak" d="M130 28C190 28 190 98 250 98H590C650 98 650 28 710 28" />
  <circle class="takken__punt" cx="310" cy="98" r="9" />
  <circle class="takken__punt" cx="420" cy="98" r="9" />
  <circle class="takken__punt" cx="530" cy="98" r="9" />
  <text class="takken__tekst takken__tekst--main" x="240" y="18">Je echte app</text>
  <text class="takken__tekst takken__tekst--tak" x="255" y="74">Branch: hier werkt je AI</text>
</svg>

- Loopt het helemaal mis? Verwijder de branch en begin opnieuw.
- Ook goed voor grote uitbreidingen op lange termijn: vind je intussen een fout, dan kan je de echte app nog altijd aanpassen.

<Callout variant="ai" title="In de demo-app">Eén branch voor de hele reeks: codex/issues-3-6.</Callout>

<style>
.takken {
  display: block;
  width: 100%;
  height: auto;
  margin: 0 0 16px;
  overflow: visible;
}
.takken path {
  fill: none;
  stroke-width: 5;
}
.takken__main {
  stroke: var(--brand-text);
}
.takken__tak {
  stroke: var(--ai);
}
.takken__punt {
  fill: var(--ai);
}
.takken__tekst {
  font-size: 20px;
  font-weight: 700;
}
.takken__tekst--main {
  fill: var(--brand-text);
}
.takken__tekst--tak {
  fill: var(--ai-text);
}
</style>

<!--
2 minuten.

Een branch is een aparte lijn in je code. Wat daarin gebeurt, komt niet meteen in je app terecht. Dat is wat je AI nu bij jullie doet: nieuwe code schrijven, zonder dat de hoofdbranch verandert.

Loopt het helemaal mis, dan vraag je je AI om de branch te verwijderen en opnieuw te beginnen. Je app heeft er niets van gemerkt.

Grote uitbreidingen: je kan weken in een branch werken aan iets nieuws. Vind je ondertussen een fout in je app, dan los je die op in de echte app, zonder dat al je nieuwe code in de weg zit.

/work-issues maakt één branch voor de hele reeks. Het voorvoegsel codex/ komt van Codex, waarmee de demo-app gemaakt is.
-->

---

# Waarom per issue een agent?

Een agent is een aparte AI-sessie. Die werkt één opdracht af, en stuurt daarna alleen het resultaat terug.

- Zonder agents wordt alles één lang gesprek, en zit je snel aan je limiet
- Elk issue krijgt een nieuwe agent
- De agents werken na elkaar, op dezelfde branch

<Callout variant="ai" title="Je hoofdgesprek blijft kort">Dat gesprek houdt alleen de lijst met issues bij, en één regel resultaat per issue.</Callout>

<!--
2 minuten.

Dit is waarom /work-issues kan werken zonder dat je abonnement na een paar issues op is. De limiet hoort bij je abonnement: hoe langer het gesprek, hoe sneller je eraan zit.

Na elkaar en niet tegelijk, want ze werken in dezelfde map. Een agent die vastloopt, geeft dat door. Dat issue gaat dan niet mee in de pull request, en de volgende issues gaan verder, behalve als ze ervan afhangen. Dat staat dan in het verslag op het einde.

Ziet iemand bij zich agents in beeld verschijnen? Dan is dit het.
-->

---

# 3. Commit en push

| Stap | Wat doet het? | Waar staat je werk? |
|---|---|---|
| **Commit** | Legt het werk vast, met een korte boodschap | Op je laptop |
| **Push** | Zet de commits op GitHub | Ook op GitHub |

<style>
table {
  margin-bottom: 20px;
}
</style>

- Je app verandert nog niet: alles zit in de branch
- `/work-issues` maakt een commit per issue, en pusht op het einde alles samen

<Callout variant="ai" title="Issue 3 werd één commit">Voeg interactieve sinusgolven toe (#3). Het nummer koppelt de commit aan het issue.</Callout>

<!--
2 minuten.

Na een commit staat het werk nog alleen op je laptop. Pas de push zet het op GitHub.

De agent commit pas als de testen op je laptop slagen. Is de laatste agent klaar, dan volgt de push.

Demo-app, issues 3 tot 6: vier issues, vier commits, één push.
- Voeg interactieve sinusgolven toe (#3)
- Golven twee seconden afspelen (#4)
- Golven vermenigvuldigen en optellen (#5)
- Voeg envelopes en ADSR toe (#6)

Toon ze eventueel op het tabblad Commits van PR 8.
-->

---

# 4. Pull request en CI

Eén PR bundelt het werk van de hele reeks.

- **Extra controle:** CI voert de testen uit op GitHub, dus niet alleen op je laptop
- **Geschiedenis:** wat er veranderde en waarom. Je AI kan dat later altijd terugzoeken.

<Callout variant="ai" title="PR 8 van de demo-app">Issues 3 tot 6 samen, met de keuzes en de testresultaten. De controle op GitHub slaagde na bijna drie minuten.</Callout>

Bekijk: [PR 7](https://github.com/yvanvds/calculate-waveforms/pull/7) (issues 1 en 2), [PR 8](https://github.com/yvanvds/calculate-waveforms/pull/8) (issues 3 tot 6)

<!--
2 minuten.

Hier komt CI voor het eerst echt aan bod. CI staat voor continuous integration. Eén zin volstaat: CI voert de testen uit op GitHub. Waarom testen nodig zijn, zagen ze in het eerste theorieblok. De kosten van CI kwamen aan bod bij "Publiek of privaat?".

Open PR 8: github.com/yvanvds/calculate-waveforms/pull/8. Toon de beschrijving: wat er veranderd is, de beslissingen en de testresultaten. Toon op het tabblad Checks de geslaagde controle met de naam flutter. De tweede, publish, is overgeslagen: die publiceert pas na de merge.

Een controle op GitHub geeft meer zekerheid dat je app niet alleen op je eigen laptop werkt.

Later kan je AI in afgesloten issues en PR's terugvinden waarom iets zo gemaakt is. In PR 8 staat bijvoorbeeld dat het geluid een vaste versterking en begrenzing krijgt, zodat verschillen tussen golven hoorbaar blijven.

PR 7 toont dezelfde flow voor de eerste reeks: issues 1 en 2, twee commits, en de controle slaagde.
-->

---

# Komt je PR niet vooruit?

Je AI volgt de controles zelf op, en gaat verder als ze geslaagd zijn. Dat lukt niet altijd.

Na 10 minuten nog altijd geen vooruitgang? Vraag het dan:

<PromptBlock>Kijk de pull request opnieuw na.</PromptBlock>

<Callout variant="warning" title="Een controle gefaald?">Je AI probeert dat tot twee keer op te lossen. Lukt het niet, dan stopt je AI en legt die uit wat er misloopt. De code gaat dan niet naar je app.</Callout>

<!--
1 minuut.

Dit is de enige plek in de flow waar je even alert moet zijn. /work-issues wacht tot 10 minuten op de controles. Is er dan nog geen uitsluitsel, dan kijkt je AI één keer na of er iets vastzit, stopt, en vraagt je om het over een paar minuten opnieuw te vragen. Als niemand kijkt, blijft het daar staan.

Een PR zonder controles is ook mogelijk: als een repo geen workflows heeft, zijn er geen controles. Je AI gaat dan verder en zegt in het verslag dat alleen de lokale testen gelden.

Eerlijk vermelden: in de test is geen enkele controle gefaald. De weg bij een gefaalde controle staat in de skill, maar is nog niet echt doorlopen.
-->

---

# 5. Merge: de code gaat naar je app

Alle controles geslaagd? Dan voegt je AI de code van de branch toe aan de hoofdbranch. Dat is je echte app.

- Meestal gebeurt dit vanzelf: je hoeft niets te doen
- Pas nu verandert je app
- Bij een website gaat je site daarna vanzelf online

<Callout variant="ai" title="In PR 8">Iets meer dan een minuut na de geslaagde controle voegde de AI alles samen.</Callout>

<Callout title="Merget je AI niet?">Bij een conflict stopt je AI en legt uit wat er aan de hand is. Soms doet je AI de merge gewoon niet. Merge dan zelf op GitHub, en zeg het daarna tegen je AI.</Callout>

<!--
1 minuut.

Zelf mergen: open de PR op GitHub, en klik onderaan op Merge pull request en daarna Confirm merge. Zeg het daarna tegen je AI, zodat die verder kan met /cleanup.

Een conflict betekent dat er op twee plaatsen iets aan dezelfde code veranderd is. Je AI lost dat niet met ingewikkelde ingrepen op, maar legt het uit. Vraag dan gewoon wat er nu kan.

De hoofdbranch heet bij jullie main, de rechte lijn op de slide over branches.

Bij een website start de merge ook de publicatie. Wat dat is en waarom het belangrijk is, komt in het volgende deel.
-->

---

# 6. Cleanup: netjes afsluiten

`/work-issues` start zelf `/cleanup`.

- De branch verdwijnt, op GitHub en op je laptop: alles zit nu in je hoofdbranch
- De issues zijn gesloten
- Je AI staat terug op de hoofdbranch, klaar voor de volgende reeks

<Callout variant="ai" title="Niets gaat verloren">Issue 3 en PR 8 blijven op GitHub staan. Alleen de branch codex/issues-3-6 is weg.</Callout>

<!--
1 minuut.

Issues sluiten gebeurt op twee manieren. In de PR staat Closes #3, en daardoor sluit GitHub het issue bij de merge. /cleanup kijkt dat na, en sluit wat nog open staat.

Daarna vertelt je AI kort wat er klaar is, wat er getest is, en wat een goede volgende stap is.
-->

---

# De skills doen dit voor jou

Dit lijkt veel, maar twee skills volstaan.

<PromptBlock label="Wat wil je verbeteren, of wat loopt er fout?">/create-issues [een paar zinnen volstaan]</PromptBlock>

<PromptBlock label="Laat je AI eraan werken">/work-issues [de nummers, of een korte opdracht]</PromptBlock>

<Callout title="En daarna?">Je bekijkt het resultaat, en je start een nieuwe reeks met de volgende nummers.</Callout>

<!--
1 minuut.

Dit is de boodschap om mee te nemen. /create-issues zoekt zelf uit wat er echt aan de hand is en maakt een of meer issues. /work-issues doet alle stappen die je net zag. Een korte opdracht mag ook, zoals: Kies de issues waar je nu mee verder kan. Het neemt nooit meer dan 10 issues in één keer.

In de test duurde een reeks van vier issues zo'n 17 minuten op een snelle machine, inclusief CI, merge, cleanup en publicatie. Bij jullie kan dat langer duren, dus het is normaal als je AI nog bezig is.

Om 1:45 ga je verder, ook als niet iedereen klaar is.
-->
