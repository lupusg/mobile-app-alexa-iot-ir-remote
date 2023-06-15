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
import {Color} from '../constants/GlobalStyles.js';
import Header from '../components/shared/Header/Header.js';
import Navbar from '../components/shared/Navbar/Navbar.js';
import {
  authorize, toggleIrReceiving,
} from '../services/ApiService.js';

const onToggleIrReceivingPress = async () => {
  if (!await toggleIrReceiving()) {
    await authorize();
    await toggleIrReceiving();
  }
};

const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header name="Settings" />
      <Button color={Color.main} title="Toggle IR receiving"
        onPress={async () => {
          await onToggleIrReceivingPress();
        }}/>
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
