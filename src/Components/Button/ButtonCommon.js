import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ButtonVariant, ColorPallette } from "../../constants";

export const ButtonCommon = ({ title, onPress, variant }) => {
  const defineButtonStyle = useMemo(() => {
    if (variant === ButtonVariant.Outlined) {
      return {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: ColorPallette.Primary,
      };
    }
    return { backgroundColor: ColorPallette.Primary };
  }, []);

  const defineTextStyle = useMemo(() => {
    if (variant === ButtonVariant.Outlined) {
      return { color: ColorPallette.Primary };
    }
    return { color: ColorPallette.White };
  }, []);

  return (
    <TouchableOpacity
      style={{ ...styles.button, ...defineButtonStyle }}
      onPress={onPress}
    >
      <Text style={{ ...styles.buttonText, ...defineTextStyle }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 4,
    justifyContent: "center",
    padding: 10,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
