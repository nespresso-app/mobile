import * as React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import * as COLORS from "../constants/colors";
import * as DEFAULT_STYLES from "../constants/defaultStyles";

type CapsuleThumbnailPropsT = {
  thumbnailUrl: string;
  bgColor?: string;
  containerStyle?: ViewStyle;
};

const CapsuleThumbnail: React.FC<CapsuleThumbnailPropsT> = (props) => {
  const [imageIsLoading, setImageIsLoading] = React.useState(true);

  return (
    <View
      style={[
        styles.imageContainer,
        { backgroundColor: props.bgColor || COLORS.OFF_WHITE },
        props.containerStyle,
      ]}
    >
      {imageIsLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={COLORS.OFF_WHITE} />
        </View>
      )}
      <Image
        source={{ uri: props.thumbnailUrl }}
        style={styles.image}
        onLoadEnd={() => setImageIsLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: DEFAULT_STYLES.CAPSULE_THUMBNAIL_SIZE,
    width: DEFAULT_STYLES.CAPSULE_THUMBNAIL_SIZE,
    borderRadius: DEFAULT_STYLES.CAPSULE_THUMBNAIL_SIZE / 2,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "72%",
    width: "72%",
  },
});

export default CapsuleThumbnail;
