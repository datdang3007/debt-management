import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  CurrencyTextField,
  DateRangeCommon,
  HeaderNewDebt,
  InputTextField,
  PickerCommon,
  SwitchCommon,
} from "../../Components";
import {
  AS_Get,
  AS_Set,
  moneyRules,
  pickerRules,
  removeFormatCurrency,
  simpleInputRules,
} from "../../Utils";
import { AS_Key, Language } from "../../constants";

export const NewDebt = ({ navigation }) => {
  const [debtors, setDebtors] = useState([]);
  const [isNewDebtor, setIsNewDebtor] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const form = useForm({
    defaultValues: {
      money: "",
      from_date: new Date(),
      to_date: new Date(),
      debtor: null,
      debtor_name: "",
      debtor_phone_number: "",
      debtor_email: "",
      debtor_address: "",
      description: "",
    },
  });
  const { control, handleSubmit, reset } = form;

  const resetDebtorSelected = useCallback(() => {
    reset({
      debtor: null,
      debtor_name: "",
      debtor_phone_number: "",
      debtor_email: "",
      debtor_address: "",
    });
  }, []);

  const onSwitchChange = useCallback(() => {
    setIsNewDebtor((pre) => !pre);
    resetDebtorSelected();
  }, []);

  const onSubmit = handleSubmit(
    useCallback(
      async (values) => {
        try {
          if (isNewDebtor) {
            const debtorData = defineDataForNewDebtor(values);
          }

          // const moneyNumeric = removeFormatCurrency(money);

          // console.log(DetachData(values));
          // const currentDebt = await AS_Get(AS_Key.Debt);
          // let dataUpdate = [newData];
          // console.log(dataUpdate);
          // if (currentDebt) {
          //   dataUpdate = [...currentDebt, newData];
          // }
          // if (dataUpdate) {
          //   await AS_Set(AS_Key.Debt, dataUpdate);
          // }
        } catch (error) {
          console.error("Error updating debt list:", error);
        }
      },
      [isNewDebtor]
    )
  );

  const fetchDataDebtors = useCallback(async () => {
    try {
      const data = await AS_Get(AS_Key.Debtors);
      if (data) setDebtors(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchDataDebtors();
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderNewDebt onPress={onSubmit} />,
    });
  }, [navigation]);

  return (
    <TouchableWithoutFeedback
      accessible={false}
      onPress={Keyboard.dismiss}
      style={styles.touchable}
    >
      <KeyboardAwareScrollView extraHeight={150}>
        <ScrollView>
          <View
            style={{
              paddingBottom: isKeyboardVisible && isNewDebtor ? 350 : undefined,
              ...styles.container,
            }}
          >
            {/* Switch Debtor Mode */}
            <SwitchCommon
              label={Language.NewDebt.Titles.SwitchNewDebtor}
              value={isNewDebtor}
              onChange={onSwitchChange}
            />

            {/* Date Range */}
            <DateRangeCommon
              form={form}
              label={{
                from: Language.NewDebt.Fields.FromDate,
                to: Language.NewDebt.Fields.ToDate,
              }}
              isRequired
            />

            {/* Currency TextField */}
            <CurrencyTextField
              name="money"
              isRequired
              control={control}
              rules={moneyRules(true)}
              label={Language.NewDebt.Fields.AmountOfMoney}
            />

            {isNewDebtor ? (
              <>
                <InputTextField
                  name="debtor_name"
                  control={control}
                  label={Language.NewDebt.Fields.NewDebtor.Name}
                  rules={simpleInputRules(true)}
                  isRequired
                />
                <InputTextField
                  name="debtor_phone_number"
                  control={control}
                  keyboardType="numeric"
                  label={Language.NewDebt.Fields.NewDebtor.PhoneNumber}
                  rules={simpleInputRules(true)}
                  isRequired
                />
                <InputTextField
                  name="debtor_email"
                  control={control}
                  keyboardType="email-address"
                  label={Language.NewDebt.Fields.NewDebtor.Email}
                  rules={simpleInputRules(false)}
                />
                <InputTextField
                  name="debtor_address"
                  control={control}
                  label={Language.NewDebt.Fields.NewDebtor.Address}
                  rules={simpleInputRules(false)}
                />
              </>
            ) : (
              <PickerCommon
                isRequired
                name="debtor"
                control={control}
                options={debtors}
                rules={pickerRules(true)}
                placeholder="Chọn người vay nợ"
                label={Language.NewDebt.Fields.Debtor}
              />
            )}

            {/* TextField Description */}
            <InputTextField
              isMultiline
              name="description"
              control={control}
              rules={simpleInputRules(false)}
              label={Language.NewDebt.Fields.Description}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    paddingTop: 12,
    paddingHorizontal: 12,
  },
  touchable: {
    flex: 1,
  },
});

const defineDataForNewDebtor = (data) => {
  const { debtor_name, debtor_phone_number, debtor_email, debtor_address } =
    data;
  return { debtor_name, debtor_phone_number, debtor_email, debtor_address };
};
