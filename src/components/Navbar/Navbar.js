/**
 * NodeMCU Alexa IOT Infrared Remote
 *
 * Convert old devices that are not compatible
 * with Alexa into compatible ones using infrared
 * signals.
 *
 * Mobile Application
 *
 * @desc Navigation bar component.
 * @since August 11, 2022
 * @author Vlad-Marian Lupu
 */

import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {Icon} from '@rneui/base';

const Navbar = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        <TouchableOpacity>
          <View style={styles.navbarItem}>
            <Icon
              name='home'
              color='#14a404'/>
            <Text>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navbarItem}>
            <Icon
              name='help'
              color='#14a404'/>
            <Text>idk yet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navbarItem}>
            <Icon
              name='help'
              color='#14a404'/>
            <Text>idk yet</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    // borderWidth: 1,
  },
  itemsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  navbarItem: {
    width: 50,
    height: 50,
    alignItems: 'center',
    margin: 'auto',
    padding: 2,
  },
});

export default Navbar;
