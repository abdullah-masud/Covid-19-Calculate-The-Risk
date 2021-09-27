import React from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ProgressInMedicine from "./app/screens/ProgressInMedicine";
import splashScreen from "./app/screens/SplashScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Content from "./app/screens/Content";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splashScreen"
          component={splashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={WelcomeScreen}
          name="WelcomeScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={ProgressInMedicine}
          name="Medicine"
          options={{
            headerStyle: {
              backgroundColor: "#010506",
            },
            headerTitleStyle: {
              color: "#4ecdc4",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          component={Content}
          name="Content"
          options={{
            headerStyle: {
              backgroundColor: "#BFD8B8",
            },
            headerTitleStyle: {
              color: "black",
            },
            headerTintColor: "black",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
