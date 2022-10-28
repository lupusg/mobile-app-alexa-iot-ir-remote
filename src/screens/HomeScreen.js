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

import {Button} from 'react-native';
import {StyleSheet, View} from 'react-native';
import DevicesList from '../components/DevicesList/DevicesList.js';
import Header from '../components/Header/Header.js';
import Navbar from '../components/Navbar/Navbar.js';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header/>
      <DevicesList/>
      <Navbar style={styles.navbar} />
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Settings')
        }
      />
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
