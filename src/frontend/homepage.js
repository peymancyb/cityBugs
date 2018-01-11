import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './style';
import FB from '../backend/firebase.js';
import * as firebase from 'firebase';
import Expo from 'expo';
import {
  Container,
  Content,
  Body,
  Left,
  Right,
} from 'native-base';
import {MaterialIcons} from '@expo/vector-icons';


export default class Homepage extends Component {

  async logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1536466276446364', {
      permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {

        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        firebase.auth().signInWithCredential(credential).catch(error => {
          console.log(error);
        })
      }
    }

 render() {
   return (
     <Container
       style={{backgroundColor:"#fdfdfd"}}>
       <Content>
         <Body>
           <Body>
             <Image
               resizeMode={"center"}
               style={{width: 80, height: 80}}
               source = {require('../img/cb.png')} />
               <Text
                 style={{fontWeight:"100",color:"#697f93"}}>CityBugs</Text>
           </Body>

           <Body
             style={{
               shadowColor:"#e7f0f9",
               shadowOpacity: 0.8,
               shadowOffset: { width: 0, height: 2 },
               flexDirection:"row",
               marginTop:100,
               width:150,
               height:50,
               borderRadius:50,
               borderColor:"#e7f0f9",
               borderWidth:0.8
             }}>
             <Left>
               <MaterialIcons name={"arrow-back"} size={20} color={"#0fe14f"}/>
             </Left>
             <Body
               style={{alignItems:"center",justifyContent:"center",}}
               >
               <Text
                 style={{color:"#4093db"}}>English</Text>
             </Body>
             <Right>
               <MaterialIcons name={"arrow-forward"} size={20} color={"#0fe14f"}/>
             </Right>
           </Body>

           <Body
             style={{marginTop:100}}>
             <TouchableHighlight
                onPress={this.logIn.bind(this)}
                 >
               <Image
                 style={{width: 60, height: 60}}
                  source={require('../img/fb.png')}/>
             </TouchableHighlight>
           </Body>
           <Body
             style={{marginTop:40}}>
             <Image
               style={{width: 160, height: 160}}
               source = {require('../img/city.png')}/>
           </Body>
         </Body>
       </Content>
     </Container>

   );
 }
}
