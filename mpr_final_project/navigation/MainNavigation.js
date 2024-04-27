import React, { useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "../screens/IntroScreen";
import CreateCharacter from "../screens/createCharacter";
import AuthenticationScreen from "../screens/authenticationScreen";
import MainScreen from "../screens/MainScreen";
import School from "../screens/School/School";
import Relationship from "../screens/Relationship/Relationship";
import Assert from "../screens/Assert/Assert";
import Activity from "../screens/Activity/Activity";
import Subject from "../screens/School/Subject";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTab(props) {
  const { name } = props.route.params;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarLabel: "Home",
        }}
        initialParams={{ name: name }}
      />
      <Tab.Screen name="School" component={School} />
      <Tab.Screen name="Relationship" component={Relationship} />
      <Tab.Screen name="Assert" component={Assert} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Subject" component={Subject} />
    </Tab.Navigator>
  );
}

const MainNavigation = () => {
  const [fontsLoaded, fontError] = useFonts({
    Meddon: require("../assets/fonts/Meddon-Regular.ttf"),
    ChelseaMarket: require("../assets/fonts/ChelseaMarket-Regular.ttf"),
    OrelegaOne: require("../assets/fonts/OrelegaOne-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="authentication"
          component={AuthenticationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateCharacter"
          component={CreateCharacter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
