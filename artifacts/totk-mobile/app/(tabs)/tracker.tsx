import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, FlatList, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import { useTracker } from "@/context/TrackerContext";
import { TRACKER_CATEGORIES } from "@/lib/data";
import { ProgressRing } from "@/components/ProgressRing";
import * as Haptics from "expo-haptics";

const CAT_COLORS: Record<string, string> = {
  shrines: "#a78bfa",
  "korok-seeds": "#3dba7e",
  lightroots: "#d4a843",
  memories: "#4fc3a1",
};

export default function TrackerScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { isCompleted, toggle, getProgress, totalCompleted, totalItems } = useTracker();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const topPadding = Platform.OS === "web" ? 67 : insets.top;
  const bottomPadding = Platform.OS === "web" ? 34 : 0;

  const overallProgress = totalItems > 0 ? totalCompleted / totalItems : 0;

  const activeData = activeCategory ? TRACKER_CATEGORIES.find((c) => c.id === activeCategory) : null;
  const activeColor = activeCategory ? CAT_COLORS[activeCategory] ?? colors.sheikah : colors.sheikah;

  const PAGE_SIZE = 50;
  const pagedItems = activeData ? activeData.items.slice(0, (page + 1) * PAGE_SIZE) : [];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { paddingTop: topPadding + 12, backgroundColor: colors.background, borderBottomColor: colors.border }]}>
        <View style={styles.titleRow}>
          <Text style={[styles.screenTitle, { color: colors.sheikah }]}>Completionist</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Reset Tracker", "Reset all progress?", [
              { text: "Cancel", style: "cancel" },
              { text: "Reset", style: "destructive", onPress: () => {} },
            ])}
          >
            <Feather name="refresh-cw" size={18} color={colors.mutedForeground} />
          </TouchableOpacity>
        </View>

        <View style={styles.overallRow}>
          <ProgressRing
            progress={overallProgress}
            size={64}
            strokeWidth={5}
            label={`${Math.round(overallProgress * 100)}%`}
            color={colors.sheikah}
          />
          <View style={styles.overallInfo}>
            <Text style={[styles.overallCount, { color: colors.foreground }]}>{totalCompleted} / {totalItems}</Text>
            <Text style={[styles.overallLabel, { color: colors.mutedForeground }]}>items completed</Text>
            <View style={[styles.overallBar, { backgroundColor: colors.border }]}>
              <View style={[styles.overallFill, { backgroundColor: colors.sheikah, width: `${overallProgress * 100}%` }]} />
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.body}
        contentContainerStyle={{ paddingBottom: 100 + bottomPadding }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.categoryGrid}>
          {TRACKER_CATEGORIES.map((cat) => {
            const prog = getProgress(cat.id, cat.total);
            const color = CAT_COLORS[cat.id] ?? colors.sheikah;
            const isActive = activeCategory === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                onPress={() => {
                  Haptics.selectionAsync();
                  setActiveCategory(isActive ? null : cat.id);
                  setPage(0);
                }}
                style={[styles.catCard, {
                  backgroundColor: isActive ? color + "22" : colors.card,
                  borderColor: isActive ? color : colors.border,
                }]}
                activeOpacity={0.8}
              >
                <ProgressRing progress={prog.percent} size={56} strokeWidth={4} color={color} />
                <View style={styles.catInfo}>
                  <Text style={[styles.catLabel, { color: isActive ? color : colors.foreground }]}>{cat.label}</Text>
                  <Text style={[styles.catCount, { color: colors.mutedForeground }]}>{prog.count} / {cat.total}</Text>
                </View>
                <Feather name={isActive ? "chevron-up" : "chevron-right"} size={16} color={colors.mutedForeground} />
              </TouchableOpacity>
            );
          })}
        </View>

        {activeData && (
          <View style={{ marginHorizontal: 16 }}>
            <Text style={[styles.listTitle, { color: activeColor }]}>{activeData.label} — Track Items</Text>

            {pagedItems.map((item) => {
              const done = isCompleted(activeData.id, item.id);
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[styles.itemRow, { backgroundColor: colors.card, borderColor: done ? activeColor + "55" : colors.border }]}
                  onPress={() => {
                    Haptics.selectionAsync();
                    toggle(activeData.id, item.id);
                  }}
                  activeOpacity={0.75}
                >
                  <View style={[styles.itemCheck, { borderColor: done ? activeColor : colors.border, backgroundColor: done ? activeColor : "transparent" }]}>
                    {done && <Feather name="check" size={11} color={colors.background} />}
                  </View>
                  <View style={styles.itemInfo}>
                    <Text style={[styles.itemLabel, { color: done ? colors.mutedForeground : colors.foreground, textDecorationLine: done ? "line-through" : "none" }]}>
                      {item.label}
                    </Text>
                    {item.sublabel ? <Text style={[styles.itemSublabel, { color: colors.mutedForeground }]}>{item.sublabel}</Text> : null}
                  </View>
                </TouchableOpacity>
              );
            })}

            {activeData.items.length > pagedItems.length && (
              <TouchableOpacity
                style={[styles.loadMore, { backgroundColor: colors.muted, borderColor: colors.border }]}
                onPress={() => setPage(p => p + 1)}
              >
                <Text style={[styles.loadMoreText, { color: colors.mutedForeground }]}>
                  Load more ({activeData.items.length - pagedItems.length} remaining)
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 16, paddingBottom: 16, borderBottomWidth: 1, gap: 14 },
  titleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  screenTitle: { fontSize: 26, fontWeight: "800" },
  overallRow: { flexDirection: "row", alignItems: "center", gap: 16 },
  overallInfo: { flex: 1, gap: 4 },
  overallCount: { fontSize: 20, fontWeight: "700" },
  overallLabel: { fontSize: 12 },
  overallBar: { height: 4, borderRadius: 2, overflow: "hidden", marginTop: 4 },
  overallFill: { height: "100%", borderRadius: 2 },
  body: { flex: 1 },
  categoryGrid: { paddingHorizontal: 16, paddingTop: 16, gap: 10, marginBottom: 20 },
  catCard: { flexDirection: "row", alignItems: "center", borderRadius: 16, borderWidth: 1, padding: 14, gap: 14 },
  catInfo: { flex: 1, gap: 2 },
  catLabel: { fontSize: 15, fontWeight: "700" },
  catCount: { fontSize: 12 },
  listTitle: { fontSize: 15, fontWeight: "700", marginBottom: 10, letterSpacing: 0.3 },
  itemRow: { flexDirection: "row", alignItems: "center", borderRadius: 12, borderWidth: 1, padding: 12, marginBottom: 6, gap: 12 },
  itemCheck: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, alignItems: "center", justifyContent: "center", flexShrink: 0 },
  itemInfo: { flex: 1, gap: 1 },
  itemLabel: { fontSize: 13, fontWeight: "600" },
  itemSublabel: { fontSize: 11 },
  loadMore: { borderRadius: 12, borderWidth: 1, padding: 14, alignItems: "center", marginTop: 6 },
  loadMoreText: { fontSize: 13, fontWeight: "600" },
});
