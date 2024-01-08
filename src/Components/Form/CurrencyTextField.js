import React, { useCallback, useEffect } from "react";
import { useController } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { ColorPallette } from "../../constants";
import { LabelCommon } from "../Label";
import { formatCurrency, removeFormatCurrency } from "../../Utils";
import { HelperTextCommon } from "../HelperText";

export const CurrencyTextField = ({
  name,
  rules,
  label,
  value,
  control,
  labelColor,
  isRequired,
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    rules,
    control,
  });

  const onChangeText = useCallback((text) => {
    const newText = removeFormatCurrency(text);
    field.onChange(newText);
  }, []);

  useEffect(() => {
    field.onChange(formatCurrency(field.value));
  }, [field]);

  return (
    <View>
      <LabelCommon
        label={label}
        labelColor={labelColor}
        isRequired={isRequired}
      />
      <TextInput
        {...field}
        style={{
          borderColor: error ? ColorPallette.Error : undefined,
          ...styles.input,
        }}
        keyboardType="numeric"
        onChangeText={onChangeText}
        {...props}
      />
      <Text style={{ top: label ? 32 : 10, ...styles.unit }}>đ</Text>
      {error && <HelperTextCommon error={error} />}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: ColorPallette.White,
  },
  unit: {
    right: 15,
    position: "absolute",
  },
});
