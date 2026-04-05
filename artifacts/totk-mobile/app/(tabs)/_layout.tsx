import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, View, useColorScheme } from "react-native";
import { useColors } from "@/hooks/useColors";
import { Icon } from "@/components/Icon";

export default function TabLayout() {
  const colors = useColors();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const isIOS = Platform.OS === "ios";
  const isWeb = Platform.OS === "web";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.sheikah,
        tabBarInactiveTintColor: colors.mutedForeground,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: isIOS ? "transparent" : colors.surface,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          elevation: 0,
          ...(isWeb ? { height: 84 } : {}),
        },
        tabBarBackground: () =>
          isIOS ? (
            <BlurView
              intensity={80}
              tint="dark"
              style={StyleSheet.absoluteFill}
            />
          ) : isWeb ? (
            <View style={[StyleSheet.absoluteFill, { backgroundColor: colors.surface }]} />
          ) : null,
        tabBarLabelStyle: { fontSize: 10, fontWeight: "600" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Icon name="home" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="walkthrough"
        options={{
          title: "Guide",
          tabBarIcon: ({ color }) => <Icon name="map" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="shrines"
        options={{
          title: "Shrines",
          tabBarIcon: ({ color }) => <Icon name="triangle" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="gear"
        options={{
          title: "Gear",
          tabBarIcon: ({ color }) => <Icon name="shield" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => <Icon name="navigation" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="tracker"
        options={{
          title: "Tracker",
          tabBarIcon: ({ color }) => <Icon name="check-circle" size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}
