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

        this.state = {
          pressing: false
        };

        this._onPressIn = this._onPressIn.bind(this);
        this._onPressOut = this._onPressOut.bind(this);
    }

    _onPressIn() {
        this.setState({pressing: true});
    }

    _onPressOut() {
        this.setState({pressing: false});
    }

    render() {
        console.log(this.state);
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPressIn={this._onPressIn}
                    onPressOut={this._onPressOut}
                    style={styles.touchable}>

                    <View style={styles.button}>
                        <Text style={styles.welcome}>
                            {this.state.pressing ? 'EEK!' : 'PUSH ME'}
                        </Text>
                    </View>

                </TouchableHighlight>
            </View>
        );
  }
}
