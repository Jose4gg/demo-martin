import React from "react";
import { Text, View, TextInput } from "react-native";
import { CollapsibleContent } from "../../../components";
import { MaterialIcons } from "@expo/vector-icons";

export default function Overview() {
  return (
    <CollapsibleContent>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="info-outline" size={24} color="#4E4E4E" />
        <Text
          style={{
            fontFamily: "Raleway",
            fontSize: 16,
            paddingLeft: 8,
            color: "#4E4E4E",
          }}
        >
          Lorem ipsum dolor sit amet
        </Text>
      </View>
      <View style={{ height: 10 }} />
      <TextInput
        multiline
        placeholder="I commit to"
        style={{
          height: 70,
          fontFamily: "Raleway",
          borderColor: "transparent",
          borderBottomColor: "#5641FF",
          borderWidth: 1,
          fontSize: 20,
        }}
      />
      <View style={{ height: 20 }} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Raleway",
            fontSize: 20,
            color: "#4E4E4E",
          }}
        >
          By
        </Text>
        <View style={{ width: 20 }} />
        <TextInput
          multiline
          value="22/08/2020"
          placeholder="I commit to"
          style={{
            fontFamily: "Raleway",
            borderColor: "transparent",
            color: "#4E4E4E",
            borderBottomColor: "#5641FF",
            borderWidth: 1,
            fontSize: 20,
            flex: 1,
            textAlign: "center",
          }}
        />
      </View>
      <View style={{ height: 20 }} />
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Text
          style={{ fontSize: 22, color: "#5641FF", fontFamily: "RalewayBold" }}
        >
          {"NEXT >>"}
        </Text>
      </View>
    </CollapsibleContent>
  );
}
