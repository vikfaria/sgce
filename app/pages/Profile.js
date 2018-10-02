import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { 
  AppRegistry
} from 'react-native';

import {Container, StyleProvider} from 'native-base';
import {Footer, FooterTab, Button, Icon} from  'native-base';
import AppBody from '../components/AppBody';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';


export default class Profile extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
     <Container>
         <AppHeader/>
         <AppBody/>
         <Footer>
          <FooterTab>
       
            <Button  onPress={this.navigate}>
              <Icon name="navigate"/>
              <Text style={styles.ex1} >Localizar Filho</Text>
            </Button>

            <Button >
              <Icon name="list"/>
              <Text style={styles.ex2}>Historicos</Text>
            </Button>
            <Button >
              <Icon name="bookmarks"/>
              <Text style={styles.ex3}>Detalhes</Text>
            </Button>
          </FooterTab>
        </Footer>
      
     </Container>
     </StyleProvider>
    );


  }
   navigate  = () => {
    this.props.navigation.navigate('location');
   }
}

const styles = StyleSheet.create({
  ex1 : {
    color: 'rgba(255, 255, 255, 255)'
  },
  ex2 : {
    color: 'rgba(255, 255, 255, 255)'
  },
  ex3 : {
    color: 'rgba(255, 255, 255, 0.7)'
  }
});

