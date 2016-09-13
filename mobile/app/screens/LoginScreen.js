'use strict'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image, Navigator, TouchableOpacity, Platform } from 'react-native';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

import FBLoginView from './FBLoginView';

var styles = require('../css/style.js')
var LoginBehavior = {
  'ios': FBLoginManager.LoginBehaviors.Browser,
  'android': FBLoginManager.LoginBehaviors.Native
}


class LoginScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: null,
      isLoggedIn: false,
    };
  }
  
  render() {
    var _this = this;
    var user = this.state.user;
    return (
      <View style={styles.mainContainer}>
        <Image source={require('../images/logoImg.png')} style={styles.logoImg} />
        <View style={styles.bottomContainer}>
        <FBLogin
            buttonView={<FBLoginView />}
            ref={(fbLogin) => { this.fbLogin = fbLogin }}
            loginBehavior={LoginBehavior[Platform.OS]}
            permissions={["email","user_friends","user_birthday"]}
            onLogin={function(data){
              console.log("Logged in!");
              console.log(data);
              _this.setState({ user : data.credentials });
              _this.navigateToMain(data.credentials);
            }}
            onLogout={function(){
              console.log("Logged out.");
              _this.setState({ user : null });
            }}
            onLoginFound={function(data){
              console.log("Existing login found.");
              console.log(data);
              _this.setState({ user : data.credentials });
              _this.navigateToMain(data.credentials);
            }}
            onLoginNotFound={function(){
              console.log("No user logged in.");
              _this.setState({ user : null });
            }}
            onError={function(data){
              console.log("ERROR");
              console.log(data);
            }}
            onCancel={function(){
              console.log("User cancelled.");
            }}
            onPermissionsMissing={function(data){
              console.log("Check permissions!");
              console.log(data);
            }}
          />
        </View>
      </View>
    );
  }

  navigateToMain(data) {
    this.props.navigator.push({
      ident: "MainScreen",
      user: data,
    }) 
  }

}

module.exports = LoginScreen
