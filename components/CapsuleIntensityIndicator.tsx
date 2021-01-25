import * as React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import * as COLORS from "../constants/colors";
import { CapsuleIntensityT } from "../types";

const calculateColors = (intensity: number) => {
  if (intensity / 4 < 1) {
    return [COLORS.STATUS_GREEN, COLORS.PRIMARY];
  } else if (intensity / 4 < 2) {
    return [COLORS.STATUS_YELLOW, COLORS.PRIMARY];
  } else if (intensity / 4 < 3) {
    return [COLORS.STATUS_ORANGE, COLORS.PRIMARY];
  } else {
    return [COLORS.STATUS_RED, COLORS.OFF_WHITE];
  }
};

type CapsuleIntensityIndicatorPropsT = {
  intensity: CapsuleIntensityT;
  size: number;
  style?: ViewStyle;
};

const CapsuleIntensityIndicator: React.FC<CapsuleIntensityIndicatorPropsT> = (
  props
) => {
  const colors = calculateColors(props.intensity);

  return (
    <View
      style={[
        styles.container,
        { width: props.size, height: props.size, borderRadius: props.size / 2 },
        { backgroundColor: colors[0] },
        props.style,
      ]}
    >
      <Text style={[styles.intensityValue, { color: colors[1] }]}>
        {props.intensity}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  intensityValue: {
    fontWeight: "bold",
  },
});

export default CapsuleIntensityIndicator;
