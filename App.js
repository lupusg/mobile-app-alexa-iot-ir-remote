/**
 * NodeMCU Alexa IOT Infrared Remote
 *
 * Convert old devices that are not compatible
 * with Alexa into compatible ones using infrared
 * signals.
 *
 * Mobile Application
 *
 * @desc The file that handles the main process of the app.
 * @since August 2, 2022
 * @author Vlad-Marian Lupu
 */

import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen.js';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from './src/screens/SettingsScreen.js';

const NavigationStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator>
        <NavigationStack.Screen
          name="Home"
          component={HomeScreen}
        />
        <NavigationStack.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  navbar: {
    alignItems: 'flex-end',
  },
});
