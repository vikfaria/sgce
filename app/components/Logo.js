import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';


export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
           <Image style={{width:55, height: 70 }}
           source={require('../img/logo2.png')}/>
           <Text style={styles.logoText}>Bem Vindo </Text>
           <Text style={styles.logoText}>Sistema de Gestão e Controlo de Carrinhas Escolares</Text>
           <Text style={styles.logoText}>SGCCE</Text>
      </View>     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
   flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText : {
    marginVertical: 5,
    fontSize:20,
    color:'rgba(255, 255, 255, 0.7)'
  }
});