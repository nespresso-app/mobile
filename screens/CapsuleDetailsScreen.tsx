import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import * as React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  CapsuleCupSizesIndicator,
  CapsuleIntensityIndicator,
  NativeHeaderButton,
} from "../components";
import * as COLORS from "../constants/colors";
import * as DEFAULT_STYLES from "../constants/defaultStyles";
import { SCREEN_NAMES } from "../constants/navigation";
import { toggleFavorite } from "../store/actions/capsules";
import {
  CapsuleDetailsScreenRoutePropT,
  CapsulesDetailsScreenNavigationPropT,
  CapsulesStateT,
  RootStateT,
} from "../types";

const CapsuleDetailsScreen: React.FC = () => {
  const [headerReady, setHeaderReady] = React.useState(false);

  const navigation = useNavigation<CapsulesDetailsScreenNavigationPropT>();
  const route = useRoute<CapsuleDetailsScreenRoutePropT>();

  const dispatch = useDispatch();

  const capsule = useSelector<RootStateT, CapsulesStateT>(
    (state) => state.capsules
  ).filter((caps) => caps.id === route.params.capsuleId)[0];

  useFocusEffect(() => {
    navigation.setOptions({
      headerTitle: capsule.name,
      headerStyle: { backgroundColor: capsule.color },
      headerRight: () => (
        <NativeHeaderButton
          title="Favorite"
          iconBaseName={capsule.isFavorite ? "heart" : "heart-outline"}
          onPress={() => dispatch(toggleFavorite(capsule.id))}
        />
      ),
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: capsule.headerUrl }}
        style={styles.headerContainer}
        onLoad={() => setHeaderReady(true)}
      >
        <View
          style={[
            styles.headerContentContainer,
            headerReady ? {} : { backgroundColor: capsule.color },
          ]}
        >
          <Text
            style={[
              styles.category,
              { color: headerReady ? capsule.color : COLORS.OFF_WHITE },
            ]}
          >
            {capsule.category}
          </Text>
          <Text
            style={[
              styles.name,
              { color: headerReady ? capsule.color : COLORS.OFF_WHITE },
            ]}
          >
            {capsule.name}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <ScrollView style={styles.content}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{capsule.description}</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoTitles}>
              <View style={styles.infoTitleContainer}>
                <Text style={styles.infoTitle}>Intensity</Text>
              </View>
              <View style={styles.infoTitleContainer}>
                <Text style={styles.infoTitle}>Cup sizes</Text>
              </View>
              <View style={styles.infoTitleContainer}>
                <Text style={styles.infoTitle}>Price</Text>
              </View>
            </View>
            <View style={styles.infoDataContainer}>
              <View style={styles.infoData}>
                <CapsuleIntensityIndicator
                  intensity={capsule.intensity}
                  size={32}
                />
              </View>
              <View style={styles.infoData}>
                <CapsuleCupSizesIndicator
                  cupSizes={capsule.cupSizes}
                  size={20}
                />
              </View>
              <View style={styles.infoData}>
                <Text style={styles.priceText}>
                  R$ {capsule.price.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Button
        type="opacity"
        style={styles.manageStorageBtn}
        bgColor={capsule.color}
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.MANAGE_CAPSULE_STORAGE_SCREEN, {
            capsuleId: capsule.id,
          })
        }
      >
        Manage Storage
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    width: "100%",
    height: 200,
  },
  headerContentContainer: {
    height: "100%",
    justifyContent: "flex-end",
    padding: DEFAULT_STYLES.SPACING,
  },
  category: {
    fontStyle: "italic",
    fontSize: 16,
  },
  name: {
    fontWeight: "bold",
    fontSize: 40,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: COLORS.OFF_WHITE,
  },
  content: {
    padding: DEFAULT_STYLES.SPACING,
  },
  descriptionContainer: {
    marginBottom: DEFAULT_STYLES.SPACING,
    borderBottomWidth: 1,
    paddingBottom: DEFAULT_STYLES.SPACING * 0.2,
  },
  description: {
    fontSize: 16,
    fontStyle: "italic",
  },
  infoContainer: {
    backgroundColor: "white",
    marginVertical: DEFAULT_STYLES.SPACING,
    padding: DEFAULT_STYLES.SPACING,
    borderRadius: DEFAULT_STYLES.BORDER_RADIUS,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 3 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },
  infoTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: DEFAULT_STYLES.SPACING * 0.5,
  },
  infoTitleContainer: {
    flex: 1,
  },
  infoTitle: {
    color: COLORS.SECONDARY,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoData: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  priceText: {
    fontSize: 18,
  },
  manageStorageBtn: {
    margin: DEFAULT_STYLES.SPACING,
  },
});

export default CapsuleDetailsScreen;
