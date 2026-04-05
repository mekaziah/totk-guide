import { useCallback, useEffect, useRef, useState } from "react";
import { Map, X, MapPin, Hash } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SHRINES } from "@/lib/data";

// ─── Coordinate system ───────────────────────────────────────────────────────
const MAP_W = 2200;
const MAP_H = 1600;

function parseCoords(c: string): { x: number; y: number } | null {
  const p = c.split(",").map((s) => parseFloat(s.trim()));
  if (p.length < 2 || isNaN(p[0]) || isNaN(p[1])) return null;
  return { x: p[0], y: p[1] };
}
function gameToSvg(gx: number, gy: number) {
  return {
    x: ((gx + 5600) / 10400) * MAP_W,
    y: ((3600 - gy) / 8200) * MAP_H,
  };
}

// ─── Static data ─────────────────────────────────────────────────────────────
const REGIONS = [
  { name: "Hebra",          color: "#1a3a5c", gx: -5200, gy:  3600, gw: 3600, gh: 3600 },
  { name: "Eldin",          color: "#3a1a0a", gx:   800, gy:  3400, gw: 3200, gh: 2800 },
  { name: "Akkala",         color: "#2a1a0a", gx:  2600, gy:  3800, gw: 2600, gh: 2200 },
  { name: "Lanayru",        color: "#0a2a3a", gx:  2000, gy:  -200, gw: 2600, gh: 2600 },
  { name: "Central Hyrule", color: "#0a2a14", gx: -1800, gy: -1400, gw: 4200, gh: 3200 },
  { name: "Gerudo",         color: "#2a1e08", gx: -5400, gy:  -800, gw: 2800, gh: 3200 },
  { name: "Necluda",        color: "#0a2a10", gx:   400, gy: -1600, gw: 4000, gh: 2400 },
  { name: "Faron",          color: "#0a2208", gx:  -800, gy: -3800, gw: 3200, gh: 2400 },
  { name: "Gerudo Desert",  color: "#2a1a04", gx: -5400, gy: -4000, gw: 3600, gh: 3200 },
  { name: "Hebra Mts",      color: "#122030", gx: -3000, gy:  1200, gw: 2000, gh: 2400 },
];

const LABELS = [
  { label: "AKKALA",          gx:  3800, gy:  2800 },
  { label: "ELDIN",           gx:  1600, gy:  2600 },
  { label: "LANAYRU",         gx:  3000, gy:   800 },
  { label: "CENTRAL HYRULE",  gx:  -200, gy:   400 },
  { label: "GERUDO",          gx: -4200, gy:  -400 },
  { label: "HEBRA",           gx: -3800, gy:  2400 },
  { label: "NECLUDA",         gx:  1800, gy: -1000 },
  { label: "FARON",           gx:   600, gy: -2800 },
];

const TYPE_COLOR: Record<string, string> = {
  Puzzle:   "#4fc3a1",
  Combat:   "#e05252",
  Blessing: "#d4a843",
};

// ─── Types ───────────────────────────────────────────────────────────────────
interface ShrineInfo {
  id: string; name: string; region: string;
  type: string; hint: string; coords: string;
  sx: number; sy: number; // SVG coords
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function InteractiveMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [scale, setScale] = useState(0.55);
  const [ready, setReady] = useState(false);
  const [selected, setSelected] = useState<ShrineInfo | null>(null);
  const [filter, setFilter] = useState<"All"|"Puzzle"|"Combat"|"Blessing">("All");

  // refs for pointer-capture drag
  const dragging    = useRef(false);
  const hasMoved    = useRef(false);
  const dragOrigin  = useRef({ cx: 0, cy: 0, tx: 0, ty: 0 });
  const txRef       = useRef(tx);
  const tyRef       = useRef(ty);
  const scaleRef    = useRef(scale);
  txRef.current = tx; tyRef.current = ty; scaleRef.current = scale;

  // Build shrine list
  const shrines: ShrineInfo[] = SHRINES.flatMap((s) => {
    const gc = parseCoords(s.coords);
    if (!gc) return [];
    const { x: sx, y: sy } = gameToSvg(gc.x, gc.y);
    if (sx <= 0 || sy <= 0 || sx >= MAP_W || sy >= MAP_H) return [];
    return [{ ...s, sx, sy }];
  });

  const visible = shrines.filter((s) => filter === "All" || s.type === filter);

  // Center map on world-center (0,0) once the container is measured
  useEffect(() => {
    const el = containerRef.current;
    if (!el || ready) return;
    const { width, height } = el.getBoundingClientRect();
    if (!width) return;
    const center = gameToSvg(0, 0);
    setTx(width  / 2 - center.x * 0.55);
    setTy(height / 2 - center.y * 0.55);
    setReady(true);
  });

  // ── Pointer drag ────────────────────────────────────────────────────────
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return;
    dragging.current   = true;
    hasMoved.current   = false;
    dragOrigin.current = { cx: e.clientX, cy: e.clientY, tx: txRef.current, ty: tyRef.current };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragOrigin.current.cx;
    const dy = e.clientY - dragOrigin.current.cy;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) hasMoved.current = true;
    setTx(dragOrigin.current.tx + dx);
    setTy(dragOrigin.current.ty + dy);
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!hasMoved.current) {
      // treat as click — find nearest shrine
      const rect = containerRef.current!.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const svgX = (cx - txRef.current)  / scaleRef.current;
      const svgY = (cy - tyRef.current)  / scaleRef.current;
      const HIT  = 16 / scaleRef.current;
      const found = visible.find((s) =>
        Math.hypot(s.sx - svgX, s.sy - svgY) < HIT
      );
      setSelected(found !== undefined ? found : null);
    }
    dragging.current = false;
  }, [visible]);

  // ── Scroll-to-zoom ──────────────────────────────────────────────────────
  const onWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const rect = containerRef.current!.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
    setScale((s) => {
      const ns = Math.min(4, Math.max(0.25, s * factor));
      setTx((x) => cx - (cx - x) * (ns / s));
      setTy((y) => cy - (cy - y) * (ns / s));
      return ns;
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [onWheel]);

  // ── Mini-guide text ──────────────────────────────────────────────────────
  const worldCenter = gameToSvg(0, 0);

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 3.5rem)" }}>

      {/* ── Top bar ──────────────────────────────────────────────────── */}
      <div className="shrink-0 px-4 md:px-6 pt-5 pb-3 border-b border-border bg-background">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Map className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground leading-tight">Hyrule Map</h1>
              <p className="text-xs text-muted-foreground">Drag to pan · Scroll to zoom · Click a shrine</p>
            </div>
          </div>

          {/* Filter chips */}
          <div className="flex gap-2 flex-wrap">
            {(["All","Puzzle","Combat","Blessing"] as const).map((f) => (
              <button
                key={f}
                onClick={() => { setFilter(f); setSelected(null); }}
                className="px-3 py-1 rounded-full text-xs font-semibold border transition-colors"
                style={{
                  backgroundColor: filter === f
                    ? (f === "All" ? "hsl(var(--primary))" : TYPE_COLOR[f])
                    : "transparent",
                  borderColor: filter === f
                    ? (f === "All" ? "hsl(var(--primary))" : TYPE_COLOR[f])
                    : "hsl(var(--border))",
                  color: filter === f ? "#0a1628" : "hsl(var(--muted-foreground))",
                }}
              >{f}</button>
            ))}
            <span className="px-2 py-1 text-xs text-muted-foreground self-center">
              {visible.length} shrines
            </span>
          </div>
        </div>
      </div>

      {/* ── Map canvas ───────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        <div
          ref={containerRef}
          className="flex-1 relative overflow-hidden"
          style={{ cursor: dragging.current ? "grabbing" : "grab", background: "#070f1c" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <svg
            width={MAP_W}
            height={MAP_H}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              transformOrigin: "0 0",
              transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
              userSelect: "none",
            }}
          >
            {/* Background */}
            <rect x={0} y={0} width={MAP_W} height={MAP_H} fill="#081220" />

            {/* Region zones */}
            {REGIONS.map((r, i) => {
              const tl = gameToSvg(r.gx,        r.gy + r.gh);
              const br = gameToSvg(r.gx + r.gw, r.gy);
              return (
                <rect key={i}
                  x={tl.x} y={tl.y}
                  width={br.x - tl.x} height={br.y - tl.y}
                  fill={r.color} opacity={0.9}
                />
              );
            })}

            {/* Grid lines */}
            {[...Array(11)].map((_, i) => (
              <line key={`v${i}`}
                x1={(i/10)*MAP_W} y1={0} x2={(i/10)*MAP_W} y2={MAP_H}
                stroke="#1e3a5f" strokeWidth={0.8} opacity={0.5}
              />
            ))}
            {[...Array(9)].map((_, i) => (
              <line key={`h${i}`}
                x1={0} y1={(i/8)*MAP_H} x2={MAP_W} y2={(i/8)*MAP_H}
                stroke="#1e3a5f" strokeWidth={0.8} opacity={0.5}
              />
            ))}

            {/* 0,0 crosshair */}
            <line x1={worldCenter.x-16} y1={worldCenter.y} x2={worldCenter.x+16} y2={worldCenter.y} stroke="#4fc3a1" strokeWidth={2} />
            <line x1={worldCenter.x} y1={worldCenter.y-16} x2={worldCenter.x} y2={worldCenter.y+16} stroke="#4fc3a1" strokeWidth={2} />
            <text x={worldCenter.x+8} y={worldCenter.y-8} fill="#4fc3a1" fontSize={11} opacity={0.8}>0,0</text>

            {/* Region labels */}
            {LABELS.map((l) => {
              const { x, y } = gameToSvg(l.gx, l.gy);
              return (
                <text key={l.label} x={x} y={y}
                  fill="#4fc3a1" fontSize={16} fontWeight="bold"
                  opacity={0.25} textAnchor="middle"
                >{l.label}</text>
              );
            })}

            {/* Shrine dots */}
            {visible.map((s) => {
              const color = TYPE_COLOR[s.type] ?? "#4fc3a1";
              const isSel = selected?.id === s.id;
              return (
                <g key={s.id} style={{ cursor: "pointer" }}>
                  {isSel && (
                    <circle cx={s.sx} cy={s.sy} r={22} fill={color} opacity={0.2} />
                  )}
                  <circle
                    cx={s.sx} cy={s.sy}
                    r={isSel ? 10 : 7}
                    fill={color}
                    stroke={isSel ? "#fff" : "none"}
                    strokeWidth={isSel ? 2 : 0}
                    opacity={isSel ? 1 : 0.85}
                  />
                  {isSel && (
                    <text x={s.sx} y={s.sy - 16}
                      fill={color} fontSize={11} textAnchor="middle" fontWeight="bold"
                      stroke="#081220" strokeWidth={3} paintOrder="stroke"
                    >
                      {s.name.replace(" Shrine", "")}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Zoom hint */}
          {ready && (
            <div className="absolute bottom-3 right-3 text-xs text-muted-foreground/50 select-none pointer-events-none">
              {Math.round(scale * 100)}%
            </div>
          )}
        </div>

        {/* ── Side panel ─────────────────────────────────────────────── */}
        {selected && (
          <div
            className="shrink-0 w-72 border-l border-border bg-card flex flex-col overflow-y-auto"
            style={{ borderTopColor: TYPE_COLOR[selected.type] ?? "transparent" }}
          >
            <div className="flex items-start justify-between gap-2 p-4 border-b border-border"
              style={{ borderTopWidth: 3, borderTopColor: TYPE_COLOR[selected.type] ?? "transparent" }}
            >
              <div>
                <p className="font-bold text-base text-foreground leading-snug">{selected.name}</p>
                <span
                  className="mt-1 inline-block px-2 py-0.5 rounded text-xs font-semibold"
                  style={{ backgroundColor: (TYPE_COLOR[selected.type] ?? "#4fc3a1") + "28",
                           color: TYPE_COLOR[selected.type] ?? "#4fc3a1" }}
                >{selected.type}</span>
              </div>
              <button onClick={() => setSelected(null)}
                className="text-muted-foreground hover:text-foreground mt-0.5 shrink-0">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-4 space-y-4 flex-1">
              <p className="text-sm font-medium" style={{ color: TYPE_COLOR[selected.type] ?? "#4fc3a1" }}>
                {selected.hint}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span>{selected.region}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                  <Hash className="h-3.5 w-3.5 shrink-0" />
                  <span>{selected.coords}</span>
                </div>
              </div>

              <div className="rounded-lg bg-muted/30 p-3 text-xs text-muted-foreground space-y-1">
                <p className="font-medium text-foreground text-sm">How to find it</p>
                <p>Open your in-game map, move the cursor to the coordinates shown above. Negative X is west, negative Y is south of Hyrule Castle.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Legend bar ───────────────────────────────────────────────── */}
      <div className="shrink-0 px-4 py-2 border-t border-border bg-background flex items-center gap-5 flex-wrap">
        {Object.entries(TYPE_COLOR).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-xs text-muted-foreground">{type}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full border border-primary/60 bg-transparent" />
          <span className="text-xs text-muted-foreground">Completed</span>
        </div>
        <span className="text-xs text-muted-foreground ml-auto">
          Click any dot • Scroll to zoom • Drag to pan
        </span>
      </div>
    </div>
  );
}
