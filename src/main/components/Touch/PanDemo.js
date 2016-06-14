/**
 * my react native demo
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    PanResponder,
    StyleSheet
} from 'react-native';

// const styles = require('./style/index.css');
const CIRCLE_SIZE = 40;
const CIRCLE_COLOR = 'blue';
const CIRCLE_HIGHLIGHT_COLOR = 'green';

module.exports = class extends Component {

    constructor(props: {}) {
        super(props);

        this.state = {
            numberActiveTouches: 0,
            moveX: 0,
            moveY: 0,
            x0: 0,
            y0: 0,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0,
        };
        // Set some initial values.
         this._panResponder = {};
         this._previousLeft = 0;
         this._previousTop = 0;
         this._circleStyles = {};
         this.circle = null;

        this._highlight = this._highlight.bind(this);
        this._unHighlight = this._unHighlight.bind(this);
        this._updatePosition = this._updatePosition.bind(this);
        this._handleStartShouldSetPanResponder = this._handleStartShouldSetPanResponder.bind(this);
        this._handleMoveShouldSetPanResponder = this._handleMoveShouldSetPanResponder.bind(this);
        this._handlePanResponderGrant = this._handlePanResponderGrant.bind(this);
        this._handlePanResponderMove = this._handlePanResponderMove.bind(this);
        this._handlePanResponderEnd = this._handlePanResponderEnd.bind(this);
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
          onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
          onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
          onPanResponderGrant: this._handlePanResponderGrant,
          onPanResponderMove: this._handlePanResponderMove,
          onPanResponderRelease: this._handlePanResponderEnd,
          onPanResponderTerminate: this._handlePanResponderEnd,
        });
        this._previousLeft = 20;
        this._previousTop = 84;
        this._circleStyles = {
          style: {
            left: this._previousLeft,
            top: this._previousTop,
          }
        };
    }

    componentDidMount() {
        this._updatePosition();
    }

    render() {
        console.log(this.state);
        return (
            <View style={styles.container}>
                <View
                  ref={(circle) => {
                    this.circle = circle;
                  }}
                  style={styles.circle}
                  {...this._panResponder.panHandlers}/>
                <Text>
                  {this.state.numberActiveTouches} touches,
                  dx: {this.state.dx},
                  dy: {this.state.dy},
                  vx: {this.state.vx},
                  vy: {this.state.vy}
                </Text>
              </View>
        );
  }
  _highlight() {
   this.circle && this.circle.setNativeProps({
     style: {
       backgroundColor: CIRCLE_HIGHLIGHT_COLOR
     }
   });
 }
  _unHighlight() {
   this.circle && this.circle.setNativeProps({
     style: {
       backgroundColor: CIRCLE_COLOR
     }
   });
 }
  _updatePosition() {
    this.circle && this.circle.setNativeProps(this._circleStyles);
  }
  _handleStartShouldSetPanResponder(e: Object, gestureState: Object): boolean {
   // Should we become active when the user presses down on the circle?
   return true;
 }
  _handleMoveShouldSetPanResponder(e: Object, gestureState: Object): boolean {
     // Should we become active when the user moves a touch over the circle?
     return true;
   }
  _handlePanResponderGrant(e: Object, gestureState: Object) {
    this._highlight();
  }

    _handlePanResponderMove(e: Object, gestureState: Object) {
        this.setState({
      stateID: gestureState.stateID,
      moveX: gestureState.moveX,
      moveY: gestureState.moveY,
      x0: gestureState.x0,
      y0: gestureState.y0,
      dx: gestureState.dx,
      dy: gestureState.dy,
      vx: gestureState.vx,
      vy: gestureState.vy,
      numberActiveTouches: gestureState.numberActiveTouches
    });

    // Calculate current position using deltas
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;
    this._updatePosition();
    }

  _handlePanResponderEnd(e: Object, gestureState: Object) {
      this._unHighlight();
        this._previousLeft += gestureState.dx;
        this._previousTop += gestureState.dy;
  }
}

var styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: CIRCLE_COLOR,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
});
