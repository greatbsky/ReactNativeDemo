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
            <View style={styles.parent}>
              <View style={styles.child}>
                  <Text style={[styles.child, styles.childText]}> Child One </Text>
              </View>
              <View style={styles.child}>
                  <Text style={[styles.child, styles.childText]}> Child Two </Text>
              </View>
              <View style={styles.child}>
                  <Text style={[styles.child, styles.childText]}> Child Three </Text>
              </View>
            </View>
        );
  }
}
