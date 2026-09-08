/**
 * Haalt de "Veelgestelde vragen"-sectie uit een gerenderd artikel en zet die
 * om naar FAQPage-structured-data.
 *
 * Waarom uit de HTML en niet uit frontmatter: de vragen staan al in de
 * artikeltekst. Ze daar weghalen en dupliceren in frontmatter levert twee
 * bronnen op die uit elkaar gaan lopen. Zo krijgt elk artikel dat een
 * FAQ-sectie heeft automatisch schema — ook nieuwe.
 */

export type FaqItem = { question: string; answer: string };

/** Verwijdert HTML-tags en zet entities terug naar tekst. */
function toPlainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractFaq(body: string): FaqItem[] {
  // Begin bij de FAQ-kop; alles daarvoor is gewone artikeltekst.
  const start = body.search(/<h2[^>]*>\s*(veelgestelde vragen|faq)\s*<\/h2>/i);
  if (start === -1) return [];

  // Eindig bij de volgende h2 — de FAQ loopt niet door in de volgende sectie.
  const rest = body.slice(start);
  const nextH2 = rest.slice(1).search(/<h2[^>]*>/i);
  const section = nextH2 === -1 ? rest : rest.slice(0, nextH2 + 1);

  const items: FaqItem[] = [];
  // Elke h3 is een vraag; alles tot de volgende h3 is het antwoord.
  const re = /<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3[^>]*>|$)/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(section)) !== null) {
    const question = toPlainText(m[1]);
    const answer = toPlainText(m[2]);
    // Google verwerpt lege of losse vraag/antwoord-paren.
    if (question && answer) items.push({ question, answer });
  }
  return items;
}
