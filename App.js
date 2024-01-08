import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CustomBottomNavBar } from "./src/Components";
import { Debtor, NewDebt, Transaction } from "./src/Screens";
import { ColorPallette, ScreenPath } from "./src/constants";

const Tab = createBottomTabNavigator();
const IconSize = 25;
const screenOptions = {
  tabBarShowLabel: false,
  tabBarActiveTintColor: ColorPallette.Primary,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 65,
    background: ColorPallette.White,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ScreenPath.Transaction}
        screenOptions={screenOptions}
      >
        <Tab.Screen
          name={ScreenPath.Transaction}
          component={Transaction}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="transfer"
                color={color}
                size={IconSize}
              />
            ),
          }}
        />
        <Tab.Screen
          name={ScreenPath.NewDebt}
          component={NewDebt}
          options={{
            headerTitle: "Tạo khoản nợ mới",
            tabBarIcon: () => (
              <CustomBottomNavBar>
                <MaterialCommunityIcons
                  name="plus"
                  color={ColorPallette.White}
                  size={30}
                />
              </CustomBottomNavBar>
            ),
          }}
        />
        <Tab.Screen
          name={ScreenPath.Debtor}
          component={Debtor}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-cash"
                color={color}
                size={IconSize}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
