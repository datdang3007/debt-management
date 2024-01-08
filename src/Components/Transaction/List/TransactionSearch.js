import React from "react";
import { StyleSheet, View } from "react-native";
import { InputTextField } from "../../Form";

export const TransactionSearch = ({ control }) => {
  return (
    <View style={styles.container}>
      <InputTextField name="search" control={control} placeholder="Tìm kiếm" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});
