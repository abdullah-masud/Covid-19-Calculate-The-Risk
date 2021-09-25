import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ProgressInMedicine from "./app/screens/ProgressInMedicine";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={WelcomeScreen}
          name="WelcomeScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen component={ProgressInMedicine} name="Medicine" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
