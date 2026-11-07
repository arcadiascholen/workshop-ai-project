---
layout: section
eyebrow: Uitleg
---

# Wat hebben we net gedaan?

<!--
0:25, 7 minuten voor het hele deel.

Wie nog bezig is met de installatie, werkt gewoon verder. Help hen tijdens de uitleg.
-->

---

# Dit heb je net gedaan

GitHub is een tool voor ontwikkelaars: je code staat online, met alle versies.

| Wat je deed | Wat het betekent |
|---|---|
| Een project maken | Een **repo**: de map van je project op GitHub |
| Klonen | Een kopie van die repo op je laptop |
| Git en gh installeren | De tools waarmee je AI versies bewaart en op GitHub werkt |
| Aanmelden | Je AI mag nu code op GitHub zetten |

<!--
2 minuten.

Korte herhaling, zodat de woorden repo en klonen een betekenis krijgen. Je hoeft geen van deze commando's te onthouden: je AI gebruikt ze voor jou.
-->

---

# Publiek of privaat?

| Op een gratis account | Publiek | Privaat |
|---|---|---|
| Wie kan erbij? | Iedereen op internet | Jij en wie jij toegang geeft |
| Automatische controles | Gratis | $12 tegoed per maand |
| Site op GitHub Pages | Kan | Kan niet: de repo moet publiek zijn |

<Callout title="Tegoed op?">Zonder betaalmethode op je account stoppen die controles, tot het tegoed volgende maand terugkomt.</Callout>

<small>Bron: GitHub Docs, nagekeken op 7 november 2026.</small>

<style>
table {
  margin-bottom: 20px;
}
</style>

<!--
3 minuten.

De automatische controles heten CI. Wat ze doen, komt pas in het tweede theorieblok aan bod: hier gaat het alleen over wat ze kosten.

CI is dus niet de reden om publiek te werken: ook een private repo krijgt CI. De echte beperking zit bij GitHub Pages. Daarmee publiceer je gratis een website, maar op een gratis account moet de repo dan publiek zijn.

Het tegoed is een bedrag, geen vast aantal minuten. Reken je het om aan $0,006 per minuut op een standaard Linux-machine, dan kom je op ongeveer 2000 minuten per maand. Die omrekening is van ons en staat niet zo in de documentatie.

Heb je wel een betaalmethode ingesteld, dan kan bijkomend gebruik betalend worden. Kijk dan je budgetten na.

Bronnen (docs.github.com):
- billing/concepts/product-billing/github-actions
- get-started/learning-about-github/githubs-plans
- pages/getting-started-with-github-pages/creating-a-github-pages-site
- repositories/creating-and-managing-repositories/about-repositories

Limieten kunnen wijzigen: kijk ze na voor elke workshop.
-->

---

# Code mag openbaar, gegevens niet

- Je code is niet uniek. Publiek is daarvoor meestal geen probleem.
- Namen, punten en andere persoonsgegevens horen **niet** in een publieke repo
- Ook een site op GitHub Pages kan iedereen bekijken

<Callout variant="warning" title="Werkt je app met leerlinggegevens?">Hou ze op je eigen computer, ook als het maar een voorbeeld is. Zeg het bij /setup tegen je AI.</Callout>

<!--
2 minuten.

Zeg gerust dat je met een app niet snel rijk wordt: zeker nu met AI kan iedereen ongeveer hetzelfde maken. Je code verbergen is dus zelden nodig.

Leerlinggegevens zijn iets anders. Ook wat je later uit een publieke repo verwijdert, blijft in de oudere versies staan. Daarom horen ze er nooit in thuis, ook niet als voorbeeld.

Een private repo maakt het ook niet vanzelf in orde: volg de afspraken van je school. En een site op GitHub Pages is openbaar, ook als ze uit een private repo komt op een betaald abonnement. Alleen GitHub Enterprise Cloud kan een site privaat publiceren.

/setup vraagt hier zelf niet naar, want de skills zijn niet alleen voor onderwijsapps. Daarom wijs je er hier op. Zegt iemand dat de app met leerlinggegevens werkt, dan zoekt je AI mee naar een manier waarbij ze op de eigen computer blijven.
-->
