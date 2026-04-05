import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import { useTracker } from "@/context/TrackerContext";
import { ProgressRing } from "@/components/ProgressRing";
import { router } from "expo-router";

const QUICK_LINKS = [
  { label: "Walkthrough", icon: "map" as const, route: "/(tabs)/walkthrough", color: "#4fc3a1" },
  { label: "Shrines", icon: "triangle" as const, route: "/(tabs)/shrines", color: "#a78bfa" },
  { label: "Gear", icon: "shield" as const, route: "/(tabs)/gear", color: "#d4a843" },
  { label: "Tracker", icon: "check-circle" as const, route: "/(tabs)/tracker", color: "#4fc3a1" },
];

const TIPS = [
  "Fuse strong materials to your weapon to dramatically boost its attack power.",
  "Climb Skyview Towers early to reveal each region's map.",
  "Use Ascend to climb through solid ceilings — it works through most surfaces.",
  "The Paraglider loses altitude — find updrafts and climb before gliding.",
  "Bomb Flowers can be fused to arrows or thrown directly for explosions.",
  "Complete Temple dungeons in any order — but Wind Temple first is recommended for Tulin's air boost.",
  "Save Sundelion meals to restore Gloom damage taken in the Depths.",
  "Ultrahand is your most powerful building tool — experiment freely.",
];

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { totalCompleted, totalItems, getProgress } = useTracker();
  const tip = TIPS[Math.floor(Date.now() / (1000 * 60 * 60 * 6)) % TIPS.length];
  const overallProgress = totalItems > 0 ? totalCompleted / totalItems : 0;
  const shrineProgress = getProgress("shrines", 152);

  const topPadding = Platform.OS === "web" ? 67 : insets.top;
  const bottomPadding = Platform.OS === "web" ? 34 : 0;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{ paddingBottom: 100 + bottomPadding }}
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient
        colors={["#0d2744", colors.background]}
        style={[styles.hero, { paddingTop: topPadding + 20 }]}
      >
        <View style={styles.heroInner}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.heroIcon}
            contentFit="contain"
          />
          <Text style={[styles.heroTitle, { color: colors.sheikah }]}>TotK Guide</Text>
          <Text style={[styles.heroSub, { color: colors.mutedForeground }]}>
            Tears of the Kingdom
          </Text>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={[styles.progressCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.progressRow}>
            <ProgressRing
              progress={overallProgress}
              size={72}
              strokeWidth={5}
              label={`${Math.round(overallProgress * 100)}%`}
              sublabel="complete"
              color={colors.sheikah}
            />
            <View style={styles.progressStats}>
              <Text style={[styles.progressTitle, { color: colors.foreground }]}>Completion</Text>
              <Text style={[styles.progressCount, { color: colors.mutedForeground }]}>
                {totalCompleted} / {totalItems} items
              </Text>
              <View style={styles.miniStats}>
                <View style={styles.miniStat}>
                  <ProgressRing progress={shrineProgress.percent} size={40} strokeWidth={3} color="#a78bfa" />
                  <Text style={[styles.miniLabel, { color: colors.mutedForeground }]}>
                    {shrineProgress.count}/152{"\n"}Shrines
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Quick Access</Text>
        <View style={styles.quickGrid}>
          {QUICK_LINKS.map((link) => (
            <TouchableOpacity
              key={link.route}
              style={[styles.quickCard, { backgroundColor: colors.card, borderColor: colors.border }]}
              onPress={() => router.push(link.route as any)}
              activeOpacity={0.75}
            >
              <View style={[styles.quickIconBg, { backgroundColor: link.color + "22" }]}>
                <Feather name={link.icon} size={22} color={link.color} />
              </View>
              <Text style={[styles.quickLabel, { color: colors.foreground }]}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={[styles.tipCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.tipHeader}>
            <Feather name="zap" size={14} color={colors.gold} />
            <Text style={[styles.tipTitle, { color: colors.gold }]}>Daily Tip</Text>
          </View>
          <Text style={[styles.tipText, { color: colors.foreground }]}>{tip}</Text>
        </View>

        <View style={[styles.infoCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.infoTitle, { color: colors.foreground }]}>About This Guide</Text>
          <Text style={[styles.infoText, { color: colors.mutedForeground }]}>
            Comprehensive coverage for The Legend of Zelda: Tears of the Kingdom. Includes all 152 shrines, armor sets, weapons, bows, shields, and a completionist tracker.
          </Text>
          <View style={styles.infoStats}>
            {[["152", "Shrines"], ["1000", "Korok Seeds"], ["19", "Armor Sets"], ["40+", "Weapons"]].map(([n, l]) => (
              <View key={l} style={styles.infoStat}>
                <Text style={[styles.infoStatNum, { color: colors.sheikah }]}>{n}</Text>
                <Text style={[styles.infoStatLabel, { color: colors.mutedForeground }]}>{l}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: { paddingHorizontal: 20, paddingBottom: 30 },
  heroInner: { alignItems: "center", gap: 8 },
  heroIcon: { width: 72, height: 72, borderRadius: 16 },
  heroTitle: { fontSize: 32, fontWeight: "800", letterSpacing: 1 },
  heroSub: { fontSize: 14, fontWeight: "500" },
  content: { paddingHorizontal: 16, gap: 20 },
  progressCard: { borderRadius: 16, borderWidth: 1, padding: 16 },
  progressRow: { flexDirection: "row", alignItems: "center", gap: 20 },
  progressStats: { flex: 1, gap: 4 },
  progressTitle: { fontSize: 16, fontWeight: "700" },
  progressCount: { fontSize: 13 },
  miniStats: { flexDirection: "row", gap: 12, marginTop: 8 },
  miniStat: { flexDirection: "row", alignItems: "center", gap: 8 },
  miniLabel: { fontSize: 11, lineHeight: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "700", letterSpacing: 0.3 },
  quickGrid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  quickCard: { borderRadius: 14, borderWidth: 1, padding: 16, alignItems: "center", gap: 10, width: "47%" },
  quickIconBg: { width: 44, height: 44, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  quickLabel: { fontSize: 13, fontWeight: "600" },
  tipCard: { borderRadius: 16, borderWidth: 1, padding: 16, gap: 8 },
  tipHeader: { flexDirection: "row", alignItems: "center", gap: 6 },
  tipTitle: { fontSize: 12, fontWeight: "700", letterSpacing: 0.5 },
  tipText: { fontSize: 14, lineHeight: 21 },
  infoCard: { borderRadius: 16, borderWidth: 1, padding: 16, gap: 10 },
  infoTitle: { fontSize: 16, fontWeight: "700" },
  infoText: { fontSize: 13, lineHeight: 19 },
  infoStats: { flexDirection: "row", justifyContent: "space-between", marginTop: 4 },
  infoStat: { alignItems: "center", gap: 2 },
  infoStatNum: { fontSize: 20, fontWeight: "800" },
  infoStatLabel: { fontSize: 11 },
});
