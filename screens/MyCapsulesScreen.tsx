import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Button } from "../components";
import * as COLORS from "../constants/colors";
import * as DEFAULT_STYLES from "../constants/defaultStyles";
import { CapsulesStateT, RootStateT } from "../types";
import { genCapsulesByCategory, genNativeIoniconsName } from "../utils";
import { CapsulesContainer } from "./containers";

const MyCapsulesScreen: React.FC = () => {
  const myCapsules = useSelector<RootStateT, CapsulesStateT>(
    (state) => state.capsules
  ).filter((cap) => cap.inStock > 0);

  if (myCapsules.length === 0) {
    return (
      <SafeAreaView style={styles.noCapsulesContainer}>
        <View style={styles.noCapsulesContent}>
          <Ionicons
            name={genNativeIoniconsName("sad-sharp", Platform.OS)}
            size={60}
            color={COLORS.SECONDARY}
            style={styles.noCapsulesIcon}
          />
          <Text style={styles.noCapsulesMessage}>
            <Text style={{ fontWeight: "bold" }}>Oops!</Text> No capsules found.
          </Text>
        </View>
        <Button
          type="opacity"
          iconBaseName="add-circle-sharp"
          style={styles.addCapsuleBtn}
          onPress={() => console.log("Add your first capsule")}
        >
          Add your first capsule
        </Button>
      </SafeAreaView>
    );
  }

  return <CapsulesContainer data={genCapsulesByCategory(myCapsules)} />;
};

const styles = StyleSheet.create({
  noCapsulesContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  noCapsulesContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.OFF_WHITE,
  },
  noCapsulesIcon: {
    marginBottom: DEFAULT_STYLES.SPACING,
  },
  noCapsulesMessage: {
    fontSize: 18,
    fontStyle: "italic",
    color: COLORS.PRIMARY,
  },
  addCapsuleBtn: {
    margin: DEFAULT_STYLES.SPACING,
  },
});

export default MyCapsulesScreen;
