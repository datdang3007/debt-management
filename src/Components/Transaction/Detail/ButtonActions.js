import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ColorPallette } from "../../../constants";

const CustomButton = ({ bgColor, iconName, label }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        ...styles.buttonActionsContainer.button,
      }}
    >
      <MaterialCommunityIcons
        name={iconName}
        color={ColorPallette.White}
        size={25}
      />
      <Text style={styles.buttonActionsContainer.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export const ButtonActions = () => {
  return (
    <View style={styles.buttonActionsContainer}>
      {/* Button Pay */}
      <CustomButton
        label="Thêm GD"
        iconName="currency-usd"
        bgColor={ColorPallette.Success}
      />

      {/* Button Edit */}
      <CustomButton
        label="Sửa"
        iconName="pencil"
        bgColor={ColorPallette.Purple}
      />

      {/* Button Delete */}
      <CustomButton
        label="Xóa"
        iconName="delete"
        bgColor={ColorPallette.Error}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonActionsContainer: {
    gap: 12,
    marginTop: 18,
    flexDirection: "row",
    paddingHorizontal: 12,
    button: {
      flex: 1,
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      marginTop: 4,
      color: ColorPallette.White,
    },
  },
});
