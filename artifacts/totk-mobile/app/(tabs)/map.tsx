import { Feather } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, {
  Circle,
  Defs,
  G,
  Line,
  Rect,
  Text as SvgText,
} from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import { SHRINES } from "@/lib/data";
import { TypeBadge } from "@/components/TypeBadge";
import { useTracker } from "@/context/TrackerContext";

const MAP_W = 2200;
const MAP_H = 1600;

function parseCoords(coords: string): { x: number; y: number } | null {
  const parts = coords.split(",").map((s) => parseFloat(s.trim()));
  if (parts.length < 2 || isNaN(parts[0]) || isNaN(parts[1])) return null;
  return { x: parts[0], y: parts[1] };
}

function toMapXY(gameX: number, gameY: number) {
  const x = ((gameX + 5600) / 10400) * MAP_W;
  const y = ((3600 - gameY) / 8200) * MAP_H;
  return { x, y };
}

const REGION_ZONES = [
  { name: "Hebra", color: "#1a3a5c", gx: -5200, gy: 3600, gw: 3600, gh: 3600 },
  { name: "Eldin", color: "#3a1a0a", gx: 800, gy: 3400, gw: 3200, gh: 2800 },
  { name: "Akkala", color: "#2a1a0a", gx: 2600, gy: 3800, gw: 2600, gh: 2200 },
  { name: "Lanayru", color: "#0a2a3a", gx: 2000, gy: -200, gw: 2600, gh: 2600 },
  { name: "Central Hyrule", color: "#0a2a14", gx: -1800, gy: -1400, gw: 4200, gh: 3200 },
  { name: "Gerudo", color: "#2a1e08", gx: -5400, gy: -800, gw: 2800, gh: 3200 },
  { name: "Necluda", color: "#0a2a10", gx: 400, gy: -1600, gw: 4000, gh: 2400 },
  { name: "Faron", color: "#0a2208", gx: -800, gy: -3800, gw: 3200, gh: 2400 },
  { name: "Gerudo Desert", color: "#2a1a04", gx: -5400, gy: -4000, gw: 3600, gh: 3200 },
  { name: "Hebra Mts", color: "#122030", gx: -3000, gy: 1200, gw: 2000, gh: 2400 },
];

const TYPE_COLORS: Record<string, string> = {
  Puzzle: "#4fc3a1",
  Combat: "#e05252",
  Blessing: "#d4a843",
};

interface ShrineInfo {
  id: string;
  name: string;
  region: string;
  type: string;
  hint: string;
  coords: string;
  mx: number;
  my: number;
}

export default function MapScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { isCompleted } = useTracker();
  const [selected, setSelected] = useState<ShrineInfo | null>(null);
  const [filter, setFilter] = useState<"All" | "Puzzle" | "Combat" | "Blessing">("All");

  const topPadding = Platform.OS === "web" ? 67 : insets.top;
  const bottomPadding = Platform.OS === "web" ? 34 : 0;

  const shrines: ShrineInfo[] = SHRINES.map((s) => {
    const gc = parseCoords(s.coords);
    const { x: mx, y: my } = gc ? toMapXY(gc.x, gc.y) : { x: 0, y: 0 };
    return { ...s, mx, my };
  }).filter((s) => s.mx > 0 && s.my > 0);

  const visible = shrines.filter((s) => filter === "All" || s.type === filter);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View
        style={[
          styles.header,
          {
            paddingTop: topPadding + 12,
            backgroundColor: colors.background,
            borderBottomColor: colors.border,
          },
        ]}
      >
        <Text style={[styles.screenTitle, { color: colors.sheikah }]}>Hyrule Map</Text>
        <View style={styles.filterRow}>
          {(["All", "Puzzle", "Combat", "Blessing"] as const).map((f) => (
            <TouchableOpacity
              key={f}
              onPress={() => setFilter(f)}
              style={[
                styles.filterChip,
                {
                  backgroundColor:
                    filter === f
                      ? f === "All"
                        ? colors.sheikah
                        : TYPE_COLORS[f] ?? colors.sheikah
                      : colors.muted,
                  borderColor:
                    filter === f
                      ? f === "All"
                        ? colors.sheikah
                        : TYPE_COLORS[f] ?? colors.sheikah
                      : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.filterLabel,
                  {
                    color:
                      filter === f ? colors.primaryForeground : colors.mutedForeground,
                  },
                ]}
              >
                {f}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView
        horizontal
        style={styles.mapScroll}
        contentContainerStyle={styles.mapContent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        maximumZoomScale={3}
        minimumZoomScale={0.4}
        bouncesZoom
        scrollEventThrottle={16}
      >
        <ScrollView
          style={{ width: MAP_W, height: MAP_H }}
          contentContainerStyle={{ width: MAP_W, height: MAP_H }}
          showsVerticalScrollIndicator={false}
        >
          <Svg width={MAP_W} height={MAP_H}>
            <Rect
              x={0}
              y={0}
              width={MAP_W}
              height={MAP_H}
              fill="#081220"
            />

            {REGION_ZONES.map((rz, i) => {
              const tl = toMapXY(rz.gx, rz.gy + rz.gh);
              const br = toMapXY(rz.gx + rz.gw, rz.gy);
              return (
                <Rect
                  key={i}
                  x={tl.x}
                  y={tl.y}
                  width={br.x - tl.x}
                  height={br.y - tl.y}
                  fill={rz.color}
                  opacity={0.85}
                />
              );
            })}

            {[...Array(11)].map((_, i) => {
              const x = (i / 10) * MAP_W;
              return (
                <Line
                  key={`vl-${i}`}
                  x1={x}
                  y1={0}
                  x2={x}
                  y2={MAP_H}
                  stroke="#1e3a5f"
                  strokeWidth={0.5}
                  opacity={0.4}
                />
              );
            })}
            {[...Array(9)].map((_, i) => {
              const y = (i / 8) * MAP_H;
              return (
                <Line
                  key={`hl-${i}`}
                  x1={0}
                  y1={y}
                  x2={MAP_W}
                  y2={y}
                  stroke="#1e3a5f"
                  strokeWidth={0.5}
                  opacity={0.4}
                />
              );
            })}

            {(() => {
              const c = toMapXY(0, 0);
              return (
                <>
                  <Line x1={c.x - 12} y1={c.y} x2={c.x + 12} y2={c.y} stroke="#4fc3a1" strokeWidth={1} />
                  <Line x1={c.x} y1={c.y - 12} x2={c.x} y2={c.y + 12} stroke="#4fc3a1" strokeWidth={1} />
                  <SvgText x={c.x + 6} y={c.y - 6} fill="#4fc3a1" fontSize={9} opacity={0.7}>
                    0,0
                  </SvgText>
                </>
              );
            })()}

            {[
              { label: "AKKALA", gx: 3800, gy: 2800 },
              { label: "ELDIN", gx: 1600, gy: 2600 },
              { label: "LANAYRU", gx: 3000, gy: 800 },
              { label: "CENTRAL\nHYRULE", gx: -200, gy: 400 },
              { label: "GERUDO", gx: -4200, gy: -400 },
              { label: "HEBRA", gx: -3800, gy: 2400 },
              { label: "NECLUDA", gx: 1800, gy: -1000 },
              { label: "FARON", gx: 600, gy: -2800 },
            ].map((rl) => {
              const { x, y } = toMapXY(rl.gx, rl.gy);
              return (
                <SvgText
                  key={rl.label}
                  x={x}
                  y={y}
                  fill="#4fc3a1"
                  fontSize={13}
                  fontWeight="bold"
                  opacity={0.35}
                  textAnchor="middle"
                >
                  {rl.label}
                </SvgText>
              );
            })}

            {visible.map((s) => {
              const done = isCompleted("shrines", s.id);
              const color = TYPE_COLORS[s.type] ?? "#4fc3a1";
              const isSelected = selected?.id === s.id;
              return (
                <G key={s.id}>
                  {isSelected && (
                    <Circle
                      cx={s.mx}
                      cy={s.my}
                      r={14}
                      fill={color}
                      opacity={0.25}
                    />
                  )}
                  <Circle
                    cx={s.mx}
                    cy={s.my}
                    r={isSelected ? 8 : 6}
                    fill={done ? "#081220" : color}
                    stroke={color}
                    strokeWidth={done ? 1.5 : 0}
                    opacity={done ? 0.6 : 1}
                    onPress={() => setSelected(s)}
                  />
                  {isSelected && (
                    <SvgText
                      x={s.mx}
                      y={s.my - 14}
                      fill={color}
                      fontSize={9}
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      {s.name.replace(" Shrine", "")}
                    </SvgText>
                  )}
                </G>
              );
            })}
          </Svg>
        </ScrollView>
      </ScrollView>

      <View style={[styles.legend, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
        <View style={styles.legendRow}>
          {Object.entries(TYPE_COLORS).map(([type, color]) => (
            <View key={type} style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: color }]} />
              <Text style={[styles.legendLabel, { color: colors.mutedForeground }]}>{type}</Text>
            </View>
          ))}
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: "transparent", borderWidth: 1.5, borderColor: colors.sheikah }]} />
            <Text style={[styles.legendLabel, { color: colors.mutedForeground }]}>Done</Text>
          </View>
          <Text style={[styles.legendCount, { color: colors.mutedForeground }]}>
            {visible.length} shown
          </Text>
        </View>
      </View>

      {selected && (
        <View
          style={[
            styles.infoPanel,
            {
              backgroundColor: colors.card,
              borderTopColor: TYPE_COLORS[selected.type] ?? colors.border,
              paddingBottom: bottomPadding + 8,
            },
          ]}
        >
          <View style={styles.infoPanelHeader}>
            <View style={styles.infoPanelTitle}>
              <Text style={[styles.infoName, { color: colors.foreground }]}>{selected.name}</Text>
              <TypeBadge type={selected.type} />
            </View>
            <TouchableOpacity onPress={() => setSelected(null)}>
              <Feather name="x" size={18} color={colors.mutedForeground} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.infoHint, { color: colors.sheikah }]}>{selected.hint}</Text>
          <View style={styles.infoMeta}>
            <View style={styles.infoMetaItem}>
              <Feather name="map-pin" size={12} color={colors.mutedForeground} />
              <Text style={[styles.infoMetaText, { color: colors.mutedForeground }]}>{selected.region}</Text>
            </View>
            <View style={styles.infoMetaItem}>
              <Feather name="hash" size={12} color={colors.mutedForeground} />
              <Text style={[styles.infoMetaText, { color: colors.mutedForeground }]}>{selected.coords}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    gap: 10,
  },
  screenTitle: { fontSize: 26, fontWeight: "800" },
  filterRow: { flexDirection: "row", gap: 8 },
  filterChip: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  filterLabel: { fontSize: 12, fontWeight: "600" },
  mapScroll: { flex: 1 },
  mapContent: { width: MAP_W, height: MAP_H },
  legend: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
  },
  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  legendItem: { flexDirection: "row", alignItems: "center", gap: 5 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendLabel: { fontSize: 11 },
  legendCount: { marginLeft: "auto", fontSize: 11 },
  infoPanel: {
    borderTopWidth: 2,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 8,
    gap: 8,
  },
  infoPanelHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  infoPanelTitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  infoName: { fontSize: 16, fontWeight: "700" },
  infoHint: { fontSize: 13, fontWeight: "500" },
  infoMeta: { flexDirection: "row", gap: 20, flexWrap: "wrap" },
  infoMetaItem: { flexDirection: "row", alignItems: "center", gap: 5 },
  infoMetaText: { fontSize: 12, fontFamily: "monospace" },
});
