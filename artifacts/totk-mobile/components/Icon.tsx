import React from "react";
import { Text, TextStyle } from "react-native";

const GLYPHS: Record<string, string> = {
  "alert-circle": "⚠",
  "book": "◈",
  "check": "✓",
  "check-circle": "◎",
  "chevron-down": "▼",
  "chevron-right": "▶",
  "chevron-up": "▲",
  "cloud": "☁",
  "crosshair": "⊕",
  "hash": "#",
  "home": "⌂",
  "layers": "≡",
  "map": "◈",
  "map-pin": "◆",
  "moon": "◐",
  "navigation": "➤",
  "refresh-cw": "↻",
  "search": "⌕",
  "shield": "⬡",
  "star": "★",
  "triangle": "△",
  "wind": "≈",
  "x": "✕",
  "zap": "⚡",
};

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: TextStyle;
}

export function Icon({ name, size = 20, color = "#fff", style }: IconProps) {
  return (
    <Text
      style={[
        {
          fontSize: size,
          color,
          lineHeight: size * 1.2,
          textAlign: "center",
          includeFontPadding: false,
        },
        style,
      ]}
    >
      {GLYPHS[name] ?? "•"}
    </Text>
  );
}
