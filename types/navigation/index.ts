import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

/* SCREENS CONFIG */
// Screen names
export type ScreenNamesT = {
  MY_CAPSULES_STACK: "MY_CAPSULES_STACK";
  ALL_CAPSULES_STACK: "ALL_CAPSULES_STACK";
  MY_PURCHASES_STACK: "MY_PURCHASES_STACK";
  MY_CAPSULES_HOME_SCREEN: "MY_CAPSULES_HOME_SCREEN";
  ALL_CAPSULES_HOME_SCREEN: "ALL_CAPSULES_HOME_SCREEN";
  MY_PURCHASES_HOME_SCREEN: "MY_PURCHASES_HOME_SCREEN";
  CAPSULE_DETAILS_SCREEN: "CAPSULE_DETAILS_SCREEN";
  MANAGE_CAPSULE_STORAGE_SCREEN: "MANAGE_CAPSULE_STORAGE_SCREEN";
};
// Screen names to labels
export type ScreenNamesToLabelsT = {
  MY_CAPSULES_STACK: "My Capsules";
  ALL_CAPSULES_STACK: "All Capsules";
  MY_PURCHASES_STACK: "My Purchases";
};

/* PARAM LISTS */
// Stack param lists
export type MyCapsulesStackParamListT = {
  MY_CAPSULES_HOME_SCREEN: undefined;
  CAPSULE_DETAILS_SCREEN: { capsuleId: string };
  MANAGE_CAPSULE_STORAGE_SCREEN: { capsuleId: string };
};
export type AllCapsulesStackParamListT = {
  ALL_CAPSULES_HOME_SCREEN: undefined;
  CAPSULE_DETAILS_SCREEN: { capsuleId: string };
  MANAGE_CAPSULE_STORAGE_SCREEN: { capsuleId: string };
};
export type MyPurchasesStackParamListT = {
  MY_PURCHASES_HOME_SCREEN: undefined;
  CAPSULE_DETAILS_SCREEN: { capsuleId: string };
};
// Drawer param list
export type DrawerParamListT = {
  MY_CAPSULES_STACK: NavigatorScreenParams<MyCapsulesStackParamListT>;
  ALL_CAPSULES_STACK: NavigatorScreenParams<AllCapsulesStackParamListT>;
  MY_PURCHASES_STACK: NavigatorScreenParams<MyPurchasesStackParamListT>;
};

/* NAVIGATION PROPS */
// Drawer+Stack constructor
type DrawerStackNavigationProp<
  T extends
    | MyCapsulesStackParamListT
    | AllCapsulesStackParamListT
    | MyPurchasesStackParamListT
> = CompositeNavigationProp<DrawerNavigationProp<T>, StackNavigationProp<T>>;
// Drawer+Stack navigation props
export type MyCapsulesNavigationPropT = DrawerStackNavigationProp<MyCapsulesStackParamListT>;
export type AllCapsulesNavigationPropT = DrawerStackNavigationProp<AllCapsulesStackParamListT>;
export type MyPurchasesNavigationPropT = DrawerStackNavigationProp<MyPurchasesStackParamListT>;
export type CapsulesDetailsScreenNavigationPropT = CompositeNavigationProp<
  StackNavigationProp<MyCapsulesStackParamListT>,
  StackNavigationProp<AllCapsulesStackParamListT>
>;
export type ManageCapsuleStorageScreenNavigationPropT = CompositeNavigationProp<
  StackNavigationProp<MyCapsulesStackParamListT>,
  StackNavigationProp<AllCapsulesStackParamListT>
>;
// All Drawer+Stack navigation props
export type AllStacksNavigationPropT =
  | MyCapsulesNavigationPropT
  | AllCapsulesNavigationPropT
  | MyPurchasesNavigationPropT;

/* ROUTE PROPS */
export type CapsuleDetailsScreenRoutePropT = RouteProp<
  MyCapsulesStackParamListT | AllCapsulesStackParamListT,
  "CAPSULE_DETAILS_SCREEN"
>;
export type ManageCapsuleStorageScreenRoutePropT = RouteProp<
  MyCapsulesStackParamListT | AllCapsulesStackParamListT,
  "MANAGE_CAPSULE_STORAGE_SCREEN"
>;
