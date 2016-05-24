/**
 * my react native demo
 */
import React, { Component } from 'react';
import {
    Image,
    CameraRoll
} from 'react-native';

const styles = require('./style/index.css');

module.exports = class extends Component {

    constructor(props: {}) {
        super(props);
        this.state = {
          photoSource: require('image!flowers')
        };

        CameraRoll.getPhotos({first: 6}).done((data) => {
            console.log(data);
            this.setState({
              photoSource: {uri: data.edges[5].node.image.uri}
            })},(error) => {
            console.warn(error);
          });
    }

    render() {
        return (
            <Image style={styles.backdrop} source={ this.state.photoSource } resizeMode='cover'>
                {this.props.children}
          </Image>
          );
  }
}
