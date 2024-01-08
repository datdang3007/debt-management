import React, { useCallback, useState, useMemo, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  TransactionSearch,
  ListTransaction,
  TotalDebt,
} from "../../Components";
import {
  TransactionStatusActive,
  ColorPallette,
  AS_Key,
} from "../../constants";
import { useForm } from "react-hook-form";
import { AS_Get } from "../../Utils";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    avatar: "https://picsum.photos/500/500",
    name: "Nguyễn Văn A",
    money: 1234,
  },
];

export const TransactionMain = ({ navigation }) => {
  const [listTransaction, setListTransaction] = useState([]);
  const [statusActive, setStatusActive] = useState(
    TransactionStatusActive.UnPaid
  );

  const form = useForm({
    defaultValues: {
      search: "",
    },
  });
  const { control } = form;

  const colorMoney = useMemo(() => {
    return statusActive === TransactionStatusActive.Paid
      ? ColorPallette.Money
      : ColorPallette.Error;
  }, [statusActive]);

  const changeStatusActive = useCallback(
    (newStatus) => {
      setStatusActive(newStatus);
    },
    [setStatusActive]
  );

  const onPressShowDetail = useCallback(() => {
    navigation.navigate("TransactionDetail");
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const data = await AS_Get(AS_Key.Debt);
      if (data) setListTransaction(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <TransactionSearch control={control} />
      <TotalDebt
        colorMoney={colorMoney}
        statusActive={statusActive}
        onChangeStatus={changeStatusActive}
      />
      <ListTransaction
        data={listTransaction}
        colorMoney={colorMoney}
        onPressShowDetail={onPressShowDetail}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
});
