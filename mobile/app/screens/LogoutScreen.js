/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

var styles = require('../css/style.js')


class LogoutScreen extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.mainContainer}>
          <Text style={styles.headerLogoText}>Actirade</Text>
      </View>
    );
  }

}

module.exports = LogoutScreen