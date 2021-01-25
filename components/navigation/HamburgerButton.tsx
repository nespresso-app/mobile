import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { AllStacksNavigationPropT } from "../../types";
import NativeHeaderButton from "./NativeHeaderButton";

const HamburgerButton: React.FC = () => {
  const navigation = useNavigation<AllStacksNavigationPropT>();

  return (
    <NativeHeaderButton
      title="Drawer"
      iconBaseName="menu-sharp"
      onPress={navigation.openDrawer}
      alignment="left"
    />
  );
};

export default HamburgerButton;
