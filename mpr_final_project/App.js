import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen from './screens/IntroScreen';
import PickGenderScreen from './screens/PickGenderScreen';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Meddon': require('./assets/fonts/Meddon-Regular.ttf'),
    'ChelseaMarket': require('./assets/fonts/ChelseaMarket-Regular.ttf'),
    'OrelegaOne': require('./assets/fonts/OrelegaOne-Regular.ttf')
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
    <NavigationContainer onLayout={onLayoutRootView}>
      {/* <View style={styles.container} onLayout={onLayoutRootView}> */}
          <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Intro" component={IntroScreen} options={{headerShown: false}}/>
            <Stack.Screen name="PickGender" component={PickGenderScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
