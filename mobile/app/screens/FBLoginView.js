import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var styles = require('../css/style.js')

/**
  Example FBLoginView class
  Please note:
  - this is not meant to be a full example but highlights what you have access to
  - If you use a touchable component, you will need to set the onPress event like below
**/
class FBLoginView extends Component {
  static contextTypes = {
    isLoggedIn: React.PropTypes.bool,
    login: React.PropTypes.func,
    logout: React.PropTypes.func,
    props: React.PropTypes.object
    };

  constructor(props) {
      super(props);
    }

    render() {
        return (
          <View style={[]}>
            <Icon.Button name="facebook" style={styles.facebookBtnLogin} backgroundColor="#3b5998" onPress={() => { if(!this.context.isLoggedIn) { this.context.login() } else { this.context.logout() }}}>
             Login with Facebook
            </Icon.Button>
          </View>
      )
    }
}
module.exports = FBLoginView;