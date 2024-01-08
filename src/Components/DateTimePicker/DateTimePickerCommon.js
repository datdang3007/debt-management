import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";
import { LabelCommon } from "../Label";
import { useController } from "react-hook-form";
import { useCallback } from "react";
import { HelperTextCommon } from "../HelperText";

export const DateTimePickerCommon = ({
  name,
  rules,
  label,
  minDate,
  maxDate,
  control,
  resetDateData,
  isRequired,
  ...Props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    rules,
    control,
  });

  const onChange = useCallback((_, selectedDate) => {
    const newDate = new Date(selectedDate);
    field.onChange(newDate);
    resetDateData?.();
  }, []);

  return (
    <View>
      <LabelCommon label={label} isRequired={isRequired} />
      <DateTimePicker
        mode="date"
        locale="vi-VN"
        value={field.value}
        onChange={onChange}
        minimumDate={minDate}
        maximumDate={maxDate}
        {...Props}
      />
      {error && <HelperTextCommon error={error} />}
    </View>
  );
};
