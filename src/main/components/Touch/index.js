/**
 * my react native demo
 */
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

const styles = require('./style/index.css');
var PressDemo = require('./PressDemo');
var PanDemo = require('./PanDemo');

module.exports = class extends Component {
    render() {
        return (
            <PanDemo />
        );
  }
}
