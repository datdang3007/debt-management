import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { InputTextField } from "../../Components";
import { Language } from "../../constants";

export const NewDebtor = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InputTextField label={Language.NewDebt.Fields.Name} />
      <InputTextField label={Language.NewDebt.Fields.PhoneNumber} />
      <InputTextField label={Language.NewDebt.Fields.Address} />
      <InputTextField label={Language.NewDebt.Fields.Email} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: "calc(100vh - 150px)",
    marginHorizontal: 12,
    marginTop: 12,
    gap: 12,
  },
});
