/**
 * NodeMCU Alexa IOT Infrared Remote
 *
 * Convert old devices that are not compatible
 * with Alexa into compatible ones using infrared
 * signals.
 *
 * Mobile Application
 *
 * @desc Utility functions for DevicesList component.
 * @since August 18, 2022
 * @author Vlad-Marian Lupu
 */

import axios from 'axios';

/**
 * Changes the state of the specified switch.
 * @param {string} switchId The switch ID (e.g 1, 2, 3 etc.).
 */
export const onCustomSwitchPress = (switchId) => {
  const URL = `http://46.101.246.223:8081/cloud/change-switch-state`;
  axios({
    method: 'post',
    url: URL,
    data: {
      switchId: switchId,
    },
  }).then((response) => {
    console.log(response);
  })
      .catch((error) => console.error(error));
};

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
