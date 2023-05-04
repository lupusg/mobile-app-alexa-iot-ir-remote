/**
 * NodeMCU Alexa IOT Infrared Remote
 *
 * Convert old devices that are not compatible
 * with Alexa into compatible ones using infrared
 * signals.
 *
 * Mobile Application
 *
 * @desc The main screen of the app.
 * @since October 25, 2022
 * @author Vlad-Marian Lupu
 */

import {StyleSheet, View} from 'react-native';
import Header from '../shared/Header/Header.js';
import Navbar from '../shared/Navbar/Navbar.js';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header name="Home"/>
      {/* <Navbar {...props} style={styles.navbar} /> */}
      <Navbar {...props} />
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

export default HomeScreen;
