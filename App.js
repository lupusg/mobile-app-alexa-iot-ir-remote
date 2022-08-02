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

import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Button} from 'react-native';
import axios from 'axios';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        onPress={startIrReceiver}
        title="Start IR Receiver"
        color="#841584"
      />
      <StatusBar style="auto" />
    </View>
  );
}

/**
 * Sends a post request to the RestAPI.
 */
const startIrReceiver = () => {
  axios({
    method: 'post',
    url: 'http://192.168.0.104:8081/startReceiving',
    data: {},
  })
      .catch((error) => console.log(error));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
