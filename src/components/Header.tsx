import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  const { top } = useSafeArea();
  const { width } = Dimensions.get("window");
  return (
    <>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={StyleSheet.flatten([styles.container, { paddingTop: top }])}
        imageStyle={{
          width,
          height: 130,
        }}
      >
        <View style={styles.sideContainer}>
          <MaterialIcons name="menu" size={44} color="white" />
        </View>
        <View style={styles.centerContainer}>
          <Image source={require("../../assets/logo.png")} />
        </View>
        <View style={styles.sideContainer}>
          {/* <MaterialIcons name="menu" size={44} color="white" /> */}
        </View>
      </ImageBackground>
      <View style={styles.spacer} />
    </>
  );
}

const styles = StyleSheet.create({
  spacer: {
    height: 50,
  },
  container: {
    width: "100%",
    height: 110,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  image: {},
  sideContainer: {
    width: "15%",
  },
  centerContainer: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
});
