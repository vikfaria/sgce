import React from 'react';
import {
 StyleSheet, 
 Text,
 View,
 TextInput,
 TouchableOpacity,
 AsyncStorage,
 Image,
 KeyboardAvoidingView
} from 'react-native';


//import { createStackNavigator } from 'react-navigation';



export default class Login2 extends React.Component{
 
 constructor(props){
     super(props);
     this.state = {
     username:'',
     password:'',
    },{ header: null };
 }



 render(){
     return( 
     
         <View style={styles.container}>

           <Image style={{width:60, height: 80 }}
           source={require('../img/logo2.png')}/>
           <Text style={styles.logoText}></Text>
           <Text style={styles.logoText}>Sistema de Gestão e Controlo de Carrinhas Escolares</Text>
           <Text style={styles.logoText}>SGCCE</Text>

            <TextInput style={styles.inputBox}
            onChangeText={(username) => this.setState({username})}
             underlineColorAndroid = 'rgba(0,0,0,0)'
             placeholder="Utilizador"
             placeholderTextColor = "#ffffff"
           />
          
             <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})}
                underlineColorAndroid = 'rgba(0,0,0,0)'
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
             />
           
           <TouchableOpacity style={styles.btn} onPress={this.login}>
           <Text style={styles.buttonText}>{this.props.type}Entar</Text>
            </TouchableOpacity>
             
             <View style={styles.signupTextCont}>
                <Text style={styles.signupText} >Não tem conta?</Text>
                <Text style={styles.signuButton}> Registe-se!</Text>
           </View>

          </View> 
       );
    }

    login = () => {

     fetch('http://www.universo-mz.com/txovaerp/testes/andre/SGCE/loginMobile.php', { 
     
           method: 'POST',
           headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
           },
           body: JSON.stringify({
               username: this.state.username,
               password: this.state.password,
              })

           })

           .then((response) => response.json())
           .then((res) => {
             

                if(res.success === true){
                 // AsyncStorage.setItem('username', res.user);
                  this.props.navigation.navigate('Profile');
                }
                else{
                  alert(res.message);
                }
           })
             .done();
         }
     }

const styles = StyleSheet.create({

 container: {
    backgroundColor: '#455a64',
    flexGrow: 1,
    alignItems:'center',
    justifyContent : 'center',
    
  },
  inputBox : {
    width : 300,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)', 
    borderRadius: 25,
    paddingHorizontal : 16,
    fontSize : 14,
    color : '#ffffff',
    marginVertical: 5,
   },
  btn:{
     width : 300,
     backgroundColor: '#1c313a', 
     borderRadius: 25,
     marginVertical: 7,
     paddingVertical: 12
   },
     buttonText: {
     fontSize: 16,
     fontWeight: '500',
     color:'#ffffff',
     textAlign:'center'
 },
   logoText : {
      marginVertical: 5,
      fontSize:20,
      color:'rgba(255, 255, 255, 0.7)'
    },
    signupTextCont : {
      alignItems:'flex-end',
      justifyContent : 'flex-end',
      paddingVertical: 25,
      flexDirection:'row'
  },
  signupText:{
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize:16
  },
  signuButton:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  }
});