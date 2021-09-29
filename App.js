import React from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ProgressInMedicine from "./app/screens/ProgressInMedicine";
import splashScreen from "./app/screens/SplashScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EnvironmentalEffect from "./app/screens/EnvironmentalEffect";
import Policy from "./app/screens/Policy";
import About from "./app/screens/About";

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
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={EnvironmentalEffect}
          name="EnvironmentalEffect"
          options={{
            headerStyle: {
              backgroundColor: "#BFD8B8",
            },
            headerTitleStyle: {
              color: "black",
            },
            headerTintColor: "black",
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Policy}
          name="Policy"
          options={{
            headerStyle: {
              backgroundColor: "#BFD8B8",
            },
            headerTitleStyle: {
              color: "black",
            },
            headerTintColor: "black",
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={About}
          name="About"
          options={{
            headerStyle: {
              backgroundColor: "#BFD8B8",
            },
            headerTitleStyle: {
              color: "black",
            },
            headerTintColor: "black",
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
