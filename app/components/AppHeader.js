import React from 'react';
import {Text, Image, StyleSheet } from 'react-native';
import {Header, Left, Button, Icon, Title, Body, Right, Container} from  'native-base';


export default class AppHeader extends React.Component {
  render() {
    return (
  
      <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>

           <Title style = {styles.ex1}>Bem Vindo</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  ex1 : {
    color: 'rgba(255, 255, 255, 255)'
  }
});
module.export = AppHeader;