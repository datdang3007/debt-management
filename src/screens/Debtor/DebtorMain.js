import { View, StyleSheet } from "react-native";
import { DebtorSearch, ListDebtor } from "../../Components";
import { useCallback } from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    avatar: "https://picsum.photos/500/500",
    name: "test",
    money: "0",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    avatar: "https://picsum.photos/500/500",
    name: "test",
    money: "0",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    avatar: "https://picsum.photos/500/500",
    name: "test",
    money: "0",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    avatar: "https://picsum.photos/500/500",
    name: "test",
    money: "0",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    avatar: "https://picsum.photos/500/500",
    name: "test",
    money: "0",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    avatar: "https://picsum.photos/500/500",
    name: "test",
    money: "0",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    avatar: "https://picsum.photos/500/500",
    name: "test",
    money: "0",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    avatar: "https://picsum.photos/500/500",
    name: "test",
    money: "0",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    avatar: "https://picsum.photos/500/500",
    name: "test",
    money: "0",
  },
];

export const DebtorMain = ({ navigation }) => {
  const onPressAddNew = useCallback(() => {
    navigation.navigate("AddNew");
  }, []);

  const onPressShowDetail = useCallback(() => {
    navigation.navigate("Detail");
  }, []);

  return (
    <View style={styles.container}>
      <DebtorSearch onPressAddNew={onPressAddNew} />
      <ListDebtor data={DATA} onPressShowDetail={onPressShowDetail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
});
