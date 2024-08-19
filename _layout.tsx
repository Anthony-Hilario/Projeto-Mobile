import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="popup" />
      <Stack.Screen name="index" />
      <Stack.Screen name="animais" />
      <Stack.Screen name="continentes" />
    </Stack>
  );
}
