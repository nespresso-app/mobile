import * as React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import * as COLORS from "../constants/colors";
import { CapsuleCupSizeT } from "../types";

type CapsuleCupSizesIndicatorPropsT = {
  cupSizes: CapsuleCupSizeT[];
  size: number;
  style?: ViewStyle;
};

const CapsuleCupSizesIndicator: React.FC<CapsuleCupSizesIndicatorPropsT> = (
  props
) => {
  return (
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.rightMargined,
          {
            width: props.size * 0.6,
            height: props.size * 0.6,
            borderRadius: (props.size * 0.6) / 2,
            backgroundColor: props.cupSizes.includes("sm")
              ? COLORS.SECONDARY
              : "#ccc",
          },
        ]}
      />
      <View
        style={[
          styles.rightMargined,
          {
            width: props.size * 0.8,
            height: props.size * 0.8,
            borderRadius: (props.size * 0.8) / 2,
            backgroundColor: props.cupSizes.includes("md")
              ? COLORS.SECONDARY
              : "#ccc",
          },
        ]}
      />
      <View
        style={[
          {
            width: props.size,
            height: props.size,
            borderRadius: props.size / 2,
            backgroundColor: props.cupSizes.includes("lg")
              ? COLORS.SECONDARY
              : "#ccc",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightMargined: {
    marginRight: 4,
  },
});

export default CapsuleCupSizesIndicator;
