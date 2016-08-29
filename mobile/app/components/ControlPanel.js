'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, PropTypes, ListView, Navigator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import UserPhoto from './facebook/UserPhoto';
import UserInfo from './facebook/UserInfo';
var styles = require('../css/style.js');

const menu = [
  {title: "News Feed", page: "NewsFeedScreen"},
  {title: "Activities", page: "ActivitiesScreen"},
  {title: "Settings", page: "SettingsScreen"},
  {title: "Logout", page: "LogoutScreen"}
]

class ControlPanel extends Component {

  constructor(props) {
    super(props)

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      menuDataSource: ds.cloneWithRows(menu)
    }
  }

  render() {
    let {closeDrawer} = this.props
    return (
      <View>
        <UserPhoto user={this.props.user} />
        <UserInfo user={this.props.user} />
        <ListView style={styles.menuItemList} 
                  dataSource={this.state.menuDataSource} 
                  renderRow={ (menuItem) => {return this._renderMenuItemRow(menuItem) }}>
        </ListView>
        <TouchableOpacity onPress={closeDrawer}>
          <Icon style={styles.mainHeaderMenuIcon} name="ios-close-circle-outline" />
        </TouchableOpacity>
      </View>
    );
  }

  _renderMenuItemRow(menuItem) { 
    return (
      <TouchableOpacity style={styles.menuItemRow} onPress={(event) => this._navigateToMenuItemScreen(menuItem)} >
        <Text style={styles.menuItemTitle}>{ menuItem.title }</Text>
      </TouchableOpacity>
    )
  }

  _navigateToMenuItemScreen(menuItem) {
    this.props.navigator.push({
      ident: menuItem.page
    })
  }

  static propTypes = {
    closeDrawer: React.PropTypes.func.isRequired,
  };


}

module.exports = ControlPanel