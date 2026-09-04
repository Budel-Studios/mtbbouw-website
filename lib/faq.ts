/**
 * FAQ-content — herschreven van de live mtbbouw.com FAQ-pagina (5 categorieën)
 * en de dienstpagina's. Prijzen en termijnen zijn de door MTB gepubliceerde
 * indicaties (prijspeil 2026) — bij wijziging hier aanpassen.
 */

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
      "Reken indicatief op €2.200 tot €3.200 per m² (incl. btw), afhankelijk van afwerking en constructie. Een aanbouw van 20 m² komt daarmee op circa €45.000 tot €65.000. Je ontvangt altijd een vaste aanneemsom vooraf.",
  },
  {
    question: "Heb ik een vergunning nodig voor een aanbouw?",
    answer:
      "Aanbouwen aan de achterkant zijn vaak (deels) vergunningsvrij — in de meeste Twentse gemeenten onder voorwaarden tot zo'n 30 m² op het achtererf. Grotere of vanaf de straat zichtbare aanbouwen vereisen een omgevingsvergunning. Wij adviseren je hier eerlijk over.",
  },
  {
    question: "Verhoogt een aanbouw de waarde van mijn woning?",
    answer:
      "Ja. Extra leefruimte is aantrekkelijk voor kopers; een goed uitgevoerde aanbouw vertaalt zich doorgaans in een waardestijging van 70–90% van de bouwkosten.",
  },
  {
    question: "Werken jullie met een vaste prijs?",
    answer:
      "In 99% van onze projecten werken we met een vaste aanneemsom. Eventuele stelposten benoemen we transparant in de offerte.",
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
      "Ja — in ongeveer 90% van onze uitbouwprojecten blijven klanten gewoon thuis wonen. De doorbraak naar de bestaande woning plannen we zo laat mogelijk in het proces.",
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
      "Een gemiddelde woning is in 2 tot 4 werkdagen voorzien van nieuwe kozijnen. Je woning staat daarbij nooit langer dan enkele uren 'open' — we werken raam voor raam.",
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
      "10 jaar fabrieksgarantie op kozijn en glas, 5 jaar plaatsingsgarantie van MTB Bouw, en gratis nazorg in het eerste jaar.",
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
      "Een omgevingsvergunning voor bouwen, en afhankelijk van de locatie ook voor afwijken van het bestemmingsplan of natuuractiviteiten. De doorlooptijd is 8 tot 26 weken — wij begeleiden dit traject.",
  },
  {
    question: "Bouwen jullie energieneutraal (BENG)?",
    answer:
      "Nieuwbouw voldoet standaard aan BENG: warmtepomp, triple glas, balansventilatie, hoge isolatiewaarden (Rc 6,3+) en voorbereiding voor zonnepanelen.",
  },
  {
    question: "Wat staat er in de aannemingsovereenkomst?",
    answer:
      "Wat we bouwen, de vaste prijs, de planning met opleverdatum, garanties en opleveringseisen. Vertraging die aan ons ligt kent een boeteclausule per dag.",
  },
  {
    question: "Welke garanties krijg ik bij nieuwbouw?",
    answer:
      "6 jaar op verborgen gebreken, 20 jaar op de constructie en 5 jaar op installaties. Optioneel bouwen we onder Woningborg-garantie.",
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
      "5 jaar op stucwerk, tegelwerk en schilderwerk, 10 jaar op vloersystemen en 2 jaar op installaties.",
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
      "Indicatief: een hal €600–€1.100 per m² casco, een kantoor €1.300–€2.000 per m² turn-key. Een hal van 500 m² komt daarmee op circa €300.000 tot €550.000.",
  },
  {
    question: "Kunnen jullie verbouwen terwijl mijn bedrijf doordraait?",
    answer:
      "Ja. We werken in fasen en passen ons aan op openingstijden — 's nachts werken kan ook. Over geluid, stof en bereikbaarheid maken we vooraf duidelijke afspraken.",
  },
  {
    question: "Hoe snel kunnen jullie schakelen?",
    answer:
      "Intake binnen 7 dagen, voorstel met offerte binnen 5 werkdagen. Tijdens de intake leggen we het pand digitaal vast met onze PandScan-app, zodat niets tussen wal en schip valt.",
  },
  {
    question: "Welke garanties gelden bij bedrijfsbouw?",
    answer:
      "6 jaar op gebreken in de afwerking, 20 jaar op de constructie, 10 jaar op gevel en dak en 2–10 jaar op installaties. Na oplevering is een onderhoudscontract mogelijk.",
  },
  {
    question: "Hoe zit het met veiligheid op de bouwplaats?",
    answer:
      "We werken volgens VCA-richtlijnen: gecertificeerde medewerkers, bouwhekken, valbeveiliging, persoonlijke beschermingsmiddelen en toolbox-meetings.",
  },
];

/* ----------------------- Specifiek voor /afbouwstudio (zakelijke afbouw) ----------- */

export const faqZakelijkeAfbouw: Faq[] = [
  {
    question: "Werken jullie ook buiten Twente?",
    answer:
      "Onze basis ligt in Twente en Oost-Nederland, maar voor zakelijke projecten — zoals meerdere vestigingen van dezelfde opdrachtgever — rijden we ook daarbuiten. Denk aan projecten als De Broodbode in Zwolle en Apeldoorn.",
  },
  {
    question: "Kunnen jullie turnkey opleveren?",
    answer:
      "Ja. Van casco tot volledig gebruiksklaar: installaties, wanden, plafonds, vloeren, schilderwerk en interieur — allemaal onder één planning en één aanspreekpunt.",
  },
  {
    question: "Werken jullie buiten kantooruren?",
    answer:
      "Zeker. Bij horeca en retail werken we regelmatig 's nachts of in fasen, zodat de zaak open kan blijven of maar kort dicht hoeft. We stemmen dit vooraf duidelijk af.",
  },
  {
    question: "Werken jullie met vaste partners?",
    answer:
      "Ja, we werken met een vaste schil van betrouwbare onderaannemers en leveranciers waar we al jaren mee samenwerken. Dat betekent constante kwaliteit en korte lijnen, ook onder tijdsdruk.",
  },
  {
    question: "Kunnen jullie meerdere vestigingen tegelijk uitvoeren?",
    answer:
      "Ja. Bij projecten met meerdere locaties — zoals franchiseformules — plannen we de uitvoering per vestiging, met dezelfde uitstraling maar oog voor de technische situatie en planning van elk pand apart.",
  },
  {
    question: "Doen jullie ook onderhoud?",
    answer:
      "Ja, na oplevering blijven we beschikbaar voor onderhoud en kleine aanpassingen — ook in contractvorm, bijvoorbeeld voor vastgoedbeheerders met meerdere panden.",
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
    question: "Zijn jullie echt in Enschede gevestigd?",
    answer:
      "Ja — ons bedrijf zit aan de Heersenkampweg 5 in Enschede. Vanaf daar werken we in de hele stad, van Twekkelerveld tot Glanerbrug, en in de omliggende gemeenten.",
  },
  {
    question: "Heb ik een vergunning nodig voor mijn verbouwing in Enschede?",
    answer:
      "Dat hangt van het plan af. Veel aanbouwen aan het achtererf zijn vergunningvrij, maar bij een dakopbouw, wijziging van de voorgevel of een monument gelden regels van de gemeente Enschede. Wij toetsen dit standaard in het voortraject en verzorgen waar nodig de aanvraag.",
  },
  {
    question: "Wat kost een aannemer in Enschede per uur of per project?",
    answer:
      "Wij werken niet met losse uurtjes maar met een vaste projectprijs: je weet vooraf precies waar je aan toe bent. Na een kennismaking en opname op locatie ontvang je een heldere offerte zonder verrassingen achteraf.",
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
];

export const faqBouwbedrijfEnschede: Faq[] = [
  {
    question: "Wat voor soort bouwbedrijf is MTB Bouw?",
    answer:
      "MTB Bouw is een allround bouwbedrijf uit Enschede met vier specialismen onder één dak: Wonen & Verbouwen (particulier), Afbouwstudio (zakelijke afbouw), Kozijnen (via ons eigen label De Kozijnstudio) en Prefab Bouwen.",
  },
  {
    question: "Bouwen jullie voor particulieren én bedrijven?",
    answer:
      "Ja. Particulieren helpen we met verbouw, renovatie, aanbouw en nieuwbouw; bedrijven met de complete afbouw van kantoren, winkels en horeca — van casco tot turn-key.",
  },
  {
    question: "Is MTB Bouw een erkend leerbedrijf?",
    answer:
      "Ja, MTB Bouw B.V. is een door SBB erkend leerbedrijf (ID 100812726). We leiden zelf jonge vakmensen op — zo borgen we vakmanschap voor de lange termijn.",
  },
  {
    question: "Hoe groot is jullie team?",
    answer:
      "We werken met een compact kernteam van uitvoerders, timmermannen en werkvoorbereiding, aangevuld met vaste regionale partners. Klein genoeg voor korte lijnen, groot genoeg voor complete projecten.",
  },
  {
    question: "Geven jullie garantie op het werk?",
    answer:
      "Ja, op ons werk zit garantie en ook ná de oplevering blijven we bereikbaar voor nazorg. De precieze voorwaarden staan in de offerte, zodat alles vooraf duidelijk is.",
  },
  {
    question: "Hoe vraag ik een offerte aan?",
    answer:
      "Bel 053 206 50 71, app ons of vul het contactformulier in. We plannen een vrijblijvende kennismaking, komen langs voor een opname en je ontvangt een offerte met vaste prijs.",
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
      "Nee. We werken met een vaste projectprijs waarin alles is meegenomen — geen aparte voorrijkosten of verrassingen achteraf.",
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
      "Na de kennismaking en opname op locatie ontvang je binnen enkele werkdagen een heldere offerte met vaste prijs en realistische planning.",
  },
];

export const faqKantoorVerbouwen: Faq[] = [
  {
    question: "Wat kost een kantoorverbouwing per m²?",
    answer:
      "Dat hangt sterk af van het startpunt en het afwerkingsniveau. Gangbare marktindicaties (2026) lopen van zo'n €150–400 per m² voor een opknapbeurt tot €600–1.500 per m² voor een complete casco-afbouw. Na een intake met onze inventarisatie-app ontvang je binnen vijf werkdagen een vaste prijs voor jouw pand.",
  },
  {
    question: "Kunnen jullie verbouwen terwijl ons kantoor in gebruik blijft?",
    answer:
      "Ja. We faseren de werkzaamheden, werken desgewenst 's avonds of in het weekend en zorgen dat werkplekken bereikbaar blijven. Dat hebben we ook gedaan bij horecazaken die maar enkele dagen dicht konden.",
  },
  {
    question: "Wij huren casco kantoorruimte — regelen jullie de complete afbouw?",
    answer:
      "Ja, dat is precies ons specialisme: van casco naar turn-key. Metal stud-wanden, systeemplafonds, vloeren, verlichting, pantry en sanitair — één team, één planning, één vaste prijs.",
  },
  {
    question: "Hoe lang duurt een kantoorverbouwing?",
    answer:
      "Een gemiddelde kantoorafbouw duurt enkele weken tot een paar maanden, afhankelijk van omvang en installatiewerk. In de offerte staat een realistische planning — en die bewaken we wekelijks met een update.",
  },
  {
    question: "Werken jullie ook buiten Enschede en Twente?",
    answer:
      "Ja. Voor zakelijke projecten werken we in heel Oost-Nederland — recent bijvoorbeeld in Zwolle en Apeldoorn (De Broodbode). Deventer, Apeldoorn en Zwolle horen tot ons vaste werkgebied voor kantoorafbouw.",
  },
  {
    question: "Denken jullie mee over indeling en akoestiek?",
    answer:
      "Zeker. Tijdens de intake inventariseren we per wand, vloer en plafond wat er nodig is — inclusief akoestiek, licht en installaties. Waar nodig schakelen we onze vaste partners voor interieurontwerp in.",
  },
  {
    question: "Krijgen we één aanspreekpunt?",
    answer:
      "Ja: Mathijs of Robbert is jouw vaste contact van intake tot oplevering, met een wekelijkse voortgangsupdate. Geen onderaannemers-circus.",
  },
];

/* ----------------------- Afbouwstudio-sectorpagina's (fase 2 strategie) ------------ */

export const faqBedrijfspandVerbouwen: Faq[] = [
  {
    question: "Wat kost het verbouwen van een bedrijfspand?",
    answer:
      "Dat hangt af van startpunt en scope: een opknapbeurt begint rond €150–400 per m², een complete afbouw van casco tot turn-key loopt tot €600–1.500 per m² (marktindicatie 2026, excl. btw). Na een intake met onze inventarisatie-app ontvang je binnen vijf werkdagen een vaste prijs.",
  },
  {
    question: "Kan de verbouwing terwijl ons bedrijf doordraait?",
    answer:
      "Ja. We faseren de werkzaamheden per zone en werken waar nodig 's avonds, 's nachts of in het weekend — zo blijft je bedrijfsvoering doorlopen.",
  },
  {
    question: "Kunnen jullie een bedrijfshal ombouwen tot kantoor?",
    answer:
      "Ja — inpandige kantoren in bedrijfshallen zijn een specialiteit: geïsoleerde wanden (metal stud of HSB via ons Prefab-label), systeemplafonds, verlichting en klimaat, strak ingepast in de bestaande hal.",
  },
  {
    question: "Regelen jullie ook de installaties?",
    answer:
      "Ja, elektra, data, verlichting en klimaat coördineren wij met onze vaste installatiepartners — één planning, één aanspreekpunt.",
  },
  {
    question: "In welke regio verbouwen jullie bedrijfspanden?",
    answer:
      "In Enschede en heel Twente, en voor grotere projecten in heel Oost-Nederland — waaronder Deventer, Apeldoorn en Zwolle.",
  },
];

export const faqHorecaVerbouwen: Faq[] = [
  {
    question: "Hoe lang moet mijn zaak dicht tijdens een horecaverbouwing?",
    answer:
      "Zo kort mogelijk. We rekenen in de planning terug vanaf jouw (her)openingsdatum en benutten rustige periodes: de complete transformatie van Broodbode Apeldoorn voerden we in circa 7 weken uit tijdens de zomervakantie.",
  },
  {
    question: "Wat kost een horecaverbouwing?",
    answer:
      "Sterk afhankelijk van casco of bestaand pand en het afwerkingsniveau — van een restyling tot een complete afbouw met keuken, bar en sanitair. Na een intake op locatie ontvang je binnen vijf werkdagen een vaste prijs, zodat je jouw businesscase rond kunt maken.",
  },
  {
    question: "Bouwen jullie ook de bar en het keukenblok?",
    answer:
      "Ja — maatwerk counters, bars en keukenblok-installaties horen bij onze horeca-afbouw, net als tegelwerk, akoestische plafonds en verlichtingsplannen. Zie de Broodbode-cases in Zwolle en Apeldoorn.",
  },
  {
    question: "Denken jullie mee met de brandveiligheid en vergunningen?",
    answer:
      "Ja. Horeca stelt eisen aan vluchtwegen, ventilatie en brandwerendheid; wij bouwen conform en stemmen waar nodig af met de gemeente en de brandweer.",
  },
  {
    question: "Werken jullie ook buiten Twente?",
    answer:
      "Ja — onze recentste horecaprojecten (De Broodbode) staan in Zwolle en Apeldoorn. Voor horeca werken we in heel Oost-Nederland.",
  },
];

export const faqWinkelVerbouwen: Faq[] = [
  {
    question: "Halen jullie mijn openingsdatum?",
    answer:
      "Daar plannen we op. Bij retail rekenen we terug vanaf de openingsdatum en zetten we waar nodig avond- en weekendploegen in. Geen vertraging, wel resultaat.",
  },
  {
    question: "Werken jullie samen met onze retail-architect of formulebeheerder?",
    answer:
      "Ja, dat doen we vaak: wij vertalen het winkelconcept of merkboek naar de bouwkundige uitvoering — van vloer tot plafond en van pui tot magazijn.",
  },
  {
    question: "Wat kost een winkelverbouwing?",
    answer:
      "Van een restyling tot complete casco-afbouw: de bandbreedte is groot. Als indicatie (2026): grondige renovatie vanaf €300–600 per m², complete afbouw tot €600–1.500 per m² excl. btw. Je ontvangt altijd een vaste prijs vooraf.",
  },
  {
    question: "Kan de winkel (deels) open blijven tijdens de verbouwing?",
    answer:
      "Vaak wel: we faseren per zone en schermen het werkgebied netjes af. Volledig dicht? Dan maken we de sluitingsperiode zo kort mogelijk.",
  },
  {
    question: "Doen jullie ook meerdere vestigingen volgens één formule?",
    answer:
      "Ja — bij De Broodbode bouwden we twee locaties (Zwolle en Apeldoorn) met één signatuur. Eén team dat je formule kent, scheelt tijd en bewaakt de consistentie.",
  },
];

/* ----------------------- Fase 3: kantoor-stadspagina's ----------------------------- */

export const faqKantoorDeventer: Faq[] = [
  {
    question: "Werken jullie echt in Deventer, of alleen in Twente?",
    answer:
      "We werken in heel Oost-Nederland. Deventer ligt op een klein uur van onze werkplaats in Enschede; voor zakelijke afbouwprojecten plannen we onze teams per project op locatie — net als bij onze horecaprojecten in Zwolle en Apeldoorn.",
  },
  {
    question: "Wat kost een kantoorverbouwing in Deventer?",
    answer:
      "Dezelfde marktindicaties als elders in Oost-Nederland (2026, excl. btw): opknapbeurt €150–400 per m², renovatie €300–600 per m², complete casco-afbouw €600–1.500 per m². Als Twents bedrijf rekenen we doorgaans scherpere tarieven dan Randstad-partijen.",
  },
  {
    question: "Kunnen jullie gefaseerd verbouwen zodat ons kantoor in Deventer open blijft?",
    answer:
      "Ja — we faseren per zone en werken desgewenst 's avonds of in het weekend, zodat je team gewoon kan doorwerken.",
  },
  {
    question: "Hoe snel ligt er een offerte?",
    answer:
      "We komen binnen 7 dagen naar Deventer voor een intake met onze inventarisatie-app; binnen 5 werkdagen daarna ligt er een vaste prijs.",
  },
];

export const faqKantoorApeldoorn: Faq[] = [
  {
    question: "Hebben jullie eerder in Apeldoorn gewerkt?",
    answer:
      "Ja — in het centrum van Apeldoorn transformeerden we het verouderde pand van lunchroom De Broodbode volledig tot huiskamer-lunchroom: herindeling, nieuwe elektra en 180 m² tegelwerk, in circa 7 weken tijdens de zomervakantie. Diezelfde strakke planning passen we toe bij kantoorverbouwingen.",
  },
  {
    question: "Wat kost een kantoorverbouwing in Apeldoorn?",
    answer:
      "Marktindicaties 2026 (excl. btw): opknapbeurt €150–400 per m², renovatie €300–600 per m², complete casco-afbouw €600–1.500 per m². Na één intake ontvang je binnen vijf werkdagen een vaste prijs voor jouw pand.",
  },
  {
    question: "Is de reisafstand vanuit Enschede geen probleem?",
    answer:
      "Nee. Onze teams werken projectmatig op locatie — De Broodbode in Apeldoorn transformeerden we volledig in circa 7 weken, strak op planning. Je merkt er niets van in planning of prijs.",
  },
  {
    question: "Regelen jullie ook de installaties en het klimaat?",
    answer:
      "Ja, elektra, data, verlichting en klimaat coördineren we met onze vaste installatiepartners — één planning, één aanspreekpunt.",
  },
];

export const faqKantoorZwolle: Faq[] = [
  {
    question: "Wat hebben jullie eerder in Zwolle gebouwd?",
    answer:
      "In de wijk Wezenlanden bouwden we een leeg casco-pand in 7 weken om tot de complete lunchroom van De Broodbode — inclusief counter, keuken, sanitair en akoestisch plafond. Exact het casco-naar-turn-key-traject dat we ook voor kantoren uitvoeren.",
  },
  {
    question: "Wat kost een kantoorverbouwing in Zwolle?",
    answer:
      "Marktindicaties 2026 (excl. btw): opknapbeurt €150–400 per m², renovatie €300–600 per m², complete casco-afbouw €600–1.500 per m². Als Twents bedrijf rekenen we doorgaans gunstiger dan Randstad-partijen die in Zwolle actief zijn.",
  },
  {
    question: "Kunnen jullie casco kantoorruimte in Zwolle volledig afbouwen?",
    answer:
      "Ja — dat is ons specialisme: metal stud-wanden, systeemplafonds, vloeren, installaties, pantry en sanitair, met één team en een vaste prijs.",
  },
  {
    question: "Hoe verloopt de intake op afstand?",
    answer:
      "We komen binnen 7 dagen naar Zwolle en leggen met onze app elke wand, vloer en plafond vast. Binnen 5 werkdagen ligt er een vaste offerte.",
  },
];

/* ----------------------- Fase 3: productpagina's afbouw ---------------------------- */

export const faqMetalStud: Faq[] = [
  {
    question: "Wat kost een metal stud-wand?",
    answer:
      "Als marktindicatie (2026): een standaard metal stud-scheidingswand kost circa €70–120 per m² wandoppervlak inclusief afwerking; geluidwerende of beglaasde varianten liggen hoger. In de offerte krijg je een vaste prijs per wand.",
  },
  {
    question: "Hoe snel staat een metal stud-wand?",
    answer:
      "Snel: metal stud is licht, droog bouwen — geen metselwerk, nauwelijks droogtijd. Een kantoorindeling van meerdere wanden staat vaak binnen enkele dagen, inclusief afwerking.",
  },
  {
    question: "Zijn metal stud-wanden geluiddicht te maken?",
    answer:
      "Ja. Met dubbele beplating, minerale wol en akoestische profielen halen we geluidsisolatie die geschikt is voor vergaderruimtes en spreekkamers.",
  },
  {
    question: "Kunnen er glaswanden of deuren in?",
    answer:
      "Ja — glasstroken, volledige glaswanden en elk type deur integreren we in het wandsysteem. Zo blijft het kantoor licht en open.",
  },
  {
    question: "Verplaatsbaar bij een nieuwe indeling later?",
    answer:
      "Metal stud is relatief eenvoudig aan te passen of te verwijderen — veel voordeliger dan gemetselde wanden bij een toekomstige herindeling.",
  },
];

export const faqSysteemplafonds: Faq[] = [
  {
    question: "Wat kost een systeemplafond?",
    answer:
      "Als marktindicatie (2026): een standaard systeemplafond kost circa €40–80 per m²; inclusief LED-verlichting reken je op €65–120 per m². Akoestische of design-panelen liggen hoger. Je ontvangt altijd een vaste prijs vooraf.",
  },
  {
    question: "Wat is het voordeel van een systeemplafond in een kantoor?",
    answer:
      "Alle techniek (verlichting, klimaat, data) blijft bereikbaar boven de panelen, de akoestiek verbetert direct en beschadigde panelen wissel je los om.",
  },
  {
    question: "Helpt een systeemplafond echt tegen galm?",
    answer:
      "Ja — akoestische plafondpanelen zijn de snelste manier om spraakverstaanbaarheid in kantoren en horeca te verbeteren. We adviseren per ruimte de juiste absorptiewaarde.",
  },
  {
    question: "Kunnen jullie ook verlichting en klimaat meenemen?",
    answer:
      "Ja, dat is juist het moment: LED-panelen, spots, ventilatie en klimaat integreren we in één keer in het plafondplan, samen met onze installatiepartners.",
  },
  {
    question: "Hoe snel is een systeemplafond geplaatst?",
    answer:
      "Een gemiddelde kantoorvloer is in enkele dagen voorzien — vaak gecombineerd met de metal stud-wanden in dezelfde planning.",
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
    question: "Werken jullie vaker in Oldenzaal?",
    answer:
      "Ja, Oldenzaal hoort bij ons vaste werkgebied — vanaf onze werkplaats in Enschede zijn we er binnen een kwartier.",
  },
  {
    question: "Hebben jullie ervaring met oudere woningen, zoals jaren-30-huizen?",
    answer:
      "Zeker. Bij karakteristieke woningen zoals in de oudere wijken van Oldenzaal draait het om verbouwen mét behoud van detail — profileringen, metselwerk en kapvormen nemen we mee in het plan.",
  },
  {
    question: "Rekenen jullie voorrijkosten naar Oldenzaal?",
    answer:
      "Nee — we werken met een vaste projectprijs waar alles in zit.",
  },
  {
    question: "Voor welke klussen kan ik jullie in Oldenzaal inschakelen?",
    answer:
      "Renovatie en verbouw, aanbouwen en uitbouwen, kozijnen (via De Kozijnstudio) en prefab bouwen — hetzelfde aanbod als in Enschede.",
  },
];

export const faqAannemerBorne: Faq[] = [
  {
    question: "Zijn jullie snel ter plaatse in Borne?",
    answer:
      "Ja — Borne ligt tussen Hengelo en Almelo, zo'n 20 minuten van onze werkplaats in Enschede. We hebben er ook al gebouwd: de bedrijfshal in Borne staat in ons portfolio.",
  },
  {
    question: "Doen jullie in Borne ook zakelijke projecten?",
    answer:
      "Ja, zowel woningen als bedrijfspanden — de afbouw van een bedrijfshal in Borne is een van onze recente projecten.",
  },
  {
    question: "Rekenen jullie voorrijkosten naar Borne?",
    answer:
      "Nee — alles zit in de vaste projectprijs.",
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
      "Nee — we werken met een vaste projectprijs waar alles in zit.",
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
      "Nee — alles zit in de vaste projectprijs.",
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

/* ----------------------- Kantoor-stadspagina's Twente ------------------------------ */

export const faqKantoorEnschede: Faq[] = [
  {
    question: "Hoe snel kunnen jullie bij ons kantoor in Enschede zijn?",
    answer:
      "Snel — Enschede is onze thuisstad. Ons bedrijf zit aan de Heersenkampweg 5, dus voor een intake, een tussentijdse schouw of nazorg zijn we er meestal dezelfde week nog.",
  },
  {
    question: "Wat kost een kantoorverbouwing in Enschede?",
    answer:
      "Marktindicaties 2026 (excl. btw): opknapbeurt €150–400 per m², renovatie €300–600 per m², complete casco-afbouw €600–1.500 per m². Na één intake met onze inventarisatie-app ontvang je binnen vijf werkdagen een vaste prijs.",
  },
  {
    question: "Kunnen jullie verbouwen terwijl ons team in Enschede doorwerkt?",
    answer:
      "Ja — we faseren per zone en werken desgewenst 's avonds of in het weekend. Als lokaal bedrijf schakelen we bovendien snel als er tussentijds iets wijzigt.",
  },
  {
    question: "Doen jullie ook kleinere kantooraanpassingen in Enschede?",
    answer:
      "Ja, van één extra vergaderruimte met metal stud en glas tot een complete herindeling — juist omdat we lokaal zitten, is klein werk goed te plannen.",
  },
];

export const faqKantoorHengelo: Faq[] = [
  {
    question: "Werken jullie veel in Hengelo?",
    answer:
      "Ja — Hengelo is onze directe buurstad, op een kwartier van onze werkplaats in Enschede. Voor kantoren en bedrijfspanden in Hengelo plannen we intakes doorgaans binnen een week.",
  },
  {
    question: "Wat kost een kantoorverbouwing in Hengelo?",
    answer:
      "Marktindicaties 2026 (excl. btw): opknapbeurt €150–400 per m², renovatie €300–600 per m², complete casco-afbouw €600–1.500 per m². Je ontvangt binnen vijf werkdagen na de intake een vaste prijs.",
  },
  {
    question: "Kunnen jullie een bedrijfspand in Hengelo combineren met kantoorafbouw?",
    answer:
      "Ja — veel Hengelose panden combineren hal en kantoor. Wij bouwen beide: de hal via onze bedrijfspand-aanpak, het kantoor met metal stud, systeemplafonds en installaties in één planning.",
  },
  {
    question: "Blijft ons kantoor bereikbaar tijdens de verbouwing?",
    answer:
      "Ja, we faseren per zone en werken waar nodig buiten kantoortijden — je team werkt gewoon door.",
  },
];

export const faqKantoorAlmelo: Faq[] = [
  {
    question: "Hoort Almelo bij jullie werkgebied?",
    answer:
      "Ja — Almelo ligt op zo'n halfuur van onze werkplaats in Enschede en hoort bij ons vaste Twentse werkgebied. Intake binnen een week is de norm.",
  },
  {
    question: "Wat kost een kantoorverbouwing in Almelo?",
    answer:
      "Marktindicaties 2026 (excl. btw): opknapbeurt €150–400 per m², renovatie €300–600 per m², complete casco-afbouw €600–1.500 per m². Na de intake ligt er binnen vijf werkdagen een vaste prijs.",
  },
  {
    question: "Kunnen jullie casco kantoorruimte in Almelo afbouwen?",
    answer:
      "Ja — van casco naar turn-key is ons specialisme: metal stud-wanden, systeemplafonds, vloeren, installaties, pantry en sanitair met één team en één vaste prijs.",
  },
  {
    question: "Werken jullie in Almelo ook 's avonds of in het weekend?",
    answer:
      "Als dat nodig is om je bedrijfsvoering door te laten lopen: ja. We plannen de werkzaamheden rond jouw openingstijden.",
  },
];
