import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useColors } from "@/hooks/useColors";

interface Props {
  type: string;
}

const TYPE_COLORS: Record<string, string> = {
  "Puzzle": "#4fc3a1",
  "Combat": "#e05252",
  "Blessing": "#d4a843",
  "One-Handed": "#4fc3a1",
  "Two-Handed": "#e05252",
  "Spear": "#a78bfa",
};

export function TypeBadge({ type }: Props) {
  const colors = useColors();
  const color = TYPE_COLORS[type] ?? colors.mutedForeground;
  return (
    <View style={[styles.badge, { backgroundColor: color + "22", borderColor: color + "55" }]}>
      <Text style={[styles.label, { color }]}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { borderRadius: 6, borderWidth: 1, paddingHorizontal: 8, paddingVertical: 3 },
  label: { fontSize: 11, fontWeight: "600", letterSpacing: 0.3 },
});
