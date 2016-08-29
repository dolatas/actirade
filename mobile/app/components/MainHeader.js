'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var styles = require('../css/style.js');


class MainHeader extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let {openDrawer} = this.props
    let {closeDrawer} = this.props
    let {drawerOpen} = this.props
    let toggleButton;
    
    if (!drawerOpen) {
	  toggleButton = <TouchableOpacity onPress={openDrawer} style={styles.mainHeaderLeft}>
        				<Icon style={styles.mainHeaderMenuIcon} name="ios-menu" />
    				 </TouchableOpacity>
	} else {
	  toggleButton = <TouchableOpacity onPress={closeDrawer} style={styles.mainHeaderLeft}>
					 	<Icon style={styles.mainHeaderMenuIcon} name="md-close" />
	  				 </TouchableOpacity>
	}
    return (
      <View style={styles.mainHeaderContainer}>
		{toggleButton}
        <View style={styles.mainHeaderRight}>
        	<TouchableOpacity onPress={() => this._navigateToMain()}>
	        	<Icon style={styles.mainHeaderHomeIcon} name="ios-home-outline" />
        	</TouchableOpacity>
        	<TouchableOpacity onPress={() => this._navigateToNotificationScreen()}>
	        	<Icon style={styles.mainHeaderNotificationIcon} name="ios-notifications-outline" />
        	</TouchableOpacity>
	        <TouchableOpacity onPress={() => this._navigateToMessageScreen()}>
	        	<Icon style={styles.mainHeaderTextIcon} name="ios-text-outline" />
        	</TouchableOpacity>
        </View>
      </View>
    );
  }

  _navigateToMain() {
    this.props.navigator.jumpTo(this.props.navigator.getCurrentRoutes(0)[1])
  }

  _navigateToNotificationScreen() {
    this.props.navigator.push({
      ident: "NotificationScreen"
    })
  }

  _navigateToMessageScreen() {
    this.props.navigator.push({
      ident: "MessageScreen",
      user: this.props.user
    })
  }

static propTypes = {
    openDrawer: React.PropTypes.func.isRequired,
    closeDrawer: React.PropTypes.func.isRequired,
  };

}

module.exports = MainHeader