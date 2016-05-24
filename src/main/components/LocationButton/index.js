/**
 * my react native demo
 */
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

const styles = require('./style/index.css');
var Button = require('./../Button');

class LocationButton extends Component {

    constructor(props: {}) {
        super(props);

        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        navigator.geolocation.getCurrentPosition(
          (initialPosition) => {
            console.log(initialPosition.coords.latitude + "|" + initialPosition.coords.longitude);
            this.props.onGetCoords(initialPosition.coords.latitude, initialPosition.coords.longitude);
          },
          (error) => {alert(error)},
          {enableHighAccuracy: false, timeout: 60000, maximumAge: 1000}
      );
    }

    render() {
        return (
            <Button label="Use CurrentLocation" style={styles.locationButton} onPress={this._onPress}/>
        );
  }
}
LocationButton.propTypes = {
    onGetCoords: React.PropTypes.func.isRequired
};
LocationButton.defaultProps = {};
module.exports = LocationButton;
