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
import DevicesList from './src/components/DevicesList/DevicesList.js';
import Header from './src/components/Header/Header.js';
import Navbar from './src/components/Navbar/Navbar.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <DevicesList/>
      <Navbar style={styles.navbar}/>
    </View>
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
