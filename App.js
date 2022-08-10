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
import {StyleSheet, View, Button, Text, TextInput} from 'react-native';
import {useState} from 'react';
import axios from 'axios';

export default function App() {
  const [infraredSignalText, setInfraredSignalText] = useState('Unknown');
  const [infraredNameTextInput, setInfraredNameTextInput] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.center}>
        {infraredSignalText}
        {'\n'}
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Set signal name'
        onEndEditing={() => changeLastSignalName(infraredNameTextInput)}
        onChangeText={(text) => setInfraredNameTextInput(text)}
      />
      <Button
        onPress={() => {
          updateLastSignalButton(setInfraredSignalText);
        }}
        title="Get last signal"
        color="#0041cf" />
      <Text>
        {'\n'}
      </Text>
      <Button
        onPress={toggleInfraredReceiving}
        title="Toggle infrared receiving"
        color="#750000"
      />
      <StatusBar style="auto" />
    </View>
  );
}

/**
 * Toggles infrared receiving on NodeMCU using a post request in the RestAPI.
 */
const toggleInfraredReceiving = () => {
  axios({
    method: 'post',
    url: 'http://192.168.0.104:8081/startReceiving',
    data: {},
  })
      .catch((error) => console.log(error));
};

/**
 * Updates the "infraredSignalData" text with the last infrared signal from
 * the database using a get request in the RestAPI.
 * @param {Function} setText useState function to change the text of the button.
 */
const updateLastSignalButton = (setText) => {
  axios({
    method: 'get',
    url: 'http://192.168.0.104:8081/signal',
  }).then((request, response) => {
    const SIGNAL = request.data['signal'];
    const SIGNAL_NAME = request.data['name'];
    setText(SIGNAL + '\n' + SIGNAL_NAME);
  });
};

/**
 * Updates the last document in database with infrared infraredNameTextInput
 * using a post request in the RestAPI.
 * @param {Object} infraredNameTextInput React useState text.
 */
const changeLastSignalName = (infraredNameTextInput) => {
  axios({
    method: 'post',
    url: 'http://192.168.0.104:8081/signal',
    data: {name: infraredNameTextInput},
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  center: {
    width: '70%',
    textAlign: 'center',
  },
});
