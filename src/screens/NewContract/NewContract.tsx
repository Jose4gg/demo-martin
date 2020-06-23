import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import { Header, Collapsible, CollapsibleContent } from "../../components";
import Accordion from "react-native-collapsible/Accordion";
import Overview from "./components/Overview";
import Actions from "./components/Actions";

export default function NewContract() {
  const [active, setActive] = useState<number[]>([0]);
  const sections = [
    "1. Overview",
    "2. Actions",
    "3. Stakes",
    "4. Accountability partner",
    "5. Social Sharing",
  ];

  const renderSectionTitle = useCallback(
    (section: string) => {
      const isActive = active.includes(sections.indexOf(section));
      return (
        <Collapsible
          title={section}
          open={isActive}
          onPress={() => setActive([sections.indexOf(section)])}
        />
      );
    },
    [active]
  );

  const renderContent = useCallback((section: string) => {
    if (section === sections[0]) {
      return <Overview />;
    }

    if (section === sections[1]) {
      return <Actions />;
    }

    return <Overview />;
  }, []);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>New Contract</Text>
        <Accordion
          touchableComponent={TouchableWithoutFeedback}
          sections={sections}
          activeSections={active}
          renderHeader={renderSectionTitle}
          renderContent={renderContent}
          onChange={setActive}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Raleway",
    textAlign: "center",
    fontSize: 38,
    paddingBottom: 10,
  },
});
