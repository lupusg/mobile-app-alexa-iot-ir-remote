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
  StyleSheet, Button, View, Text, ScrollView, TouchableOpacity,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import {Color} from '../../constants/GlobalStyles.js';

import {api} from '../../services/ApiService.js';

import {changeSwitchState} from '../../services/ApiService.js';

export const requestSwitchNames = async () => {
  const result = await api.get('/signal');
  const buttons = result.data;
  const buttonTitles = {};

  buttons.forEach((button) => {
    if (button.Name !== 'n/a') {
      buttonTitles[button['AssignedButton'][13]] = button['Name'];
    }
  });
  return buttonTitles;
};


export const getSwitchList = async () => {
  const data = [];
  const buttonTitles = await requestSwitchNames();
  for (let index = 0; index < 10; ++index) {
    data.push({
      id: index,
      title:
        `${index + 1}. ${buttonTitles[index + 1] || `Unnamed`}`,
      onPress: changeSwitchState,
    });
  }
  return data;
};

const ButtonsComponent = () => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getSwitchList();
      setButtons(result);
    } catch (error) {
      console.error('Error fetching button titles:', error);
    }
  };

  const handleRefresh = async () => {
    // Refresh the buttons list
    await fetchData();
  };

  const renderButtons = () => {
    return buttons.map((button) => (
      <TouchableOpacity
        style={styles.listItem}
        key={button.id}
        onPress={() => {
          button.onPress(button.id + 1);
        }}
      >
        <Text>{button.title}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      <Button color={Color.main} title="Refresh" onPress={handleRefresh} />
      {renderButtons()}
    </View>
  );
};

const SwitchList = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ButtonsComponent />
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

export default SwitchList;
