import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import * as COLORS from "../../constants/colors";
import { SCREEN_NAMES } from "../../constants/navigation";
import { ScreenNamesToLabelsT } from "../../types";

const SCREEN_NAMES_TO_LABELS: ScreenNamesToLabelsT = {
  [SCREEN_NAMES.MY_CAPSULES_STACK]: "My Capsules",
  [SCREEN_NAMES.ALL_CAPSULES_STACK]: "All Capsules",
  [SCREEN_NAMES.MY_PURCHASES_STACK]: "My Purchases",
};

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const [currScreen, setCurrScreen] = React.useState(
    Object.values(SCREEN_NAMES)[0]
  );

  const renderDrawerItems = React.useCallback(
    (...screenNames) =>
      screenNames.map((screenName: keyof ScreenNamesToLabelsT) => {
        const navigateAndUpdateState = () => {
          props.navigation.navigate(screenName);
          setCurrScreen(screenName);
        };

        return (
          <DrawerItem
            key={screenName}
            {...props}
            label={SCREEN_NAMES_TO_LABELS[screenName]}
            onPress={navigateAndUpdateState}
            focused={currScreen === screenName}
          />
        );
      }),
    [props.navigation, currScreen]
  );

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      {renderDrawerItems(
        SCREEN_NAMES.MY_CAPSULES_STACK,
        SCREEN_NAMES.ALL_CAPSULES_STACK
      )}
      <View style={styles.separator} />
      {renderDrawerItems(SCREEN_NAMES.MY_PURCHASES_STACK)}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "90%",
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.SECONDARY,
    marginVertical: 10,
  },
});

export default DrawerContent;
