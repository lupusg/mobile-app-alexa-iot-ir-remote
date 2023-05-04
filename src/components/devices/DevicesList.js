/**
 * NodeMCU Alexa IOT Infrared Remote
 *
 * Convert old devices that are not compatible
 * with Alexa into compatible ones using infrared
 * signals.
 *
 * Mobile Application
 *
 * @desc Devices list component.
 * @since August 13, 2022
 * @author Vlad-Marian Lupu
 */

/* eslint-disable react/prop-types */
import {
  StyleSheet, View, Text, ScrollView, TouchableOpacity,
} from 'react-native';

import {onCustomSwitchPress} from '../../services/ApiService';

/**
 * Creates an array used as Devices list.
 * @return {Object[]} Array of objects for the list.
 */
export const getData = () => {
  const data = [];
  for (let index = 0; index < 10; ++index) {
    data.push({
      id: index,
      title: `Custom Switch ${index + 1}`,
      onPress: onCustomSwitchPress,
    });
  }
  return data;
};

const Item = ({title}) => (
  <TouchableOpacity onPress={() => {
    title.onPress(title.id + 1);
  }}>
    <View style={styles.listItem}>
      <Text>{title.title}</Text>
    </View>
  </TouchableOpacity>
);

const DevicesList = (props) => {
  const DATA = getData();
  return (
    <View style={styles.container}>
      <ScrollView>
        {DATA.map((item) => (
          <Item key={item.id} title={item}/>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '50%',
    // top: -50,
    flexDirection: 'row',
    width: '90%',
    // borderWidth: 1,
    borderColor: 'red',
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderColor: '#e2e2e2',
    borderWidth: 1,
  },
});

export default DevicesList;
