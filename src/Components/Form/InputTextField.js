import React, { useCallback, useMemo } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ColorPallette } from "../../constants";
import { LabelCommon } from "../Label";
import { useController } from "react-hook-form";
import { HelperTextCommon } from "../HelperText";

export const InputTextField = ({
  name,
  rules,
  label,
  control,
  labelColor,
  isRequired,
  isMultiline,
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

  const defineTextFieldStyle = useMemo(() => {
    return {
      ...styles.input,
      borderColor: error ? ColorPallette.Error : undefined,
      height: isMultiline ? 120 : 40,
    };
  }, [error]);

  const onChangeText = useCallback((text) => {
    field.onChange(text);
  }, []);

  return (
    <View>
      <LabelCommon
        label={label}
        labelColor={labelColor}
        isRequired={isRequired}
      />
      <TextInput
        {...field}
        multiline={isMultiline}
        style={defineTextFieldStyle}
        onChangeText={onChangeText}
        {...props}
      />
      {error && <HelperTextCommon error={error} />}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: ColorPallette.White,
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
  },
});
