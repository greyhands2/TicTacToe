import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {  Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
//import Expo from "expo";
// note install expo-font
import { AppLoading } from 'expo';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true

    }

  }

  async componentWillMount(){
    await Expo.Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')

    });
    this.setState({ isLoading: false });
  }



  render(){
   if(this.state.isLoading){
     return (<AppLoading />);

   }
  return (
    <Container>
    <Header />
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://images.pexels.com/photos/775480/pexels-photo-775480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} />
            <Body>
              <Text>TonyStark</Text>
              <Text note>PlumberInc</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'https://images.pexels.com/photos/1129510/pexels-photo-1129510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>1Comment</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  </Container>
  );
}

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
