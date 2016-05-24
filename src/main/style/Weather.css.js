/**
 * my react native demo
 */

import {
  StyleSheet
} from 'react-native';

var baseFontSize = 16;

module.exports = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: 'center',
    //   flexDirection: 'column',
      paddingTop: 30,
      borderWidth: 2,
      borderColor: '#000'
    },
    backdrop: {
      flex: 1,
      flexDirection: 'column'
    },
    overlay: {
      paddingTop: 5,
      backgroundColor: '#000000',
      opacity: 0.5,
      flexDirection: 'column',
      alignItems: 'center'
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      padding: 30
    },
    zipCode: {
      width: 100,
      height: 30,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 3,
      padding: 0,
      paddingHorizontal: 2,
      textAlign: 'center',
    },
    mainText: {
      flex: 1,
      fontSize: baseFontSize,
      color: '#FFFFFF'
    }
});
