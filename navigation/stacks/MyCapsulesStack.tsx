import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HamburgerButton, NativeHeaderButton } from "../../components";
import {
  DEFAULT_SCREEN_OPTIONS,
  SCREEN_NAMES,
} from "../../constants/navigation";
import {
  CapsuleDetailsScreen,
  ManageCapsuleStorageScreen,
  MyCapsulesScreen,
} from "../../screens";
import { MyCapsulesStackParamListT } from "../../types";

const MyCapsulesStack = createStackNavigator<MyCapsulesStackParamListT>();

const MyCapsulesStackNavigator = () => (
  <MyCapsulesStack.Navigator screenOptions={DEFAULT_SCREEN_OPTIONS}>
    <MyCapsulesStack.Screen
      name={SCREEN_NAMES.MY_CAPSULES_HOME_SCREEN}
      component={MyCapsulesScreen}
      options={{
        headerTitle: "My Capsules",
        headerLeft: () => <HamburgerButton />,
        headerRight: () => (
          <NativeHeaderButton
            title="Add Capsule"
            iconBaseName="add-circle-sharp"
            onPress={() => console.log("Add Capsule")}
          />
        ),
      }}
    />
    <MyCapsulesStack.Screen
      name={SCREEN_NAMES.CAPSULE_DETAILS_SCREEN}
      component={CapsuleDetailsScreen}
      options={{
        headerTitle: "Capsule Details",
      }}
    />
    <MyCapsulesStack.Screen
      name={SCREEN_NAMES.MANAGE_CAPSULE_STORAGE_SCREEN}
      component={ManageCapsuleStorageScreen}
      options={{
        headerTitle: "Manage Storage",
      }}
    />
  </MyCapsulesStack.Navigator>
);

export default MyCapsulesStackNavigator;
