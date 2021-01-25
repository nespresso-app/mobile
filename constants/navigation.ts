import { StyleSheet } from "react-native";
import * as COLORS from "./colors";
import { ScreenNamesT } from "../types";

export const SCREEN_NAMES: ScreenNamesT = {
  MY_CAPSULES_STACK: "MY_CAPSULES_STACK",
  ALL_CAPSULES_STACK: "ALL_CAPSULES_STACK",
  MY_PURCHASES_STACK: "MY_PURCHASES_STACK",
  MY_CAPSULES_HOME_SCREEN: "MY_CAPSULES_HOME_SCREEN",
  ALL_CAPSULES_HOME_SCREEN: "ALL_CAPSULES_HOME_SCREEN",
  MY_PURCHASES_HOME_SCREEN: "MY_PURCHASES_HOME_SCREEN",
  CAPSULE_DETAILS_SCREEN: "CAPSULE_DETAILS_SCREEN",
  MANAGE_CAPSULE_STORAGE_SCREEN: "MANAGE_CAPSULE_STORAGE_SCREEN",
};

const styles = StyleSheet.create({
  stacksScreenHeader: {
    backgroundColor: COLORS.PRIMARY,
  },
  stacksScreenHeaderBackTitle: {
    color: COLORS.OFF_WHITE,
  },
  drawer: {
    backgroundColor: COLORS.PRIMARY,
  },
});

export const DEFAULT_SCREEN_OPTIONS = {
  headerStyle: styles.stacksScreenHeader,
  headerTintColor: COLORS.OFF_WHITE,
  headerBackTitleStyle: styles.stacksScreenHeaderBackTitle,
};

export const DEFAULT_HAMBURGER_BUTTON_COLOR = COLORS.OFF_WHITE;

export const DEFAULT_DRAWER_STYLE = styles.drawer;

export const DEFAULT_DRAWER_CONTENT_OPTIONS = {
  activeTintColor: "black",
  activeBackgroundColor: COLORS.OFF_WHITE,
  inactiveTintColor: COLORS.TERTIARY,
};
