import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ColorPallette } from "../../../constants";
import { formatCurrency } from "./../../../Utils/function.common";

export const CardPaymentHistory = ({ data, isFirstChild, isLastChild }) => {
  return (
    <View
      style={{
        marginTop: isFirstChild ? 0 : 12,
        marginBottom: isLastChild ? 12 : 0,
        ...styles.card,
      }}
    >
      <Text style={styles.date}>{data.date}</Text>
      <Text style={styles.money}>{formatCurrency(data.money)} đ</Text>
      {data?.description && (
        <View>
          <Text>Ghi chú:</Text>
          <Text>{data.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: 8,
    padding: 8,
    elevation: 3,
    borderRadius: 8,
    shadowRadius: 4,
    shadowOpacity: 0.2,
    paddingHorizontal: 12,
    boxSizing: "border-box",
    shadowColor: ColorPallette.Black,
    backgroundColor: ColorPallette.White,
    shadowOffset: { width: 0, height: 2 },
  },
  money: {
    color: ColorPallette.Money,
    fontSize: 16,
  },
});
