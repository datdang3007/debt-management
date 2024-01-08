import { StyleSheet, Text } from "react-native";
import { ColorPallette } from "../../constants";

export const LabelCommon = ({ label, labelColor, isRequired, ...props }) => {
  if (!label) return null;
  if (isRequired) {
    return (
      <Text
        {...props}
        style={{
          color: labelColor,
          ...styles.label,
        }}
      >
        {label}
        <Text style={styles.iconRequired}>*</Text>
      </Text>
    );
  }

  return (
    <Text
      style={{
        color: labelColor,
        ...styles.label,
      }}
    >
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  iconRequired: {
    color: ColorPallette.Error,
    fontSize: 11,
  },
  label: {
    fontSize: 11,
    marginBottom: 4,
  },
});
