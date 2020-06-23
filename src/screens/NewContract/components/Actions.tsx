import React from "react";
import { Text, View, TextInput } from "react-native";
import { CollapsibleContent } from "../../../components";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Actions() {
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
      <View style={{ height: 20 }} />
      <EditableContent title="20 situps" frequency="Mo, Wed" />
      <View style={{ height: 10 }} />
      <EditableContent title="20 situps" frequency="Mo, Wed" />
      <View style={{ height: 20 }} />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Ionicons name="md-add-circle" size={38} color="#FFB841" />
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

interface Props {
  title: string;
  frequency: string;
}

function EditableContent({ frequency, title }: Props) {
  return (
    <View
      style={{
        minHeight: 84,
        width: "100%",
        padding: 16,
        borderRadius: 20,
        borderColor: "blue",
        borderWidth: 1,
        borderStyle: "dashed",
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#4E4E4E",
            fontFamily: "RalewayBold",
            fontSize: 20,
          }}
        >
          {title}
        </Text>
        <Entypo name="pencil" size={24} color="#FFB841" />
      </View>
      <Text
        style={{
          fontFamily: "Raleway",
          color: "#5641FF",
          fontSize: 16,
        }}
      >
        {frequency}
      </Text>
    </View>
  );
}
