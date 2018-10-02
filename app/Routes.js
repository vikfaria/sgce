import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Router, Stack, Scene} from 'react-native-router-flux';
import Login from './app/pages/Login';
import Principal from './app/pages/Principal';

export default class Logo extends React.Component {
 
  render() {
    return (
        <Router>  
          <Stack key="root">
          <Scene key="login" component={Login} title="Login"/>
          <Scene key="register" component={Principal} title="Register"/>
          </Stack>
        </Router>
    	)

}