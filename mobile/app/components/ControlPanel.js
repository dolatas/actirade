'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, PropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var styles = require('../css/style.js');

class ControlPanel extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    let {closeDrawer} = this.props
    return (
      <View>
        <Text>
          DRAWER
        </Text>
        <TouchableOpacity onPress={closeDrawer}>
          <Icon style={styles.mainHeaderMenuIcon} name="ios-close-circle-outline" />
        </TouchableOpacity>
      </View>
    );
  }

  static propTypes = {
    closeDrawer: React.PropTypes.func.isRequired,
  };


}

module.exports = ControlPanel