import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen from './screens/IntroScreen';
import CreateCharacter from './screens/createCharacter';
import AuthenticationScreen from './screens/authenticationScreen';
import MainScreen from './screens/MainScreen';
import School from './screens/School';
import Relationship from './screens/Relationship';
import Assert from './screens/Assert';
import Activity from './screens/Activity';
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
            <Stack.Screen name="authentication" component={AuthenticationScreen} options={{headerShown: false}}/>
            <Stack.Screen name="CreateCharacter" component={CreateCharacter} options={{headerShown: false}}/>
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
            <Stack.Screen name="School" component={School} />
            <Stack.Screen name="Activity" component={Activity} />
            <Stack.Screen name="Relationship" component={Relationship} />
            <Stack.Screen name="Assert" component={Assert} />
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
