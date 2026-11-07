---
layout: section
eyebrow: Theorie
---

# Platformen en frameworks

<!--
0:32, 18 minuten voor het hele deel. Op deze slide: 0 minuten, ga meteen door.

De slides van dit deel tellen op tot 18 minuten.
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

In dit blok gaat het over platformen, opslag, frameworks en testen. Vormgeving en testen komen terug bij /setup. Vlot uitbreiden komt in het tweede theorieblok.
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

Statisch betekent niet saai: ook een interactieve app kan. De demo-app uit de inleiding, met grafieken en geluid, staat op GitHub Pages.

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
| **Astro** | Maakt statische websites | Een website met uitleg of meerdere pagina's, die je gemakkelijk wil delen |
| **React** | Een website die werkt als één app | Eén interactieve app op één pagina, zoals een simulatie of een rekentool |
| **Slidev** | Een website die werkt als een presentatie | Een presentatie, eventueel met interactieve slides |
| **TeachBooks** | Zoals Astro, maar minder flexibel | Een wetenschappelijke cursus als website |

<!--
2 minuten.

Astro en React zijn de twee keuzes van /setup voor een website. Gaat het vooral om tekst en pagina's, dan Astro. Gaat het vooral om één scherm dat reageert op wat je doet, dan React. Beide zijn statisch en gratis op GitHub Pages. React past ook als er later een backend bij komt.

Slidev: ook deze slides zijn ermee gemaakt. Het is veel flexibeler dan PowerPoint, want elke slide kan een kleine app zijn.

TeachBooks stelt /setup alleen voor als het echt beter past.
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

# Waarom testen?

Een test is een klein stukje code dat controleert of je app nog doet wat je bedoelde.

- Bij elke uitbreiding kan je AI iets stukmaken dat eerder werkte
- Zonder testen zie je dat pas als je alles zelf opnieuw probeert
- Testen kijken ook randgevallen na: wat als iemand tekst typt waar je app een getal verwacht? Dat vergeet je zelf snel na een aanpassing.
- Vraag je er niet naar, dan ontbreken ze meestal grotendeels

<Callout variant="ai" title="Je moet ze niet zelf schrijven of lezen">De skills zorgen ervoor dat ze er komen, en dat ze bij elke aanpassing vanzelf lopen.</Callout>

Uit de demo-app: de eis "elke golf duurt precies twee seconden" werd een test.

<!--
3 minuten.

Niet te diep op ingaan. Het gaat om het waarom: je kan niet na elke uitbreiding alles zelf opnieuw proberen.

Randgevallen zijn de situaties waar je zelf niet aan denkt als je even iets uitprobeert: een leeg veld, een tekst in plaats van een getal, een heel groot getal. Een test probeert ze elke keer opnieuw, ook na een aanpassing die er niets mee te maken lijkt te hebben.

Dat de testen bij elke aanpassing vanzelf lopen, heet CI. Dat komt terug in het tweede theorieblok.

Hoe de skills dat doen: /setup schrijft in PROJECT_OVERVIEW.md wat er zeker altijd moet blijven werken. /create-issues zet testen en CI in het eerste issue. /work-issue schrijft bij elk issue de testen die erbij horen.

De demo-app uit de inleiding is zo gemaakt. De eis over twee seconden staat in PROJECT_OVERVIEW.md, bij de eerste versie en bij Testen. Na PR 8 telt de app 12 testen voor de werking, en één test met de echte app in de browser die alle handelingen doorloopt. Die slaagden allemaal in CI.
-->
