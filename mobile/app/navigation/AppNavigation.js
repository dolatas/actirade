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
import LogoutScreen from '../screens/LogoutScreen';
import MainScreen from '../screens/MainScreen';
import NewsFeedScreen from '../screens/NewsFeedScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MessageScreen from '../screens/MessageScreen';
import NotificationScreen from '../screens/NotificationScreen';

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
          <Image source={require('../images/loginScreenBg.jpg')} style={styles.backgroundImage}>
            <LoaderScreen {...globalNavigatorProps} />
          </Image>
        )
      case "LoginScreen":
        return (
          <Image source={require('../images/loginScreenBg.jpg')} style={styles.backgroundImage}>
            <LoginScreen {...globalNavigatorProps} />
          </Image>
        )
      case "MainScreen":
        return (
          <Image source={require('../images/mainScreenBg.jpg')} style={styles.backgroundImage}>
            <MainScreen {...globalNavigatorProps} user={route.user} />
          </Image>
        )
      case "NewsFeedScreen":
        return (
          <NewsFeedScreen {...globalNavigatorProps} />
        )
      case "ActivitiesScreen":
        return (
          <ActivitiesScreen {...globalNavigatorProps} />
        )
      case "SettingsScreen":
        return (
          <SettingsScreen {...globalNavigatorProps} />
        )
      case "LogoutScreen":
        return (
          <LogoutScreen {...globalNavigatorProps} />
        )
      case "NotificationScreen":
        return (
          <Image source={require('../images/notificationScreenBg.jpg')} style={styles.backgroundImage}>
            <NotificationScreen {...globalNavigatorProps} user={route.user} />
          </Image>
        )
      case "MessageScreen":
        return (
          <Image source={require('../images/messageScreenBg.jpg')} style={styles.backgroundImage}>
            <MessageScreen {...globalNavigatorProps} user={route.user} />
          </Image>
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
