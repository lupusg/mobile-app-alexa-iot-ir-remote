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

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Color} from '../../constants/GlobalStyles.js';
import Header from '../shared/Header/Header.js';
import Navbar from '../shared/Navbar/Navbar.js';

const HomeScreen = (props) => {
  const navigate = props.navigation.navigate;

  return (
    <View style={styles.container}>
      <Header name="Home"/>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          Welcome to the Alexa IoT Infrared Remote Mobile
        </Text>
        <Text style={styles.description}>
          Too lazy to use voice commands? Sit back, relax, and let your
          fingertips take control.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigate('Switches')}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
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
  textContainer: {
    top: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  navbar: {
    alignItems: 'flex-end',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Color.main,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
