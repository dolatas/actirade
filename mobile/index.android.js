'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import AppNavigation from './app/navigation/AppNavigation';

class Actirade extends Component {
  render() {
    return (
      <AppNavigation initialRoute={{ident: "LoginScreen"}} />
    );
  }
}

AppRegistry.registerComponent('Actirade', () => Actirade);
