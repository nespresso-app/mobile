import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import * as React from "react";
import {
  Alert,
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, NativeHeaderButton } from "../components";
import * as COLORS from "../constants/colors";
import * as DEFAULT_STYLES from "../constants/defaultStyles";
import { updateCapsuleStorage } from "../store/actions/capsules";
import {
  CapsulesStateT,
  ManageCapsuleStorageScreenNavigationPropT,
  ManageCapsuleStorageScreenRoutePropT,
  RootStateT,
} from "../types";

const ManageCapsuleStorageScreen: React.FC = () => {
  const [isEnteringCustomAmount, setIsEnteringCustomAmount] = React.useState(
    false
  );
  const [customAmount, setCustomAmount] = React.useState("");

  const textInputRef = React.useRef() as React.RefObject<TextInput> | null;

  const navigation = useNavigation<ManageCapsuleStorageScreenNavigationPropT>();
  const route = useRoute<ManageCapsuleStorageScreenRoutePropT>();

  const dispatch = useDispatch();

  const capsule = useSelector<RootStateT, CapsulesStateT>(
    (state) => state.capsules
  ).filter((caps) => caps.id === route.params.capsuleId)[0];

  const handleAddOne = () =>
    dispatch(updateCapsuleStorage(capsule.id, capsule.inStock + 1));

  const handleRemoveOne = () =>
    capsule.inStock > 0 &&
    dispatch(updateCapsuleStorage(capsule.id, capsule.inStock - 1));

  const handleConfirmCustomAmount = () => {
    if (customAmount.length === 0) {
      return setIsEnteringCustomAmount(false);
    }
    dispatch(updateCapsuleStorage(capsule.id, +customAmount));
    setIsEnteringCustomAmount(false);
    setCustomAmount("");
  };

  const handleClearStock = () => {
    Alert.alert(
      "Clear Stock?",
      `Are you sure you want to clear your entire stock of ${capsule.name} capsules? This action is permanent.`,
      [
        {
          text: "Yes, clear the stock",
          onPress: () => dispatch(updateCapsuleStorage(capsule.id, 0)),
          style: "destructive",
        },
        { text: "No, take me back" },
      ]
    );
  };

  useFocusEffect(() => {
    navigation.setOptions({
      headerTitle: `Stock of "${capsule.name}"`,
      headerStyle: { backgroundColor: capsule.color },
      headerBackTitle: "Details",
      headerRight: () =>
        capsule.inStock > 0 && (
          <NativeHeaderButton
            title="Clear Stock"
            iconBaseName="close-circle-sharp"
            onPress={handleClearStock}
          />
        ),
    });
  });

  React.useEffect(() => {
    if (textInputRef && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [isEnteringCustomAmount]);

  return (
    <Pressable onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.inStockContainer}>
            <Text style={styles.inStockLabel}>In stock:</Text>
            <Text style={styles.inStockValue}>{capsule.inStock}</Text>
          </View>
          <View style={styles.btnsContainer}>
            <Button
              type="opacity"
              style={styles.rightMargined}
              onPress={
                isEnteringCustomAmount
                  ? () => setIsEnteringCustomAmount(false)
                  : handleRemoveOne
              }
              iconBaseName={
                isEnteringCustomAmount
                  ? "arrow-back-sharp"
                  : "remove-circle-sharp"
              }
              bgColor={isEnteringCustomAmount ? COLORS.SECONDARY : COLORS.RED}
              disabledBgColor={"#ccc"}
              disabled={!isEnteringCustomAmount && capsule.inStock === 0}
            />
            {isEnteringCustomAmount ? (
              <>
                <View style={[styles.inputContainer, styles.rightMargined]}>
                  <TextInput
                    ref={textInputRef}
                    placeholder="Enter custom amount..."
                    placeholderTextColor={COLORS.SECONDARY}
                    value={customAmount}
                    onChangeText={setCustomAmount}
                    style={styles.input}
                    keyboardType="number-pad"
                  />
                </View>
                <Button
                  type="opacity"
                  onPress={handleConfirmCustomAmount}
                  bgColor={COLORS.STATUS_GREEN}
                  iconBaseName="checkmark-circle-sharp"
                />
              </>
            ) : (
              <>
                <Button
                  type="opacity"
                  style={styles.rightMargined}
                  onPress={handleAddOne}
                  iconBaseName="add-circle-sharp"
                />
                <Button
                  type="opacity"
                  style={styles.customAmountBtn}
                  onPress={() => setIsEnteringCustomAmount(true)}
                  bgColor={COLORS.SECONDARY}
                >
                  Custom Amount
                </Button>
              </>
            )}
          </View>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    minHeight: "100%",
  },
  container: {
    padding: DEFAULT_STYLES.SPACING,
  },
  inStockContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "white",
    padding: DEFAULT_STYLES.CAPSULE_CARD_INNER_SPACING,
    marginVertical: DEFAULT_STYLES.SPACING,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 3 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },
  inStockLabel: {
    fontSize: 18,
  },
  inStockValue: {
    fontSize: 25,
    fontWeight: "bold",
  },
  btnsContainer: {
    marginTop: DEFAULT_STYLES.SPACING / 2,
    flexDirection: "row",
  },
  customAmountBtn: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.SECONDARY,
    borderRadius: DEFAULT_STYLES.BORDER_RADIUS,
    backgroundColor: COLORS.OFF_WHITE,
  },
  input: {
    flex: 1,
    paddingHorizontal: DEFAULT_STYLES.SPACING,
    fontSize: 18,
  },
  rightMargined: {
    marginRight: DEFAULT_STYLES.SPACING * 0.4,
  },
});

export default ManageCapsuleStorageScreen;
