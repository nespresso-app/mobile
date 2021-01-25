import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CapsuleCard } from "../../components";
import * as COLORS from "../../constants/colors";
import * as DEFAULT_STYLES from "../../constants/defaultStyles";
import { CapsuleT } from "../../types";

type CapsulesContainerPropsT = {
  data: {
    [category: string]: CapsuleT[];
  };
};

const CapsulesContainer: React.FC<CapsulesContainerPropsT> = (props) => {
  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: DEFAULT_STYLES.SPACING }}
      >
        {Object.entries(props.data).map(([category, capsuleData]) => {
          return (
            <View key={category} style={styles.capsuleCategory}>
              <View style={styles.categoryTitleContainer}>
                <Text style={styles.categoryTitle}>{category}</Text>
              </View>
              {capsuleData.map((data) => (
                <CapsuleCard
                  key={data.id}
                  data={data}
                  style={styles.capsuleCard}
                />
              ))}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: DEFAULT_STYLES.SPACING,
    paddingTop: DEFAULT_STYLES.SPACING * 0.6 + DEFAULT_STYLES.SPACING,
    minHeight: "100%",
  },
  capsuleCategory: {
    marginBottom: DEFAULT_STYLES.SPACING,
  },
  categoryTitleContainer: {
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginBottom: DEFAULT_STYLES.SPACING * 0.8,
  },
  categoryTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.PRIMARY,
  },
  capsuleCard: {
    marginBottom: DEFAULT_STYLES.SPACING * 0.6,
  },
});

export default CapsulesContainer;
