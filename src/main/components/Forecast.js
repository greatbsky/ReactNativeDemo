/**
 * my react native demo
 */
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

const styles = require('../style/Forecast.css');

module.exports = class extends Component {
    render() {
        return (
          <View>
            <Text style={styles.bigText}>
              {this.props.main}
            </Text>
            <Text style={styles.mainText}>
              Current conditions: {this.props.description}
            </Text>
            <Text style={styles.bigText}>
              {this.props.temp}°F
            </Text>
          </View>
        );
  }
}
