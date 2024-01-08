import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DebtorDetail } from "./DebtorDetail";
import { DebtorMain } from "./DebtorMain";
import { NewDebtor } from "./NewDebtor";

const Stack = createNativeStackNavigator();
export const Debtor = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={DebtorMain}
        options={{
          title: "Người vay tiền",
        }}
      />
      <Stack.Screen
        name="AddNew"
        component={NewDebtor}
        options={{
          title: "Tạo người vay tiền mới",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DebtorDetail}
        options={{
          title: "Thông tin",
        }}
      />
    </Stack.Navigator>
  );
};
