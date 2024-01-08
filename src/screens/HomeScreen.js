import React, { useCallback, useState } from "react";
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import { Pressable } from 'native-base';

const dataTemp = [
  { type: 1, title: 'Ăn sáng', money: 30000 },
  { type: 2, title: 'Ăn trưa', money: 50000 },
  { type: 3, title: 'Ăn tối', money: 250000 },
]

export const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(dataTemp);

  // Render menu expense items:
  const renderItems = useCallback(() => {
    return data.map(item => {
      const { type, title, money} = item;

      return (
        <View key={`${type}-${title}-${money}`} style={HomeStyles.HistoryList.item}>
          <View style={HomeStyles.HistoryList.item.icon}></View>
          <Text style={HomeStyles.HistoryList.item.description}>{title}</Text>
          <Text style={HomeStyles.HistoryList.item.amount}>{money}</Text>
        </View>
      )
    })
  }, [data])

  const navigateToAddTransactionScreen = useCallback(() => {
    navigation.navigate('AddTransaction');
  }, [])

  return (
    <SafeAreaView style={HomeStyles.Container}>
      <View style={HomeStyles.HeaderSection}>
        <Text style={HomeStyles.HeaderSection.title}>Tổng tiền hiện có</Text>
        <Text style={HomeStyles.HeaderSection.money}>1.000.000đ</Text>
      </View>
      <View style={HomeStyles.ButtonsTransfer}>
        <Pressable justifyContent='center' alignItems='center' flex={1} shadow={3} marginHorizontal={8} p={10} borderRadius={8} borderWidth={1} borderColor="coolGray.300" onPress={navigateToAddTransactionScreen}>
            <Text>Chi tiêu</Text>
        </Pressable>
        <Pressable justifyContent='center' alignItems='center' flex={1} shadow={3} marginHorizontal={8} p={10} borderRadius={8} borderWidth={1} borderColor="coolGray.300"  onPress={navigateToAddTransactionScreen}>
            <Text>Thu nhập</Text>
        </Pressable>
      </View>
      <View style={HomeStyles.HistoryList}>
        <Text style={HomeStyles.HistoryList.title}>Lịch sử giao dịch</Text>
        <ScrollView style={HomeStyles.HistoryList.list}>
          {renderItems()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const HomeStyles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
  },
  HeaderSection: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    title: {
      fontSize: 11,
    },
    money: {
      marginVertical: 8,
      fontSize: 24,
    }
  },
  ButtonsTransfer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  HistoryList: {
    marginTop: 30,
    paddingHorizontal: 8,
    title: {
      fontSize: 16,
    },
    list: {
      marginTop: 12,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 8,
      icon: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
      },
      description: {

      },
      amount: {

      },
    }
  }
});
