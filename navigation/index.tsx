import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Drawer from "./Drawer";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default RootNavigator;
