import axios from 'axios';
import Constants from 'expo-constants';

const api = axios.create({
  baseURL: Constants.expoConfig.extra.API_URL,
});

export const authorize = async (username, password) => {
  try {
    const response = await api.post('/auth/login', {username, password});
    const {token} = response.data;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    // console.log(response.headers['set-cookie'][0]);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

/**
 * Changes the state of the specified switch.
 * @param {string} switchId The switch ID (e.g 1, 2, 3 etc.).
 */
export const onCustomSwitchPress = async (switchId) => {
  try {
    await api.post('/cloud/change-switch-state', {switchId});
  } catch (error) {
    console.error(error);
  }
};
