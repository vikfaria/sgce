import React from 'react';
import {
 StyleSheet, 
 Text,
 View,
 navigationOptions
} from 'react-native';
//import Login from './app/pages/Login';


import Login2 from './app/pages/Login2';
import Profile from './app/pages/Profile';
import location from './app/pages/location';
import { createStackNavigator } from 'react-navigation';


const Application = createStackNavigator(
   {

      Home: { screen : Login2 , navigationOptions: { header: null }},
      Profile: { screen : Profile , navigationOptions: { header: null }},
      location: { screen : location , navigationOptions: { header: null }},
     
     
});




export default class App extends React.Component{
  render(){
    return(
      <Application/>
      );
  }
}
















/*export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="#1c313a"
        barStyle= "light-content"
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent : 'center'
  }
});
*/