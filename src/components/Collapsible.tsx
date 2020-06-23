import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface Props {
  title: string;
  open?: boolean;
  onPress?(): void;
}

export default function Collapsible({ title, open = false, onPress }: Props) {
  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={{
            height: open ? 64 : 84,
            backgroundColor: "#EFECFF",
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            borderBottomLeftRadius: open ? 0 : 28,
            borderBottomRightRadius: open ? 0 : 28,
            paddingTop: 30,
            paddingHorizontal: 16,
            opacity: open ? 1 : 0.4,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontFamily: "Raleway", fontSize: 20 }}>{title}</Text>
            <Entypo
              name={open ? "chevron-small-up" : "chevron-small-down"}
              size={24}
              color="black"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {!open && <View style={{ height: 10 }} />}
    </>
  );
}

export function CollapsibleContent({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      <View
        style={{
          minHeight: 84,
          paddingBottom: 16,
          paddingHorizontal: 20,
          backgroundColor: "#EFECFF",
          borderBottomLeftRadius: 28,
          borderBottomRightRadius: 28,
        }}
      >
        {children}
      </View>
      <View style={{ height: 10 }} />
    </>
  );
}
