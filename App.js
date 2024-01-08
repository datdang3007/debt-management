import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, AddTransaction } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddTransaction" component={AddTransaction} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
