import React, { useState } from "react";
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import { WALKTHROUGH_STEPS } from "@/lib/data";
import { Icon } from "@/components/Icon";

const ICON_MAP: Record<string, string> = {
  cloud: "cloud",
  map: "map",
  wind: "wind",
  moon: "moon",
};

export default function WalkthroughScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [expanded, setExpanded] = useState<string | null>("great-sky-island");

  const topPadding = Platform.OS === "web" ? 67 : insets.top;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{ paddingTop: topPadding + 16, paddingBottom: 100, paddingHorizontal: 16 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.screenTitle, { color: colors.sheikah }]}>Main Walkthrough</Text>
      <Text style={[styles.screenSub, { color: colors.mutedForeground }]}>
        Complete story guide from start to finish
      </Text>

      <View style={styles.chapters}>
        {WALKTHROUGH_STEPS.map((chapter, idx) => {
          const isOpen = expanded === chapter.id;
          const icon = ICON_MAP[chapter.icon] ?? "book";
          return (
            <View key={chapter.id} style={[styles.chapter, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <TouchableOpacity
                style={styles.chapterHeader}
                onPress={() => setExpanded(isOpen ? null : chapter.id)}
                activeOpacity={0.75}
              >
                <View style={[styles.chapterNum, { backgroundColor: colors.sheikah + "22" }]}>
                  <Text style={[styles.chapterNumText, { color: colors.sheikah }]}>{idx + 1}</Text>
                </View>
                <View style={styles.chapterInfo}>
                  <Text style={[styles.chapterTitle, { color: colors.foreground }]}>{chapter.title}</Text>
                  <Text style={[styles.chapterDesc, { color: colors.mutedForeground }]} numberOfLines={2}>
                    {chapter.description}
                  </Text>
                </View>
                <Icon
                  name={isOpen ? "chevron-up" : "chevron-down"}
                  size={20}
                  color={colors.mutedForeground}
                />
              </TouchableOpacity>

              {isOpen && (
                <View style={[styles.stepsContainer, { borderTopColor: colors.border }]}>
                  {chapter.steps.map((step, si) => (
                    <View key={si} style={styles.step}>
                      <View style={[styles.stepDot, { backgroundColor: colors.sheikah }]} />
                      <Text style={[styles.stepText, { color: colors.foreground }]}>{step}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </View>

      <View style={[styles.tipsBox, { backgroundColor: colors.card, borderColor: colors.gold + "44" }]}>
        <Text style={[styles.tipsTitle, { color: colors.gold }]}>General Tips</Text>
        {[
          "Complete the four Regional Phenomena in any order — they are designed to be tackled independently.",
          "Collect Korok Seeds to expand your inventory (trade with Hestu).",
          "Activate all Skyview Towers to unlock your full map before exploring.",
          "Upgrade armor at Great Fairy Fountains — find all four to unlock tier 4.",
        ].map((tip, i) => (
          <View key={i} style={styles.tip}>
            <Icon name="star" size={12} color={colors.gold} />
            <Text style={[styles.tipText, { color: colors.mutedForeground }]}>{tip}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  screenTitle: { fontSize: 26, fontWeight: "800", letterSpacing: 0.5, marginBottom: 4 },
  screenSub: { fontSize: 13, marginBottom: 20 },
  chapters: { gap: 12, marginBottom: 20 },
  chapter: { borderRadius: 16, borderWidth: 1, overflow: "hidden" },
  chapterHeader: { flexDirection: "row", alignItems: "center", padding: 16, gap: 12 },
  chapterNum: { width: 36, height: 36, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  chapterNumText: { fontSize: 15, fontWeight: "800" },
  chapterInfo: { flex: 1, gap: 2 },
  chapterTitle: { fontSize: 15, fontWeight: "700" },
  chapterDesc: { fontSize: 12, lineHeight: 17 },
  stepsContainer: { borderTopWidth: 1, paddingHorizontal: 16, paddingVertical: 14, gap: 12 },
  step: { flexDirection: "row", gap: 10, alignItems: "flex-start" },
  stepDot: { width: 6, height: 6, borderRadius: 3, marginTop: 7, flexShrink: 0 },
  stepText: { flex: 1, fontSize: 13, lineHeight: 20 },
  tipsBox: { borderRadius: 16, borderWidth: 1, padding: 16, gap: 10 },
  tipsTitle: { fontSize: 14, fontWeight: "700", letterSpacing: 0.4, marginBottom: 2 },
  tip: { flexDirection: "row", gap: 8, alignItems: "flex-start" },
  tipText: { flex: 1, fontSize: 13, lineHeight: 19 },
});
