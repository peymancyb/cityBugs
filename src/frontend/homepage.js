import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './style';
import FB from '../backend/firebase.js';
import * as firebase from 'firebase';

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
     <View style = {styles.homepageContainer}>
      <Image source = {require('../img/cb.jpeg')} style = {styles.cityBugLOGO} />

      <TouchableHighlight onPress = {this.logIn.bind(this)} style = {styles.facebookLOGO} >
      <Image source = {require('../img/fbLOGO.jpeg')} />
      </TouchableHighlight>

      <Image source = {require('../img/city.jpeg')} style = {styles.citybugIMAGE} />
     </View>
   );
 }
}
