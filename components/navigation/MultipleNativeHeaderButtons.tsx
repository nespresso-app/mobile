import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { Platform } from "react-native";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import * as COLORS from "../../constants/colors";
import { genNativeIoniconsName } from "../../utils";

export interface NativeHeaderItemT {
  title: string;
  iconBaseName: string;
  onPress: () => void;
  iconColor?: string;
}

export interface NativeHeaderButtonsContainerPropsT {
  alignment?: "left" | "right";
}

interface MultipleNativeHeaderButtonsPropsT
  extends NativeHeaderButtonsContainerPropsT {
  items: NativeHeaderItemT[];
}

const MultipleNativeHeaderButtons: React.FC<MultipleNativeHeaderButtonsPropsT> = (
  props
) => (
  <HeaderButtons
    HeaderButtonComponent={(hbcProps) => (
      <HeaderButton IconComponent={Ionicons} iconSize={24} {...hbcProps} />
    )}
    left={props.alignment === "left"}
  >
    {props.items.map((headerButton) => (
      <Item
        key={headerButton.title}
        title={headerButton.title}
        iconName={genNativeIoniconsName(headerButton.iconBaseName, Platform.OS)}
        color={headerButton.iconColor || COLORS.OFF_WHITE}
        onPress={headerButton.onPress}
      />
    ))}
  </HeaderButtons>
);

export default MultipleNativeHeaderButtons;
