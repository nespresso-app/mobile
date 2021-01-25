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
import { Button, NativeHeaderButton } from "../components";
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
      <View style={styles.content}>
        <ScrollView>
          <Text>Info...</Text>
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
  content: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  manageStorageBtn: {
    margin: DEFAULT_STYLES.SPACING,
  },
});

export default CapsuleDetailsScreen;
