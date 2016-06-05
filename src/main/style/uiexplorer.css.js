/**
 * my react native demo
 */

import {
  StyleSheet,
  StatusBar
} from 'react-native';

module.exports = StyleSheet.create({
    container: {
      flex: 1,
    },
    toolbar: {
      backgroundColor: '#E9EAED',
      height: 56,
    },
    drawerContentWrapper: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: 'white',
    },
});
