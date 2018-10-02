import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {Footer, FooterTab, Button, Icon} from  'native-base';


export default class AppFooter extends React.Component {
  render() {
    
    return (
     
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
    );

  }
   navigate  = () => {
    this.props.navigation('location');
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

module.export = AppFooter;