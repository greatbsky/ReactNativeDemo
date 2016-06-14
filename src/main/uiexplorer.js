/**
 * my react native demo
 */
'use strict';

import React, {
    Component
} from 'react';
import {
    Text,
    View,
    AsyncStorage,
    BackAndroid,
    DrawerLayoutAndroid,
    Linking,
    ToolbarAndroid,
    StatusBar,
    Dimensions
} from 'react-native';

const UIExplorerExampleList = require('./components/UIExplorerExampleList');
const styles = require('./style/uiexplorer.css');
const DRAWER_WIDTH_LEFT = 56;

module.exports = class extends Component {

    constructor(props) {
        super(props);
        this._handleAction = this._handleAction.bind(this);
        this._renderDrawerContent = this._renderDrawerContent.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
        BackAndroid.addEventListener('hardwareBackPress', this._handleBackButtonPress.bind(this));
    }

    componentDidMount() {
        console.log('componentDidMount');
        Linking.getInitialURL().then((url) => {
            console.log(url);
        });
    }

    _handleAction(action: Object): boolean {
        this.drawer && this.drawer.closeDrawer();
        return false;
    }

    _handleBackButtonPress() {
        if (this._overrideBackPressForDrawerLayout) {
            // This hack is necessary because drawer layout provides an imperative API
            // with open and close methods. This code would be cleaner if the drawer
            // layout provided an `isOpen` prop and allowed us to pass a `onDrawerClose` handler.
            this.drawer && this.drawer.closeDrawer();
            return true;
        }
        if (this._exampleRef && this._exampleRef.handleBackAction && this._exampleRef.handleBackAction()) {
            return true;
        }
        return this._handleAction({type: 'BackAction'});
    }

    render() {
        // if (!this.state) {
        //   return null;
        // }

        return (
            <DrawerLayoutAndroid ref={(c) => {this.drawer = c;}} drawerPosition={DrawerLayoutAndroid.positions.Left} drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT} keyboardDismissMode="on-drag"
                onDrawerOpen={() => {this._overrideBackPressForDrawerLayout = true;}}
                onDrawerClose={() => {this._overrideBackPressForDrawerLayout = false;}}
                renderNavigationView={this._renderDrawerContent}
                statusBarBackgroundColor="#589c90"
                >
                {this._renderApp()}
            </DrawerLayoutAndroid>
        );
    }

    _renderDrawerContent() {
        return (
          <View style={styles.drawerContentWrapper}>
            <UIExplorerExampleList
            //   list={UIExplorerList}
            //   displayTitleRow={true}
            //   disableSearch={true}
            //   onNavigate={this._handleAction}
            />
          </View>
        );
    }

    _renderApp() {
        const title = 'Title';
        // const index = stack.children.length <= 1 ?  1 : stack.index;

        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    logo={require('image!launcher_icon')}
                    navIcon={require('image!ic_menu_black_24dp')}
                    onIconClicked={() => this.drawer.openDrawer()}
                    style={styles.toolbar}
                    title={title}
                    />
                <UIExplorerExampleList />
            </View>
        );
    }


}
