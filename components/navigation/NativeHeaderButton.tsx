import * as React from "react";
import MultipleNativeHeaderButtons, {
  NativeHeaderItemT,
  NativeHeaderButtonsContainerPropsT,
} from "./MultipleNativeHeaderButtons";

interface NativeHeaderButtonPropsT
  extends NativeHeaderItemT,
    NativeHeaderButtonsContainerPropsT {}

const NativeHeaderButton: React.FC<NativeHeaderButtonPropsT> = (props) => (
  <MultipleNativeHeaderButtons
    items={[
      {
        title: props.title,
        iconBaseName: props.iconBaseName,
        onPress: props.onPress,
        iconColor: props.iconColor,
      },
    ]}
    alignment={props.alignment}
  />
);

export default NativeHeaderButton;
