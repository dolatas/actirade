'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

var styles = require('../../css/style.js');

class UserInfo extends Component {

  constructor(props) {
    super(props)

    this.state = {
    	info: null,
    }
  }

  componentWillMount() {
    var _this = this;
    var user = this.props.user;
    var api = `https://graph.facebook.com/v2.3/${user.userId}?fields=name,email&access_token=${user.token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        _this.setState({
          info : {
            name : responseData.name,
          },
        });
      })
      .done();
  }
  
  render() {
    let info = this.state.info;
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.fbUserInfo}>{ info && info.name }</Text>
      </View>
    );
  }

  propTypes: {
	  user: React.PropTypes.object.isRequired,
  };
}

module.exports = UserInfo