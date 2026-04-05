import { Image } from "expo-image";
import React, { useState } from "react";
import { FlatList, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import { WEAPONS, BOWS, SHIELDS, ARMOR } from "@/lib/data";
import { TypeBadge } from "@/components/TypeBadge";
import { StatBadge } from "@/components/StatBadge";
import { Icon } from "@/components/Icon";

type Tab = "weapons" | "bows" | "shields" | "armor";

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "weapons", label: "Weapons", icon: "zap" },
  { id: "bows", label: "Bows", icon: "crosshair" },
  { id: "shields", label: "Shields", icon: "shield" },
  { id: "armor", label: "Armor", icon: "layers" },
];

export default function GearScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState<Tab>("weapons");
  const [expandedArmor, setExpandedArmor] = useState<string | null>(null);

  const topPadding = Platform.OS === "web" ? 67 : insets.top;
  const bottomPadding = Platform.OS === "web" ? 34 : 0;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { paddingTop: topPadding + 12, backgroundColor: colors.background, borderBottomColor: colors.border }]}>
        <Text style={[styles.screenTitle, { color: colors.gold }]}>Gear & Equipment</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabRow}>
          {TABS.map((t) => (
            <TouchableOpacity
              key={t.id}
              onPress={() => setTab(t.id)}
              style={[styles.tabChip, { backgroundColor: tab === t.id ? colors.gold : colors.muted, borderColor: tab === t.id ? colors.gold : colors.border }]}
            >
              <Icon name={t.icon} size={14} color={tab === t.id ? colors.primaryForeground : colors.mutedForeground} />
              <Text style={[styles.tabLabel, { color: tab === t.id ? colors.primaryForeground : colors.mutedForeground }]}>{t.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {tab === "weapons" && (
        <FlatList
          data={WEAPONS}
          keyExtractor={(w) => w.id}
          contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 100 + bottomPadding }}
          renderItem={({ item }) => (
            <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.itemHeader}>
                {item.imageUrl ? (
                  <Image source={{ uri: item.imageUrl }} style={styles.itemImage} contentFit="contain" transition={200} />
                ) : (
                  <View style={[styles.itemImagePlaceholder, { backgroundColor: colors.muted }]}>
                    <Icon name="zap" size={18} color={colors.mutedForeground} />
                  </View>
                )}
                <View style={styles.itemHeaderInfo}>
                  <View style={styles.cardTitleRow}>
                    <Text style={[styles.itemName, { color: colors.foreground }]}>{item.name}</Text>
                    <TypeBadge type={item.type} />
                  </View>
                  <View style={styles.statRow}>
                    <StatBadge label="ATK" value={item.attack} color={colors.sheikah} />
                    <StatBadge label="DUR" value={item.durability === 999 ? "∞" : item.durability} color={colors.mutedForeground} />
                  </View>
                </View>
              </View>
              {item.effect !== "None" && (
                <View style={[styles.effectRow, { backgroundColor: colors.gold + "18" }]}>
                  <Icon name="zap" size={12} color={colors.gold} />
                  <Text style={[styles.effectText, { color: colors.gold }]}>{item.effect}</Text>
                </View>
              )}
              <View style={styles.locationRow}>
                <Icon name="map-pin" size={12} color={colors.mutedForeground} />
                <Text style={[styles.locationText, { color: colors.mutedForeground }]}>{item.location}</Text>
              </View>
            </View>
          )}
        />
      )}

      {tab === "bows" && (
        <FlatList
          data={BOWS}
          keyExtractor={(b) => b.id}
          contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 100 + bottomPadding }}
          renderItem={({ item }) => (
            <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.itemHeader}>
                {item.imageUrl ? (
                  <Image source={{ uri: item.imageUrl }} style={styles.itemImage} contentFit="contain" transition={200} />
                ) : (
                  <View style={[styles.itemImagePlaceholder, { backgroundColor: colors.muted }]}>
                    <Icon name="crosshair" size={18} color={colors.mutedForeground} />
                  </View>
                )}
                <View style={styles.itemHeaderInfo}>
                  <Text style={[styles.itemName, { color: colors.foreground }]}>{item.name}</Text>
                  <View style={styles.statRow}>
                    <StatBadge label="ATK" value={item.attack} color={colors.sheikah} />
                    <StatBadge label="DUR" value={item.durability} color={colors.mutedForeground} />
                    <StatBadge label="SHOTS" value={item.multishot} color="#a78bfa" />
                    <StatBadge label="RANGE" value={item.range} color={colors.gold} />
                  </View>
                </View>
              </View>
              {item.effect !== "None" && (
                <View style={[styles.effectRow, { backgroundColor: colors.gold + "18" }]}>
                  <Icon name="zap" size={12} color={colors.gold} />
                  <Text style={[styles.effectText, { color: colors.gold }]}>{item.effect}</Text>
                </View>
              )}
              <View style={styles.locationRow}>
                <Icon name="map-pin" size={12} color={colors.mutedForeground} />
                <Text style={[styles.locationText, { color: colors.mutedForeground }]}>{item.location}</Text>
              </View>
            </View>
          )}
        />
      )}

      {tab === "shields" && (
        <FlatList
          data={SHIELDS}
          keyExtractor={(s) => s.id}
          contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 100 + bottomPadding }}
          renderItem={({ item }) => (
            <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.itemHeader}>
                {item.imageUrl ? (
                  <Image source={{ uri: item.imageUrl }} style={styles.itemImage} contentFit="contain" transition={200} />
                ) : (
                  <View style={[styles.itemImagePlaceholder, { backgroundColor: colors.muted }]}>
                    <Icon name="shield" size={18} color={colors.mutedForeground} />
                  </View>
                )}
                <View style={styles.itemHeaderInfo}>
                  <Text style={[styles.itemName, { color: colors.foreground }]}>{item.name}</Text>
                  <View style={styles.statRow}>
                    <StatBadge label="DEF" value={item.defense} color={colors.sheikah} />
                    <StatBadge label="DUR" value={item.durability} color={colors.mutedForeground} />
                  </View>
                </View>
              </View>
              {item.effect !== "None" && (
                <View style={[styles.effectRow, { backgroundColor: colors.gold + "18" }]}>
                  <Icon name="shield" size={12} color={colors.gold} />
                  <Text style={[styles.effectText, { color: colors.gold }]}>{item.effect}</Text>
                </View>
              )}
              <View style={styles.locationRow}>
                <Icon name="map-pin" size={12} color={colors.mutedForeground} />
                <Text style={[styles.locationText, { color: colors.mutedForeground }]}>{item.location}</Text>
              </View>
            </View>
          )}
        />
      )}

      {tab === "armor" && (
        <FlatList
          data={ARMOR}
          keyExtractor={(a) => a.id}
          contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 100 + bottomPadding }}
          renderItem={({ item }) => {
            const isOpen = expandedArmor === item.id;
            return (
              <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <TouchableOpacity onPress={() => setExpandedArmor(isOpen ? null : item.id)} activeOpacity={0.8}>
                  <View style={styles.armorHeader}>
                    {item.imageUrl ? (
                      <Image
                        source={{ uri: item.imageUrl }}
                        style={styles.armorImage}
                        contentFit="contain"
                        transition={200}
                      />
                    ) : (
                      <View style={[styles.armorImagePlaceholder, { backgroundColor: colors.muted }]}>
                        <Icon name="layers" size={22} color={colors.mutedForeground} />
                      </View>
                    )}
                    <View style={styles.armorTitleCol}>
                      <Text style={[styles.itemName, { color: colors.foreground }]}>{item.name}</Text>
                      <View style={styles.armorBadges}>
                        {item.maxStars > 0 && (
                          <View style={[styles.starBadge, { backgroundColor: colors.gold + "22" }]}>
                            <Text style={[styles.starText, { color: colors.gold }]}>★ {item.maxStars}</Text>
                          </View>
                        )}
                        {item.effect !== "None" && (
                          <View style={[styles.effectBadge, { backgroundColor: colors.sheikah + "22" }]}>
                            <Text style={[styles.effectBadgeText, { color: colors.sheikah }]}>{item.effect}</Text>
                          </View>
                        )}
                      </View>
                    </View>
                    <Icon name={isOpen ? "chevron-up" : "chevron-down"} size={18} color={colors.mutedForeground} />
                  </View>
                </TouchableOpacity>

                {isOpen && (
                  <View style={[styles.armorDetails, { borderTopColor: colors.border }]}>
                    {item.setBonus !== "None" && (
                      <View style={[styles.bonusRow, { backgroundColor: colors.sheikah + "15" }]}>
                        <Icon name="layers" size={12} color={colors.sheikah} />
                        <Text style={[styles.bonusText, { color: colors.sheikah }]}>Set Bonus: {item.setBonus}</Text>
                      </View>
                    )}

                    <Text style={[styles.subTitle, { color: colors.mutedForeground }]}>Pieces</Text>
                    {item.pieces.map((p, pi) => (
                      <View key={pi} style={[styles.pieceRow, { borderColor: colors.border }]}>
                        <View style={styles.pieceTitleRow}>
                          <Text style={[styles.pieceName, { color: colors.foreground }]}>{p.name}</Text>
                          <Text style={[styles.pieceDef, { color: colors.sheikah }]}>DEF {p.defense}→{p.maxDefense}</Text>
                        </View>
                        <View style={styles.locationRow}>
                          <Icon name="map-pin" size={11} color={colors.mutedForeground} />
                          <Text style={[styles.locationText, { color: colors.mutedForeground }]}>{p.location}</Text>
                        </View>
                      </View>
                    ))}

                    {item.upgradeTiers.length > 0 && (
                      <>
                        <Text style={[styles.subTitle, { color: colors.mutedForeground }]}>Upgrade Materials (per piece)</Text>
                        {item.upgradeTiers.map((tier) => (
                          <View key={tier.star} style={styles.tierRow}>
                            <Text style={[styles.tierStar, { color: colors.gold }]}>{"★".repeat(tier.star)}</Text>
                            <Text style={[styles.tierMats, { color: colors.mutedForeground }]}>{tier.materials.join(", ")}</Text>
                          </View>
                        ))}
                      </>
                    )}
                  </View>
                )}
              </View>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 16, paddingBottom: 12, borderBottomWidth: 1, gap: 10 },
  screenTitle: { fontSize: 26, fontWeight: "800" },
  tabRow: { gap: 8, paddingRight: 16 },
  tabChip: { flexDirection: "row", alignItems: "center", gap: 6, borderRadius: 20, borderWidth: 1, paddingHorizontal: 14, paddingVertical: 7 },
  tabLabel: { fontSize: 13, fontWeight: "600" },
  card: { borderRadius: 14, borderWidth: 1, padding: 14, marginBottom: 10, gap: 10 },
  cardTop: { gap: 8 },
  cardTitleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 },
  itemName: { fontSize: 15, fontWeight: "700", flex: 1 },
  statRow: { flexDirection: "row", gap: 8, flexWrap: "wrap" },
  effectRow: { flexDirection: "row", alignItems: "flex-start", gap: 6, borderRadius: 8, padding: 8 },
  effectText: { fontSize: 12, flex: 1, lineHeight: 17 },
  locationRow: { flexDirection: "row", alignItems: "flex-start", gap: 6 },
  locationText: { fontSize: 12, flex: 1, lineHeight: 17 },
  itemHeader: { flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 2 },
  itemImage: { width: 48, height: 48, borderRadius: 8 },
  itemImagePlaceholder: { width: 48, height: 48, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  itemHeaderInfo: { flex: 1, gap: 6 },
  armorHeader: { flexDirection: "row", alignItems: "center", gap: 12 },
  armorImage: { width: 56, height: 56, borderRadius: 10 },
  armorImagePlaceholder: { width: 56, height: 56, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  armorTitleCol: { flex: 1, gap: 6 },
  armorBadges: { flexDirection: "row", gap: 6, flexWrap: "wrap" },
  starBadge: { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  starText: { fontSize: 12, fontWeight: "700" },
  effectBadge: { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  effectBadgeText: { fontSize: 11, fontWeight: "600" },
  armorDetails: { borderTopWidth: 1, paddingTop: 12, gap: 10 },
  bonusRow: { flexDirection: "row", alignItems: "center", gap: 6, borderRadius: 8, padding: 8 },
  bonusText: { fontSize: 12, flex: 1 },
  subTitle: { fontSize: 12, fontWeight: "700", letterSpacing: 0.5 },
  pieceRow: { borderRadius: 10, borderWidth: 1, padding: 10, gap: 4 },
  pieceTitleRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  pieceName: { fontSize: 13, fontWeight: "600", flex: 1 },
  pieceDef: { fontSize: 12, fontWeight: "700" },
  tierRow: { flexDirection: "row", alignItems: "flex-start", gap: 10 },
  tierStar: { fontSize: 14, minWidth: 40 },
  tierMats: { flex: 1, fontSize: 12, lineHeight: 18 },
});
