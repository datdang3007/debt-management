import { useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  dateRules,
  defineMinDate,
  formatDate,
  getDateEndOfCurrentYear,
} from "../../Utils";
import { DateTimePickerCommon } from "./DateTimePickerCommon";

export const DateRangeCommon = ({ form, label, isRequired }) => {
  const { control, getValues } = form;
  const [dateData, setDateData] = useState({
    from: new Date(),
    to: new Date(),
  });

  const fromRange = useMemo(() => {
    const minDate = defineMinDate();
    return {
      min: new Date(formatDate(minDate, "YYYY-MM-DD")),
      max: new Date(formatDate(dateData.to, "YYYY-MM-DD")),
    };
  }, [dateData]);

  const toRange = useMemo(() => {
    const endOfYear = getDateEndOfCurrentYear();
    return {
      min: new Date(formatDate(dateData.from, "YYYY-MM-DD")),
      max: new Date(formatDate(endOfYear, "YYYY-MM-DD")),
    };
  }, [dateData]);

  const resetDateData = useCallback(() => {
    const { from_date: from, to_date: to } = getValues();
    setDateData({ from, to });
  }, [getValues, setDateData]);

  return (
    <View style={styles.container}>
      <DateTimePickerCommon
        name="from_date"
        control={control}
        label={label.from}
        minDate={fromRange.min}
        maxDate={fromRange.max}
        isRequired={isRequired}
        rules={dateRules(isRequired)}
        resetDateData={resetDateData}
      />

      <DateTimePickerCommon
        name="to_date"
        control={control}
        label={label.to}
        minDate={toRange.min}
        maxDate={toRange.max}
        isRequired={isRequired}
        rules={dateRules(isRequired)}
        resetDateData={resetDateData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
  },
});
