import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useSelector } from "react-redux";
import { MultipleNativeHeaderButtons } from "../components";
import { CapsulesStateT, RootStateT } from "../types";
import { genCapsulesByCategory } from "../utils";
import { CapsulesContainer } from "./containers";

const AllCapsulesScreen: React.FC = () => {
  const allCapsules = useSelector<RootStateT, CapsulesStateT>(
    (state) => state.capsules
  );

  const navigation = useNavigation();

  useFocusEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MultipleNativeHeaderButtons
          items={[
            {
              title: "Help",
              iconBaseName: "help-circle-outline",
              onPress: () => console.log("Help"),
            },
            {
              title: "Filters",
              iconBaseName: "filter",
              onPress: () => console.log("Filters"),
            },
          ]}
        />
      ),
    });
  });

  return <CapsulesContainer data={genCapsulesByCategory(allCapsules)} />;
};

export default AllCapsulesScreen;
