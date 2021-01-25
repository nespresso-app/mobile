import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import * as COLORS from "../constants/colors";
import * as DEFAULT_STYLES from "../constants/defaultStyles";
import { genNativeIoniconsName } from "../utils";

type ButtonPropsT = {
  type: "highlight" | "opacity";
  onPress: () => void;
  children?: string;
  iconBaseName?: string;

  bgColor?: string;
  labelColor?: string;

  style?: ViewStyle;
  labelStyle?: TextStyle;

  disabled?: boolean;
  disabledBgColor?: string;
  disabledLabelColor?: string;

  activeOpacity?: number;

  /* "highlight"-typed only */
  underlayColor?: string;
};

const Button: React.FC<ButtonPropsT> = (props) => {
  const Touchable =
    props.type === "highlight" ? TouchableHighlight : TouchableOpacity;

  let bgColor = COLORS.PRIMARY;
  if (props.disabled && props.disabledBgColor) {
    bgColor = props.disabledBgColor;
  } else if (props.bgColor) {
    bgColor = props.bgColor;
  }

  let labelColor = COLORS.OFF_WHITE;
  if (props.disabled && props.disabledLabelColor) {
    labelColor = props.disabledLabelColor;
  } else if (props.labelColor) {
    labelColor = props.labelColor;
  }

  return (
    <Touchable
      onPress={props.onPress}
      style={[styles.touchable, { backgroundColor: bgColor }, props.style]}
      disabled={props.disabled}
      activeOpacity={props.activeOpacity || 0.8}
      underlayColor={
        props.type === "highlight" ? props.underlayColor : undefined
      }
    >
      <>
        {props.iconBaseName && (
          <Ionicons
            name={genNativeIoniconsName(props.iconBaseName, Platform.OS)}
            size={20}
            color={labelColor}
            style={
              props.children && props.children.length > 0 ? styles.icon : {}
            }
          />
        )}
        <Text style={[styles.label, { color: labelColor }, props.labelStyle]}>
          {props.children}
        </Text>
      </>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flexDirection: "row",
    padding: DEFAULT_STYLES.SPACING,
    borderRadius: DEFAULT_STYLES.BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 5,
  },
});

export default Button;
