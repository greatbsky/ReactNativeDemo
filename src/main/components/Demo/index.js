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
          <View>
            <Text style={styles.bigText}>
              this is a demo
            </Text>
          </View>
        );
  }
}
