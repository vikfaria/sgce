import React from 'react';
import { 
  StyleSheet,
  Image,
  View
} from 'react-native';

import { Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class AppBody extends React.Component {
  render() {
    return (
      
        <Content style={styles.conteudo}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/logo2.png')} />
                <Body>
                  <Text>SGCCE</Text>
                  <Text note>Sistema de Gestão e Controlo de Carrinhas Escolares</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
              <Text></Text>
                <Image source={require('../img/school-buses.jpg')} style={{height: 200, width: 375, flex: 1}}/>
                <Text></Text>
                <Text>
                  O Presente sistema tem como objectivo, disponibilizar aos encarregados de educação a localização geografica em tempo real dos seus filhos, apartir de uma plantaforma web e mobile, via no google maps.
                </Text>
                <Text></Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#455a64'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 Likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
              <Text></Text>
                <Thumbnail source={require('../img/lo-carrinha.jpg')} />
                <Body>

                  <Text>Carrinhas - Escolares</Text>
                  <Text note>Detalhes das Carrinhas</Text>
                  <Text></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../img/carrinha.gif')} style={{height: 200, width: 375, flex: 1}}/>
                <Text></Text>
                <Text>
                  É possivel através da aplicação visualizar as fotos e condições nas quais se encontram as carrinhas que transportam os alunos.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#455a64'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 Likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
              <Text></Text>
                <Thumbnail source={require('../img/moto.png')} />
                <Body>

                  <Text>Motoristas</Text>
                  <Text note>Detalhes dos Motoristas</Text>
                  <Text></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../img/chapa.png')} style={{height: 200, width: 375, flex: 1}}/>
                <Text></Text>
                <Text>
                  O sistima disponibiliza a informação das credencias de todos os motoristas  registados no sistema, de modo que todos encarregados de educação tenham a informção necessaria e autorizem que os nossos motoristas qualificados transportem os seus filhos.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#455a64'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 Likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
           <Card>
            <CardItem>
              <Left>
              <Text></Text>
                <Thumbnail source={require('../img/route.png')} />
                <Body>

                  <Text>Rotas</Text>
                  <Text note>Detalhes das Rotas</Text>
                  <Text></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../img/route2.png')} style={{height: 200, width: 375, flex: 1}}/>
                <Text></Text>
                <Text>
                  O sistema também disponibiliza de uma lista de rotas na qual é praticada para transportar todos os alunos das suas casas as escolas e vice-versa, com esta funcionalidade o encarregado pode ter a informação do percurso tais como KM/H e tempo.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#455a64'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 Likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  bodyText: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    color: 'red',
    fontSize: 40
  },
  conteudo : {
    flex : 1,
    backgroundColor: '#F5FCFF'
  }
});

module.export = AppBody;