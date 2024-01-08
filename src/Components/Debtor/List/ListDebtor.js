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

const Item = ({ data, isFirstChild, onPress }) => (
  <TouchableOpacity
    style={{ ...styles.card, marginTop: isFirstChild ? 0 : 16 }}
    onPress={onPress}
  >
    <View style={styles.avatarContainer}>
      <Image source={{ uri: data?.avatar }} style={styles.avatar} />
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.name}>{data?.name}</Text>
      <Text style={styles.money}>{`$${data?.money}`}</Text>
    </View>
  </TouchableOpacity>
);

export const ListDebtor = ({ data, onPressShowDetail }) => {
  return (
    <FlatList
      data={data}
      style={styles.list}
      keyExtractor={(_, index) => `item_${index}`}
      renderItem={({ item, index }) => (
        <Item
          data={item}
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
    color: ColorPallette.Money,
    fontSize: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
