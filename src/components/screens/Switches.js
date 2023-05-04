/**
 * NodeMCU Alexa IOT Infrared Remote
 *
 * Convert old devices that are not compatible
 * with Alexa into compatible ones using infrared
 * signals.
 *
 * Mobile Application
 *
 * @desc The switches screen.
 * @since October 29, 2022
 * @author Vlad-Marian Lupu
 */

import {StyleSheet, View} from 'react-native';

import DevicesList from '../devices/DevicesList.js';
import Header from '../shared/Header/Header.js';
import Navbar from '../shared/Navbar/Navbar.js';

const SwitchesScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header name="My switches" />
      <DevicesList />
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

export default SwitchesScreen;
