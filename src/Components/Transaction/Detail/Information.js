import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatCurrency } from "../../../Utils";
import { ColorPallette } from "../../../constants";
import { DetailDescription } from "./DetailDescription";
import { DetailSection } from "./DetailSection";

export const Information = ({
  animatedHeight,
  isShowDescription,
  handlePressShowMore,
  disableButtonShowMore,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.detailHeader}>Chi Tiết</Text>
      </View>
      <View style={styles.detailCard}>
        <DetailSection label="Người vay nợ" value="Nguyễn Văn A" />
        <DetailSection
          label="Số tiền mượn"
          value={`${formatCurrency(100000)} đ`}
        />
        <DetailSection
          label="Số tiền đã trả"
          value={`${formatCurrency(50000)} đ`}
        />
        <DetailSection label="Ngày mượn" value="05/01/2024" />
        <DetailSection label="Ngày hẹn trả" value="10/01/2024" />
        <DetailDescription
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
          animatedHeight={animatedHeight}
        />
        <TouchableOpacity
          style={styles.buttonViewMore}
          onPress={handlePressShowMore}
          disabled={disableButtonShowMore}
        >
          <Text style={styles.viewMoreText}>
            {isShowDescription ? "Ẩn bớt" : "Xem thêm"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingHorizontal: 12,
  },
  detailHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 12,
  },
  detailCard: {
    gap: 8,
    padding: 12,
    elevation: 3,
    marginTop: 6,
    shadowRadius: 4,
    borderRadius: 8,
    shadowOpacity: 0.2,
    boxSizing: "border-box",
    shadowColor: ColorPallette.Black,
    backgroundColor: ColorPallette.White,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonViewMore: {
    alignItems: "center",
  },
  viewMoreText: {
    fontSize: 14,
    marginTop: 8,
    color: ColorPallette.Primary,
  },
});
