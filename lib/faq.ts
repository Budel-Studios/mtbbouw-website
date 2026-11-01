/**
 * FAQ-content — herschreven van de live mtbbouw.com FAQ-pagina (5 categorieën)
 * en de dienstpagina's. Prijzen en termijnen zijn de door MTB gepubliceerde
 * indicaties (prijspeil 2026) — bij wijziging hier aanpassen.
 */

import { facts, garantieTekst } from "@/lib/facts";

type Faq = { question: string; answer: string };

/* ------------------------------- Verbouw & renovatie ------------------------------- */

const faqVerbouwing: Faq[] = [
  {
    question: "Wat is het verschil tussen renovatie en verbouw?",
    answer:
      "Renovatie is het vernieuwen of verbeteren van wat er al is — denk aan een nieuwe badkamer of het opknappen van kozijnen. Bij een verbouwing verander je de indeling of functie van je woning, zoals het doorbreken van een muur of het verplaatsen van de keuken.",
  },
  {
    question: "Kan ik in mijn huis blijven wonen tijdens de verbouwing?",
    answer:
      "In veel gevallen wel. Het hangt af van de omvang van het werk — we stemmen dit vooraf met je af en plannen de werkzaamheden zo dat de overlast beperkt blijft.",
  },
  {
    question: "Hoe lang duurt een verbouwing?",
    answer:
      "Kleine verbouwingen zijn vaak in enkele weken klaar; grotere renovaties duren langer. In de offerte krijg je een realistische planning, zodat je vooraf weet waar je aan toe bent.",
  },
  {
    question: "Heb ik een vergunning nodig?",
    answer:
      "Dat hangt van de situatie af. Veel inpandige verbouwingen zijn vergunningsvrij, maar wijzigingen aan de buitenkant of constructieve ingrepen kunnen een omgevingsvergunning vereisen. Check het Omgevingsloket — wij denken graag mee.",
  },
  {
    question: "Hoe voorkom ik onvoorziene kosten?",
    answer:
      "Door wensen vooraf duidelijk vast te leggen en keuzes op tijd te maken. Bij oudere woningen is er altijd kans op verborgen gebreken; met zo'n 10% onvoorzien in je budget zit je in de meeste gevallen veilig.",
  },
  {
    question: "Kan ik verbouwen combineren met verduurzamen?",
    answer:
      "Ja, en dat is vaak juist voordelig: isolatie, HR++-glas en andere maatregelen komen mogelijk in aanmerking voor ISDE-subsidie (zie rvo.nl). Als je toch al verbouwt, zijn de bijkomende kosten lager.",
  },
];

/* ------------------------------------- Aanbouw ------------------------------------- */

const faqAanbouw: Faq[] = [
  {
    question: "Wat kost een aanbouw in Enschede of Twente?",
    answer:
      "Reken indicatief op €2.200 tot €3.200 per m² (incl. btw), afhankelijk van afwerking en constructie. Een aanbouw van 20 m² komt daarmee op circa €45.000 tot €65.000. Je ontvangt vooraf een gespecificeerde offerte voor de afgesproken werkzaamheden.",
  },
  {
    question: "Heb ik een vergunning nodig voor een aanbouw?",
    answer:
      "Vaak niet, maar een vaste maat die overal geldt is er niet. Het hangt af van onder meer waar op het erf de aanbouw komt, hoe diep en hoe hoog hij wordt, hoeveel er al gebouwd is en wat het omgevingsplan van je gemeente zegt. Doe voor een eerste beeld de Vergunningcheck in het Omgevingsloket; wij checken het altijd voor jouw adres. Ook zonder vergunning gelden de technische bouwregels.",
  },
  {
    question: "Verhoogt een aanbouw de waarde van mijn woning?",
    answer:
      "Vaak wel. Extra leefruimte is aantrekkelijk voor kopers. Hoeveel het oplevert hangt af van je woning en de buurt; een taxateur kan dat het best inschatten.",
  },
  {
    question: "Weet ik vooraf wat het gaat kosten?",
    answer:
      `${facts.offerte.standaard} Meerwerk voeren we alleen uit na jouw akkoord.`,
  },
];

/* ------------------------------------- Uitbouw ------------------------------------- */

const faqUitbouw: Faq[] = [
  {
    question: "Wat is het verschil tussen een aanbouw en een uitbouw?",
    answer:
      "Een uitbouw verlengt een bestaande ruimte (bijvoorbeeld de keuken naar achteren); een aanbouw is een nieuwe ruimte tegen de woning aan. In de praktijk lopen de termen door elkaar — wij bouwen beide.",
  },
  {
    question: "Hoe lang duurt het bouwen van een uitbouw?",
    answer:
      "Een gemiddelde uitbouw duurt 8 tot 14 weken vanaf de start van de uitvoering. Met prefab-elementen kan de ruwbouw al binnen een week staan.",
  },
  {
    question: "Kan ik thuis blijven wonen tijdens de bouw?",
    answer:
      "Meestal wel. De doorbraak naar de bestaande woning plannen we zo laat mogelijk in het proces, en we schermen de werkzone af.",
  },
  {
    question: "Welke materialen gebruiken jullie?",
    answer:
      "Kalkzandsteen, snelbouwsteen of houtskeletbouw, met isolatiewaarden vanaf Rc 4,7 in de wanden en HR++- of triple-beglazing. We adviseren wat het beste bij jouw woning en budget past.",
  },
];

/* ------------------------------------- Kozijnen ------------------------------------ */

const faqKozijnen: Faq[] = [
  {
    question: "Wat kosten nieuwe kozijnen?",
    answer:
      "Indicatie per kozijn inclusief HR++-glas en plaatsing: kunststof €600–€900, hout vanaf ± €900, aluminium vanaf ± €1.100. Voor een gemiddelde rijwoning (8–10 kozijnen) kom je op circa €7.000 tot €14.000.",
  },
  {
    question: "Hout, kunststof of aluminium — wat is de beste keuze?",
    answer:
      "Hout is klassiek en gaat met goed onderhoud 50–80 jaar mee, maar vraagt elke 4–6 jaar schilderwerk. Kunststof is onderhoudsarm en gaat 40–50 jaar mee. Aluminium is slank, modern en sterk (60+ jaar). We adviseren op basis van je woning, stijl en budget.",
  },
  {
    question: "Hoe lang duurt het plaatsen?",
    answer:
      "Een gemiddelde woning is in 2 tot 4 werkdagen voorzien van nieuwe kozijnen. Je woning staat daarbij meestal niet langer dan enkele uren 'open' — we werken raam voor raam.",
  },
  {
    question: "Is er subsidie op energiezuinige kozijnen?",
    answer:
      "Ja. Via de ISDE-regeling krijg je tot €130 per m² isolerend glas terug, bij minimaal 8 m² HR++- of triple-beglazing. Wij helpen je met de aanvraag. Actuele voorwaarden vind je op rvo.nl.",
  },
  {
    question: "Wat is het verschil tussen HR++ en triple glas?",
    answer:
      "HR++ heeft twee ruiten met coating en gasvulling (U-waarde ± 1,1); triple heeft drie ruiten en isoleert tot twee keer beter (U-waarde tot 0,5), maar is zwaarder en duurder. Voor bestaande woningen is HR++ meestal een uitstekende balans.",
  },
  {
    question: "Welke garantie krijg ik?",
    answer:
      `Op kozijn en glas geldt de garantie van de fabrikant; die termijn staat in de offerte. Op de plaatsing geven we garantie volgens de richtlijnen in de bouw. ${facts.garantie.wettelijk}`,
  },
  {
    question: "Kan vervangen zonder schade aan de muur?",
    answer:
      "Ja, met de renovatiemethode blijft de schade aan binnen- en buitenzijde minimaal. Kleine herstelwerkzaamheden nemen we netjes mee in de afwerking.",
  },
];

/* ------------------------------------- Nieuwbouw ----------------------------------- */

export const faqNieuwbouw: Faq[] = [
  {
    question: "Wat kost een nieuwbouwwoning?",
    answer:
      "Indicatief €1.900–€2.600 per m² casco en €2.400–€3.500 per m² inclusief afwerking (prijspeil 2026). Een woning van 150 m² komt daarmee op circa €360.000 tot €525.000, exclusief grond.",
  },
  {
    question: "Hoe lang duurt nieuwbouw?",
    answer:
      "Traditionele bouw duurt 9 tot 14 maanden vanaf goedgekeurde vergunning; met prefab-elementen kan het in 6 tot 9 maanden.",
  },
  {
    question: "Welke vergunningen heb ik nodig?",
    answer:
      "Meestal een omgevingsvergunning voor de bouwactiviteit. Past het plan niet in het omgevingsplan van de gemeente, dan is ook een vergunning voor een omgevingsplanactiviteit nodig, en soms komen er andere activiteiten bij, zoals natuur. De beslistermijn is 8 weken bij de reguliere en 26 weken bij de uitgebreide procedure; de gemeente kan die verlengen. Wij begeleiden dit traject.",
  },
  {
    question: "Bouwen jullie volgens BENG (bijna energieneutraal)?",
    answer:
      "Ja. Nieuwbouw moet sinds 1 januari 2021 voldoen aan de BENG-eisen voor bijna energieneutrale gebouwen. Dat is iets anders dan volledig energieneutraal: BENG stelt grenzen aan de energiebehoefte, het fossiele energiegebruik en het aandeel hernieuwbare energie, en schrijft geen vaste maatregelen voor. Welke mix van isolatie, glas, ventilatie en installaties past, stemmen we af op je ontwerp en budget. Meer uitleg staat op rvo.nl.",
  },
  {
    question: "Wat staat er in de aannemingsovereenkomst?",
    answer:
      "Wat we bouwen, de aanneemsom met eventuele stelposten, de planning met de beoogde opleverdatum, de garantie en de afspraken over oplevering en eventuele vertraging.",
  },
  {
    question: "Welke garanties krijg ik bij nieuwbouw?",
    answer:
      `${garantieTekst} ${facts.nazorg.nabellen}`,
  },
  {
    question: "Kan ik tijdens de bouw nog wijzigen?",
    answer:
      "Tot de start van de uitvoering is er veel mogelijk; daarna wordt wijzigen kostbaar. We plannen daarom 2 à 3 vaste keuzemomenten in het traject.",
  },
];

/* -------------------------------------- Prefab ------------------------------------- */

export const faqPrefab: Faq[] = [
  {
    question: "Wat is prefab bouwen precies?",
    answer:
      "Bij prefab worden bouwdelen — wanden, vloeren, daken of complete elementen — in de fabriek op maat gemaakt en op de bouwplaats gemonteerd. Dat is sneller en maatvaster dan alles op locatie bouwen.",
  },
  {
    question: "Hoeveel sneller is prefab?",
    answer:
      "De ruwbouw van een aanbouw staat met prefab vaak binnen een week. Een complete nieuwbouwwoning duurt met prefab 6 tot 9 maanden in plaats van 9 tot 14; een prefab bedrijfshal staat in 4 tot 6 maanden.",
  },
  {
    question: "Is prefab goedkoper dan traditioneel bouwen?",
    answer:
      "Vaak wel: kortere bouwtijd betekent minder arbeidsuren op locatie en minder overlast. De maatvastheid uit de fabriek scheelt bovendien faalkosten. Per project rekenen we beide varianten eerlijk voor.",
  },
  {
    question: "Lever ik kwaliteit in met prefab?",
    answer:
      "Nee — eerder andersom. Elementen worden onder geconditioneerde omstandigheden gemaakt, met strakkere toleranties dan op een natte bouwplaats mogelijk is.",
  },
  {
    question: "Waarvoor is prefab geschikt?",
    answer:
      "Aanbouwen, dakopbouwen, bijgebouwen, complete woningen en bedrijfshallen. Bij een verbouwing van een bestaande woning is traditioneel bouwen soms passender — we adviseren per situatie.",
  },
];

/* -------------------------------------- Afbouw ------------------------------------- */

const faqAfbouw: Faq[] = [
  {
    question: "Wat valt er onder afbouw?",
    answer:
      "Alles na de ruwbouw: stucwerk, vloeren, plafonds, binnendeuren, trappen, schilderwerk, badkamer en keuken, sanitair en elektra.",
  },
  {
    question: "Wat kost afbouw?",
    answer:
      "Indicatief €400 tot €1.200 per m², afhankelijk van het luxeniveau. Voor een woning van 130 m² kom je gemiddeld op €70.000 tot €140.000.",
  },
  {
    question: "Hoe lang duurt de afbouwfase?",
    answer:
      "Gemiddeld 8 tot 14 weken, in vaste volgorde: leidingwerk, stucwerk, vloeren en tegels, en dan de afwerking.",
  },
  {
    question: "Kan ik zelf werkzaamheden combineren met jullie werk?",
    answer:
      "Ja, dat kan prima — zolang werkzaamheden elkaar niet kruisen. We maken samen een planning waarin jouw eigen klussen een logische plek krijgen.",
  },
  {
    question: "Welke garantie geldt op afbouwwerk?",
    answer:
      `${garantieTekst} De afspraken voor jouw project staan in de offerte.`,
  },
];

/* ------------------------------------ Bedrijfsbouw --------------------------------- */

const faqBedrijven: Faq[] = [
  {
    question: "Wat voor zakelijke projecten doen jullie?",
    answer:
      "Kantoorpanden, showrooms, bedrijfshallen, werkplaatsen, winkels en horeca — zowel nieuwbouw en verbouw als complete afbouw van casco tot sleutelklaar.",
  },
  {
    question: "Wat kost een bedrijfspand?",
    answer:
      "Dat hangt af van het soort pand, de staat waarin het is en het afwerkingsniveau. Een prijs per m² zegt daarom weinig. Na een intake op locatie ontvang je een gespecificeerde offerte voor jouw pand.",
  },
  {
    question: "Kunnen jullie verbouwen terwijl mijn bedrijf doordraait?",
    answer:
      "Vaak wel. We werken waar het kan in fasen en stemmen de planning af op je openingstijden; werken buiten kantoortijden is bespreekbaar. Over geluid, stof en bereikbaarheid maken we vooraf duidelijke afspraken.",
  },
  {
    question: "Hoe snel kunnen jullie schakelen?",
    answer:
      "We plannen een intake op locatie en sturen daarna een gespecificeerde offerte. Tijdens de intake leggen we het pand nauwkeurig vast, zodat niets tussen wal en schip valt.",
  },
  {
    question: "Welke garanties gelden bij bedrijfsbouw?",
    answer:
      `${garantieTekst} De afspraken voor jouw pand leggen we vast in de overeenkomst.`,
  },
  {
    question: "Hoe zit het met veiligheid op de bouwplaats?",
    answer:
      "We werken volgens VCA-richtlijnen: gecertificeerde medewerkers, bouwhekken, valbeveiliging, persoonlijke beschermingsmiddelen en toolbox-meetings.",
  },
];

/* ----------------------- Zakelijk: /zakelijk en de twee dienstpagina's ------------- */

export const faqZakelijk: Faq[] = [
  {
    question: "Voor welke zakelijke verbouwingen kan ik bij MTB Bouw terecht?",
    answer:
      "Voor horeca, kantoren, winkels, showrooms en bedrijfsruimten. We maken een casco pand gebruiksklaar of passen een bestaand pand aan: indeling, wanden, plafonds, vloeren, tegelwerk, maatwerk en afwerking. Installaties stemmen we af met vaste partners.",
  },
  {
    question: "Wat betekent één aanspreekpunt in de praktijk?",
    answer:
      "Mathijs of Robbert is je vaste contact, van de eerste opname tot de oplevering. Zij maken de planning, stemmen af met de installateurs en zijn degene die je belt als er iets is.",
  },
  {
    question: "Hoe komt de offerte tot stand?",
    answer: `We bekijken het pand op locatie en leggen vast wat er moet gebeuren. ${facts.offerte.standaard} Meerwerk voeren we alleen uit na jouw akkoord.`,
  },
  {
    question: "Kan mijn bedrijf open blijven tijdens de verbouwing?",
    answer:
      "Dat hangt af van de ingreep. Faseren per zone kan soms. Bij sloopwerk, nieuwe installaties of vloeren is tijdelijk sluiten of uitwijken vaak verstandiger. We bespreken vooraf wat haalbaar is en nemen dat op in de planning.",
  },
  {
    question: "Werken jullie ook buiten Twente?",
    answer:
      "Onze basis is Enschede en we werken vooral in Twente. Grotere zakelijke opdrachten daarbuiten zijn bespreekbaar; voor De Broodbode werkten we bijvoorbeeld in Zwolle en Apeldoorn.",
  },
  {
    question: "Welke garantie krijg ik?",
    answer: `${garantieTekst} ${facts.nazorg.nabellen}`,
  },
];

export const faqHoreca: Faq[] = [
  {
    question: "Wat is het verschil tussen horeca-afbouw en horeca verbouwen?",
    answer:
      "Bij afbouw begin je met een casco pand: een kale vloer, geen wanden en vaak nog geen voorzieningen. Wij maken het gebruiksklaar. Bij verbouwen is er al een zaak en pas je die aan, bijvoorbeeld met een nieuwe indeling, een andere bar, nieuw sanitair of een frisse afwerking.",
  },
  {
    question: "Kunnen jullie een casco lunchroom afbouwen?",
    answer:
      "Ja. In Zwolle bouwden we voor De Broodbode een casco pand in zeven weken af tot lunchroom, met tegelwerk, een maatwerk counter, een akoestisch plafond, verlichting, sanitair en een achterkeuken. Wat jouw pand nodig heeft, bepalen we na een opname op locatie.",
  },
  {
    question: "Kan mijn zaak tijdens de verbouwing gedeeltelijk openblijven?",
    answer:
      "Soms. Kleine aanpassingen kunnen per zone of buiten openingstijden. Bij sloop, nieuwe installaties of vloeren is dat meestal niet verstandig voor gasten en personeel. In Apeldoorn viel het werk daarom in de zomervakantie, zodat de zaak zo kort mogelijk dicht hoefde. We bespreken vooraf wat bij jouw zaak past.",
  },
  {
    question: "Wie regelt ontwerp, vergunningen en installaties?",
    answer:
      "Dat spreken we per project vooraf af. Het ontwerp en de keukenapparatuur kunnen van jou, je ontwerper of je leverancier komen. Wij doen de bouwkundige uitvoering en afwerking, en stemmen af met de installateurs voor elektra, ventilatie en verlichting. Welke vergunningen nodig zijn, hangt af van je plan en je gemeente.",
  },
  {
    question: "Welke informatie hebben jullie nodig voor een offerte?",
    answer:
      "Het adres, of het pand casco is of al in gebruik, wat je ermee wilt en je beoogde planning. Een plattegrond, ontwerp of foto's helpen; die kun je na het eerste contact met ons delen. Na de opname op locatie ontvang je een gespecificeerde offerte.",
  },
  {
    question: "Werken jullie in Enschede en de rest van Twente?",
    answer:
      "Ja. We zitten aan de Heersenkampweg in Enschede en werken in heel Twente. Grotere opdrachten daarbuiten zijn bespreekbaar, zoals de projecten voor De Broodbode in Zwolle en Apeldoorn.",
  },
];

export const faqBedrijfspand: Faq[] = [
  {
    question: "Kunnen we doorwerken tijdens de verbouwing?",
    answer:
      "Dat hangt af van de ingreep. Een nieuwe indeling of een plafond kan soms per zone, met het werkgebied afgeschermd. Bij ingrijpend werk aan installaties, vloeren of een hele verdieping is tijdelijk uitwijken vaak verstandiger. We maken daar vooraf samen een plan voor.",
  },
  {
    question: "Wat hebben jullie nodig voor een offerte?",
    answer:
      "Het adres en het soort pand, hoe je de ruimte nu gebruikt, wat er moet veranderen en wanneer. Een plattegrond helpt. Na een opname op locatie ontvang je een gespecificeerde offerte, met stelposten en uitsluitingen op een rij.",
  },
  {
    question: "Kunnen wanden en plafonds samen worden aangepakt?",
    answer:
      "Ja, en dat is vaak slim. Wanden, plafond, verlichting en installaties hangen met elkaar samen. Neem je ze mee in één planning, dan hoeft niets twee keer open.",
  },
  {
    question: "Wie doet de installaties?",
    answer:
      "Elektra, data, verlichting, ventilatie en klimaat laten we uitvoeren door vaste installatiepartners. Wij stemmen het werk af en nemen het mee in de planning, zodat je één aanspreekpunt houdt.",
  },
  {
    question: "We huren ons pand. Wat kan er?",
    answer:
      "Veel, maar overleg eerst met je verhuurder. Of je toestemming nodig hebt en wat er bij vertrek met de aanpassingen gebeurt, hangt af van je huurcontract. Wij denken mee over oplossingen die later aan te passen zijn, zoals metal stud-wanden en systeemplafonds.",
  },
  {
    question: "Waar werken jullie?",
    answer:
      "Vanuit Enschede in heel Twente. Grotere zakelijke opdrachten buiten Twente zijn bespreekbaar; voor De Broodbode werkten we in Zwolle en Apeldoorn.",
  },
];

/* ------------------------- Specifiek voor /werkgenoeg (werken bij) ----------------- */

export const faqWerkenBij: Faq[] = [
  {
    question: "Heb ik ervaring nodig?",
    answer:
      "Nee. Ervaring is mooi meegenomen, maar geen harde eis. We kijken vooral naar of je handig bent en zin hebt om te leren.",
  },
  {
    question: "Heb ik een diploma nodig?",
    answer:
      "Nee. Karakter vinden wij belangrijker dan een papiertje. Wat telt is dat je verantwoordelijkheid neemt en netjes werkt.",
  },
  {
    question: "Kan ik vier dagen werken?",
    answer:
      "In veel gevallen wel — een vierdaagse werkweek is bespreekbaar. We kijken samen wat past bij het project en bij jou.",
  },
  {
    question: "Krijg ik opleidingen?",
    answer:
      "Ja. We investeren in specialistische opleidingen zodat je jezelf blijft ontwikkelen, ook als je al vakman bent.",
  },
  {
    question: "Kan ik doorgroeien?",
    answer:
      "Zeker. Van leerling tot timmerman, allround timmerman, voorman of projectleider — inzet en vakmanschap bepalen je groei, niet je diploma.",
  },
  {
    question: "Werk ik altijd in Twente?",
    answer:
      "Meestal wel — het merendeel van onze projecten zit in Twente en Oost-Nederland. Voor sommige zakelijke projecten rijden we ook daarbuiten.",
  },
];

/* --------------- Specifiek voor /veilig-verantwoord-bouwen ------------------------- */

export const faqVeiligBouwen: Faq[] = [
  {
    question: "Hoe zorgen jullie voor een veilige bouwplaats?",
    answer:
      "Met persoonlijke beschermingsmiddelen, veilig gekeurd gereedschap en dagelijkse controle van de werkplek. Voor de start van elk project bespreken we de risico's, en we ruimen de bouwplaats dagelijks op — een opgeruimde bouwplaats is een veilige bouwplaats.",
  },
  {
    question: "Werken jullie met vaste partners?",
    answer:
      "Ja. Installateurs, stukadoors, schilders, elektriciens en andere specialisten waar we al jaren mee samenwerken. Dat geeft constante kwaliteit en korte lijnen, ook als de planning verandert.",
  },
  {
    question: "Zijn jullie een erkend leerbedrijf?",
    answer:
      "Ja, MTB Bouw is een SBB-erkend leerbedrijf (ID 100812726). We begeleiden BBL-leerlingen in de praktijk, van eerste werkdag tot diploma.",
  },
  {
    question: "Hoe gaan jullie om met onverwachte situaties?",
    answer:
      "Eerlijk en direct. Bouwen blijft mensenwerk — soms loopt iets anders dan gepland. Zodra we dat zien, melden we het en denken we mee over een oplossing, in plaats van het te verzwijgen tot de oplevering.",
  },
  {
    question: "Hoe wordt de kwaliteit gecontroleerd?",
    answer:
      "Via eigen kwaliteitscontroles tijdens de uitvoering, niet pas bij oplevering. Onze vakmensen checken elkaars werk, en bij twijfel wordt er niet doorgewerkt voordat het is opgelost.",
  },
  {
    question: "Werken jullie volgens de CAO Bouw?",
    answer:
      "Ja, onze medewerkers vallen onder de CAO Bouw — met bijbehorende arbeidsvoorwaarden, opleidingsmogelijkheden en veiligheidsafspraken.",
  },
];

/* ----------------------- Gegroepeerd voor /veelgestelde-vragen --------------------- */

export const generalFaq = [
  { category: "Verbouw & renovatie", items: faqVerbouwing },
  { category: "Aanbouw", items: faqAanbouw },
  { category: "Uitbouw", items: faqUitbouw },
  { category: "Kozijnen", items: faqKozijnen },
  { category: "Nieuwbouw", items: faqNieuwbouw },
  { category: "Prefab", items: faqPrefab },
  { category: "Afbouw", items: faqAfbouw },
  { category: "Bedrijfsbouw", items: faqBedrijven },
] as const;

/* ----------------------- Stadspagina's (local SEO, fase 1 strategie) --------------- */

export const faqAannemerEnschede: Faq[] = [
  {
    question: "Zijn jullie echt uit Enschede?",
    answer:
      "Ja — MTB Bouw komt uit Enschede en we werken in de hele stad, van Twekkelerveld tot Glanerbrug, en in de omliggende gemeenten. We komen graag bij je langs voor een intake op locatie: zo bekijken we de situatie direct goed en kunnen we gericht adviseren.",
  },
  {
    question: "Heb ik een vergunning nodig voor mijn verbouwing in Enschede?",
    answer:
      "Dat hangt van het plan af. Veel aanbouwen aan het achtererf zijn vergunningvrij, maar bij een dakopbouw, wijziging van de voorgevel of een monument gelden regels van de gemeente Enschede. Wij toetsen dit standaard in het voortraject en verzorgen waar nodig de aanvraag.",
  },
  {
    question: "Wat kost een aannemer in Enschede per uur of per project?",
    answer:
      "Wij werken niet met losse uurtjes maar met een offerte per project. Na een kennismaking en opname op locatie ontvang je een gespecificeerde offerte, met stelposten en uitsluitingen duidelijk op een rij. Meerwerk doen we alleen na jouw akkoord.",
  },
  {
    question: "Hoe snel kunnen jullie beginnen?",
    answer:
      "Dat verschilt per seizoen en per omvang. Na de offerte plannen we samen een realistische startdatum in — en die datum staat. Kleinere klussen kunnen vaak eerder tussendoor.",
  },
  {
    question: "Doen jullie ook kleine verbouwingen, of alleen grote projecten?",
    answer:
      "Beide. Van het doorbreken van één muur tot een complete renovatie of aanbouw — met een vast kernteam en één aanspreekpunt (Mathijs of Robbert).",
  },
  {
    question: "Werken jullie met onderaannemers?",
    answer:
      "We werken met een eigen kernteam, aangevuld met vaste regionale partners voor installatie, gevelwerk en afwerking. Geen wisselende gezichten: dezelfde vakmensen op elke klus.",
  },
  {
    question: "Kan ik eerder werk van jullie in Enschede bekijken?",
    answer:
      "Ja — op onze projectenpagina staan recente projecten in Enschede en omgeving, waaronder renovaties en uitbouwen. Op verzoek brengen we je in contact met eerdere opdrachtgevers.",
  },
{
    question: "Is MTB Bouw een erkend leerbedrijf?",
    answer:
      "Ja, MTB Bouw B.V. is een door SBB erkend leerbedrijf (ID 100812726). We leiden zelf jonge vakmensen op — zo borgen we vakmanschap voor de lange termijn.",
  },
];


export const faqAannemerTwente: Faq[] = [
  {
    question: "In welke plaatsen in Twente werken jullie?",
    answer:
      "In heel Twente: Enschede (onze thuisbasis), Hengelo, Almelo, Oldenzaal, Borne, Haaksbergen, Losser en de omliggende kernen. Voor zakelijke afbouwprojecten werken we ook daarbuiten, bijvoorbeeld in Zwolle en Apeldoorn.",
  },
  {
    question: "Rekenen jullie voorrijkosten binnen Twente?",
    answer:
      "Nee, voorrijkosten rekenen we niet apart. Wat je betaalt, staat in de offerte.",
  },
  {
    question: "Waarom een aannemer uit de regio kiezen?",
    answer:
      "Korte lijnen en lokale kennis: we kennen de bouwstijlen, de grond en de gemeentelijke procedures in Twente, en werken met vaste regionale partners en leveranciers. Dat scheelt tijd, gedoe en faalkosten.",
  },
  {
    question: "Kunnen jullie een verbouwing in Twente volledig regelen, inclusief vergunning?",
    answer:
      "Ja. Van ontwerp en vergunningscheck tot uitvoering en oplevering: één team, één planning en één aanspreekpunt voor het hele traject.",
  },
  {
    question: "Bouwen jullie ook prefab in Twente?",
    answer:
      "Ja — onder ons label Prefab Bouwen realiseren we houtskeletbouw, prefab daken en wanden en overkappingen. De ruwbouw van een prefab aanbouw staat vaak binnen een week.",
  },
  {
    question: "Hoe snel krijg ik een offerte?",
    answer:
      "Na de kennismaking en opname op locatie ontvang je een gespecificeerde offerte met een realistische planning.",
  },
];

/* ----------------------- Fase 3: verduurzamen -------------------------------------- */

export const faqVerduurzamen: Faq[] = [
  {
    question: "Wat is de slimste volgorde bij verduurzamen?",
    answer:
      "Eerst isoleren (dak, gevel, vloer en glas), dan pas installaties zoals een warmtepomp. Een goed geïsoleerd huis heeft een kleinere en goedkopere installatie nodig.",
  },
  {
    question: "Waarom verduurzamen combineren met een verbouwing?",
    answer:
      "Omdat de steigers, de aannemer en het opengewerkte dak of de gevel er dan toch al zijn. De meerkosten van isolatie of beter glas zijn tijdens een verbouwing veel lager dan als losse klus achteraf.",
  },
  {
    question: "Is er subsidie voor verduurzamen in 2026?",
    answer:
      "Ja, via de ISDE-regeling voor onder meer isolatie en isolerend glas. De regels en bedragen wijzigen regelmatig — check de actuele voorwaarden op rvo.nl; wij helpen bij de aanvraag.",
  },
  {
    question: "Wat levert isolatie op aan comfort?",
    answer:
      "Minder tocht en koudeval, een gelijkmatigere temperatuur en minder geluid van buiten — naast een direct lagere energierekening.",
  },
  {
    question: "Vervangen jullie ook kozijnen en glas?",
    answer:
      "Ja, via ons eigen label De Kozijnstudio: hout, kunststof of aluminium met HR++ of triple glas, inclusief hulp bij de ISDE-aanvraag.",
  },
  {
    question: "Werken jullie alleen in Enschede?",
    answer:
      "Nee, we verduurzamen woningen in heel Twente — Enschede is onze thuisbasis, dus daar zijn we het snelst ter plaatse.",
  },
];

/* ----------------------- Fase 3: kleine kernen Twente ------------------------------ */

export const faqAannemerOldenzaal: Faq[] = [
  {
    question: "Werken jullie in Oldenzaal?",
    answer:
      "Ja, Oldenzaal hoort bij ons vaste werkgebied, net als De Lutte en Rossum. Vanaf onze werkplaats in Enschede zijn we er in zo'n twintig minuten.",
  },
  {
    question: "Kunnen jullie een oudere woning verbouwen met behoud van karakter?",
    answer:
      "Ja. Bij karakteristieke woningen draait het om verbouwen met behoud van detail: profileringen, metselwerk en kapvormen nemen we mee in het plan. Eerst kijken wat er is, dan pas slopen.",
  },
  {
    question: "Wat als mijn woning een monument is of in het centrum staat?",
    answer:
      "Dan stemmen we het plan vooraf af met de gemeente Oldenzaal, zodat de vergunning rond komt. Bij de Van Zantinge-villa in Enschede werkten we op dezelfde manier samen met welstand.",
  },
  {
    question: "Rekenen jullie voorrijkosten naar Oldenzaal?",
    answer:
      "Nee, voorrijkosten rekenen we niet apart. Wat je betaalt, staat in de offerte.",
  },
  {
    question: "Doen jullie in Oldenzaal ook zakelijke projecten?",
    answer:
      "Ja. We verbouwen en bouwen kantoren, winkels en horeca af, van casco tot gebruiksklaar.",
  },
];

export const faqAannemerBorne: Faq[] = [
  {
    question: "Zijn jullie snel ter plaatse in Borne?",
    answer:
      "Ja — Borne ligt tussen Hengelo en Almelo, zo'n 20 minuten van onze werkplaats in Enschede.",
  },
  {
    question: "Doen jullie in Borne ook zakelijke projecten?",
    answer:
      "Ja, zowel woningen als bedrijfspanden. We komen graag langs voor een intake op locatie.",
  },
  {
    question: "Rekenen jullie voorrijkosten naar Borne?",
    answer:
      "Nee, voorrijkosten rekenen we niet apart. Wat je betaalt, staat in de offerte.",
  },
  {
    question: "Kan ik een aanbouw in Borne ook prefab laten bouwen?",
    answer:
      "Ja. Via ons Prefab-label staat de ruwbouw van een aanbouw vaak binnen een week — minder overlast voor jou en de buren.",
  },
];

export const faqAannemerHaaksbergen: Faq[] = [
  {
    question: "Werken jullie ook in het buitengebied rond Haaksbergen?",
    answer:
      "Ja — juist daar. Vrijstaande woningen en erven in het buitengebied lenen zich goed voor aanbouwen, overkappingen en bijgebouwen, ook prefab.",
  },
  {
    question: "Hoe ver is Haaksbergen van jullie werkplaats?",
    answer:
      "Zo'n 15 minuten vanaf Enschede-Zuid — Haaksbergen hoort bij ons kerngebied.",
  },
  {
    question: "Rekenen jullie voorrijkosten naar Haaksbergen?",
    answer:
      "Nee, voorrijkosten rekenen we niet apart. Wat je betaalt, staat in de offerte.",
  },
  {
    question: "Kunnen jullie ook een overkapping of bijgebouw plaatsen?",
    answer:
      "Ja, via ons Prefab-label bouwen we overkappingen, tuinkamers en bijgebouwen — maatvast uit de fabriek en in een paar dagen geplaatst.",
  },
];

export const faqAannemerLosser: Faq[] = [
  {
    question: "Horen Losser en de kerkdorpen bij jullie werkgebied?",
    answer:
      "Ja — Losser, Overdinkel, De Lutte en Beuningen horen bij ons vaste werkgebied; vanaf Enschede zijn we er binnen een kwartier.",
  },
  {
    question: "Rekenen jullie voorrijkosten naar Losser?",
    answer:
      "Nee, voorrijkosten rekenen we niet apart. Wat je betaalt, staat in de offerte.",
  },
  {
    question: "Voor welke klussen kan ik jullie in Losser inschakelen?",
    answer:
      "Renovatie en verbouw, aanbouwen en uitbouwen, kozijnen via De Kozijnstudio, en prefab bouwen — van dorpswoning tot vrijstaand huis in het buitengebied.",
  },
  {
    question: "Kunnen jullie ook verduurzamen meenemen in de verbouwing?",
    answer:
      "Ja, isolatie en beter glas nemen we het voordeligst mee tijdens de verbouwing zelf — inclusief hulp bij de ISDE-subsidieaanvraag waar van toepassing.",
  },
];

export const faqAannemerHengelo: Faq[] = [
  {
    question: "Hoe snel zijn jullie in Hengelo?",
    answer:
      "Vanaf onze werkplaats in Enschede zijn we binnen een kwartier in Hengelo. We werken in heel Hengelo, en ook in Beckum en Oele. De intake doen we altijd bij jou thuis.",
  },
  {
    question: "Kunnen jullie een oudere woning in Hengelo verbouwen met behoud van karakter?",
    answer:
      "Ja, daar hebben we een zwak voor. We kijken eerst wat er is en wat goed is, en verbouwen daaromheen. De renovatie van de Van Zantinge-villa in Enschede is daar een goed voorbeeld van.",
  },
  {
    question: "Heb ik in Hengelo een vergunning nodig voor een uitbouw?",
    answer:
      "Vaak niet, maar een vaste maat die overal geldt is er niet. Het hangt af van onder meer de plek op het erf, de diepte en hoogte, wat er al gebouwd is en het omgevingsplan van de gemeente Hengelo. Doe voor een eerste beeld de Vergunningcheck in het Omgevingsloket; wij checken het altijd voor jouw adres.",
  },
  {
    question: "Rekenen jullie voorrijkosten naar Hengelo?",
    answer:
      "Nee, voorrijkosten rekenen we niet apart. Wat je betaalt, staat in de offerte.",
  },
  {
    question: "Doen jullie in Hengelo ook zakelijke projecten?",
    answer:
      "Ja. We verbouwen kantoren, winkels en bedrijfspanden, van casco tot gebruiksklaar, met één aanspreekpunt en één offerte.",
  },
];

export const faqAannemerAlmelo: Faq[] = [
  {
    question: "Hoort Almelo bij jullie werkgebied?",
    answer:
      "Ja. Almelo ligt op zo'n halfuur van onze werkplaats in Enschede en hoort bij ons vaste werkgebied, net als Aadorp, Bornerbroek en Mariaparochie.",
  },
  {
    question: "Doen jullie in Almelo ook kleine klussen, zoals een veranda?",
    answer:
      "Ja. De houten veranda die we in Almelo bouwden stond er in twee dagen. Klein of groot, je krijgt dezelfde vaste mensen en een heldere offerte.",
  },
  {
    question: "Heb ik in Almelo een vergunning nodig voor een veranda of overkapping?",
    answer:
      "Vaak niet, als hij in de achtertuin staat en binnen de regels voor diepte en hoogte blijft. Het omgevingsplan van de gemeente Almelo kan eigen regels hebben. We checken het vooraf voor jouw adres.",
  },
  {
    question: "Rekenen jullie voorrijkosten naar Almelo?",
    answer:
      "Nee, voorrijkosten rekenen we niet apart. Wat je betaalt, staat in de offerte.",
  },
  {
    question: "Doen jullie in Almelo ook zakelijke projecten?",
    answer:
      "Ja. We verbouwen kantoren, winkels en bedrijfspanden, van casco tot gebruiksklaar, met één aanspreekpunt en één offerte.",
  },
];
