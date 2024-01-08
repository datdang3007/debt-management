import React, { useCallback, useRef, useState } from "react";
import { Animated, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ButtonActions, Information, PaymentHistory } from "../../Components";

const DATA = [
  {
    date: "05/01/2024",
    money: 100000,
  },
  {
    date: "05/01/2024",
    money: 100000,
    description:
      "awdwadwadwadawdwa awdwadwadwadawdwa awdwadwadwadawdwa awdwadwadwadawdwa awdwadwadwadawdwa",
  },
  {
    date: "05/01/2024",
    money: 550000,
    description: "awdwadwadwadawdwa",
  },
];

export const TransactionDetail = () => {
  const [disableButtonShowMore, setDisableButtonShowMore] = useState(false);
  const [isShowDescription, setIsShowDescription] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const handlePressShowMore = useCallback(() => {
    setDisableButtonShowMore(true);
    Animated.timing(animatedHeight, {
      toValue: isShowDescription ? 0 : 190,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setIsShowDescription((pre) => !pre);
    setTimeout(() => setDisableButtonShowMore(false), 300);
  }, [isShowDescription, animatedHeight]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Detail Information */}
      <Information
        animatedHeight={animatedHeight}
        isShowDescription={isShowDescription}
        handlePressShowMore={handlePressShowMore}
        disableButtonShowMore={disableButtonShowMore}
      />

      {/* Button Actions */}
      <ButtonActions />

      {/* Payments History */}
      <PaymentHistory data={DATA} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
});
