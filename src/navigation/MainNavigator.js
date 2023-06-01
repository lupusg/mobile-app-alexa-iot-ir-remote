import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import HomeScreen from '../components/screens/Home';
import SettingsScreen from '../components/screens/Settings';
import SwitchesScreen from '../components/screens/Switches';
import SplashScreen from '../components/screens/Splash';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={
          {headerShown: false, animation: 'slide_from_right'}
        }>
        <Stack.Screen
          name="Splash"
          options={{animationEnabled: false, headerShown: false}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Switches"
          component={SwitchesScreen}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
