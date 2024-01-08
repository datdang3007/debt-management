import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransactionMain } from "./TransactionMain";
import { TransactionDetail } from "./TransactionDetail";

const Stack = createNativeStackNavigator();
export const Transaction = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={TransactionMain}
        options={{
          title: "Giao dịch",
        }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{
          title: "Chi tiết giao dịch",
        }}
      />
    </Stack.Navigator>
  );
};
