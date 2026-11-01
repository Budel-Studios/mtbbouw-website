#!/usr/bin/env python3
"""
Wekelijkse SEO-controle van mtbbouw.com. Loopt alle sitemap-URL's na en
meldt alleen wat afwijkt. Gebruik:

    python3 scripts/seo-check/check.py            # live site
    python3 scripts/seo-check/check.py http://localhost:3000

Controles: status per pagina, canonical, noindex, titel- en beschrijvings-
lengte, één H1, geldig JSON-LD, redirects van oude URL's (één stap, geen
keten), verboden formuleringen uit docs/feitenlijst.md, plaatsnaam op elke
pagina, en links naar pagina's die niet bestaan. Geen externe diensten.
"""
import html as H
import json
import re
import sys
import urllib.error
import urllib.request

BASE = (sys.argv[1] if len(sys.argv) > 1 else "https://mtbbouw.com").rstrip("/")
UA = {"User-Agent": "Mozilla/5.0 (compatible; MTB-seo-check/1.0)"}

# Oude URL's die permanent moeten doorsturen (één stap).
REDIRECTS = {
    "/afbouwstudio": "/zakelijk",
    "/afbouwstudio/horeca-verbouwen": "/zakelijk/horeca-verbouwen",
    "/afbouwstudio/kantoor-verbouwen": "/zakelijk/bedrijfspand-verbouwen",
    "/afbouwstudio/kantoor-verbouwen-zwolle": "/zakelijk/bedrijfspand-verbouwen",
    "/voor-bedrijven": "/zakelijk",
    "/kennisbank/kantoor-verbouwen-kosten-2026": "/zakelijk/bedrijfspand-verbouwen",
    "/projecten/bedrijfshal-borne": "/projecten",
    "/bouwbedrijf-enschede": "/aannemer-enschede",
    "/werken-bij": "/werkgenoeg",
}

# Formuleringen die niet (meer) op de site horen; zie docs/feitenlijst.md.
BANNED = [
    (r"\bvaste (prijs|prijzen|aanneemsom|projectprijs)\b(?! of een richtprijs)", "vaste prijs"),
    (r"(offerte|intake)[^.]{0,40}\bbinnen (\d+|vijf|zeven) (werk)?dagen\b|\bbinnen (\d+|vijf|zeven) (werk)?dagen\b[^.]{0,40}(offerte|intake)", "termijn offerte/intake"),
    (r"\b\d+ jaar (plaatsings)?garantie\b", "garantiejaren"),
    (r"(kantoor|bedrijfspand|bedrijfshal|winkel|horeca|lunchroom|metal stud|systeemplafond)[^.]{0,80}€\s?\d[\d.]*\s?(–|-|tot)\s?€?\d[\d.]*\s?(per|/)\s?m²", "m²-prijs (panden)"),
    (r"\bAfbouwstudio\b", "oud label Afbouwstudio"),
    (r"\bPandScan\b", "PandScan"),
    (r"\bbestemmingsplan\b", "bestemmingsplan (nu omgevingsplan)"),
    (r"\bRandstad\b", "Randstad-vergelijking"),
    (r"(?<![Bb]ijna )\benergieneutraal \(BENG\)", "BENG zonder 'bijna'"),
    (r"\bvergunningvrij[^.]{0,40}\b30 ?m²", "vergunningvrij tot 30 m²"),
    (r"\b70\s?(–|-|tot)\s?90\s?%", "70-90% waardestijging"),
]
PLACES = ["Enschede", "Hengelo", "Almelo", "Oldenzaal", "Twente"]
# Bewuste uitzonderingen: pagina → label dat daar wél mag.
ALLOWED = {"/projecten/overkapping-paardenstal-enschede": {"bestemmingsplan (nu omgevingsplan)"}}  # project onder de oude wet
SKIP_PLACES = {"/privacy-policy"}


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


opener = urllib.request.build_opener(NoRedirect)


def fetch(path):
    req = urllib.request.Request(BASE + path, headers=UA)
    try:
        with opener.open(req, timeout=60) as r:
            return r.status, r.read().decode("utf-8", "replace"), r.headers.get("Location")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", "replace"), e.headers.get("Location")
    except Exception as e:  # noqa: BLE001
        return 0, "", str(e)


issues = []


def issue(page, what):
    issues.append((page, what))


st, sm, _ = fetch("/sitemap.xml")
if st != 200:
    print(f"sitemap.xml geeft {st}; stop.")
    sys.exit(1)
urls = [u.replace(BASE, "").replace("https://mtbbouw.com", "") or "/" for u in re.findall(r"<loc>([^<]+)</loc>", sm)]
pages = {}
for u in urls:
    st, t, loc = fetch(u)
    if st != 200:
        issue(u, f"status {st}")
        continue
    body = re.sub(r"<script.*?</script>|<style.*?</style>", "", t, flags=re.S)
    main = re.search(r"<main.*?</main>", body, re.S)
    text = re.sub(r"\s+", " ", H.unescape(re.sub(r"<[^>]+>", " ", (main.group(0) if main else body))))
    title = H.unescape((re.search(r"<title>(.*?)</title>", t, re.S) or [None, ""])[1]).strip()
    desc = H.unescape((re.search(r'<meta name="description" content="([^"]*)"', t) or [None, ""])[1])
    canon = (re.search(r'<link rel="canonical" href="([^"]+)"', t) or [None, ""])[1]
    robots = (re.search(r'<meta name="robots" content="([^"]+)"', t) or [None, ""])[1]
    h1 = re.findall(r"<h1[^>]*>", body)
    if not title:
        issue(u, "geen titel")
    elif len(title) > 60:
        issue(u, f"titel {len(title)} tekens")
    if not desc:
        issue(u, "geen beschrijving")
    elif len(desc) > 160 or len(desc) < 70:
        issue(u, f"beschrijving {len(desc)} tekens")
    if desc.endswith("…"):
        issue(u, "beschrijving afgebroken")
    if canon.replace("https://mtbbouw.com", "") != (u if u != "/" else "") and canon != "https://mtbbouw.com" + (u if u != "/" else ""):
        issue(u, f"canonical {canon}")
    if "noindex" in robots:
        issue(u, "noindex op een sitemap-pagina")
    if len(h1) != 1:
        issue(u, f"{len(h1)} H1's")
    for m in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', t, re.S):
        try:
            json.loads(m)
        except Exception:
            issue(u, "ongeldig JSON-LD")
    for pat, label in BANNED:
        if label in ALLOWED.get(u, set()):
            continue
        if re.search(pat, text):
            issue(u, f"formulering: {label}")
    if u not in SKIP_PLACES and not any(p in text for p in PLACES):
        issue(u, "geen plaatsnaam in de tekst")
    pages[u] = sorted(set(l for l in re.findall(r'href="(/[^"#?]*)"', body) if not l.startswith(("/_next", "/images", "/api"))))

# Interne links naar niet-bestaande pagina's.
known = set(urls) | {"/contact", "/mijn-blauwdruk"}
checked = {}
for u, links in pages.items():
    for l in links:
        if l in known:
            continue
        if l not in checked:
            checked[l] = fetch(l)[0]
        if checked[l] != 200:
            issue(u, f"link naar {l} geeft {checked[l]}")

# Redirects: één stap naar een pagina die 200 geeft.
for old, new in REDIRECTS.items():
    st, _, loc = fetch(old)
    target = (loc or "").replace(BASE, "").replace("https://mtbbouw.com", "")
    if st not in (301, 308) or target != new:
        issue(old, f"verwacht {new}, kreeg {st} {target}")
    else:
        st2, _, loc2 = fetch(new)
        if st2 != 200:
            issue(old, f"doel {new} geeft {st2}" + (f" (keten naar {loc2})" if loc2 else ""))

# www en http
for variant in ("http://mtbbouw.com/", "https://www.mtbbouw.com/"):
    if BASE == "https://mtbbouw.com":
        try:
            r = opener.open(urllib.request.Request(variant, headers=UA), timeout=30)
            st, loc = r.status, r.headers.get("Location")
        except urllib.error.HTTPError as e:
            st, loc = e.code, e.headers.get("Location")
        except Exception as e:  # noqa: BLE001
            st, loc = 0, str(e)[:60]
        if st not in (301, 308) or (loc or "").rstrip("/") != "https://mtbbouw.com":
            issue(variant, f"geen redirect naar https://mtbbouw.com ({st} {loc})")

print(f"{len(urls)} pagina's gecontroleerd op {BASE}")
if not issues:
    print("Geen afwijkingen.")
else:
    print(f"{len(issues)} afwijkingen:")
    for page, what in issues:
        print(f"  {page:48} {what}")
sys.exit(1 if issues else 0)
