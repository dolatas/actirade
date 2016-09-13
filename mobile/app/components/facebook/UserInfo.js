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
    var api = `https://graph.facebook.com/v2.3/${user.userId}?fields=name,email,birthday,gender&access_token=${user.token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        _this.setState({
          info : {
            name : responseData.name,
            birthday : responseData.birthday,
            gender : responseData.gender,
          },
        });
      })
      .done();
  }

  age(birthday) {
    if ( birthday != null ) {
      let birthdayParts = birthday.split("/");
      let fbDate = new Date(birthdayParts[2], birthdayParts[0] - 1, birthdayParts[1]);
      let ageDifMs = Date.now() - fbDate.getTime();
      let ageDate = new Date(ageDifMs);
      let age = Math.abs(ageDate.getUTCFullYear() - 1970);
      return age;
    }
  }
  
  render() {
    let info = this.state.info;
    let age = this.age(info && info.birthday);
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.fbUserInfo}>{ info && info.name }, { age }</Text>
      </View>
    );
  }

  propTypes: {
	  user: React.PropTypes.object.isRequired,
  };
}

module.exports = UserInfo