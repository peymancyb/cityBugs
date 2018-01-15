import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight,TouchableOpacity,Animated} from 'react-native';
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








function ChangeLanguage(props){
  console.log("Language: "+props.Language);
  return(
      <Text style={{color:"#4093db"}}>English</Text>
  );
}


export default class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      Languages: [
        'English',
        'Armenian',
        'Russian',
      ],
      num: 0,
    };
    this.ChangeLanguage = this.ChangeLanguage.bind(this);
  }

  ChangeLanguage(n){
    let currentPosition = this.state.num + n ;
    if(currentPosition > this.state.Languages.length-1){
      this.setState({
        num: 0,
      });
    }else if(currentPosition < 0){
      let maxLength = this.state.Languages.length-1;
      this.setState(()=>({
        num: maxLength
      }));
    }else{
      this.setState(()=>({
        num: this.state.num + n
      }));
    }
  }

//Facebook login
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
               width:200,
               height:50,
               borderRadius:50,
               borderColor:"#e7f0f9",
               borderWidth:0.8
             }}>
             <Left>
               <TouchableOpacity
                 onPress={()=>this.ChangeLanguage(-1)}
                 activeOpacity={1}>
                 <MaterialIcons name={"arrow-back"} size={20} color={"#0fe14f"}/>
               </TouchableOpacity>
             </Left>
              <Body>
               <Text style={{color:"#4093db"}}>
                  {this.state.Languages[this.state.num]}
               </Text>
              </Body>
             <Right>
               <TouchableOpacity
                 onPress={()=>this.ChangeLanguage(1)}
                 activeOpacity={1}>
               <MaterialIcons name={"arrow-forward"} size={20} color={"#0fe14f"}/>
             </TouchableOpacity>
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
