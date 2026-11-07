---
layout: section
eyebrow: Theorie
---

# Platformen en frameworks

<!--
0:35, 20 minuten voor het hele deel. Op deze slide: 0 minuten, ga meteen door.

De slides van dit deel tellen op tot 20 minuten.
-->

---

# Wat weet je AI niet?

Je vraagt om een app, en je beschrijft wat die moet kunnen. Dit zeg je meestal niet:

- Hoe moet het eruitzien?
- Hoe blijven uitbreidingen vlot verlopen?
- Op welke platformen moet het werken?
- Hoe bewaar je de gegevens, als dat nodig is?
- Moeten er testen zijn?
- Welke frameworks gebruik je?

<Callout variant="ai" title="Dan kiest je AI maar wat">Meestal wordt het één webpagina, helemaal vanaf nul.</Callout>

<!--
2 minuten.

Een ontwikkelaar denkt hier eerst over na, en jij vergeet het. Dat is logisch: je weet nog niet dat deze vragen bestaan. Net door deze keuzes eerst te maken, krijgt je project een stevige basis.

In dit blok gaat het over testen, platformen, opslag en frameworks. Vormgeving en testen komen terug bij /setup. Vlot uitbreiden komt in het tweede theorieblok.
-->

---

# Waarom testen?

Een test is een klein stukje code dat controleert of je app nog doet wat je bedoelde.

- Bij elke uitbreiding kan je AI iets stukmaken dat eerder werkte
- Zonder testen zie je dat pas als je alles zelf opnieuw probeert
- Vraag je er niet naar, dan ontbreken ze meestal grotendeels

<Callout variant="ai" title="Je moet ze niet zelf schrijven of lezen">De skills zorgen ervoor dat ze er komen, en CI voert ze bij elke PR uit.</Callout>

Uit de oefenapp: de eis "als de uitkomst 1/2 is, telt 2/4 niet" werd een test.

<!--
2 minuten.

Niet te diep op ingaan. Het gaat om het waarom: je kan niet na elke uitbreiding alles zelf opnieuw proberen.

Hoe de skills dat doen: /setup vraagt wat er zeker altijd moet blijven werken. /create-issues zet testen en CI in het eerste issue. /work-issue schrijft bij elk issue de testen die erbij horen.

De oefenapp voor breuken uit de inleiding is zo gemaakt. De eis over 2/4 kwam van de leerkracht, en staat in PROJECT_OVERVIEW.md. Na PR 10 telt de app 47 testen voor de werking en 24 met de echte app, en die slaagden allemaal in CI.
-->

---

# Platform 1: statische website

Het platform is de plek waar je app werkt. Dit is de eenvoudigste keuze.

- Iedereen die je site opent, krijgt hetzelfde te zien
- Bewaren kan in het browsergeheugen, of met een bestand downloaden en uploaden
- Aanmelden of gegevens centraal bewaren kan niet
- Gratis publiceren op GitHub Pages

<Callout title="Browsergeheugen">Dat werkt alleen op dat toestel en in die browser. Wordt het gewist, dan is alles weg.</Callout>

<!--
2 minuten.

Statisch betekent niet saai: ook een interactieve oefening kan. De oefenapp voor breuken uit de inleiding staat op GitHub Pages.

Je AI maakt dit in de praktijk ook zonder dat je het vraagt, maar dan zonder framework. Daarover straks meer.

Op een gratis account moet de repo publiek zijn om GitHub Pages te gebruiken. Dat zagen we daarnet.

Nog een kleine mogelijkheid: gegevens in de URL bewaren. Dat kan alleen voor heel weinig gegevens, zoals een instelling die je via een link deelt.
-->

---

# Platform 2: site met backend

Een backend is een extra dienst die gegevens bewaart, en die je site kan bereiken.

- Nodig om aan te melden, of om gegevens te delen tussen gebruikers
- Je hebt een account nodig bij een externe dienst, bijvoorbeeld Firebase
- Vandaag doen we dit niet. Later kan je je AI vragen naar Firebase of alternatieven.

<Callout variant="warning" title="Firebase en je kredietkaart">Het gratis Spark-plan vraagt geen betaalmethode. Code op de server of bestanden bewaren vraagt het Blaze-plan, en dat vraagt wel een betaalmethode.</Callout>

<small>Bron: Firebase-documentatie, nagekeken op 7 november 2026.</small>

<!--
2 minuten.

Moeilijk is het op zich niet, want je AI doet bijna al het werk. Het is wel een extra horde.

Spark is het gratis plan. Daarmee krijg je onder andere een database (Cloud Firestore: 1 GiB opslag, 50.000 keer lezen en 20.000 keer schrijven per dag), aanmelden en Hosting. Ga je over een limiet, dan stopt dat onderdeel tot de volgende periode, of tot je overstapt op Blaze.

Blaze betaal je volgens gebruik, en de gratis hoeveelheden van Spark blijven erin zitten. Het vraagt een betaalmethode: de meeste kredietkaarten, of een andere manier. Cloud Functions (code op de server) en Cloud Storage (bestanden bewaren) werken alleen op Blaze. Stel daar dan ook budgetmeldingen in.

Bronnen (firebase.google.com):
- pricing
- docs/projects/billing/firebase-pricing-plans
- docs/firestore/quotas
- docs/functions
- docs/storage/faqs-storage-changes-announced-sept-2024

Limieten kunnen wijzigen: kijk ze na voor elke workshop.

Leerlinggegevens bij een externe dienst: volg de afspraken van je school.
-->

---

# Platform 3: lokale app

Een programma dat op je eigen computer draait. De app maken is niet moeilijker, want dat doet je AI.

- Gegevens onthouden zonder backend
- Samenwerken met andere programma's op je computer
- Werkt ook zonder internet
- Delen kan als release op GitHub: een versie die anderen kunnen downloaden

<Callout variant="warning" title="Windows waarschuwt bij onbekende software">Daar raak je voorbij als je het even voordoet. Voor één les is dat minder de moeite, voor een tool die je het hele jaar gebruikt wel.</Callout>

<!--
2 minuten.

De waarschuwing is de enige echte horde. Ook leerlingen raken daar voorbij, als je het hen één keer toont. Daarom is dit vooral interessant voor een tool die regelmatig gebruikt wordt, en waarin je meerdere functies plant.
-->

---

# Drie situaties uit de klas

| Situatie | Platform | Waarom? |
|---|---|---|
| Eén visualisatie van zwaartekracht, voor één les | **Statische website** | Niets bewaren, en een link is genoeg |
| Een oefentool die leerlingen het hele jaar gebruiken | **Website of lokale app** | Dat hangt ervan af of ze moeten kunnen bewaren |
| Een eigen tool met punten of leerlingnotities | **Lokale app** | Die gegevens blijven op je eigen laptop |

<style>
table {
  margin-bottom: 20px;
}
</style>

<Callout title="Twijfel je?">Geen probleem: /setup doet straks een voorstel, en legt uit waarom.</Callout>

<!--
3 minuten.

Vraag bij elke situatie eerst aan de zaal wat ze zouden kiezen.

Zwaartekracht: je toont het in de les of je deelt een link. Er valt niets te bewaren.

Oefentool: moeten leerlingen niets bewaren, dan is een website genoeg. Moeten ze hun werk bewaren, dan kan dat op een website met een bestand dat ze zelf downloaden en uploaden. Dat moeten ze dan wel zelf doen. Anders is een lokale app een optie. In de test van /setup werd zo'n jaartool een website met een voortgangsbestand.

Punten of leerlingnotities: die horen niet in een publieke repo en niet op een publieke site. In de test van /setup werd dit een lokale app, die de gegevens buiten de projectmap bewaart.
-->

---

# Wat is een framework?

Code die anderen al geschreven hebben, en die al antwoorden geeft op vragen zoals:

- Hoe zien knoppen eruit?
- Hoe werken sneltoetsen?
- Hoe werken de onderdelen samen?

<Callout variant="ai" title="Zonder framework moet je AI alles zelf bedenken">Daarom stelt /setup altijd een framework voor.</Callout>

<!--
1 minuut.

Er bestaan enorm veel goede frameworks. We tonen er zes, die het meest bruikbaar zijn voor wat we vandaag doen. Je hoeft ze niet te onthouden: /setup stelt er een voor.
-->

---

# Frameworks voor een website

| Framework | Wat is het? | Wanneer kies je het? |
|---|---|---|
| **Astro** | Maakt statische websites | Een website die je gemakkelijk wil delen, zoals uitleg of een interactieve oefening |
| **Slidev** | Een website die werkt als een presentatie | Een presentatie, eventueel met interactieve slides |
| **TeachBooks** | Zoals Astro, maar minder flexibel | Een wetenschappelijke cursus als website |
| **React** | Ook voor websites | Een website die ook een backend nodig heeft |

<!--
2 minuten.

Astro is de standaardkeuze van /setup voor een website.

Slidev: ook deze slides zijn ermee gemaakt. Het is veel flexibeler dan PowerPoint, want elke slide kan een kleine app zijn.

TeachBooks en React stelt /setup alleen voor als ze echt beter passen.
-->

---

# Frameworks voor een lokale app

| Framework | Wat is het? | Wanneer kies je het? |
|---|---|---|
| **Flutter** | Dezelfde code werkt op meerdere platformen: website, Windows, Mac en Android | Mogelijk ook een Windows-, Mac- of Android-app, of het is nog onduidelijk. Ook voor een persoonlijke tool. |
| **.NET** | Een typische Windows-app | Een Windows-app die sterk moet samenwerken met Windows of andere programma's |

<style>
table {
  margin-bottom: 20px;
}
</style>

<Callout title="Flutter houdt de keuze open">Weet je nog niet waar je app moet werken? Dan kan je dat later nog beslissen.</Callout>

<!--
1 minuut.

Flutter gebruik ik zelf graag. Je hoeft weinig aan te passen om van dezelfde app een andere versie te maken.

.NET is waarschijnlijk niet wat je meestal wil. Het is er voor apps die helemaal met Windows integreren, bijvoorbeeld als je andere programma's op je pc in de gaten wil houden. /setup stelt het alleen voor als het echt beter past.
-->

---

# Keuzehulp: dit vraagt /setup straks

Eerst vertel je wat je wil maken, en wat de eerste versie moet kunnen. Daarna:

<div class="keuze">
  <div>
    <p class="keuze__vraag">1. Moet de app iets onthouden?</p>
    <ul class="keuze__lijst">
      <li>Niets bewaren</li>
      <li>Browsergeheugen</li>
      <li>Bestand downloaden en uploaden</li>
      <li>Gegevens in de URL</li>
      <li>Bestanden op de eigen computer</li>
      <li>Backend (bijvoorbeeld Firebase)</li>
    </ul>
    <p class="keuze__vraag">2. Gegevens over leerlingen?</p>
    <p class="keuze__tekst">Niet in een publieke repo of op een publieke site. Ze blijven op de eigen computer.</p>
  </div>
  <div>
    <p class="keuze__vraag">3. Waar moet de app werken?</p>
    <dl class="keuze__paren">
      <dt>Website die je gemakkelijk wil delen</dt>
      <dd>Astro</dd>
      <dt>Presentatie</dt>
      <dd>Slidev</dd>
      <dt>Mogelijk ook een Windows-, Mac- of Android-app, of het is nog onduidelijk</dt>
      <dd>Flutter</dd>
      <dt>Persoonlijke tool, werkt zonder internet, bewaart gegevens lokaal</dt>
      <dd>Flutter als lokale app</dd>
    </dl>
  </div>
</div>

<style>
.keuze {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  font-size: 20px;
  line-height: 1.3;
}
.slidev-layout .keuze__vraag {
  font-size: 22px;
  font-weight: 700;
  color: var(--forest);
  margin: 0 0 6px;
}
.slidev-layout .keuze__tekst {
  margin: 0;
}
.slidev-layout .keuze__lijst {
  margin: 0 0 14px;
}
.slidev-layout .keuze__lijst li {
  margin: 0 0 2px;
  line-height: 1.3;
}
.keuze__paren {
  display: grid;
  grid-template-columns: 1fr 120px;
  row-gap: var(--space-2);
  margin: 0;
}
.keuze__paren dt {
  border-bottom: 1px solid var(--line);
  padding: 0 var(--space-4) var(--space-2) 0;
}
.keuze__paren dd {
  margin: 0;
  font-weight: 700;
  color: var(--ai-text);
  border-bottom: 1px solid var(--line);
  padding-bottom: var(--space-2);
}
</style>

<!--
3 minuten.

Deze slide volgt de volgorde van /setup: het doel, de eerste versie, opslag, leerlinggegevens, en dan platform en framework. Hij gebruikt ook dezelfde woorden. In teal staat wat de AI voorstelt.

Bij vraag 1 vraagt /setup ook of de gegevens op een andere computer beschikbaar moeten zijn. Het raadt de eenvoudigste manier aan die volstaat.

Bij vraag 2: tenzij je school hiervoor een afgesproken oplossing heeft.

Bij vraag 3 kan /setup ook TeachBooks, React of .NET voorstellen, als die echt beter passen.

Weet je iets niet? Zeg dat gewoon: dan doet /setup een voorstel, en jij zegt ja of dat het anders moet.

Laat iedereen even nadenken over zijn eigen idee. Niemand moet nu al kiezen. Dat gebeurt straks met /setup.
-->
