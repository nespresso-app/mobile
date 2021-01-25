import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HamburgerButton } from "../../components";
import {
  DEFAULT_SCREEN_OPTIONS,
  SCREEN_NAMES,
} from "../../constants/navigation";
import {
  AllCapsulesScreen,
  CapsuleDetailsScreen,
  ManageCapsuleStorageScreen,
} from "../../screens";
import { AllCapsulesStackParamListT } from "../../types";

const AllCapsulesStack = createStackNavigator<AllCapsulesStackParamListT>();

const AllCapsulesStackNavigator = () => (
  <AllCapsulesStack.Navigator screenOptions={DEFAULT_SCREEN_OPTIONS}>
    <AllCapsulesStack.Screen
      name={SCREEN_NAMES.ALL_CAPSULES_HOME_SCREEN}
      component={AllCapsulesScreen}
      options={{
        headerTitle: "All Capsules",
        headerLeft: () => <HamburgerButton />,
      }}
    />
    <AllCapsulesStack.Screen
      name={SCREEN_NAMES.CAPSULE_DETAILS_SCREEN}
      component={CapsuleDetailsScreen}
      options={{
        headerTitle: "Capsule Details",
      }}
    />
    <AllCapsulesStack.Screen
      name={SCREEN_NAMES.MANAGE_CAPSULE_STORAGE_SCREEN}
      component={ManageCapsuleStorageScreen}
      options={{
        headerTitle: "Manage Storage",
      }}
    />
  </AllCapsulesStack.Navigator>
);

export default AllCapsulesStackNavigator;
