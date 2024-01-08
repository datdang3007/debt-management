import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { ColorPallette } from "../../../constants";
import { formatCurrency } from "../../../Utils";

const Item = ({ data, colorMoney, isFirstChild, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.card, marginTop: isFirstChild ? 0 : 16 }}
      onPress={onPress}
    >
      <View style={styles.avatarContainer}>
        <Image source={{ uri: data?.avatar }} style={styles.avatar} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text style={{ color: colorMoney, ...styles.money }}>{`${formatCurrency(
          data?.money
        )} đ`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const ListTransaction = ({ data, colorMoney, onPressShowDetail }) => {
  return (
    <FlatList
      data={data}
      style={styles.list}
      keyExtractor={(_, index) => `item_${index}`}
      renderItem={({ item, index }) => (
        <Item
          data={item}
          colorMoney={colorMoney}
          isFirstChild={index === 0}
          onPress={onPressShowDetail}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  avatarContainer: {
    marginRight: 16,
  },
  card: {
    alignItems: "center",
    backgroundColor: ColorPallette.White,
    borderColor: ColorPallette.WhiteColor,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    padding: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  list: {
    flex: 1,
    marginBottom: 100,
    marginTop: 12,
    paddingHorizontal: 12,
  },
  money: {
    fontSize: 16,
  },
  name: {
    fontSize: 16,
    marginBottom: 8,
  },
});
