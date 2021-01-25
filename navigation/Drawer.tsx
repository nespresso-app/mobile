import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { DrawerContent } from "../components";
import {
  DEFAULT_DRAWER_CONTENT_OPTIONS,
  DEFAULT_DRAWER_STYLE,
  SCREEN_NAMES,
} from "../constants/navigation";
import { DrawerParamListT } from "../types";
import * as Stacks from "./stacks";

const Drawer = createDrawerNavigator<DrawerParamListT>();

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    drawerStyle={DEFAULT_DRAWER_STYLE}
    drawerContentOptions={DEFAULT_DRAWER_CONTENT_OPTIONS}
  >
    <Drawer.Screen
      name={SCREEN_NAMES.MY_CAPSULES_STACK}
      component={Stacks.MyCapsulesStack}
    />
    <Drawer.Screen
      name={SCREEN_NAMES.ALL_CAPSULES_STACK}
      component={Stacks.AllCapsulesStack}
    />
    <Drawer.Screen
      name={SCREEN_NAMES.MY_PURCHASES_STACK}
      component={Stacks.MyPurchasesStack}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
