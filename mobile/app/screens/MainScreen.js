'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, PropTypes, Navigator } from 'react-native';
import Drawer from 'react-native-drawer';

import MainHeader from '../components/MainHeader';
import ControlPanel from '../components/ControlPanel';

var styles = require('../css/style.js');

var drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

class MainScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      drawerOpen: false,
      drawerDisabled: false,
    }

  }

  closeDrawer = () => {
    this._drawer.close()
  };

  openDrawer = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="displace"
        content={
          <ControlPanel navigator={this.props.navigator} user={this.props.user} closeDrawer={this.closeDrawer} />
        }
        acceptDoubleTap
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.1, shadowRadius: 15}}}
        onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        captureGestures={false}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={(viewport) => {
          return 100
        }}
        closedDrawerOffset={() => 0}
        panOpenMask={0.2}
        negotiatePan
        >
          <MainHeader closeDrawer={this.closeDrawer} openDrawer={this.openDrawer} drawerOpen={this.state.drawerOpen} />
          <Text style={styles.mainContentContainer}> Main Content </Text>
      </Drawer>
    );
  }

}

module.exports = MainScreen