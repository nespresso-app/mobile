import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HamburgerButton } from "../../components";
import {
  DEFAULT_SCREEN_OPTIONS,
  SCREEN_NAMES,
} from "../../constants/navigation";
import { MyCapsulesScreen } from "../../screens";
import { MyPurchasesStackParamListT } from "../../types";

const MyPurchasesStack = createStackNavigator<MyPurchasesStackParamListT>();

const MyPurchasesStackNavigator = () => (
  <MyPurchasesStack.Navigator screenOptions={DEFAULT_SCREEN_OPTIONS}>
    <MyPurchasesStack.Screen
      name={SCREEN_NAMES.MY_PURCHASES_HOME_SCREEN}
      component={MyCapsulesScreen}
      options={{
        headerTitle: "My Purchases",
        headerLeft: () => <HamburgerButton />,
      }}
    />
  </MyPurchasesStack.Navigator>
);

export default MyPurchasesStackNavigator;
