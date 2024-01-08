import React from "react";
import { StyleSheet, View } from "react-native";
import { ColorPallette } from "../../../constants";
import { ButtonCommon } from "../../Button";
import { InputTextField } from "../../Form";

export const DebtorSearch = ({ onPressAddNew }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputTextField placeholder="Tìm kiếm" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 12,
  },
});
