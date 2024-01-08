import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { ColorPallette } from "../../constants";

export const HeaderNewDebt = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Lưu</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 14,
    color: ColorPallette.Primary,
  },
});
