import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Button,
  Text,
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';


export default class ContactUs extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Contact us',
  };

  render() {
    return (
      <View>
        <Text>Contact us</Text>
      </View>
    );
  }
}
