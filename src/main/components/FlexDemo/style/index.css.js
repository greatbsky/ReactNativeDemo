/**
 * my react native demo
 */

import {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        borderColor: '#0099AA',
        borderWidth: 5,
        marginTop: 30
      },
    child: {
        flex: 1,
        borderColor: '#000000',
        borderWidth: 2,
        backgroundColor: '#666',
    },
    childText: {
        textAlign: 'center',
        fontSize: 24,
    }
});
