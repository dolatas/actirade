'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Navigator, Text, Image } from 'react-native';
import LoaderScreen from '../screens/LoaderScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';

var styles = require('../css/style.js')

class AppNavigator extends Component {

  constructor(props) {
    super(props)
  }

 _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "LoaderScreen":
        return (
          <Image source={require('../images/loginscreenbg.jpg')} style={styles.backgroundImage}>
            <LoaderScreen {...globalNavigatorProps} />
          </Image>
        )
      case "LoginScreen":
        return (
          <Image source={require('../images/loginscreenbg.jpg')} style={styles.backgroundImage}>
            <LoginScreen {...globalNavigatorProps} />
          </Image>
        )
      case "MainScreen":
        return (
          <Image source={require('../images/mainscreenbg.jpg')} style={styles.backgroundImage}>
            <MainScreen {...globalNavigatorProps} />
          </Image>
        )
      case "NotificationScreen":
        return (
          <NotificationScreen {...globalNavigatorProps} />
        )
      default:
        return (
          <Text>{`Something went wrong ${route}`}</Text>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
    )
  }
}

module.exports = AppNavigator
