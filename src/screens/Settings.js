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

import {View, StyleSheet} from 'react-native';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header name="Settings"/>
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
