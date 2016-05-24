/**
 * my react native demo
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

const styles = require('./style/index.css');

module.exports = class extends Component {

    constructor(props: {}) {
        super(props);
        this.propTypes = {
            onPress: React.PropTypes.func,
            label: React.PropTypes.string
        };
    }

    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={[styles.button, this.props.style]}>
                  <Text>
                    {this.props.label}
                  </Text>
                </View>
              </TouchableHighlight>
        );
  }
}
