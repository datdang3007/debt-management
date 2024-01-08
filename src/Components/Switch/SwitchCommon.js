import React from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

export const SwitchCommon = ({ label, value, onChange }) => {
  return (
    <View style={styles.container}>
      <Switch value={value} onChange={onChange} />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 11,
  },
});
