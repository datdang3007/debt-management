import { StyleSheet, Text } from "react-native";
import { ColorPallette } from "../../constants";

export const HelperTextCommon = ({ error }) => {
  return (
    <Text style={styles.errorText}>
      {error && error.message ? error.message : ""}
    </Text>
  );
};

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: ColorPallette.Error,
  },
});
