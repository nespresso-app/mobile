import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import * as COLORS from "../constants/colors";
import * as DEFAULT_STYLES from "../constants/defaultStyles";
import { SCREEN_NAMES } from "../constants/navigation";
import { CapsuleT } from "../types";
import CapsuleCupSizesIndicator from "./CapsuleCupSizesIndicator";
import CapsuleIntensityIndicator from "./CapsuleIntensityIndicator";
import CapsuleThumbnail from "./CapsuleThumbnail";

type CapsuleCardPropsT = {
  data: CapsuleT;
  style?: ViewStyle;
};

const CapsuleCard: React.FC<CapsuleCardPropsT> = (props) => {
  const navigation = useNavigation();

  const capsule = props.data;

  return (
    <TouchableHighlight
      underlayColor={capsule.color}
      style={[styles.touchable, props.style]}
      onPress={() => {
        navigation.navigate(SCREEN_NAMES.CAPSULE_DETAILS_SCREEN, {
          capsuleId: capsule.id,
        });
      }}
    >
      <View style={styles.cardContainer}>
        <CapsuleThumbnail
          thumbnailUrl={capsule.thumbnailUrl}
          bgColor={capsule.color}
          containerStyle={styles.thumbnailContainer}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {capsule.name}
            </Text>
            <Text numberOfLines={2} ellipsizeMode="tail">
              {capsule.description}
            </Text>
          </View>
        </View>
        <View style={styles.propsContainer}>
          <CapsuleIntensityIndicator
            intensity={capsule.intensity}
            size={32}
            style={styles.prop}
          />
          <CapsuleCupSizesIndicator
            cupSizes={capsule.cupSizes}
            size={20}
            style={styles.prop}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: DEFAULT_STYLES.BORDER_RADIUS,
  },
  cardContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: DEFAULT_STYLES.BORDER_RADIUS,
    backgroundColor: "white",
    padding: DEFAULT_STYLES.CAPSULE_CARD_INNER_SPACING,
  },
  thumbnailContainer: {
    marginRight: DEFAULT_STYLES.CAPSULE_CARD_INNER_SPACING,
  },
  infoContainer: {
    flexDirection: "row",
    flex: 1,
  },
  infoTextContainer: {
    flex: 1,
    marginRight: DEFAULT_STYLES.CAPSULE_CARD_INNER_SPACING * 1.3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.SECONDARY,
  },
  propsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  prop: {
    marginRight: DEFAULT_STYLES.CAPSULE_CARD_INNER_SPACING * 1.3,
  },
});

export default CapsuleCard;
