/**
 * my react native demo
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Image
} from 'react-native';

const styles = require('./style/Weather.css');
var Forecast = require('./components/Forecast');
var LocationButton = require('./components/LocationButton');
var PhotoBackdrop = require('./components/PhotoBackdrop');
var API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';
var WEATHER_API_KEY = 'f8bd7c88f671976aa3b9cd5999a16b55';

module.exports = class extends Component {

    constructor(props: {}) {
        super(props);

        var tile = this.props.tile;

        this.state = {
          zip: '',
          forecast: null
        };

        this._handleTextChange = this._handleTextChange.bind(this);
        this._getForecast = this._getForecast.bind(this);
        this._getForecastForCoords = this._getForecastForCoords.bind(this);
      }

    _handleTextChange(event) {
      var zip = event.nativeEvent.text;
      console.log(event.nativeEvent.text);
      this.setState({zip: zip});//10086
      fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',cn&appid=f8bd7c88f671976aa3b9cd5999a16b55')
        .then((response) => response.json()).then((responseJSON) => {
          this.setState({
            forecast: {
              main: responseJSON.weather[0].main,
              description: responseJSON.weather[0].description,
              temp: responseJSON.main.temp
            }
          });
        }).catch((error) => {
          console.warn(error);
        });
    }

      _getForecastForCoords(lat, lon) {
        this._getForecast(`${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`);
      }


      _getForecast(url, cb) {
        fetch(url).then((response) => response.json()).then((responseJSON) => {
            console.log(responseJSON);
            this.setState({
              forecast: {
                main: responseJSON.weather[0].main,
                description: responseJSON.weather[0].description,
                temp: responseJSON.main.temp
              }
            });
          }).catch((error) => {
            console.warn(error);
          });
      }

    render() {
      var content = null;
      if (this.state.forecast !== null) {
        content = <Forecast main={this.state.forecast.main} description={this.state.forecast.description} temp={this.state.forecast.temp}/>;
      }
      return (
        <View style={styles.container}>
          <PhotoBackdrop>
            <View style={styles.overlay}>
             <View style={styles.row}>
               <Text style={styles.mainText}>
                 Current weather for
               </Text>
               <TextInput style={[styles.zipCode, styles.mainText]} onSubmitEditing={this._handleTextChange} />
             </View>
             <View style={styles.row}>
                 <LocationButton onGetCoords={this._getForecastForCoords}/>
               </View>
             {content}
           </View>
          </PhotoBackdrop>
        </View>
      );
    }
}
