import React, { useMemo, useState } from "react";
import { FlatList, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import { SHRINES } from "@/lib/data";
import { TypeBadge } from "@/components/TypeBadge";
import { useTracker } from "@/context/TrackerContext";
import { Icon } from "@/components/Icon";
import * as Haptics from "expo-haptics";

const REGIONS = ["All", "Sky Islands", "Central Hyrule", "Akkala", "Eldin", "Lanayru", "Necluda", "Faron", "Hebra", "Gerudo", "Dueling Peaks"];

export default function ShrinesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { isCompleted, toggle, getProgress } = useTracker();
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const progress = getProgress("shrines", 152);

  const filtered = useMemo(() => {
    return SHRINES.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.hint.toLowerCase().includes(search.toLowerCase());
      const matchRegion = region === "All" || s.region === region;
      return matchSearch && matchRegion;
    });
  }, [search, region]);

  const topPadding = Platform.OS === "web" ? 67 : insets.top;
  const bottomPadding = Platform.OS === "web" ? 34 : 0;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { paddingTop: topPadding + 12, backgroundColor: colors.background, borderBottomColor: colors.border }]}>
        <View style={styles.titleRow}>
          <Text style={[styles.screenTitle, { color: colors.sheikah }]}>Shrines</Text>
          <View style={[styles.countBadge, { backgroundColor: colors.sheikah + "22" }]}>
            <Text style={[styles.countText, { color: colors.sheikah }]}>
              {progress.count}/152
            </Text>
          </View>
        </View>

        <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
          <View style={[styles.progressFill, { backgroundColor: colors.sheikah, width: `${progress.percent * 100}%` }]} />
        </View>

        <View style={[styles.searchBox, { backgroundColor: colors.muted, borderColor: colors.border }]}>
          <Icon name="search" size={16} color={colors.mutedForeground} />
          <TextInput
            style={[styles.searchInput, { color: colors.foreground }]}
            placeholder="Search shrines..."
            placeholderTextColor={colors.mutedForeground}
            value={search}
            onChangeText={setSearch}
          />
          {search ? (
            <TouchableOpacity onPress={() => setSearch("")}>
              <Icon name="x" size={16} color={colors.mutedForeground} />
            </TouchableOpacity>
          ) : null}
        </View>

        <FlatList
          data={REGIONS}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(r) => r}
          contentContainerStyle={styles.regionList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setRegion(item)}
              style={[
                styles.regionChip,
                {
                  backgroundColor: region === item ? colors.sheikah : colors.muted,
                  borderColor: region === item ? colors.sheikah : colors.border,
                },
              ]}
            >
              <Text style={[styles.regionText, { color: region === item ? colors.primaryForeground : colors.mutedForeground }]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(s) => s.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 100 + bottomPadding }}
        renderItem={({ item }) => {
          const done = isCompleted("shrines", item.id);
          return (
            <TouchableOpacity
              style={[styles.shrineCard, { backgroundColor: colors.card, borderColor: done ? colors.sheikah + "66" : colors.border }]}
              onPress={() => {
                Haptics.selectionAsync();
                toggle("shrines", item.id);
              }}
              activeOpacity={0.8}
            >
              <View style={[styles.shrineCheck, { borderColor: done ? colors.sheikah : colors.border, backgroundColor: done ? colors.sheikah : "transparent" }]}>
                {done && <Icon name="check" size={12} color={colors.primaryForeground} />}
              </View>
              <View style={styles.shrineInfo}>
                <Text style={[styles.shrineName, { color: done ? colors.mutedForeground : colors.foreground, textDecorationLine: done ? "line-through" : "none" }]}>
                  {item.name}
                </Text>
                <Text style={[styles.shrineHint, { color: colors.mutedForeground }]}>{item.hint}</Text>
                <View style={styles.shrineMeta}>
                  <Text style={[styles.shrineRegion, { color: colors.mutedForeground }]}>{item.region}</Text>
                  <Text style={[styles.shrineDot, { color: colors.border }]}>·</Text>
                  <Text style={[styles.shrineCoords, { color: colors.mutedForeground }]}>{item.coords}</Text>
                </View>
              </View>
              <TypeBadge type={item.type} />
            </TouchableOpacity>
          );
        }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Icon name="triangle" size={32} color={colors.border} />
            <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>No shrines found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 16, paddingBottom: 12, borderBottomWidth: 1, gap: 10 },
  titleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  screenTitle: { fontSize: 26, fontWeight: "800" },
  countBadge: { borderRadius: 10, paddingHorizontal: 10, paddingVertical: 4 },
  countText: { fontSize: 13, fontWeight: "700" },
  progressBar: { height: 4, borderRadius: 2, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 2 },
  searchBox: { flexDirection: "row", alignItems: "center", borderRadius: 12, borderWidth: 1, paddingHorizontal: 12, paddingVertical: 10, gap: 8 },
  searchInput: { flex: 1, fontSize: 14, padding: 0 },
  regionList: { gap: 8, paddingRight: 16 },
  regionChip: { borderRadius: 20, borderWidth: 1, paddingHorizontal: 14, paddingVertical: 6 },
  regionText: { fontSize: 12, fontWeight: "600" },
  shrineCard: { flexDirection: "row", alignItems: "center", borderRadius: 14, borderWidth: 1, padding: 14, marginBottom: 8, gap: 12 },
  shrineCheck: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, alignItems: "center", justifyContent: "center", flexShrink: 0 },
  shrineInfo: { flex: 1, gap: 2 },
  shrineName: { fontSize: 14, fontWeight: "600" },
  shrineHint: { fontSize: 12 },
  shrineMeta: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 2 },
  shrineRegion: { fontSize: 11 },
  shrineDot: { fontSize: 10 },
  shrineCoords: { fontSize: 11, fontFamily: "monospace" },
  empty: { alignItems: "center", paddingTop: 60, gap: 12 },
  emptyText: { fontSize: 15 },
});
