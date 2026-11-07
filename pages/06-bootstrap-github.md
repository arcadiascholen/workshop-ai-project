---
layout: section
eyebrow: Zelf doen
---

# /bootstrap-github

<!--
1:15, 5 minuten voor het hele deel. Op deze slide: 0 minuten, ga meteen door.

In de test duurde /bootstrap-github ongeveer 1 minuut, met een snelle testpersoon.

Codex: gebruik $bootstrap-github. De vervolgstap is stap 6 in docs/CODEX.md van de template.
-->

---
layout: handson
---

# Zet GitHub klaar

Dit doe je één keer. Je AI vraagt hier geen bevestiging.

<PromptBlock>/bootstrap-github</PromptBlock>

Je krijgt sjablonen voor issues en pull requests, en labels om issues te sorteren.

<PromptBlock label="Daarna. In Codex: AGENTS.md in plaats van CLAUDE.md">Lees PROJECT_OVERVIEW.md en werk CLAUDE.md bij met de gekozen bouwstenen en de manier om te bouwen en te testen. Maak het bestand aan als het nog niet bestaat. Schrijf nog geen applicatiecode.</PromptBlock>

<!--
5 minuten.

Er zijn sjablonen voor vijf soorten issues: fout, nieuwe functie, verbetering, onderhoud en documentatie. Een issue voor een nieuwe functie krijgt onder andere de kopjes: Waarom is dit nodig? Gewenst resultaat. Wanneer is dit klaar? Zo weet je AI wat het resultaat moet zijn.

Na afloop staat er een map .github in je project, en je AI zet die meteen op GitHub. Je kan deze skill veilig opnieuw uitvoeren: wat al bestaat, blijft ongemoeid.

Wat er echt in die sjablonen staat, zie je zo meteen in de issues van de demo-app. In het tweede theorieblok leggen we uit waarom dit zo belangrijk is.

De vervolgprompt is een gewone vraag, geen skill. CLAUDE.md is het instructiebestand van je project: het schrijft op hoe je project in elkaar zit, zodat je AI dat later niet opnieuw moet uitzoeken. /setup noemt dezelfde prompt op het einde, dus wie al verder was, heeft het misschien al gedaan.

Codex: daar heet het instructiebestand AGENTS.md. Vraag: Lees PROJECT_OVERVIEW.md en werk AGENTS.md bij met de gekozen bouwstenen en de manier om te bouwen en te testen. Behoud de bestaande werkafspraken. Schrijf nog geen applicatiecode.

Vraagt je AI toestemming om het bestand te schrijven? Kies Yes. De algemene uitleg over toestemmingsvragen staat bij het deel over skills.

Er is nog geen code, dus het bestand is nu nog kort. Toon als voorbeeld hoe het er later uitziet: github.com/yvanvds/calculate-waveforms/blob/main/AGENTS.md. De demo-app is met Codex gemaakt, en daar heet dit bestand AGENTS.md: het is de tegenhanger van CLAUDE.md. Toon het deel "Ontwikkelen, testen en bouwen", met de commando's en de technische basis. De issues vullen het aan.

Je hoeft CLAUDE.md niet zelf op te slaan. /work-issues neemt het straks mee.

Achterop? Sla dit deel gerust over. /create-issues zet de sjablonen zelf klaar als ze ontbreken, en /create-issues en /work-issues werken ook zonder CLAUDE.md. De prompt kan later nog.

Om 1:20 ga je verder, ook als niet iedereen klaar is.
-->
