'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

var styles = require('../../css/style.js');
var FB_PHOTO_WIDTH = 110;

class UserPhoto extends Component {

  constructor(props) {
    super(props)

    this.state = {
    	photo: null,
    }
  }

  componentWillMount() {
	var _this = this;
	var user = this.props.user;
	var api = `https://graph.facebook.com/v2.3/${user.userId}/picture?width=${FB_PHOTO_WIDTH}&redirect=false&access_token=${user.token}`;

	fetch(api)
	  .then((response) => response.json())
	  .then((responseData) => {
	    _this.setState({
	      photo : {
	        url : responseData.data.url,
	        height: responseData.data.height,
	        width: responseData.data.width,
	      },
	    });
	  })
	  .done();
  }
  
  render() {
    var photo = this.state.photo;
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.fbUserPhoto}
          source={{uri: photo && photo.url}}
        />
      </View>
    );
  }

  propTypes: {
	user: React.PropTypes.object.isRequired,
  };
}

module.exports = UserPhoto