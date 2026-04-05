import React, { useState } from "react";
import {
  LayoutChangeEvent,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Line, Rect, Text as SvgText } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import { SHRINES } from "@/lib/data";
import { TypeBadge } from "@/components/TypeBadge";
import { useTracker } from "@/context/TrackerContext";
import { Icon } from "@/components/Icon";

// ─── Map coordinate system ───────────────────────────────────────────────────
// Game world spans roughly x: -5600 → 4800, y: -4600 → 3600
// We map that to a 2200×400 rendered canvas (wide, scrollable horizontally)
// The background SVG uses viewBox to fill the canvas; Pressable shrine dots
// are absolutely-positioned using the same transform — no SVG touch events.

const MAP_W = 2200; // logical canvas width  (matches SVG width)
const MAP_H = 1600; // logical canvas height (SVG viewBox height)
const DOT = 14;     // shrine dot diameter in pixels
const HIT = 28;     // pressable hit-area diameter in pixels

function parseCoords(c: string): { x: number; y: number } | null {
  const p = c.split(",").map((s) => parseFloat(s.trim()));
  if (p.length < 2 || isNaN(p[0]) || isNaN(p[1])) return null;
  return { x: p[0], y: p[1] };
}

// Convert game coords → logical canvas pixels (MAP_W × MAP_H space)
function gameToCanvas(gx: number, gy: number) {
  return {
    x: ((gx + 5600) / 10400) * MAP_W,
    y: ((3600 - gy) / 8200)  * MAP_H,
  };
}

const REGIONS = [
  { name: "Hebra",         color: "#1a3a5c", gx: -5200, gy:  3600, gw: 3600, gh: 3600 },
  { name: "Eldin",         color: "#3a1a0a", gx:   800, gy:  3400, gw: 3200, gh: 2800 },
  { name: "Akkala",        color: "#2a1a0a", gx:  2600, gy:  3800, gw: 2600, gh: 2200 },
  { name: "Lanayru",       color: "#0a2a3a", gx:  2000, gy:  -200, gw: 2600, gh: 2600 },
  { name: "Central Hyrule",color: "#0a2a14", gx: -1800, gy: -1400, gw: 4200, gh: 3200 },
  { name: "Gerudo",        color: "#2a1e08", gx: -5400, gy:  -800, gw: 2800, gh: 3200 },
  { name: "Necluda",       color: "#0a2a10", gx:   400, gy: -1600, gw: 4000, gh: 2400 },
  { name: "Faron",         color: "#0a2208", gx:  -800, gy: -3800, gw: 3200, gh: 2400 },
  { name: "Gerudo Desert", color: "#2a1a04", gx: -5400, gy: -4000, gw: 3600, gh: 3200 },
  { name: "Hebra Mts",     color: "#122030", gx: -3000, gy:  1200, gw: 2000, gh: 2400 },
];

const LABELS = [
  { label: "AKKALA",         gx: 3800, gy:  2800 },
  { label: "ELDIN",          gx: 1600, gy:  2600 },
  { label: "LANAYRU",        gx: 3000, gy:   800 },
  { label: "CENTRAL HYRULE", gx: -200, gy:   400 },
  { label: "GERUDO",         gx:-4200, gy:  -400 },
  { label: "HEBRA",          gx:-3800, gy:  2400 },
  { label: "NECLUDA",        gx: 1800, gy: -1000 },
  { label: "FARON",          gx:  600, gy: -2800 },
];

const TYPE_COLOR: Record<string, string> = {
  Puzzle:   "#4fc3a1",
  Combat:   "#e05252",
  Blessing: "#d4a843",
};

interface ShrineInfo {
  id: string;
  name: string;
  region: string;
  type: string;
  hint: string;
  coords: string;
  cx: number; // canvas x (logical)
  cy: number; // canvas y (logical)
}

export default function MapScreen() {
  const colors  = useColors();
  const insets  = useSafeAreaInsets();
  const { isCompleted } = useTracker();

  const [selected, setSelected] = useState<ShrineInfo | null>(null);
  const [filter,   setFilter]   = useState<"All"|"Puzzle"|"Combat"|"Blessing">("All");
  const [canvasH,  setCanvasH]  = useState(380); // rendered height of the map container

  const topPad    = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : 0;

  // Scale factor: canvas height / logical height
  // We keep full MAP_W width (scroll horizontally), scale Y to fit the container
  const scaleY = canvasH / MAP_H;

  // Pre-compute shrine screen positions
  const shrines: ShrineInfo[] = SHRINES.flatMap((s) => {
    const gc = parseCoords(s.coords);
    if (!gc) return [];
    const { x: cx, y: cy } = gameToCanvas(gc.x, gc.y);
    if (cx <= 0 || cy <= 0 || cx >= MAP_W || cy >= MAP_H) return [];
    return [{ ...s, cx, cy }];
  });

  const visible = shrines.filter((s) => filter === "All" || s.type === filter);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

      {/* ── Header ─────────────────────────────────────────────────── */}
      <View style={[styles.header, {
        paddingTop: topPad + 12,
        backgroundColor: colors.background,
        borderBottomColor: colors.border,
      }]}>
        <Text style={[styles.title, { color: colors.sheikah }]}>Hyrule Map</Text>
        <View style={styles.filterRow}>
          {(["All","Puzzle","Combat","Blessing"] as const).map((f) => (
            <TouchableOpacity
              key={f}
              onPress={() => { setFilter(f); setSelected(null); }}
              style={[styles.chip, {
                backgroundColor: filter === f
                  ? (f === "All" ? colors.sheikah : TYPE_COLOR[f] ?? colors.sheikah)
                  : colors.muted,
                borderColor: filter === f
                  ? (f === "All" ? colors.sheikah : TYPE_COLOR[f] ?? colors.sheikah)
                  : colors.border,
              }]}
            >
              <Text style={[styles.chipLabel, {
                color: filter === f ? colors.primaryForeground : colors.mutedForeground,
              }]}>{f}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* ── Map ────────────────────────────────────────────────────── */}
      {/* Single horizontal ScrollView — no nesting, no gesture handler */}
      <ScrollView
        horizontal
        style={styles.mapScroll}
        contentContainerStyle={{ width: MAP_W }}
        showsHorizontalScrollIndicator={false}
        onLayout={(e: LayoutChangeEvent) => setCanvasH(e.nativeEvent.layout.height)}
      >
        {/* Background: pure SVG, zero touch events */}
        <Svg
          width={MAP_W}
          height={canvasH}
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          style={StyleSheet.absoluteFillObject}
          pointerEvents="none"
        >
          <Rect x={0} y={0} width={MAP_W} height={MAP_H} fill="#081220" />

          {REGIONS.map((r, i) => {
            const tl = gameToCanvas(r.gx,        r.gy + r.gh);
            const br = gameToCanvas(r.gx + r.gw, r.gy);
            return (
              <Rect key={i}
                x={tl.x} y={tl.y}
                width={br.x - tl.x} height={br.y - tl.y}
                fill={r.color} opacity={0.85}
              />
            );
          })}

          {[...Array(11)].map((_, i) => (
            <Line key={`v${i}`}
              x1={(i/10)*MAP_W} y1={0} x2={(i/10)*MAP_W} y2={MAP_H}
              stroke="#1e3a5f" strokeWidth={0.5} opacity={0.4}
            />
          ))}
          {[...Array(9)].map((_, i) => (
            <Line key={`h${i}`}
              x1={0} y1={(i/8)*MAP_H} x2={MAP_W} y2={(i/8)*MAP_H}
              stroke="#1e3a5f" strokeWidth={0.5} opacity={0.4}
            />
          ))}

          {LABELS.map((l) => {
            const { x, y } = gameToCanvas(l.gx, l.gy);
            return (
              <SvgText key={l.label} x={x} y={y}
                fill="#4fc3a1" fontSize={14} fontWeight="bold"
                opacity={0.3} textAnchor="middle"
              >{l.label}</SvgText>
            );
          })}
        </Svg>

        {/* Shrine dots — React Native Pressable, absolutely positioned */}
        {/* scaleY converts logical canvas Y → rendered pixels */}
        {visible.map((s) => {
          const done  = isCompleted("shrines", s.id);
          const color = TYPE_COLOR[s.type] ?? "#4fc3a1";
          const isSel = selected?.id === s.id;
          // rendered pixel position (x scale = 1:1, y scaled to canvasH)
          const px = s.cx;
          const py = s.cy * scaleY;
          return (
            <Pressable
              key={s.id}
              onPress={() => setSelected(isSel ? null : s)}
              style={{
                position: "absolute",
                left: px - HIT / 2,
                top:  py - HIT / 2,
                width:  HIT,
                height: HIT,
                alignItems: "center",
                justifyContent: "center",
              }}
              hitSlop={4}
            >
              {/* glow ring when selected */}
              {isSel && (
                <View style={[styles.glow, {
                  width: DOT + 12, height: DOT + 12,
                  borderRadius: (DOT + 12) / 2,
                  backgroundColor: color + "40",
                  position: "absolute",
                }]} />
              )}
              {/* dot */}
              <View style={{
                width:  isSel ? DOT + 4 : DOT,
                height: isSel ? DOT + 4 : DOT,
                borderRadius: (isSel ? DOT + 4 : DOT) / 2,
                backgroundColor: done ? "transparent" : color,
                borderWidth: done ? 2.5 : isSel ? 2 : 0,
                borderColor:  color,
                opacity: done ? 0.55 : 1,
              }} />
            </Pressable>
          );
        })}
      </ScrollView>

      {/* ── Legend ─────────────────────────────────────────────────── */}
      <View style={[styles.legend, {
        backgroundColor: colors.surface,
        borderTopColor: colors.border,
      }]}>
        <View style={styles.legendRow}>
          {Object.entries(TYPE_COLOR).map(([type, color]) => (
            <View key={type} style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: color }]} />
              <Text style={[styles.legendLabel, { color: colors.mutedForeground }]}>{type}</Text>
            </View>
          ))}
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, {
              backgroundColor: "transparent",
              borderWidth: 1.5,
              borderColor: colors.sheikah,
            }]} />
            <Text style={[styles.legendLabel, { color: colors.mutedForeground }]}>Done</Text>
          </View>
          <Text style={[styles.legendCount, { color: colors.mutedForeground }]}>
            {visible.length} shown
          </Text>
        </View>
      </View>

      {/* ── Shrine info panel ──────────────────────────────────────── */}
      {selected && (
        <View style={[styles.infoPanel, {
          backgroundColor: colors.card,
          borderTopColor: TYPE_COLOR[selected.type] ?? colors.border,
          paddingBottom: bottomPad + 8,
        }]}>
          <View style={styles.infoPanelHeader}>
            <View style={styles.infoPanelTitle}>
              <Text style={[styles.infoName, { color: colors.foreground }]}>{selected.name}</Text>
              <TypeBadge type={selected.type} />
            </View>
            <TouchableOpacity onPress={() => setSelected(null)}>
              <Icon name="x" size={18} color={colors.mutedForeground} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.infoHint, { color: colors.sheikah }]}>{selected.hint}</Text>
          <View style={styles.infoMeta}>
            <View style={styles.infoMetaItem}>
              <Icon name="map-pin" size={12} color={colors.mutedForeground} />
              <Text style={[styles.infoMetaText, { color: colors.mutedForeground }]}>{selected.region}</Text>
            </View>
            <View style={styles.infoMetaItem}>
              <Icon name="hash" size={12} color={colors.mutedForeground} />
              <Text style={[styles.infoMetaText, { color: colors.mutedForeground }]}>{selected.coords}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:       { flex: 1 },
  header:          { paddingHorizontal: 16, paddingBottom: 12, borderBottomWidth: 1, gap: 10 },
  title:           { fontSize: 26, fontWeight: "800" },
  filterRow:       { flexDirection: "row", gap: 8 },
  chip:            { borderRadius: 20, borderWidth: 1, paddingHorizontal: 14, paddingVertical: 6 },
  chipLabel:       { fontSize: 12, fontWeight: "600" },
  mapScroll:       { flex: 1 },
  glow:            {},
  legend:          { paddingHorizontal: 16, paddingVertical: 10, borderTopWidth: 1 },
  legendRow:       { flexDirection: "row", alignItems: "center", gap: 14 },
  legendItem:      { flexDirection: "row", alignItems: "center", gap: 5 },
  legendDot:       { width: 10, height: 10, borderRadius: 5 },
  legendLabel:     { fontSize: 11 },
  legendCount:     { marginLeft: "auto", fontSize: 11 },
  infoPanel:       { borderTopWidth: 2, paddingHorizontal: 16, paddingTop: 14, paddingBottom: 8, gap: 8 },
  infoPanelHeader: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" },
  infoPanelTitle:  { flex: 1, flexDirection: "row", alignItems: "center", gap: 10, flexWrap: "wrap" },
  infoName:        { fontSize: 16, fontWeight: "700" },
  infoHint:        { fontSize: 13, fontWeight: "500" },
  infoMeta:        { flexDirection: "row", gap: 20, flexWrap: "wrap" },
  infoMetaItem:    { flexDirection: "row", alignItems: "center", gap: 5 },
  infoMetaText:    { fontSize: 12, fontFamily: "monospace" },
});
