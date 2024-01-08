import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ButtonCommon } from "../../Components";
import { randomComponentId } from "../../Utils";
import { ButtonVariant, ColorPallette } from "../../constants";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Số điện thoại",
    content: "0123 456 789",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Email",
    content: "test@example.com",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Địa chỉ",
    content: `1600 Amphitheatre Parkway\n Mountain View, CA 94043\n United States`,
  },
];

const Item = ({ data, isFirstChild, onPress }) => (
  <TouchableOpacity
    style={{ ...styles.card, marginTop: isFirstChild ? 0 : 12 }}
    onPress={onPress}
  >
    <View>
      <Text style={styles.card.title}>{data?.title}</Text>
    </View>
    <View style={styles.card.contentContainer}>
      <Text style={styles.card.contentContainer.content}>{data?.content}</Text>
    </View>
  </TouchableOpacity>
);

export const DebtorDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://picsum.photos/100/100" }} // Replace with your avatar source
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => (
          <Item data={item} isFirstChild={index === 0} />
        )}
        keyExtractor={randomComponentId}
        style={styles.informationContainer}
      />
      <ButtonCommon title="Sửa" variant={ButtonVariant.Outlined} />
      <ButtonCommon title="Xóa" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  avatarContainer: {
    alignItems: "center",
    width: "100%",
  },
  card: {
    backgroundColor: ColorPallette.White,
    borderColor: ColorPallette.WhiteColor,
    borderRadius: 8,
    borderWidth: 1,
    contentContainer: {
      marginTop: 4,
      content: {
        fontSize: 14,
      },
    },
    padding: 12,
    title: {
      fontSize: 12,
      fontWeight: "bold",
      color: ColorPallette.Primary,
    },
  },
  container: {
    gap: 12,
    marginHorizontal: 12,
    marginTop: 12,
  },
  informationContainer: {
    marginTop: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
  },
});
