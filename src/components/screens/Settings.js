/**
 * NodeMCU Alexa IOT Infrared Remote
 *
 * Convert old devices that are not compatible
 * with Alexa into compatible ones using infrared
 * signals.
 *
 * Mobile Application
 *
 * @desc The settings screen.
 * @since October 25, 2022
 * @author Vlad-Marian Lupu
 */

import {View, StyleSheet, Button} from 'react-native';
import Header from '../shared/Header/Header.js';
import Navbar from '../shared/Navbar/Navbar.js';
import {authorize} from '../../services/ApiService.js';
import Constants from 'expo-constants';

const SettingsScreen = (props) => {
  const username = Constants.expoConfig.extra.API_USERNAME;
  const password = Constants.expoConfig.extra.API_PASSWORD;
  return (
    <View style={styles.container}>
      <Header name="Settings" />
      <Button title="Retry API login" onPress={async () => {
        await authorize(username, password);
      }} />
      <Navbar {...props} style={styles.navbar} />
    </View>
  );
};

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

export default SettingsScreen;
