import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TruckList from './index';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TruckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

