/**
 * NodeMCU Alexa IOT Infrared Remote
 *
 * Convert old devices that are not compatible
 * with Alexa into compatible ones using infrared
 * signals.
 *
 * Mobile Application
 *
 * @desc Header component.
 * @since August 12, 2022
 * @author Vlad-Marian Lupu
 */

import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const {width: width} = Dimensions.get('window');

const Header = (props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.8, y: 0.2}}
        end={{x: 0.5, y: 1.0}}
        locations={[0.1, 1]}
        colors={['#31b331', '#006405']}
        style={styles.linearGradient}
      >
      </LinearGradient>
      <Text style={styles.text}>
          My switches
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  linearGradient: {
    height: 230,
    width: width - 190,
    left: 0,
    backgroundColor: 'red',
    top: -50,
    borderRadius: 160,
    transform: [{scaleX: 4}],
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 30,
    top: -150,
    color: '#fff',
  },
});

export default Header;
