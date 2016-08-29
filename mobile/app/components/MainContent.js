'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, PropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import UserPhoto from './facebook/UserPhoto';
import UserInfo from './facebook/UserInfo';
var styles = require('../css/style.js');

class MainContent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let {closeDrawer} = this.props
    return (
      <View>
        <UserPhoto user={this.props.user} />
        <UserInfo user={this.props.user} />
        <View style={styles.mainContentBottomIcons} >
          <TouchableOpacity onPress={() => this._accept()}>
            <Icon style={styles.acceptIcon} name="ios-heart" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._decline()}>
            <Icon style={styles.declineIcon} name="ios-close-circle" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _accept() {

  }

  _decline() {

  }

}

module.exports = MainContent