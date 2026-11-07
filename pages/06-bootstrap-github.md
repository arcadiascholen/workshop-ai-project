---
layout: section
eyebrow: Zelf doen
---

# /bootstrap-github en /init

<!--
1:15, 5 minuten voor het hele deel. Op deze slide: 0 minuten, ga meteen door.

De slides van dit deel tellen op tot 5 minuten. In de test duurden beide stappen elk ongeveer 1 minuut, met een snelle testpersoon.

Codex: gebruik $bootstrap-github. Stap 6 in docs/CODEX.md van de template vervangt /init.
-->

---
layout: handson
---

# Zet GitHub klaar

Dit doe je één keer. Je AI vraagt hier geen bevestiging.

<PromptBlock>/bootstrap-github</PromptBlock>

- Sjablonen voor issues: fout, nieuwe functie, verbetering, onderhoud en documentatie
- Een sjabloon voor pull requests, en labels om issues te sorteren

<Callout variant="ai" title="Zo weet je AI wat het resultaat moet zijn">Een issue voor een nieuwe functie krijgt onder andere de kopjes: Waarom is dit nodig? Gewenst resultaat. Wanneer is dit klaar?</Callout>

<!--
2 minuten.

Na afloop staat er een map .github in je project, en je AI zet die meteen op GitHub. Je kan deze skill veilig opnieuw uitvoeren: wat al bestaat, blijft ongemoeid.

Wat er echt in die sjablonen staat, zie je zo meteen in de issues van de oefenapp. In het tweede theorieblok leggen we uit waarom dit zo belangrijk is.
-->

---
layout: handson
---

# Maak `CLAUDE.md`

`/init` zit standaard in Claude Code. Het schrijft op hoe je project in elkaar zit, zodat je AI dat later niet opnieuw moet uitzoeken.

<PromptBlock>/init</PromptBlock>

<Callout title="Vraagt je AI toestemming?">De eerste optie, Yes, is goed. Een tip over andere AI-tools mag je negeren.</Callout>

<Callout variant="warning" title="Achterop?">Sla dit deel gerust over. /create-issues zet de sjablonen zelf klaar als ze ontbreken.</Callout>

<!--
3 minuten.

De algemene uitleg over toestemmingsvragen staat bij het deel over skills. Hier volstaat: kies Yes.

Er is nog geen code, dus het bestand is nu nog kort. Toon als voorbeeld hoe het er later uitziet: github.com/yvanvds/workshop-test-breuken/blob/main/CLAUDE.md, met onder andere de commando's en de technische basis. De issues vullen het aan.

Je hoeft CLAUDE.md niet zelf op te slaan. /work-issues neemt het straks mee. Wie /init overslaat, kan het later nog uitvoeren: /create-issues en /work-issues werken ook zonder.

Om 1:20 ga je verder, ook als niet iedereen klaar is.
-->
