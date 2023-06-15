import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {authorize} from '../services/ApiService';

const SplashScreen = (props) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      await authorize();
    };

    setTimeout(() => {
      setAppIsReady(true);
    }, 2000);

    prepare()
        .catch(console.error);
  }, []);

  useEffect(() => {
    if (appIsReady) {
      props.navigation.replace('Home');
    }
  }, [appIsReady, props.navigation]);

  return (
    <View style={styles.root}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
