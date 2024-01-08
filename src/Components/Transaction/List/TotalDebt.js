import React, { useMemo, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LabelCommon } from "../../Label";
import { ColorPallette, TransactionStatusActive } from "../../../constants";
import { formatCurrency, randomComponentId } from "../../../Utils";

const data = [
  {
    value: 5,
    label: "Chưa thanh toán:",
    color: ColorPallette.Error,
    status: TransactionStatusActive.UnPaid,
  },
  {
    value: 7,
    label: "Đã thanh toán:",
    color: ColorPallette.Success,
    status: TransactionStatusActive.Paid,
  },
];

export const TotalDebt = ({ statusActive, colorMoney, onChangeStatus }) => {
  const renderComponent = useCallback(() => {
    return data.map((item) => {
      const key = randomComponentId();
      const { label, color, status, value } = item;
      const isActive = statusActive === status;

      const cardStyle = {
        borderBottomWidth: isActive && 5,
        borderStyle: isActive && "solid",
        borderColor: isActive && ColorPallette.Primary,
        ...styles.card,
      };

      const textStyle = {
        color: color,
        ...styles.card.valueText,
      };

      return (
        <TouchableOpacity
          key={key}
          style={cardStyle}
          onPress={() => onChangeStatus(status)}
        >
          <LabelCommon label={label} />
          <Text style={textStyle}>{value}</Text>
        </TouchableOpacity>
      );
    });
  }, [data, statusActive]);

  const renderTotalComponent = useCallback(() => {
    const totalText = `${formatCurrency(12134556)} đ`;
    const style = {
      color: colorMoney,
      ...styles.totalBox.totalText,
    };

    return (
      <>
        <Text style={styles.totalBox.totalLabel}>Tổng tiền: </Text>
        <View>
          <Text style={style}>{totalText}</Text>
        </View>
      </>
    );
  }, [colorMoney]);

  return (
    <View style={styles.container}>
      <View style={styles.listCard}>{renderComponent(data)}</View>
      <View style={styles.totalBox}>{renderTotalComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginTop: 12,
    paddingHorizontal: 12,
  },
  totalBox: {
    gap: 8,
    padding: 12,
    elevation: 3,
    shadowRadius: 4,
    borderRadius: 8,
    shadowOpacity: 0.2,
    flexDirection: "row",
    alignItems: "flex-end",
    boxSizing: "border-box",
    shadowColor: ColorPallette.Black,
    backgroundColor: ColorPallette.White,
    shadowOffset: { width: 0, height: 2 },
    totalLabel: {
      fontSize: 12,
    },
    totalText: {
      fontSize: 16,
      fontWeight: "bold",
    },
  },
  listCard: {
    gap: 12,
    flexDirection: "row",
  },
  card: {
    flex: 1,
    padding: 12,
    elevation: 3,
    shadowRadius: 4,
    borderRadius: 8,
    shadowOpacity: 0.2,
    boxSizing: "border-box",
    shadowColor: ColorPallette.Black,
    backgroundColor: ColorPallette.White,
    shadowOffset: { width: 0, height: 2 },
    valueText: {
      fontSize: 14,
      fontWeight: "bold",
    },
  },
});
