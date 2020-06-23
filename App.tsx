import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NewContract } from "./src/screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "@use-expo/font";

export default function App() {
  const [fontLoaded] = useFonts({
    Raleway: require("./assets/Raleway-Regular.ttf"),
    RalewayBold: require("./assets/Raleway-Bold.ttf"),
  });

  if (!fontLoaded) return null;

  return (
    <SafeAreaProvider>
      <NewContract />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
