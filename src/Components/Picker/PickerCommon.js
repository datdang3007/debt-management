import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { ColorPallette, Language } from "../../constants";
import { LabelCommon } from "../Label";
import { useController } from "react-hook-form";
import { HelperTextCommon } from "../HelperText";

export const PickerCommon = ({
  name,
  rules,
  label,
  control,
  options,
  keySearch,
  placeholder,
  labelColor,
  isRequired,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    rules,
    control,
  });
  const { value, onChange } = field;

  const defineKeySearch = useMemo(() => keySearch ?? "name", []);

  const dropdownData = useMemo(
    () => options.map((item) => item[defineKeySearch]),
    []
  );

  const disabledPicker = useMemo(() => {
    return !options.length;
  }, []);

  return (
    <View style={styles.container}>
      <LabelCommon
        label={label}
        labelColor={labelColor}
        isRequired={isRequired}
      />
      <View
        style={{
          borderColor: error ? ColorPallette.Error : undefined,
          ...styles.dropdownContainer,
        }}
      >
        <SelectDropdown
          data={dropdownData}
          defaultValue={value}
          disabled={disabledPicker}
          buttonStyle={{
            backgroundColor: disabledPicker
              ? ColorPallette.Disabled
              : ColorPallette.White,
            ...styles.picker,
          }}
          defaultButtonText={
            disabledPicker ? Language.Select.NoRecord : placeholder
          }
          onSelect={(selectedItem) => {
            const selectedObject = options.find(
              (item) => item[defineKeySearch] === selectedItem
            );
            onChange(selectedObject);
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem;
          }}
          rowTextForSelection={(item) => {
            return item;
          }}
        />
      </View>
      {error && <HelperTextCommon error={error} />}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    position: "relative",
    borderRadius: 4,
    borderWidth: 1,
    overflow: "hidden",
  },
  picker: {
    border: 0,
    padding: 3,
    width: "100%",
  },
});
