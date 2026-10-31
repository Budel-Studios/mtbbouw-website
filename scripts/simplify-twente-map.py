"""Maakt de Twente-kaartdata lichter: wegsegmenten aan elkaar plakken en
Douglas-Peucker-vereenvoudiging. Leest het Lovable-bestand, schrijft TS."""
import json, re, sys, math

src, out = sys.argv[1], sys.argv[2]
s = open(src).read()
j = json.loads(s[s.index("= {") + 2 :].rstrip().rstrip(";"))

def parse(d):
    lines = []
    for part in re.findall(r"M[^M]*", d):
        nums = list(map(float, re.findall(r"-?\d+(?:\.\d+)?", part)))
        pts = [(nums[i], nums[i + 1]) for i in range(0, len(nums), 2)]
        if len(pts) >= 2:
            lines.append(pts)
    return lines

def key(p):
    return (round(p[0], 1), round(p[1], 1))

def merge(lines):
    # Greedy aan elkaar plakken op gedeelde eindpunten.
    lines = [list(l) for l in lines]
    changed = True
    while changed:
        changed = False
        starts = {}
        for i, l in enumerate(lines):
            starts.setdefault(key(l[0]), []).append(i)
        used = set()
        merged = []
        for i, l in enumerate(lines):
            if i in used:
                continue
            used.add(i)
            cur = l
            while True:
                cands = [k for k in starts.get(key(cur[-1]), []) if k not in used]
                if not cands:
                    break
                k = cands[0]
                used.add(k)
                cur = cur + lines[k][1:]
                changed = True
            merged.append(cur)
        lines = merged
    return lines

def dp(pts, eps):
    if len(pts) < 3:
        return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    dx, dy = x2 - x1, y2 - y1
    norm = math.hypot(dx, dy)
    best, idx = 0.0, 0
    for i in range(1, len(pts) - 1):
        px, py = pts[i]
        d = abs(dy * px - dx * py + x2 * y1 - y2 * x1) / norm if norm else math.hypot(px - x1, py - y1)
        if d > best:
            best, idx = d, i
    if best > eps:
        return dp(pts[: idx + 1], eps)[:-1] + dp(pts[idx:], eps)
    return [pts[0], pts[-1]]

def fmt(n):
    t = f"{n:.1f}"
    return t[:-2] if t.endswith(".0") else t

def to_d(lines):
    out = []
    for l in lines:
        out.append("M" + fmt(l[0][0]) + " " + fmt(l[0][1]) + "L" + " ".join(fmt(x) + " " + fmt(y) for x, y in l[1:]))
    return "".join(out)

for k, eps in (("roadsMajor", 0.6), ("roadsMinor", 0.8)):
    before = len(j[k])
    lines = merge(parse(j[k]))
    lines = [dp(l, eps) for l in lines]
    lines = [l for l in lines if math.hypot(l[-1][0] - l[0][0], l[-1][1] - l[0][1]) > 0.8 or len(l) > 2]
    j[k] = to_d(lines)
    print(k, before, "->", len(j[k]), "paths", len(lines))

header = s[: s.index("export const twenteMap")]
header = header.replace("// Do not edit by hand.", "// Do not edit by hand. Wegen vereenvoudigd (aaneengeplakt + Douglas-Peucker)\n// met scripts/simplify_map.py om de pagina licht te houden.")
open(out, "w").write(header + "export const twenteMap: TwenteMapData = " + json.dumps(j, separators=(",", ":")) + ";\n")
print("total", len(open(out).read()))
