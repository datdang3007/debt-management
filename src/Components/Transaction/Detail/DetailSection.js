import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ColorPallette } from "../../../constants";

export const DetailSection = ({ label, value }) => (
  <View style={styles.detailContainer}>
    <Text style={styles.detailContainer.label}>{label}</Text>
    <Text style={styles.detailContainer.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    label: {
      fontSize: 12,
      color: ColorPallette.TaupeGray,
    },
    value: {
      fontSize: 14,
    },
  },
});
