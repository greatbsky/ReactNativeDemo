/**
 * my react native demo
 */
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

const styles = require('./style/index.css');

module.exports = class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! I am back
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}
