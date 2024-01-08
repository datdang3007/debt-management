import React, { useCallback } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { randomComponentId } from "../../../Utils";
import { CardPaymentHistory } from "./CardPaymentHistory";

export const PaymentHistory = ({ data }) => {
  const renderFlatListItem = useCallback(() => {
    return data.map((item, index) => {
      const key = randomComponentId();
      return (
        <CardPaymentHistory
          key={key}
          data={item}
          isFirstChild={index === 0}
          isLastChild={index === data.length - 1}
        />
      );
    });
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 18, ...styles.detailHeader }}>
        Lịch sử giao dịch
      </Text>
      <ScrollView style={styles.scrollView}>{renderFlatListItem()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
  },
  detailHeader: {
    fontSize: 16,
    marginLeft: 12,
    fontWeight: "bold",
    paddingHorizontal: 12,
  },
  scrollView: {
    flex: 1,
    padding: 12,
    paddingTop: 4,
  },
});
