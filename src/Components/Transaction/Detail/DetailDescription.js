import React from "react";
import { Animated, ScrollView, StyleSheet, Text, View } from "react-native";
import { ColorPallette } from "../../../constants";

export const DetailDescription = ({ description, animatedHeight }) => (
  <Animated.View
    style={{ ...styles.descriptionContainer, height: animatedHeight }}
  >
    <Text style={styles.descriptionContainer.label}>Ghi chú</Text>
    <View style={styles.descriptionContainer.scrollViewContainer}>
      <ScrollView style={styles.descriptionContainer.scrollView}>
        <Text style={styles.descriptionContainer.description}>
          {description}
        </Text>
      </ScrollView>
    </View>
  </Animated.View>
);

const styles = StyleSheet.create({
  descriptionContainer: {
    height: 0,
    gap: 8,
    overflow: "hidden",
    label: {
      fontSize: 12,
      color: ColorPallette.TaupeGray,
    },
    scrollViewContainer: {
      height: 160,
      paddingVertical: 8,
      borderRadius: 4,
      backgroundColor: ColorPallette.LightGray,
    },
    scrollView: {
      height: 160,
      borderRadius: 4,
      paddingHorizontal: 8,
      backgroundColor: ColorPallette.LightGray,
    },
    description: {
      fontSize: 14,
      color: ColorPallette.DarkCharcoal,
    },
  },
});
